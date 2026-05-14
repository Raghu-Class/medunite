import { f as useActor, u as useDemoMode, r as reactExports, j as jsxRuntimeExports, B as Button, o as Search, T as TriangleAlert, U as Users } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { S as ShieldAlert } from "./shield-alert-CZH2jIqU.js";
const DEMO_PATIENTS = [
  {
    name: "James Hartwell",
    dob: "1971-04-12",
    mrn: "MRN-004",
    riskLevel: "low",
    prescribers90: 1,
    prescribers180: 1,
    totalMme: 30,
    lastFill: "12 days ago",
    history: [
      {
        drug: "Tramadol 50mg",
        schedule: "Sch IV",
        prescriber: "Dr. Sarah Johnson",
        pharmacy: "CVS #4821",
        dateFilled: "2026-03-02",
        daysSupply: 30,
        mmePerDay: 30
      }
    ],
    overlaps: []
  },
  {
    name: "Linda Marchetti",
    dob: "1968-09-27",
    mrn: "MRN-001",
    riskLevel: "high",
    prescribers90: 3,
    prescribers180: 4,
    totalMme: 145,
    lastFill: "8 days ago",
    history: [
      {
        drug: "Oxycodone 10mg",
        schedule: "Sch II",
        prescriber: "Dr. Sarah Johnson",
        pharmacy: "CVS #4821",
        dateFilled: "2026-03-06",
        daysSupply: 30,
        mmePerDay: 60
      },
      {
        drug: "Hydrocodone 5mg",
        schedule: "Sch III",
        prescriber: "Dr. Kevin Park (Pain Mgmt)",
        pharmacy: "Walgreens #2019",
        dateFilled: "2026-02-20",
        daysSupply: 30,
        mmePerDay: 25
      },
      {
        drug: "Oxycodone 10mg",
        schedule: "Sch II",
        prescriber: "Dr. Kevin Park (Pain Mgmt)",
        pharmacy: "Rite Aid #771",
        dateFilled: "2026-02-01",
        daysSupply: 28,
        mmePerDay: 60
      },
      {
        drug: "Alprazolam 1mg",
        schedule: "Sch IV",
        prescriber: "Dr. Anita Patel (Psychiatry)",
        pharmacy: "CVS #4821",
        dateFilled: "2026-03-01",
        daysSupply: 30,
        mmePerDay: 0
      },
      {
        drug: "Diazepam 5mg",
        schedule: "Sch IV",
        prescriber: "Dr. Sarah Johnson",
        pharmacy: "CVS #4821",
        dateFilled: "2026-02-10",
        daysSupply: 14,
        mmePerDay: 0
      },
      {
        drug: "Carisoprodol 350mg",
        schedule: "Sch IV",
        prescriber: "Dr. Luis Torres (Ortho)",
        pharmacy: "Walgreens #2019",
        dateFilled: "2026-01-28",
        daysSupply: 21,
        mmePerDay: 0
      },
      {
        drug: "Morphine ER 30mg",
        schedule: "Sch II",
        prescriber: "Dr. Kevin Park (Pain Mgmt)",
        pharmacy: "Rite Aid #771",
        dateFilled: "2026-01-10",
        daysSupply: 30,
        mmePerDay: 45
      },
      {
        drug: "Hydromorphone 4mg",
        schedule: "Sch II",
        prescriber: "Dr. Sarah Johnson",
        pharmacy: "CVS #4821",
        dateFilled: "2026-01-05",
        daysSupply: 10,
        mmePerDay: 32
      }
    ],
    overlaps: [
      {
        drug1: "Oxycodone 10mg (CVS)",
        drug2: "Oxycodone 10mg (Rite Aid)",
        overlapDays: 9
      },
      { drug1: "Alprazolam 1mg", drug2: "Diazepam 5mg", overlapDays: 21 }
    ]
  }
];
function PDMP({ onNavigate }) {
  const { actor: realActor } = useActor();
  const { isDemoMode, demoActor } = useDemoMode();
  const actor = isDemoMode ? demoActor : realActor;
  const [query, setQuery] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [searched, setSearched] = reactExports.useState(false);
  const handleSearch = () => {
    if (!query.trim()) return;
    const found = DEMO_PATIENTS.find(
      (p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.mrn.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found ?? null);
    setSearched(true);
    if (actor && found) {
      actor.createClinicalNote(
        4n,
        "pdmp-lookup",
        JSON.stringify({
          query,
          patientFound: found.name,
          riskLevel: found.riskLevel,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }),
        0n
      ).catch(() => {
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "pdmp.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 flex gap-3 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1",
            htmlFor: "pdmp-search",
            children: "Patient Name or MRN"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "pdmp-search",
            "data-ocid": "pdmp.search_input",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleSearch(),
            placeholder: 'Search — e.g. "Linda Marchetti" or "MRN-001"',
            className: "h-9 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "pdmp.primary_button",
          size: "sm",
          onClick: handleSearch,
          className: "h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/90",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3.5 h-3.5 mr-1.5" }),
            "Look Up"
          ]
        }
      )
    ] }),
    !searched && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground bg-muted/40 border border-border px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "inline w-3.5 h-3.5 mr-1.5 text-warning" }),
      "Demo patients: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "James Hartwell" }),
      " (low risk) ·",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Linda Marchetti" }),
      " (high risk — multiple prescribers, opioid overlap)"
    ] }),
    searched && !result && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border px-4 py-10 text-center text-sm text-muted-foreground",
        "data-ocid": "pdmp.empty_state",
        children: [
          "No PDMP record found for “",
          query,
          "”."
        ]
      }
    ),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "pdmp.panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onNavigate == null ? void 0 : onNavigate("patients"),
                className: "text-base font-bold text-primary underline-offset-2 hover:underline cursor-pointer bg-transparent border-none p-0",
                children: result.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              "DOB: ",
              result.dob,
              " · MRN: ",
              result.mrn
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatusBadge,
            {
              variant: result.riskLevel === "high" ? "danger" : "success",
              label: result.riskLevel === "high" ? "High Risk" : "Low Risk"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-3", children: [
          result.prescribers90 >= 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-warning/10 text-warning border border-warning/30 rounded-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
            "Multiple Prescribers (",
            result.prescribers90,
            " in 90 days)"
          ] }),
          result.totalMme >= 90 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-destructive/10 text-destructive border border-destructive/20 rounded-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
            "High MME: ",
            result.totalMme,
            " MME/day"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-muted text-muted-foreground border border-border rounded-sm", children: [
            "Last Fill: ",
            result.lastFill
          ] })
        ] })
      ] }),
      result.overlaps.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-destructive/5 border border-destructive/20 px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-destructive", children: "Overlapping Fills Detected" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: result.overlaps.map((ov, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `pdmp.overlap.item.${i + 1}`,
            className: "text-xs text-destructive bg-destructive/10 border border-destructive/20 px-3 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ov.drug1 }),
              " overlaps with",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ov.drug2 }),
              " — ",
              ov.overlapDays,
              " days concurrent"
            ]
          },
          `overlap-${ov.drug1}-${ov.drug2}`
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Provider Summary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold", children: "Prescribers (90 days)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground mt-1", children: result.prescribers90 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold", children: "Prescribers (180 days)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground mt-1", children: result.prescribers180 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Controlled Substance History" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "pdmp.table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
            "Drug Name",
            "Schedule",
            "Prescriber",
            "Pharmacy",
            "Date Filled",
            "Days Supply",
            "MME/Day"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableHead,
            {
              className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: result.history.map((rx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `pdmp.row.${i + 1}`,
              className: "hover:bg-muted/30 even:bg-muted/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: rx.drug }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: rx.schedule === "Sch II" ? "danger" : rx.schedule === "Sch III" ? "warning" : "neutral",
                    label: rx.schedule
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs px-4 py-2.5 text-muted-foreground", children: rx.prescriber }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs px-4 py-2.5 text-muted-foreground", children: rx.pharmacy }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs px-4 py-2.5 text-muted-foreground", children: rx.dateFilled }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs px-4 py-2.5 text-center", children: [
                  rx.daysSupply,
                  "d"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs px-4 py-2.5", children: rx.mmePerDay > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `font-semibold ${rx.mmePerDay >= 90 ? "text-destructive" : rx.mmePerDay >= 50 ? "text-warning" : "text-foreground"}`,
                    children: rx.mmePerDay
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) })
              ]
            },
            `${rx.drug}-${rx.dateFilled}-${rx.pharmacy}`
          )) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PDMP as default
};
