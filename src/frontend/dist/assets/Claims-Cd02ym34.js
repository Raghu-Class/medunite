import { u as useDemoMode, f as useActor, g as useQueryClient, r as reactExports, m as DEMO_CLAIMS, n as DEMO_PATIENTS, j as jsxRuntimeExports, B as Button, i as ue } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { b as useClaims, a as usePatients } from "./useBackendData-DW6vRqpq.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
const claimStatusVariant = (status) => {
  switch (status) {
    case "pending":
      return "warning";
    case "submitted":
      return "info";
    case "adjudicated":
      return "info";
    case "paid":
    case "approved":
      return "success";
    case "denied":
      return "danger";
    default:
      return "neutral";
  }
};
const nextStatus = {
  pending: "submitted",
  submitted: "adjudicated",
  adjudicated: "paid"
};
function ClaimsAgingCards({ claims }) {
  const buckets = [
    {
      label: "Current (0–30 days)",
      colorClass: "border-b-success text-success"
    },
    { label: "31–60 Days", colorClass: "border-b-warning text-warning" },
    { label: "61–90 Days", colorClass: "border-b-warning text-warning" },
    {
      label: "Over 90 Days",
      colorClass: "border-b-destructive text-destructive"
    }
  ].map((b, idx) => {
    const bClaims = claims.filter((_, i) => i % 4 === idx);
    return {
      ...b,
      count: bClaims.length,
      total: bClaims.reduce((s, c) => s + Number(c.totalAmount), 0)
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", "data-ocid": "claims.aging.panel", children: buckets.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-card border border-border p-3 border-b-2 ${b.colorClass.split(" ")[0]}`,
      "data-ocid": `claims.aging.card.${i + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground leading-tight mb-1.5", children: b.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: `text-lg font-bold font-mono ${b.colorClass.split(" ")[1]}`,
            children: [
              "$",
              b.total.toLocaleString()
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          b.count,
          " claim",
          b.count !== 1 ? "s" : ""
        ] })
      ]
    },
    b.label
  )) });
}
function Claims({ onNavigate }) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const queryClient = useQueryClient();
  const [claims, setClaims] = reactExports.useState([]);
  const [patients, setPatients] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [payerFilter, setPayerFilter] = reactExports.useState(() => {
    try {
      const p = JSON.parse(
        localStorage.getItem("medunite_prefs_Billing") || "{}"
      );
      if (p.payer) return p.payer;
    } catch {
    }
    return "All";
  });
  const [agingThreshold] = reactExports.useState(() => {
    try {
      const p = JSON.parse(
        localStorage.getItem("medunite_prefs_Billing") || "{}"
      );
      if (p.agingThreshold) return Number(p.agingThreshold);
    } catch {
    }
    return 60;
  });
  const PAYER_OPTIONS = [
    "All",
    "Medicare",
    "Medicaid",
    "Commercial",
    "Self-Pay"
  ];
  const [form, setForm] = reactExports.useState({
    patientId: "",
    payer: "",
    amount: "",
    serviceDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    cptCodes: "",
    diagnosisCodes: ""
  });
  const { data: claimsData, isLoading: claimsLoading } = useClaims();
  const { data: patientsData, isLoading: patientsLoading } = usePatients();
  reactExports.useEffect(() => {
    if (isDemoMode) return;
    if (claimsData) {
      setClaims(claimsData);
    }
    if (patientsData) {
      setPatients(patientsData);
    }
    if (!claimsLoading && !patientsLoading) setLoading(false);
  }, [claimsData, patientsData, claimsLoading, patientsLoading, isDemoMode]);
  reactExports.useEffect(() => {
    if (!isDemoMode || !actor) return;
    setLoading(true);
    Promise.all([actor.listClaims(), actor.listPatients()]).then(([claimData, patientData]) => {
      const backendClaims = claimData;
      const backendIds = new Set(backendClaims.map((c) => c.id));
      const demoClaims = DEMO_CLAIMS.map(
        (c) => ({
          id: BigInt(c.id),
          patientId: typeof c.patientId === "bigint" ? c.patientId : BigInt(c.patientId ?? 0),
          patientName: c.patientName,
          claimNumber: c.claimNumber ?? `CLM-${c.id}`,
          insurerId: BigInt(0),
          totalAmount: BigInt(Math.round(c.billedAmount ?? 0)),
          status: c.status,
          serviceDate: c.serviceDate ?? "",
          cptCodes: Array.isArray(c.cptCodes) ? c.cptCodes.join(", ") : c.cptCodes ?? "",
          diagnosisCodes: Array.isArray(c.diagnosisCodes) ? c.diagnosisCodes.join(", ") : c.diagnosisCodes ?? "",
          submittedAt: BigInt(0)
        })
      );
      const merged = [
        ...backendClaims,
        ...demoClaims.filter((c) => !backendIds.has(c.id))
      ];
      setClaims(merged);
      setPatients(patientData);
    }).catch(() => {
      setClaims(
        DEMO_CLAIMS.map((c) => ({
          id: BigInt(c.id),
          patientId: typeof c.patientId === "bigint" ? c.patientId : BigInt(c.patientId ?? 0),
          patientName: c.patientName,
          claimNumber: c.claimNumber ?? `CLM-${c.id}`,
          insurerId: BigInt(0),
          totalAmount: BigInt(Math.round(c.billedAmount ?? 0)),
          status: c.status,
          serviceDate: c.serviceDate ?? "",
          cptCodes: Array.isArray(c.cptCodes) ? c.cptCodes.join(", ") : c.cptCodes ?? "",
          diagnosisCodes: Array.isArray(c.diagnosisCodes) ? c.diagnosisCodes.join(", ") : c.diagnosisCodes ?? "",
          submittedAt: BigInt(0)
        }))
      );
      setPatients(DEMO_PATIENTS);
    }).finally(() => setLoading(false));
  }, [actor, isDemoMode]);
  const handleAdd = async () => {
    if (!form.patientId || !form.payer || !form.amount) {
      ue.error("All fields required");
      return;
    }
    if (!actor) return;
    setSubmitting(true);
    try {
      const patient = patientList.find((p) => String(p.id) === form.patientId);
      const claimNumber = `CLM-${Date.now()}`;
      await actor.createClaim(
        BigInt(form.patientId),
        (patient == null ? void 0 : patient.name) ?? "Unknown",
        claimNumber,
        BigInt(0),
        // insurerId placeholder
        BigInt(Math.round(Number.parseFloat(form.amount))),
        form.serviceDate,
        form.cptCodes,
        form.diagnosisCodes
      );
      ue.success("Claim submitted");
      setShowForm(false);
      setForm({
        patientId: "",
        payer: "",
        amount: "",
        serviceDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        cptCodes: "",
        diagnosisCodes: ""
      });
      queryClient.invalidateQueries({ queryKey: ["claims"] });
    } catch {
      ue.error("Failed to submit claim");
    } finally {
      setSubmitting(false);
    }
  };
  const handleAdvanceStatus = async (id, currentStatus) => {
    const next = nextStatus[currentStatus];
    if (!next || !actor) return;
    try {
      await actor.updateClaimStatus(id, next);
      setClaims(
        (prev) => prev.map((c) => c.id === id ? { ...c, status: next } : c)
      );
      ue.success(`Claim advanced to ${next}`);
    } catch {
      ue.error("Failed to update claim status");
    }
  };
  const patientList = patients.length > 0 ? patients : DEMO_PATIENTS;
  const total = claims.reduce((s, c) => s + Number(c.totalAmount), 0);
  const approved = claims.filter((c) => c.status === "paid" || c.status === "approved").reduce((s, c) => s + Number(c.totalAmount), 0);
  const denied = claims.filter((c) => c.status === "denied").reduce((s, c) => s + Number(c.totalAmount), 0);
  const filteredClaims = claims;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "claims.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "Flagging claims older than ",
      agingThreshold,
      " days"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimsAgingCards, { claims }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 flex-wrap", children: PAYER_OPTIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setPayerFilter(p),
        className: [
          "px-3 py-1 text-xs rounded border transition-colors",
          payerFilter === p ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
        ].join(" "),
        children: p
      },
      p
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
        "data-ocid": "claims.primary_button",
        onClick: () => setShowForm((v) => !v),
        children: [
          showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
          "New Claim"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card p-5",
        "data-ocid": "claims.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "New Claim" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  onValueChange: (v) => setForm((p) => ({ ...p, patientId: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "claims.patient.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: patientList.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Payer / Insurer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "claims.payer.input",
                  value: form.payer,
                  onChange: (e) => setForm((p) => ({ ...p, payer: e.target.value })),
                  className: "mt-1 h-8 text-sm",
                  placeholder: "e.g. BlueCross BlueShield"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Amount ($)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "claims.amount.input",
                  type: "number",
                  value: form.amount,
                  onChange: (e) => setForm((p) => ({ ...p, amount: e.target.value })),
                  className: "mt-1 h-8 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Service Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "claims.serviceDate.input",
                  type: "date",
                  value: form.serviceDate,
                  onChange: (e) => setForm((p) => ({ ...p, serviceDate: e.target.value })),
                  className: "mt-1 h-8 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "CPT Codes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "claims.cptCodes.input",
                  value: form.cptCodes,
                  onChange: (e) => setForm((p) => ({ ...p, cptCodes: e.target.value })),
                  className: "mt-1 h-8 text-sm",
                  placeholder: "e.g. 99213, 36415"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Diagnosis Codes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "claims.diagnosisCodes.input",
                  value: form.diagnosisCodes,
                  onChange: (e) => setForm((p) => ({ ...p, diagnosisCodes: e.target.value })),
                  className: "mt-1 h-8 text-sm",
                  placeholder: "e.g. E11.9, I10"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "claims.submit_button",
                size: "sm",
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                disabled: submitting,
                onClick: handleAdd,
                children: [
                  submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1.5 animate-spin" }) : null,
                  "Submit Claim"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "claims.cancel_button",
                size: "sm",
                variant: "outline",
                onClick: () => setShowForm(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Total Claimed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold font-mono mt-1", children: [
          "$",
          total.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-emerald-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Approved / Paid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold font-mono mt-1 text-success", children: [
          "$",
          approved.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-red-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Denied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold font-mono mt-1 text-destructive", children: [
          "$",
          denied.toLocaleString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "claims.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Claim #" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Service Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? ["sk-0", "sk-1", "sk-2", "sk-3"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "claims.loading_state", children: ["c0", "c1", "c2", "c3", "c4", "c5"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }) }, c)) }, k)) : claims.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          colSpan: 6,
          className: "text-center py-8 text-sm text-muted-foreground",
          "data-ocid": "claims.empty_state",
          children: "No claims found."
        }
      ) }) : filteredClaims.map((claim, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TableRow,
        {
          "data-ocid": `claims.row.${i + 1}`,
          className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "cursor-pointer text-primary hover:underline font-medium",
                "data-ocid": "claims.patient.link",
                onClick: () => onNavigate == null ? void 0 : onNavigate("patients"),
                children: claim.patientName
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs px-4 py-2.5", children: claim.claimNumber }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableCell,
              {
                className: (() => {
                  const days = Math.floor(
                    (Date.now() - new Date(claim.serviceDate).getTime()) / 864e5
                  );
                  return days > agingThreshold ? "text-xs px-4 py-2.5 text-warning font-semibold" : "text-xs text-muted-foreground px-4 py-2.5";
                })(),
                children: claim.serviceDate
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-mono text-sm px-4 py-2.5", children: [
              "$",
              Number(claim.totalAmount).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: claimStatusVariant(claim.status),
                label: claim.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: nextStatus[claim.status] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `claims.edit_button.${i + 1}`,
                onClick: () => handleAdvanceStatus(claim.id, claim.status),
                className: "h-6 px-2 text-xs font-semibold bg-primary text-primary-foreground rounded-sm hover:bg-primary/90",
                children: [
                  "Advance → ",
                  nextStatus[claim.status]
                ]
              }
            ) })
          ]
        },
        String(claim.id)
      )) })
    ] }) })
  ] });
}
export {
  Claims as default
};
