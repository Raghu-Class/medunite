import { u as useDemoMode, f as useActor, r as reactExports, V as DEMO_CLINICAL_NOTES, i as ue, n as DEMO_PATIENTS, j as jsxRuntimeExports, B as Button, C as ChevronDown } from "./index-4utdZC3E.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
import { F as FileText } from "./file-text-BiTX0NSn.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
const noteTypeBadge = {
  clinical: "bg-primary/10 text-primary border border-primary/30",
  nursing: "bg-success/10 text-success border border-success/30",
  procedure: "bg-warning/10 text-warning border border-warning/30"
};
const soapLabels = [
  { key: "S", label: "Subjective" },
  { key: "O", label: "Objective" },
  { key: "A", label: "Assessment" },
  { key: "P", label: "Plan" }
];
const toNoteEntry = (n) => ({
  id: n.id,
  patientId: n.patientId,
  noteType: n.noteType,
  authorId: n.authorId,
  content: n.content,
  subjective: n.content ?? "",
  objective: "",
  assessment: "",
  plan: ""
});
function ClinicalNotes({
  activePatientId,
  activePatientName,
  onClearFilter,
  onNavigate
}) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor, isFetching } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [notes, setNotes] = reactExports.useState([]);
  const [patients, setPatients] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [expandedRows, setExpandedRows] = reactExports.useState(/* @__PURE__ */ new Set());
  const [form, setForm] = reactExports.useState({
    patientId: "",
    noteType: "clinical",
    subjective: "",
    objective: "",
    assessment: "",
    plan: ""
  });
  const loadData = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const [noteData, patientData] = await Promise.all([
        actor.listClinicalNotes(),
        actor.listPatients()
      ]);
      const mapped = noteData.map(toNoteEntry);
      if (isDemoMode) {
        const seedMapped = DEMO_CLINICAL_NOTES.map(toNoteEntry);
        const backendIds = new Set(mapped.map((n) => n.id));
        const merged = [
          ...mapped,
          ...seedMapped.filter((n) => !backendIds.has(n.id))
        ];
        setNotes(merged);
      } else {
        setNotes(mapped);
      }
      setPatients(patientData);
    } catch {
      ue.error("Failed to load clinical notes");
      if (isDemoMode) {
        setNotes(DEMO_CLINICAL_NOTES.map(toNoteEntry));
        setPatients(DEMO_PATIENTS);
      }
    } finally {
      setLoading(false);
    }
  }, [actor, isDemoMode]);
  reactExports.useEffect(() => {
    if (!actor) return;
    if (!isDemoMode && isFetching) return;
    setLoading(true);
    loadData();
  }, [actor, isFetching, loadData, isDemoMode]);
  const filteredNotes = activePatientId ? notes.filter((n) => n.patientId === activePatientId) : notes;
  const handleAdd = async () => {
    if (!form.patientId || !form.subjective) {
      ue.error("Patient and subjective note required");
      return;
    }
    if (!actor) return;
    setSubmitting(true);
    try {
      const content = JSON.stringify({
        subjective: form.subjective,
        objective: form.objective,
        assessment: form.assessment,
        plan: form.plan
      });
      await actor.createClinicalNote(
        BigInt(form.patientId),
        form.noteType,
        content,
        1n
      );
      ue.success("Note saved");
      setShowForm(false);
      setForm({
        patientId: "",
        noteType: "clinical",
        subjective: "",
        objective: "",
        assessment: "",
        plan: ""
      });
      await loadData();
    } catch {
      ue.error("Failed to save note");
    } finally {
      setSubmitting(false);
    }
  };
  const toggleRow = (i) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };
  const patientList = patients.length > 0 ? patients : DEMO_PATIENTS;
  if (!activePatientId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 gap-4 text-center",
        "data-ocid": "notes.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-10 h-10 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select a patient to view their clinical notes" }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "notes.page", children: [
    activePatientId && activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientFilterBar,
      {
        patientName: activePatientName,
        onClear: onClearFilter ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
        "data-ocid": "notes.primary_button",
        onClick: () => setShowForm((v) => !v),
        children: [
          showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
          "Add Note"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card p-5",
        "data-ocid": "notes.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "Add Clinical Note" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
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
                        "data-ocid": "notes.patient.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: patientList.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Note Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.noteType,
                  onValueChange: (v) => setForm((p) => ({ ...p, noteType: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "notes.type.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "clinical", children: "Clinical" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nursing", children: "Nursing" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "procedure", children: "Procedure" })
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mb-4", children: soapLabels.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-semibold text-muted-foreground flex items-center gap-1.5 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-accent", children: key }),
              label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                "data-ocid": `notes.${label.toLowerCase()}.textarea`,
                value: form[label.toLowerCase()],
                onChange: (e) => setForm((p) => ({
                  ...p,
                  [label.toLowerCase()]: e.target.value
                })),
                rows: 3,
                className: "text-sm",
                placeholder: `Enter ${label.toLowerCase()} findings...`
              }
            )
          ] }, key)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                "data-ocid": "notes.submit_button",
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                disabled: submitting,
                onClick: handleAdd,
                children: [
                  submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1.5 animate-spin" }) : null,
                  "Save Note"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "notes.cancel_button",
                onClick: () => setShowForm(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "notes.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "S — Subjective" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "A — Assessment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4 w-8" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? ["sk-0", "sk-1", "sk-2", "sk-3"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "notes.loading_state", children: ["c0", "c1", "c2", "c3", "c4"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }) }, c)) }, k)) : filteredNotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          colSpan: 5,
          className: "text-center py-8 text-sm text-muted-foreground",
          "data-ocid": "notes.empty_state",
          children: "No clinical notes found."
        }
      ) }) : filteredNotes.map((n, i) => {
        const patient = patientList.find((p) => p.id === n.patientId);
        const isExpanded = expandedRows.has(i);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `notes.row.${i + 1}`,
              className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all cursor-pointer",
              onClick: () => toggleRow(i),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: (patient == null ? void 0 : patient.name) ?? "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center text-xs font-semibold uppercase tracking-wide px-1.5 py-0.5 ${noteTypeBadge[n.noteType] ?? noteTypeBadge.clinical}`,
                    children: n.noteType
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground max-w-xs px-4 py-2.5 truncate", children: n.subjective.length > 60 ? `${n.subjective.slice(0, 60)}…` : n.subjective }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground max-w-xs px-4 py-2.5 truncate", children: n.assessment.length > 60 ? `${n.assessment.slice(0, 60)}…` : n.assessment }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground" }) })
              ]
            },
            String(n.id)
          ),
          isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableRow,
            {
              className: "bg-muted/10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: soapLabels.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-accent", children: key }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground leading-relaxed whitespace-pre-wrap", children: n[label.toLowerCase()] })
              ] }, key)) }) })
            },
            `${String(n.id)}-expanded`
          )
        ] });
      }) })
    ] }) })
  ] });
}
export {
  ClinicalNotes as default
};
