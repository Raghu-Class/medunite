import { f as useActor, r as reactExports, j as jsxRuntimeExports } from "./index-4utdZC3E.js";
const UPCOMING_APPOINTMENTS = [
  {
    id: "appt-1",
    date: "Mar 16, 2026 at 9:00 AM",
    provider: "Dr. Emily Carter",
    reason: "Follow-up visit"
  },
  {
    id: "appt-3",
    date: "Mar 17, 2026 at 2:30 PM",
    provider: "Dr. Michael Ross",
    reason: "Cardiology consult"
  },
  {
    id: "appt-8",
    date: "Mar 19, 2026 at 11:00 AM",
    provider: "Dr. Sarah Kim",
    reason: "Annual physical"
  }
];
const SYMPTOMS = [
  "Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Nausea",
  "Headache",
  "Chest pain",
  "Dizziness",
  "Abdominal pain",
  "Joint pain",
  "Rash",
  "Sore throat"
];
const DURATION_OPTIONS = [
  { value: "today", label: "Just today" },
  { value: "1-3d", label: "1–3 days" },
  { value: "4-7d", label: "4–7 days" },
  { value: "1-2w", label: "1–2 weeks" },
  { value: "2w+", label: "More than 2 weeks" }
];
function SymptomIntake() {
  var _a;
  const { actor } = useActor();
  const [chiefComplaint, setChiefComplaint] = reactExports.useState("");
  const [selectedSymptoms, setSelectedSymptoms] = reactExports.useState([]);
  const [severity, setSeverity] = reactExports.useState(3);
  const [selectedAppointmentId, setSelectedAppointmentId] = reactExports.useState(
    ((_a = UPCOMING_APPOINTMENTS[0]) == null ? void 0 : _a.id) ?? ""
  );
  const [duration, setDuration] = reactExports.useState("");
  const [currentMeds, setCurrentMeds] = reactExports.useState("");
  const [allergies, setAllergies] = reactExports.useState("");
  const [recentChanges, setRecentChanges] = reactExports.useState("");
  const [additionalNotes, setAdditionalNotes] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const toggleSymptom = (s) => {
    setSelectedSymptoms(
      (prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };
  const handleSubmit = async () => {
    if (!chiefComplaint.trim()) return;
    const payload = {
      chiefComplaint,
      symptoms: selectedSymptoms,
      severity,
      duration,
      currentMeds,
      allergies,
      recentChanges,
      additionalNotes,
      checkedIn: true,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const apptKey = selectedAppointmentId || "general";
    localStorage.setItem(`previsit_intake_${apptKey}`, JSON.stringify(payload));
    try {
      if (actor) {
        await actor.createClinicalNote(
          BigInt(1),
          "symptom-intake",
          JSON.stringify(payload),
          BigInt(10)
        );
      }
    } catch {
    }
    setSubmitted(true);
  };
  const handleReset = () => {
    setChiefComplaint("");
    setSelectedSymptoms([]);
    setSeverity(3);
    setDuration("");
    setCurrentMeds("");
    setAllergies("");
    setRecentChanges("");
    setAdditionalNotes("");
    setSubmitted(false);
  };
  const severityLabel = (v) => {
    if (v <= 2) return "Mild";
    if (v <= 4) return "Moderate";
    if (v <= 6) return "Significant";
    if (v <= 8) return "Severe";
    return "Very Severe";
  };
  const severityColor = (v) => {
    if (v <= 3) return "var(--success)";
    if (v <= 6) return "var(--warning)";
    return "var(--destructive)";
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "max-w-lg mx-auto mt-12",
        "data-ocid": "symptoms.success_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm px-8 py-10 flex flex-col items-center text-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full flex items-center justify-center bg-success/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "w-7 h-7 text-success",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-semibold text-foreground", children: "You're Checked In! ✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 leading-relaxed", children: "Your pre-visit information has been submitted and your care team will review it before your appointment." })
          ] }),
          (() => {
            const appt = UPCOMING_APPOINTMENTS.find(
              (a) => a.id === selectedAppointmentId
            );
            return appt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-muted/40 rounded-sm p-3 text-left text-sm space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: appt.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: appt.provider }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: appt.reason })
            ] }) : null;
          })(),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "symptoms.reset.button",
              onClick: handleReset,
              className: "mt-2 px-5 py-2 rounded-sm text-sm font-medium text-muted-foreground border border-border hover:text-foreground transition-colors",
              children: "Submit another intake"
            }
          )
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", "data-ocid": "symptoms.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5 leading-relaxed", children: "Please complete this form before your upcoming visit. Your care team will review your responses." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Check In For Appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "space-y-2",
            role: "radiogroup",
            "aria-label": "Select appointment",
            children: UPCOMING_APPOINTMENTS.map((a) => {
              const selected = selectedAppointmentId === a.id;
              const inputId = `appt-radio-${a.id}`;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: inputId,
                  "data-ocid": `symptoms.appointment.${a.id}.toggle`,
                  className: `flex items-start gap-3 p-3 rounded-sm cursor-pointer transition-all border ${selected ? "border-primary bg-primary/5" : "border-border hover:bg-muted/30"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: inputId,
                        type: "radio",
                        name: "appointment",
                        value: a.id,
                        checked: selected,
                        onChange: () => setSelectedAppointmentId(a.id),
                        className: "sr-only"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${selected ? "border-primary bg-primary" : "border-border bg-transparent"}`,
                        "aria-hidden": "true",
                        children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white block" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: a.date }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                        a.provider,
                        " — ",
                        a.reason
                      ] })
                    ] })
                  ]
                },
                a.id
              );
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Chief Complaint" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "chief-complaint",
            className: "block text-sm font-medium text-foreground mb-1.5",
            children: "What is the main reason for your visit today?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "chief-complaint",
            type: "text",
            "data-ocid": "symptoms.complaint.input",
            value: chiefComplaint,
            onChange: (e) => setChiefComplaint(e.target.value),
            placeholder: "e.g., chest tightness and shortness of breath for 3 days",
            className: "w-full h-9 px-3 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Current Symptoms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Select all that apply:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: SYMPTOMS.map((symptom) => {
          const checked = selectedSymptoms.includes(symptom);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `symptoms.${symptom.toLowerCase().replace(/\s+/g, "-")}.toggle`,
              onClick: () => toggleSymptom(symptom),
              className: "flex items-center gap-2 px-3 py-2 rounded-sm text-sm font-medium text-left transition-all border",
              style: {
                borderColor: checked ? "var(--accent)" : "var(--border)",
                background: checked ? "var(--background)" : "transparent",
                color: checked ? "var(--foreground)" : "var(--muted-foreground)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0",
                    style: {
                      background: checked ? "var(--accent)" : "var(--muted)",
                      border: checked ? "none" : "1px solid var(--border)"
                    },
                    children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "w-2.5 h-2.5 text-white",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
                      }
                    )
                  }
                ),
                symptom
              ]
            },
            symptom
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Symptom Severity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "How severe are your symptoms?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-sm font-bold",
              style: { color: severityColor(severity) },
              children: [
                severity,
                "/10 — ",
                severityLabel(severity)
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            id: "severity-slider",
            "data-ocid": "symptoms.severity.input",
            min: 1,
            max: 10,
            value: severity,
            onChange: (e) => setSeverity(Number(e.target.value)),
            className: "w-full",
            "aria-label": "Symptom severity"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1 — Mild" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5 — Moderate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 — Severe" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Duration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "symptom-duration",
            className: "block text-sm font-medium text-foreground mb-1.5",
            children: "How long have you had these symptoms?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            id: "symptom-duration",
            "data-ocid": "symptoms.duration.select",
            value: duration,
            onChange: (e) => setDuration(e.target.value),
            className: "w-full h-9 px-3 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select duration..." }),
              DURATION_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, children: opt.label }, opt.value))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Medications & Allergies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "current-meds",
                className: "block text-sm font-medium text-foreground mb-1.5",
                children: "Current medications"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "current-meds",
                "data-ocid": "symptoms.medications.textarea",
                value: currentMeds,
                onChange: (e) => setCurrentMeds(e.target.value),
                rows: 3,
                placeholder: "List all current medications and doses...",
                className: "w-full px-3 py-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "known-allergies",
                className: "block text-sm font-medium text-foreground mb-1.5",
                children: "Known allergies"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "known-allergies",
                "data-ocid": "symptoms.allergies.textarea",
                value: allergies,
                onChange: (e) => setAllergies(e.target.value),
                rows: 3,
                placeholder: "List any known drug or food allergies...",
                className: "w-full px-3 py-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Recent Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "recent-changes",
            className: "block text-sm font-medium text-foreground mb-1.5",
            children: "Any recent changes? (new medications, travel, unusual stress, dietary changes, etc.)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "recent-changes",
            "data-ocid": "symptoms.recent-changes.textarea",
            value: recentChanges,
            onChange: (e) => setRecentChanges(e.target.value),
            rows: 3,
            placeholder: "Describe any recent changes that may be relevant...",
            className: "w-full px-3 py-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Additional Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "additional-notes",
            className: "block text-sm font-medium text-foreground mb-1.5",
            children: "Anything else you'd like your care team to know?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "additional-notes",
            "data-ocid": "symptoms.notes.textarea",
            value: additionalNotes,
            onChange: (e) => setAdditionalNotes(e.target.value),
            rows: 3,
            placeholder: "Any additional information for your provider...",
            className: "w-full px-3 py-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "symptoms.submit_button",
            onClick: handleSubmit,
            disabled: !chiefComplaint.trim(),
            className: "px-6 py-2.5 rounded-sm text-sm font-semibold text-white transition-all disabled:opacity-50",
            style: { background: "var(--accent)" },
            children: "Submit Intake Form"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Chief complaint is required to submit" })
      ] })
    ] })
  ] });
}
export {
  SymptomIntake as default
};
