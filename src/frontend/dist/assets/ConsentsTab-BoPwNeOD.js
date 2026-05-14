import { f as useActor, r as reactExports, j as jsxRuntimeExports, B as Button, C as ChevronDown, i as ue } from "./index-4utdZC3E.js";
import { C as Checkbox } from "./checkbox-B8IMGtpd.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
const CONSENT_TYPES = [
  "HIPAA Notice of Privacy Practices",
  "General Treatment Consent",
  "Surgical Consent",
  "Research Participation Consent",
  "Financial Responsibility Agreement",
  "Blood Transfusion Consent",
  "Advance Directive / DNR",
  "Telemedicine Consent",
  "Photography / Recording Consent"
];
function ConsentsTab({ patientId, patientName }) {
  const { actor, isFetching } = useActor();
  const [consents, setConsents] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    type: "",
    dateSigned: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    signedBy: "Patient",
    notes: "",
    witnessed: false
  });
  const loadConsents = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const notes = await actor.listClinicalNotes();
      const filtered = notes.filter(
        (n) => n.noteType === "consent" && n.patientId === patientId
      );
      const records = filtered.map((n, idx) => {
        try {
          const parsed = JSON.parse(n.content);
          return { ...parsed, id: idx + 1 };
        } catch {
          return {
            id: idx + 1,
            type: n.content,
            dateSigned: "",
            signedBy: "",
            provider: "",
            status: "Pending",
            notes: "",
            witnessed: false
          };
        }
      });
      setConsents(records);
    } catch (err) {
      console.error("Failed to load consents", err);
    } finally {
      setLoading(false);
    }
  }, [actor, patientId]);
  reactExports.useEffect(() => {
    if (!isFetching && actor) {
      loadConsents();
    }
  }, [actor, isFetching, loadConsents]);
  const handleSave = async () => {
    if (!form.type) {
      ue.error("Consent type required");
      return;
    }
    if (!actor) return;
    const consentData = {
      type: form.type,
      dateSigned: form.dateSigned,
      signedBy: form.signedBy,
      provider: "Dr. Sarah Johnson",
      status: form.dateSigned ? "Active" : "Pending",
      notes: form.notes,
      witnessed: form.witnessed
    };
    try {
      await actor.createClinicalNote(
        patientId,
        "consent",
        JSON.stringify(consentData),
        0n
      );
      await loadConsents();
      setShowForm(false);
      setForm({
        type: "",
        dateSigned: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        signedBy: "Patient",
        notes: "",
        witnessed: false
      });
      ue.success(`Consent recorded for ${patientName}`);
    } catch (err) {
      console.error("Failed to save consent", err);
      ue.error("Failed to save consent");
    }
  };
  const statusVariant = (s) => s === "Active" ? "success" : s === "Expired" ? "danger" : "warning";
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "patients.consents.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        consents.length,
        " consent record",
        consents.length !== 1 ? "s" : "",
        " on file"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          "data-ocid": "patients.consents.primary_button",
          className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
          onClick: () => setShowForm((v) => !v),
          children: [
            showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3 mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 mr-1" }),
            "Record New Consent"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-muted/20 p-4 space-y-3",
        "data-ocid": "patients.consents.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "New Consent Form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Consent Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.type,
                  onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "patients.consents.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CONSENT_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Date Signed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "patients.consents.input",
                  type: "date",
                  value: form.dateSigned,
                  onChange: (e) => setForm((p) => ({ ...p, dateSigned: e.target.value })),
                  className: "mt-1 h-8 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Signed By" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "patients.consents.signedby.input",
                  value: form.signedBy,
                  onChange: (e) => setForm((p) => ({ ...p, signedBy: e.target.value })),
                  className: "mt-1 h-8 text-sm",
                  placeholder: "Patient / Legal Guardian"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  id: "witnessed",
                  "data-ocid": "patients.consents.checkbox",
                  checked: form.witnessed,
                  onCheckedChange: (v) => setForm((p) => ({ ...p, witnessed: !!v }))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "witnessed", className: "text-sm cursor-pointer", children: "Witnessed" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  "data-ocid": "patients.consents.textarea",
                  value: form.notes,
                  onChange: (e) => setForm((p) => ({ ...p, notes: e.target.value })),
                  className: "mt-1 text-sm min-h-[64px]",
                  placeholder: "Optional notes..."
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "patients.consents.submit_button",
                onClick: handleSave,
                className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
                children: "Save Consent"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "patients.consents.cancel_button",
                onClick: () => setShowForm(false),
                className: "h-7 text-xs",
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "patients.consents.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        "Consent Type",
        "Date Signed",
        "Signed By",
        "Provider",
        "Status",
        ""
      ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableHead,
        {
          className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
          children: h
        },
        h
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
        consents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 6,
            className: "text-center text-xs text-muted-foreground py-8",
            "data-ocid": "patients.consents.empty_state",
            children: "No consent records on file"
          }
        ) }),
        consents.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `patients.consents.row.${i + 1}`,
              className: "hover:bg-muted/30 even:bg-muted/20 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: c.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: c.dateSigned || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground px-4 py-2.5", children: c.signedBy || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground px-4 py-2.5", children: c.provider }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: statusVariant(c.status),
                    label: c.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `patients.consents.edit_button.${i + 1}`,
                    onClick: () => setExpandedId(expandedId === c.id ? null : c.id),
                    className: "text-xs text-primary hover:underline flex items-center gap-1",
                    children: [
                      "View",
                      " ",
                      expandedId === c.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
                    ]
                  }
                ) })
              ]
            },
            c.id
          ),
          expandedId === c.id && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "px-4 py-3 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
                "Date:",
                " "
              ] }),
              c.dateSigned || "Not yet signed"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
                "Provider:",
                " "
              ] }),
              c.provider
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
                "Witnessed:",
                " "
              ] }),
              c.witnessed ? "Yes" : "No"
            ] }),
            c.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
                "Notes:",
                " "
              ] }),
              c.notes
            ] })
          ] }) }) }, `expand-${c.id}`)
        ] }))
      ] })
    ] }) })
  ] });
}
export {
  ConsentsTab as C
};
