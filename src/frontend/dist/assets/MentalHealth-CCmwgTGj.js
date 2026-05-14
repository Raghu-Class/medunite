import { f as useActor, r as reactExports, n as DEMO_PATIENTS, ac as DEMO_MENTAL_HEALTH_ASSESSMENTS, j as jsxRuntimeExports, $ as Brain, B as Button, C as ChevronDown } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, a as ReferenceLine } from "./generateCategoricalChart-CDEKTkJ0.js";
import { L as LineChart, a as Line } from "./LineChart-DRhFdqPV.js";
import { C as CartesianGrid } from "./CartesianGrid-B6zYq_XM.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
const PHQ9_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure",
  "Trouble concentrating on things, such as reading or watching television",
  "Moving or speaking so slowly that other people could have noticed",
  "Thoughts that you would be better off dead, or thoughts of hurting yourself"
];
const GAD7_QUESTIONS = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it's hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid, as if something awful might happen"
];
const SCORE_LABELS = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day"
];
function getPHQ9Severity(score) {
  if (score <= 4) return { label: "Minimal", variant: "success" };
  if (score <= 9) return { label: "Mild", variant: "info" };
  if (score <= 14) return { label: "Moderate", variant: "warning" };
  if (score <= 19) return { label: "Moderately Severe", variant: "danger" };
  return { label: "Severe", variant: "danger" };
}
function getGAD7Severity(score) {
  if (score <= 4) return { label: "Minimal", variant: "success" };
  if (score <= 9) return { label: "Mild", variant: "info" };
  if (score <= 14) return { label: "Moderate", variant: "warning" };
  return { label: "Severe", variant: "danger" };
}
function getSeverity(type, score) {
  return type === "PHQ-9" ? getPHQ9Severity(score) : getGAD7Severity(score);
}
function getCareRecommendation(type, score) {
  const sev = getSeverity(type, score);
  if (sev.label === "Minimal")
    return "Score indicates minimal symptoms. Continue monitoring at routine visits.";
  if (sev.label === "Mild") {
    return type === "PHQ-9" ? "Score suggests mild depression. Consider watchful waiting and follow-up in 2–4 weeks." : "Score suggests mild anxiety. Psychoeducation and lifestyle modifications recommended.";
  }
  if (sev.label === "Moderate") {
    return type === "PHQ-9" ? "Score suggests moderate depression — consider therapy referral or medication evaluation." : "Score suggests moderate anxiety — consider therapy referral (CBT) or medication review.";
  }
  return type === "PHQ-9" ? "Score suggests severe depression — urgent mental health referral and safety assessment indicated." : "Score suggests severe anxiety — urgent referral to mental health specialist recommended.";
}
function buildTrendData(assessments) {
  const byDate = {};
  for (const a of assessments) {
    const key = a.date;
    if (!byDate[key]) byDate[key] = { date: key };
    if (a.type === "PHQ-9") byDate[key].phq9 = a.totalScore;
    else byDate[key].gad7 = a.totalScore;
  }
  return Object.values(byDate).sort((a, b) => a.date.localeCompare(b.date));
}
function AssessmentTable({ assessments, compact }) {
  const [expanded, setExpanded] = reactExports.useState(/* @__PURE__ */ new Set());
  if (assessments.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "py-8 text-center text-muted-foreground text-sm",
        "data-ocid": "mental_health.empty_state",
        children: "No assessments on record."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "mental_health.table", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Score" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Severity" }),
      !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Provider" }),
      !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: assessments.map((a, idx) => {
      const sev = getSeverity(a.type, a.totalScore);
      const isOpen = expanded.has(a.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { "data-ocid": `mental_health.item.${idx + 1}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: a.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold bg-muted px-2 py-0.5 rounded", children: a.type }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-semibold text-foreground", children: a.totalScore }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: sev.variant, label: sev.label }) }),
          !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-sm text-muted-foreground", children: [
            "Dr. ",
            a.providerId === 1 ? "Williams" : "Chen"
          ] }),
          !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "text-primary text-xs font-medium flex items-center gap-1 hover:underline",
              onClick: () => {
                const next = new Set(expanded);
                if (isOpen) next.delete(a.id);
                else next.add(a.id);
                setExpanded(next);
              },
              "data-ocid": `mental_health.item.${idx + 1}.toggle`,
              children: [
                isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                isOpen ? "Hide" : "Detail"
              ]
            }
          ) })
        ] }, a.id),
        !compact && isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "bg-muted/30 py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Question Scores" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1", children: a.scores.map((s, scoreIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-2 text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                  "Q",
                  scoreIdx + 1,
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  s,
                  " — ",
                  SCORE_LABELS[s]
                ] })
              ]
            },
            `q${scoreIdx + 1}`
          )) }),
          a.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Notes:" }),
            " ",
            a.notes
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-warning-foreground bg-warning/10 border border-warning/20 rounded p-2 mt-2", children: [
            "💡 ",
            getCareRecommendation(a.type, a.totalScore)
          ] })
        ] }) }) }, `${a.id}-detail`)
      ] });
    }) })
  ] });
}
function TrendChart({ data }) {
  if (data.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    LineChart,
    {
      data,
      margin: { top: 10, right: 20, left: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          XAxis,
          {
            dataKey: "date",
            tick: { fontSize: 12, fill: "var(--muted-foreground)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          YAxis,
          {
            domain: [0, 27],
            tick: { fontSize: 12, fill: "var(--muted-foreground)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            contentStyle: {
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              fontSize: 12
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 12 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReferenceLine,
          {
            y: 10,
            stroke: "var(--warning)",
            strokeDasharray: "4 4",
            label: {
              value: "Moderate",
              position: "right",
              fontSize: 11,
              fill: "var(--warning)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReferenceLine,
          {
            y: 20,
            stroke: "var(--destructive)",
            strokeDasharray: "4 4",
            label: {
              value: "Severe",
              position: "right",
              fontSize: 11,
              fill: "var(--destructive)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Line,
          {
            type: "monotone",
            dataKey: "phq9",
            name: "PHQ-9",
            stroke: "var(--primary)",
            strokeWidth: 2,
            dot: { r: 3 },
            connectNulls: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Line,
          {
            type: "monotone",
            dataKey: "gad7",
            name: "GAD-7",
            stroke: "var(--chart-2)",
            strokeWidth: 2,
            dot: { r: 3 },
            connectNulls: true
          }
        )
      ]
    }
  ) });
}
function NewAssessmentForm({
  patientId,
  onSaved,
  actor
}) {
  const [type, setType] = reactExports.useState("PHQ-9");
  const questions = type === "PHQ-9" ? PHQ9_QUESTIONS : GAD7_QUESTIONS;
  const [scores, setScores] = reactExports.useState(questions.map(() => 0));
  const [notes, setNotes] = reactExports.useState("");
  const totalScore = scores.reduce((s, v) => s + v, 0);
  const sev = getSeverity(type, totalScore);
  function handleTypeChange(t) {
    setType(t);
    const qs = t === "PHQ-9" ? PHQ9_QUESTIONS : GAD7_QUESTIONS;
    setScores(qs.map(() => 0));
  }
  function handleSave() {
    const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const a = {
      id: `mha-new-${Date.now()}`,
      patientId,
      type,
      date,
      scores,
      totalScore,
      severity: sev.label,
      providerId: 1,
      notes
    };
    onSaved(a);
    if (actor) {
      actor.createMentalHealthAssessment({
        id: 0n,
        scoresJson: JSON.stringify(scores),
        patientId,
        date,
        assessmentType: type,
        totalScore: BigInt(totalScore),
        notes,
        severity: sev.label,
        providerId: 1n
      }).catch(() => {
      });
    }
    setScores(questions.map(() => 0));
    setNotes("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border rounded p-4 bg-muted/20 space-y-4",
      "data-ocid": "mental_health.new_assessment_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Assessment Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: type,
                onValueChange: (v) => handleTypeChange(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "w-36",
                      "data-ocid": "mental_health.type.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "PHQ-9", children: "PHQ-9" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "GAD-7", children: "GAD-7" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Live score:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-foreground", children: totalScore }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: sev.variant, label: sev.label })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: questions.map((q, qIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "Q",
              qIdx + 1,
              "."
            ] }),
            " ",
            q
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: SCORE_LABELS.map((label, scoreVal) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: "flex items-center gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `q-${qIdx}`,
                    value: scoreVal,
                    checked: scores[qIdx] === scoreVal,
                    onChange: () => {
                      const next = [...scores];
                      next[qIdx] = scoreVal;
                      setScores(next);
                    },
                    className: "accent-primary",
                    "data-ocid": `mental_health.q${qIdx + 1}.radio`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  scoreVal,
                  " — ",
                  label
                ] })
              ]
            },
            label
          )) })
        ] }, q)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Clinical Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              placeholder: "Optional clinical observations...",
              value: notes,
              onChange: (e) => setNotes(e.target.value),
              rows: 2,
              "data-ocid": "mental_health.notes.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-muted rounded border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "💡 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Care pathway:" }),
          " ",
          getCareRecommendation(type, totalScore)
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleSave,
            "data-ocid": "mental_health.save_assessment.button",
            children: "Save Assessment"
          }
        )
      ]
    }
  );
}
function MentalHealth({
  activePatientId,
  activePatientName,
  compact
}) {
  var _a;
  const { actor, isFetching } = useActor();
  const [selectedPatientId, setSelectedPatientId] = reactExports.useState(
    activePatientId ?? DEMO_PATIENTS[0].id
  );
  const [localAssessments, setLocalAssessments] = reactExports.useState([]);
  const [backendAssessments, setBackendAssessments] = reactExports.useState([]);
  const [isLoadingBackend, setIsLoadingBackend] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const patientId = activePatientId ?? selectedPatientId;
  reactExports.useEffect(() => {
    if (isFetching || !actor) return;
    setIsLoadingBackend(true);
    actor.listMentalHealthAssessments().then((results) => {
      const filtered = results.filter((a) => a.patientId === patientId).map((a) => ({
        id: String(a.id),
        patientId: a.patientId,
        type: a.assessmentType,
        date: a.date,
        scores: (() => {
          try {
            return JSON.parse(a.scoresJson);
          } catch {
            return [];
          }
        })(),
        totalScore: Number(a.totalScore),
        severity: a.severity,
        providerId: Number(a.providerId),
        notes: a.notes
      }));
      setBackendAssessments(filtered);
    }).catch(() => {
    }).finally(() => setIsLoadingBackend(false));
  }, [actor, isFetching, patientId]);
  const seedFiltered = DEMO_MENTAL_HEALTH_ASSESSMENTS.filter(
    (a) => a.patientId === patientId
  ).filter(
    (seed) => !backendAssessments.some(
      (b) => b.date === seed.date && b.type === seed.type
    )
  );
  const allAssessments = [
    ...localAssessments,
    ...backendAssessments,
    ...seedFiltered
  ].filter((a) => a.patientId === patientId).sort((a, b) => b.date.localeCompare(a.date));
  const trendData = buildTrendData(
    [...allAssessments].sort((a, b) => a.date.localeCompare(b.date))
  );
  const patientName = activePatientName ?? ((_a = DEMO_PATIENTS.find((p) => p.id === selectedPatientId)) == null ? void 0 : _a.name) ?? "Unknown Patient";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", "data-ocid": "mental_health.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold text-foreground", children: "Mental Health Outcomes" }),
      !activePatientId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: String(selectedPatientId),
          onValueChange: (v) => setSelectedPatientId(BigInt(v)),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "w-52",
                "data-ocid": "mental_health.patient.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DEMO_PATIENTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
          ]
        }
      ),
      activePatientId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "— ",
        patientName
      ] }),
      !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "ml-auto",
          onClick: () => setShowForm((v) => !v),
          "data-ocid": "mental_health.new_assessment.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 mr-1" }),
            showForm ? "Cancel" : "New Assessment"
          ]
        }
      )
    ] }),
    showForm && !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(
      NewAssessmentForm,
      {
        patientId,
        actor,
        onSaved: (a) => {
          setLocalAssessments((prev) => [a, ...prev]);
          setShowForm(false);
        }
      }
    ),
    isLoadingBackend ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "mental_health.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      trendData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Score Trends" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendChart, { data: trendData }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Assessment History" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-0 pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AssessmentTable, { assessments: allAssessments, compact }) })
      ] })
    ] })
  ] });
}
export {
  MentalHealth as default
};
