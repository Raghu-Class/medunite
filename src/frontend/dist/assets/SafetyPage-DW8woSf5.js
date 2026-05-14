import { r as reactExports, j as jsxRuntimeExports, B as Button, T as TriangleAlert, A as Activity, i as ue, n as DEMO_PATIENTS } from "./index-4utdZC3E.js";
import { B as Badge } from "./badge-D0bvPgLI.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { P as Progress } from "./progress-DiD8RwaG.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
import { S as ShieldAlert } from "./shield-alert-CZH2jIqU.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
function patientName(id) {
  var _a;
  return ((_a = DEMO_PATIENTS.find((p) => p.id === id)) == null ? void 0 : _a.name) ?? "Unknown Patient";
}
const INITIAL_FLAGS = [
  {
    id: 1,
    patientId: 1n,
    patient: patientName(1n),
    type: "Contact",
    dateApplied: "2026-03-13",
    reason: "MRSA positive culture"
  },
  {
    id: 2,
    patientId: 2n,
    patient: patientName(2n),
    type: "Droplet",
    dateApplied: "2026-03-14",
    reason: "Influenza A diagnosis"
  },
  {
    id: 3,
    patientId: 6n,
    patient: patientName(6n),
    type: "Airborne",
    dateApplied: "2026-03-15",
    reason: "Suspected pulmonary TB"
  }
];
const FALL_RISKS = [
  {
    patientId: 1n,
    patient: patientName(1n),
    morseScore: 65,
    level: "High",
    lastAssessed: "2026-03-15"
  },
  {
    patientId: 3n,
    patient: patientName(3n),
    morseScore: 35,
    level: "Medium",
    lastAssessed: "2026-03-14"
  },
  {
    patientId: 2n,
    patient: patientName(2n),
    morseScore: 15,
    level: "Low",
    lastAssessed: "2026-03-15"
  },
  {
    patientId: 6n,
    patient: patientName(6n),
    morseScore: 50,
    level: "Medium",
    lastAssessed: "2026-03-13"
  }
];
const PRESSURE_RISKS = [
  {
    patientId: 1n,
    patient: patientName(1n),
    bradenScore: 14,
    level: "Moderate Risk",
    lastAssessed: "2026-03-15"
  },
  {
    patientId: 2n,
    patient: patientName(2n),
    bradenScore: 19,
    level: "Low Risk",
    lastAssessed: "2026-03-14"
  },
  {
    patientId: 6n,
    patient: patientName(6n),
    bradenScore: 12,
    level: "High Risk",
    lastAssessed: "2026-03-15"
  }
];
function getFallBadgeVariant(level) {
  if (level === "High") return "destructive";
  if (level === "Medium") return "secondary";
  return "outline";
}
function getPressureBadgeVariant(level) {
  if (level === "High Risk") return "destructive";
  if (level === "Moderate Risk") return "secondary";
  return "outline";
}
function getIsolationBg(type) {
  if (type === "Airborne")
    return "bg-destructive/10 text-destructive border-destructive/30";
  if (type === "Droplet")
    return "bg-warning/10 text-warning-foreground border-warning/30";
  return "bg-muted text-muted-foreground border-border";
}
function SafetyPage({
  activePatientId,
  activePatientName,
  onClearFilter
}) {
  const [flags, setFlags] = reactExports.useState(INITIAL_FLAGS);
  const [expanded, setExpanded] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    patient: "",
    type: "Contact",
    dateApplied: "",
    reason: ""
  });
  const filteredFlags = reactExports.useMemo(() => {
    if (!activePatientId) return flags;
    return flags.filter((f) => !f.patientId || f.patientId === activePatientId);
  }, [flags, activePatientId]);
  const filteredFallRisks = reactExports.useMemo(() => {
    if (!activePatientId) return FALL_RISKS;
    return FALL_RISKS.filter(
      (r) => !r.patientId || r.patientId === activePatientId
    );
  }, [activePatientId]);
  const filteredPressureRisks = reactExports.useMemo(() => {
    if (!activePatientId) return PRESSURE_RISKS;
    return PRESSURE_RISKS.filter(
      (r) => !r.patientId || r.patientId === activePatientId
    );
  }, [activePatientId]);
  const handleAddFlag = () => {
    if (!form.patient.trim()) {
      ue.error("Patient name is required");
      return;
    }
    const newFlag = { id: Date.now(), ...form };
    setFlags((prev) => [newFlag, ...prev]);
    setForm({ patient: "", type: "Contact", dateApplied: "", reason: "" });
    setExpanded(false);
    ue.success(`Isolation flag added for ${form.patient}`);
  };
  const handleRemoveFlag = (id) => {
    setFlags((prev) => prev.filter((f) => f.id !== id));
    ue.success("Isolation flag removed");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", "data-ocid": "safety.page", children: [
    activePatientId && activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientFilterBar,
      {
        patientName: activePatientName,
        onClear: onClearFilter ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Infection Control / Isolation Flags" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            "data-ocid": "safety.isolation.open_modal_button",
            onClick: () => setExpanded((v) => !v),
            className: "gap-1.5",
            children: [
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              expanded ? "Cancel" : "Add Flag"
            ]
          }
        )
      ] }) }),
      expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "flag-patient", className: "text-xs", children: "Patient Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "flag-patient",
                "data-ocid": "safety.patient.input",
                placeholder: "Patient name",
                value: form.patient,
                onChange: (e) => setForm((f) => ({ ...f, patient: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Isolation Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.type,
                onValueChange: (v) => setForm((f) => ({ ...f, type: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "safety.type.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Contact", children: "Contact" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Droplet", children: "Droplet" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Airborne", children: "Airborne" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "flag-date", className: "text-xs", children: "Date Applied" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "flag-date",
                type: "date",
                "data-ocid": "safety.date.input",
                value: form.dateApplied,
                onChange: (e) => setForm((f) => ({ ...f, dateApplied: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "flag-reason", className: "text-xs", children: "Reason / Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "flag-reason",
                "data-ocid": "safety.reason.input",
                placeholder: "Clinical reason for isolation",
                value: form.reason,
                onChange: (e) => setForm((f) => ({ ...f, reason: e.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            "data-ocid": "safety.submit_button",
            onClick: handleAddFlag,
            children: "Add Isolation Flag"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-32", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-32", children: "Date Applied" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-20" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredFlags.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "safety.isolation.empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 5,
            className: "text-center text-muted-foreground py-8 text-sm",
            children: "No active isolation flags"
          }
        ) }) : filteredFlags.map((flag, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `safety.isolation.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: flag.patient }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${getIsolationBg(flag.type)}`,
                  children: flag.type
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: flag.dateApplied }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: flag.reason }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  "data-ocid": `safety.isolation.delete_button.${idx + 1}`,
                  onClick: () => handleRemoveFlag(flag.id),
                  className: "h-7 text-xs text-destructive hover:text-destructive",
                  children: "Remove"
                }
              ) })
            ]
          },
          flag.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Fall Risk Assessment — Morse Fall Scale" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-40", children: "Morse Score (0–125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-28", children: "Risk Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-32", children: "Last Assessed" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredFallRisks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 4,
            className: "text-center text-muted-foreground py-8 text-sm",
            children: "No fall risk assessments on record"
          }
        ) }) : filteredFallRisks.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `safety.fall_risk.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: r.patient }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Progress,
                  {
                    value: r.morseScore / 125 * 100,
                    className: "h-1.5 w-24"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tabular-nums text-muted-foreground", children: r.morseScore })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: getFallBadgeVariant(r.level), children: r.level }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: r.lastAssessed })
            ]
          },
          r.patient
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Pressure Ulcer Risk — Braden Scale" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-40", children: "Braden Score (6–23)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-36", children: "Risk Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-32", children: "Last Assessed" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredPressureRisks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 4,
            className: "text-center text-muted-foreground py-8 text-sm",
            children: "No pressure risk assessments on record"
          }
        ) }) : filteredPressureRisks.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `safety.pressure.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: r.patient }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Progress,
                  {
                    value: (r.bradenScore - 6) / 17 * 100,
                    className: "h-1.5 w-24"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tabular-nums text-muted-foreground", children: r.bradenScore })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: getPressureBadgeVariant(r.level), children: r.level }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: r.lastAssessed })
            ]
          },
          r.patient
        )) })
      ] }) })
    ] })
  ] });
}
export {
  SafetyPage as default
};
