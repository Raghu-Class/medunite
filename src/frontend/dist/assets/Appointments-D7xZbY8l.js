import { c as createLucideIcon, j as jsxRuntimeExports, B as Button, C as ChevronDown, b as Bell, a as Stethoscope, d as Clock, e as cn, u as useDemoMode, f as useActor, g as useQueryClient, r as reactExports, D as DEMO_WAITLIST, h as DEMO_APPOINTMENT_REMINDERS, i as ue } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { M as Mail } from "./mail-Cxzi8IJt.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import { C as Checkbox } from "./checkbox-B8IMGtpd.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { T as Trash2 } from "./trash-2-BcsATfdj.js";
import { u as useAppointments, a as usePatients } from "./useBackendData-DW6vRqpq.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const SquareCheckBig = createLucideIcon("square-check-big", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
const Video = createLucideIcon("video", __iconNode);
function AppointmentBookingForm({
  form,
  setForm,
  patients,
  submitting,
  onSubmit,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border bg-card p-5",
      "data-ocid": "appointments.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "Book New Appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Patient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.patientId,
                onValueChange: (v) => setForm((p) => ({ ...p, patientId: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "appointments.patient.select",
                      className: "mt-1 h-8 text-sm",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select patient" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: patients.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(p.id), children: p.name }, String(p.id))) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Date & Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "appointments.date.input",
                type: "datetime-local",
                value: form.date,
                onChange: (e) => setForm((p) => ({ ...p, date: e.target.value })),
                className: "mt-1 h-8 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Recurrence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.recurrence,
                onValueChange: (v) => setForm((p) => ({ ...p, recurrence: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "appointments.recurrence.select",
                      className: "mt-1 h-8 text-sm",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None (one-time)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "daily", children: "Daily" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "biweekly", children: "Biweekly (Every 2 Weeks)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly" })
                  ] })
                ]
              }
            )
          ] }),
          form.recurrence !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Occurrences" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "appointments.occurrences.input",
                type: "number",
                min: "2",
                max: "12",
                value: form.occurrences,
                onChange: (e) => setForm((p) => ({ ...p, occurrences: e.target.value })),
                className: "mt-1 h-8 text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              "data-ocid": "appointments.video.checkbox",
              checked: form.videoVisit,
              onChange: (e) => setForm((p) => ({ ...p, videoVisit: e.target.checked })),
              className: "w-4 h-4 accent-primary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs font-medium text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-3.5 h-3.5 text-primary" }),
            "Video Visit (Telehealth)"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "appointments.submit_button",
              size: "sm",
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              onClick: onSubmit,
              disabled: submitting,
              children: submitting ? "Booking..." : form.recurrence !== "none" ? `Book ${form.occurrences} Appointments` : "Book Appointment"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "appointments.cancel_button",
              size: "sm",
              variant: "outline",
              onClick: onClose,
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
const statusVariantMap = {
  confirmed: "success",
  sent: "info",
  "not-sent": "neutral",
  "no-response": "warning"
};
function AppointmentRemindersPanel({
  apptReminders,
  showApptRemindersPanel,
  setShowApptRemindersPanel,
  sendingApptReminderId,
  sendingAllApptReminders,
  notSentCount,
  onSendAll,
  onSendOne
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border bg-card rounded-sm",
      "data-ocid": "appointments.reminders.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "appointments.reminders.toggle",
            onClick: () => setShowApptRemindersPanel((v) => !v),
            className: "w-full px-4 py-2.5 border-b border-border bg-muted/40 flex items-center gap-2 hover:bg-muted/60 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground flex-1 text-left", children: "Appointment Reminders" }),
              notSentCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 text-xs font-bold bg-warning/15 text-warning border border-warning/30 rounded-full", children: [
                notSentCount,
                " not sent"
              ] }),
              showApptRemindersPanel ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground" })
            ]
          }
        ),
        showApptRemindersPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          notSentCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-b border-border bg-muted/20 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              notSentCount,
              " reminders pending"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "appointments.reminders.primary_button",
                disabled: sendingAllApptReminders,
                onClick: onSendAll,
                className: "flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-sm disabled:opacity-60 hover:bg-primary/90 transition-colors",
                children: [
                  sendingAllApptReminders ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "w-3 h-3" }),
                  sendingAllApptReminders ? "Sending..." : "Send All Pending"
                ]
              }
            )
          ] }),
          apptReminders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-4 py-8 text-center",
              "data-ocid": "appointments.reminders.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6 mx-auto mb-2 text-muted-foreground/40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No reminders configured" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-transparent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Appointment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: apptReminders.map((rem, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `appointments.reminders.item.${i + 1}`,
                className: "hover:bg-muted/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-medium text-sm", children: rem.patientName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-mono text-xs text-muted-foreground", children: rem.dateTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" }),
                    rem.method
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusBadge,
                    {
                      variant: statusVariantMap[rem.status],
                      label: rem.status === "not-sent" ? "Not Sent" : rem.status === "no-response" ? "No Response" : rem.status
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: rem.status === "not-sent" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `appointments.reminders.secondary_button.${i + 1}`,
                      disabled: sendingApptReminderId === rem.appointmentId,
                      onClick: () => onSendOne(rem.appointmentId),
                      className: "flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-sm hover:bg-primary/20 disabled:opacity-60 transition-colors",
                      children: [
                        sendingApptReminderId === rem.appointmentId ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" }),
                        sendingApptReminderId === rem.appointmentId ? "Sending..." : "Send"
                      ]
                    }
                  ) })
                ]
              },
              rem.appointmentId
            )) })
          ] })
        ] })
      ]
    }
  );
}
const statusVariant = {
  scheduled: "info",
  "in-progress": "warning",
  completed: "success",
  cancelled: "danger",
  "no-show": "neutral"
};
const REMINDER_VARIANTS = {
  sent: "success",
  scheduled: "info",
  failed: "danger",
  "not-set": "neutral"
};
const REMINDER_LABELS = {
  sent: "Sent ✓",
  scheduled: "Scheduled",
  failed: "Failed",
  "not-set": "Not Set"
};
function AppointmentTable({
  appts,
  loading,
  selectedIds,
  setSelectedIds,
  toggleSelectAll,
  reminders,
  setReminder,
  expandedReminder,
  setExpandedReminder,
  videoApptIds,
  getPatientName,
  handleStatusChange,
  handleBulkStatusChange,
  handleSendNow,
  onStartEncounter,
  onNavigate
}) {
  const getReminder = (id) => reminders[id] ?? {
    method: "Email",
    scheduledTime: "24 hours before",
    status: "not-set"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border", children: [
    selectedIds.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2.5 border-b border-border bg-primary/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground", children: [
        selectedIds.size,
        " selected"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          "data-ocid": "appointments.bulk_complete_button",
          onClick: () => handleBulkStatusChange("completed"),
          className: "h-7 text-xs text-success border-success/30 hover:bg-success/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-3 h-3 mr-1" }),
            "Complete All"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          "data-ocid": "appointments.bulk_cancel_button",
          onClick: () => handleBulkStatusChange("cancelled"),
          className: "h-7 text-xs",
          children: "Cancel All"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          "data-ocid": "appointments.bulk_noshow_button",
          onClick: () => handleBulkStatusChange("no-show"),
          className: "h-7 text-xs text-warning border-warning/30 hover:bg-warning/10",
          children: "No-Show All"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "ghost",
          "data-ocid": "appointments.bulk_clear_button",
          onClick: () => setSelectedIds(/* @__PURE__ */ new Set()),
          className: "h-7 text-xs ml-auto",
          children: "Clear Selection"
        }
      )
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "py-12 text-center text-sm text-muted-foreground",
        "data-ocid": "appointments.loading_state",
        children: "Loading appointments..."
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "appointments.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-10 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            "data-ocid": "appointments.select_all.checkbox",
            checked: appts.filter((a) => a.status === "scheduled").length > 0 && appts.filter((a) => a.status === "scheduled").every((a) => selectedIds.has(String(a.id))),
            onCheckedChange: toggleSelectAll,
            "aria-label": "Select all scheduled"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Date & Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Provider ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4 w-32", children: "Reason" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Reminder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4 text-right", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: appts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          colSpan: 8,
          className: "text-center py-8 text-sm text-muted-foreground",
          "data-ocid": "appointments.empty_state",
          children: "No appointments found. Book one above."
        }
      ) }) : appts.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TableRow,
        {
          "data-ocid": `appointments.row.${i + 1}`,
          className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "w-10 px-4", children: a.status === "scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                "data-ocid": `appointments.checkbox.${i + 1}`,
                checked: selectedIds.has(String(a.id)),
                onCheckedChange: (checked) => {
                  setSelectedIds((prev) => {
                    const next = new Set(prev);
                    if (checked) next.add(String(a.id));
                    else next.delete(String(a.id));
                    return next;
                  });
                },
                "aria-label": `Select appointment ${i + 1}`
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "cursor-pointer text-primary hover:underline font-medium",
                "data-ocid": "appointments.patient.link",
                onClick: () => onNavigate == null ? void 0 : onNavigate("patients"),
                children: getPatientName(a.patientId)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.date.replace("T", " ") }),
              a.seriesId && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-sm", children: "↻ Recurring" }),
              videoApptIds.has(String(a.id)) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-2.5 h-2.5" }),
                "Video"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: String(a.providerId) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: statusVariant[a.status] ?? "neutral",
                label: a.status
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-xs text-muted-foreground max-w-[128px] truncate", children: a.reason || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: (() => {
              const rid = String(a.id);
              const rem = getReminder(rid);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `appointments.reminder.toggle.${i + 1}`,
                    onClick: () => setExpandedReminder(
                      expandedReminder === rid ? null : rid
                    ),
                    className: "inline-flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        StatusBadge,
                        {
                          variant: REMINDER_VARIANTS[rem.status],
                          label: REMINDER_LABELS[rem.status]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3 h-3 text-muted-foreground ml-0.5" })
                    ]
                  }
                ),
                expandedReminder === rid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 bg-muted/30 border border-border p-2.5 text-xs space-y-2 min-w-[220px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
                      "Method:",
                      " "
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: rem.method,
                        onValueChange: (v) => setReminder(rid, {
                          method: v
                        }),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              "data-ocid": `appointments.reminder.method.select.${i + 1}`,
                              className: "mt-0.5 h-6 text-xs w-28 inline-flex",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "SMS", children: "SMS" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Email", children: "Email" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Both", children: "Both" })
                          ] })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
                      "Scheduled:",
                      " "
                    ] }),
                    rem.scheduledTime
                  ] }),
                  rem.lastSent && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
                      "Last sent:",
                      " "
                    ] }),
                    rem.lastSent
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        "data-ocid": `appointments.reminder.primary_button.${i + 1}`,
                        onClick: () => handleSendNow(rid),
                        className: "h-6 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
                        children: "Send Now"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        "data-ocid": `appointments.reminder.secondary_button.${i + 1}`,
                        onClick: () => setReminder(rid, { status: "scheduled" }),
                        className: "h-6 text-xs",
                        children: "Schedule"
                      }
                    )
                  ] })
                ] })
              ] });
            })() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 justify-end", children: [
              (a.status === "scheduled" || a.status === "in-progress") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "default",
                  "data-ocid": `appointments.primary_button.${i + 1}`,
                  onClick: () => onStartEncounter(a.id, a.patientId),
                  className: "h-7 text-xs",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3 h-3 mr-1.5" }),
                    "Start"
                  ]
                }
              ),
              videoApptIds.has(String(a.id)) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `appointments.video.button.${i + 1}`,
                  onClick: () => onNavigate == null ? void 0 : onNavigate("video-visit"),
                  className: "h-7 text-xs border-primary/30 text-primary hover:bg-primary/5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-3 h-3 mr-1" }),
                    "Join"
                  ]
                }
              ),
              a.status === "scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    "data-ocid": `appointments.complete_button.${i + 1}`,
                    onClick: () => handleStatusChange(a.id, "completed"),
                    className: "h-7 text-xs text-success border-success/30 hover:bg-success/10",
                    children: "Complete"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "ghost",
                    "data-ocid": `appointments.cancel_button.${i + 1}`,
                    onClick: () => handleStatusChange(a.id, "cancelled"),
                    className: "h-7 text-xs",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    "data-ocid": `appointments.secondary_button.${i + 1}`,
                    onClick: () => handleStatusChange(a.id, "no-show"),
                    className: "h-7 text-xs text-warning border-warning/30 hover:bg-warning/10",
                    children: "No-Show"
                  }
                )
              ] })
            ] }) })
          ]
        },
        String(a.id)
      )) })
    ] })
  ] });
}
const PROVIDERS = [
  "Dr. Sarah Johnson",
  "Dr. Michael Chen",
  "Dr. Emily Rodriguez",
  "Dr. James Hartwell",
  "Dr. Anita Patel"
];
function ProviderAvailabilityPanel({
  showAvailability,
  setShowAvailability,
  availBlocks,
  availForm,
  setAvailForm,
  selectedProvider,
  setSelectedProvider,
  showAvailForm,
  setShowAvailForm,
  onAddBlock,
  onRemoveBlock
}) {
  const providerBlocks = availBlocks.filter(
    (b) => b.provider === selectedProvider
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border",
      "data-ocid": "appointments.availability.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "appointments.availability.toggle",
            onClick: () => setShowAvailability((v) => !v),
            className: "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Manage Provider Availability" }) }),
              showAvailability ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
            ]
          }
        ),
        showAvailability && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 border-t border-border space-y-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Provider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: selectedProvider,
                  onValueChange: setSelectedProvider,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "appointments.availability.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PROVIDERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                "data-ocid": "appointments.availability.primary_button",
                onClick: () => setShowAvailForm((v) => !v),
                className: "h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 mr-1" }),
                  " Add Block"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            selectedProvider,
            " has ",
            providerBlocks.length,
            " block",
            providerBlocks.length !== 1 ? "s" : "",
            " this period."
          ] }),
          showAvailForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-muted/30 border border-border p-3 space-y-3",
              "data-ocid": "appointments.availability.form.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Date / Label" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "appointments.availability.date.input",
                        value: availForm.date,
                        onChange: (e) => setAvailForm((p) => ({ ...p, date: e.target.value })),
                        placeholder: "e.g. Jan 3",
                        className: "mt-1 h-8 text-sm"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Start" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "appointments.availability.start.input",
                        type: "time",
                        value: availForm.startTime,
                        onChange: (e) => setAvailForm((p) => ({
                          ...p,
                          startTime: e.target.value
                        })),
                        className: "mt-1 h-8 text-sm"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "End" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "appointments.availability.end.input",
                        type: "time",
                        value: availForm.endTime,
                        onChange: (e) => setAvailForm((p) => ({ ...p, endTime: e.target.value })),
                        className: "mt-1 h-8 text-sm"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Recurrence" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: availForm.recurrence,
                        onValueChange: (v) => setAvailForm((p) => ({
                          ...p,
                          recurrence: v
                        })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              "data-ocid": "appointments.availability.recurrence.select",
                              className: "mt-1 h-8 text-sm",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "one-time", children: "One-time" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Reason" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      "data-ocid": "appointments.availability.reason.input",
                      value: availForm.reason,
                      onChange: (e) => setAvailForm((p) => ({ ...p, reason: e.target.value })),
                      placeholder: "Holiday, Conference, Admin Time...",
                      className: "mt-1 h-8 text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      "data-ocid": "appointments.availability.submit_button",
                      onClick: onAddBlock,
                      className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
                      children: "Save Block"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      "data-ocid": "appointments.availability.cancel_button",
                      onClick: () => setShowAvailForm(false),
                      className: "h-7 text-xs",
                      children: "Cancel"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: providerBlocks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-muted-foreground py-2",
              "data-ocid": "appointments.availability.empty_state",
              children: "No blocks set for this provider."
            }
          ) : providerBlocks.map((block, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `appointments.availability.item.${idx + 1}`,
              className: "flex items-center justify-between px-3 py-2 bg-muted/30 border border-border text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: block.date }),
                  block.startTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-2", children: [
                    block.startTime,
                    "–",
                    block.endTime
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-muted-foreground", children: [
                    "— ",
                    block.reason
                  ] }),
                  block.recurrence === "weekly" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-xs bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded-full font-semibold", children: "Weekly" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `appointments.availability.delete_button.${idx + 1}`,
                    onClick: () => onRemoveBlock(block.id),
                    className: "text-muted-foreground hover:text-destructive transition-colors text-xs font-medium ml-2",
                    children: "Remove"
                  }
                )
              ]
            },
            block.id
          )) })
        ] })
      ]
    }
  );
}
function WaitlistPanel({
  waitlist,
  waitlistForm,
  setWaitlistForm,
  waitlistExpanded,
  setWaitlistExpanded,
  showWaitlistForm,
  setShowWaitlistForm,
  onAddToWaitlist,
  onNotify,
  onSchedule,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border",
      "data-ocid": "appointments.waitlist.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "appointments.waitlist.toggle",
            onClick: () => setWaitlistExpanded((v) => !v),
            className: "w-full px-4 py-3 border-b border-border flex items-center gap-2 hover:bg-muted/30 transition-colors text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-semibold uppercase tracking-wider text-foreground flex-1", children: "Waitlist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold bg-warning/10 text-warning border border-warning/30 rounded-sm", children: [
                waitlist.filter((e) => e.status === "waiting").length,
                " waiting"
              ] }),
              waitlistExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground ml-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground ml-1" })
            ]
          }
        ),
        waitlistExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-b border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              waitlist.length,
              " patient",
              waitlist.length !== 1 ? "s" : "",
              " on list"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "appointments.waitlist.open_modal_button",
                onClick: () => setShowWaitlistForm((v) => !v),
                className: "h-7 text-xs",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 mr-1" }),
                  "Add to Waitlist"
                ]
              }
            )
          ] }),
          showWaitlistForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-4 py-3 bg-muted/20 border-b border-border space-y-3",
              "data-ocid": "appointments.waitlist.form.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground uppercase tracking-wider", children: "Add Patient to Waitlist" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-muted-foreground", children: "Patient Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "appointments.waitlist.patient.input",
                        value: waitlistForm.patientName,
                        onChange: (e) => setWaitlistForm((p) => ({
                          ...p,
                          patientName: e.target.value
                        })),
                        placeholder: "Full name",
                        className: "mt-1 h-8 text-sm"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-muted-foreground", children: "Reason" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "appointments.waitlist.reason.input",
                        value: waitlistForm.reason,
                        onChange: (e) => setWaitlistForm((p) => ({
                          ...p,
                          reason: e.target.value
                        })),
                        placeholder: "Reason for visit",
                        className: "mt-1 h-8 text-sm"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-muted-foreground", children: "Priority" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: waitlistForm.priority,
                        onValueChange: (v) => setWaitlistForm((p) => ({
                          ...p,
                          priority: v
                        })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              "data-ocid": "appointments.waitlist.priority.select",
                              className: "mt-1 h-8 text-sm",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "urgent", children: "Urgent" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "routine", children: "Routine" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      "data-ocid": "appointments.waitlist.submit_button",
                      onClick: onAddToWaitlist,
                      className: "h-7 text-xs",
                      children: "Add to Waitlist"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      "data-ocid": "appointments.waitlist.cancel_button",
                      onClick: () => {
                        setShowWaitlistForm(false);
                        setWaitlistForm({
                          patientName: "",
                          reason: "",
                          priority: "routine"
                        });
                      },
                      className: "h-7 text-xs",
                      children: "Cancel"
                    }
                  )
                ] })
              ]
            }
          ),
          waitlist.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-4 py-8 text-center",
              "data-ocid": "appointments.waitlist.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-muted-foreground/40 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No patients on the waitlist" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-transparent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Reason" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Date Added" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Priority" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: waitlist.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `appointments.waitlist.item.${i + 1}`,
                className: "hover:bg-muted/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-medium text-sm text-foreground", children: entry.patientName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-xs text-muted-foreground max-w-xs", children: entry.reason }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-xs text-muted-foreground font-mono", children: entry.dateAdded }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusBadge,
                    {
                      variant: entry.priority === "urgent" ? "danger" : "neutral",
                      label: entry.priority
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusBadge,
                    {
                      variant: entry.status === "waiting" ? "warning" : entry.status === "notified" ? "info" : "success",
                      label: entry.status
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    entry.status === "waiting" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `appointments.waitlist.primary_button.${i + 1}`,
                        onClick: () => onNotify(entry.id),
                        className: "px-2 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-sm hover:bg-primary/20 transition-colors",
                        children: "Notify"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `appointments.waitlist.secondary_button.${i + 1}`,
                        onClick: () => onSchedule(entry),
                        className: "px-2 py-1 text-xs font-semibold bg-muted text-muted-foreground border border-border rounded-sm hover:bg-muted/80 transition-colors",
                        children: "Schedule"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `appointments.waitlist.delete_button.${i + 1}`,
                        onClick: () => onRemove(entry.id),
                        className: "p-1 text-muted-foreground hover:text-destructive transition-colors rounded-sm",
                        "aria-label": "Remove from waitlist",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ] }) })
                ]
              },
              entry.id
            )) })
          ] })
        ] })
      ]
    }
  );
}
const WEEK_COLORS = {
  scheduled: "bg-primary/10 border-primary/30 text-primary",
  completed: "bg-success/10 border-success/30 text-success",
  cancelled: "bg-muted border-muted-foreground/20 text-muted-foreground opacity-60",
  "in-progress": "bg-warning/10 border-warning/30 text-warning",
  "no-show": "bg-slate-50 border-slate-300 text-slate-600 opacity-60"
};
function getWeekDays(referenceDate) {
  const day = referenceDate.getDay();
  const monday = new Date(referenceDate);
  monday.setDate(referenceDate.getDate() - (day + 6) % 7);
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}
function toDateStr(d) {
  return d.toISOString().slice(0, 10);
}
function formatHour(h) {
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:00 ${ampm}`;
}
function WeekCalendarView({
  appts,
  getPatientName
}) {
  const weekDays = getWeekDays(/* @__PURE__ */ new Date());
  const today = toDateStr(/* @__PURE__ */ new Date());
  const HOURS = Array.from({ length: 11 }, (_, i) => i + 8);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-card border border-border overflow-x-auto",
      "data-ocid": "appointments.week.panel",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[700px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid border-b border-border",
            style: { gridTemplateColumns: "60px repeat(5, 1fr)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-r border-border" }),
              weekDays.map((day) => {
                const ds = toDateStr(day);
                const isToday = ds === today;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn(
                      "px-2 py-2 text-center text-xs font-semibold border-r border-border last:border-r-0",
                      isToday ? "bg-primary/10 text-primary" : "text-muted-foreground"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: ["Mon", "Tue", "Wed", "Thu", "Fri"][weekDays.indexOf(day)] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(
                            "text-sm font-bold mt-0.5",
                            isToday ? "text-primary" : "text-foreground"
                          ),
                          children: day.getDate()
                        }
                      )
                    ]
                  },
                  ds
                );
              })
            ]
          }
        ),
        HOURS.map((hour) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid border-b border-border last:border-b-0",
            style: {
              gridTemplateColumns: "60px repeat(5, 1fr)",
              minHeight: 52
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-r border-border px-2 flex items-start pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatHour(hour) }) }),
              weekDays.map((day) => {
                const ds = toDateStr(day);
                const isToday = ds === today;
                const slotAppts = appts.filter((a) => {
                  if (!a.date.startsWith(ds)) return false;
                  const h = Number.parseInt(a.date.slice(11, 13) || "9", 10);
                  return h === hour;
                });
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "border-r border-border last:border-r-0 p-1 space-y-1",
                      isToday ? "bg-primary/5" : ""
                    ),
                    children: slotAppts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: cn(
                          "border rounded-sm px-1.5 py-1 text-xs leading-tight cursor-pointer transition-opacity hover:opacity-80",
                          WEEK_COLORS[a.status] ?? "bg-slate-50 border-slate-300 text-slate-700"
                        ),
                        title: `${getPatientName(a.patientId)} — ${a.status}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: getPatientName(a.patientId) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-70", children: a.date.slice(11, 16) })
                        ]
                      },
                      String(a.id)
                    ))
                  },
                  ds
                );
              })
            ]
          },
          hour
        ))
      ] })
    }
  );
}
const INITIAL_BLOCKS = [
  {
    id: 1,
    provider: "Dr. Sarah Johnson",
    date: "Dec 25",
    startTime: "",
    endTime: "",
    reason: "Holiday",
    recurrence: "one-time"
  },
  {
    id: 2,
    provider: "Dr. Sarah Johnson",
    date: "Jan 3",
    startTime: "13:00",
    endTime: "15:00",
    reason: "Conference",
    recurrence: "one-time"
  },
  {
    id: 3,
    provider: "Dr. Sarah Johnson",
    date: "Every Friday",
    startTime: "16:00",
    endTime: "17:00",
    reason: "Admin Time",
    recurrence: "weekly"
  },
  {
    id: 4,
    provider: "Dr. Michael Chen",
    date: "Jan 10",
    startTime: "09:00",
    endTime: "12:00",
    reason: "CME Training",
    recurrence: "one-time"
  }
];
function addDays(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 16);
}
function addWeeks(dateStr, weeks) {
  return addDays(dateStr, weeks * 7);
}
function addMonths(dateStr, months) {
  const d = new Date(dateStr);
  d.setMonth(d.getMonth() + months);
  return d.toISOString().slice(0, 16);
}
function Appointments({
  onStartEncounter,
  onNavigate
}) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const queryClient = useQueryClient();
  const [appts, setAppts] = reactExports.useState([]);
  const [patients, setPatients] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    patientId: "",
    date: "",
    providerId: "10",
    recurrence: "none",
    occurrences: "4",
    videoVisit: false
  });
  const videoApptIds = /* @__PURE__ */ new Set(["1", "3", "8"]);
  const [showAvailability, setShowAvailability] = reactExports.useState(false);
  const [availBlocks, setAvailBlocks] = reactExports.useState(INITIAL_BLOCKS);
  const [selectedProvider, setSelectedProvider] = reactExports.useState(() => {
    try {
      const p = JSON.parse(
        localStorage.getItem("medunite_prefs_Receptionist") || "{}"
      );
      if (p.providers && Array.isArray(p.providers) && p.providers.length > 0)
        return p.providers[0];
    } catch {
    }
    return "Dr. Sarah Johnson";
  });
  const [availForm, setAvailForm] = reactExports.useState({
    date: "",
    startTime: "",
    endTime: "",
    reason: "",
    recurrence: "one-time"
  });
  const [showAvailForm, setShowAvailForm] = reactExports.useState(false);
  const [reminders, setReminders] = reactExports.useState({});
  const [expandedReminder, setExpandedReminder] = reactExports.useState(null);
  const [calendarView, setCalendarView] = reactExports.useState("list");
  const [selectedIds, setSelectedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [waitlist, setWaitlist] = reactExports.useState(DEMO_WAITLIST);
  const [apptReminders, setApptReminders] = reactExports.useState(
    isDemoMode ? DEMO_APPOINTMENT_REMINDERS : []
  );
  const [showApptRemindersPanel, setShowApptRemindersPanel] = reactExports.useState(true);
  const [sendingApptReminderId, setSendingApptReminderId] = reactExports.useState(null);
  const [sendingAllApptReminders, setSendingAllApptReminders] = reactExports.useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = reactExports.useState(false);
  const [waitlistExpanded, setWaitlistExpanded] = reactExports.useState(true);
  const [waitlistForm, setWaitlistForm] = reactExports.useState({
    patientName: "",
    reason: "",
    priority: "routine"
  });
  const getReminder = (id) => reminders[id] ?? {
    method: "Email",
    scheduledTime: "24 hours before",
    status: "not-set"
  };
  const setReminder = (id, info) => setReminders((prev) => ({
    ...prev,
    [id]: { ...getReminder(id), ...info }
  }));
  const handleSendNow = (id) => {
    setReminder(id, {
      status: "sent",
      lastSent: (/* @__PURE__ */ new Date()).toLocaleTimeString()
    });
    ue.success("Reminder sent");
  };
  const handleAddBlock = () => {
    if (!availForm.date || !availForm.reason) {
      ue.error("Date and reason required");
      return;
    }
    setAvailBlocks((prev) => [
      ...prev,
      {
        id: Date.now(),
        provider: selectedProvider,
        date: availForm.date,
        startTime: availForm.startTime,
        endTime: availForm.endTime,
        reason: availForm.reason,
        recurrence: availForm.recurrence
      }
    ]);
    setAvailForm({
      date: "",
      startTime: "",
      endTime: "",
      reason: "",
      recurrence: "one-time"
    });
    setShowAvailForm(false);
    ue.success("Block added");
  };
  const handleRemoveBlock = (id) => {
    setAvailBlocks((prev) => prev.filter((b) => b.id !== id));
    ue.success("Block removed");
  };
  const remindersSentToday = Object.values(reminders).filter((r) => r.status === "sent").length + 8;
  const remindersPending = Object.values(reminders).filter((r) => r.status === "scheduled").length + 3;
  const remindersFailed = Object.values(reminders).filter((r) => r.status === "failed").length + 1;
  const { data: appointmentsData, isLoading: appointmentsLoading } = useAppointments();
  const { data: patientsData, isLoading: patientsLoading } = usePatients();
  reactExports.useEffect(() => {
    if (isDemoMode) return;
    if (appointmentsData) setAppts(appointmentsData);
    if (patientsData) setPatients(patientsData);
    if (!appointmentsLoading && !patientsLoading) setLoading(false);
  }, [
    appointmentsData,
    patientsData,
    appointmentsLoading,
    patientsLoading,
    isDemoMode
  ]);
  reactExports.useEffect(() => {
    if (!isDemoMode || !actor) return;
    setLoading(true);
    Promise.all([actor.listAppointments(), actor.listPatients()]).then(([a, p]) => {
      setAppts(a);
      setPatients(p);
    }).catch(() => ue.error("Failed to load appointments")).finally(() => setLoading(false));
  }, [actor, isDemoMode]);
  const getPatientName = (patientId) => {
    const p = patients.find((pt) => pt.id === patientId);
    return (p == null ? void 0 : p.name) ?? `Patient #${patientId}`;
  };
  const buildDateSequence = (baseDate, recurrence, occurrences) => {
    const dates = [baseDate];
    for (let i = 1; i < occurrences; i++) {
      if (recurrence === "daily") dates.push(addDays(baseDate, i));
      else if (recurrence === "weekly") dates.push(addWeeks(baseDate, i));
      else if (recurrence === "biweekly") dates.push(addWeeks(baseDate, i * 2));
      else if (recurrence === "monthly") dates.push(addMonths(baseDate, i));
    }
    return dates;
  };
  const handleStatusChange = (id, newStatus) => {
    setAppts(
      (prev) => prev.map((a) => a.id === id ? { ...a, status: newStatus } : a)
    );
    ue.success(`Appointment marked as ${newStatus}`);
    if (actor) {
      actor.updateAppointmentStatus(id, newStatus).catch(() => {
      });
    }
  };
  const handleBulkStatusChange = (newStatus) => {
    const idsToUpdate = Array.from(selectedIds).map((sid) => appts.find((a) => String(a.id) === sid)).filter((a) => a && a.status === "scheduled").map((a) => a.id);
    setAppts(
      (prev) => prev.map(
        (a) => selectedIds.has(String(a.id)) && a.status === "scheduled" ? { ...a, status: newStatus } : a
      )
    );
    ue.success(`${selectedIds.size} appointment(s) marked as ${newStatus}`);
    setSelectedIds(/* @__PURE__ */ new Set());
    if (actor) {
      for (const id of idsToUpdate) {
        actor.updateAppointmentStatus(id, newStatus).catch(() => {
        });
      }
    }
  };
  const toggleSelectAll = () => {
    const scheduledIds = appts.filter((a) => a.status === "scheduled").map((a) => String(a.id));
    if (scheduledIds.every((id) => selectedIds.has(id)) && scheduledIds.length > 0) {
      setSelectedIds(/* @__PURE__ */ new Set());
    } else {
      setSelectedIds(new Set(scheduledIds));
    }
  };
  const handleAdd = async (prefillPatientId) => {
    const pid = prefillPatientId ?? form.patientId;
    if (!pid || !form.date) {
      ue.error("Patient and date required");
      return;
    }
    if (!actor) {
      ue.error("Not connected to backend");
      return;
    }
    setSubmitting(true);
    try {
      const dates = form.recurrence !== "none" ? buildDateSequence(
        form.date,
        form.recurrence,
        Number.parseInt(form.occurrences, 10)
      ) : [form.date];
      for (const date of dates) {
        await actor.createAppointment(
          BigInt(pid),
          BigInt(form.providerId),
          date
        );
      }
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      setForm({
        patientId: "",
        date: "",
        providerId: "10",
        recurrence: "none",
        occurrences: "4",
        videoVisit: false
      });
      setShowForm(false);
      ue.success(
        dates.length > 1 ? `${dates.length} appointments booked` : "Appointment booked"
      );
    } catch {
      ue.error("Failed to book appointment");
    } finally {
      setSubmitting(false);
    }
  };
  const handleScheduleFromWaitlist = (entry) => {
    setForm((prev) => ({ ...prev, date: `${entry.dateAdded}T09:00` }));
    setShowForm(true);
    ue.info(`Pre-filled for ${entry.patientName}`);
  };
  const handleNotifyWaitlist = (id) => {
    setWaitlist(
      (prev) => prev.map((e) => e.id === id ? { ...e, status: "notified" } : e)
    );
    const entry = waitlist.find((e) => e.id === id);
    ue.success(`Notification sent to ${(entry == null ? void 0 : entry.patientName) ?? "patient"}`);
  };
  const handleRemoveWaitlist = (id) => {
    setWaitlist((prev) => prev.filter((e) => e.id !== id));
    ue.success("Removed from waitlist");
  };
  const handleAddToWaitlist = () => {
    if (!waitlistForm.patientName.trim() || !waitlistForm.reason.trim()) {
      ue.error("Patient name and reason are required");
      return;
    }
    const newEntry = {
      id: `wl${Date.now()}`,
      patientName: waitlistForm.patientName.trim(),
      reason: waitlistForm.reason.trim(),
      dateAdded: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      priority: waitlistForm.priority,
      status: "waiting"
    };
    setWaitlist((prev) => [newEntry, ...prev]);
    setWaitlistForm({ patientName: "", reason: "", priority: "routine" });
    setShowWaitlistForm(false);
    ue.success(`${newEntry.patientName} added to waitlist`);
  };
  const notSentCount = reactExports.useMemo(
    () => apptReminders.filter((r) => r.status === "not-sent").length,
    [apptReminders]
  );
  const handleSendAllReminders = async () => {
    setSendingAllApptReminders(true);
    setApptReminders(
      (prev) => prev.map(
        (r) => r.status === "not-sent" ? { ...r, status: "sent" } : r
      )
    );
    setSendingAllApptReminders(false);
    ue.success("All pending reminders sent.");
  };
  const handleSendOneReminder = (appointmentId) => {
    setSendingApptReminderId(appointmentId);
    const rem = apptReminders.find((r) => r.appointmentId === appointmentId);
    setApptReminders(
      (prev) => prev.map(
        (r) => r.appointmentId === appointmentId ? { ...r, status: "sent" } : r
      )
    );
    setSendingApptReminderId(null);
    ue.success(`Reminder sent to ${(rem == null ? void 0 : rem.patientName) ?? "patient"}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "appointments.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-3 gap-3",
        "data-ocid": "appointments.reminders.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Reminders Sent Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground mt-1", children: remindersSentToday })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground mt-1", children: remindersPending })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Failed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-destructive mt-1", children: remindersFailed })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "appointments.primary_button",
          size: "sm",
          className: "bg-primary text-primary-foreground hover:bg-primary/90",
          onClick: () => setShowForm((v) => !v),
          children: [
            showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
            "New Appointment"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 border border-border rounded-sm overflow-hidden bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "appointments.list.tab",
            onClick: () => setCalendarView("list"),
            className: cn(
              "px-3 py-1.5 text-xs font-semibold transition-colors",
              calendarView === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            ),
            children: "List"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "appointments.week.tab",
            onClick: () => setCalendarView("week"),
            className: cn(
              "px-3 py-1.5 text-xs font-semibold transition-colors",
              calendarView === "week" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            ),
            children: "Week"
          }
        )
      ] })
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppointmentBookingForm,
      {
        form,
        setForm,
        patients,
        submitting,
        onSubmit: handleAdd,
        onClose: () => setShowForm(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProviderAvailabilityPanel,
      {
        showAvailability,
        setShowAvailability,
        availBlocks,
        availForm,
        setAvailForm,
        selectedProvider,
        setSelectedProvider,
        showAvailForm,
        setShowAvailForm,
        onAddBlock: handleAddBlock,
        onRemoveBlock: handleRemoveBlock
      }
    ),
    calendarView === "week" && /* @__PURE__ */ jsxRuntimeExports.jsx(WeekCalendarView, { appts, getPatientName }),
    calendarView === "list" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppointmentTable,
      {
        appts,
        loading,
        selectedIds,
        setSelectedIds,
        toggleSelectAll,
        reminders,
        setReminder,
        expandedReminder,
        setExpandedReminder,
        videoApptIds,
        getPatientName,
        handleStatusChange,
        handleBulkStatusChange,
        handleSendNow,
        onStartEncounter,
        onNavigate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WaitlistPanel,
      {
        waitlist,
        waitlistForm,
        setWaitlistForm,
        waitlistExpanded,
        setWaitlistExpanded,
        showWaitlistForm,
        setShowWaitlistForm,
        onAddToWaitlist: handleAddToWaitlist,
        onNotify: handleNotifyWaitlist,
        onSchedule: handleScheduleFromWaitlist,
        onRemove: handleRemoveWaitlist
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppointmentRemindersPanel,
      {
        apptReminders,
        showApptRemindersPanel,
        setShowApptRemindersPanel,
        sendingApptReminderId,
        sendingAllApptReminders,
        notSentCount,
        onSendAll: handleSendAllReminders,
        onSendOne: handleSendOneReminder
      }
    )
  ] });
}
export {
  Appointments as default
};
