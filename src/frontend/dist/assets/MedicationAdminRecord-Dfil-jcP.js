import { u as useDemoMode, r as reactExports, H as DEMO_MAR_SCHEDULE, j as jsxRuntimeExports, l as ClipboardList, e as cn, B as Button, i as ue } from "./index-4utdZC3E.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
const SLOTS = ["06:00", "12:00", "18:00", "22:00"];
const SHIFT_SLOTS = {
  all: ["06:00", "12:00", "18:00", "22:00"],
  day: ["06:00", "12:00"],
  evening: ["18:00"],
  night: ["22:00"]
};
const SHIFT_LABELS = {
  all: "All Shifts",
  day: "Day (06:00–14:00)",
  evening: "Evening (14:00–22:00)",
  night: "Night (22:00–06:00)"
};
const PATIENT_WARD_MAP = {
  "1": "ICU",
  "2": "ICU",
  "3": "ICU",
  "4": "General",
  "5": "General",
  "6": "General",
  "7": "Surgical",
  "8": "Surgical",
  "9": "Surgical",
  "10": "Pediatric",
  "11": "Pediatric",
  "12": "Pediatric"
};
const WARDS = ["All", "ICU", "General", "Surgical", "Pediatric"];
const slotVariant = {
  administered: "success",
  due: "warning",
  held: "neutral",
  refused: "danger",
  na: "neutral"
};
const slotLabel = {
  administered: "Administered",
  due: "Due",
  held: "Held",
  refused: "Refused",
  na: "N/A"
};
function isOverdue(slot) {
  const currentHour = (/* @__PURE__ */ new Date()).getHours();
  const slotHour = Number.parseInt(slot.split(":")[0]);
  return currentHour > slotHour;
}
function isDueWithinOneHour(slot) {
  const now = /* @__PURE__ */ new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTotalMins = currentHour * 60 + currentMinutes;
  const slotHour = Number.parseInt(slot.split(":")[0]);
  const slotMins = slotHour * 60;
  return slotMins >= currentTotalMins && slotMins <= currentTotalMins + 60;
}
function MedicationAdminRecord() {
  const { isDemoMode } = useDemoMode();
  const [entries, setEntries] = reactExports.useState(
    isDemoMode ? DEMO_MAR_SCHEDULE : []
  );
  const [expandedCell, setExpandedCell] = reactExports.useState(null);
  const [actionForm, setActionForm] = reactExports.useState({ action: "administered", reason: "" });
  const [shiftFilter, setShiftFilter] = reactExports.useState("all");
  const [wardFilter, setWardFilter] = reactExports.useState(() => {
    try {
      const prefs = JSON.parse(
        localStorage.getItem("medunite_prefs_Nurse") || "{}"
      );
      const w = prefs.ward;
      return WARDS.includes(w) ? w : "All";
    } catch {
      return "All";
    }
  });
  const visibleSlots = SHIFT_SLOTS[shiftFilter];
  const totalDue = entries.reduce(
    (acc, e) => acc + SLOTS.filter((s) => e.slots[s] === "due").length,
    0
  );
  const totalAdministered = entries.reduce(
    (acc, e) => acc + SLOTS.filter((s) => e.slots[s] === "administered").length,
    0
  );
  const currentHour = (/* @__PURE__ */ new Date()).getHours();
  const overdue = entries.reduce((acc, e) => {
    return acc + SLOTS.filter((s) => {
      if (e.slots[s] !== "due") return false;
      const slotHour = Number.parseInt(s.split(":")[0]);
      return currentHour > slotHour;
    }).length;
  }, 0);
  const cellKey = (entryId, slot) => `${entryId}:${slot}`;
  const handleCellClick = (entry, slot) => {
    if (entry.slots[slot] !== "due") return;
    const key = cellKey(entry.id, slot);
    setExpandedCell((prev) => prev === key ? null : key);
    setActionForm({ action: "administered", reason: "" });
  };
  const handleRecord = (entryId, slot) => {
    const entry = entries.find((e) => e.id === entryId);
    if (!entry) return;
    if ((actionForm.action === "held" || actionForm.action === "refused") && !actionForm.reason.trim()) {
      ue.error("A reason is required for Held or Refused status.");
      return;
    }
    setEntries(
      (prev) => prev.map(
        (e) => e.id === entryId ? { ...e, slots: { ...e.slots, [slot]: actionForm.action } } : e
      )
    );
    setExpandedCell(null);
    ue.success(
      `${entry.medication} — ${slotLabel[actionForm.action]} at ${slot}`
    );
  };
  const wardFilteredEntries = wardFilter === "All" ? entries : entries.filter(
    (e) => PATIENT_WARD_MAP[String(e.patientId)] === wardFilter
  );
  const byPatient = {};
  for (const e of wardFilteredEntries) {
    if (!byPatient[e.patientName]) byPatient[e.patientName] = [];
    byPatient[e.patientName].push(e);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-base font-semibold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-primary" }),
        "Medication Administration Record"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
        "Today —",
        " ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-3 border-b border-border bg-muted/20 flex gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-warning tabular-nums", children: totalDue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: "Due" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-danger tabular-nums", children: overdue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: "Overdue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-success tabular-nums", children: totalAdministered }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: "Administered Today" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-2.5 border-b border-border bg-card flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2", children: "Shift:" }),
      ["all", "day", "evening", "night"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "mar.shift.tab",
          onClick: () => setShiftFilter(s),
          className: cn(
            "px-3 py-1 text-xs font-medium rounded-sm border transition-colors capitalize",
            shiftFilter === s ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground hover:bg-muted/50"
          ),
          children: s === "all" ? "All Shifts" : s.charAt(0).toUpperCase() + s.slice(1)
        },
        s
      )),
      shiftFilter !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-muted-foreground", children: SHIFT_LABELS[shiftFilter] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-2.5 border-b border-border bg-card flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2", children: "Ward:" }),
      WARDS.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setWardFilter(w),
          className: [
            "px-2.5 py-1 text-xs rounded border transition-colors",
            wardFilter === w ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-muted-foreground hover:border-primary/40"
          ].join(" "),
          children: w
        },
        w
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto px-6 py-4", children: wardFilteredEntries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "mar.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-8 h-8 mx-auto mb-3 text-muted-foreground/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No medications scheduled for today" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Object.entries(byPatient).map(([patientName, patientEntries]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border rounded-sm bg-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-b border-border bg-muted/50 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: patientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: patientEntries[0].room })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid items-center px-4 py-2 bg-muted/50 border-b border-border",
              style: {
                gridTemplateColumns: `1fr 80px 60px repeat(${visibleSlots.length}, 120px)`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Medication" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Nurse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Notes" }),
                visibleSlots.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                    children: slot
                  },
                  slot
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: patientEntries.map((entry, ei) => {
            const hasDueSoon = visibleSlots.some(
              (s) => entry.slots[s] === "due" && isDueWithinOneHour(s)
            );
            const hasOverdue = visibleSlots.some(
              (s) => entry.slots[s] === "due" && isOverdue(s)
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "grid items-center px-4 py-2.5",
                    hasOverdue ? "border-l-2 border-warning bg-warning/5" : hasDueSoon && "border-l-4 border-amber-400"
                  ),
                  style: {
                    gridTemplateColumns: `1fr 80px 60px repeat(${visibleSlots.length}, 120px)`
                  },
                  "data-ocid": `mar.row.${ei + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-foreground", children: entry.medication }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                        entry.dose,
                        " · ",
                        entry.route
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate pr-2", children: entry.administeredBy ?? "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: entry.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-warning font-medium", children: "Note" }) }),
                    visibleSlots.map((slot) => {
                      const status = entry.slots[slot] ?? "na";
                      const isDue = status === "due";
                      const isOverdueSlot = isDue && isOverdue(slot);
                      const variant = isOverdueSlot ? "danger" : slotVariant[status];
                      const label = isOverdueSlot ? "Overdue" : slotLabel[status];
                      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": "mar.slot.button",
                          disabled: status !== "due",
                          onClick: () => handleCellClick(entry, slot),
                          className: cn(
                            "flex items-center",
                            isDue && !isOverdueSlot && "cursor-pointer hover:opacity-80"
                          ),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            StatusBadge,
                            {
                              variant,
                              label
                            }
                          )
                        }
                      ) }, slot);
                    })
                  ]
                }
              ),
              SLOTS.map((slot) => {
                const key = cellKey(entry.id, slot);
                if (expandedCell !== key) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-4 pb-3 pt-1 bg-muted/20 border-t border-border",
                    "data-ocid": "mar.action.panel",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: [
                        "Record Administration — ",
                        slot
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-end", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["administered", "held", "refused"].map((act) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `mar.action.${act}_button`,
                            onClick: () => setActionForm((p) => ({
                              ...p,
                              action: act
                            })),
                            className: cn(
                              "h-7 px-3 text-xs font-semibold rounded-sm border transition-all capitalize",
                              actionForm.action === act ? act === "administered" ? "bg-success text-success-foreground border-success" : "bg-danger text-danger-foreground border-danger" : "border-border text-foreground hover:bg-muted"
                            ),
                            children: act
                          },
                          act
                        )) }),
                        (actionForm.action === "held" || actionForm.action === "refused") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-48", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Reason (required)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Textarea,
                            {
                              "data-ocid": "mar.action.textarea",
                              value: actionForm.reason,
                              onChange: (e) => setActionForm((p) => ({
                                ...p,
                                reason: e.target.value
                              })),
                              rows: 2,
                              className: "mt-1 text-xs resize-none",
                              placeholder: "Document reason..."
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              size: "sm",
                              "data-ocid": "mar.action.save_button",
                              onClick: () => handleRecord(entry.id, slot),
                              className: "h-7 text-xs",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 mr-1" }),
                                "Save"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              variant: "ghost",
                              "data-ocid": "mar.action.cancel_button",
                              onClick: () => setExpandedCell(null),
                              className: "h-7 text-xs",
                              children: "Cancel"
                            }
                          )
                        ] })
                      ] })
                    ]
                  },
                  key
                );
              })
            ] }, entry.id);
          }) })
        ]
      },
      patientName
    )) }) })
  ] });
}
export {
  MedicationAdminRecord as default
};
