import { aO as usePortalContext, f as useActor, r as reactExports, ag as DEMO_PRESCRIPTIONS, j as jsxRuntimeExports, P as Pill, B as Button, i as ue } from "./index-4utdZC3E.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { R as RefreshCw } from "./refresh-cw-DuZvDijR.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
import "./chevron-up-BvGEbEf0.js";
function statusVariant(s) {
  if (s === "dispensed" || s === "active") return "success";
  if (s === "expired" || s === "rejected") return "danger";
  if (s === "discontinued") return "neutral";
  if (s === "pending" || s === "verified") return "info";
  return "neutral";
}
function MyPrescriptions() {
  const { id: PORTAL_PATIENT_ID } = usePortalContext();
  const { actor } = useActor();
  const prescriptions = reactExports.useMemo(
    () => DEMO_PRESCRIPTIONS.filter((rx) => rx.patientId === PORTAL_PATIENT_ID),
    [PORTAL_PATIENT_ID]
  );
  const activeMeds = reactExports.useMemo(
    () => prescriptions.filter(
      (rx) => rx.status === "dispensed" || rx.status === "verified"
    ),
    [prescriptions]
  );
  const [selectedMed, setSelectedMed] = reactExports.useState("");
  const [refillNote, setRefillNote] = reactExports.useState("");
  const [pendingRefills, setPendingRefills] = reactExports.useState([]);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleRefillSubmit = async () => {
    if (!selectedMed) {
      ue.error("Please select a medication.");
      return;
    }
    const med = prescriptions.find((rx) => String(rx.id) === selectedMed);
    if (!med) return;
    setSubmitting(true);
    try {
      if (actor) {
        await actor.createPrescription(
          1n,
          "Alex Johnson",
          med.medication,
          med.dose,
          "Patient Refill Request",
          refillNote || "Patient-requested refill"
        );
      }
      setPendingRefills((prev) => [
        ...prev,
        {
          id: Date.now(),
          medication: med.medication,
          note: refillNote,
          submittedAt: (/* @__PURE__ */ new Date()).toLocaleString()
        }
      ]);
      setSelectedMed("");
      setRefillNote("");
      ue.success("Refill request submitted");
    } catch {
      ue.error("Failed to submit refill request");
    } finally {
      setSubmitting(false);
    }
  };
  function formatDate(ts) {
    try {
      return new Date(Number(ts) / 1e6).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    } catch {
      return "—";
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "prescriptions.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-4 h-4 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold text-foreground", children: "My Prescriptions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "View your active medications and request refills" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border", "data-ocid": "prescriptions.list", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "My Medications" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: prescriptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center py-10 text-muted-foreground text-sm",
          "data-ocid": "prescriptions.empty_state",
          children: "No prescriptions on file"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: prescriptions.map((rx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `prescriptions.item.${i + 1}`,
          className: "flex items-center gap-4 px-4 py-3 hover:bg-muted/20 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: rx.medication }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                rx.dose,
                " · Prescribed by ",
                rx.prescribedBy
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                "Prescribed: ",
                formatDate(rx.createdAt)
              ] }),
              rx.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70 mt-0.5 italic", children: rx.notes })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: statusVariant(rx.status),
                label: rx.status
              }
            )
          ]
        },
        String(rx.id)
      )) }) })
    ] }),
    pendingRefills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border",
        "data-ocid": "prescriptions.pending.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Pending Refill Requests" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: pendingRefills.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `prescriptions.pending.item.${i + 1}`,
              className: "flex items-center gap-4 px-4 py-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: r.medication }),
                  r.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: r.note }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    "Submitted ",
                    r.submittedAt
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "info", label: "pending" })
              ]
            },
            r.id
          )) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border",
        "data-ocid": "prescriptions.refill.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
            "Request a Refill"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "refill-med", className: "text-sm font-medium", children: "Medication" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedMed, onValueChange: setSelectedMed, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "refill-med",
                    "data-ocid": "prescriptions.refill.select",
                    className: "h-9",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a medication\\u2026" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: activeMeds.map((rx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: String(rx.id), children: [
                  rx.medication,
                  " — ",
                  rx.dose
                ] }, String(rx.id))) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "refill-note", className: "text-sm font-medium", children: [
                "Note",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "refill-note",
                  "data-ocid": "prescriptions.refill.textarea",
                  value: refillNote,
                  onChange: (e) => setRefillNote(e.target.value),
                  placeholder: "Add any notes for your provider\\u2026",
                  rows: 3,
                  className: "resize-none text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "prescriptions.refill.submit_button",
                onClick: handleRefillSubmit,
                disabled: submitting || !selectedMed,
                className: "w-full sm:w-auto",
                children: submitting ? "Submitting…" : "Submit Refill Request"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  MyPrescriptions as default
};
