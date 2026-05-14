import { r as reactExports, j as jsxRuntimeExports, B as Button, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
import { P as Pen } from "./pen-B9xSOcM5.js";
const DEMO_PATIENTS = [
  {
    id: "1",
    name: "Margaret Chen",
    dob: "1968-03-15",
    mrn: "MRN-001",
    rows: [
      {
        id: 1,
        current: {
          id: 1,
          name: "Metformin",
          dose: "1000mg",
          frequency: "Twice daily",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-02-20"
        },
        prior: {
          id: 1,
          name: "Metformin",
          dose: "500mg",
          frequency: "Twice daily",
          prescriber: "Dr. Jordan Lee",
          lastFilled: "2025-11-10"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 2,
        current: {
          id: 2,
          name: "Lisinopril",
          dose: "10mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-02-20"
        },
        prior: {
          id: 2,
          name: "Lisinopril",
          dose: "10mg",
          frequency: "Once daily",
          prescriber: "Dr. Jordan Lee",
          lastFilled: "2025-11-10"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 3,
        current: {
          id: 3,
          name: "Aspirin",
          dose: "81mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-02-15"
        },
        prior: null,
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 4,
        current: null,
        prior: {
          id: 4,
          name: "Glipizide",
          dose: "5mg",
          frequency: "Once daily",
          prescriber: "Dr. Jordan Lee",
          lastFilled: "2025-09-01"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      }
    ]
  },
  {
    id: "2",
    name: "Robert Okonkwo",
    dob: "1954-07-22",
    mrn: "MRN-002",
    rows: [
      {
        id: 1,
        current: {
          id: 1,
          name: "Furosemide",
          dose: "40mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-03-01"
        },
        prior: {
          id: 1,
          name: "Furosemide",
          dose: "20mg",
          frequency: "Once daily",
          prescriber: "Dr. Williams",
          lastFilled: "2025-12-01"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 2,
        current: {
          id: 2,
          name: "Potassium Chloride",
          dose: "20mEq",
          frequency: "Twice daily",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-03-01"
        },
        prior: {
          id: 2,
          name: "Potassium Chloride",
          dose: "20mEq",
          frequency: "Once daily",
          prescriber: "Dr. Williams",
          lastFilled: "2025-12-01"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 3,
        current: {
          id: 3,
          name: "Carvedilol",
          dose: "6.25mg",
          frequency: "Twice daily",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-03-01"
        },
        prior: {
          id: 3,
          name: "Carvedilol",
          dose: "6.25mg",
          frequency: "Twice daily",
          prescriber: "Dr. Williams",
          lastFilled: "2025-12-01"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      }
    ]
  },
  {
    id: "3",
    name: "Sophia Martinez",
    dob: "1982-11-08",
    mrn: "MRN-003",
    rows: [
      {
        id: 1,
        current: {
          id: 1,
          name: "Levothyroxine",
          dose: "75mcg",
          frequency: "Once daily (morning)",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-02-10"
        },
        prior: {
          id: 1,
          name: "Levothyroxine",
          dose: "50mcg",
          frequency: "Once daily (morning)",
          prescriber: "Dr. Park",
          lastFilled: "2025-08-10"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 2,
        current: {
          id: 2,
          name: "Vitamin D3",
          dose: "2000 IU",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Chen",
          lastFilled: "2026-02-10"
        },
        prior: null,
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 3,
        current: null,
        prior: {
          id: 3,
          name: "Atenolol",
          dose: "25mg",
          frequency: "Once daily",
          prescriber: "Dr. Park",
          lastFilled: "2025-06-01"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      }
    ]
  },
  {
    id: "4",
    name: "William Park",
    dob: "1947-02-14",
    mrn: "MRN-007",
    rows: [
      {
        id: 1,
        current: {
          id: 1,
          name: "Amlodipine",
          dose: "10mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-03-05"
        },
        prior: {
          id: 1,
          name: "Amlodipine",
          dose: "5mg",
          frequency: "Once daily",
          prescriber: "Dr. Chen",
          lastFilled: "2025-10-12"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 2,
        current: {
          id: 2,
          name: "Tiotropium",
          dose: "18mcg",
          frequency: "Once daily (inhaled)",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-03-05"
        },
        prior: {
          id: 2,
          name: "Tiotropium",
          dose: "18mcg",
          frequency: "Once daily (inhaled)",
          prescriber: "Dr. Chen",
          lastFilled: "2025-10-12"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 3,
        current: {
          id: 3,
          name: "Fluticasone/Salmeterol",
          dose: "250/50mcg",
          frequency: "Twice daily (inhaled)",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-02-28"
        },
        prior: {
          id: 3,
          name: "Fluticasone/Salmeterol",
          dose: "250/50mcg",
          frequency: "Twice daily (inhaled)",
          prescriber: "Dr. Chen",
          lastFilled: "2025-10-12"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 4,
        current: {
          id: 4,
          name: "Pantoprazole",
          dose: "40mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-02-20"
        },
        prior: null,
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 5,
        current: null,
        prior: {
          id: 5,
          name: "Theophylline",
          dose: "200mg",
          frequency: "Twice daily",
          prescriber: "Dr. Chen",
          lastFilled: "2025-08-01"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      }
    ]
  },
  {
    id: "5",
    name: "Eleanor Walsh",
    dob: "1967-09-03",
    mrn: "MRN-008",
    rows: [
      {
        id: 1,
        current: {
          id: 1,
          name: "Atorvastatin",
          dose: "40mg",
          frequency: "Once daily (evening)",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-03-01"
        },
        prior: {
          id: 1,
          name: "Atorvastatin",
          dose: "20mg",
          frequency: "Once daily (evening)",
          prescriber: "Dr. Osei",
          lastFilled: "2025-09-15"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 2,
        current: {
          id: 2,
          name: "Sertraline",
          dose: "100mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-03-01"
        },
        prior: {
          id: 2,
          name: "Sertraline",
          dose: "50mg",
          frequency: "Once daily",
          prescriber: "Dr. Osei",
          lastFilled: "2025-09-15"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 3,
        current: {
          id: 3,
          name: "Metoprolol Succinate",
          dose: "50mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-02-25"
        },
        prior: {
          id: 3,
          name: "Metoprolol Succinate",
          dose: "50mg",
          frequency: "Once daily",
          prescriber: "Dr. Osei",
          lastFilled: "2025-09-15"
        },
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 4,
        current: {
          id: 4,
          name: "Escitalopram",
          dose: "10mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-03-01"
        },
        prior: null,
        status: "pending",
        notes: "",
        showNoteInput: false
      },
      {
        id: 5,
        current: null,
        prior: {
          id: 5,
          name: "Alprazolam",
          dose: "0.5mg",
          frequency: "Three times daily PRN",
          prescriber: "Dr. Osei",
          lastFilled: "2025-07-10"
        },
        status: "pending",
        notes: "Discontinued per patient request — replaced with SSRI therapy",
        showNoteInput: false
      },
      {
        id: 6,
        current: {
          id: 6,
          name: "Folic Acid",
          dose: "1mg",
          frequency: "Once daily",
          prescriber: "Dr. Sarah Johnson",
          lastFilled: "2026-02-15"
        },
        prior: null,
        status: "pending",
        notes: "",
        showNoteInput: false
      }
    ]
  }
];
const statusVariant = (s) => {
  switch (s) {
    case "continued":
      return "success";
    case "discontinued":
      return "danger";
    case "modified":
      return "warning";
    default:
      return "neutral";
  }
};
function MedCell({ med }) {
  if (!med) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground italic", children: "Not on list" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: med.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
      med.dose,
      " · ",
      med.frequency
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      med.prescriber,
      " · ",
      med.lastFilled
    ] })
  ] });
}
function MedicationReconciliation({
  activePatientId,
  activePatientName,
  onClearFilter
}) {
  const [selectedPatientId, setSelectedPatientId] = reactExports.useState("1");
  const [patients, setPatients] = reactExports.useState(DEMO_PATIENTS);
  const [saved, setSaved] = reactExports.useState({});
  const patient = patients.find((p) => p.id === selectedPatientId);
  const rows = (patient == null ? void 0 : patient.rows) ?? [];
  const updateRow = (rowId, update) => {
    setPatients(
      (prev) => prev.map(
        (p) => p.id !== selectedPatientId ? p : {
          ...p,
          rows: p.rows.map(
            (r) => r.id === rowId ? { ...r, ...update } : r
          )
        }
      )
    );
  };
  const handleContinue = (rowId) => {
    updateRow(rowId, { status: "continued", showNoteInput: false });
  };
  const handleDiscontinue = (rowId) => {
    updateRow(rowId, { status: "discontinued", showNoteInput: false });
  };
  const handleModify = (rowId) => {
    updateRow(rowId, { status: "modified", showNoteInput: true });
  };
  const handleSave = () => {
    setSaved((prev) => ({ ...prev, [selectedPatientId]: true }));
    ue.success(`Medication reconciliation saved for ${patient.name}`);
  };
  const pendingCount = rows.filter((r) => r.status === "pending").length;
  const isSaved = saved[selectedPatientId];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "medrec.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "medrec-patient-select",
            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
            children: "Patient"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            id: "medrec-patient-select",
            "data-ocid": "medrec.patient.select",
            value: selectedPatientId,
            onChange: (e) => {
              setSelectedPatientId(e.target.value);
              setSaved((prev) => ({ ...prev, [e.target.value]: false }));
            },
            className: "h-8 px-2 text-[13px] bg-background border border-input rounded-sm min-w-[200px]",
            children: patients.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
          }
        )
      ] }),
      patient && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
        "DOB: ",
        patient.dob,
        " · MRN: ",
        patient.mrn
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
        pendingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-warning font-medium", children: [
          pendingCount,
          " medication",
          pendingCount !== 1 ? "s" : "",
          " need review"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            "data-ocid": "medrec.save_button",
            onClick: handleSave,
            disabled: pendingCount > 0,
            className: "h-8 text-xs gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
              "Save Reconciliation"
            ]
          }
        )
      ] })
    ] }),
    isSaved && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2.5 px-4 py-3 bg-success/10 border border-success/30 rounded-sm",
        "data-ocid": "medrec.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-success flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-success font-medium", children: [
            "Reconciliation saved —",
            " ",
            rows.filter((r) => r.status === "continued").length,
            " continued,",
            " ",
            rows.filter((r) => r.status === "discontinued").length,
            " ",
            "discontinued, ",
            rows.filter((r) => r.status === "modified").length,
            " ",
            "modified"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm overflow-hidden",
        "data-ocid": "medrec.table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[2fr_2fr_1fr_2fr] border-b border-border bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-r border-border", children: "Current Medications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-r border-border", children: "Last Reconciled (Prior Visit)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-r border-border", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Action" })
          ] }),
          rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "px-4 py-10 text-center text-[13px] text-muted-foreground",
              "data-ocid": "medrec.empty_state",
              children: "No medications to reconcile."
            }
          ) : rows.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid grid-cols-[2fr_2fr_1fr_2fr] border-b border-border last:border-0",
              "data-ocid": `medrec.row.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-r border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MedCell, { med: row.current }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-r border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MedCell, { med: row.prior }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-r border-border flex items-start pt-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: statusVariant(row.status),
                    label: row.status.charAt(0).toUpperCase() + row.status.slice(1)
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: row.status === "continued" ? "default" : "outline",
                        "data-ocid": `medrec.continue.button.${idx + 1}`,
                        onClick: () => handleContinue(row.id),
                        className: "h-6 text-xs px-2",
                        children: "Continue"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: row.status === "discontinued" ? "destructive" : "outline",
                        "data-ocid": `medrec.discontinue.button.${idx + 1}`,
                        onClick: () => handleDiscontinue(row.id),
                        className: "h-6 text-xs px-2",
                        children: "Discontinue"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: row.status === "modified" ? "secondary" : "outline",
                        "data-ocid": `medrec.modify.button.${idx + 1}`,
                        onClick: () => handleModify(row.id),
                        className: "h-6 text-xs px-2 gap-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3" }),
                          " Modify"
                        ]
                      }
                    )
                  ] }),
                  row.showNoteInput && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": `medrec.note.input.${idx + 1}`,
                        placeholder: "New dose or instructions...",
                        value: row.notes,
                        onChange: (e) => updateRow(row.id, { notes: e.target.value }),
                        className: "h-6 text-xs"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        "data-ocid": `medrec.reason.textarea.${idx + 1}`,
                        placeholder: "Reason for modification...",
                        rows: 2,
                        className: "text-xs min-h-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        "data-ocid": `medrec.note.save_button.${idx + 1}`,
                        onClick: () => updateRow(row.id, { showNoteInput: false }),
                        className: "h-6 text-xs px-2",
                        children: "Save Note"
                      }
                    )
                  ] }),
                  row.notes && !row.showNoteInput && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: row.notes })
                ] })
              ]
            },
            row.id
          ))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border rounded-sm px-4 py-3 flex items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground font-medium", children: "Reconciliation Summary" }),
      [
        "continued",
        "discontinued",
        "modified",
        "pending"
      ].map((s) => {
        const count = rows.filter((r) => r.status === s).length;
        if (count === 0) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-1.5 text-[12px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatusBadge,
          {
            variant: statusVariant(s),
            label: `${count} ${s.charAt(0).toUpperCase() + s.slice(1)}`
          }
        ) }, s);
      })
    ] })
  ] });
}
export {
  MedicationReconciliation as default
};
