import { f as useActor, r as reactExports, j as jsxRuntimeExports, B as Button, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
function generateClinicalSummary(patient) {
  const now = /* @__PURE__ */ new Date();
  const generatedAt = now.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  const flagColor = (flag) => {
    switch (flag.toLowerCase()) {
      case "high":
      case "critical":
        return "#c0392b";
      case "low":
        return "#2980b9";
      default:
        return "#27ae60";
    }
  };
  const rows = (items, headers, cells) => {
    if (items.length === 0)
      return `<tr><td colspan="${headers.length}" style="color:#888;padding:8px 0;">None recorded</td></tr>`;
    return items.map(
      (item) => `<tr>${cells.map((fn, i) => `<td style="padding:7px 10px;border-bottom:1px solid #eee;${i === 0 ? "font-weight:500;" : ""}">${fn(item)}</td>`).join("")}</tr>`
    ).join("");
  };
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clinical Summary — ${patient.name}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; color: #1a1a1a; background: #fff; padding: 32px; max-width: 860px; margin: 0 auto; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2.5px solid #1a4a7a; padding-bottom: 16px; margin-bottom: 20px; }
    .clinic-name { font-size: 20px; font-weight: 700; color: #1a4a7a; letter-spacing: -0.3px; }
    .clinic-sub { font-size: 11px; color: #666; margin-top: 2px; }
    .doc-title { font-size: 13px; font-weight: 600; color: #555; text-align: right; }
    .doc-date { font-size: 11px; color: #888; margin-top: 2px; }
    .patient-card { background: #f4f7fb; border: 1px solid #d0daea; border-radius: 4px; padding: 14px 18px; margin-bottom: 24px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
    .patient-field label { display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5a6a80; margin-bottom: 2px; }
    .patient-field span { font-size: 13px; font-weight: 600; color: #1a1a1a; }
    section { margin-bottom: 22px; }
    section h2 { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #1a4a7a; border-bottom: 1px solid #d0daea; padding-bottom: 6px; margin-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; }
    thead th { text-align: left; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5a6a80; padding: 0 10px 8px; }
    tbody tr:last-child td { border-bottom: none; }
    .flag { font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 2px 7px; border-radius: 10px; background: #eee; }
    .footer { margin-top: 32px; border-top: 1px solid #eee; padding-top: 12px; font-size: 10px; color: #aaa; }
    @media print {
      body { padding: 0; }
      button { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="clinic-name">MedUnite Clinic</div>
      <div class="clinic-sub">Patient Clinical Summary</div>
    </div>
    <div>
      <div class="doc-title">CONFIDENTIAL MEDICAL RECORD</div>
      <div class="doc-date">Generated: ${generatedAt}</div>
    </div>
  </div>

  <div class="patient-card">
    <div class="patient-field"><label>Patient Name</label><span>${patient.name}</span></div>
    <div class="patient-field"><label>Date of Birth</label><span>${patient.dob}</span></div>
    <div class="patient-field"><label>MRN</label><span>${patient.mrn}</span></div>
  </div>

  <section>
    <h2>Active Diagnoses</h2>
    <table>
      <tbody>
        ${patient.diagnoses.length === 0 ? '<tr><td style="color:#888;padding:8px 0;">No active diagnoses</td></tr>' : patient.diagnoses.map((d) => `<tr><td style="padding:7px 0;border-bottom:1px solid #eee;">&#x2022; ${d}</td></tr>`).join("")}
      </tbody>
    </table>
  </section>

  <section>
    <h2>Current Medications</h2>
    <table>
      <thead><tr><th>Medication</th><th>Dose</th><th>Frequency</th></tr></thead>
      <tbody>
        ${rows(
    patient.medications,
    ["Medication", "Dose", "Frequency"],
    [(m) => m.name, (m) => m.dose, (m) => m.frequency]
  )}
      </tbody>
    </table>
  </section>

  <section>
    <h2>Allergies &amp; Adverse Reactions</h2>
    <table>
      <tbody>
        ${patient.allergies.length === 0 ? '<tr><td style="color:#888;padding:8px 0;">NKDA — No Known Drug Allergies</td></tr>' : patient.allergies.map((a) => `<tr><td style="padding:7px 0;border-bottom:1px solid #eee;">&#x26A0; ${a}</td></tr>`).join("")}
      </tbody>
    </table>
  </section>

  <section>
    <h2>Recent Laboratory Results</h2>
    <table>
      <thead><tr><th>Test</th><th>Result</th><th>Date</th><th>Flag</th></tr></thead>
      <tbody>
        ${rows(
    patient.recentLabs,
    ["Test", "Result", "Date", "Flag"],
    [
      (l) => l.test,
      (l) => l.result,
      (l) => l.date,
      (l) => `<span class="flag" style="background:${flagColor(l.flag)}20;color:${flagColor(l.flag)};">${l.flag}</span>`
    ]
  )}
      </tbody>
    </table>
  </section>

  <section>
    <h2>Active Orders</h2>
    <table>
      <tbody>
        ${patient.activeOrders.length === 0 ? '<tr><td style="color:#888;padding:8px 0;">No active orders</td></tr>' : patient.activeOrders.map((o) => `<tr><td style="padding:7px 0;border-bottom:1px solid #eee;">&#x2022; ${o}</td></tr>`).join("")}
      </tbody>
    </table>
  </section>

  <div class="footer">
    This document is a computer-generated clinical summary from MedUnite EHR. It is intended for use by authorized healthcare providers and the named patient only. For questions, contact MedUnite Clinic. &copy; ${now.getFullYear()} MedUnite.
  </div>

  <script>
    window.onload = function() { window.print(); };
  <\/script>
</body>
</html>`;
}
function printClinicalSummary(patient) {
  const html = generateClinicalSummary(patient);
  const win = window.open("", "_blank", "width=900,height=700");
  if (!win) {
    alert(
      "Pop-up blocked. Please allow pop-ups for this site to print the clinical summary."
    );
    return;
  }
  win.document.write(html);
  win.document.close();
}
const labFlagVariant = (f) => {
  switch (f) {
    case "normal":
      return "success";
    case "high":
      return "warning";
    case "low":
      return "info";
    case "critical":
      return "danger";
  }
};
const medStatusVariant = (s) => {
  switch (s) {
    case "active":
      return "success";
    case "discontinued":
      return "neutral";
    case "on-hold":
      return "warning";
    default:
      return "neutral";
  }
};
const resultColor = (flag) => {
  switch (flag) {
    case "normal":
      return "var(--success)";
    case "critical":
      return "var(--destructive)";
    default:
      return "var(--warning)";
  }
};
const SKEL_KEYS = ["a", "b", "c", "d", "e", "f"];
const SkeletonRows = ({ cols, count }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: SKEL_KEYS.slice(0, count).map((rk) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border last:border-0", children: SKEL_KEYS.slice(0, cols).map((ck) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }) }, ck)) }, rk)) });
const VISIT_SUMMARIES = [
  {
    id: 1,
    date: "2026-02-14",
    provider: "Dr. Sarah Chen",
    visitType: "Follow-up Visit",
    diagnoses: [
      "E11.9 - Type 2 Diabetes Mellitus",
      "I10 - Essential Hypertension"
    ],
    medications: ["Metformin 1000mg twice daily", "Lisinopril 10mg once daily"],
    orders: ["HbA1c", "Comprehensive Metabolic Panel"],
    followUp: "Return in 3 months for repeat HbA1c and blood pressure check.",
    education: "Discussed DASH diet, home blood pressure monitoring, and foot care for diabetes."
  },
  {
    id: 2,
    date: "2025-11-05",
    provider: "Dr. Sarah Chen",
    visitType: "Annual Physical",
    diagnoses: ["Z00.00 - Encounter for general adult medical exam"],
    medications: ["Atorvastatin 20mg once daily"],
    orders: ["CBC", "Lipid Panel", "TSH"],
    followUp: "Follow up in 12 months or sooner if any new concerns arise.",
    education: "Discussed preventive care, vaccinations, and healthy lifestyle modifications."
  },
  {
    id: 3,
    date: "2025-08-20",
    provider: "Dr. Marcus Williams",
    visitType: "Specialist Consultation",
    diagnoses: ["I25.10 - Coronary artery disease"],
    medications: ["Aspirin 81mg once daily", "Atorvastatin 40mg once daily"],
    orders: ["Stress test", "Echocardiogram"],
    followUp: "Cardiology follow-up in 6 weeks after stress test results.",
    education: "Reviewed cardiac risk factors, activity restrictions, and when to seek emergency care."
  }
];
function MyHealthRecords() {
  const { actor, isFetching } = useActor();
  const [tab, setTab] = reactExports.useState("labs");
  const [expandedNote, setExpandedNote] = reactExports.useState(null);
  const [expandedSummary, setExpandedSummary] = reactExports.useState(null);
  const [labResults, setLabResults] = reactExports.useState([]);
  const [labsLoading, setLabsLoading] = reactExports.useState(true);
  const [visitNotes, setVisitNotes] = reactExports.useState([]);
  const [notesLoading, setNotesLoading] = reactExports.useState(true);
  const [medications, setMedications] = reactExports.useState([]);
  const [refillOpen, setRefillOpen] = reactExports.useState(null);
  const [refillNotes, setRefillNotes] = reactExports.useState("");
  const [refillSubmitted, setRefillSubmitted] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [medsLoading, setMedsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (isFetching || !actor) return;
    Promise.all([
      actor.listLabResults(),
      actor.listClinicalNotes(),
      actor.listMedications()
    ]).then(([labs, notes, meds]) => {
      setLabResults(
        labs.map((r) => ({
          id: r.id,
          test: r.testName,
          result: r.result,
          unit: r.unit,
          referenceRange: "—",
          flag: r.isCritical ? "critical" : "normal"
        }))
      );
      setLabsLoading(false);
      setVisitNotes(
        notes.map((n) => ({
          id: n.id,
          title: n.noteType || "Visit Note",
          content: n.content,
          noteType: n.noteType
        }))
      );
      setNotesLoading(false);
      setMedications(
        meds.map((m) => ({
          id: m.id,
          name: m.name,
          dose: m.dose,
          frequency: m.frequency,
          status: m.status
        }))
      );
      setMedsLoading(false);
    }).catch(() => {
      setLabsLoading(false);
      setNotesLoading(false);
      setMedsLoading(false);
    });
  }, [actor, isFetching]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "records.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground", children: "Your personal health records from MedUnite Clinic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          "data-ocid": "records.download.button",
          onClick: () => printClinicalSummary({
            name: "Alex Johnson",
            dob: "1985-06-14",
            mrn: "PTL-001",
            diagnoses: [
              "E11.9 - Type 2 Diabetes Mellitus",
              "I10 - Essential Hypertension"
            ],
            medications: [
              { name: "Metformin", dose: "1000mg", frequency: "Twice daily" },
              { name: "Lisinopril", dose: "10mg", frequency: "Once daily" },
              { name: "Atorvastatin", dose: "20mg", frequency: "Once daily" }
            ],
            allergies: ["Penicillin — Hives", "Sulfa drugs — Rash"],
            recentLabs: labResults.slice(0, 5).map((l) => ({
              test: l.test,
              result: l.result,
              date: "Mar 2026",
              flag: l.flag
            })),
            activeOrders: []
          }),
          className: "h-7 text-xs gap-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "w-3 h-3",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                ]
              }
            ),
            "Download My Health Summary"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0 border-b border-border mb-5", children: [
      { id: "labs", label: "Lab Results" },
      { id: "notes", label: "Visit Notes" },
      { id: "meds", label: "Medications" },
      { id: "summaries", label: "Visit Summaries" },
      { id: "history", label: "Visit History" }
    ].map(({ id, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": `records.${id}.tab`,
        onClick: () => setTab(id),
        className: [
          "px-5 py-2.5 text-[13px] font-medium transition-all border-b-2 -mb-px",
          tab === id ? "text-primary border-b-primary" : "text-muted-foreground border-b-transparent hover:text-foreground"
        ].join(" "),
        children: label
      },
      id
    )) }),
    tab === "labs" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border border-border rounded-sm overflow-hidden",
        "data-ocid": "records.labs.table",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Test" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Result" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Reference Range" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Flag" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: labsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonRows, { cols: 4, count: 3 }) : labResults.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              colSpan: 5,
              className: "px-4 py-8 text-center text-[13px] text-muted-foreground",
              "data-ocid": "records.labs.empty_state",
              children: "No lab results on file."
            }
          ) }) : labResults.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `records.labs.item.${idx + 1}`,
              className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: r.test }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-semibold",
                    style: { color: resultColor(r.flag) },
                    children: [
                      r.result,
                      " ",
                      r.unit
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: r.referenceRange }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: labFlagVariant(r.flag),
                    label: r.flag
                  }
                ) })
              ]
            },
            String(r.id)
          )) })
        ] })
      }
    ),
    tab === "notes" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "records.notes.list", children: notesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-32" })
        ]
      },
      k
    )) }) : visitNotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "py-8 text-center text-[13px] text-muted-foreground bg-card border border-border rounded-sm",
        "data-ocid": "records.notes.empty_state",
        children: "No records have been shared yet. After your first appointment, your provider will add a clinical summary here."
      }
    ) : visitNotes.map((note, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `records.notes.item.${idx + 1}`,
        className: "bg-card border border-border rounded-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `records.notes.toggle.${idx + 1}`,
              onClick: () => setExpandedNote(expandedNote === note.id ? null : note.id),
              className: "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: note.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: note.noteType })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform",
                    style: {
                      transform: expandedNote === note.id ? "rotate(180deg)" : "rotate(0deg)"
                    },
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
                  }
                )
              ]
            }
          ),
          expandedNote === note.id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground leading-relaxed mt-3", children: note.content }) })
        ]
      },
      String(note.id)
    )) }),
    tab === "summaries" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "records.summaries.list", children: VISIT_SUMMARIES.map((summary, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `records.summaries.item.${idx + 1}`,
        className: "bg-card border border-border rounded-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `records.summaries.toggle.${idx + 1}`,
              onClick: () => setExpandedSummary(
                expandedSummary === summary.id ? null : summary.id
              ),
              className: "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: summary.visitType }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    summary.date,
                    " · ",
                    summary.provider
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform",
                    style: {
                      transform: expandedSummary === summary.id ? "rotate(180deg)" : "rotate(0deg)"
                    },
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
                  }
                )
              ]
            }
          ),
          expandedSummary === summary.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 border-t border-border space-y-3 mt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Diagnoses" }),
              summary.diagnoses.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground", children: d }, d))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Medications" }),
              summary.medications.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground", children: m }, m))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: summary.orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2 py-0.5 bg-muted border border-border rounded-sm font-medium text-foreground",
                  children: o
                },
                o
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: "Follow-up Instructions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground", children: summary.followUp })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: "Patient Education" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground", children: summary.education })
            ] })
          ] })
        ]
      },
      summary.id
    )) }),
    tab === "meds" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border border-border rounded-sm overflow-hidden",
        "data-ocid": "records.meds.table",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Medication" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Dose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Frequency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: medsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonRows, { cols: 4, count: 3 }) : medications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              colSpan: 4,
              className: "px-4 py-8 text-center text-[13px] text-muted-foreground",
              "data-ocid": "records.meds.empty_state",
              children: "No medications on file."
            }
          ) }) : medications.map((med, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `records.meds.item.${idx + 1}`,
              className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: med.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: med.dose }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: med.frequency }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: medStatusVariant(med.status),
                    label: med.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: med.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block", children: [
                  refillSubmitted.has(String(med.id)) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs text-success font-medium",
                      "data-ocid": `records.refill.success_state.${idx + 1}`,
                      children: "✓ Requested"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `records.refill.button.${idx + 1}`,
                      onClick: () => setRefillOpen(
                        refillOpen === String(med.id) ? null : String(med.id)
                      ),
                      className: "text-xs px-2 py-0.5 font-semibold text-primary border border-primary/30 rounded-sm hover:bg-primary/10 transition-colors",
                      children: refillOpen === String(med.id) ? "Cancel" : "Request Refill"
                    }
                  ),
                  refillOpen === String(med.id) && !refillSubmitted.has(String(med.id)) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 min-w-[220px] text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        "data-ocid": `records.refill.textarea.${idx + 1}`,
                        value: refillNotes,
                        onChange: (e) => setRefillNotes(e.target.value),
                        placeholder: "Notes to pharmacist (optional)",
                        rows: 2,
                        className: "w-full text-xs border border-border bg-background p-1.5 rounded-sm resize-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `records.refill.submit_button.${idx + 1}`,
                        onClick: () => {
                          ({
                            medication: `${med.name}${med.dose ? ` ${med.dose}` : ""}`,
                            requestedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? ""
                          });
                          setRefillSubmitted(
                            (prev) => /* @__PURE__ */ new Set([...prev, String(med.id)])
                          );
                          setRefillOpen(null);
                          setRefillNotes("");
                        },
                        className: "mt-1.5 w-full text-xs font-semibold py-1 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors",
                        children: "Submit Request"
                      }
                    )
                  ] })
                ] }) })
              ]
            },
            String(med.id)
          )) })
        ] })
      }
    ),
    tab === "history" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "records.history.list", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground", children: "Your complete visit history. Download an After-Visit Summary for any past encounter." }),
      VISIT_SUMMARIES.map((visit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `records.history.item.${idx + 1}`,
          className: "bg-card border border-border rounded-sm px-4 py-3 flex items-center justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: visit.visitType }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                visit.date,
                " · ",
                visit.provider
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-1.5", children: visit.diagnoses.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-1.5 py-0.5 bg-muted border border-border rounded-sm text-muted-foreground",
                  children: d
                },
                d
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `records.history.download.button.${idx + 1}`,
                onClick: () => {
                  ue.success(
                    `After-Visit Summary downloaded for ${visit.date} — ${visit.visitType}`
                  );
                  window.print();
                },
                className: "flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "w-3 h-3",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                      ]
                    }
                  ),
                  "Download AVS"
                ]
              }
            )
          ]
        },
        visit.id
      ))
    ] })
  ] });
}
export {
  MyHealthRecords as default
};
