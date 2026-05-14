import { r as reactExports, j as jsxRuntimeExports, aQ as ChevronLeft, B as Button, aN as ChevronRight } from "./index-4utdZC3E.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
const PROVIDERS = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    specialty: "Internal Medicine",
    nextAvailable: "Tomorrow, Mar 14",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Dr. Marcus Williams",
    specialty: "Cardiology",
    nextAvailable: "Mar 15",
    avatar: "MW"
  },
  {
    id: 3,
    name: "Dr. Lisa Park",
    specialty: "Endocrinology",
    nextAvailable: "Mar 17",
    avatar: "LP"
  },
  {
    id: 4,
    name: "Dr. James Okafor",
    specialty: "Dermatology",
    nextAvailable: "Mar 18",
    avatar: "JO"
  }
];
const APPOINTMENT_TYPES = [
  "Annual Physical",
  "Follow-up Visit",
  "Sick Visit",
  "Preventive Care",
  "Specialist Consultation",
  "Lab Review",
  "Medication Management",
  "Mental Health"
];
function deterministicFilter(dateKey, slots) {
  const seed = dateKey.split("-").reduce((acc, n) => acc + Number.parseInt(n), 0);
  return slots.filter((_, i) => (seed + i) % 3 !== 0);
}
function generateSlots() {
  const result = {};
  const today = /* @__PURE__ */ new Date();
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const dayOfWeek = d.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      result[key] = { morning: [], afternoon: [] };
    } else {
      result[key] = {
        morning: deterministicFilter(key, [
          "8:00 AM",
          "8:30 AM",
          "9:00 AM",
          "10:30 AM",
          "11:00 AM"
        ]),
        afternoon: deterministicFilter(key, [
          "1:00 PM",
          "1:30 PM",
          "2:30 PM",
          "3:00 PM",
          "4:00 PM"
        ])
      };
    }
  }
  return result;
}
const SLOTS = generateSlots();
const STEPS = ["Provider", "Date & Time", "Details", "Confirm"];
function ScheduleAppointment({
  onBack
}) {
  var _a, _b, _c, _d, _e;
  const [step, setStep] = reactExports.useState(0);
  const [booking, setBooking] = reactExports.useState({
    provider: null,
    date: "",
    time: "",
    appointmentType: "",
    reason: ""
  });
  const [confirmed, setConfirmed] = reactExports.useState(false);
  const dates = Object.keys(SLOTS);
  const selectedSlots = booking.date ? SLOTS[booking.date] : null;
  const formatDate = (d) => {
    if (!d) return "";
    return (/* @__PURE__ */ new Date(`${d}T12:00:00`)).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  };
  const handleConfirm = () => {
    setConfirmed(true);
  };
  if (confirmed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", "data-ocid": "schedule.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 flex items-center justify-center rounded-full bg-success/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-foreground", children: "Appointment Confirmed!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "You will receive a confirmation email shortly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5 text-left w-full max-w-sm space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Provider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: (_a = booking.provider) == null ? void 0 : _a.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: formatDate(booking.date) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: booking.time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: booking.appointmentType })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "schedule.back.button",
          onClick: onBack,
          className: "text-sm font-medium hover:underline",
          style: { color: "var(--primary)" },
          children: "← Back to Appointments"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "schedule.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: onBack && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "schedule.back.button",
        onClick: onBack,
        className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" }),
          "Back"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0", "data-ocid": "schedule.step.panel", children: STEPS.map((label, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 transition-all",
            style: {
              background: i < step ? "var(--accent)" : i === step ? "var(--sidebar)" : "var(--muted)",
              color: i <= step ? "var(--card)" : "var(--muted-foreground)"
            },
            children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }) : i + 1
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-sm font-medium hidden sm:inline",
            style: {
              color: i === step ? "var(--sidebar)" : "var(--muted-foreground)"
            },
            children: label
          }
        )
      ] }),
      i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-3 h-px w-8 bg-border flex-shrink-0" })
    ] }, label)) }),
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "schedule.provider.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Select a Provider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: PROVIDERS.map((p, idx) => {
        var _a2, _b2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `schedule.provider.item.${idx + 1}`,
            onClick: () => {
              setBooking((prev) => ({ ...prev, provider: p }));
              setStep(1);
            },
            className: "flex items-start gap-3 p-4 text-left border rounded-sm transition-all hover:bg-muted/40",
            style: {
              borderColor: ((_a2 = booking.provider) == null ? void 0 : _a2.id) === p.id ? "var(--accent)" : "var(--border)",
              background: ((_b2 = booking.provider) == null ? void 0 : _b2.id) === p.id ? "var(--primary) / 0.1" : "var(--card)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-9 h-9 flex items-center justify-center rounded-sm text-white text-sm font-bold flex-shrink-0",
                  style: { background: "var(--accent)" },
                  children: p.avatar
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.specialty }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs mt-1",
                    style: { color: "var(--success)" },
                    children: [
                      "Next available: ",
                      p.nextAvailable
                    ]
                  }
                )
              ] })
            ]
          },
          p.id
        );
      }) })
    ] }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "schedule.datetime.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Select Date & Time" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Booking with ",
        (_b = booking.provider) == null ? void 0 : _b.name,
        " —",
        " ",
        (_c = booking.provider) == null ? void 0 : _c.specialty
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-7 gap-2", children: dates.map((d) => {
        const slots = SLOTS[d];
        const hasSlots = slots.morning.length + slots.afternoon.length > 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "schedule.date.button",
            disabled: !hasSlots,
            onClick: () => setBooking((prev) => ({ ...prev, date: d, time: "" })),
            className: "flex flex-col items-center gap-0.5 p-2 border rounded-sm text-center transition-all disabled:opacity-40 disabled:cursor-not-allowed",
            style: {
              borderColor: booking.date === d ? "var(--accent)" : "var(--border)",
              background: booking.date === d ? "var(--primary) / 0.1" : hasSlots ? "var(--card)" : "var(--muted)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: (/* @__PURE__ */ new Date(`${d}T12:00:00`)).toLocaleDateString("en-US", {
                weekday: "short"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: (/* @__PURE__ */ new Date(`${d}T12:00:00`)).getDate() }),
              hasSlots && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                slots.morning.length + slots.afternoon.length,
                " slots"
              ] })
            ]
          },
          d
        );
      }) }),
      booking.date && selectedSlots && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        selectedSlots.morning.length === 0 && selectedSlots.afternoon.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No availability on this date. Please select another day." }),
        selectedSlots.morning.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Morning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: selectedSlots.morning.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "schedule.time.button",
              onClick: () => setBooking((prev) => ({ ...prev, time: t })),
              className: "px-3 py-1.5 text-sm font-medium border rounded-sm transition-all",
              style: {
                borderColor: booking.time === t ? "var(--accent)" : "var(--border)",
                background: booking.time === t ? "var(--accent)" : "var(--card)",
                color: booking.time === t ? "var(--card)" : "var(--foreground)"
              },
              children: t
            },
            t
          )) })
        ] }),
        selectedSlots.afternoon.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Afternoon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: selectedSlots.afternoon.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "schedule.time.button",
              onClick: () => setBooking((prev) => ({ ...prev, time: t })),
              className: "px-3 py-1.5 text-sm font-medium border rounded-sm transition-all",
              style: {
                borderColor: booking.time === t ? "var(--accent)" : "var(--border)",
                background: booking.time === t ? "var(--accent)" : "var(--card)",
                color: booking.time === t ? "var(--card)" : "var(--foreground)"
              },
              children: t
            },
            t
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            "data-ocid": "schedule.prev.button",
            onClick: () => setStep(0),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5 mr-1" }),
              " Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            "data-ocid": "schedule.next.button",
            disabled: !booking.date || !booking.time,
            onClick: () => setStep(2),
            children: [
              "Continue ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 ml-1" })
            ]
          }
        )
      ] })
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "schedule.details.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Appointment Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "schedule-type",
              className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5",
              children: "Appointment Type"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "schedule-type",
              "data-ocid": "schedule.type.select",
              value: booking.appointmentType,
              onChange: (e) => setBooking((prev) => ({
                ...prev,
                appointmentType: e.target.value
              })),
              className: "w-full h-9 px-3 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select type..." }),
                APPOINTMENT_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "schedule-reason",
              className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5",
              children: "Reason for Visit"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "schedule-reason",
              "data-ocid": "schedule.reason.textarea",
              value: booking.reason,
              onChange: (e) => setBooking((prev) => ({ ...prev, reason: e.target.value })),
              placeholder: "Briefly describe your symptoms or the purpose of your visit...",
              rows: 3,
              className: "text-sm"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            "data-ocid": "schedule.prev.button",
            onClick: () => setStep(1),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5 mr-1" }),
              " Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            "data-ocid": "schedule.next.button",
            disabled: !booking.appointmentType || !booking.reason.trim(),
            onClick: () => setStep(3),
            children: [
              "Review ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 ml-1" })
            ]
          }
        )
      ] })
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "schedule.confirm.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Confirm Your Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm divide-y divide-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Provider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: (_d = booking.provider) == null ? void 0 : _d.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Specialty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: (_e = booking.provider) == null ? void 0 : _e.specialty })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: formatDate(booking.date) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: booking.time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: booking.appointmentType })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-1", children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: booking.reason })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            "data-ocid": "schedule.prev.button",
            onClick: () => setStep(2),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5 mr-1" }),
              " Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            "data-ocid": "schedule.confirm.primary_button",
            onClick: handleConfirm,
            className: "gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
              "Confirm Booking"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  ScheduleAppointment as default
};
