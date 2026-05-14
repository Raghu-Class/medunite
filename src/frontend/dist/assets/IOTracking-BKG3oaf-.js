import { c as createLucideIcon, r as reactExports, n as DEMO_PATIENTS, f as useActor, j as jsxRuntimeExports, A as Activity, B as Button, p as React, i as ue } from "./index-4utdZC3E.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-CMzOpeqR.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { P as Plus } from "./plus-CoKHV7of.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode);
const INTAKE_CATEGORIES = [
  "IV Fluids",
  "Oral",
  "Tube Feed",
  "Blood Product",
  "TPN"
];
const OUTPUT_CATEGORIES = [
  "Urine",
  "Drain",
  "Emesis",
  "Stool",
  "Nasogastric",
  "Wound"
];
const SEED_DATA = {
  "James Harrington": [
    {
      id: "io-1",
      type: "intake",
      category: "IV Fluids",
      amount: 250,
      time: "07:00",
      nurse: "RN. Sarah Park"
    },
    {
      id: "io-2",
      type: "intake",
      category: "IV Fluids",
      amount: 250,
      time: "11:00",
      nurse: "RN. Sarah Park"
    },
    {
      id: "io-3",
      type: "intake",
      category: "Oral",
      amount: 180,
      time: "08:30",
      nurse: "RN. Sarah Park"
    },
    {
      id: "io-4",
      type: "intake",
      category: "Oral",
      amount: 120,
      time: "13:00",
      nurse: "RN. Sarah Park"
    },
    {
      id: "io-5",
      type: "output",
      category: "Urine",
      amount: 200,
      time: "08:00",
      nurse: "RN. Sarah Park"
    },
    {
      id: "io-6",
      type: "output",
      category: "Urine",
      amount: 175,
      time: "11:30",
      nurse: "RN. Sarah Park"
    },
    {
      id: "io-7",
      type: "output",
      category: "Drain",
      amount: 45,
      time: "09:00",
      nurse: "RN. Sarah Park",
      note: "JP drain — serosanguineous"
    },
    {
      id: "io-8",
      type: "output",
      category: "Drain",
      amount: 30,
      time: "13:00",
      nurse: "RN. Sarah Park"
    }
  ],
  "Margaret Chen": [
    {
      id: "io-9",
      type: "intake",
      category: "Oral",
      amount: 240,
      time: "07:30",
      nurse: "RN. Maria Gonzalez"
    },
    {
      id: "io-10",
      type: "intake",
      category: "Oral",
      amount: 180,
      time: "12:00",
      nurse: "RN. Maria Gonzalez"
    },
    {
      id: "io-11",
      type: "intake",
      category: "IV Fluids",
      amount: 125,
      time: "10:00",
      nurse: "RN. Maria Gonzalez"
    },
    {
      id: "io-12",
      type: "output",
      category: "Urine",
      amount: 320,
      time: "09:00",
      nurse: "RN. Maria Gonzalez"
    },
    {
      id: "io-13",
      type: "output",
      category: "Urine",
      amount: 280,
      time: "13:00",
      nurse: "RN. Maria Gonzalez"
    }
  ],
  "Linda Washington": [
    {
      id: "io-14",
      type: "intake",
      category: "IV Fluids",
      amount: 500,
      time: "06:00",
      nurse: "RN. Angela Reyes",
      note: "Normal saline 0.9%"
    },
    {
      id: "io-15",
      type: "intake",
      category: "IV Fluids",
      amount: 500,
      time: "10:00",
      nurse: "RN. Angela Reyes"
    },
    {
      id: "io-16",
      type: "output",
      category: "Urine",
      amount: 60,
      time: "08:00",
      nurse: "RN. Angela Reyes",
      note: "Dialysis patient — low UO expected"
    },
    {
      id: "io-17",
      type: "output",
      category: "Urine",
      amount: 40,
      time: "12:00",
      nurse: "RN. Angela Reyes"
    }
  ]
};
const patientNames = DEMO_PATIENTS.slice(0, 10).map((p) => p.name);
function get8HourPeriod(time) {
  const hour = Number.parseInt(time.split(":")[0] ?? "0");
  if (hour >= 7 && hour < 15) return "07:00–15:00";
  if (hour >= 15 && hour < 23) return "15:00–23:00";
  return "23:00–07:00";
}
function IOTracking({
  onNavigate: _onNavigate
}) {
  const [selectedPatient, setSelectedPatient] = reactExports.useState(patientNames[0] ?? "");
  const [entries, setEntries] = reactExports.useState(SEED_DATA);
  const [loading] = reactExports.useState(false);
  const { actor } = useActor();
  const [showIntakeForm, setShowIntakeForm] = reactExports.useState(false);
  const [showOutputForm, setShowOutputForm] = reactExports.useState(false);
  const [intakeForm, setIntakeForm] = reactExports.useState({
    category: "IV Fluids",
    amount: "",
    time: "",
    nurse: "",
    note: ""
  });
  const [outputForm, setOutputForm] = reactExports.useState({
    category: "Urine",
    amount: "",
    time: "",
    nurse: "",
    note: ""
  });
  const patientEntries = entries[selectedPatient] ?? [];
  const intakeEntries = patientEntries.filter((e) => e.type === "intake").sort((a, b) => a.time.localeCompare(b.time));
  const outputEntries = patientEntries.filter((e) => e.type === "output").sort((a, b) => a.time.localeCompare(b.time));
  const totalIntake = intakeEntries.reduce((s, e) => s + e.amount, 0);
  const totalOutput = outputEntries.reduce((s, e) => s + e.amount, 0);
  const fluidBalance = totalIntake - totalOutput;
  const addEntry = (type, form) => {
    if (!form.amount || !form.time || !form.nurse) return;
    const entry = {
      id: `io-${Date.now()}`,
      type,
      category: form.category,
      amount: Number(form.amount),
      time: form.time,
      nurse: form.nurse,
      note: form.note || void 0
    };
    setEntries((prev) => ({
      ...prev,
      [selectedPatient]: [...prev[selectedPatient] ?? [], entry]
    }));
    if (actor) {
      actor.createClinicalNote(1n, "io-tracking", JSON.stringify(entry), 1n).then(() => ue.success("I&O entry saved")).catch(() => {
      });
    }
    if (type === "intake") {
      setIntakeForm({
        category: "IV Fluids",
        amount: "",
        time: "",
        nurse: "",
        note: ""
      });
      setShowIntakeForm(false);
    } else {
      setOutputForm({
        category: "Urine",
        amount: "",
        time: "",
        nurse: "",
        note: ""
      });
      setShowOutputForm(false);
    }
  };
  const IOForm = ({
    type,
    form,
    setForm,
    onClose
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-2 p-3 bg-muted/30 border border-border rounded-sm space-y-2",
      "data-ocid": `io.${type}-form.panel`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: [
          "Log ",
          type === "intake" ? "Intake" : "Output",
          " Entry"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `io-${type}-cat`,
                className: "block text-xs text-muted-foreground mb-0.5",
                children: "Type"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: `io-${type}-cat`,
                "data-ocid": `io.${type}-category.select`,
                value: form.category,
                onChange: (e) => setForm((f) => ({ ...f, category: e.target.value })),
                className: "w-full h-7 px-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none",
                children: (type === "intake" ? INTAKE_CATEGORIES : OUTPUT_CATEGORIES).map(
                  (c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `io-${type}-amt`,
                className: "block text-xs text-muted-foreground mb-0.5",
                children: "Amount (mL)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                id: `io-${type}-amt`,
                "data-ocid": `io.${type}-amount.input`,
                value: form.amount,
                onChange: (e) => setForm((f) => ({ ...f, amount: e.target.value })),
                placeholder: "0",
                className: "w-full h-7 px-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `io-${type}-time`,
                className: "block text-xs text-muted-foreground mb-0.5",
                children: "Time"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "time",
                id: `io-${type}-time`,
                "data-ocid": `io.${type}-time.input`,
                value: form.time,
                onChange: (e) => setForm((f) => ({ ...f, time: e.target.value })),
                className: "w-full h-7 px-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `io-${type}-nurse`,
                className: "block text-xs text-muted-foreground mb-0.5",
                children: "Nurse"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: `io-${type}-nurse`,
                "data-ocid": `io.${type}-nurse.input`,
                value: form.nurse,
                onChange: (e) => setForm((f) => ({ ...f, nurse: e.target.value })),
                placeholder: "RN. Name",
                className: "w-full h-7 px-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `io-${type}-note`,
                className: "block text-xs text-muted-foreground mb-0.5",
                children: "Notes (optional)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: `io-${type}-note`,
                "data-ocid": `io.${type}-note.input`,
                value: form.note,
                onChange: (e) => setForm((f) => ({ ...f, note: e.target.value })),
                placeholder: "Additional notes...",
                className: "w-full h-7 px-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              "data-ocid": `io.${type}-submit.button`,
              onClick: () => addEntry(type, form),
              className: "h-6 text-xs",
              children: "Save Entry"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              "data-ocid": `io.${type}-cancel.button`,
              onClick: onClose,
              className: "h-6 text-xs",
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
  function renderEntryTable(entriesList, type) {
    const periods = {};
    for (const e of entriesList) {
      const period = get8HourPeriod(e.time);
      if (!periods[period]) periods[period] = [];
      periods[period].push(e);
    }
    const periodOrder = ["07:00–15:00", "15:00–23:00", "23:00–07:00"];
    const sortedPeriods = periodOrder.filter((p) => periods[p]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[12px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Amount (mL)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Nurse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Note" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        sortedPeriods.map((period) => {
          const periodEntries = periods[period] ?? [];
          const subtotal = periodEntries.reduce((s, e) => s + e.amount, 0);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
            periodEntries.map((e, ei) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border/50 hover:bg-muted/20 transition-colors",
                "data-ocid": `io.${type}.item.${ei + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-foreground", children: e.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right font-medium tabular-nums text-foreground", children: e.amount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: e.time }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: e.nurse }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground italic text-xs", children: e.note ?? "" })
                ]
              },
              e.id
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", colSpan: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: [
                period,
                " Subtotal"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 text-right font-bold text-foreground tabular-nums", children: [
                subtotal,
                " mL"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3 })
            ] })
          ] }, period);
        }),
        entriesList.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "td",
          {
            colSpan: 5,
            className: "px-3 py-4 text-center text-[12px] text-muted-foreground italic",
            children: [
              "No ",
              type,
              " entries recorded"
            ]
          }
        ) })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "io-tracking.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Intake & Output Tracking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 bg-muted text-muted-foreground rounded-sm font-medium", children: "24-Hour" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          "data-ocid": "io.patient.select",
          value: selectedPatient,
          onChange: (e) => setSelectedPatient(e.target.value),
          className: "h-7 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none min-w-[160px]",
          children: patientNames.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: name, children: name }, name))
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", "data-ocid": "io.balance.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-primary mb-1", children: "Total Intake" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold tabular-nums text-primary", children: [
          totalIntake,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "mL" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          intakeEntries.length,
          " entries"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-warning mb-1", children: "Total Output" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold tabular-nums text-warning", children: [
          totalOutput,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "mL" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          outputEntries.length,
          " entries"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1", children: "Net Balance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: `text-2xl font-bold tabular-nums ${fluidBalance >= 0 ? "text-success" : "text-destructive"}`,
            children: [
              fluidBalance >= 0 ? "+" : "",
              fluidBalance,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "mL" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: fluidBalance >= 0 ? "Positive balance" : "Negative balance" })
      ] }) })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "io-tracking.loading_state", children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4" })
        ]
      },
      k
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border shadow-card", "data-ocid": "io.intake.panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "px-4 py-3 border-b border-border flex-row items-center justify-between space-y-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 text-primary" }),
            "Intake"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-primary tabular-nums", children: [
              totalIntake,
              " mL"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "io.add-intake.button",
                onClick: () => setShowIntakeForm((v) => !v),
                className: "h-6 text-xs gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                  "Add"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
          showIntakeForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IOForm,
            {
              type: "intake",
              form: intakeForm,
              setForm: setIntakeForm,
              onClose: () => setShowIntakeForm(false)
            }
          ) }),
          renderEntryTable(intakeEntries, "intake")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border shadow-card", "data-ocid": "io.output.panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "px-4 py-3 border-b border-border flex-row items-center justify-between space-y-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5 text-warning" }),
            "Output"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-warning tabular-nums", children: [
              totalOutput,
              " mL"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "io.add-output.button",
                onClick: () => setShowOutputForm((v) => !v),
                className: "h-6 text-xs gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                  "Add"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
          showOutputForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IOForm,
            {
              type: "output",
              form: outputForm,
              setForm: setOutputForm,
              onClose: () => setShowOutputForm(false)
            }
          ) }),
          renderEntryTable(outputEntries, "output")
        ] })
      ] })
    ] })
  ] });
}
export {
  IOTracking as default
};
