import { u as useDemoMode, f as useActor, r as reactExports, k as useQuery, j as jsxRuntimeExports, B as Button, l as ClipboardList } from "./index-4utdZC3E.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { D as Download } from "./download-CYVPrROH.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
import "./chevron-up-BvGEbEf0.js";
const actionBadge = {
  CREATE: "bg-success/10 text-success border border-success/30",
  UPDATE: "bg-primary/10 text-primary border border-primary/30",
  DELETE: "bg-destructive/10 text-destructive border border-destructive/30",
  READ: "bg-muted text-muted-foreground border border-border"
};
const ACTION_OPTIONS = ["ALL", "CREATE", "UPDATE", "DELETE", "READ"];
const ENTITY_OPTIONS = [
  "ALL",
  "Patient",
  "Encounter",
  "Appointment",
  "Prescription",
  "Invoice",
  "Claim",
  "Lab",
  "Imaging",
  "User"
];
function AuditLog() {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor, isFetching } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [actionFilter, setActionFilter] = reactExports.useState("ALL");
  const [entityFilter, setEntityFilter] = reactExports.useState("ALL");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const { data: logs = [], isLoading } = useQuery({
    queryKey: ["auditLogs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAuditLogs();
    },
    enabled: !!actor && (isDemoMode || !isFetching)
  });
  const loading = isLoading || !isDemoMode && isFetching;
  const filteredLogs = logs.filter((log) => {
    const action = String(log.action).toUpperCase();
    if (actionFilter !== "ALL" && action !== actionFilter) return false;
    if (entityFilter !== "ALL" && !String(log.entityType).toLowerCase().includes(entityFilter.toLowerCase()))
      return false;
    if (dateFrom) {
      const ts = new Date(Number(log.timestamp) / 1e6);
      if (ts < new Date(dateFrom)) return false;
    }
    if (dateTo) {
      const ts = new Date(Number(log.timestamp) / 1e6);
      const toDate = new Date(dateTo);
      toDate.setDate(toDate.getDate() + 1);
      if (ts > toDate) return false;
    }
    return true;
  });
  const handleExportCSV = () => {
    const headers = [
      "Actor",
      "Role",
      "Action",
      "Entity",
      "Entity ID",
      "Timestamp"
    ];
    const rows = filteredLogs.map((log) => [
      String(log.actorId),
      log.role ?? "—",
      String(log.action).toUpperCase(),
      log.entityType,
      String(log.entityId),
      new Date(Number(log.timestamp) / 1e6).toLocaleString()
    ]);
    const csvContent = [headers, ...rows].map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-log-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "audit.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card px-4 py-3 flex flex-wrap items-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: actionFilter, onValueChange: setActionFilter, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "h-7 text-xs w-36",
              "data-ocid": "audit.filter.action.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ACTION_OPTIONS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a, children: a }, a)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Entity Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: entityFilter, onValueChange: setEntityFilter, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "h-7 text-xs w-36",
              "data-ocid": "audit.filter.entity.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ENTITY_OPTIONS.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: e, children: e }, e)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Date From" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "date",
            value: dateFrom,
            onChange: (e) => setDateFrom(e.target.value),
            "data-ocid": "audit.filter.date_from.input",
            className: "h-7 px-2 text-xs border border-input bg-background text-foreground rounded-none focus:outline-none focus:ring-1 focus:ring-ring"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Date To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "date",
            value: dateTo,
            onChange: (e) => setDateTo(e.target.value),
            "data-ocid": "audit.filter.date_to.input",
            className: "h-7 px-2 text-xs border border-input bg-background text-foreground rounded-none focus:outline-none focus:ring-1 focus:ring-ring"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          "data-ocid": "audit.export.button",
          onClick: handleExportCSV,
          className: "h-7 text-xs gap-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
            "Export CSV"
          ]
        }
      ) })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card",
        "data-ocid": "audit.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-32" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: ["a", "b", "c", "d", "e", "f", "g", "h"].map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-32" })
          ] }, sk)) })
        ]
      }
    ),
    !loading && filteredLogs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card flex flex-col items-center justify-center py-16 gap-3",
        "data-ocid": "audit.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-8 h-8 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "No audit log entries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: logs.length > 0 ? "No entries match the current filters." : "Audit entries will appear here as users interact with the system." })
        ]
      }
    ),
    !loading && filteredLogs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "audit.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Actor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Entity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Entity ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Timestamp" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredLogs.map((log, i) => {
        const action = String(log.action).toUpperCase();
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `audit.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: String(log.actorId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: log.role ?? "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center text-xs font-semibold uppercase tracking-wide px-1.5 py-0.5 ${actionBadge[action] ?? actionBadge.READ}`,
                  children: action
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center bg-muted text-muted-foreground text-xs font-medium uppercase tracking-wide px-1.5 py-0.5", children: log.entityType }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: String(log.entityId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: new Date(
                Number(log.timestamp) / 1e6
              ).toLocaleString() })
            ]
          },
          String(log.id)
        );
      }) })
    ] }) })
  ] });
}
export {
  AuditLog as default
};
