import { u as useDemoMode, r as reactExports, n as DEMO_PATIENTS, K as DEMO_NURSING_ASSESSMENTS, j as jsxRuntimeExports, a as Stethoscope, B as Button, i as ue } from "./index-4utdZC3E.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
import "./chevron-up-BvGEbEf0.js";
const PAIN_SCORES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const PAIN_FACE_LABELS = [
  "No Pain",
  "Minimal",
  "Mild",
  "Mild-Moderate",
  "Moderate",
  "Moderate+",
  "Moderate-Severe",
  "Severe",
  "Very Severe",
  "Excruciating",
  "Worst Possible"
];
function PainSelector({
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 flex-wrap", children: [
    PAIN_SCORES.map((score) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": `nursing.pain.button.${score + 1}`,
        onClick: () => onChange(score),
        className: `w-10 h-10 rounded-sm text-sm font-bold flex items-center justify-center transition-all border ${value === score ? "border-primary bg-primary/10 ring-1 ring-primary text-primary" : "border-border hover:bg-muted text-foreground"}`,
        title: PAIN_FACE_LABELS[score],
        children: score
      },
      score
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm font-semibold text-foreground tabular-nums", children: [
      value,
      "/10 — ",
      PAIN_FACE_LABELS[value]
    ] })
  ] });
}
function RadioRow({
  options,
  value,
  onChange,
  ocidPrefix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "data-ocid": `${ocidPrefix}.radio.${i + 1}`,
      onClick: () => onChange(opt.value),
      className: `h-7 px-3 text-xs font-medium rounded-sm border transition-all ${value === opt.value ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-muted"}`,
      children: opt.label
    },
    opt.value
  )) });
}
const DEFAULT_FORM = {
  patientId: "",
  patientName: "",
  pain: { score: 0, location: "" },
  skin: { status: "intact", description: "" },
  fallRisk: { level: "low", morseScore: 0 },
  mobility: "independent",
  neuro: { status: "alert", gcs: 15 },
  ivAccess: { type: "none", site: "" },
  dietary: { type: "regular", notes: "" },
  notes: ""
};
function NursingAssessment() {
  const { isDemoMode } = useDemoMode();
  const patients = isDemoMode ? DEMO_PATIENTS : [];
  const WARD_LABELS = {
    icu: "ICU",
    general: "General Medicine",
    surgical: "Surgical",
    pediatric: "Pediatric"
  };
  const wardPref = reactExports.useMemo(() => {
    try {
      const p = JSON.parse(
        localStorage.getItem("medunite_prefs_Nurse") || "{}"
      );
      return p.ward || "";
    } catch {
      return "";
    }
  }, []);
  const filteredPatients = reactExports.useMemo(
    () => patients.filter((p) => !wardPref || p.wardId === wardPref),
    [patients, wardPref]
  );
  const assessmentHeading = wardPref ? `${WARD_LABELS[wardPref] || ""} Nursing Assessment`.trim() : "Nursing Assessment";
  const [savedAssessments, setSavedAssessments] = reactExports.useState(isDemoMode ? DEMO_NURSING_ASSESSMENTS : []);
  const [form, setForm] = reactExports.useState(DEFAULT_FORM);
  const [selectedPatientId, setSelectedPatientId] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const handleSelectPatient = (pid) => {
    setSelectedPatientId(pid);
    const patient = patients.find((p) => String(p.id) === pid);
    const existing = savedAssessments.find((a) => a.patientId === pid);
    if (existing) {
      const { id: _id, assessedBy: _by, assessedAt: _at, ...rest } = existing;
      setForm(rest);
    } else if (patient) {
      setForm({ ...DEFAULT_FORM, patientId: pid, patientName: patient.name });
    } else {
      setForm(DEFAULT_FORM);
    }
  };
  const handleSave = async () => {
    if (!selectedPatientId) {
      ue.error("Please select a patient first.");
      return;
    }
    setSaving(true);
    const assessment = {
      ...form,
      id: `na-${Date.now()}`,
      assessedBy: "Current Nurse",
      assessedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setSavedAssessments((prev) => [
      ...prev.filter((a) => a.patientId !== selectedPatientId),
      assessment
    ]);
    setSaving(false);
    ue.success("Assessment saved successfully.");
  };
  const selectedPatient = patients.find(
    (p) => String(p.id) === selectedPatientId
  );
  const fallVariant = form.fallRisk.level === "high" ? "danger" : form.fallRisk.level === "medium" ? "warning" : "success";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-base font-semibold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4 text-primary" }),
        assessmentHeading
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Complete a structured nursing assessment for the selected patient" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-5 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Patient" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Select Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: selectedPatientId,
              onValueChange: handleSelectPatient,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    "data-ocid": "nursing.patient.select",
                    className: "mt-1 h-8 text-sm",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose a patient..." })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: filteredPatients.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
              ]
            }
          ),
          selectedPatient && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-xs text-muted-foreground", children: [
            "MRN: ",
            selectedPatient.mrn,
            " · DOB:",
            " ",
            selectedPatient.dateOfBirth
          ] })
        ] })
      ] }),
      selectedPatientId && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Pain Assessment" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Pain Score (0 = No Pain, 10 = Worst Possible)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                PainSelector,
                {
                  value: form.pain.score,
                  onChange: (v) => setForm((p) => ({
                    ...p,
                    pain: { ...p.pain, score: v }
                  }))
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  "data-ocid": "nursing.pain.input",
                  value: form.pain.location,
                  onChange: (e) => setForm((p) => ({
                    ...p,
                    pain: { ...p.pain, location: e.target.value }
                  })),
                  className: "mt-1 w-full h-8 px-3 text-sm border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring",
                  placeholder: "e.g. Left lower back"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Skin Integrity" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioRow,
                {
                  options: [
                    { label: "Intact", value: "intact" },
                    { label: "Wound", value: "wound" },
                    { label: "Pressure Ulcer", value: "pressure-ulcer" }
                  ],
                  value: form.skin.status,
                  onChange: (v) => setForm((p) => ({
                    ...p,
                    skin: { ...p.skin, status: v }
                  })),
                  ocidPrefix: "nursing.skin"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  "data-ocid": "nursing.skin.textarea",
                  value: form.skin.description,
                  onChange: (e) => setForm((p) => ({
                    ...p,
                    skin: { ...p.skin, description: e.target.value }
                  })),
                  rows: 2,
                  className: "mt-1 text-sm resize-none",
                  placeholder: "Describe skin condition..."
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Fall Risk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: fallVariant,
                label: form.fallRisk.level
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Risk Level" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioRow,
                {
                  options: [
                    { label: "Low", value: "low" },
                    { label: "Medium", value: "medium" },
                    { label: "High", value: "high" }
                  ],
                  value: form.fallRisk.level,
                  onChange: (v) => setForm((p) => ({
                    ...p,
                    fallRisk: { ...p.fallRisk, level: v }
                  })),
                  ocidPrefix: "nursing.fall"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-28", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Morse Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  "data-ocid": "nursing.fall.input",
                  min: 0,
                  max: 125,
                  value: form.fallRisk.morseScore,
                  onChange: (e) => setForm((p) => ({
                    ...p,
                    fallRisk: {
                      ...p.fallRisk,
                      morseScore: Number.parseInt(e.target.value) || 0
                    }
                  })),
                  className: "mt-1 w-full h-8 px-3 text-sm border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Mobility" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              RadioRow,
              {
                options: [
                  { label: "Independent", value: "independent" },
                  { label: "Assisted", value: "assisted" },
                  { label: "Dependent", value: "dependent" }
                ],
                value: form.mobility,
                onChange: (v) => setForm((p) => ({ ...p, mobility: v })),
                ocidPrefix: "nursing.mobility"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Neuro Status" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioRow,
                {
                  options: [
                    { label: "Alert", value: "alert" },
                    { label: "Confused", value: "confused" },
                    { label: "Unresponsive", value: "unresponsive" }
                  ],
                  value: form.neuro.status,
                  onChange: (v) => setForm((p) => ({
                    ...p,
                    neuro: { ...p.neuro, status: v }
                  })),
                  ocidPrefix: "nursing.neuro"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "GCS (optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    "data-ocid": "nursing.neuro.input",
                    min: 3,
                    max: 15,
                    value: form.neuro.gcs ?? "",
                    onChange: (e) => setForm((p) => ({
                      ...p,
                      neuro: {
                        ...p.neuro,
                        gcs: e.target.value ? Number.parseInt(e.target.value) : void 0
                      }
                    })),
                    className: "mt-1 w-20 h-8 px-3 text-sm border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring",
                    placeholder: "3-15"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "IV Access" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioRow,
                {
                  options: [
                    { label: "Peripheral", value: "peripheral" },
                    { label: "Central", value: "central" },
                    { label: "None", value: "none" }
                  ],
                  value: form.ivAccess.type,
                  onChange: (v) => setForm((p) => ({
                    ...p,
                    ivAccess: { ...p.ivAccess, type: v }
                  })),
                  ocidPrefix: "nursing.iv"
                }
              ),
              form.ivAccess.type !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  "data-ocid": "nursing.iv.input",
                  value: form.ivAccess.site ?? "",
                  onChange: (e) => setForm((p) => ({
                    ...p,
                    ivAccess: { ...p.ivAccess, site: e.target.value }
                  })),
                  className: "w-full h-8 px-3 text-sm border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring",
                  placeholder: "Site description..."
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Dietary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioRow,
                {
                  options: [
                    { label: "Regular", value: "regular" },
                    { label: "Soft", value: "soft" },
                    { label: "NPO", value: "npo" },
                    { label: "Tube Feeding", value: "tube-feeding" }
                  ],
                  value: form.dietary.type,
                  onChange: (v) => setForm((p) => ({
                    ...p,
                    dietary: { ...p.dietary, type: v }
                  })),
                  ocidPrefix: "nursing.dietary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  "data-ocid": "nursing.dietary.input",
                  value: form.dietary.notes ?? "",
                  onChange: (e) => setForm((p) => ({
                    ...p,
                    dietary: { ...p.dietary, notes: e.target.value }
                  })),
                  className: "w-full h-8 px-3 text-sm border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring",
                  placeholder: "Diet notes..."
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-sm bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Nursing Notes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              "data-ocid": "nursing.notes.textarea",
              value: form.notes,
              onChange: (e) => setForm((p) => ({ ...p, notes: e.target.value })),
              rows: 4,
              className: "text-sm resize-none",
              placeholder: "Enter free-text nursing notes, observations, patient responses..."
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-3 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "nursing.save_button",
            onClick: handleSave,
            disabled: saving,
            className: "h-8 text-sm px-6",
            children: saving ? "Saving..." : "Save Assessment"
          }
        ) })
      ] }),
      !selectedPatientId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-16 text-muted-foreground",
          "data-ocid": "nursing.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-8 h-8 mx-auto mb-3 opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Select a patient above to begin the assessment" })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  NursingAssessment as default
};
