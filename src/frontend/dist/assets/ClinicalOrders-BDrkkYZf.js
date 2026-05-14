import { r as reactExports, j as jsxRuntimeExports, F as FlaskConical, t as Scan, P as Pill } from "./index-4utdZC3E.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-CMzOpeqR.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
const SEED_ORDERS = [
  {
    id: 1,
    type: "Lab",
    patient: "Margaret Thompson",
    order: "CBC with Differential",
    status: "pending",
    date: "2026-03-15"
  },
  {
    id: 2,
    type: "Lab",
    patient: "Robert Chen",
    order: "HbA1c",
    status: "in-progress",
    date: "2026-03-15"
  },
  {
    id: 3,
    type: "Lab",
    patient: "Sarah Williams",
    order: "Comprehensive Metabolic Panel",
    status: "pending",
    date: "2026-03-14"
  },
  {
    id: 4,
    type: "Lab",
    patient: "James Mitchell",
    order: "Lipid Panel",
    status: "pending",
    date: "2026-03-14"
  },
  {
    id: 5,
    type: "Lab",
    patient: "Linda Nguyen",
    order: "Urinalysis",
    status: "in-progress",
    date: "2026-03-13"
  },
  {
    id: 6,
    type: "Imaging",
    patient: "Margaret Thompson",
    order: "Chest X-Ray PA/Lateral",
    status: "pending",
    date: "2026-03-15"
  },
  {
    id: 7,
    type: "Imaging",
    patient: "Robert Chen",
    order: "Abdominal Ultrasound",
    status: "in-progress",
    date: "2026-03-14"
  },
  {
    id: 8,
    type: "Imaging",
    patient: "David Park",
    order: "CT Head w/o Contrast",
    status: "pending",
    date: "2026-03-13"
  },
  {
    id: 9,
    type: "Prescription",
    patient: "Sarah Williams",
    order: "Metformin 500mg BID",
    status: "pending",
    date: "2026-03-15"
  },
  {
    id: 10,
    type: "Prescription",
    patient: "James Mitchell",
    order: "Lisinopril 10mg QD",
    status: "pending",
    date: "2026-03-15"
  },
  {
    id: 11,
    type: "Prescription",
    patient: "Linda Nguyen",
    order: "Atorvastatin 40mg QHS",
    status: "in-progress",
    date: "2026-03-14"
  },
  {
    id: 12,
    type: "Prescription",
    patient: "David Park",
    order: "Omeprazole 20mg QD",
    status: "pending",
    date: "2026-03-13"
  }
];
const TYPE_ICON = {
  Lab: FlaskConical,
  Imaging: Scan,
  Prescription: Pill
};
const TYPE_COLOR = {
  Lab: "text-primary",
  Imaging: "text-primary",
  Prescription: "text-success"
};
function ClinicalOrders({
  activePatientId,
  activePatientName,
  onClearFilter
}) {
  const [filter, setFilter] = reactExports.useState("All");
  const filtered = SEED_ORDERS.filter(
    (o) => filter === "All" || o.type === filter
  );
  const pendingLabs = SEED_ORDERS.filter((o) => o.type === "Lab").length;
  const pendingImaging = SEED_ORDERS.filter((o) => o.type === "Imaging").length;
  const pendingRx = SEED_ORDERS.filter((o) => o.type === "Prescription").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", "data-ocid": "orders.page", children: [
    activePatientId && activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientFilterBar,
      {
        patientName: activePatientName,
        onClear: onClearFilter ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-ocid": "orders.labs.card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground", children: pendingLabs }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Pending Labs" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-ocid": "orders.imaging.card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scan, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground", children: pendingImaging }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Pending Imaging" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-ocid": "orders.rx.card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-md bg-success/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-4 h-4 text-success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground", children: pendingRx }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Pending Rx" })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "orders.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Active Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["All", "Lab", "Imaging", "Prescription"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `orders.${f.toLowerCase()}.tab`,
            onClick: () => setFilter(f),
            className: `px-3 py-1 rounded-md text-xs font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`,
            children: f
          },
          f
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-28", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "orders.empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 5,
            className: "text-center text-muted-foreground py-8 text-sm",
            children: "No pending orders"
          }
        ) }) : filtered.map((order, idx) => {
          const Icon = TYPE_ICON[order.type];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `orders.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center gap-1.5 text-xs font-medium ${TYPE_COLOR[order.type]}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
                      order.type
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: order.patient }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: order.order }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-sm border ${order.status === "in-progress" ? "bg-primary/10 text-primary border-primary/30" : "bg-warning/10 text-warning border-warning/30"}`,
                    children: order.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: order.date })
              ]
            },
            order.id
          );
        }) })
      ] }) })
    ] })
  ] });
}
export {
  ClinicalOrders as default
};
