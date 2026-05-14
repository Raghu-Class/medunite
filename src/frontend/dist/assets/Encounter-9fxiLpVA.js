import { c as createLucideIcon, j as jsxRuntimeExports, d as Clock, p as React, T as TriangleAlert, C as ChevronDown, F as FlaskConical, l as ClipboardList, B as Button, v as BookOpen, R as Receipt, f as useActor, r as reactExports, i as ue, z as DEMO_ALLERGIES, e as cn } from "./index-4utdZC3E.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { C as CircleCheckBig } from "./circle-check-big-BlGxcqiI.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { T as Trash2 } from "./trash-2-BcsATfdj.js";
import { I as Info } from "./info-bbvBvbxz.js";
import { C as CircleX, c as checkInteractions } from "./drugInteractions-bwHfQfeU.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { P as PERSONAL_PHRASES, C as CLINIC_PHRASES } from "./SmartPhrases-DhdxWgVo.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { M as Mic } from "./mic-C7TgG12d.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
import { S as Save } from "./save-BcJO_mj1.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
import "./tabs-D2sDVimt.js";
import "./pen-B9xSOcM5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function calcAge(dob) {
  const birth = new Date(dob);
  const now = /* @__PURE__ */ new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || m === 0 && now.getDate() < birth.getDate()) age--;
  return age;
}
function EncounterHeader({
  patient,
  appointment,
  activeMeds,
  activeAppointmentId,
  isSigned,
  autosaveStatus,
  onBack
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "encounter.back_button",
          onClick: onBack,
          className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
            "Back to Appointments"
          ]
        }
      ),
      isSigned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-success/10 text-success border border-success/20", children: "Signed" }),
      !isSigned && autosaveStatus !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: `inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded border ${autosaveStatus === "saved" ? "bg-success/10 text-success border-success/25" : "bg-muted text-muted-foreground border-border"}`,
          "data-ocid": "encounter.autosave.indicator",
          "aria-live": "polite",
          children: [
            autosaveStatus === "saved" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
            autosaveStatus === "saved" ? "All changes saved" : "Saving..."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "encounter.panel",
        className: "border border-border px-5 py-3 mb-5 flex flex-wrap items-start gap-6 bg-muted/30",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Patient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: patient == null ? void 0 : patient.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: patient == null ? void 0 : patient.mrn })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Appt Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: appointment ? appointment.date.replace("T", " ") : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "#",
              String(activeAppointmentId)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "DOB / Age" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: (patient == null ? void 0 : patient.dateOfBirth) ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: patient ? `${calcAge(patient.dateOfBirth)} yrs` : "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Allergies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: "Review chart" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-48", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Active Medications" }),
            activeMeds.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: activeMeds.map((m) => `${m.name} ${m.dose}`).join(" · ") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "None on file" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5", children: "Blood Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "\\u2014" })
          ] })
        ]
      }
    )
  ] });
}
const ORDER_SETS = [
  {
    id: "annual-physical",
    name: "Annual Physical",
    description: "Standard preventive health screening panel",
    orders: [
      { type: "lab", name: "CBC" },
      { type: "lab", name: "CMP (Comprehensive Metabolic Panel)" },
      { type: "lab", name: "Lipid Panel" },
      { type: "lab", name: "HbA1c" },
      { type: "lab", name: "TSH" },
      { type: "lab", name: "Urinalysis" },
      { type: "imaging", name: "12-Lead ECG" }
    ]
  },
  {
    id: "diabetic-workup",
    name: "Diabetic Workup",
    description: "Comprehensive diabetes monitoring and complication screening",
    orders: [
      { type: "lab", name: "HbA1c" },
      { type: "lab", name: "Fasting Glucose" },
      { type: "lab", name: "CMP (Comprehensive Metabolic Panel)" },
      { type: "lab", name: "Urine Microalbumin" },
      { type: "lab", name: "Lipid Panel" },
      { type: "imaging", name: "Ophthalmology Referral" }
    ]
  },
  {
    id: "cardiac-workup",
    name: "Cardiac Workup",
    description: "Acute and baseline cardiac evaluation panel",
    orders: [
      { type: "imaging", name: "12-Lead ECG" },
      { type: "lab", name: "Troponin I (High Sensitivity)" },
      { type: "lab", name: "BMP (Basic Metabolic Panel)" },
      { type: "imaging", name: "Chest X-Ray" },
      { type: "lab", name: "BNP (B-type Natriuretic Peptide)" }
    ]
  },
  {
    id: "hypertension-panel",
    name: "Hypertension Panel",
    description: "Evaluate secondary causes and end-organ effects of hypertension",
    orders: [
      { type: "lab", name: "BMP (Basic Metabolic Panel)" },
      { type: "lab", name: "CBC" },
      { type: "lab", name: "Urinalysis" },
      { type: "lab", name: "Lipid Panel" },
      { type: "imaging", name: "12-Lead ECG" },
      { type: "imaging", name: "Renal Ultrasound" }
    ]
  },
  {
    id: "pre-op-panel",
    name: "Pre-op Panel",
    description: "Preoperative clearance laboratory and imaging workup",
    orders: [
      { type: "lab", name: "CBC" },
      { type: "lab", name: "BMP (Basic Metabolic Panel)" },
      { type: "lab", name: "PT/INR" },
      { type: "lab", name: "PTT" },
      { type: "lab", name: "Type & Screen" },
      { type: "imaging", name: "12-Lead ECG" },
      { type: "imaging", name: "Chest X-Ray" }
    ]
  },
  {
    id: "thyroid-panel",
    name: "Thyroid Panel",
    description: "Comprehensive thyroid function and autoimmune evaluation",
    orders: [
      { type: "lab", name: "TSH" },
      { type: "lab", name: "Free T4" },
      { type: "lab", name: "Free T3" },
      { type: "lab", name: "Anti-TPO Antibodies" }
    ]
  },
  {
    id: "renal-panel",
    name: "Renal Panel",
    description: "Assess renal function and detect early kidney disease",
    orders: [
      { type: "lab", name: "BMP (Basic Metabolic Panel)" },
      { type: "lab", name: "Urinalysis" },
      { type: "lab", name: "Urine Microalbumin/Creatinine Ratio" },
      { type: "imaging", name: "Renal Ultrasound" }
    ]
  }
];
const ROUTE_OPTIONS = ["PO", "IV", "IM", "SQ", "Topical", "Inhaled"];
const SEVERITY_STYLES = {
  contraindicated: {
    container: "bg-destructive/10 border border-destructive/30 text-destructive",
    badge: "bg-destructive text-destructive-foreground",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
    label: "⛔ CONTRAINDICATED"
  },
  major: {
    container: "bg-warning/10 border border-warning/30 text-warning",
    badge: "bg-warning text-warning-foreground",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
    label: "⚠ MAJOR"
  },
  moderate: {
    container: "bg-warning/10 border border-warning/20 text-warning",
    badge: "bg-warning text-warning-foreground",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
    label: "! MODERATE"
  },
  minor: {
    container: "bg-slate-50 border border-slate-200 text-slate-700",
    badge: "bg-slate-400 text-white",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3.5 h-3.5" }),
    label: "ℹ MINOR"
  }
};
function InteractionAlertCard({ alert }) {
  const style = SEVERITY_STYLES[alert.severity];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `px-3 py-2.5 text-xs ${style.container}`,
      "data-ocid": `encounter.rx.interaction.${alert.severity}`,
      role: "alert",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-bold uppercase tracking-wider ${style.badge}`,
              children: [
                style.icon,
                style.label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
            alert.drug1,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "×" }),
            " ",
            alert.drug2
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Clinical Effect:" }),
          " ",
          alert.clinicalEffect
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Mechanism:" }),
          " ",
          alert.mechanism
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Management:" }),
          " ",
          alert.management
        ] })
      ]
    }
  );
}
function OrderSetsPanel({
  onApply,
  disabled
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [applied, setApplied] = React.useState(null);
  const handleApply = (set) => {
    onApply(set);
    setApplied(set.id);
    setTimeout(() => setApplied(null), 2e3);
  };
  const labIcons = {
    "annual-physical": "🩺",
    "diabetic-workup": "🩸",
    "cardiac-workup": "❤️",
    "hypertension-panel": "💊",
    "pre-op-panel": "🔬",
    "thyroid-panel": "⚗️",
    "renal-panel": "💧"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border rounded-sm mb-3 overflow-hidden",
      "data-ocid": "encounter.order-sets.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "encounter.order-sets.toggle",
            onClick: () => setExpanded((v) => !v),
            className: "w-full flex items-center justify-between px-4 py-2.5 bg-muted/40 hover:bg-muted/60 transition-colors border-b border-border",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-xs font-semibold text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 text-warning" }),
                "Quick Order Sets",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center px-1.5 py-0.5 rounded-sm text-xs font-bold bg-warning/10 text-warning border border-warning/30", children: ORDER_SETS.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: expanded ? "▲ Collapse" : "▼ Expand to apply" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Click any order set to automatically populate all orders. Duplicates are skipped." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2", children: ORDER_SETS.map((set) => {
            const isApplied = applied === set.id;
            const labCount = set.orders.filter(
              (o) => o.type === "lab"
            ).length;
            const imgCount = set.orders.filter(
              (o) => o.type === "imaging"
            ).length;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `encounter.order-sets.${set.id}.button`,
                disabled,
                onClick: () => handleApply(set),
                title: set.description,
                className: [
                  "group relative flex flex-col items-start gap-1 p-3 rounded-sm border text-left transition-all",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  isApplied ? "border-success/40 bg-success/10 text-success" : "border-border bg-card hover:border-primary/50 hover:bg-primary/5 hover:shadow-sm"
                ].join(" "),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", "aria-hidden": true, children: labIcons[set.id] ?? "📋" }),
                    isApplied ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-success bg-success/10 border border-success/30 px-1.5 py-0.5 rounded-sm", children: "✓ Applied" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-muted-foreground bg-muted border border-border px-1.5 py-0.5 rounded-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all", children: [
                      set.orders.length,
                      " orders"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground leading-tight", children: set.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
                    labCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-primary bg-primary/5 border border-primary/20 px-1 py-0.5 rounded-sm", children: [
                      labCount,
                      " lab"
                    ] }),
                    imgCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-primary bg-primary/8 border border-primary/20 px-1 py-0.5 rounded-sm", children: [
                      imgCount,
                      " imaging"
                    ] })
                  ] })
                ]
              },
              set.id
            );
          }) })
        ] })
      ]
    }
  );
}
function EncounterOrders({
  orders,
  setOrders,
  prescriptions,
  setPrescriptions,
  showOrderForm,
  setShowOrderForm,
  newOrder,
  setNewOrder,
  showRxForm,
  setShowRxForm,
  newRx,
  setNewRx,
  interactions,
  allergyAlert,
  allergyJustification,
  setAllergyJustification,
  allergyOverridden,
  setAllergyOverridden,
  addingDespiteContraindicated,
  setAddingDespiteContraindicated,
  isSigned,
  hasContraindicatedAlert,
  handleAddOrder,
  handleAddRx,
  handleApplyOrderSet
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-b border-border bg-muted/20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Orders" }),
        !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "encounter.orders.primary_button",
            onClick: () => setShowOrderForm(!showOrderForm),
            className: "flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
              "Add Order"
            ]
          }
        )
      ] }),
      !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderSetsPanel, { onApply: handleApplyOrderSet, disabled: isSigned }) }),
      showOrderForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "px-4 py-3 border-b border-border bg-muted/20",
          "data-ocid": "encounter.orders.panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: newOrder.type,
                  onValueChange: (v) => setNewOrder((p) => ({ ...p, type: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "encounter.orders.type.select",
                        className: "mt-1 h-7 text-xs w-28",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lab", children: "Lab" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "imaging", children: "Imaging" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Order Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "encounter.orders.name.input",
                  value: newOrder.name,
                  onChange: (e) => setNewOrder((p) => ({ ...p, name: e.target.value })),
                  placeholder: "e.g. CBC, Chest X-Ray",
                  className: "mt-1 h-7 text-xs",
                  onKeyDown: (e) => e.key === "Enter" && handleAddOrder()
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.orders.submit_button",
                  onClick: handleAddOrder,
                  className: "h-7 px-3 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                  children: "Add"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.orders.cancel_button",
                  onClick: () => setShowOrderForm(false),
                  className: "h-7 px-3 text-xs font-semibold border border-border text-muted-foreground hover:text-foreground",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "px-4 py-4 text-xs text-muted-foreground",
          "data-ocid": "encounter.orders.empty_state",
          children: "No orders placed"
        }
      ) : orders.map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `encounter.orders.row.${i + 1}`,
          className: "flex items-center justify-between px-4 py-2.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs font-semibold uppercase tracking-wider px-1.5 py-0.5 ${order.type === "lab" ? "bg-primary/5 text-primary border border-primary/20" : "bg-primary/8 text-primary border border-primary/20"}`,
                  children: order.type
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: order.name })
            ] }),
            !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `encounter.orders.delete_button.${i + 1}`,
                onClick: () => setOrders((prev) => prev.filter((_, idx) => idx !== i)),
                className: "text-muted-foreground hover:text-destructive transition-colors p-1",
                "aria-label": "Remove order",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        },
        String(order.id)
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-b border-border bg-muted/20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Prescriptions" }),
        !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "encounter.prescriptions.primary_button",
            onClick: () => {
              setShowRxForm(!showRxForm);
              if (!showRxForm) {
                setAddingDespiteContraindicated(false);
              }
            },
            className: "flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
              "Add Prescription"
            ]
          }
        )
      ] }),
      showRxForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "px-4 py-3 border-b border-border bg-muted/20",
          "data-ocid": "encounter.prescriptions.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-36", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Drug Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "encounter.prescriptions.drug.input",
                    value: newRx.drug,
                    onChange: (e) => {
                      setNewRx((p) => ({ ...p, drug: e.target.value }));
                      setAddingDespiteContraindicated(false);
                    },
                    placeholder: "e.g. Metformin",
                    className: "mt-1 h-7 text-xs",
                    autoComplete: "off"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Dose" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "encounter.prescriptions.dose.input",
                    value: newRx.dose,
                    onChange: (e) => setNewRx((p) => ({ ...p, dose: e.target.value })),
                    placeholder: "500mg",
                    className: "mt-1 h-7 text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-36", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Frequency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "encounter.prescriptions.frequency.input",
                    value: newRx.frequency,
                    onChange: (e) => setNewRx((p) => ({ ...p, frequency: e.target.value })),
                    placeholder: "Once daily",
                    className: "mt-1 h-7 text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-28", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Route" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: newRx.route,
                    onValueChange: (v) => setNewRx((p) => ({ ...p, route: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          "data-ocid": "encounter.prescriptions.route.select",
                          className: "mt-1 h-7 text-xs",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ROUTE_OPTIONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
                    ]
                  }
                )
              ] })
            ] }),
            interactions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-3 space-y-2",
                "data-ocid": "encounter.prescriptions.interactions.panel",
                "aria-label": "Drug interaction alerts",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
                    "Drug Interaction Alerts (",
                    interactions.length,
                    ")"
                  ] }),
                  interactions.map((alert) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InteractionAlertCard,
                    {
                      alert
                    },
                    `${alert.drug1}-${alert.drug2}-${alert.severity}`
                  ))
                ]
              }
            ),
            allergyAlert && !allergyOverridden && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-3 px-3 py-3 bg-destructive/10 border border-destructive/40 text-destructive text-xs",
                "data-ocid": "encounter.prescriptions.allergy.error_state",
                role: "alert",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider", children: "⚠ ALLERGY ALERT" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold capitalize text-destructive", children: [
                      allergyAlert.severity,
                      " severity"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Allergen:" }),
                      " ",
                      allergyAlert.allergen
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Reaction:" }),
                      " ",
                      allergyAlert.reaction
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-xs uppercase tracking-wider text-destructive", children: "Clinical Justification Required to Override" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        "data-ocid": "encounter.prescriptions.allergy.textarea",
                        value: allergyJustification,
                        onChange: (e) => setAllergyJustification(e.target.value),
                        placeholder: "Enter clinical justification (minimum 10 characters)...",
                        className: "w-full h-14 px-2 py-1.5 text-xs border border-destructive/30 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-destructive resize-none",
                        rows: 2
                      }
                    ),
                    allergyJustification.length >= 10 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "encounter.prescriptions.allergy.override_button",
                        onClick: () => setAllergyOverridden(true),
                        className: "h-7 px-3 text-xs font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors",
                        children: "Override and Continue"
                      }
                    )
                  ] })
                ]
              }
            ),
            allergyAlert && allergyOverridden && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mt-3 px-3 py-2 bg-warning/10 border border-warning/30 text-warning text-xs font-semibold",
                "data-ocid": "encounter.prescriptions.allergy.overridden.success_state",
                role: "alert",
                children: "✓ Allergy override accepted. Justification documented."
              }
            ),
            addingDespiteContraindicated && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mt-3 px-3 py-2 bg-destructive/10 border border-destructive/40 text-destructive text-xs font-semibold",
                "data-ocid": "encounter.prescriptions.contraindicated.error_state",
                role: "alert",
                children: "⚠ You are adding a drug despite a contraindicated interaction. Click Add again to confirm override."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.prescriptions.submit_button",
                  onClick: handleAddRx,
                  disabled: !!(allergyAlert && !allergyOverridden),
                  className: `h-7 px-3 text-xs font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${hasContraindicatedAlert ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"}`,
                  children: addingDespiteContraindicated ? "Confirm Override" : "Add Prescription"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.prescriptions.cancel_button",
                  onClick: () => {
                    setShowRxForm(false);
                    setAddingDespiteContraindicated(false);
                    setAllergyJustification("");
                    setAllergyOverridden(false);
                  },
                  className: "h-7 px-3 text-xs font-semibold border border-border text-muted-foreground hover:text-foreground",
                  children: "Cancel"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: prescriptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "px-4 py-4 text-xs text-muted-foreground",
          "data-ocid": "encounter.prescriptions.empty_state",
          children: "No prescriptions added"
        }
      ) : prescriptions.map((rx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `encounter.prescriptions.row.${i + 1}`,
          className: "flex items-center justify-between px-4 py-2.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: rx.drug }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: rx.dose }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: rx.frequency }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider px-1.5 py-0.5 bg-muted text-muted-foreground border border-border", children: rx.route })
            ] }),
            !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `encounter.prescriptions.delete_button.${i + 1}`,
                onClick: () => setPrescriptions(
                  (prev) => prev.filter((_, idx) => idx !== i)
                ),
                className: "text-muted-foreground hover:text-destructive transition-colors p-1",
                "aria-label": "Remove prescription",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        },
        String(rx.id)
      )) })
    ] })
  ] });
}
const SOAP_SECTIONS = [
  {
    key: "subjective",
    letter: "S",
    label: "Subjective",
    hint: "Chief complaint, history of present illness, review of systems"
  },
  {
    key: "objective",
    letter: "O",
    label: "Objective",
    hint: "Exam findings, vitals summary, relevant test results"
  },
  {
    key: "assessment",
    letter: "A",
    label: "Assessment",
    hint: "Diagnosis / differential diagnoses"
  },
  {
    key: "plan",
    letter: "P",
    label: "Plan",
    hint: "Treatment, medications, orders, referrals, follow-up"
  }
];
const ROS_SYSTEMS = [
  {
    system: "Constitutional",
    symptoms: ["Fever", "Chills", "Fatigue", "Weight loss"]
  },
  {
    system: "Cardiovascular",
    symptoms: ["Chest pain", "Palpitations", "Edema", "Dyspnea on exertion"]
  },
  {
    system: "Respiratory",
    symptoms: ["Shortness of breath", "Cough", "Wheezing", "Hemoptysis"]
  },
  {
    system: "GI",
    symptoms: [
      "Nausea",
      "Vomiting",
      "Abdominal pain",
      "Diarrhea",
      "Constipation"
    ]
  },
  {
    system: "Musculoskeletal",
    symptoms: ["Joint pain", "Muscle aches", "Back pain", "Weakness"]
  },
  {
    system: "Neurological",
    symptoms: ["Headache", "Dizziness", "Numbness/tingling", "Vision changes"]
  },
  {
    system: "Psychiatric",
    symptoms: ["Anxiety", "Depression", "Sleep disturbance", "Confusion"]
  }
];
const DIFF_DX_MAP = {
  chest: [
    { code: "I20.9", name: "Angina pectoris, unspecified" },
    { code: "I21.9", name: "Acute myocardial infarction, unspecified" },
    { code: "K21.0", name: "GERD with esophagitis" },
    { code: "M94.0", name: "Costochondritis" },
    { code: "F41.1", name: "Generalized anxiety disorder" }
  ],
  diabetes: [
    { code: "E11.9", name: "Type 2 diabetes mellitus without complications" },
    { code: "E10.9", name: "Type 1 diabetes mellitus without complications" },
    { code: "E16.0", name: "Drug-induced hypoglycemia without coma" },
    { code: "N08", name: "Glomerular disorders (diabetic nephropathy)" },
    { code: "E88.81", name: "Metabolic syndrome" }
  ],
  fever: [
    { code: "J11.1", name: "Influenza with other respiratory manifestations" },
    { code: "J18.9", name: "Pneumonia, unspecified organism" },
    { code: "N39.0", name: "Urinary tract infection, site not specified" },
    { code: "A41.9", name: "Sepsis, unspecified organism" },
    { code: "U07.1", name: "COVID-19" }
  ],
  headache: [
    { code: "G43.909", name: "Migraine, unspecified, not intractable" },
    { code: "G44.309", name: "Post-traumatic headache, unspecified" },
    { code: "G44.209", name: "Tension-type headache, unspecified" },
    { code: "I10", name: "Essential (primary) hypertension" },
    { code: "G03.9", name: "Meningitis, unspecified" }
  ],
  default: [
    {
      code: "Z00.00",
      name: "Encounter for general adult medical examination"
    },
    { code: "J06.9", name: "Acute upper respiratory infection, unspecified" },
    { code: "R53.83", name: "Other fatigue" },
    { code: "K30", name: "Functional dyspepsia" },
    { code: "M79.3", name: "Panniculitis, unspecified" }
  ]
};
function getDiffDxSuggestions(text) {
  const lower = text.toLowerCase();
  for (const [keyword, suggestions] of Object.entries(DIFF_DX_MAP)) {
    if (keyword !== "default" && lower.includes(keyword)) {
      return suggestions;
    }
  }
  return DIFF_DX_MAP.default;
}
function DiffDxPanel({
  subjective,
  onUse,
  disabled
}) {
  const [open, setOpen] = React.useState(false);
  const suggestions = getDiffDxSuggestions(subjective);
  if (!subjective.trim()) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-primary/20 bg-primary/5 overflow-hidden mt-2",
      "data-ocid": "encounter.diffDx.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "encounter.diffDx.toggle",
            onClick: () => setOpen((v) => !v),
            className: "w-full flex items-center justify-between px-3 py-2 text-left hover:bg-primary/10 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-primary uppercase tracking-wide flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-3 h-3",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" })
                  }
                ),
                "Suggested Diagnoses"
              ] }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-primary/60" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-primary/60" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-blue-200 divide-y divide-blue-100", children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between px-3 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-semibold text-primary bg-primary/15 px-1.5 py-0.5 rounded-sm", children: s.code }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: s.name })
              ] }),
              !disabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.diffDx.use_button",
                  onClick: () => onUse(s.code, s.name),
                  className: "text-xs font-semibold px-2 py-0.5 rounded-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0 ml-3",
                  children: "Use"
                }
              )
            ]
          },
          s.code
        )) })
      ]
    }
  );
}
const DEFAULT_PRE_VISIT_INTAKE = {
  chiefComplaint: "Chest pain and shortness of breath",
  symptoms: [
    "Chest tightness",
    "Shortness of breath",
    "Fatigue",
    "Mild dizziness"
  ],
  painScale: 6,
  duration: "2 days",
  notes: "Pain worsens with exertion. No fever. Taking ibuprofen with minimal relief."
};
function getPreVisitIntake(appointmentId) {
  if (appointmentId) {
    const key = `previsit_intake_appt-${appointmentId}`;
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const data = JSON.parse(raw);
        return {
          chiefComplaint: data.chiefComplaint || "",
          symptoms: data.symptoms || [],
          painScale: data.severity || 5,
          duration: data.duration || "",
          notes: [data.recentChanges, data.additionalNotes].filter(Boolean).join(" "),
          fromPortal: true,
          allergies: data.allergies || "",
          currentMeds: data.currentMeds || ""
        };
      } catch {
      }
    }
  }
  const generalRaw = localStorage.getItem("previsit_intake_general");
  if (generalRaw) {
    try {
      const data = JSON.parse(generalRaw);
      return {
        chiefComplaint: data.chiefComplaint || "",
        symptoms: data.symptoms || [],
        painScale: data.severity || 5,
        duration: data.duration || "",
        notes: [data.recentChanges, data.additionalNotes].filter(Boolean).join(" "),
        fromPortal: true,
        allergies: data.allergies || "",
        currentMeds: data.currentMeds || ""
      };
    } catch {
    }
  }
  return {
    ...DEFAULT_PRE_VISIT_INTAKE,
    fromPortal: false,
    allergies: "",
    currentMeds: ""
  };
}
function PreVisitIntakePanel({
  isSigned,
  setSoap,
  appointmentId
}) {
  const [open, setOpen] = React.useState(false);
  const intake = getPreVisitIntake(appointmentId);
  const copyToSubjective = () => {
    const text = [
      `Chief Complaint: ${intake.chiefComplaint}`,
      `Symptoms: ${intake.symptoms.join(", ")}`,
      `Pain Scale: ${intake.painScale}/10`,
      intake.duration ? `Duration: ${intake.duration}` : null,
      intake.notes ? `Patient Notes: ${intake.notes}` : null
    ].filter(Boolean).join("\n");
    setSoap((prev) => ({
      ...prev,
      subjective: prev.subjective ? `${prev.subjective}

${text}` : text
    }));
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border bg-card mb-5 overflow-hidden",
      "data-ocid": "encounter.previsit.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "encounter.previsit.toggle.button",
            onClick: () => setOpen(!open),
            className: "w-full flex items-center justify-between px-4 py-2.5 bg-primary/5 border-b border-transparent hover:bg-primary/10 transition-colors",
            disabled: isSigned,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Pre-Visit Patient Intake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20", children: "Patient submitted pre-visit intake" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" }) })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1", children: "Chief Complaint" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: intake.chiefComplaint })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5", children: "Reported Symptoms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: intake.symptoms.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-warning/15 text-foreground border border-warning/20",
                children: s
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5", children: "Pain Scale (0–10)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full transition-all",
                    style: {
                      width: `${intake.painScale / 10 * 100}%`,
                      background: intake.painScale >= 7 ? "var(--destructive)" : intake.painScale >= 4 ? "var(--warning)" : "var(--success)"
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold tabular-nums text-foreground w-8 text-right", children: [
                  intake.painScale,
                  "/10"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5", children: "Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: intake.duration })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1", children: "Patient Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed italic", children: [
              "“",
              intake.notes,
              "”"
            ] })
          ] }),
          !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "encounter.previsit.copy.button",
              onClick: copyToSubjective,
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-semibold border border-primary/30 text-primary hover:bg-primary/5 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    className: "w-3.5 h-3.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
                    ]
                  }
                ),
                "Copy to Subjective"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function AppointmentReasonChip({
  reason,
  currentValue,
  isSigned,
  onUse
}) {
  const [dismissed, setDismissed] = React.useState(false);
  if (!reason || currentValue.trim() !== "" || isSigned || dismissed) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "encounter.soap.subjective.prefill.button",
        onClick: onUse,
        className: "inline-flex items-center gap-1.5 text-xs bg-primary/8 text-primary border border-primary/20 rounded px-2.5 py-1 cursor-pointer hover:bg-primary/15 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70", children: "✦" }),
          "Use appointment reason:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium italic", children: [
            '"',
            reason,
            '"'
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "encounter.soap.subjective.prefill.close_button",
        onClick: () => setDismissed(true),
        className: "text-muted-foreground/60 hover:text-muted-foreground transition-colors text-xs leading-none",
        "aria-label": "Dismiss suggestion",
        children: "×"
      }
    )
  ] });
}
function EncounterSOAP({
  soap,
  setSoap,
  isSigned,
  appointmentId,
  appointmentReason,
  spActive,
  setSpActive,
  spFilter,
  setSpFilter,
  dictating,
  handleDictate,
  showRos,
  setShowRos,
  rosFindings,
  setRosFindings,
  rosChecked,
  rosText
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreVisitIntakePanel,
      {
        isSigned,
        setSoap,
        appointmentId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "border border-border bg-card mb-5",
        "data-ocid": "encounter.ros.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "encounter.ros.toggle.button",
              onClick: () => setShowRos(!showRos),
              className: "w-full flex items-center justify-between px-4 py-2 bg-muted/20 border-b border-transparent hover:bg-muted/40 transition-colors",
              disabled: isSigned,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Review of Systems" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  rosChecked > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-primary", children: [
                    rosChecked,
                    " positive finding",
                    rosChecked !== 1 ? "s" : ""
                  ] }),
                  showRos ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
                ] })
              ]
            }
          ),
          showRos && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: ROS_SYSTEMS.map(({ system, symptoms }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: system }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-4 gap-y-1", children: symptoms.map((symptom) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "flex items-center gap-1.5 cursor-pointer group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          disabled: isSigned,
                          checked: ((_a = rosFindings[system]) == null ? void 0 : _a[symptom]) ?? false,
                          onChange: (e) => setRosFindings((prev) => ({
                            ...prev,
                            [system]: {
                              ...prev[system] ?? {},
                              [symptom]: e.target.checked
                            }
                          })),
                          className: "w-3.5 h-3.5 accent-primary",
                          "data-ocid": "encounter.ros.checkbox"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground group-hover:text-primary transition-colors", children: symptom })
                    ]
                  },
                  symptom
                );
              }) })
            ] }, system)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 pt-1 border-t border-border", children: !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "encounter.ros.secondary_button",
                onClick: () => setRosFindings(
                  Object.fromEntries(
                    ROS_SYSTEMS.map(({ system, symptoms }) => [
                      system,
                      Object.fromEntries(symptoms.map((s) => [s, false]))
                    ])
                  )
                ),
                className: "text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 border border-border rounded-sm hover:bg-muted/40",
                children: "Mark all negative"
              }
            ) }),
            rosText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border rounded-sm p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Generated ROS Text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground leading-relaxed font-mono", children: rosText }),
              !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.ros.primary_button",
                  onClick: () => setSoap((prev) => ({
                    ...prev,
                    subjective: prev.subjective ? `${prev.subjective}

${rosText}` : rosText
                  })),
                  className: "mt-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                  children: "↑ Copy to Subjective"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-b border-border bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "SOAP Note" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: SOAP_SECTIONS.map(({ key, letter, label, hint }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground", children: letter }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-2", children: hint })
            ] }),
            !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `encounter.soap.${key}.button`,
                onClick: () => handleDictate(key),
                disabled: dictating[key],
                title: "Dictate",
                className: "flex items-center gap-1 px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors disabled:opacity-60",
                children: dictating[key] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-destructive animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-destructive", children: "Listening..." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-3.5 h-3.5" })
              }
            )
          ] }),
          key === "subjective" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            AppointmentReasonChip,
            {
              reason: appointmentReason,
              currentValue: soap.subjective,
              isSigned,
              onUse: () => setSoap((prev) => ({
                ...prev,
                subjective: appointmentReason ?? ""
              }))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                "data-ocid": `encounter.soap.${key}.textarea`,
                value: soap[key],
                onChange: (e) => {
                  const val = e.target.value;
                  setSoap((prev) => ({ ...prev, [key]: val }));
                  const lastDot = val.lastIndexOf(".");
                  if (lastDot !== -1 && lastDot === val.length - 1) {
                    setSpActive(key);
                    setSpFilter("");
                  } else if (lastDot !== -1 && lastDot < val.length - 1 && spActive === key) {
                    const typed = val.slice(lastDot + 1);
                    if (typed.length > 0 && !typed.includes(" ")) {
                      setSpFilter(typed.toLowerCase());
                    } else {
                      setSpActive(null);
                    }
                  } else {
                    setSpActive(null);
                  }
                },
                onKeyDown: (e) => {
                  if (e.key === "Escape") setSpActive(null);
                },
                disabled: isSigned,
                rows: 4,
                className: "text-sm leading-relaxed font-mono resize-y",
                placeholder: `Enter ${label.toLowerCase()}...`
              }
            ),
            !isSigned && spActive === key && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute z-10 left-0 top-full mt-1 w-full max-w-sm bg-card border border-border rounded-sm shadow-lg overflow-hidden",
                "data-ocid": `encounter.smartphrase.${key}.dropdown_menu`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 border-b border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "SmartPhrases" }) }),
                  [...PERSONAL_PHRASES, ...CLINIC_PHRASES].filter(
                    (p) => spFilter === "" ? true : p.trigger.toLowerCase().includes(spFilter) || p.title.toLowerCase().includes(spFilter)
                  ).slice(0, 6).map((p, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `encounter.smartphrase.item.${pi + 1}`,
                      className: "w-full flex items-start gap-2 px-3 py-2 text-left hover:bg-muted/40 transition-colors border-b border-border/50 last:border-0",
                      onClick: () => {
                        setSoap((prev) => {
                          const current = prev[key];
                          const lastDot = current.lastIndexOf(
                            `.${spFilter}`
                          );
                          const before = current.slice(0, lastDot);
                          return {
                            ...prev,
                            [key]: before + p.expansion
                          };
                        });
                        setSpActive(null);
                        setSpFilter("");
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs font-mono font-semibold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 bg-muted text-muted-foreground", children: p.trigger }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: p.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                            p.expansion.slice(0, 60),
                            "..."
                          ] })
                        ] })
                      ]
                    },
                    p.id
                  )),
                  [...PERSONAL_PHRASES, ...CLINIC_PHRASES].filter(
                    (p) => spFilter === "" ? true : p.trigger.toLowerCase().includes(spFilter) || p.title.toLowerCase().includes(spFilter)
                  ).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 py-2 text-xs text-muted-foreground", children: "No matching phrases" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `encounter.smartphrase.${key}.close_button`,
                      onClick: () => setSpActive(null),
                      className: "w-full px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors text-center border-t border-border",
                      children: "Dismiss (Esc)"
                    }
                  )
                ]
              }
            )
          ] }),
          !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            "Type",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded text-xs", children: "." }),
            " ",
            "to insert a SmartPhrase"
          ] }),
          key === "subjective" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            DiffDxPanel,
            {
              subjective: soap.subjective,
              onUse: (code, name) => setSoap((prev) => ({
                ...prev,
                assessment: prev.assessment ? `${prev.assessment}
${code} - ${name}` : `${code} - ${name}`
              })),
              disabled: isSigned
            }
          )
        ] })
      ] }) }, key)) })
    ] })
  ] });
}
const educationHandouts = [
  {
    id: "diabetes-t2",
    title: "Managing Type 2 Diabetes",
    description: "Understand how to control blood sugar through diet, exercise, and medication to prevent complications.",
    topics: [
      "Blood sugar monitoring",
      "Carbohydrate counting",
      "Exercise guidelines",
      "Foot care",
      "When to call your doctor"
    ],
    icdPrefixes: ["E11", "E13"]
  },
  {
    id: "diabetes-t1",
    title: "Living with Type 1 Diabetes",
    description: "Learn about insulin management, continuous glucose monitoring, and preventing hypoglycemia.",
    topics: [
      "Insulin types and timing",
      "CGM use",
      "Sick-day management",
      "Hypoglycemia treatment",
      "HbA1c goals"
    ],
    icdPrefixes: ["E10"]
  },
  {
    id: "hypertension",
    title: "Understanding High Blood Pressure",
    description: "Learn how to manage hypertension with lifestyle changes and medications to protect your heart and kidneys.",
    topics: [
      "DASH diet",
      "Sodium reduction",
      "Home BP monitoring",
      "Medication schedule",
      "Stress reduction"
    ],
    icdPrefixes: ["I10", "I11", "I12", "I13"]
  },
  {
    id: "heart-failure",
    title: "Heart Failure Self-Management",
    description: "Daily weight monitoring, fluid restrictions, and warning signs that require immediate attention.",
    topics: [
      "Daily weigh-ins",
      "Fluid restrictions",
      "Salt limits",
      "Activity pacing",
      "Emergency warning signs"
    ],
    icdPrefixes: ["I50"]
  },
  {
    id: "copd",
    title: "Living Better with COPD",
    description: "Breathing techniques, inhaler use, and avoiding triggers to manage chronic obstructive pulmonary disease.",
    topics: [
      "Pursed-lip breathing",
      "Inhaler technique",
      "Oxygen therapy",
      "Pulmonary rehab",
      "Smoking cessation"
    ],
    icdPrefixes: ["J44", "J43", "J41", "J42"]
  },
  {
    id: "asthma",
    title: "Asthma Action Plan",
    description: "Know your triggers, use your inhalers correctly, and follow your personalized asthma action plan.",
    topics: [
      "Trigger avoidance",
      "Rescue vs. controller inhalers",
      "Peak flow monitoring",
      "Spacer technique",
      "When to seek emergency care"
    ],
    icdPrefixes: ["J45", "J46"]
  },
  {
    id: "depression-anxiety",
    title: "Mental Health: Depression & Anxiety",
    description: "Understanding your diagnosis, treatment options, and strategies to support your mental well-being.",
    topics: [
      "Medication basics",
      "Therapy options (CBT)",
      "Sleep hygiene",
      "Mindfulness",
      "Crisis resources"
    ],
    icdPrefixes: ["F32", "F33", "F34", "F40", "F41"]
  },
  {
    id: "hyperlipidemia",
    title: "Managing High Cholesterol",
    description: "Diet, exercise, and statin therapy to reduce cardiovascular risk from high LDL cholesterol.",
    topics: [
      "Heart-healthy diet",
      "Saturated fat limits",
      "Exercise recommendations",
      "Statin side effects",
      "Target LDL levels"
    ],
    icdPrefixes: ["E78"]
  },
  {
    id: "hypothyroidism",
    title: "Hypothyroidism & Thyroid Health",
    description: "How to take levothyroxine correctly, what symptoms to monitor, and when to have your TSH rechecked.",
    topics: [
      "Medication timing",
      "Food/drug interactions",
      "TSH monitoring schedule",
      "Symptoms to watch",
      "Pregnancy considerations"
    ],
    icdPrefixes: ["E03", "E02", "E01"]
  },
  {
    id: "gerd",
    title: "GERD & Acid Reflux Management",
    description: "Lifestyle modifications, dietary changes, and medication guidance to control acid reflux symptoms.",
    topics: [
      "Trigger foods to avoid",
      "Eating habits",
      "Elevating head of bed",
      "PPI use guidance",
      "When to see a specialist"
    ],
    icdPrefixes: ["K21", "K20"]
  },
  {
    id: "ckd",
    title: "Chronic Kidney Disease Care",
    description: "Protecting your kidney function through diet, blood pressure control, and regular lab monitoring.",
    topics: [
      "Protein and potassium limits",
      "Fluid intake",
      "BP target < 130/80",
      "Medication safety",
      "Nephrology referral criteria"
    ],
    icdPrefixes: ["N18"]
  },
  {
    id: "afib",
    title: "Atrial Fibrillation & Anticoagulation",
    description: "Understanding AFib, taking blood thinners safely, and recognizing signs of stroke.",
    topics: [
      "What AFib feels like",
      "Anticoagulant options",
      "Stroke warning signs (FAST)",
      "Activity guidelines",
      "INR monitoring (warfarin)"
    ],
    icdPrefixes: ["I48"]
  },
  {
    id: "osteoporosis",
    title: "Osteoporosis & Bone Health",
    description: "Calcium, vitamin D, weight-bearing exercise, and medications to prevent fractures.",
    topics: [
      "Calcium and vitamin D intake",
      "Weight-bearing exercise",
      "Fall prevention",
      "Bisphosphonate use",
      "DEXA scan schedule"
    ],
    icdPrefixes: ["M80", "M81", "M82"]
  },
  {
    id: "obesity",
    title: "Weight Management & Healthy Lifestyle",
    description: "Practical strategies for sustainable weight loss, physical activity, and behavioral change.",
    topics: [
      "Calorie awareness",
      "Portion control",
      "150 min/week activity goal",
      "Behavioral strategies",
      "Medication options"
    ],
    icdPrefixes: ["E66", "Z68"]
  },
  {
    id: "postop",
    title: "Post-Operative Care Instructions",
    description: "Wound care, activity restrictions, signs of infection, and follow-up appointment reminders after surgery.",
    topics: [
      "Wound care and dressing changes",
      "Activity restrictions",
      "Pain management",
      "Signs of infection",
      "When to call the office"
    ],
    icdPrefixes: ["Z48", "Z87"]
  },
  {
    id: "med-adherence",
    title: "Medication Adherence & Safety",
    description: "Tips for taking your medications consistently, avoiding interactions, and what to do if you miss a dose.",
    topics: [
      "Pill organizers and reminders",
      "Refill planning",
      "Drug interaction basics",
      "Common side effects",
      "Pharmacy resources"
    ],
    icdPrefixes: []
  }
];
function getHandoutsForDiagnoses(icdCodes) {
  if (!icdCodes || icdCodes.length === 0) {
    return [educationHandouts.find((h) => h.id === "med-adherence")].filter(
      Boolean
    );
  }
  const matched = /* @__PURE__ */ new Set();
  const result = [];
  for (const code of icdCodes) {
    const prefix = code.trim().toUpperCase();
    for (const handout of educationHandouts) {
      if (matched.has(handout.id)) continue;
      if (handout.icdPrefixes.some(
        (p) => prefix.startsWith(p) || p.startsWith(prefix.slice(0, 3))
      )) {
        matched.add(handout.id);
        result.push(handout);
      }
    }
  }
  if (result.length === 0) {
    const fallback = educationHandouts.find((h) => h.id === "med-adherence");
    if (fallback) result.push(fallback);
  }
  return result;
}
const EM_CODES = [
  {
    code: "99213",
    description: "Office visit, established — low complexity",
    unitPrice: 150
  },
  {
    code: "99214",
    description: "Office visit, established — moderate complexity",
    unitPrice: 220
  }
];
function suggestCpts(orders) {
  const suggestions = [
    {
      id: 1,
      code: EM_CODES[1].code,
      description: EM_CODES[1].description,
      qty: 1,
      unitPrice: EM_CODES[1].unitPrice
    }
  ];
  const hasLab = orders.some((o) => o.type === "lab");
  const hasImaging = orders.some((o) => o.type === "imaging");
  if (hasLab) {
    suggestions.push({
      id: 2,
      code: "80053",
      description: "Comprehensive metabolic panel",
      qty: 1,
      unitPrice: 85
    });
  }
  if (hasImaging) {
    const firstImg = orders.find((o) => o.type === "imaging");
    const name = (firstImg == null ? void 0 : firstImg.name.toLowerCase()) ?? "";
    if (name.includes("chest") || name.includes("x-ray")) {
      suggestions.push({
        id: 3,
        code: "71046",
        description: "Chest X-Ray, 2 views",
        qty: 1,
        unitPrice: 125
      });
    } else if (name.includes("mri")) {
      suggestions.push({
        id: 4,
        code: "70553",
        description: "MRI Brain with contrast",
        qty: 1,
        unitPrice: 950
      });
    } else if (name.includes("ct")) {
      suggestions.push({
        id: 5,
        code: "74177",
        description: "CT Abdomen & Pelvis with contrast",
        qty: 1,
        unitPrice: 780
      });
    } else {
      suggestions.push({
        id: 6,
        code: "76700",
        description: "Abdominal ultrasound, complete",
        qty: 1,
        unitPrice: 320
      });
    }
  }
  return suggestions;
}
function EncounterSignOff({
  isSigned,
  showAVS,
  setShowAVS,
  patient,
  soap,
  prescriptions,
  orders,
  avsFollowUp,
  setAvsFollowUp,
  avsPatientEd,
  setAvsPatientEd,
  educationChecked,
  setEducationChecked,
  showEducation,
  setShowEducation,
  capturedCpts,
  setCapturedCpts,
  newCptCode,
  setNewCptCode,
  newCptDesc,
  setNewCptDesc,
  showChargeCapture,
  setShowChargeCapture,
  isSaving,
  isSigning,
  signedLabCount,
  signedImgCount,
  signedRxCount,
  handleSaveDraft,
  handleSignClose,
  onBack,
  onNavigate
}) {
  const total = capturedCpts.reduce((sum, c) => sum + c.qty * c.unitPrice, 0);
  const handleAutoSuggest = () => {
    const suggestions = suggestCpts(orders);
    setCapturedCpts(suggestions);
  };
  const handleRemoveCpt = (id) => {
    setCapturedCpts((prev) => prev.filter((c) => c.id !== id));
  };
  const handleAddCustomCpt = () => {
    if (!newCptCode.trim()) return;
    setCapturedCpts((prev) => [
      ...prev,
      {
        id: Date.now(),
        code: newCptCode.trim(),
        description: newCptDesc.trim() || "Custom procedure",
        qty: 1,
        unitPrice: 0
      }
    ]);
    setNewCptCode("");
    setNewCptDesc("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-success/30 bg-success/10 px-5 py-4 mb-5 space-y-3",
        "data-ocid": "encounter.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-success flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-success", children: "Encounter Signed & Closed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-xs text-success", children: [
            signedLabCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 bg-success/5 border border-success/25 px-2.5 py-1 rounded-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-3 h-3" }),
              signedLabCount,
              " lab order",
              signedLabCount !== 1 ? "s" : "",
              " ",
              "submitted"
            ] }),
            signedImgCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 bg-success/5 border border-success/25 px-2.5 py-1 rounded-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3 h-3" }),
              signedImgCount,
              " imaging order",
              signedImgCount !== 1 ? "s" : "",
              " ",
              "submitted"
            ] }),
            signedRxCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 bg-success/5 border border-success/25 px-2.5 py-1 rounded-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
              signedRxCount,
              " prescription",
              signedRxCount !== 1 ? "s" : "",
              " ",
              "sent to pharmacy"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
            signedRxCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "encounter.pharmacy.button",
                onClick: () => onNavigate == null ? void 0 : onNavigate("pharmacy"),
                className: "h-7 text-xs border-success/30 text-success hover:bg-success/10",
                children: "Go to Pharmacy Queue"
              }
            ),
            signedLabCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "encounter.labs.button",
                onClick: () => onNavigate == null ? void 0 : onNavigate("labs"),
                className: "h-7 text-xs border-success/30 text-success hover:bg-success/10",
                children: "View Lab Results"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                "data-ocid": "encounter.back_to_appointments.button",
                onClick: onBack,
                className: "h-7 text-xs text-muted-foreground",
                children: "Back to Appointments"
              }
            )
          ] })
        ]
      }
    ),
    isSigned && showAVS && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-primary/20 bg-primary/5 mb-5 rounded-sm",
        "data-ocid": "encounter.avs.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "w-4 h-4 text-primary",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "14 2 14 8 20 8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "10 9 9 9 8 9" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-primary", children: "After-Visit Summary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "encounter.avs.close_button",
                onClick: () => setShowAVS(false),
                className: "text-primary hover:text-primary/70 transition-colors",
                "aria-label": "Close AVS",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    className: "w-4 h-4",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-[12px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5", children: "Patient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: patient == null ? void 0 : patient.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5", children: "Visit Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5", children: "Provider" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Dr. Sarah Chen" })
              ] })
            ] }),
            soap.assessment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Diagnoses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-foreground bg-card border border-border rounded-sm px-3 py-2 whitespace-pre-wrap", children: soap.assessment })
            ] }),
            prescriptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Medications Prescribed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: prescriptions.map((rx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-[13px] text-foreground flex gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: rx.drug }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                      rx.dose,
                      " — ",
                      rx.frequency,
                      " (",
                      rx.route,
                      ")"
                    ] })
                  ]
                },
                `${rx.drug}-${i}`
              )) })
            ] }),
            orders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Orders Placed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: orders.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2 py-0.5 bg-card border border-border rounded-sm font-medium text-foreground",
                  children: o.name
                },
                `${o.name}-${i}`
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "avs-followup",
                  className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                  children: "Follow-up Instructions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "avs-followup",
                  "data-ocid": "encounter.avs.followup.textarea",
                  value: avsFollowUp,
                  onChange: (e) => setAvsFollowUp(e.target.value),
                  rows: 2,
                  className: "w-full px-3 py-2 text-[13px] bg-card border border-border rounded-sm focus:outline-none focus:ring-1 ring-primary/50 resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "avs-education",
                  className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                  children: "Patient Education Notes"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "avs-education",
                  "data-ocid": "encounter.avs.education.textarea",
                  value: avsPatientEd,
                  onChange: (e) => setAvsPatientEd(e.target.value),
                  rows: 2,
                  placeholder: "e.g. Review medication instructions. Monitor blood sugar daily...",
                  className: "w-full px-3 py-2 text-[13px] bg-card border border-border rounded-sm focus:outline-none focus:ring-1 ring-primary/50 resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.avs.print_button",
                  onClick: () => window.print(),
                  className: "flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-white rounded-sm transition-opacity hover:opacity-90 bg-primary",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        className: "w-3.5 h-3.5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": "true",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 6 2 18 2 18 9" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "14", width: "12", height: "8" })
                        ]
                      }
                    ),
                    "Print Summary"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "encounter.avs.done_button",
                  onClick: onBack,
                  className: "px-4 py-2 text-[12px] font-medium border border-border text-muted-foreground rounded-sm hover:text-foreground transition-colors",
                  children: "Done — Back to Appointments"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "border border-border bg-card",
        "data-ocid": "encounter.education.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "encounter.education.toggle",
              className: "w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/40 transition-colors",
              onClick: () => setShowEducation(!showEducation),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-muted-foreground" }),
                  "Patient Education Handouts",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-muted-foreground ml-1", children: "Select materials to include in after-visit summary" })
                ] }),
                showEducation ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
              ]
            }
          ),
          showEducation && (() => {
            const icdCodes = soap.assessment.split("\n").map((l) => {
              var _a;
              return ((_a = l.match(/^([A-Z][\d.]+[A-Z0-9]*)/)) == null ? void 0 : _a[1]) ?? "";
            }).filter(Boolean);
            const handouts = getHandoutsForDiagnoses(icdCodes);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 pt-2 space-y-3", children: [
              icdCodes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "No diagnoses entered yet — showing general handout." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: handouts.map((h, idx) => {
                const checked = educationChecked[h.id] !== false;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-ocid": `encounter.education.item.${idx + 1}`,
                    className: `border rounded-sm p-3 transition-colors ${checked ? "border-primary/30 bg-primary/5" : "border-border bg-muted/20"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          id: `edu-${h.id}`,
                          "data-ocid": `encounter.education.checkbox.${idx + 1}`,
                          checked,
                          onChange: (e) => setEducationChecked((prev) => ({
                            ...prev,
                            [h.id]: e.target.checked
                          })),
                          className: "mt-0.5 accent-primary"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: `edu-${h.id}`,
                            className: "block text-[12px] font-semibold text-foreground cursor-pointer",
                            children: h.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: h.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: h.topics.slice(0, 3).map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "inline-flex items-center px-1.5 py-0.5 rounded-sm text-xs font-medium bg-muted text-muted-foreground",
                            children: topic
                          },
                          topic
                        )) })
                      ] })
                    ] })
                  },
                  h.id
                );
              }) })
            ] });
          })()
        ]
      }
    ),
    !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "border border-border bg-card",
        "data-ocid": "encounter.charge-capture.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "encounter.charge-capture.toggle",
              className: "w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/40 transition-colors",
              onClick: () => setShowChargeCapture(!showChargeCapture),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4 text-muted-foreground" }),
                  "Charge Capture",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-muted-foreground ml-1", children: "Review and confirm CPT codes before signing" })
                ] }),
                showChargeCapture ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
              ]
            }
          ),
          showChargeCapture && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-4 space-y-4", children: [
            capturedCpts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground py-2", children: "No CPT codes. Auto-suggest based on orders or add manually." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "encounter.cpt.suggest_button",
                  size: "sm",
                  variant: "outline",
                  onClick: handleAutoSuggest,
                  className: "h-7 text-xs",
                  children: "Auto-Suggest"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: capturedCpts.map((cpt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between text-xs bg-muted/30 px-3 py-2 border border-border",
                "data-ocid": `encounter.cpt.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-foreground flex-shrink-0", children: cpt.code }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate", children: cpt.description })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 ml-4 flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                      "×",
                      cpt.qty
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground w-16 text-right", children: cpt.unitPrice > 0 ? `$${(cpt.qty * cpt.unitPrice).toFixed(2)}` : "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `encounter.cpt.delete_button.${idx + 1}`,
                        className: "text-muted-foreground hover:text-destructive transition-colors",
                        onClick: () => handleRemoveCpt(cpt.id),
                        "aria-label": "Remove CPT code",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ] })
                ]
              },
              cpt.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 w-28", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "cpt-code",
                    className: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
                    children: "CPT Code"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "cpt-code",
                    "data-ocid": "encounter.cpt.code.input",
                    placeholder: "e.g. 99214",
                    value: newCptCode,
                    onChange: (e) => setNewCptCode(e.target.value),
                    className: "h-8 text-xs font-mono"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "cpt-desc",
                    className: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
                    children: "Description"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "cpt-desc",
                    "data-ocid": "encounter.cpt.desc.input",
                    placeholder: "Procedure description",
                    value: newCptDesc,
                    onChange: (e) => setNewCptDesc(e.target.value),
                    className: "h-8 text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "encounter.cpt.add_button",
                  type: "button",
                  size: "sm",
                  variant: "outline",
                  onClick: handleAddCustomCpt,
                  disabled: !newCptCode.trim(),
                  className: "h-8 gap-1.5 flex-shrink-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                    "Add"
                  ]
                }
              )
            ] }),
            total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "Estimated Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground", children: [
                "$",
                total.toFixed(2)
              ] })
            ] })
          ] })
        ]
      }
    ),
    !isSigned && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card px-5 py-3 flex items-center justify-between",
        "data-ocid": "encounter.actions.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Document thoroughly before signing. Signed notes cannot be edited." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "encounter.save_button",
                size: "sm",
                variant: "outline",
                onClick: handleSaveDraft,
                disabled: isSaving,
                className: "gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
                  isSaving ? "Saving..." : "Save Draft"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "encounter.primary_button",
                onClick: handleSignClose,
                disabled: isSigning,
                className: "gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold",
                children: isSigning ? "Signing..." : "Sign & Close Encounter"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const VITALS_FIELDS = [
  { key: "bp", label: "BP", unit: "mmHg", placeholder: "120/80" },
  { key: "hr", label: "HR", unit: "bpm", placeholder: "72" },
  { key: "temp", label: "Temp", unit: "°F", placeholder: "98.6" },
  { key: "weight", label: "Weight", unit: "lbs", placeholder: "160" },
  { key: "spo2", label: "SpO₂", unit: "%", placeholder: "98" },
  { key: "rr", label: "RR", unit: "br/min", placeholder: "16" }
];
function EncounterVitals({
  vitals,
  setVitals,
  cdsAlerts,
  setCdsAlerts,
  isSigned,
  checkVitalsAlerts
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-b border-border bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Vitals" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-4", children: VITALS_FIELDS.map(({ key, label, unit, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            htmlFor: `vitals-${key}`,
            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1",
            children: [
              label,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60 ml-1 normal-case font-normal", children: unit })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: `vitals-${key}`,
            "data-ocid": `encounter.vitals.${key}.input`,
            value: vitals[key],
            onChange: (e) => setVitals((prev) => ({ ...prev, [key]: e.target.value })),
            onBlur: (e) => checkVitalsAlerts(key, e.target.value),
            placeholder,
            disabled: isSigned,
            className: "h-8 text-sm font-mono"
          }
        )
      ] }, key)) }),
      cdsAlerts.filter((a) => !a.dismissed).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mt-3 space-y-2",
          "data-ocid": "encounter.vitals.cds.panel",
          children: cdsAlerts.filter((a) => !a.dismissed).map((alert) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `encounter.vitals.${alert.id}.error_state`,
              className: "flex items-start gap-2 px-3 py-2.5 bg-warning/10 border border-warning/30 text-warning rounded-sm",
              role: "alert",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs leading-relaxed", children: alert.message }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Dismiss alert",
                    onClick: () => setCdsAlerts(
                      (prev) => prev.map(
                        (a) => a.id === alert.id ? { ...a, dismissed: true } : a
                      )
                    ),
                    className: "flex-shrink-0 text-warning hover:text-warning/80 transition-colors text-sm font-bold leading-none",
                    children: "×"
                  }
                )
              ]
            },
            alert.id
          ))
        }
      )
    ] })
  ] });
}
let _encIdCounter = Date.now();
const nextEncId = () => ++_encIdCounter;
function Encounter({
  activeAppointmentId,
  activePatientId,
  onBack,
  onNavigate
}) {
  const { actor, isFetching } = useActor();
  const [patient, setPatient] = reactExports.useState(null);
  const [appointment, setAppointment] = reactExports.useState(null);
  const [activeMeds, setActiveMeds] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [notFound, setNotFound] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isFetching || !actor) return;
    if (!activePatientId || !activeAppointmentId) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    Promise.all([
      actor.listPatients(),
      actor.listAppointments(),
      actor.listMedications()
    ]).then(([patients, appointments, medications]) => {
      if (cancelled) return;
      const foundPatient = patients.find((p) => p.id === activePatientId) ?? null;
      const foundAppt = appointments.find((a) => a.id === activeAppointmentId) ?? null;
      const meds = medications.filter(
        (m) => m.patientId === activePatientId && m.status === "active"
      );
      setPatient(foundPatient);
      setAppointment(foundAppt);
      setActiveMeds(meds);
      if (!foundPatient || !foundAppt) setNotFound(true);
      setIsLoading(false);
    }).catch(() => {
      if (cancelled) return;
      setNotFound(true);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [actor, isFetching, activePatientId, activeAppointmentId]);
  const [showRos, setShowRos] = reactExports.useState(false);
  const [rosFindings, setRosFindings] = reactExports.useState({});
  const rosChecked = Object.values(rosFindings).reduce(
    (total, systemFindings) => total + Object.values(systemFindings).filter(Boolean).length,
    0
  );
  const ROS_SYSTEMS2 = [
    {
      system: "Constitutional",
      symptoms: ["Fever", "Chills", "Fatigue", "Weight loss"]
    },
    {
      system: "Cardiovascular",
      symptoms: ["Chest pain", "Palpitations", "Edema", "Dyspnea on exertion"]
    },
    {
      system: "Respiratory",
      symptoms: ["Shortness of breath", "Cough", "Wheezing", "Hemoptysis"]
    },
    {
      system: "GI",
      symptoms: [
        "Nausea",
        "Vomiting",
        "Abdominal pain",
        "Diarrhea",
        "Constipation"
      ]
    },
    {
      system: "Musculoskeletal",
      symptoms: ["Joint pain", "Muscle aches", "Back pain", "Weakness"]
    },
    {
      system: "Neurological",
      symptoms: [
        "Headache",
        "Dizziness",
        "Numbness/tingling",
        "Vision changes"
      ]
    },
    {
      system: "Psychiatric",
      symptoms: ["Anxiety", "Depression", "Sleep disturbance", "Confusion"]
    }
  ];
  const rosText = (() => {
    if (Object.keys(rosFindings).length === 0) return "";
    const parts = ROS_SYSTEMS2.map(({ system, symptoms }) => {
      const positives = symptoms.filter(
        (s) => {
          var _a;
          return ((_a = rosFindings[system]) == null ? void 0 : _a[s]) === true;
        }
      );
      if (positives.length === 0) return `${system}: negative`;
      return `${system}: ${positives.map((s) => s.toLowerCase()).join(", ")}`;
    });
    return `ROS: ${parts.join(". ")}.`;
  })();
  const [vitals, setVitals] = reactExports.useState({
    bp: "",
    hr: "",
    temp: "",
    weight: "",
    spo2: "",
    rr: ""
  });
  const [cdsAlerts, setCdsAlerts] = reactExports.useState([]);
  const [soap, setSoap] = reactExports.useState({
    subjective: "",
    objective: "",
    assessment: "",
    plan: ""
  });
  const [orders, setOrders] = reactExports.useState([]);
  const [showOrderForm, setShowOrderForm] = reactExports.useState(false);
  const [newOrder, setNewOrder] = reactExports.useState({ type: "lab", name: "" });
  const [prescriptions, setPrescriptions] = reactExports.useState([]);
  const [showRxForm, setShowRxForm] = reactExports.useState(false);
  const [newRx, setNewRx] = reactExports.useState({
    drug: "",
    dose: "",
    frequency: "",
    route: "PO"
  });
  const [interactions, setInteractions] = reactExports.useState([]);
  const [addingDespiteContraindicated, setAddingDespiteContraindicated] = reactExports.useState(false);
  const [allergyAlert, setAllergyAlert] = reactExports.useState(null);
  const [allergyJustification, setAllergyJustification] = reactExports.useState("");
  const [allergyOverridden, setAllergyOverridden] = reactExports.useState(false);
  const [isSigned, setIsSigned] = reactExports.useState(false);
  const [autosaveStatus, setAutosaveStatus] = reactExports.useState("idle");
  const autosaveTimerRef = reactExports.useRef(null);
  const draftKey = `encounter-draft-${activePatientId != null ? String(Number(activePatientId)) : "new"}`;
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.soap) setSoap(parsed.soap);
        if (parsed.vitals) setVitals(parsed.vitals);
        if (parsed.orders)
          setOrders(parsed.orders.map((o) => ({ ...o, id: BigInt(o.id) })));
        if (parsed.prescriptions)
          setPrescriptions(
            parsed.prescriptions.map((rx) => ({ ...rx, id: BigInt(rx.id) }))
          );
        ue.info("Draft restored — unsaved note found", { duration: 4e3 });
      }
    } catch {
    }
  }, [draftKey]);
  reactExports.useEffect(() => {
    if (isSigned) {
      localStorage.removeItem(draftKey);
    }
  }, [isSigned, draftKey]);
  const triggerAutosave = reactExports.useCallback(() => {
    if (isSigned) return;
    setAutosaveStatus("pending");
    if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = setTimeout(() => {
      try {
        const draft = {
          soap,
          vitals,
          orders: orders.map((o) => ({ ...o, id: String(o.id) })),
          prescriptions: prescriptions.map((rx) => ({
            ...rx,
            id: String(rx.id)
          }))
        };
        localStorage.setItem(draftKey, JSON.stringify(draft));
        setAutosaveStatus("saved");
      } catch {
      }
    }, 2e3);
  }, [isSigned, soap, vitals, orders, prescriptions, draftKey]);
  reactExports.useEffect(() => {
    if (isSigned) return;
    triggerAutosave();
  }, [isSigned, triggerAutosave]);
  reactExports.useEffect(() => {
    return () => {
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    };
  }, []);
  const [showAVS, setShowAVS] = reactExports.useState(false);
  const [avsFollowUp, setAvsFollowUp] = reactExports.useState("Follow up in 2 weeks");
  const [avsPatientEd, setAvsPatientEd] = reactExports.useState("");
  const [spActive, setSpActive] = reactExports.useState(null);
  const [spFilter, setSpFilter] = reactExports.useState("");
  const [dictating, setDictating] = reactExports.useState({});
  const DICTATION_SAMPLES = {
    subjective: "Patient presents with a 3-day history of worsening chest tightness and shortness of breath on exertion. Denies fever, cough, or pleuritic pain. Reports similar episode 6 months ago that resolved with bronchodilator use. No recent travel or sick contacts.",
    objective: "Vital signs stable. Blood pressure 138/86 mmHg, heart rate 82 bpm, respiratory rate 16, oxygen saturation 97% on room air, temperature 98.6°F. Lung auscultation reveals mild expiratory wheeze bilaterally. No use of accessory muscles. Heart sounds regular, no murmurs.",
    assessment: "1. Mild intermittent asthma exacerbation, likely triggered by seasonal allergens. 2. Hypertension, currently suboptimally controlled. 3. Consider GERD as contributing factor given reported post-meal symptom worsening.",
    plan: "1. Albuterol inhaler 2 puffs every 4-6 hours as needed for bronchospasm. 2. Increase lisinopril from 10mg to 20mg daily for blood pressure optimization. 3. Order spirometry to assess lung function. 4. Follow-up in 2 weeks or sooner if symptoms worsen. 5. Patient education provided on asthma triggers and proper inhaler technique."
  };
  const handleDictate = (sectionKey) => {
    if (isSigned) return;
    setDictating((prev) => ({ ...prev, [sectionKey]: true }));
    setTimeout(() => {
      const sample = DICTATION_SAMPLES[sectionKey] ?? "";
      setSoap((prev) => ({
        ...prev,
        [sectionKey]: prev[sectionKey] ? `${prev[sectionKey]} ${sample}` : sample
      }));
      setDictating((prev) => ({ ...prev, [sectionKey]: false }));
    }, 2500);
  };
  const [signedLabCount, setSignedLabCount] = reactExports.useState(0);
  const [signedImgCount, setSignedImgCount] = reactExports.useState(0);
  const [signedRxCount, setSignedRxCount] = reactExports.useState(0);
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [isSigning, setIsSigning] = reactExports.useState(false);
  const [showEducation, setShowEducation] = reactExports.useState(true);
  const [educationChecked, setEducationChecked] = reactExports.useState({});
  const [showChargeCapture, setShowChargeCapture] = reactExports.useState(true);
  const [capturedCpts, setCapturedCpts] = reactExports.useState([]);
  const [newCptCode, setNewCptCode] = reactExports.useState("");
  const [newCptDesc, setNewCptDesc] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!newRx.drug.trim()) {
      setInteractions([]);
      setAddingDespiteContraindicated(false);
      setAllergyAlert(null);
      setAllergyJustification("");
      setAllergyOverridden(false);
      return;
    }
    if (activePatientId) {
      const patientAllergies = DEMO_ALLERGIES.filter(
        (a) => a.patientId === activePatientId
      );
      const drugLower = newRx.drug.toLowerCase();
      const matched = patientAllergies.find((a) => {
        const allergenBase = a.allergen.toLowerCase().replace(/\s*\(.*?\)/g, "").trim();
        return drugLower.includes(allergenBase) || allergenBase.includes(drugLower.split(" ")[0]);
      });
      if (matched) {
        setAllergyAlert({
          allergen: matched.allergen,
          reaction: matched.reaction,
          severity: matched.severity
        });
      } else {
        setAllergyAlert(null);
        setAllergyJustification("");
        setAllergyOverridden(false);
      }
    }
    const timeout = setTimeout(() => {
      const currentMedNames = [
        ...activeMeds.map((m) => `${m.name} ${m.dose}`),
        ...prescriptions.map((rx) => rx.drug)
      ];
      const found = checkInteractions(newRx.drug, currentMedNames);
      setInteractions(found);
    }, 300);
    return () => clearTimeout(timeout);
  }, [newRx.drug, activeMeds, prescriptions, activePatientId]);
  const handleApplyOrderSet = (set) => {
    const existingNames = new Set(orders.map((o) => o.name.toLowerCase()));
    const toAdd = set.orders.filter(
      (item) => !existingNames.has(item.name.toLowerCase())
    );
    if (toAdd.length === 0) {
      ue.info(`All orders from ${set.name} already added`);
      return;
    }
    setOrders((prev) => [
      ...prev,
      ...toAdd.map((item, idx) => ({
        id: BigInt(Date.now() + idx),
        type: item.type,
        name: item.name
      }))
    ]);
    ue.success(
      `${toAdd.length} order${toAdd.length > 1 ? "s" : ""} added from ${set.name}`,
      { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-success" }) }
    );
    setShowOrderForm(false);
  };
  const handleAddOrder = () => {
    if (!newOrder.name.trim()) {
      ue.error("Order name required");
      return;
    }
    setOrders((prev) => [
      ...prev,
      { id: BigInt(prev.length + Date.now()), ...newOrder }
    ]);
    setNewOrder({ type: "lab", name: "" });
    setShowOrderForm(false);
  };
  const handleAddRx = () => {
    if (!newRx.drug.trim()) {
      ue.error("Drug name required");
      return;
    }
    const hasContraindicated = interactions.some(
      (ia) => ia.severity === "contraindicated"
    );
    if (hasContraindicated && !addingDespiteContraindicated) {
      setAddingDespiteContraindicated(true);
      return;
    }
    if (allergyAlert && !allergyOverridden) {
      ue.error("Allergy alert: provide clinical justification to override");
      return;
    }
    setPrescriptions((prev) => [
      ...prev,
      { id: BigInt(prev.length + Date.now()), ...newRx }
    ]);
    setNewRx({ drug: "", dose: "", frequency: "", route: "PO" });
    setShowRxForm(false);
    setInteractions([]);
    setAddingDespiteContraindicated(false);
    setAllergyAlert(null);
    setAllergyJustification("");
    setAllergyOverridden(false);
  };
  const checkVitalsAlerts = (key, value) => {
    const newAlerts = [];
    if (key === "bp") {
      const systolic = Number.parseInt(value.split("/")[0] ?? "0");
      if (!Number.isNaN(systolic)) {
        if (systolic > 180) {
          newAlerts.push({
            id: "bp-high",
            message: `⚠ Hypertensive Crisis — Systolic BP ${systolic} mmHg. Consider immediate evaluation, IV antihypertensive if symptomatic.`,
            dismissed: false
          });
        } else if (systolic < 90 && systolic > 0) {
          newAlerts.push({
            id: "bp-low",
            message: `⚠ Hypotension — Systolic BP ${systolic} mmHg. Assess for shock, dehydration, or cardiac cause.`,
            dismissed: false
          });
        }
      }
    }
    if (key === "spo2") {
      const spo2 = Number.parseFloat(value);
      if (!Number.isNaN(spo2) && spo2 < 92 && spo2 > 0) {
        newAlerts.push({
          id: "spo2-low",
          message: `⚠ Hypoxemia — SpO₂ ${spo2}%. Apply supplemental oxygen. Consider ABG, chest X-ray, and pulmonology consult.`,
          dismissed: false
        });
      }
    }
    if (key === "hr") {
      const hr = Number.parseFloat(value);
      if (!Number.isNaN(hr)) {
        if (hr > 130) {
          newAlerts.push({
            id: "hr-high",
            message: `⚠ Tachycardia — HR ${hr} bpm. Evaluate for arrhythmia, infection, dehydration.`,
            dismissed: false
          });
        } else if (hr < 40 && hr > 0) {
          newAlerts.push({
            id: "hr-low",
            message: `⚠ Bradycardia — HR ${hr} bpm. Obtain 12-lead ECG. Consider cardiology consult.`,
            dismissed: false
          });
        }
      }
    }
    if (key === "temp") {
      const temp = Number.parseFloat(value);
      if (!Number.isNaN(temp) && temp > 102 && temp > 0) {
        newAlerts.push({
          id: "temp-high",
          message: `⚠ Fever — Temperature ${temp}°F. Consider infection workup: CBC, CMP, blood cultures, UA.`,
          dismissed: false
        });
      }
    }
    if (newAlerts.length > 0) {
      setCdsAlerts((prev) => {
        const notDismissedIds = prev.filter((a) => !a.dismissed).map((a) => a.id);
        const toAdd = newAlerts.filter((a) => !notDismissedIds.includes(a.id));
        return [
          ...prev.filter((a) => a.dismissed),
          ...prev.filter(
            (a) => !a.dismissed && !newAlerts.find((na) => na.id === a.id)
          ),
          ...toAdd
        ];
      });
    }
  };
  const handleSaveDraft = async () => {
    if (!actor || !activePatientId) {
      ue.error("Cannot save: encounter data not available");
      return;
    }
    setIsSaving(true);
    try {
      await actor.createClinicalNote(
        activePatientId,
        "encounter-draft",
        JSON.stringify({ vitals, soap, orders, prescriptions }),
        BigInt(0)
      );
      ue.success("Encounter draft saved");
      localStorage.removeItem(draftKey);
      setAutosaveStatus("idle");
    } catch {
      ue.error("Failed to save draft");
    } finally {
      setIsSaving(false);
    }
  };
  const handleSignClose = async () => {
    if (!actor || !activePatientId) {
      ue.error("Cannot sign: encounter data not available");
      return;
    }
    setIsSigning(true);
    try {
      await actor.createClinicalNote(
        activePatientId,
        "encounter-signed",
        JSON.stringify({
          vitals,
          soap,
          orders,
          prescriptions,
          status: "signed"
        }),
        BigInt(0)
      );
      if (prescriptions.length > 0) {
        await Promise.all(
          prescriptions.map(
            (rx) => actor.createPrescription(
              activePatientId,
              rx.drug,
              rx.dose,
              rx.frequency,
              "pending",
              (patient == null ? void 0 : patient.name) ?? "Provider"
            )
          )
        );
      }
      const labOrders = orders.filter((o) => o.type === "lab");
      if (labOrders.length > 0) {
        await Promise.all(
          labOrders.map(
            (o) => actor.addLabResult(
              activePatientId,
              o.name,
              "Pending / In Progress",
              "pending",
              false
            )
          )
        );
      }
      const inferModality = (name) => {
        if (name.includes("CT")) return "CT";
        if (name.includes("MRI")) return "MRI";
        if (name.includes("Ultrasound") || name.includes("US"))
          return "Ultrasound";
        return "X-Ray";
      };
      const inferBodyPart = (name) => {
        const match = name.match(/(?:CT|MRI|Ultrasound|US|X-Ray)\s+(.+)/);
        return match ? match[1].trim() : name.trim();
      };
      const imagingOrders = orders.filter((o) => o.type === "imaging");
      if (imagingOrders.length > 0) {
        await Promise.all(
          imagingOrders.map(
            (o) => actor.createImagingOrder(
              activePatientId,
              (patient == null ? void 0 : patient.name) ?? "Unknown",
              inferModality(o.name),
              inferBodyPart(o.name),
              "routine",
              "Dr. Sarah Chen",
              o.name
            )
          )
        );
        const existing = JSON.parse(
          localStorage.getItem("medunite_imaging_orders") ?? "[]"
        );
        const newEntries = imagingOrders.map((o, idx) => ({
          id: Date.now() + idx,
          patientName: (patient == null ? void 0 : patient.name) ?? "Unknown",
          orderName: o.name,
          modality: inferModality(o.name),
          bodyPart: inferBodyPart(o.name),
          status: "ordered",
          date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
        }));
        localStorage.setItem(
          "medunite_imaging_orders",
          JSON.stringify([...existing, ...newEntries])
        );
      }
      const labCount = labOrders.length;
      const imgCount = imagingOrders.length;
      const parts = [];
      if (labCount > 0)
        parts.push(`${labCount} lab order${labCount > 1 ? "s" : ""}`);
      if (imgCount > 0)
        parts.push(`${imgCount} imaging order${imgCount > 1 ? "s" : ""}`);
      const orderSummary = parts.length > 0 ? ` — ${parts.join(", ")} submitted` : "";
      const diagnosisText = soap.assessment.trim();
      let diagAddedCount = 0;
      if (diagnosisText && activePatientId) {
        const patientKey = String(Number(activePatientId));
        try {
          const existing = JSON.parse(
            localStorage.getItem(`medunite_problems_${patientKey}`) ?? "[]"
          );
          const lines = diagnosisText.split("\n").filter((l) => l.trim());
          const newEntries = lines.map((line) => {
            const match = line.match(
              /^([A-Z][\d.]+[A-Z0-9]*)\s*[-–]\s*(.+)$/
            );
            if (match) {
              return {
                id: nextEncId(),
                name: match[2].trim(),
                icd10: match[1].trim(),
                onset: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                severity: "Moderate",
                status: "Active"
              };
            }
            return {
              id: nextEncId(),
              name: line.trim(),
              icd10: "",
              onset: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
              severity: "Moderate",
              status: "Active"
            };
          }).filter(
            (e) => e.name && !existing.find((ex) => ex.name === e.name)
          );
          if (newEntries.length > 0) {
            localStorage.setItem(
              `medunite_problems_${patientKey}`,
              JSON.stringify([...existing, ...newEntries])
            );
            diagAddedCount = newEntries.length;
          }
        } catch {
        }
      }
      const diagNote = diagAddedCount > 0 ? ` — ${diagAddedCount} diagnosis${diagAddedCount !== 1 ? "es" : ""} added to problem list` : "";
      ue.success(`Encounter signed and closed${orderSummary}${diagNote}`);
      setSignedLabCount(labCount);
      setSignedImgCount(imgCount);
      setSignedRxCount(prescriptions.length);
      setAutosaveStatus("idle");
      setIsSigned(true);
      setShowAVS(true);
    } catch {
      ue.error("Failed to sign encounter");
    } finally {
      localStorage.removeItem(draftKey);
      setIsSigning(false);
    }
  };
  const hasContraindicatedAlert = interactions.some(
    (ia) => ia.severity === "contraindicated"
  );
  if (isLoading || isFetching) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "encounter.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "encounter.back_button",
          onClick: onBack,
          className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
          children: "← Back to Appointments"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full" })
    ] });
  }
  if (notFound) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "encounter.error_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "encounter.back_button",
          onClick: onBack,
          className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
          children: "← Back to Appointments"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card px-5 py-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Encounter data not found." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "The patient or appointment record could not be loaded." })
      ] })
    ] });
  }
  const encounterStep = (() => {
    if (isSigned) return 4;
    if (orders.length > 0 || prescriptions.length > 0) return 3;
    if (soap.subjective || soap.objective || soap.assessment || soap.plan)
      return 2;
    return 1;
  })();
  const STEPS = ["Vitals", "Assessment & Plan", "Orders", "Sign Off"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", "data-ocid": "encounter.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center gap-0 px-5 py-3 bg-card border-b border-border",
        "data-ocid": "encounter.progress.panel",
        children: STEPS.map((label, idx) => {
          const stepNum = idx + 1;
          const isComplete = encounterStep > stepNum;
          const isCurrent = encounterStep === stepNum;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center flex-1 last:flex-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors",
                        isComplete ? "bg-success text-success-foreground" : isCurrent ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border-2 border-border"
                      ),
                      children: isComplete ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }) : stepNum
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "text-xs font-medium whitespace-nowrap",
                        isCurrent ? "text-foreground" : isComplete ? "text-success" : "text-muted-foreground"
                      ),
                      children: label
                    }
                  )
                ] }),
                idx < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "flex-1 h-px mx-2",
                      isComplete ? "bg-success/40" : "bg-border"
                    )
                  }
                )
              ]
            },
            label
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EncounterHeader,
      {
        patient,
        appointment,
        activeMeds,
        activeAppointmentId,
        isSigned,
        autosaveStatus,
        onBack
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EncounterVitals,
      {
        vitals,
        setVitals,
        cdsAlerts,
        setCdsAlerts,
        isSigned,
        checkVitalsAlerts
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EncounterSOAP,
      {
        soap,
        setSoap,
        isSigned,
        appointmentId: activeAppointmentId,
        appointmentReason: (appointment == null ? void 0 : appointment.reason) ?? "",
        spActive,
        setSpActive,
        spFilter,
        setSpFilter,
        dictating,
        handleDictate,
        showRos,
        setShowRos,
        rosFindings,
        setRosFindings,
        rosChecked,
        rosText
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EncounterOrders,
      {
        orders,
        setOrders,
        prescriptions,
        setPrescriptions,
        showOrderForm,
        setShowOrderForm,
        newOrder,
        setNewOrder,
        showRxForm,
        setShowRxForm,
        newRx,
        setNewRx,
        interactions,
        allergyAlert,
        allergyJustification,
        setAllergyJustification,
        allergyOverridden,
        setAllergyOverridden,
        addingDespiteContraindicated,
        setAddingDespiteContraindicated,
        isSigned,
        hasContraindicatedAlert,
        handleAddOrder,
        handleAddRx,
        handleApplyOrderSet
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EncounterSignOff,
      {
        isSigned,
        showAVS,
        setShowAVS,
        patient,
        soap,
        prescriptions,
        orders,
        avsFollowUp,
        setAvsFollowUp,
        avsPatientEd,
        setAvsPatientEd,
        educationChecked,
        setEducationChecked,
        showEducation,
        setShowEducation,
        capturedCpts,
        setCapturedCpts,
        newCptCode,
        setNewCptCode,
        newCptDesc,
        setNewCptDesc,
        showChargeCapture,
        setShowChargeCapture,
        isSaving,
        isSigning,
        signedLabCount,
        signedImgCount,
        signedRxCount,
        handleSaveDraft,
        handleSignClose,
        onBack,
        onNavigate
      }
    )
  ] });
}
export {
  Encounter as default
};
