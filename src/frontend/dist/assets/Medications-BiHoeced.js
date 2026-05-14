import { u as useDemoMode, f as useActor, r as reactExports, g as useQueryClient, O as DEMO_MEDICATIONS, n as DEMO_PATIENTS, j as jsxRuntimeExports, P as Pill, B as Button, i as ue } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { g as useMedications, a as usePatients } from "./useBackendData-DW6vRqpq.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
function Medications({
  activePatientId,
  activePatientName,
  onClearFilter,
  onNavigate
}) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [meds, setMeds] = reactExports.useState([]);
  const [patients, setPatients] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    patientId: "",
    name: "",
    dose: "",
    frequency: "",
    status: "active"
  });
  const queryClient = useQueryClient();
  const { data: medsData, isLoading: medsLoading } = useMedications();
  const { data: patientsData, isLoading: patientsLoading } = usePatients();
  reactExports.useEffect(() => {
    if (isDemoMode) return;
    if (medsData) setMeds(medsData);
    if (patientsData) setPatients(patientsData);
    if (!medsLoading && !patientsLoading) setLoading(false);
  }, [medsData, patientsData, medsLoading, patientsLoading, isDemoMode]);
  reactExports.useEffect(() => {
    if (!isDemoMode || !actor) return;
    setLoading(true);
    Promise.all([actor.listMedications(), actor.listPatients()]).then(([medData, patientData]) => {
      const backendMeds = medData;
      const backendIds = new Set(backendMeds.map((m) => m.id));
      const merged = [
        ...backendMeds,
        ...DEMO_MEDICATIONS.filter(
          (m) => !backendIds.has(m.id)
        )
      ];
      setMeds(merged);
      setPatients(patientData);
    }).catch(() => {
      setMeds(DEMO_MEDICATIONS);
      setPatients(DEMO_PATIENTS);
    }).finally(() => setLoading(false));
  }, [actor, isDemoMode]);
  const filteredMeds = activePatientId ? meds.filter((m) => m.patientId === activePatientId) : meds;
  const handleAdd = async () => {
    if (!form.patientId || !form.name) {
      ue.error("Patient and medication name required");
      return;
    }
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.addMedication(
        BigInt(form.patientId),
        form.name,
        form.dose,
        form.frequency,
        form.status
      );
      ue.success("Medication added");
      setShowForm(false);
      setForm({
        patientId: "",
        name: "",
        dose: "",
        frequency: "",
        status: "active"
      });
      queryClient.invalidateQueries({ queryKey: ["medications"] });
    } catch {
      ue.error("Failed to add medication");
    } finally {
      setSubmitting(false);
    }
  };
  const handleDiscontinue = async (id) => {
    if (!actor) return;
    try {
      await actor.updateMedicationStatus(id, "discontinued");
      setMeds(
        (prev) => prev.map((m) => m.id === id ? { ...m, status: "discontinued" } : m)
      );
      ue.success("Medication discontinued");
    } catch {
      ue.error("Failed to update medication");
    }
  };
  const patientList = patients.length > 0 ? patients : DEMO_PATIENTS;
  if (!activePatientId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 gap-4 text-center",
        "data-ocid": "medications.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-10 h-10 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select a patient to view their medications" }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "medications.page", children: [
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
        "data-ocid": "medications.primary_button",
        onClick: () => setShowForm((v) => !v),
        children: [
          showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
          "Add Medication"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card p-5",
        "data-ocid": "medications.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "Add Medication" }),
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
                        "data-ocid": "medications.patient.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: patientList.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
                  ]
                }
              )
            ] }),
            ["name", "dose", "frequency"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground capitalize", children: f }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": `medications.${f}.input`,
                  value: form[f],
                  onChange: (e) => setForm((p) => ({ ...p, [f]: e.target.value })),
                  className: "mt-1 h-8 text-sm"
                }
              )
            ] }, f))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.status,
                onValueChange: (v) => setForm((p) => ({ ...p, status: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "medications.status.select",
                      className: "mt-1 h-8 text-sm",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "stopped", children: "Stopped" })
                  ] })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                "data-ocid": "medications.submit_button",
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                disabled: submitting,
                onClick: handleAdd,
                children: [
                  submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1.5 animate-spin" }) : null,
                  "Add Medication"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "medications.cancel_button",
                variant: "outline",
                onClick: () => setShowForm(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "medications.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Medication" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Dose" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Frequency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? ["sk-0", "sk-1", "sk-2", "sk-3"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "medications.loading_state", children: ["c0", "c1", "c2", "c3", "c4", "c5"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }) }, c)) }, k)) : filteredMeds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          colSpan: 6,
          className: "text-center py-8 text-sm text-muted-foreground",
          "data-ocid": "medications.empty_state",
          children: "No medications found."
        }
      ) }) : filteredMeds.map((m, i) => {
        const patient = patientList.find((p) => p.id === m.patientId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `medications.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: (patient == null ? void 0 : patient.name) ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs px-4 py-2.5", children: m.dose }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs px-4 py-2.5", children: m.frequency }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: m.status === "active" ? "success" : m.status === "discontinued" ? "danger" : "neutral",
                  label: m.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: m.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `medications.delete_button.${i + 1}`,
                  onClick: () => handleDiscontinue(m.id),
                  className: "h-6 px-2 text-xs font-semibold border border-border text-muted-foreground hover:text-destructive rounded-sm",
                  children: "Stop"
                }
              ) })
            ]
          },
          String(m.id)
        );
      }) })
    ] }) })
  ] });
}
export {
  Medications as default
};
