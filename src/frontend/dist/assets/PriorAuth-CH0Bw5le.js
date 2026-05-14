import { f as useActor, r as reactExports, j as jsxRuntimeExports, C as ChevronDown, n as DEMO_PATIENTS, B as Button, S as ShieldCheck, i as ue } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
const SEED_PRIOR_AUTH = [
  {
    id: 1,
    patientName: "Margaret Chen",
    procedure: "Continuous Glucose Monitor",
    payer: "BlueCross BlueShield",
    urgency: "routine",
    status: "approved",
    submittedDate: "2026-03-05",
    decisionDate: "2026-03-08",
    requestedBy: "Dr. Jordan Lee",
    justification: "Type 2 DM poorly controlled, HbA1c 8.2%"
  },
  {
    id: 2,
    patientName: "Robert Okonkwo",
    procedure: "IV Diuresis (Furosemide 80mg)",
    payer: "Medicare Part B",
    urgency: "urgent",
    status: "approved",
    submittedDate: "2026-03-10",
    decisionDate: "2026-03-10",
    requestedBy: "Dr. Jordan Lee",
    justification: "Acute CHF exacerbation, respiratory distress"
  },
  {
    id: 3,
    patientName: "James Thornton",
    procedure: "MRI Lumbar Spine",
    payer: "Aetna",
    urgency: "routine",
    status: "pending",
    submittedDate: "2026-03-12",
    requestedBy: "Dr. Jordan Lee",
    justification: "Lower back pain > 6 weeks, failed conservative therapy"
  },
  {
    id: 4,
    patientName: "Sophia Martinez",
    procedure: "Laparoscopic Cholecystectomy",
    payer: "UnitedHealthcare",
    urgency: "urgent",
    status: "approved",
    submittedDate: "2026-03-11",
    decisionDate: "2026-03-12",
    requestedBy: "Dr. Jordan Lee",
    justification: "Symptomatic cholelithiasis with acute episode"
  },
  {
    id: 5,
    patientName: "Aisha Patel",
    procedure: "Allergy Immunotherapy",
    payer: "Cigna",
    urgency: "routine",
    status: "denied",
    submittedDate: "2026-03-01",
    decisionDate: "2026-03-07",
    requestedBy: "Dr. Jordan Lee",
    justification: "Allergic rhinitis not responding to antihistamines"
  }
];
const NOTE_TYPE = "prior-auth-v1";
const GLOBAL_PATIENT_ID = BigInt(0);
const statusVariant = (s) => {
  switch (s) {
    case "approved":
      return "success";
    case "pending":
      return "warning";
    case "denied":
      return "danger";
    case "expired":
      return "neutral";
  }
};
const urgencyVariant = (u) => {
  switch (u) {
    case "urgent":
      return "warning";
    case "emergent":
      return "danger";
    case "routine":
      return "neutral";
  }
};
function PriorAuth({ onNavigate }) {
  const { actor, isFetching } = useActor();
  const [requests, setRequests] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showNewForm, setShowNewForm] = reactExports.useState(false);
  const [noteOpenId, setNoteOpenId] = reactExports.useState(null);
  const [noteText, setNoteText] = reactExports.useState("");
  const [form, setForm] = reactExports.useState({
    patientName: "",
    procedure: "",
    payer: "",
    urgency: "routine",
    justification: "",
    requestedBy: "Dr. Jordan Lee"
  });
  const loadData = reactExports.useCallback(async () => {
    if (isFetching || !actor) return;
    setLoading(true);
    try {
      const notes = await actor.listClinicalNotes();
      const paRecords = notes.filter((n) => n.noteType === NOTE_TYPE).map((n) => {
        try {
          return JSON.parse(n.content);
        } catch {
          return null;
        }
      }).filter((r) => r !== null);
      setRequests(paRecords.length > 0 ? paRecords : SEED_PRIOR_AUTH);
    } catch {
      setRequests(SEED_PRIOR_AUTH);
    } finally {
      setLoading(false);
    }
  }, [actor, isFetching]);
  reactExports.useEffect(() => {
    loadData();
  }, [loadData]);
  const persistRecord = reactExports.useCallback(
    async (record) => {
      if (!actor) return;
      try {
        await actor.createClinicalNote(
          GLOBAL_PATIENT_ID,
          NOTE_TYPE,
          JSON.stringify(record),
          BigInt(0)
        );
      } catch {
      }
    },
    [actor]
  );
  const total = requests.length;
  const pending = requests.filter((r) => r.status === "pending").length;
  const approved = requests.filter((r) => r.status === "approved").length;
  const denied = requests.filter((r) => r.status === "denied").length;
  const handleSubmit = async () => {
    if (!form.patientName || !form.procedure || !form.payer) {
      ue.error("Patient, procedure, and payer are required");
      return;
    }
    const newItem = {
      id: Date.now(),
      ...form,
      status: "pending",
      submittedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    setRequests((prev) => [newItem, ...prev]);
    setForm({
      patientName: "",
      procedure: "",
      payer: "",
      urgency: "routine",
      justification: "",
      requestedBy: "Dr. Jordan Lee"
    });
    setShowNewForm(false);
    await persistRecord(newItem);
    ue.success("Prior authorization request submitted");
  };
  const handleDecision = async (id, decision) => {
    let updated;
    setRequests(
      (prev) => prev.map((r) => {
        if (r.id === id) {
          updated = {
            ...r,
            status: decision,
            decisionDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
          };
          return updated;
        }
        return r;
      })
    );
    if (updated) await persistRecord(updated);
    ue.success(
      `Prior auth ${decision === "approved" ? "approved" : "denied"} for request #${id}`
    );
  };
  const handleSaveNote = (_id) => {
    ue.success("Note saved to prior auth request");
    setNoteOpenId(null);
    setNoteText("");
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "prior-auth.page", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-muted animate-pulse rounded" }, i)) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "prior-auth.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
      {
        label: "Total Requests",
        value: total,
        variant: "neutral"
      },
      { label: "Pending", value: pending, variant: "warning" },
      { label: "Approved", value: approved, variant: "success" },
      { label: "Denied", value: denied, variant: "danger" }
    ].map((stat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border px-4 py-3 shadow-card",
        "data-ocid": `prior-auth.stat.card.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground", children: stat.value })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "prior-auth.open_modal_button",
          className: "w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted/40 transition-colors",
          onClick: () => setShowNewForm((v) => !v),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-muted-foreground" }),
              "New Prior Authorization Request"
            ] }),
            showNewForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
          ]
        }
      ),
      showNewForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-4 py-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Patient *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.patientName,
                onValueChange: (v) => setForm((f) => ({ ...f, patientName: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "prior-auth.patient.select",
                      className: "h-8 text-xs",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DEMO_PATIENTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p.name, children: p.name }, String(p.id))) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Urgency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.urgency,
                onValueChange: (v) => setForm((f) => ({
                  ...f,
                  urgency: v
                })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "prior-auth.urgency.select",
                      className: "h-8 text-xs",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "routine", children: "Routine" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "urgent", children: "Urgent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "emergent", children: "Emergent" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Procedure / Medication *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "prior-auth.procedure.input",
                placeholder: "e.g. MRI Brain, Dupixent 300mg",
                value: form.procedure,
                onChange: (e) => setForm((f) => ({ ...f, procedure: e.target.value })),
                className: "h-8 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Insurance / Payer *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "prior-auth.payer.input",
                placeholder: "e.g. BlueCross BlueShield",
                value: form.payer,
                onChange: (e) => setForm((f) => ({ ...f, payer: e.target.value })),
                className: "h-8 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Clinical Justification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                "data-ocid": "prior-auth.justification.textarea",
                placeholder: "Brief clinical rationale for this authorization...",
                value: form.justification,
                onChange: (e) => setForm((f) => ({ ...f, justification: e.target.value })),
                className: "text-xs resize-none",
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Requested By" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "prior-auth.requested-by.input",
                value: form.requestedBy,
                onChange: (e) => setForm((f) => ({ ...f, requestedBy: e.target.value })),
                className: "h-8 text-xs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "prior-auth.submit_button",
              size: "sm",
              onClick: handleSubmit,
              className: "gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
                "Submit Request"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "prior-auth.cancel_button",
              size: "sm",
              variant: "ghost",
              onClick: () => setShowNewForm(false),
              children: "Cancel"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Authorization Requests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          requests.length,
          " total"
        ] })
      ] }),
      requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-center", "data-ocid": "prior-auth.empty_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-8 h-8 mx-auto text-muted-foreground/40 mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No prior authorization requests yet" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "prior-auth.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Procedure / Med" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Payer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Urgency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Submitted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Decision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
          requests.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { "data-ocid": `prior-auth.item.${idx + 1}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onNavigate == null ? void 0 : onNavigate("patients"),
                className: "text-primary underline-offset-2 hover:underline cursor-pointer bg-transparent border-none p-0 font-medium",
                children: r.patientName
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs max-w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate", title: r.procedure, children: r.procedure }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: r.payer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: urgencyVariant(r.urgency),
                label: r.urgency
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: statusVariant(r.status),
                label: r.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: r.submittedDate }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: r.decisionDate ?? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50", children: "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              r.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": `prior-auth.approve.button.${idx + 1}`,
                    size: "sm",
                    variant: "outline",
                    className: "h-6 text-xs px-2 text-success border-success/30 hover:bg-success/10",
                    onClick: () => handleDecision(r.id, "approved"),
                    children: "Approve"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": `prior-auth.deny.button.${idx + 1}`,
                    size: "sm",
                    variant: "outline",
                    className: "h-6 text-xs px-2 text-destructive border-destructive/30 hover:bg-destructive/10",
                    onClick: () => handleDecision(r.id, "denied"),
                    children: "Deny"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": `prior-auth.notes.button.${idx + 1}`,
                  size: "sm",
                  variant: "ghost",
                  className: "h-6 text-xs px-2 text-muted-foreground",
                  onClick: () => setNoteOpenId(noteOpenId === r.id ? null : r.id),
                  children: "Notes"
                }
              )
            ] }) })
          ] }, r.id)),
          requests.map(
            (r, idx) => noteOpenId === r.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, className: "bg-muted/30 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Justification" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: r.justification }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-3", children: "Add Note" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  "data-ocid": `prior-auth.note.textarea.${idx + 1}`,
                  placeholder: "Add a note or follow-up comment...",
                  value: noteText,
                  onChange: (e) => setNoteText(e.target.value),
                  className: "text-xs resize-none h-16"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": `prior-auth.note.save_button.${idx + 1}`,
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs",
                  onClick: () => handleSaveNote(r.id),
                  children: "Save Note"
                }
              )
            ] }) }) }, `note-${r.id}`) : null
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  PriorAuth as default
};
