import { u as useDemoMode, f as useActor, r as reactExports, i as ue, j as jsxRuntimeExports, aJ as ArrowUpRight } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import { S as Send } from "./send-DfSjPJ-o.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
import "./chevron-up-BvGEbEf0.js";
const priorityVariant = (p) => {
  switch (p) {
    case "urgent":
      return "warning";
    case "emergent":
      return "danger";
    default:
      return "neutral";
  }
};
const statusVariant = (s) => {
  switch (s) {
    case "pending":
      return "warning";
    case "sent":
      return "info";
    case "completed":
      return "success";
    default:
      return "neutral";
  }
};
function formatDate(ts) {
  const ms = Number(ts) / 1e6;
  if (Number.isNaN(ms) || ms < 1e6) return "—";
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function Referrals() {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor, isFetching } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [referrals, setReferrals] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [updatingId, setUpdatingId] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    patientName: "",
    referredTo: "",
    reason: "",
    priority: "routine",
    notes: ""
  });
  const [reloadTick, setReloadTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!actor) return;
    if (!isDemoMode && isFetching) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await actor.listReferrals();
        if (!cancelled) setReferrals(data);
      } catch {
        if (!cancelled) ue.error("Failed to load referrals");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [actor, isFetching, reloadTick, isDemoMode]);
  const handleSubmit = async () => {
    if (!form.patientName || !form.referredTo || !form.reason) {
      ue.error("Patient name, referred to, and reason are required");
      return;
    }
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.createReferral(
        BigInt(0),
        form.patientName,
        form.referredTo,
        form.reason,
        form.priority,
        form.notes
      );
      ue.success("Referral created");
      setShowForm(false);
      setForm({
        patientName: "",
        referredTo: "",
        reason: "",
        priority: "routine",
        notes: ""
      });
      setReloadTick((t) => t + 1);
    } catch {
      ue.error("Failed to create referral");
    } finally {
      setSubmitting(false);
    }
  };
  const handleStatusChange = async (id, newStatus) => {
    if (!actor) return;
    setUpdatingId(id);
    try {
      await actor.updateReferralStatus(id, newStatus);
      setReferrals(
        (prev) => prev.map((r) => r.id === id ? { ...r, status: newStatus } : r)
      );
      ue.success(`Referral ${newStatus}`);
    } catch {
      ue.error("Failed to update referral");
    } finally {
      setUpdatingId(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "referrals.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "referrals.primary_button",
        onClick: () => setShowForm((v) => !v),
        className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
          "New Referral"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card rounded-sm",
        "data-ocid": "referrals.add.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "New Referral" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-44", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Patient Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "referrals.add.patient_name.input",
                    value: form.patientName,
                    onChange: (e) => setForm((p) => ({ ...p, patientName: e.target.value })),
                    className: "mt-1 h-7 text-xs",
                    placeholder: "e.g. Alice Johnson"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-36", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Referred To" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "referrals.add.referred_to.input",
                    value: form.referredTo,
                    onChange: (e) => setForm((p) => ({ ...p, referredTo: e.target.value })),
                    className: "mt-1 h-7 text-xs",
                    placeholder: "e.g. Cardiology"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-36", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Reason" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "referrals.add.reason.input",
                    value: form.reason,
                    onChange: (e) => setForm((p) => ({ ...p, reason: e.target.value })),
                    className: "mt-1 h-7 text-xs",
                    placeholder: "Reason for referral"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Priority" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.priority,
                    onValueChange: (v) => setForm((p) => ({ ...p, priority: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          "data-ocid": "referrals.add.priority.select",
                          className: "mt-1 h-7 text-xs",
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
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  "data-ocid": "referrals.add.notes.textarea",
                  value: form.notes,
                  onChange: (e) => setForm((p) => ({ ...p, notes: e.target.value })),
                  className: "mt-1 text-xs min-h-[48px] resize-none",
                  placeholder: "Additional notes..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "referrals.add.submit_button",
                  onClick: handleSubmit,
                  disabled: submitting,
                  className: "h-7 px-3 text-xs font-semibold bg-primary text-primary-foreground rounded-sm flex items-center gap-1.5 disabled:opacity-60",
                  children: [
                    submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3 h-3" }),
                    "Create Referral"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "referrals.add.cancel_button",
                  onClick: () => setShowForm(false),
                  className: "h-7 px-3 text-xs font-semibold border border-border text-muted-foreground hover:text-foreground rounded-sm",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Referrals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "(",
          referrals.length,
          ")"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-4 space-y-2",
          "data-ocid": "referrals.table.loading_state",
          children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }, i))
        }
      ) : referrals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "px-4 py-10 text-center",
          "data-ocid": "referrals.table.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-8 h-8 mx-auto mb-2 text-muted-foreground/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "No referrals yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70 mt-1", children: "Create a referral to track patient specialist consultations" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "referrals.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/40 hover:bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Referred To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: referrals.map((ref, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `referrals.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: ref.patientName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: ref.referredTo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5 max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2", children: ref.reason }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: priorityVariant(ref.priority),
                  label: ref.priority
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: statusVariant(ref.status),
                  label: ref.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground px-4 py-2.5", children: formatDate(ref.createdAt) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                ref.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `referrals.send_button.${i + 1}`,
                      onClick: () => handleStatusChange(ref.id, "sent"),
                      disabled: updatingId === ref.id,
                      className: "h-6 px-2 text-xs font-semibold bg-primary text-primary-foreground rounded-sm disabled:opacity-60 flex items-center gap-1",
                      children: [
                        updatingId === ref.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-2.5 h-2.5 animate-spin" }) : null,
                        "Mark Sent"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `referrals.cancel_button.${i + 1}`,
                      onClick: () => handleStatusChange(ref.id, "cancelled"),
                      disabled: updatingId === ref.id,
                      className: "h-6 px-2 text-xs font-semibold border border-border text-muted-foreground hover:text-destructive rounded-sm disabled:opacity-60",
                      children: "Cancel"
                    }
                  )
                ] }),
                ref.status === "sent" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `referrals.complete_button.${i + 1}`,
                      onClick: () => handleStatusChange(ref.id, "completed"),
                      disabled: updatingId === ref.id,
                      className: "h-6 px-2 text-xs font-semibold bg-primary text-primary-foreground rounded-sm disabled:opacity-60 flex items-center gap-1 hover:bg-primary/90",
                      children: [
                        updatingId === ref.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-2.5 h-2.5 animate-spin" }) : null,
                        "Mark Completed"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `referrals.cancel_button.${i + 1}`,
                      onClick: () => handleStatusChange(ref.id, "cancelled"),
                      disabled: updatingId === ref.id,
                      className: "h-6 px-2 text-xs font-semibold border border-border text-muted-foreground hover:text-destructive rounded-sm disabled:opacity-60",
                      children: "Cancel"
                    }
                  )
                ] })
              ] }) })
            ]
          },
          String(ref.id)
        )) })
      ] })
    ] })
  ] });
}
export {
  Referrals as default
};
