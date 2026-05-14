import { c as createLucideIcon, r as reactExports, f as useActor, j as jsxRuntimeExports, l as ClipboardList, B as Button, n as DEMO_PATIENTS, C as ChevronDown, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const INITIAL_CARE_PLANS = [
  {
    id: "cp-1",
    patientId: "p1",
    patientName: "Margaret Chen",
    problem: "Ineffective tissue perfusion related to hypertension",
    goals: [
      { text: "BP < 140/90 mmHg within 2 weeks", status: "In Progress" },
      {
        text: "Patient verbalize understanding of antihypertensive regimen",
        status: "Not Met"
      }
    ],
    interventions: [
      "Monitor BP every 4 hours",
      "Administer Lisinopril 10mg as ordered",
      "Educate patient on DASH diet and sodium restriction",
      "Encourage daily 30-minute ambulation"
    ],
    targetDate: "2026-03-30",
    status: "active",
    createdBy: "RN. Sarah Park",
    createdAt: "2026-03-10"
  },
  {
    id: "cp-2",
    patientId: "p2",
    patientName: "James Harrington",
    problem: "Risk for infection related to post-operative wound",
    goals: [
      {
        text: "Wound remains free of infection signs through discharge",
        status: "In Progress"
      },
      { text: "Temperature < 38.0°C by post-op day 3", status: "Met" }
    ],
    interventions: [
      "Wound assessment and dressing change every 12 hours",
      "Administer prophylactic antibiotics per protocol",
      "Monitor CBC and WBC for infection indicators",
      "Maintain contact precautions per MRSA protocol"
    ],
    targetDate: "2026-03-25",
    status: "active",
    createdBy: "RN. David Torres",
    createdAt: "2026-03-12"
  },
  {
    id: "cp-3",
    patientId: "p3",
    patientName: "Linda Washington",
    problem: "Impaired glucose regulation related to Type 2 Diabetes",
    goals: [
      { text: "Fasting glucose 80–130 mg/dL", status: "In Progress" },
      { text: "HbA1c < 7.0% at next lab draw", status: "Not Met" }
    ],
    interventions: [
      "Monitor blood glucose before meals and at bedtime",
      "Administer insulin per sliding scale",
      "Provide diabetic diet education",
      "Consult dietary services for meal planning"
    ],
    targetDate: "2026-04-15",
    status: "active",
    createdBy: "RN. Maria Gonzalez",
    createdAt: "2026-03-05"
  },
  {
    id: "cp-4",
    patientId: "p4",
    patientName: "Robert Kim",
    problem: "Acute pain related to coronary artery disease",
    goals: [
      {
        text: "Pain level ≤ 2/10 within 30 minutes of intervention",
        status: "Met"
      },
      {
        text: "Patient demonstrates non-pharmacological pain relief techniques",
        status: "Met"
      }
    ],
    interventions: [
      "Assess pain using 0–10 numeric scale every 2 hours",
      "Administer nitroglycerin as ordered for chest pain",
      "Position patient for comfort — semi-Fowler's",
      "Provide oxygen therapy to maintain SpO2 ≥ 94%"
    ],
    targetDate: "2026-03-20",
    status: "resolved",
    createdBy: "RN. Angela Reyes",
    createdAt: "2026-03-01"
  },
  {
    id: "cp-5",
    patientId: "p5",
    patientName: "Sarah Mitchell",
    problem: "Activity intolerance related to chronic fatigue and CKD",
    goals: [
      {
        text: "Patient ambulates 50 feet with minimal assistance by discharge",
        status: "In Progress"
      },
      {
        text: "Verbalize strategies for energy conservation",
        status: "Not Met"
      }
    ],
    interventions: [
      "Progressive ambulation program: increase by 10 feet each shift",
      "Rest periods between activities — no more than 15 min activity at once",
      "Physical therapy consult ordered",
      "Monitor HR and SpO2 during activity; stop if HR > 110 or SpO2 < 92%"
    ],
    targetDate: "2026-04-01",
    status: "active",
    createdBy: "RN. Kevin Brown",
    createdAt: "2026-03-08"
  }
];
const goalStatusVariant = {
  Met: "success",
  "In Progress": "warning",
  "Not Met": "danger"
};
const patientNames = DEMO_PATIENTS.slice(0, 10).map((p) => p.name);
function NursingCarePlans({
  onNavigate: _onNavigate
}) {
  const [carePlans, setCarePlans] = reactExports.useState(INITIAL_CARE_PLANS);
  const [loading] = reactExports.useState(false);
  const { actor } = useActor();
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [filterStatus, setFilterStatus] = reactExports.useState("all");
  const [addGoalFor, setAddGoalFor] = reactExports.useState(null);
  const [newGoalText, setNewGoalText] = reactExports.useState("");
  const [newGoalStatus, setNewGoalStatus] = reactExports.useState("In Progress");
  const [newPlan, setNewPlan] = reactExports.useState({
    patientName: "",
    problem: "",
    goals: "",
    interventions: "",
    targetDate: ""
  });
  const filtered = carePlans.filter(
    (cp) => filterStatus === "all" || cp.status === filterStatus
  );
  const handleAdd = () => {
    if (!newPlan.patientName || !newPlan.problem) return;
    const plan = {
      id: `cp-${Date.now()}`,
      patientId: `p-${Date.now()}`,
      patientName: newPlan.patientName,
      problem: newPlan.problem,
      goals: newPlan.goals.split("\n").filter(Boolean).map((t) => ({ text: t, status: "In Progress" })),
      interventions: newPlan.interventions.split("\n").filter(Boolean),
      targetDate: newPlan.targetDate,
      status: "active",
      createdBy: "RN. Current User",
      createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? ""
    };
    setCarePlans((prev) => [plan, ...prev]);
    setNewPlan({
      patientName: "",
      problem: "",
      goals: "",
      interventions: "",
      targetDate: ""
    });
    setShowAddForm(false);
    if (actor) {
      actor.createClinicalNote(1n, "care-plan", JSON.stringify(plan), 1n).then(() => ue.success("Care plan saved")).catch(() => ue.error("Failed to save care plan"));
    } else {
      ue.success("Care plan saved");
    }
  };
  const handleMarkResolved = (id) => {
    setCarePlans(
      (prev) => prev.map(
        (cp) => cp.id === id ? { ...cp, status: "resolved" } : cp
      )
    );
  };
  const handleAddGoal = (planId) => {
    if (!newGoalText.trim()) return;
    setCarePlans(
      (prev) => prev.map(
        (cp) => cp.id !== planId ? cp : {
          ...cp,
          goals: [
            ...cp.goals,
            { text: newGoalText, status: newGoalStatus }
          ]
        }
      )
    );
    setNewGoalText("");
    setNewGoalStatus("In Progress");
    setAddGoalFor(null);
  };
  const handleGoalStatusChange = (planId, goalIdx, status) => {
    setCarePlans(
      (prev) => prev.map(
        (cp) => cp.id !== planId ? cp : {
          ...cp,
          goals: cp.goals.map(
            (g, i) => i === goalIdx ? { ...g, status } : g
          )
        }
      )
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "care-plans.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Nursing Care Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded-sm font-medium", children: [
          carePlans.filter((c) => c.status === "active").length,
          " Active"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border border-border rounded-sm overflow-hidden", children: ["all", "active", "resolved"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `care-plans.filter.${f}.tab`,
            onClick: () => setFilterStatus(f),
            className: `px-3 py-1 text-xs font-medium capitalize transition-colors ${filterStatus === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
            children: f
          },
          f
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            "data-ocid": "care-plans.open_modal_button",
            onClick: () => setShowAddForm((v) => !v),
            className: "h-7 text-xs gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
              showAddForm ? "Cancel" : "Add Care Plan"
            ]
          }
        )
      ] })
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        "data-ocid": "care-plans.add.panel",
        className: "border-primary/20 bg-primary/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold text-foreground", children: "New Care Plan" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    htmlFor: "cp-patient",
                    children: "Patient"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "cp-patient",
                    "data-ocid": "care-plans.patient.select",
                    value: newPlan.patientName,
                    onChange: (e) => setNewPlan((p) => ({ ...p, patientName: e.target.value })),
                    className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select patient..." }),
                      patientNames.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: name, children: name }, name))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    htmlFor: "cp-target-date",
                    children: "Target Date"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "date",
                    id: "cp-target-date",
                    "data-ocid": "care-plans.target-date.input",
                    value: newPlan.targetDate,
                    onChange: (e) => setNewPlan((p) => ({ ...p, targetDate: e.target.value })),
                    className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    htmlFor: "cp-problem",
                    children: "Problem / Nursing Diagnosis"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "cp-problem",
                    "data-ocid": "care-plans.problem.input",
                    value: newPlan.problem,
                    onChange: (e) => setNewPlan((p) => ({ ...p, problem: e.target.value })),
                    placeholder: "e.g. Risk for infection related to IV catheter",
                    className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    htmlFor: "cp-goals",
                    children: "Goals (one per line)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "cp-goals",
                    "data-ocid": "care-plans.goals.textarea",
                    value: newPlan.goals,
                    onChange: (e) => setNewPlan((p) => ({ ...p, goals: e.target.value })),
                    rows: 3,
                    placeholder: "Patient will ambulate 50ft by discharge",
                    className: "w-full px-2 py-1.5 text-[12px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    htmlFor: "cp-interventions",
                    children: "Interventions (one per line)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "cp-interventions",
                    "data-ocid": "care-plans.interventions.textarea",
                    value: newPlan.interventions,
                    onChange: (e) => setNewPlan((p) => ({ ...p, interventions: e.target.value })),
                    rows: 3,
                    placeholder: "Assess vital signs every 4 hours",
                    className: "w-full px-2 py-1.5 text-[12px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring resize-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  "data-ocid": "care-plans.add.submit_button",
                  onClick: handleAdd,
                  className: "h-7 text-xs",
                  children: "Save Care Plan"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  "data-ocid": "care-plans.add.cancel_button",
                  onClick: () => setShowAddForm(false),
                  className: "h-7 text-xs",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "care-plans.loading_state", children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-64 mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-32" })
        ]
      },
      k
    )) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "py-16 flex flex-col items-center justify-center gap-3 text-center bg-card border border-border rounded-sm",
        "data-ocid": "care-plans.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-6 h-6 text-muted-foreground/50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-1", children: "No care plans found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground", children: "Add a care plan to get started tracking patient goals and interventions." })
          ] })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "care-plans.list", children: filtered.map((cp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        "data-ocid": `care-plans.item.${idx + 1}`,
        className: `border transition-all ${cp.status === "resolved" ? "opacity-75 bg-muted/20" : "bg-card"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 pt-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: cp.patientName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: cp.status === "active" ? "success" : "neutral",
                    label: cp.status
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground mt-0.5 line-clamp-2", children: cp.problem })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "Target: ",
                cp.targetDate
              ] }),
              cp.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `care-plans.resolve.button.${idx + 1}`,
                  onClick: () => handleMarkResolved(cp.id),
                  className: "text-xs font-medium px-2 py-0.5 rounded-sm border text-success border-success/30 hover:bg-success/10 transition-colors",
                  children: "Mark Resolved"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `care-plans.toggle.button.${idx + 1}`,
                  onClick: () => setExpandedId(expandedId === cp.id ? null : cp.id),
                  className: "p-1 rounded-sm hover:bg-muted/40 transition-colors",
                  children: expandedId === cp.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
                }
              )
            ] })
          ] }) }),
          expandedId === cp.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-4 border-t border-border pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3 h-3" }),
                  "Goals"
                ] }),
                cp.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `care-plans.add-goal.button.${idx + 1}`,
                    onClick: () => setAddGoalFor(addGoalFor === cp.id ? null : cp.id),
                    className: "text-xs font-medium text-primary flex items-center gap-1 hover:underline",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                      addGoalFor === cp.id ? "Cancel" : "Add Goal"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: cp.goals.map((goal, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        className: `w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${goal.status === "Met" ? "text-success" : "text-muted-foreground/40"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-foreground leading-snug", children: goal.text }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: cp.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: goal.status,
                        onChange: (e) => handleGoalStatusChange(
                          cp.id,
                          gi,
                          e.target.value
                        ),
                        className: "text-xs px-1.5 py-0.5 border border-border rounded-sm bg-background",
                        "data-ocid": `care-plans.goal.select.${idx + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Met", children: "Met" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", children: "In Progress" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Met", children: "Not Met" })
                        ]
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: goalStatusVariant[goal.status],
                        label: goal.status
                      }
                    ) })
                  ]
                },
                `${cp.id}-goal-${gi}`
              )) }),
              addGoalFor === cp.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mt-3 p-3 bg-muted/30 border border-border rounded-sm space-y-2",
                  "data-ocid": `care-plans.add-goal.panel.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "New Goal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        "data-ocid": `care-plans.goal.input.${idx + 1}`,
                        value: newGoalText,
                        onChange: (e) => setNewGoalText(e.target.value),
                        placeholder: "Enter goal description...",
                        className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "new-goal-status",
                          className: "text-xs text-muted-foreground",
                          children: "Status:"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          id: "new-goal-status",
                          value: newGoalStatus,
                          onChange: (e) => setNewGoalStatus(
                            e.target.value
                          ),
                          className: "text-xs px-1.5 h-6 border border-border rounded-sm bg-background",
                          "data-ocid": `care-plans.new-goal.select.${idx + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", children: "In Progress" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Met", children: "Met" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Met", children: "Not Met" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "h-6 text-xs",
                          "data-ocid": `care-plans.goal.save_button.${idx + 1}`,
                          onClick: () => handleAddGoal(cp.id),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "ghost",
                          className: "h-6 text-xs",
                          "data-ocid": `care-plans.goal.cancel_button.${idx + 1}`,
                          onClick: () => {
                            setAddGoalFor(null);
                            setNewGoalText("");
                          },
                          children: "Cancel"
                        }
                      )
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2", children: "Interventions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: cp.interventions.map((iv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-1.5 text-[12px] text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" }),
                    iv
                  ]
                },
                iv
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground pt-1 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Created by: ",
                cp.createdBy
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Date: ",
                cp.createdAt
              ] })
            ] })
          ] })
        ]
      },
      cp.id
    )) })
  ] });
}
export {
  NursingCarePlans as default
};
