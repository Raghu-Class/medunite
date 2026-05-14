import { f as useActor, aO as usePortalContext, r as reactExports, j as jsxRuntimeExports, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
const PROVIDER_NAMES = {
  "10": "Dr. Sarah Johnson",
  "11": "Dr. Michael Chen",
  "12": "Dr. Emily Rodriguez",
  "13": "Dr. James Park"
};
const providers = [
  "Dr. Sarah Chen — Internal Medicine",
  "Dr. Marcus Williams — Cardiology",
  "Dr. Lisa Park — Endocrinology",
  "Dr. James Okafor — Dermatology"
];
const statusVariant = (s) => {
  switch (s) {
    case "confirmed":
      return "success";
    case "pending":
      return "warning";
    case "upcoming":
    case "scheduled":
      return "info";
    case "completed":
      return "neutral";
    case "cancelled":
      return "danger";
    default:
      return "neutral";
  }
};
const isPastStatus = (s) => s === "completed" || s === "cancelled";
function MyAppointments({
  onNavigate
}) {
  const { actor, isFetching } = useActor();
  const portalPatient = usePortalContext();
  const [upcoming, setUpcoming] = reactExports.useState([]);
  const [past, setPast] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [showNewForm, setShowNewForm] = reactExports.useState(false);
  const [cancelConfirmId, setCancelConfirmId] = reactExports.useState(null);
  const [cancelledIds, setCancelledIds] = reactExports.useState([]);
  const [newAppt, setNewAppt] = reactExports.useState({
    date: "",
    provider: "",
    reason: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [checkedInIds, setCheckedInIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [showDemographicsId, setShowDemographicsId] = reactExports.useState(
    null
  );
  const [_demographicsConfirmed, setDemographicsConfirmed] = reactExports.useState(/* @__PURE__ */ new Set());
  const [rescheduleOpenId, setRescheduleOpenId] = reactExports.useState(null);
  const [rescheduleForm, setRescheduleForm] = reactExports.useState({
    date: "",
    provider: "",
    reason: ""
  });
  const [rescheduleSuccessId, setRescheduleSuccessId] = reactExports.useState(
    null
  );
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? "";
  const isToday = (dateStr) => dateStr === todayStr;
  reactExports.useEffect(() => {
    if (isFetching || !actor) return;
    setIsLoading(true);
    actor.listAppointments().then((appts) => {
      const mapped = appts.map((a) => ({
        id: a.id,
        date: a.date,
        provider: PROVIDER_NAMES[String(a.providerId)] ?? `Provider #${a.providerId}`,
        reason: "—",
        status: a.status
      }));
      setUpcoming(mapped.filter((a) => !isPastStatus(a.status)));
      setPast(mapped.filter((a) => isPastStatus(a.status)));
    }).catch(() => {
    }).finally(() => setIsLoading(false));
  }, [actor, isFetching]);
  const handleSubmit = () => {
    if (!newAppt.date || !newAppt.provider || !newAppt.reason) return;
    if (actor) {
      const providerIdx = providers.indexOf(newAppt.provider);
      const providerId = BigInt(10 + (providerIdx >= 0 ? providerIdx : 0));
      actor.createAppointment(portalPatient.id, providerId, newAppt.date).catch(() => {
      });
    }
    const optimistic = {
      id: BigInt(Date.now()),
      date: newAppt.date,
      provider: newAppt.provider,
      reason: newAppt.reason,
      status: "pending"
    };
    setUpcoming((prev) => [optimistic, ...prev]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3e3);
    setShowNewForm(false);
    setNewAppt({ date: "", provider: "", reason: "" });
  };
  const handleCancel = (id) => {
    if (actor) {
      actor.updateAppointmentStatus(id, "cancelled").catch(() => {
      });
    }
    setCancelledIds((prev) => [...prev, id]);
    setCancelConfirmId(null);
  };
  const handleRescheduleOpen = (appt) => {
    setRescheduleOpenId(appt.id);
    setRescheduleSuccessId(null);
    setRescheduleForm({ date: "", provider: appt.provider, reason: "" });
  };
  const handleRescheduleSubmit = (id) => {
    if (!rescheduleForm.date) {
      ue.error("Please select a new date.");
      return;
    }
    setRescheduleSuccessId(id);
    ue.success("Reschedule request submitted!");
    setRescheduleOpenId(null);
    setTimeout(() => setRescheduleSuccessId(null), 3e3);
  };
  const renderSkeletonRows = (count) => ["a", "b", "c"].slice(0, count).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3" })
  ] }, k));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "appointments.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Upcoming Appointments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3", children: [
          onNavigate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "appointments.schedule.primary_button",
                onClick: () => onNavigate("portal-schedule"),
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-semibold text-white transition-all",
                style: {
                  background: "var(--accent)",
                  border: "1px solid var(--accent)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "w-3.5 h-3.5",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                      ]
                    }
                  ),
                  "Book Appointment"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Confirmed slot, immediate booking" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "appointments.open_modal_button",
                onClick: () => setShowNewForm((v) => !v),
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-medium transition-all",
                style: {
                  color: "var(--primary)",
                  border: "1px solid var(--border)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "w-3.5 h-3.5",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
                      ]
                    }
                  ),
                  "Request Appointment"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Staff reviews and confirms" })
          ] })
        ] })
      ] }),
      submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mb-3 flex items-center gap-2 py-3 px-4 rounded-sm text-sm font-medium",
          style: {
            background: "var(--success)",
            color: "var(--success-foreground)"
          },
          "data-ocid": "appointments.request.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "w-4 h-4",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
              }
            ),
            "Your request has been submitted. Our scheduling team will confirm shortly."
          ]
        }
      ),
      showNewForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mb-4 p-4 bg-card border border-border rounded-sm",
          "data-ocid": "appointments.request.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-foreground mb-3", children: "Request New Appointment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "req-date",
                    className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                    children: "Preferred Date"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "req-date",
                    type: "date",
                    "data-ocid": "appointments.request.date.input",
                    value: newAppt.date,
                    onChange: (e) => setNewAppt((p) => ({ ...p, date: e.target.value })),
                    className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "req-provider",
                    className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                    children: "Preferred Provider"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "req-provider",
                    "data-ocid": "appointments.request.provider.select",
                    value: newAppt.provider,
                    onChange: (e) => setNewAppt((p) => ({ ...p, provider: e.target.value })),
                    className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select provider..." }),
                      providers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "req-reason",
                    className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                    children: "Reason for Visit"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "req-reason",
                    "data-ocid": "appointments.request.reason.textarea",
                    value: newAppt.reason,
                    onChange: (e) => setNewAppt((p) => ({ ...p, reason: e.target.value })),
                    rows: 2,
                    placeholder: "Briefly describe your reason for visiting...",
                    className: "w-full px-2.5 py-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "appointments.request.submit_button",
                    onClick: handleSubmit,
                    className: "px-4 py-1.5 rounded-sm text-sm font-semibold text-white",
                    style: { background: "var(--accent)" },
                    children: "Submit Request"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "appointments.request.cancel_button",
                    onClick: () => setShowNewForm(false),
                    className: "px-4 py-1.5 rounded-sm text-sm font-medium text-muted-foreground border border-border hover:text-foreground transition-colors",
                    children: "Cancel"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-card border border-border rounded-sm overflow-hidden",
          "data-ocid": "appointments.upcoming.table",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border",
                style: { background: "var(--muted)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Provider" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Reason" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: isLoading ? renderSkeletonRows(3) : upcoming.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "td",
              {
                colSpan: 5,
                className: "px-4 py-8 text-center",
                "data-ocid": "appointments.upcoming.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "No upcoming appointments." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                    onNavigate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => onNavigate("portal-schedule"),
                        className: "px-3 py-1.5 rounded-sm text-sm font-semibold text-white",
                        style: { background: "var(--accent)" },
                        children: "Book Appointment"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowNewForm(true),
                        className: "px-3 py-1.5 rounded-sm text-sm font-medium text-muted-foreground border border-border hover:text-foreground transition-colors",
                        children: "Request Appointment"
                      }
                    )
                  ] })
                ]
              }
            ) }) : upcoming.map((appt, idx) => {
              const isCancelled = cancelledIds.includes(appt.id);
              const status = isCancelled ? "cancelled" : appt.status;
              const isRescheduleOpen = rescheduleOpenId === appt.id;
              const isRescheduleSuccess = rescheduleSuccessId === appt.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  "data-ocid": `appointments.item.${idx + 1}`,
                  className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: appt.date }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: appt.provider }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: appt.reason }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: statusVariant(status),
                        label: status
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                      isToday(appt.date) && !isCancelled && !isPastStatus(appt.status) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1.5 space-y-1.5", children: checkedInIds.has(appt.id) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-sm",
                          style: {
                            background: "var(--success)",
                            color: "var(--success-foreground)"
                          },
                          "data-ocid": `appointments.checkin.success_state.${idx + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "svg",
                              {
                                className: "w-3 h-3",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
                              }
                            ),
                            "Checked In"
                          ]
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: showDemographicsId === appt.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "p-2.5 bg-warning/10 border border-warning/30 rounded-sm text-xs",
                          "data-ocid": `appointments.demographics.panel.${idx + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: "Please confirm your information is up to date" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-2", children: "Address and insurance on file will be used for today's visit." }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  "data-ocid": `appointments.demographics.confirm_button.${idx + 1}`,
                                  onClick: () => {
                                    setDemographicsConfirmed(
                                      (prev) => /* @__PURE__ */ new Set([...prev, appt.id])
                                    );
                                    setShowDemographicsId(null);
                                    setCheckedInIds(
                                      (prev) => /* @__PURE__ */ new Set([...prev, appt.id])
                                    );
                                    ue.success(
                                      "Check-in complete! Please proceed to the front desk."
                                    );
                                  },
                                  className: "px-2.5 py-1 text-xs font-semibold rounded-sm text-white",
                                  style: {
                                    background: "var(--success)"
                                  },
                                  children: "Confirm & Check In"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  "data-ocid": `appointments.demographics.cancel_button.${idx + 1}`,
                                  onClick: () => setShowDemographicsId(null),
                                  className: "px-2.5 py-1 text-xs font-medium rounded-sm text-muted-foreground border border-border",
                                  children: "Cancel"
                                }
                              )
                            ] })
                          ]
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `appointments.checkin.button.${idx + 1}`,
                          onClick: () => setShowDemographicsId(appt.id),
                          className: "flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-sm text-white",
                          style: {
                            background: "var(--accent)"
                          },
                          children: "Check In"
                        }
                      ) }) }),
                      !isCancelled && !isPastStatus(appt.status) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                        !isRescheduleOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `appointments.reschedule_button.${idx + 1}`,
                            onClick: () => handleRescheduleOpen(appt),
                            className: "text-xs font-medium px-2 py-1 rounded-sm border border-border text-muted-foreground hover:text-foreground transition-colors",
                            children: "Reschedule"
                          }
                        ),
                        cancelConfirmId === appt.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Cancel?" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              "data-ocid": `appointments.cancel_button.${idx + 1}`,
                              onClick: () => handleCancel(appt.id),
                              className: "text-xs font-semibold px-2 py-0.5 rounded-sm",
                              style: {
                                color: "var(--destructive)",
                                border: "1px solid var(--destructive)"
                              },
                              children: "Yes"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              "data-ocid": `appointments.confirm_button.${idx + 1}`,
                              onClick: () => setCancelConfirmId(null),
                              className: "text-xs text-muted-foreground px-2 py-0.5 rounded-sm border border-border hover:text-foreground transition-colors",
                              children: "No"
                            }
                          )
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `appointments.delete_button.${idx + 1}`,
                            onClick: () => setCancelConfirmId(appt.id),
                            className: "text-xs text-muted-foreground px-2 py-1 rounded-sm border border-border hover:text-foreground transition-colors",
                            children: "Cancel"
                          }
                        )
                      ] }),
                      isRescheduleOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "mt-2 p-3 bg-muted/30 border border-border rounded-sm",
                          "data-ocid": `appointments.reschedule.panel.${idx + 1}`,
                          children: isRescheduleSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "flex items-center gap-2 text-sm font-medium py-1.5",
                              style: { color: "var(--success-foreground)" },
                              "data-ocid": "appointments.reschedule.success_state",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "svg",
                                  {
                                    className: "w-3.5 h-3.5",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    "aria-hidden": "true",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
                                  }
                                ),
                                "Your reschedule request has been submitted. We'll confirm the new time shortly."
                              ]
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Reschedule Appointment" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "label",
                                  {
                                    htmlFor: `reschedule-date-${idx}`,
                                    className: "block text-xs font-medium text-muted-foreground mb-1",
                                    children: "New Date"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "input",
                                  {
                                    id: `reschedule-date-${idx}`,
                                    type: "date",
                                    "data-ocid": "appointments.reschedule.date.input",
                                    value: rescheduleForm.date,
                                    onChange: (e) => setRescheduleForm((p) => ({
                                      ...p,
                                      date: e.target.value
                                    })),
                                    className: "w-full h-7 px-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "label",
                                  {
                                    htmlFor: `reschedule-provider-${idx}`,
                                    className: "block text-xs font-medium text-muted-foreground mb-1",
                                    children: "Provider"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "select",
                                  {
                                    id: `reschedule-provider-${idx}`,
                                    "data-ocid": "appointments.reschedule.provider.select",
                                    value: rescheduleForm.provider,
                                    onChange: (e) => setRescheduleForm((p) => ({
                                      ...p,
                                      provider: e.target.value
                                    })),
                                    className: "w-full h-7 px-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select..." }),
                                      providers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p))
                                    ]
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "label",
                                  {
                                    htmlFor: `reschedule-reason-${idx}`,
                                    className: "block text-xs font-medium text-muted-foreground mb-1",
                                    children: "Reason for Change (optional)"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "input",
                                  {
                                    id: `reschedule-reason-${idx}`,
                                    type: "text",
                                    placeholder: "e.g. Schedule conflict, feel better, etc.",
                                    value: rescheduleForm.reason,
                                    onChange: (e) => setRescheduleForm((p) => ({
                                      ...p,
                                      reason: e.target.value
                                    })),
                                    className: "w-full h-7 px-2 text-sm bg-background border border-input rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                  }
                                )
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  "data-ocid": "appointments.reschedule.submit_button",
                                  onClick: () => handleRescheduleSubmit(appt.id),
                                  className: "px-3 py-1 text-xs font-semibold rounded-sm text-white",
                                  style: {
                                    background: "var(--accent)"
                                  },
                                  children: "Submit Request"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  "data-ocid": "appointments.reschedule.cancel_button",
                                  onClick: () => {
                                    setRescheduleOpenId(null);
                                    setRescheduleSuccessId(null);
                                  },
                                  className: "px-3 py-1 text-xs font-medium rounded-sm text-muted-foreground border border-border hover:text-foreground transition-colors",
                                  children: "Cancel"
                                }
                              )
                            ] })
                          ] })
                        }
                      )
                    ] })
                  ]
                },
                String(appt.id)
              );
            }) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-3", children: "Past Appointments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-card border border-border rounded-sm overflow-hidden",
          "data-ocid": "appointments.past.table",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border",
                style: { background: "var(--muted)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Provider" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Reason" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Status" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: isLoading ? renderSkeletonRows(3) : past.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                colSpan: 4,
                className: "px-4 py-8 text-center text-sm text-muted-foreground",
                "data-ocid": "appointments.past.empty_state",
                children: "No past appointments."
              }
            ) }) : past.map((appt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                "data-ocid": `appointments.past.item.${idx + 1}`,
                className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: appt.date }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: appt.provider }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: appt.reason }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusBadge,
                    {
                      variant: statusVariant(appt.status),
                      label: appt.status
                    }
                  ) })
                ]
              },
              String(appt.id)
            )) })
          ] })
        }
      ),
      past.length > 0 && onNavigate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 px-1 text-sm text-muted-foreground", children: [
        "Have feedback about a recent visit?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onNavigate("portal-survey"),
            className: "text-primary underline-offset-2 hover:underline",
            children: "Share your experience →"
          }
        )
      ] })
    ] })
  ] });
}
export {
  MyAppointments as default
};
