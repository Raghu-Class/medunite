import { u as useDemoMode, f as useActor, r as reactExports, i as ue, j as jsxRuntimeExports, B as Button, p as React, C as ChevronDown } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
const billingStatusVariant = {
  paid: "success",
  submitted: "info",
  draft: "warning",
  rejected: "danger"
};
const SK_ROWS = ["sk-0", "sk-1", "sk-2", "sk-3", "sk-4"];
const SK_COLS = ["c0", "c1", "c2", "c3"];
function InsuranceEligibilityPanel() {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    patient: "",
    insuranceId: "",
    provider: ""
  });
  const [checking, setChecking] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const handleCheck = () => {
    if (!form.patient.trim() || !form.insuranceId.trim() || !form.provider)
      return;
    setChecking(true);
    setResult(null);
    setTimeout(() => {
      setChecking(false);
      setResult({
        plan: `${form.provider} Gold PPO`,
        deductible: "$1,500 individual / $3,000 family",
        copay: "$25 primary care / $50 specialist",
        status: "Active",
        coverage: "Jan 1, 2026 – Dec 31, 2026"
      });
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-sm overflow-hidden",
      "data-ocid": "billing.eligibility.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "billing.eligibility.toggle",
            onClick: () => {
              setOpen((v) => !v);
              setResult(null);
            },
            className: "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-muted-foreground",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground", children: "Insurance Eligibility Verification" })
              ] }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground mt-3 mb-3", children: "Verify a patient's insurance coverage before processing a claim." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "elig-patient",
                  className: "text-xs font-semibold uppercase tracking-wide",
                  children: "Patient Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "elig-patient",
                  "data-ocid": "billing.eligibility.patient.input",
                  placeholder: "Full name...",
                  value: form.patient,
                  onChange: (e) => setForm((p) => ({ ...p, patient: e.target.value })),
                  className: "h-8 text-[13px] mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "elig-id",
                  className: "text-xs font-semibold uppercase tracking-wide",
                  children: "Insurance ID"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "elig-id",
                  "data-ocid": "billing.eligibility.id.input",
                  placeholder: "Member ID...",
                  value: form.insuranceId,
                  onChange: (e) => setForm((p) => ({ ...p, insuranceId: e.target.value })),
                  className: "h-8 text-[13px] mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide", children: "Insurance Provider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.provider,
                  onValueChange: (v) => setForm((p) => ({ ...p, provider: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "billing.eligibility.provider.select",
                        className: "h-8 text-[13px] mt-1",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select provider..." })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                      "Aetna",
                      "Blue Cross",
                      "Cigna",
                      "United Health",
                      "Humana",
                      "Medicare",
                      "Medicaid"
                    ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "billing.eligibility.submit_button",
              onClick: handleCheck,
              disabled: checking || !form.patient.trim() || !form.insuranceId.trim() || !form.provider,
              className: "h-8 text-[12px]",
              size: "sm",
              children: checking ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin mr-1" }),
                " Checking..."
              ] }) : "Check Eligibility"
            }
          ),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-4 p-4 rounded-sm border border-success/0.3 bg-success/0.04",
              "data-ocid": "billing.eligibility.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "w-4 h-4 text-success",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2.5",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-success", children: "Eligibility Verified" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs px-2 py-0.5 rounded-sm font-semibold bg-success/0.1 text-success", children: result.status })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2 text-[12px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Plan: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: result.plan })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Coverage: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: result.coverage })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Deductible: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: result.deductible })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Copay: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: result.copay })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function computeAgingBuckets(invoices) {
  const buckets = [
    {
      label: "Current (0–30 days)",
      count: 0,
      total: 0,
      colorClass: "border-b-success text-success"
    },
    {
      label: "31–60 Days",
      count: 0,
      total: 0,
      colorClass: "border-b-warning text-warning"
    },
    {
      label: "61–90 Days",
      count: 0,
      total: 0,
      colorClass: "border-b-warning text-warning"
    },
    {
      label: "Over 90 Days",
      count: 0,
      total: 0,
      colorClass: "border-b-red-500 text-destructive/700"
    }
  ];
  invoices.forEach((inv, idx) => {
    const bucket = idx % 4;
    buckets[bucket].count++;
    buckets[bucket].total += Number(inv.amount);
  });
  return buckets;
}
function RevenueCycleAgingPanel({
  invoices,
  patients,
  onResubmit
}) {
  const [open, setOpen] = React.useState(true);
  const buckets = computeAgingBuckets(invoices);
  const deniedInvoices = invoices.filter(
    (inv) => inv.status === "denied" || inv.status === "rejected"
  );
  const DENIAL_REASONS = ["Missing prior auth", "Duplicate claim"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border bg-card overflow-hidden",
      "data-ocid": "billing.aging.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "billing.aging.toggle",
            onClick: () => setOpen((v) => !v),
            className: "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground", children: "Revenue Cycle Aging" }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-4 pb-4 pt-3 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: buckets.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `bg-background border border-border p-3 border-b-2 ${b.colorClass.split(" ")[0]}`,
              "data-ocid": `billing.aging.card.${i + 1}`,
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
                  " invoice",
                  b.count !== 1 ? "s" : ""
                ] })
              ]
            },
            b.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Denial Management" }),
            deniedInvoices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-muted-foreground py-3",
                "data-ocid": "billing.denial.empty_state",
                children: "No denied claims"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "billing.denial.table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-3", children: "Patient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-3", children: "Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-3", children: "Denial Reason" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-3", children: "Action" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: deniedInvoices.map((inv, i) => {
                const patient = patients.find(
                  (p) => p.id === inv.patientId
                );
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TableRow,
                  {
                    "data-ocid": `billing.denial.row.${i + 1}`,
                    className: "hover:bg-muted/30",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-3 py-2 font-medium", children: (patient == null ? void 0 : patient.name) ?? `Patient #${String(inv.patientId)}` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-mono text-sm px-3 py-2", children: [
                        "$",
                        Number(inv.amount).toLocaleString()
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-3 py-2 text-muted-foreground", children: DENIAL_REASONS[i % 2] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `billing.denial.resubmit_button.${i + 1}`,
                          onClick: () => onResubmit(inv.id),
                          className: "px-2.5 py-1 rounded-sm text-xs font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
                          children: "Resubmit"
                        }
                      ) })
                    ]
                  },
                  String(inv.id)
                );
              }) })
            ] }) })
          ] })
        ] })
      ]
    }
  );
}
function InvoiceRow({
  inv,
  patient,
  index,
  onUpdateStatus
}) {
  const [planOpen, setPlanOpen] = reactExports.useState(false);
  const [payNowOpen, setPayNowOpen] = reactExports.useState(false);
  const [eobOpen, setEobOpen] = reactExports.useState(false);
  const [plan, setPlan] = reactExports.useState(null);
  const [planDraft, setPlanDraft] = reactExports.useState({
    installmentAmount: "",
    frequency: "monthly",
    numPayments: ""
  });
  const [payAmount, setPayAmount] = reactExports.useState("");
  const [notes] = reactExports.useState({});
  const statusKey = inv.status in billingStatusVariant ? inv.status : "draft";
  const isPaid = inv.status === "paid";
  const isPartial = inv.status === "partial";
  const handleCreatePlan = () => {
    if (!planDraft.installmentAmount || !planDraft.numPayments) {
      ue.error("Please fill in all plan fields");
      return;
    }
    const newPlan = {
      ...planDraft,
      createdAt: (/* @__PURE__ */ new Date()).toLocaleDateString(),
      paidCount: 0
    };
    setPlan(newPlan);
    setPlanOpen(false);
    ue.success("Payment plan created");
  };
  const handlePayNow = () => {
    const amount = Number.parseFloat(payAmount);
    if (!amount || amount <= 0) {
      ue.error("Enter a valid payment amount");
      return;
    }
    const total = Number(inv.amount);
    const newStatus = amount >= total ? "paid" : "partial";
    onUpdateStatus(
      inv.id,
      newStatus,
      BigInt(Math.round(total - (newStatus === "paid" ? total : amount)))
    );
    setPayNowOpen(false);
    setPayAmount("");
    ue.success(
      newStatus === "paid" ? "Payment received — invoice marked as paid" : `Payment of $${amount.toLocaleString()} recorded`
    );
  };
  const nextPaymentDate = () => {
    if (!plan) return "";
    const days = plan.frequency === "weekly" ? 7 : plan.frequency === "bi-weekly" ? 14 : 30;
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString();
  };
  const remainingBalance = plan ? Number(inv.amount) - plan.paidCount * Number.parseFloat(plan.installmentAmount || "0") : Number(inv.amount);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      TableRow,
      {
        "data-ocid": `billing.row.${index + 1}`,
        className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            (patient == null ? void 0 : patient.name) ?? "—",
            plan && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "info", label: "Payment Plan" }),
            isPartial && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "warning", label: "Partial" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-mono text-sm px-4 py-2.5", children: [
            "$",
            Number(inv.amount).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatusBadge,
            {
              variant: billingStatusVariant[statusKey],
              label: inv.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
            !isPaid && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              !plan && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `billing.plan.toggle.${index + 1}`,
                  onClick: () => {
                    setPlanOpen((v) => !v);
                    setPayNowOpen(false);
                  },
                  className: "text-xs font-medium text-primary hover:underline flex items-center gap-1",
                  children: [
                    planOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                    "Payment Plan"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `billing.paynow.toggle.${index + 1}`,
                  onClick: () => {
                    setPayNowOpen((v) => !v);
                    setPlanOpen(false);
                  },
                  className: "text-xs font-medium text-success hover:underline flex items-center gap-1",
                  children: [
                    payNowOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                    "Pay Now"
                  ]
                }
              )
            ] }),
            (inv.status === "paid" || inv.status === "submitted") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `billing.eob.toggle.${index + 1}`,
                onClick: () => setEobOpen((v) => !v),
                className: "text-xs font-medium text-primary hover:underline flex items-center gap-1",
                children: [
                  eobOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                  "EOB"
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    planOpen && !plan && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": `billing.plan.panel.${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableCell,
      {
        colSpan: 4,
        className: "px-4 py-3 bg-primary/5 border-b border-primary/10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary", children: "Set Up Payment Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Installment Amount ($)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": `billing.plan.amount.input.${index + 1}`,
                  type: "number",
                  placeholder: "e.g. 50",
                  value: planDraft.installmentAmount,
                  onChange: (e) => setPlanDraft((p) => ({
                    ...p,
                    installmentAmount: e.target.value
                  })),
                  className: "h-7 text-xs mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Frequency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: planDraft.frequency,
                  onValueChange: (v) => setPlanDraft((p) => ({
                    ...p,
                    frequency: v
                  })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": `billing.plan.frequency.select.${index + 1}`,
                        className: "h-7 text-xs mt-1",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "bi-weekly", children: "Bi-Weekly" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Number of Payments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": `billing.plan.count.input.${index + 1}`,
                  type: "number",
                  placeholder: "e.g. 12",
                  value: planDraft.numPayments,
                  onChange: (e) => setPlanDraft((p) => ({
                    ...p,
                    numPayments: e.target.value
                  })),
                  className: "h-7 text-xs mt-1"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": `billing.plan.create_button.${index + 1}`,
                onClick: handleCreatePlan,
                className: "h-7 text-xs px-3",
                children: "Create Plan"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                "data-ocid": `billing.plan.cancel_button.${index + 1}`,
                onClick: () => setPlanOpen(false),
                className: "h-7 text-xs px-3",
                children: "Cancel"
              }
            )
          ] })
        ] })
      }
    ) }),
    plan && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": `billing.plan.details.${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableCell,
      {
        colSpan: 4,
        className: "px-4 py-3 bg-primary/3 border-b border-primary/10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-[12px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Installment: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "$",
              Number.parseFloat(plan.installmentAmount).toLocaleString(),
              " ",
              "/ ",
              plan.frequency
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Payments: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              plan.paidCount,
              " of ",
              plan.numPayments
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Next Due: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: nextPaymentDate() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Remaining: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-warning", children: [
              "$",
              remainingBalance.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `billing.plan.record_button.${index + 1}`,
              onClick: () => {
                setPlan(
                  (p) => p ? { ...p, paidCount: p.paidCount + 1 } : p
                );
                ue.success("Payment recorded");
              },
              className: "ml-auto text-xs font-medium text-success hover:underline",
              children: "Record Payment"
            }
          )
        ] })
      }
    ) }),
    payNowOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": `billing.paynow.panel.${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableCell,
      {
        colSpan: 4,
        className: "px-4 py-3 bg-success/0.05 border-b border-success/0.2",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-success", children: [
            "Submit Payment — Balance: $",
            Number(inv.amount).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Payment Amount ($)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": `billing.paynow.amount.input.${index + 1}`,
                  type: "number",
                  placeholder: "Enter amount...",
                  value: payAmount,
                  onChange: (e) => setPayAmount(e.target.value),
                  className: "h-7 text-xs mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Notes (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  "data-ocid": `billing.paynow.notes.textarea.${index + 1}`,
                  placeholder: "Payment notes...",
                  rows: 1,
                  className: "h-7 text-xs mt-1 min-h-0 py-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  "data-ocid": `billing.paynow.submit_button.${index + 1}`,
                  onClick: handlePayNow,
                  className: "h-7 text-xs px-3 bg-success hover:bg-success/0.9 text-white border-none",
                  children: "Submit Payment"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  "data-ocid": `billing.paynow.cancel_button.${index + 1}`,
                  onClick: () => setPayNowOpen(false),
                  className: "h-7 text-xs px-3",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ] })
      }
    ) }),
    eobOpen && (inv.status === "paid" || inv.status === "submitted") && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": `billing.eob.panel.${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableCell,
      {
        colSpan: 4,
        className: "px-4 py-3 bg-primary/4 border-b border-primary/10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary mb-2", children: "Explanation of Benefits (EOB)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-primary/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-primary/5/60", children: [
              "Service",
              "CPT Code",
              "Billed",
              "Allowed",
              "Adjustment",
              "Payer Paid",
              "Pt. Responsibility"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "px-3 py-1.5 text-left font-semibold text-xs uppercase tracking-wider text-muted-foreground",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              [
                {
                  service: "Office Visit",
                  cpt: "99213",
                  billed: 180,
                  allowed: 155,
                  adj: 25,
                  paid: 124,
                  pt: 31
                },
                {
                  service: "CBC w/ Differential",
                  cpt: "85025",
                  billed: 85,
                  allowed: 70,
                  adj: 15,
                  paid: 56,
                  pt: 14
                },
                {
                  service: "Comprehensive Metabolic Panel",
                  cpt: "80053",
                  billed: 95,
                  allowed: 80,
                  adj: 15,
                  paid: 64,
                  pt: 16
                }
              ].map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: ri % 2 === 1 ? "bg-muted/20" : "",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-foreground", children: row.service }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-muted-foreground", children: row.cpt }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 font-mono", children: [
                      "$",
                      row.billed
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 font-mono", children: [
                      "$",
                      row.allowed
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 font-mono text-warning", children: [
                      "-$",
                      row.adj
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 font-mono text-success", children: [
                      "$",
                      row.paid
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 font-mono text-primary", children: [
                      "$",
                      row.pt
                    ] })
                  ]
                },
                row.cpt
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-primary/15 bg-primary/5 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", colSpan: 2, children: "Totals" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono", children: "$360" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono", children: "$305" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-warning", children: "-$55" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-success", children: "$244" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-primary", children: "$61" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            "Processed by payer · Plan: PPO · Claim #",
            index + 1,
            "001-2026"
          ] })
        ] })
      }
    ) })
  ] });
}
function Billing({
  activePatientId,
  activePatientName,
  onClearFilter
}) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor, isFetching } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [invoices, setInvoices] = reactExports.useState([]);
  const [patients, setPatients] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    patientId: "",
    amount: "",
    status: "draft"
  });
  const loadData = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const [invoiceData, patientData] = await Promise.all([
        actor.listInvoices(),
        actor.listPatients()
      ]);
      setInvoices(invoiceData);
      setPatients(patientData);
    } catch {
      ue.error("Failed to load billing data");
    } finally {
      setLoading(false);
    }
  }, [actor]);
  reactExports.useEffect(() => {
    if (!actor) return;
    if (!isDemoMode && isFetching) return;
    setLoading(true);
    loadData();
  }, [actor, isFetching, loadData, isDemoMode]);
  const handleAdd = async () => {
    if (!form.patientId || !form.amount) {
      ue.error("Patient and amount required");
      return;
    }
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.createInvoice(
        BigInt(form.patientId),
        BigInt(Math.round(Number.parseFloat(form.amount))),
        form.status
      );
      ue.success("Invoice created");
      setShowForm(false);
      setForm({ patientId: "", amount: "", status: "draft" });
      await loadData();
    } catch {
      ue.error("Failed to create invoice");
    } finally {
      setSubmitting(false);
    }
  };
  const handleResubmit = (id) => {
    setInvoices(
      (prev) => prev.map(
        (inv) => inv.id === id ? { ...inv, status: "submitted" } : inv
      )
    );
    ue.success("Claim resubmitted");
  };
  const handleUpdateStatus = (id, status, _amount) => {
    setInvoices(
      (prev) => prev.map((inv) => inv.id === id ? { ...inv, status } : inv)
    );
    if (actor) {
      actor.updateInvoiceStatus(id, status).catch(() => {
      });
    }
  };
  const total = invoices.reduce((s, i) => s + Number(i.amount), 0);
  const paid = invoices.filter((i) => i.status === "paid").reduce((s, i) => s + Number(i.amount), 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "billing.page", children: [
    activePatientId && activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientFilterBar,
      {
        patientName: activePatientName,
        onClear: onClearFilter ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
        "data-ocid": "billing.primary_button",
        onClick: () => setShowForm((v) => !v),
        children: [
          showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
          "Create Invoice"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card p-5",
        "data-ocid": "billing.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "Create Invoice" }),
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
                        "data-ocid": "billing.patient.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: patients.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Amount ($)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "billing.amount.input",
                  type: "number",
                  value: form.amount,
                  onChange: (e) => setForm((p) => ({ ...p, amount: e.target.value })),
                  className: "mt-1 h-8 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "billing.submit_button",
                  size: "sm",
                  disabled: submitting,
                  className: "bg-primary text-primary-foreground hover:bg-primary/90",
                  onClick: handleAdd,
                  children: [
                    submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1.5 animate-spin" }) : null,
                    "Create Invoice"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "billing.cancel_button",
                  size: "sm",
                  variant: "outline",
                  onClick: () => setShowForm(false),
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RevenueCycleAgingPanel,
      {
        invoices,
        patients,
        onResubmit: handleResubmit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Total Invoiced" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold font-mono mt-1", children: [
          "$",
          loading ? "—" : total.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-success", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Collected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold font-mono mt-1 text-success", children: [
          "$",
          loading ? "—" : paid.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-warning", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Outstanding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold font-mono mt-1 text-warning", children: [
          "$",
          loading ? "—" : (total - paid).toLocaleString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Patients on Payment Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold font-mono mt-1 text-primary", children: "12" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 border-b-2 border-b-violet-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Active Plans Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold font-mono mt-1 text-violet-600", children: [
          "$4,200",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/mo" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "billing.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? SK_ROWS.map((rowKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "billing.loading_state", children: SK_COLS.map((colKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }) }, colKey)) }, rowKey)) : invoices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          colSpan: 4,
          className: "text-center text-muted-foreground py-10 text-sm",
          "data-ocid": "billing.empty_state",
          children: "No invoices yet"
        }
      ) }) : invoices.map((inv, i) => {
        const patient = patients.find((p) => p.id === inv.patientId);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          InvoiceRow,
          {
            inv,
            patient,
            index: i,
            onUpdateStatus: handleUpdateStatus
          },
          String(inv.id)
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InsuranceEligibilityPanel, {})
  ] });
}
export {
  Billing as default
};
