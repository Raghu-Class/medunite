import { aO as usePortalContext, r as reactExports, j as jsxRuntimeExports, i as ue, Y as DEMO_VITALS } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
const READING_CONFIGS = {
  "Blood Pressure": {
    placeholder: "e.g. 118/76",
    unit: "mmHg"
  },
  Weight: { placeholder: "e.g. 165.4", unit: "lbs" },
  "Blood Glucose": {
    placeholder: "e.g. 98",
    unit: "mg/dL"
  },
  "Heart Rate": { placeholder: "e.g. 72", unit: "bpm" }
};
function getStatusVariant(type, value) {
  if (type === "Blood Pressure") {
    const parts = value.split("/").map(Number);
    if (parts.length !== 2) return "neutral";
    const [sys, dia] = parts;
    if ((sys ?? 0) >= 140 || (dia ?? 0) >= 90) return "danger";
    if ((sys ?? 0) >= 130 || (dia ?? 0) >= 80) return "warning";
    return "success";
  }
  if (type === "Blood Glucose") {
    const n = Number(value);
    if (n > 180 || n < 70) return "danger";
    if (n > 140) return "warning";
    return "success";
  }
  if (type === "Heart Rate") {
    const n = Number(value);
    if (n > 100 || n < 50) return "warning";
    return "success";
  }
  return "neutral";
}
function demovitalsToReadings(patientId) {
  const rows = [];
  const patientVitals = DEMO_VITALS.filter((v) => v.patientId === patientId);
  for (const v of patientVitals) {
    const dateStr = v.date;
    rows.push({
      id: `${String(v.id)}-bp`,
      date: dateStr,
      time: "08:00",
      type: "Blood Pressure",
      value: v.bp,
      unit: "mmHg",
      notes: ""
    });
    rows.push({
      id: `${String(v.id)}-hr`,
      date: dateStr,
      time: "08:00",
      type: "Heart Rate",
      value: String(v.hr),
      unit: "bpm",
      notes: ""
    });
    rows.push({
      id: `${String(v.id)}-wt`,
      date: dateStr,
      time: "07:30",
      type: "Weight",
      // convert kg to lbs
      value: (v.weight * 2.205).toFixed(1),
      unit: "lbs",
      notes: ""
    });
  }
  rows.sort((a, b) => a.date < b.date ? 1 : -1);
  return rows;
}
function MyVitals() {
  const { id: PORTAL_PATIENT_ID } = usePortalContext();
  const seedVitals = reactExports.useMemo(
    () => demovitalsToReadings(PORTAL_PATIENT_ID),
    [PORTAL_PATIENT_ID]
  );
  const [sessionReadings, setSessionReadings] = reactExports.useState([]);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? "",
    time: (/* @__PURE__ */ new Date()).toTimeString().slice(0, 5),
    type: "Blood Pressure",
    value: "",
    notes: ""
  });
  const vitals = reactExports.useMemo(
    () => [...sessionReadings, ...seedVitals],
    [sessionReadings, seedVitals]
  );
  const handleSubmit = () => {
    if (!form.date || !form.value.trim()) {
      ue.error("Please fill in the date and value.");
      return;
    }
    const cfg2 = READING_CONFIGS[form.type];
    const newReading = {
      id: `v${Date.now()}`,
      date: form.date,
      time: form.time,
      type: form.type,
      value: form.value.trim(),
      unit: cfg2.unit,
      notes: form.notes
    };
    setSessionReadings((prev) => [newReading, ...prev]);
    setForm({
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? "",
      time: (/* @__PURE__ */ new Date()).toTimeString().slice(0, 5),
      type: "Blood Pressure",
      value: "",
      notes: ""
    });
    setShowForm(false);
    ue.success("Vital reading logged!");
  };
  const cfg = READING_CONFIGS[form.type];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "vitals.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "My Vitals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Track your home readings between clinic visits." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "vitals.log_button",
          onClick: () => setShowForm((v) => !v),
          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
                ]
              }
            ),
            "Log New Reading"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-4 bg-card border border-border rounded-sm",
        "data-ocid": "vitals.form.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-foreground mb-3", children: "Log New Vital Reading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "vitals-date",
                  className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                  children: "Date"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "vitals-date",
                  type: "date",
                  value: form.date,
                  onChange: (e) => setForm((p) => ({ ...p, date: e.target.value })),
                  className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "vitals-time",
                  className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                  children: "Time"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "vitals-time",
                  type: "time",
                  value: form.time,
                  onChange: (e) => setForm((p) => ({ ...p, time: e.target.value })),
                  className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "vitals-type",
                  className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                  children: "Reading Type"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "vitals-type",
                  "data-ocid": "vitals.type.select",
                  value: form.type,
                  onChange: (e) => setForm((p) => ({
                    ...p,
                    type: e.target.value,
                    value: ""
                  })),
                  className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Blood Pressure" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Weight" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Blood Glucose" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Heart Rate" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "vitals-value",
                  className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                  children: [
                    "Value (",
                    cfg.unit,
                    ")"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "vitals-value",
                  type: "text",
                  "data-ocid": "vitals.value.input",
                  value: form.value,
                  onChange: (e) => setForm((p) => ({ ...p, value: e.target.value })),
                  placeholder: cfg.placeholder,
                  className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 sm:col-span-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "vitals-notes",
                  className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                  children: "Notes (optional)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "vitals-notes",
                  type: "text",
                  value: form.notes,
                  onChange: (e) => setForm((p) => ({ ...p, notes: e.target.value })),
                  placeholder: "e.g. fasting, after exercise, stressed...",
                  className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "vitals.submit_button",
                onClick: handleSubmit,
                className: "px-4 py-1.5 rounded-sm text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                children: "Save Reading"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowForm(false),
                className: "px-4 py-1.5 rounded-sm text-xs font-medium text-muted-foreground border border-border hover:text-foreground transition-colors",
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border border-border rounded-sm overflow-hidden",
        "data-ocid": "vitals.table",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Notes" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: vitals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "td",
            {
              colSpan: 6,
              className: "px-4 py-8 text-center text-sm text-muted-foreground",
              "data-ocid": "vitals.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "No readings logged yet." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-3", children: "Track your blood pressure, weight, and glucose at home." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowForm(true),
                    "data-ocid": "vitals.log.button",
                    className: "inline-flex items-center gap-1.5 h-7 px-3 text-xs font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors",
                    children: "Log a Reading"
                  }
                )
              ]
            }
          ) }) : vitals.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `vitals.item.${idx + 1}`,
              className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium text-foreground", children: v.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: v.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-foreground", children: v.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 font-mono font-semibold text-foreground", children: [
                  v.value,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal text-muted-foreground text-xs", children: v.unit })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: getStatusVariant(v.type, v.value),
                    label: getStatusVariant(v.type, v.value) === "success" ? "Normal" : getStatusVariant(v.type, v.value) === "warning" ? "Elevated" : getStatusVariant(v.type, v.value) === "danger" ? "High" : "—"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground text-xs max-w-[180px] truncate", children: v.notes || "—" })
              ]
            },
            v.id
          )) })
        ] })
      }
    )
  ] });
}
export {
  MyVitals as default
};
