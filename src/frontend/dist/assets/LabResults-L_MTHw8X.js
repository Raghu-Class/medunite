import { j as jsxRuntimeExports, u as useDemoMode, f as useActor, r as reactExports, i as ue, F as FlaskConical, T as TriangleAlert, B as Button, e as cn } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { S as Switch } from "./switch-Rr3vJljY.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { T as TrendingUp, A as Area } from "./Area-CIoHqAne.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, a as ReferenceLine, T as Tooltip } from "./generateCategoricalChart-CDEKTkJ0.js";
import { A as AreaChart } from "./AreaChart-YQCUV02S.js";
import { C as CartesianGrid } from "./CartesianGrid-B6zYq_XM.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import { P as Printer } from "./printer-BmPL4aH8.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
const HISTORICAL_OFFSETS = {
  HbA1c: [
    { monthsAgo: 6, delta: 0.4 },
    { monthsAgo: 5, delta: 0.3 },
    { monthsAgo: 4, delta: 0.2 },
    { monthsAgo: 3, delta: -0.1 },
    { monthsAgo: 2, delta: -0.2 },
    { monthsAgo: 1, delta: -0.15 }
  ],
  Glucose: [
    { monthsAgo: 6, delta: 18 },
    { monthsAgo: 5, delta: 12 },
    { monthsAgo: 4, delta: 8 },
    { monthsAgo: 3, delta: -4 },
    { monthsAgo: 2, delta: -8 },
    { monthsAgo: 1, delta: -5 }
  ],
  Creatinine: [
    { monthsAgo: 6, delta: 0.2 },
    { monthsAgo: 5, delta: 0.15 },
    { monthsAgo: 4, delta: 0.1 },
    { monthsAgo: 3, delta: 0.05 },
    { monthsAgo: 2, delta: 0 },
    { monthsAgo: 1, delta: -0.05 }
  ],
  Potassium: [
    { monthsAgo: 6, delta: 0.3 },
    { monthsAgo: 5, delta: 0.2 },
    { monthsAgo: 4, delta: 0.1 },
    { monthsAgo: 3, delta: -0.1 },
    { monthsAgo: 2, delta: -0.2 },
    { monthsAgo: 1, delta: -0.1 }
  ],
  LDL: [
    { monthsAgo: 6, delta: 22 },
    { monthsAgo: 5, delta: 15 },
    { monthsAgo: 4, delta: 10 },
    { monthsAgo: 3, delta: -5 },
    { monthsAgo: 2, delta: -10 },
    { monthsAgo: 1, delta: -8 }
  ]
};
const REF_RANGES = {
  HbA1c: { min: 4, max: 5.6, unit: "%", display: "4.0–5.6%" },
  Glucose: { min: 70, max: 99, unit: "mg/dL", display: "70–99 mg/dL" },
  Creatinine: { min: 0.7, max: 1.3, unit: "mg/dL", display: "0.7–1.3 mg/dL" },
  Potassium: { min: 3.5, max: 5, unit: "mEq/L", display: "3.5–5.0 mEq/L" },
  LDL: { min: 0, max: 100, unit: "mg/dL", display: "<100 mg/dL" },
  Sodium: { min: 135, max: 145, unit: "mEq/L", display: "135–145 mEq/L" }
};
function formatMonthLabel(monthsAgo) {
  const now = /* @__PURE__ */ new Date();
  now.setMonth(now.getMonth() - monthsAgo);
  return now.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
}
function buildTrendSeries(labs) {
  const TRENDABLE = Object.keys(HISTORICAL_OFFSETS);
  const series = [];
  const byTest = /* @__PURE__ */ new Map();
  for (const lab of labs) {
    const num = Number.parseFloat(lab.result);
    if (Number.isNaN(num)) continue;
    const existing = byTest.get(lab.testName) ?? [];
    existing.push(lab);
    byTest.set(lab.testName, existing);
  }
  for (const testName of TRENDABLE) {
    const realResults = byTest.get(testName);
    const ref = REF_RANGES[testName];
    if (realResults && realResults.length > 0) {
      const currentVal = Number.parseFloat(realResults[0].result);
      const offsets = HISTORICAL_OFFSETS[testName];
      const historicalData = offsets.map((o) => ({
        date: formatMonthLabel(o.monthsAgo),
        value: Math.round((currentVal + o.delta) * 10) / 10
      }));
      const data = [...historicalData, { date: "Now", value: currentVal }];
      series.push({
        testName,
        unit: realResults[0].unit || ((ref == null ? void 0 : ref.unit) ?? ""),
        data,
        refMin: ref == null ? void 0 : ref.min,
        refMax: ref == null ? void 0 : ref.max,
        refDisplay: ref == null ? void 0 : ref.display
      });
    }
  }
  return series.slice(0, 3);
}
const CHART_COLORS = [
  "oklch(var(--primary))",
  "oklch(var(--chart-2))",
  "oklch(var(--chart-3))"
];
function CustomTooltip({
  active,
  payload,
  label,
  unit,
  refMin,
  refMax
}) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  const val = payload[0].value;
  const inRange = refMin !== void 0 && refMax !== void 0 ? val >= refMin && val <= refMax : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-popover border border-border rounded-md shadow-md px-3 py-2 text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "tabular-nums font-mono text-foreground", children: [
      val,
      " ",
      unit
    ] }),
    inRange !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `mt-0.5 font-medium ${inRange ? "text-success" : "text-destructive"}`,
        children: inRange ? "Within range" : "Out of range"
      }
    )
  ] });
}
function LabTrendChart({ labs, patientName }) {
  const series = buildTrendSeries(labs);
  if (series.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "labs.trend.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground", children: [
        "Lab Trends",
        patientName ? ` — ${patientName}` : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "(simulated 6-month history)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: series.map((s, idx) => {
      const color = CHART_COLORS[idx % CHART_COLORS.length];
      const values = s.data.map((d) => d.value);
      const minVal = Math.min(...values);
      const maxVal = Math.max(...values);
      const pad = (maxVal - minVal) * 0.3 || 0.5;
      const yMin = Math.max(
        0,
        Math.floor(
          (s.refMin !== void 0 ? Math.min(minVal, s.refMin) : minVal) - pad
        )
      );
      const yMax = Math.ceil(
        (s.refMax !== void 0 ? Math.max(maxVal, s.refMax) : maxVal) + pad
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-none bg-card",
          "data-ocid": `labs.trend.${s.testName.toLowerCase().replace(/[^a-z0-9]/g, "-")}.card`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-2.5 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold text-foreground flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.testName }),
              s.refDisplay && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-muted-foreground", children: [
                "Ref: ",
                s.refDisplay
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AreaChart,
              {
                data: s.data,
                margin: { top: 8, right: 8, left: -20, bottom: 0 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "linearGradient",
                    {
                      id: `grad-${idx}`,
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "5%",
                            stopColor: color,
                            stopOpacity: 0.18
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "95%",
                            stopColor: color,
                            stopOpacity: 0.02
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      stroke: "oklch(var(--border))",
                      opacity: 0.5
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      dataKey: "date",
                      tick: {
                        fontSize: 9,
                        fill: "oklch(var(--muted-foreground))"
                      },
                      tickLine: false,
                      axisLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      domain: [yMin, yMax],
                      tick: {
                        fontSize: 9,
                        fill: "oklch(var(--muted-foreground))"
                      },
                      tickLine: false,
                      axisLine: false,
                      width: 36
                    }
                  ),
                  s.refMin !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ReferenceLine,
                    {
                      y: s.refMin,
                      stroke: "oklch(var(--muted-foreground))",
                      strokeDasharray: "4 2",
                      strokeOpacity: 0.6,
                      label: {
                        value: "Min",
                        position: "right",
                        fontSize: 8,
                        fill: "oklch(var(--muted-foreground))"
                      }
                    }
                  ),
                  s.refMax !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ReferenceLine,
                    {
                      y: s.refMax,
                      stroke: "oklch(var(--destructive))",
                      strokeDasharray: "4 2",
                      strokeOpacity: 0.6,
                      label: {
                        value: "Max",
                        position: "right",
                        fontSize: 8,
                        fill: "oklch(var(--destructive))"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      content: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CustomTooltip,
                        {
                          unit: s.unit,
                          refMin: s.refMin,
                          refMax: s.refMax
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Area,
                    {
                      type: "monotone",
                      dataKey: "value",
                      stroke: color,
                      strokeWidth: 2,
                      fill: `url(#grad-${idx})`,
                      dot: { r: 3, fill: color, strokeWidth: 0 },
                      activeDot: { r: 5, fill: color, strokeWidth: 0 }
                    }
                  )
                ]
              }
            ) }) })
          ]
        },
        s.testName
      );
    }) })
  ] });
}
const LAB_REFERENCE_RANGES = {
  HbA1c: {
    display: "4.0–5.6%",
    getFlag: (v) => {
      if (v < 5.7) return "normal";
      if (v < 6.5) return "high";
      return "critical";
    }
  },
  Potassium: {
    display: "3.5–5.0 mEq/L",
    getFlag: (v) => {
      if (v < 2.5 || v > 6.5) return "critical";
      if (v < 3.5) return "low";
      if (v > 5) return "high";
      return "normal";
    }
  },
  Troponin: {
    display: "<0.04 ng/mL",
    getFlag: (v) => {
      if (v >= 0.4) return "critical";
      if (v >= 0.04) return "high";
      return "normal";
    }
  },
  "CBC WBC": {
    display: "4.5–11.0 k/uL",
    getFlag: (v) => {
      if (v < 4.5) return "low";
      if (v > 11) return "high";
      return "normal";
    }
  },
  Glucose: {
    display: "70–99 mg/dL",
    getFlag: (v) => {
      if (v < 40 || v > 500) return "critical";
      if (v < 70) return "low";
      if (v >= 126) return "high";
      if (v >= 100) return "high";
      return "normal";
    }
  },
  Sodium: {
    display: "135–145 mEq/L",
    getFlag: (v) => {
      if (v < 120 || v > 160) return "critical";
      if (v < 135) return "low";
      if (v > 145) return "high";
      return "normal";
    }
  },
  Creatinine: {
    display: "0.7–1.3 mg/dL",
    getFlag: (v) => {
      if (v > 1.3) return "high";
      return "normal";
    }
  },
  LDL: {
    display: "<100 mg/dL",
    getFlag: (v) => {
      if (v >= 130) return "high";
      if (v >= 100) return "high";
      return "normal";
    }
  }
};
function getResultFlag(testName, result, isCritical) {
  const ref = LAB_REFERENCE_RANGES[testName];
  if (!ref) {
    return {
      flag: isCritical ? "critical" : "normal",
      refDisplay: null
    };
  }
  const num = Number.parseFloat(result);
  if (Number.isNaN(num)) {
    return {
      flag: isCritical ? "critical" : "normal",
      refDisplay: ref.display
    };
  }
  return { flag: ref.getFlag(num), refDisplay: ref.display };
}
const flagToVariant = (flag) => {
  if (flag === "normal") return "success";
  if (flag === "critical") return "critical";
  return "warning";
};
const flagLabel = {
  normal: "Normal",
  low: "Low",
  high: "High",
  critical: "Critical"
};
function getFlagSeverity(flag) {
  if (flag === "normal") return 0;
  if (flag === "low" || flag === "high") return 1;
  return 2;
}
function getTrend(current, allResults) {
  const sameTest = allResults.filter(
    (r) => r.patientId === current.patientId && r.testName === current.testName
  ).sort((a, b) => Number(a.id) - Number(b.id));
  const currentIdx = sameTest.findIndex((r) => r.id === current.id);
  if (currentIdx <= 0) return "stable";
  const prev = sameTest[currentIdx - 1];
  const { flag: currentFlag } = getResultFlag(
    current.testName,
    current.result,
    current.isCritical
  );
  const { flag: prevFlag } = getResultFlag(
    prev.testName,
    prev.result,
    prev.isCritical
  );
  const currentSev = getFlagSeverity(currentFlag);
  const prevSev = getFlagSeverity(prevFlag);
  if (currentSev > prevSev) return "up";
  if (currentSev < prevSev) return "down";
  return "stable";
}
function TrendBadge({ trend }) {
  if (trend === "up") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "text-sm font-bold text-destructive",
        title: "Worsening trend",
        children: "↑"
      }
    );
  }
  if (trend === "down") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-success", title: "Improving trend", children: "↓" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", title: "Stable", children: "→" });
}
const SK_ROWS = ["sk-0", "sk-1", "sk-2", "sk-3", "sk-4"];
const SK_COLS = ["c0", "c1", "c2", "c3", "c4", "c5", "c6"];
const LAB_SECTIONS = [
  "All",
  "Chemistry",
  "Hematology",
  "Microbiology"
];
const LAB_SECTION_MAP = {
  HbA1c: "Chemistry",
  Glucose: "Chemistry",
  BMP: "Chemistry",
  CMP: "Chemistry",
  "Lipid Panel": "Chemistry",
  Lipids: "Chemistry",
  eGFR: "Chemistry",
  Creatinine: "Chemistry",
  BUN: "Chemistry",
  Sodium: "Chemistry",
  Potassium: "Chemistry",
  Chloride: "Chemistry",
  CBC: "Hematology",
  "CBC WBC": "Hematology",
  WBC: "Hematology",
  Hemoglobin: "Hematology",
  Hematocrit: "Hematology",
  Platelets: "Hematology",
  RBC: "Hematology",
  MCV: "Hematology",
  Culture: "Microbiology",
  "Blood Culture": "Microbiology",
  "Urine Culture": "Microbiology",
  Sensitivity: "Microbiology"
};
function getLabSection(testName) {
  for (const [key, section] of Object.entries(LAB_SECTION_MAP)) {
    if (testName.toLowerCase().includes(key.toLowerCase())) return section;
  }
  return "Chemistry";
}
function LabResults({
  onNavigate,
  activePatientId,
  activePatientName,
  onClearFilter
}) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor, isFetching } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [labs, setLabs] = reactExports.useState([]);
  const [patients, setPatients] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [showPendingBanner, setShowPendingBanner] = reactExports.useState(true);
  const [expandedRequisition, setExpandedRequisition] = reactExports.useState(
    null
  );
  const [form, setForm] = reactExports.useState({
    patientId: "",
    testName: "",
    result: "",
    unit: "",
    isCritical: false
  });
  const loadData = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const [labData, patientData] = await Promise.all([
        actor.listLabResults(),
        actor.listPatients()
      ]);
      setLabs(labData);
      setPatients(patientData);
    } catch {
      ue.error("Failed to load lab results");
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
    if (!form.patientId || !form.testName) {
      ue.error("Patient and test name required");
      return;
    }
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.addLabResult(
        BigInt(form.patientId),
        form.testName,
        form.result,
        form.unit,
        form.isCritical
      );
      ue.success(
        form.isCritical ? "Critical result recorded!" : "Lab result recorded"
      );
      setShowForm(false);
      setForm({
        patientId: "",
        testName: "",
        result: "",
        unit: "",
        isCritical: false
      });
      await loadData();
    } catch {
      ue.error("Failed to save lab result");
    } finally {
      setSubmitting(false);
    }
  };
  const criticalCount = labs.filter((l) => {
    const { flag } = getResultFlag(l.testName, l.result, l.isCritical);
    return flag === "critical";
  }).length;
  const filteredLabs = activePatientId ? labs.filter((l) => l.patientId === activePatientId) : labs;
  const [sectionFilter, setSectionFilter] = reactExports.useState(() => {
    try {
      const prefs = JSON.parse(
        localStorage.getItem("medunite_prefs_LabTech") || "{}"
      );
      const s = prefs.labSection;
      return LAB_SECTIONS.includes(s) ? s : "All";
    } catch {
      return "All";
    }
  });
  const sectionFilteredLabs = sectionFilter === "All" ? filteredLabs : filteredLabs.filter((l) => getLabSection(l.testName) === sectionFilter);
  if (!activePatientId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 gap-4 text-center",
        "data-ocid": "labs.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-10 h-10 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select a patient to view their lab results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onNavigate == null ? void 0 : onNavigate("patients"),
              className: "text-xs font-medium text-primary hover:underline",
              children: "Go to Patients"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "labs.page", children: [
    activePatientId && filteredLabs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(LabTrendChart, { labs: filteredLabs, patientName: activePatientName }),
    activePatientId && activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientFilterBar,
      {
        patientName: activePatientName,
        onClear: onClearFilter ?? (() => {
        })
      }
    ),
    (() => {
      const pendingCount = labs.filter(
        (r) => r.result === "Pending / In Progress"
      ).length;
      return pendingCount > 0 && showPendingBanner ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 bg-warning/10 border border-warning/30 text-warning-foreground rounded px-4 py-3 text-sm",
          "data-ocid": "lab-results.pending_banner",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 shrink-0 text-warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
              pendingCount,
              " result",
              pendingCount > 1 ? "s" : "",
              " pending — awaiting lab processing"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPendingBanner(false),
                className: "ml-auto text-warning hover:text-warning font-bold leading-none",
                "aria-label": "Dismiss",
                children: "×"
              }
            )
          ]
        }
      ) : null;
    })(),
    criticalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 bg-destructive/10 border border-destructive/30 text-destructive rounded px-4 py-3 text-sm font-medium",
        "data-ocid": "labs.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 shrink-0 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              criticalCount,
              " critical result",
              criticalCount > 1 ? "s" : ""
            ] }),
            " ",
            "require immediate clinical review."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
        "data-ocid": "labs.primary_button",
        onClick: () => setShowForm((v) => !v),
        children: [
          showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
          "Add Result"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1", children: "Section:" }),
      LAB_SECTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSectionFilter(s),
          className: [
            "px-2.5 py-1 text-xs rounded border transition-colors",
            sectionFilter === s ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-muted-foreground hover:border-primary/40"
          ].join(" "),
          children: s
        },
        s
      ))
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card p-5",
        "data-ocid": "labs.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "Add Lab Result" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
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
                        "data-ocid": "labs.patient.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: patients.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
                  ]
                }
              )
            ] }),
            ["testName", "result", "unit"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: f === "testName" ? "Test Name" : f.charAt(0).toUpperCase() + f.slice(1) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": `labs.${f}.input`,
                  value: form[f],
                  onChange: (e) => setForm((p) => ({ ...p, [f]: e.target.value })),
                  className: "mt-1 h-8 text-sm"
                }
              )
            ] }, f))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  "data-ocid": "labs.critical.switch",
                  checked: form.isCritical,
                  onCheckedChange: (v) => setForm((p) => ({ ...p, isCritical: v }))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Mark as Critical" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                "data-ocid": "labs.submit_button",
                disabled: submitting,
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                onClick: handleAdd,
                children: [
                  submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1.5 animate-spin" }) : null,
                  "Save Result"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "labs.cancel_button",
                variant: "outline",
                onClick: () => setShowForm(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "labs.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Test" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-2 w-12", children: "Trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Result" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Unit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Reference Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Flag" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? SK_ROWS.map((rowKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "labs.loading_state", children: SK_COLS.map((colKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }) }, colKey)) }, rowKey)) : sectionFilteredLabs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          colSpan: 7,
          className: "text-center text-muted-foreground py-10 text-sm",
          "data-ocid": "labs.empty_state",
          children: "No lab results recorded"
        }
      ) }) : sectionFilteredLabs.map((l, i) => {
        const patient = patients.find((p) => p.id === l.patientId);
        const { flag, refDisplay } = getResultFlag(
          l.testName,
          l.result,
          l.isCritical
        );
        const isCrit = flag === "critical";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `labs.row.${i + 1}`,
              className: cn(
                "hover:bg-muted/30 even:bg-muted/20 transition-all",
                isCrit ? "border-l-2 border-l-destructive" : "border-l-2 border-l-transparent hover:border-l-accent"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "cursor-pointer text-primary hover:underline font-medium",
                    "data-ocid": "labs.patient.link",
                    onClick: () => onNavigate == null ? void 0 : onNavigate("patients"),
                    children: (patient == null ? void 0 : patient.name) ?? "—"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: l.testName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-2 py-2.5 w-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendBadge, { trend: getTrend(l, labs) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableCell,
                  {
                    className: cn(
                      "px-4 py-2.5",
                      isCrit ? "font-mono font-bold text-destructive text-sm" : "text-sm"
                    ),
                    children: l.result
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: l.unit }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground px-4 py-2.5", children: refDisplay ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Ref: ",
                  refDisplay
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: flagToVariant(flag),
                    label: flagLabel[flag]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: (l.result === "Pending / In Progress" || l.result === "Ordered") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `labs.requisition.button.${i + 1}`,
                    onClick: () => setExpandedRequisition(
                      (prev) => prev === String(l.id) ? null : String(l.id)
                    ),
                    className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground border border-border rounded-sm px-2 py-1 hover:bg-muted/40 transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                      "Requisition"
                    ]
                  }
                ) })
              ]
            },
            String(l.id)
          ),
          expandedRequisition === String(l.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableRow,
            {
              "data-ocid": `labs.requisition.panel.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { colSpan: 7, className: "p-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: "@media print { .no-print { display: none !important; } .print-only { display: block !important; } }" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "print-only bg-white border border-border mx-4 my-3 p-6 rounded-sm text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-gray-300 pb-4 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-900", children: "MedUnite Medical Center" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "1200 Healthcare Blvd, Suite 400 · Springfield, ST 00100" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Tel: (555) 800-4000 · Fax: (555) 800-4001" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide", children: "Laboratory Requisition" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold", children: "Patient" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900", children: (patient == null ? void 0 : patient.name) ?? "—" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold", children: "MRN" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900", children: (patient == null ? void 0 : patient.mrn) ?? "—" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold", children: "Date of Birth" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900", children: (patient == null ? void 0 : patient.dateOfBirth) ?? "—" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold", children: "Date Ordered" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900", children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-sm p-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1", children: "Test Ordered" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-gray-900", children: l.testName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600 mt-1", children: [
                      "Unit: ",
                      l.unit || "—",
                      " · Priority:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Routine" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 italic", children: "This requisition was generated electronically via MedUnite." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `labs.requisition.print_button.${i + 1}`,
                        onClick: () => window.print(),
                        className: "no-print flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                          " Print"
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            },
            `req-${String(l.id)}`
          )
        ] });
      }) })
    ] }) })
  ] });
}
export {
  LabResults as default
};
