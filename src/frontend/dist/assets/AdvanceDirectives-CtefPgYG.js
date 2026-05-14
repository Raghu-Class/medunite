import { u as useDemoMode, r as reactExports, n as DEMO_PATIENTS, a1 as DEMO_ADVANCE_DIRECTIVES, j as jsxRuntimeExports, T as TriangleAlert, B as Button, J as User, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Shield, a as Separator } from "./separator-xYB8AGqu.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { H as Heart } from "./heart-CgPgDgav.js";
import { S as Save } from "./save-BcJO_mj1.js";
import { F as FileText } from "./file-text-BiTX0NSn.js";
import { P as Phone } from "./phone-C1YjZqVr.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
import "./chevron-up-BvGEbEf0.js";
function codeStatusVariant(cs) {
  if (cs === "DNR") return "danger";
  if (cs === "DNI") return "warning";
  if (cs === "Comfort Care") return "neutral";
  return "success";
}
function docStatusVariant(ds) {
  if (ds === "On File") return "success";
  if (ds === "Pending") return "warning";
  return "neutral";
}
function AdvanceDirectives({
  activePatientId,
  activePatientName
}) {
  const { isDemoMode } = useDemoMode();
  const [record, setRecord] = reactExports.useState(null);
  const [editingNotes, setEditingNotes] = reactExports.useState(false);
  const [notesDraft, setNotesDraft] = reactExports.useState("");
  const [editingProxy, setEditingProxy] = reactExports.useState(false);
  const [proxyDraft, setProxyDraft] = reactExports.useState({
    name: "",
    relationship: "",
    phone: ""
  });
  const [editingCodeStatus, setEditingCodeStatus] = reactExports.useState(false);
  const [codeStatusDraft, setCodeStatusDraft] = reactExports.useState("Full Code");
  const [editingDocStatus, setEditingDocStatus] = reactExports.useState(false);
  const [docStatusDraft, setDocStatusDraft] = reactExports.useState("Not on File");
  const mrn = reactExports.useMemo(() => {
    var _a;
    if (!activePatientId) return "";
    return ((_a = DEMO_PATIENTS.find((p) => p.id === activePatientId)) == null ? void 0 : _a.mrn) ?? "";
  }, [activePatientId]);
  reactExports.useEffect(() => {
    if (!activePatientId) {
      setRecord(null);
      return;
    }
    if (isDemoMode) {
      const found = DEMO_ADVANCE_DIRECTIVES.find(
        (d) => BigInt(d.patientId) === activePatientId
      );
      setRecord(
        found ?? {
          patientId: Number(activePatientId),
          codeStatus: "Full Code",
          documentStatus: "Not on File",
          healthcareProxy: { name: "", relationship: "", phone: "" },
          carePlanNotes: ""
        }
      );
      return;
    }
    const storageKey = `medunite_adv_dir_${Number(activePatientId)}`;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setRecord(JSON.parse(raw));
      } else {
        setRecord({
          patientId: Number(activePatientId),
          codeStatus: "Full Code",
          documentStatus: "Not on File",
          healthcareProxy: { name: "", relationship: "", phone: "" },
          carePlanNotes: ""
        });
      }
    } catch {
      setRecord({
        patientId: Number(activePatientId),
        codeStatus: "Full Code",
        documentStatus: "Not on File",
        healthcareProxy: { name: "", relationship: "", phone: "" },
        carePlanNotes: ""
      });
    }
  }, [activePatientId, isDemoMode]);
  if (!activePatientId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "advance_directives.empty_state",
        className: "flex flex-col items-center justify-center py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-10 h-10 text-muted-foreground mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "No patient selected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Select a patient to view their advance directives and care plan." })
        ]
      }
    );
  }
  if (!record) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "advance_directives.error_state",
        className: "py-12 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-8 h-8 text-muted-foreground mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Failed to load advance directives." })
        ]
      }
    );
  }
  const persistRecord = (updated) => {
    if (!activePatientId || isDemoMode) return;
    const storageKey = `medunite_adv_dir_${Number(activePatientId)}`;
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch {
    }
  };
  const handleSaveNotes = () => {
    const updated = record ? { ...record, carePlanNotes: notesDraft } : null;
    if (updated) {
      setRecord(updated);
      persistRecord(updated);
    }
    setEditingNotes(false);
    ue.success("Care plan notes saved");
  };
  const handleSaveProxy = () => {
    const updated = record ? { ...record, healthcareProxy: proxyDraft } : null;
    if (updated) {
      setRecord(updated);
      persistRecord(updated);
    }
    setEditingProxy(false);
    ue.success("Healthcare proxy updated");
  };
  const handleSaveCodeStatus = () => {
    const updated = record ? { ...record, codeStatus: codeStatusDraft } : null;
    if (updated) {
      setRecord(updated);
      persistRecord(updated);
    }
    setEditingCodeStatus(false);
    ue.success("Code status updated");
  };
  const handleSaveDocStatus = () => {
    const updated = record ? { ...record, documentStatus: docStatusDraft } : null;
    if (updated) {
      setRecord(updated);
      persistRecord(updated);
    }
    setEditingDocStatus(false);
    ue.success("Document status updated");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "advance_directives.page", className: "space-y-0", children: [
    activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border-b px-6 py-2 text-sm flex items-center gap-2 -mx-6 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: activePatientName }),
      mrn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: mrn }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40 text-xs", children: "›" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "Advance Directives" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "advance_directives.code_status.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5" }),
          "Code Status"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 pb-4", children: !editingCodeStatus ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatusBadge,
            {
              variant: codeStatusVariant(record.codeStatus),
              label: record.codeStatus
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "data-ocid": "advance_directives.code_status.edit_button",
              className: "text-xs text-muted-foreground h-7",
              onClick: () => {
                setCodeStatusDraft(record.codeStatus);
                setEditingCodeStatus(true);
              },
              children: "Change"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: codeStatusDraft,
              onValueChange: (v) => setCodeStatusDraft(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "w-44 h-8 text-xs",
                    "data-ocid": "advance_directives.code_status.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Full Code", children: "Full Code" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "DNR", children: "DNR — Do Not Resuscitate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "DNI", children: "DNI — Do Not Intubate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Comfort Care", children: "Comfort Care" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "h-8 text-xs",
              "data-ocid": "advance_directives.code_status.save_button",
              onClick: handleSaveCodeStatus,
              disabled: false,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3 mr-1" }),
                "Save"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 text-xs",
              "data-ocid": "advance_directives.code_status.cancel_button",
              onClick: () => setEditingCodeStatus(false),
              children: "Cancel"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "advance_directives.document.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
          "Advance Directive Document"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 pb-4", children: !editingDocStatus ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatusBadge,
            {
              variant: docStatusVariant(record.documentStatus),
              label: record.documentStatus
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "data-ocid": "advance_directives.document.edit_button",
              className: "text-xs text-muted-foreground h-7",
              onClick: () => {
                setDocStatusDraft(record.documentStatus);
                setEditingDocStatus(true);
              },
              children: "Update"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: docStatusDraft,
              onValueChange: (v) => setDocStatusDraft(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "w-40 h-8 text-xs",
                    "data-ocid": "advance_directives.document.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "On File", children: "On File" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Not on File", children: "Not on File" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Pending", children: "Pending" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "h-8 text-xs",
              "data-ocid": "advance_directives.document.save_button",
              onClick: handleSaveDocStatus,
              disabled: false,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3 mr-1" }),
                "Save"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 text-xs",
              "data-ocid": "advance_directives.document.cancel_button",
              onClick: () => setEditingDocStatus(false),
              children: "Cancel"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "advance_directives.proxy.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
          "Healthcare Proxy"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 pb-4", children: !editingProxy ? record.healthcareProxy.name ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: record.healthcareProxy.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: record.healthcareProxy.relationship }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
            record.healthcareProxy.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "data-ocid": "advance_directives.proxy.edit_button",
              className: "text-xs text-muted-foreground h-7 px-0",
              onClick: () => {
                setProxyDraft(record.healthcareProxy);
                setEditingProxy(true);
              },
              children: "Edit"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "No healthcare proxy on file." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "data-ocid": "advance_directives.proxy.edit_button",
              className: "text-xs text-muted-foreground h-7",
              onClick: () => {
                setProxyDraft({ name: "", relationship: "", phone: "" });
                setEditingProxy(true);
              },
              children: "Add"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  "data-ocid": "advance_directives.proxy.name.input",
                  value: proxyDraft.name,
                  onChange: (e) => setProxyDraft((d) => ({ ...d, name: e.target.value })),
                  className: "w-full text-xs h-8 rounded-md border border-input bg-background px-2.5 focus:outline-none focus:ring-1 focus:ring-ring",
                  placeholder: "Full name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Relationship" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  "data-ocid": "advance_directives.proxy.relationship.input",
                  value: proxyDraft.relationship,
                  onChange: (e) => setProxyDraft((d) => ({
                    ...d,
                    relationship: e.target.value
                  })),
                  className: "w-full text-xs h-8 rounded-md border border-input bg-background px-2.5 focus:outline-none focus:ring-1 focus:ring-ring",
                  placeholder: "e.g. Spouse"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  "data-ocid": "advance_directives.proxy.phone.input",
                  value: proxyDraft.phone,
                  onChange: (e) => setProxyDraft((d) => ({ ...d, phone: e.target.value })),
                  className: "w-full text-xs h-8 rounded-md border border-input bg-background px-2.5 focus:outline-none focus:ring-1 focus:ring-ring",
                  placeholder: "(555) 000-0000"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "h-8 text-xs",
                "data-ocid": "advance_directives.proxy.save_button",
                onClick: handleSaveProxy,
                disabled: false,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3 mr-1" }),
                  "Save"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 text-xs",
                "data-ocid": "advance_directives.proxy.cancel_button",
                onClick: () => setEditingProxy(false),
                children: "Cancel"
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "advance_directives.care_plan.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
          "Care Plan Notes"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 pb-4", children: !editingNotes ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          record.carePlanNotes ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground whitespace-pre-wrap", children: record.carePlanNotes }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No care plan notes documented." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "data-ocid": "advance_directives.care_plan.edit_button",
              className: "text-xs text-muted-foreground h-7 px-0",
              onClick: () => {
                setNotesDraft(record.carePlanNotes);
                setEditingNotes(true);
              },
              children: record.carePlanNotes ? "Edit notes" : "Add notes"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              "data-ocid": "advance_directives.care_plan.textarea",
              value: notesDraft,
              onChange: (e) => setNotesDraft(e.target.value),
              rows: 5,
              className: "text-sm resize-none",
              placeholder: "Document the patient's care goals, preferences, and end-of-life wishes\\u2026"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "h-8 text-xs",
                "data-ocid": "advance_directives.care_plan.save_button",
                onClick: handleSaveNotes,
                disabled: false,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3 mr-1" }),
                  "Save Notes"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 text-xs",
                "data-ocid": "advance_directives.care_plan.cancel_button",
                onClick: () => setEditingNotes(false),
                children: "Cancel"
              }
            )
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  AdvanceDirectives as default
};
