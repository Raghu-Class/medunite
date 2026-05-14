import { f as useActor, r as reactExports, j as jsxRuntimeExports, F as FlaskConical } from "./index-4utdZC3E.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
const REFERENCE_RANGES = {
  Glucose: { low: 70, high: 99, unit: "mg/dL", label: "70-99 mg/dL" },
  Hemoglobin: { low: 12, high: 17, unit: "g/dL", label: "12-17 g/dL" },
  WBC: { low: 4.5, high: 11, unit: "K/uL", label: "4.5-11.0 K/uL" },
  Creatinine: { low: 0.6, high: 1.2, unit: "mg/dL", label: "0.6-1.2 mg/dL" },
  Cholesterol: { low: 0, high: 200, unit: "mg/dL", label: "<200 mg/dL" },
  Platelets: { low: 150, high: 400, unit: "K/uL", label: "150-400 K/uL" },
  HbA1c: { low: 0, high: 5.7, unit: "%", label: "<5.7%" }
};
function getFlag(testName, result, isCritical) {
  if (isCritical) return { variant: "critical", label: "Critical" };
  const ref = REFERENCE_RANGES[testName];
  const num = Number.parseFloat(result);
  if (!ref || Number.isNaN(num))
    return { variant: "neutral", label: "Normal" };
  const range = ref.high - ref.low;
  const criticalMargin = range * 0.2;
  if (num < ref.low) {
    if (num < ref.low - criticalMargin)
      return { variant: "critical", label: "Critical" };
    return { variant: "warning", label: "Low" };
  }
  if (num > ref.high) {
    if (num > ref.high + criticalMargin)
      return { variant: "critical", label: "Critical" };
    return { variant: "danger", label: "High" };
  }
  return { variant: "success", label: "Normal" };
}
const HBA1C_TREND = [
  { month: "Oct", value: 8.1 },
  { month: "Nov", value: 7.9 },
  { month: "Dec", value: 7.6 },
  { month: "Jan", value: 7.4 },
  { month: "Feb", value: 7.2 },
  { month: "Mar", value: 7 }
];
const GLUCOSE_TREND = [
  { month: "Oct", value: 142 },
  { month: "Nov", value: 138 },
  { month: "Dec", value: 131 },
  { month: "Jan", value: 127 },
  { month: "Feb", value: 118 },
  { month: "Mar", value: 112 }
];
const CREATININE_TREND = [
  { month: "Oct", value: 1.1 },
  { month: "Nov", value: 1.15 },
  { month: "Dec", value: 1.2 },
  { month: "Jan", value: 1.28 },
  { month: "Feb", value: 1.32 },
  { month: "Mar", value: 1.38 }
];
function buildPolyline(data, w, h) {
  const values = data.map((d) => d.value);
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const rangeV = maxV === minV ? 1 : maxV - minV;
  const padH = 4;
  const padV = 4;
  return data.map((d, i) => {
    const x = padH + i / (data.length - 1) * (w - padH * 2);
    const y = padV + (1 - (d.value - minV) / rangeV) * (h - padV * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}
function TrendArrow({ direction }) {
  if (direction === "up")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        className: "w-3 h-3",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "18 15 12 9 6 15" })
      }
    );
  if (direction === "down")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        className: "w-3 h-3",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      className: "w-3 h-3",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
    }
  );
}
function SparkCard({
  label,
  unit,
  currentValue,
  refRange,
  trendDirection,
  trendMeaning,
  data
}) {
  const W = 120;
  const H = 50;
  const polyline = buildPolyline(data, W, H);
  const lineColor = trendMeaning === "good" ? "var(--success)" : trendMeaning === "bad" ? "var(--destructive)" : "var(--primary)";
  const arrowColor = trendMeaning === "good" ? "var(--success)" : trendMeaning === "bad" ? "var(--destructive)" : "var(--primary)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-3 p-3 bg-card border border-border rounded-sm min-w-0",
      style: { minWidth: 200 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            width: W,
            height: H,
            viewBox: `0 0 ${W} ${H}`,
            className: "flex-shrink-0",
            role: "img",
            "aria-label": `${label} trend chart`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "polyline",
                {
                  points: polyline,
                  fill: "none",
                  stroke: lineColor,
                  strokeWidth: "2",
                  strokeLinejoin: "round",
                  strokeLinecap: "round"
                }
              ),
              data.map((d, i) => {
                const values = data.map((x2) => x2.value);
                const minV = Math.min(...values);
                const maxV = Math.max(...values);
                const rangeV = maxV === minV ? 1 : maxV - minV;
                const padH = 4;
                const padV = 4;
                const x = padH + i / (data.length - 1) * (W - padH * 2);
                const y = padV + (1 - (d.value - minV) / rangeV) * (H - padV * 2);
                return /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "2", fill: lineColor }, d.month);
              })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide truncate", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold tabular-nums text-foreground leading-none", children: currentValue }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground leading-none mt-0.5", children: unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "ml-1",
                style: { color: arrowColor },
                "aria-label": `Trend: ${trendDirection}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendArrow, { direction: trendDirection })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            "Ref: ",
            refRange
          ] })
        ] })
      ]
    }
  );
}
function MyLabResults() {
  const { actor, isFetching } = useActor();
  const [results, setResults] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    actor.listLabResults().then((data) => setResults(data)).catch(() => {
    }).finally(() => setLoading(false));
  }, [actor, isFetching]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "portal.labs.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SparkCard,
        {
          label: "HbA1c",
          unit: "%",
          currentValue: 7,
          refRange: "<5.7%",
          trendDirection: "down",
          trendMeaning: "good",
          data: HBA1C_TREND
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SparkCard,
        {
          label: "Glucose",
          unit: "mg/dL",
          currentValue: 112,
          refRange: "70-99 mg/dL",
          trendDirection: "down",
          trendMeaning: "good",
          data: GLUCOSE_TREND
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SparkCard,
        {
          label: "Creatinine",
          unit: "mg/dL",
          currentValue: 1.38,
          refRange: "0.6-1.2 mg/dL",
          trendDirection: "up",
          trendMeaning: "bad",
          data: CREATININE_TREND
        }
      )
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "portal.labs.loading_state", children: [1, 2, 3, 4].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }, n)) }) : results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card rounded-sm p-12 flex flex-col items-center gap-3 text-center",
        "data-ocid": "portal.labs.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-8 h-8 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "No results available yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Results will appear here after your provider orders and completes a lab test." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "portal.labs.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Test Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Result" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Unit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Reference Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Flag" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: results.map((r, i) => {
        const ref = REFERENCE_RANGES[r.testName];
        const flag = getFlag(r.testName, r.result, r.isCritical);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `portal.labs.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: r.testName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm px-4 py-2.5", children: r.result }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5 text-muted-foreground", children: r.unit || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5 text-muted-foreground", children: ref ? ref.label : "N/A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: flag.variant, label: flag.label }) })
            ]
          },
          String(r.id)
        );
      }) })
    ] }) })
  ] });
}
export {
  MyLabResults as default
};
