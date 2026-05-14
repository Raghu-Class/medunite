import { c as createLucideIcon, u as useDemoMode, f as useActor, r as reactExports, aj as DEMO_REFILL_REQUESTS, ak as DEMO_EPRESCRIPTIONS, i as ue, j as jsxRuntimeExports, C as ChevronDown, T as TriangleAlert } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { c as checkInteractions, C as CircleX } from "./drugInteractions-bwHfQfeU.js";
import { S as Send } from "./send-DfSjPJ-o.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
import { I as Info } from "./info-bbvBvbxz.js";
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
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode);
const MOCK_PATIENT_MEDS = {
  "Alice Johnson": ["Lisinopril 10mg", "Metformin 500mg", "Aspirin 81mg"],
  "Bob Martinez": ["Warfarin 5mg", "Metformin 1000mg"],
  "Carol White": ["Amoxicillin 250mg"]
};
const rxStatusVariant = {
  pending: "warning",
  verified: "info",
  dispensed: "success",
  rejected: "danger"
};
const SEVERITY_STYLES = {
  contraindicated: {
    container: "bg-destructive/8 border border-destructive/30 text-destructive",
    badge: "bg-destructive text-destructive-foreground",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
    label: "⛔ CONTRAINDICATED"
  },
  major: {
    container: "bg-warning/10 border border-warning/40 text-warning-foreground",
    badge: "bg-warning/100 text-white",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
    label: "⚠ MAJOR"
  },
  moderate: {
    container: "bg-warning/0.08 border border-warning/0.3 text-warning",
    badge: "bg-warning text-white",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
    label: "! MODERATE"
  },
  minor: {
    container: "bg-slate-50 border border-slate-200 text-slate-700",
    badge: "bg-slate-400 text-white",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3 h-3" }),
    label: "ℹ MINOR"
  }
};
function InteractionAlertCard({ alert }) {
  const style = SEVERITY_STYLES[alert.severity];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `px-3 py-2.5 text-xs rounded-sm ${style.container}`,
      role: "alert",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm ${style.badge}`,
              children: [
                style.icon,
                style.label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
            alert.drug1,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "×" }),
            " ",
            alert.drug2
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Effect:" }),
          " ",
          alert.clinicalEffect
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Management:" }),
          " ",
          alert.management
        ] })
      ]
    }
  );
}
function AddPrescriptionForm({
  onAdd,
  onCancel,
  loading
}) {
  const [form, setForm] = reactExports.useState({
    patientName: "",
    medication: "",
    dose: "",
    prescribedBy: "",
    notes: ""
  });
  const [interactions, setInteractions] = reactExports.useState([]);
  const debounceRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!form.medication.trim() || !form.patientName.trim()) {
      setInteractions([]);
      return;
    }
    debounceRef.current = setTimeout(() => {
      const currentMeds = MOCK_PATIENT_MEDS[form.patientName] ?? [];
      const found = checkInteractions(form.medication, currentMeds);
      setInteractions(found);
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [form.medication, form.patientName]);
  const handleSubmit = async () => {
    if (!form.patientName || !form.medication || !form.dose || !form.prescribedBy) {
      ue.error(
        "Patient name, medication, dose, and prescriber are required"
      );
      return;
    }
    await onAdd(form);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "px-4 py-3 border-b border-border bg-muted/20",
      "data-ocid": "pharmacy.add.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3", children: "New Prescription" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-44", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Patient Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "pharmacy.add.patient_name.input",
                value: form.patientName,
                onChange: (e) => setForm((p) => ({ ...p, patientName: e.target.value })),
                className: "mt-1 h-7 text-xs",
                placeholder: "e.g. Alice Johnson"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-36", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Medication" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "pharmacy.add.medication.input",
                value: form.medication,
                onChange: (e) => setForm((p) => ({ ...p, medication: e.target.value })),
                className: "mt-1 h-7 text-xs",
                placeholder: "e.g. Lisinopril",
                autoComplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Dose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "pharmacy.add.dose.input",
                value: form.dose,
                onChange: (e) => setForm((p) => ({ ...p, dose: e.target.value })),
                className: "mt-1 h-7 text-xs",
                placeholder: "e.g. 10mg daily"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-36", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Prescribed By" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "pharmacy.add.prescriber.input",
                value: form.prescribedBy,
                onChange: (e) => setForm((p) => ({ ...p, prescribedBy: e.target.value })),
                className: "mt-1 h-7 text-xs",
                placeholder: "Dr. Name"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              "data-ocid": "pharmacy.add.notes.textarea",
              value: form.notes,
              onChange: (e) => setForm((p) => ({ ...p, notes: e.target.value })),
              className: "mt-1 text-xs min-h-[48px] resize-none",
              placeholder: "Optional notes..."
            }
          )
        ] }),
        interactions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-3 space-y-2",
            "data-ocid": "pharmacy.add.interactions.panel",
            "aria-label": "Drug interaction alerts",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
                "Drug Interaction Alerts (",
                interactions.length,
                ")"
              ] }),
              interactions.map((alert) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                InteractionAlertCard,
                {
                  alert
                },
                `${alert.drug1}-${alert.drug2}-${alert.severity}`
              ))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "pharmacy.add.submit_button",
              onClick: handleSubmit,
              disabled: loading,
              className: "h-7 px-3 text-xs font-semibold bg-primary text-primary-foreground rounded-sm flex items-center gap-1.5 disabled:opacity-60",
              children: [
                loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }),
                "Add Prescription"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "pharmacy.add.cancel_button",
              onClick: onCancel,
              className: "h-7 px-3 text-xs font-semibold border border-border text-muted-foreground hover:text-foreground rounded-sm",
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
function Pharmacy() {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor, isFetching } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [prescriptions, setPrescriptions] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [addingRx, setAddingRx] = reactExports.useState(false);
  const [updatingId, setUpdatingId] = reactExports.useState(null);
  const [refillRequests, setRefillRequests] = reactExports.useState(DEMO_REFILL_REQUESTS);
  const [expandedDeny, setExpandedDeny] = reactExports.useState(null);
  const [denyReason, setDenyReason] = reactExports.useState("");
  const [reloadTick, setReloadTick] = reactExports.useState(0);
  const [ePrescriptions, setEPrescriptions] = reactExports.useState(
    isDemoMode ? DEMO_EPRESCRIPTIONS : []
  );
  const [showERxPanel, setShowERxPanel] = reactExports.useState(true);
  const [formularyFilter, setFormularyFilter] = reactExports.useState(() => {
    try {
      const p = JSON.parse(
        localStorage.getItem("medunite_prefs_Pharmacist") || "{}"
      );
      if (p.formulary && p.formulary !== "All") return p.formulary;
    } catch {
    }
    return "All";
  });
  const FORMULARY_OPTIONS = ["All", "Retail", "Mail Order", "Specialty"];
  const [transmittingId, setTransmittingId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!actor) return;
    if (!isDemoMode && isFetching) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await actor.listPrescriptions();
        if (!cancelled) setPrescriptions(data);
      } catch {
        if (!cancelled) ue.error("Failed to load prescriptions");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [actor, isFetching, reloadTick, isDemoMode]);
  const handleAdd = async (data) => {
    if (!actor) return;
    setAddingRx(true);
    try {
      await actor.createPrescription(
        BigInt(0),
        data.patientName,
        data.medication,
        data.dose,
        data.prescribedBy,
        data.notes
      );
      ue.success("Prescription added");
      setShowForm(false);
      setReloadTick((t) => t + 1);
    } catch {
      ue.error("Failed to add prescription");
    } finally {
      setAddingRx(false);
    }
  };
  const handleStatusChange = async (id, newStatus) => {
    if (!actor) return;
    setUpdatingId(id);
    try {
      await actor.updatePrescriptionStatus(id, newStatus);
      setPrescriptions(
        (prev) => prev.map((rx) => rx.id === id ? { ...rx, status: newStatus } : rx)
      );
      ue.success(`Prescription ${newStatus}`);
    } catch {
      ue.error("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };
  const pendingQueue = prescriptions.filter((rx) => rx.status === "pending");
  const verifiedQueue = prescriptions.filter((rx) => rx.status === "verified");
  const pendingRefills = refillRequests.filter((r) => r.status === "pending");
  const handleTransmit = async (id) => {
    setTransmittingId(id);
    setEPrescriptions(
      (prev) => prev.map(
        (rx) => rx.id === id ? { ...rx, status: "transmitted" } : rx
      )
    );
    setTransmittingId(null);
    ue.success("Prescription transmitted to pharmacy network.");
  };
  const handleApproveRefill = (req) => {
    setRefillRequests(
      (prev) => prev.map(
        (r) => r.id === req.id ? { ...r, status: "approved" } : r
      )
    );
    setPrescriptions((prev) => [
      ...prev,
      {
        id: BigInt(Date.now()),
        patientId: BigInt(0),
        patientName: req.patientName,
        medication: req.medication,
        dose: "As directed",
        prescribedBy: "Refill Request",
        notes: req.notes || "Patient refill request",
        status: "pending",
        createdAt: BigInt(Date.now()) * 1000000n
      }
    ]);
    ue.success(`Refill approved for ${req.medication}`);
    if (actor) {
      actor.createPrescription(
        BigInt(0),
        req.patientName,
        req.medication,
        "As directed",
        "Dr. Auto-Approved",
        "Refill request approved"
      ).catch(() => {
      });
    }
  };
  const handleDenyRefill = (req) => {
    if (!denyReason.trim()) {
      ue.error("Please enter a denial reason");
      return;
    }
    setRefillRequests(
      (prev) => prev.map(
        (r) => r.id === req.id ? { ...r, status: "denied", denialReason: denyReason } : r
      )
    );
    setExpandedDeny(null);
    setDenyReason("");
    ue.success("Refill request denied");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "pharmacy.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-wrap", children: [
      FORMULARY_OPTIONS.map((fo) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setFormularyFilter(fo),
          className: [
            "px-3 py-1 text-xs rounded border transition-colors",
            formularyFilter === fo ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
          ].join(" "),
          children: fo
        },
        fo
      )),
      formularyFilter !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 text-xs text-muted-foreground", children: [
        "Showing ",
        formularyFilter,
        " queue"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card rounded-sm",
        "data-ocid": "pharmacy.erx.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "pharmacy.erx.toggle",
              onClick: () => setShowERxPanel((v) => !v),
              className: "w-full px-4 py-2.5 border-b border-border bg-muted/40 flex items-center gap-2 hover:bg-muted/60 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground flex-1 text-left", children: "E-Prescribing" }),
                ePrescriptions.filter((r) => r.status === "draft").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 text-xs font-bold bg-warning/15 text-warning border border-warning/30 rounded-sm", children: [
                  ePrescriptions.filter((r) => r.status === "draft").length,
                  " draft"
                ] }),
                showERxPanel ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground" })
              ]
            }
          ),
          showERxPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/40 hover:bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Drug" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4 hidden sm:table-cell", children: "Prescriber" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4 hidden md:table-cell", children: "DEA#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4 hidden md:table-cell", children: "Timestamp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: ePrescriptions.map((rx, i) => {
              const statusVariant = {
                draft: "warning",
                transmitted: "info",
                confirmed: "success",
                failed: "danger"
              };
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  "data-ocid": `pharmacy.erx.row.${i + 1}`,
                  className: "hover:bg-muted/30 border-l-2 border-l-transparent hover:border-l-accent transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2", children: rx.patientName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-sm px-4 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: rx.drug }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: rx.dose })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2 hidden sm:table-cell", children: rx.prescriber }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs px-4 py-2 hidden md:table-cell text-muted-foreground", children: rx.deaNumber }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: statusVariant[rx.status] ?? "neutral",
                        label: rx.status
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs px-4 py-2 hidden md:table-cell text-muted-foreground", children: new Date(rx.timestamp).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "px-4 py-2", children: [
                      rx.status === "draft" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `pharmacy.erx.transmit_button.${i + 1}`,
                          onClick: () => handleTransmit(rx.id),
                          disabled: transmittingId === rx.id,
                          className: "h-6 px-2.5 text-xs font-semibold bg-primary text-primary-foreground rounded-sm flex items-center gap-1 disabled:opacity-60 hover:bg-primary/90 transition-colors",
                          children: [
                            transmittingId === rx.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-2.5 h-2.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-2.5 h-2.5" }),
                            transmittingId === rx.id ? "Sending..." : "Transmit"
                          ]
                        }
                      ),
                      rx.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `pharmacy.erx.retry_button.${i + 1}`,
                          onClick: () => handleTransmit(rx.id),
                          disabled: transmittingId === rx.id,
                          className: "h-6 px-2.5 text-xs font-semibold border border-danger/30 text-danger rounded-sm hover:bg-danger/10 disabled:opacity-60 transition-colors",
                          children: "Retry"
                        }
                      )
                    ] })
                  ]
                },
                rx.id
              );
            }) })
          ] })
        ]
      }
    ),
    refillRequests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card rounded-sm",
        "data-ocid": "pharmacy.refills.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Refill Requests" }),
            pendingRefills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 px-1.5 py-0.5 text-xs font-bold bg-primary/10 text-primary border border-primary/20 rounded-sm", children: [
              pendingRefills.length,
              " pending"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: refillRequests.map((req, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `pharmacy.refill.item.${idx + 1}`,
              className: "px-4 py-3 space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: req.medication }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        StatusBadge,
                        {
                          variant: req.status === "pending" ? "warning" : req.status === "approved" ? "success" : "danger",
                          label: req.status
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: req.patientName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Requested ",
                        req.requestedAt
                      ] }),
                      req.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "· ",
                        req.notes
                      ] })
                    ] }),
                    req.denialReason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-danger/80", children: [
                      "Denied: ",
                      req.denialReason
                    ] })
                  ] }),
                  req.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `pharmacy.refill.approve_button.${idx + 1}`,
                        onClick: () => handleApproveRefill(req),
                        className: "px-2.5 py-1 text-xs font-semibold bg-success/10 text-success border border-success/20 rounded-sm hover:bg-success/20 transition-colors",
                        children: "Approve"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `pharmacy.refill.delete_button.${idx + 1}`,
                        onClick: () => {
                          setExpandedDeny(
                            expandedDeny === req.id ? null : req.id
                          );
                          setDenyReason("");
                        },
                        className: "px-2.5 py-1 text-xs font-semibold bg-danger/10 text-danger border border-danger/20 rounded-sm hover:bg-danger/20 transition-colors",
                        children: "Deny"
                      }
                    )
                  ] })
                ] }),
                expandedDeny === req.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: `deny-reason-${req.id}`,
                        className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1",
                        children: "Denial Reason"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: `deny-reason-${req.id}`,
                        "data-ocid": `pharmacy.refill.deny_reason.input.${idx + 1}`,
                        value: denyReason,
                        onChange: (e) => setDenyReason(e.target.value),
                        placeholder: "e.g. Requires prior authorization",
                        className: "h-7 w-full text-xs border border-border bg-background px-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `pharmacy.refill.confirm_button.${idx + 1}`,
                      onClick: () => handleDenyRefill(req),
                      className: "h-7 px-2.5 text-xs font-semibold bg-danger text-white rounded-sm hover:bg-danger/90 transition-colors",
                      children: "Confirm Deny"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `pharmacy.refill.cancel_button.${idx + 1}`,
                      onClick: () => setExpandedDeny(null),
                      className: "h-7 px-2.5 text-xs font-semibold border border-border text-muted-foreground rounded-sm hover:text-foreground",
                      children: "Cancel"
                    }
                  )
                ] })
              ]
            },
            req.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "pharmacy.primary_button",
        onClick: () => setShowForm((v) => !v),
        className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
          "Add Prescription"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddPrescriptionForm,
      {
        onAdd: handleAdd,
        onCancel: () => setShowForm(false),
        loading: addingRx
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Verification Queue" }),
        pendingQueue.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 px-1.5 py-0.5 text-xs font-bold bg-warning/0.1 text-warning border border-warning/0.25 rounded-sm", children: [
          pendingQueue.length,
          " pending"
        ] }),
        verifiedQueue.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 px-1.5 py-0.5 text-xs font-bold bg-primary/10 text-primary border border-primary/20 rounded-sm", children: [
          verifiedQueue.length,
          " to dispense"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-4 space-y-2",
          "data-ocid": "pharmacy.queue.loading_state",
          children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-full" }, i))
        }
      ) : pendingQueue.length === 0 && verifiedQueue.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "px-4 py-6 text-center",
          "data-ocid": "pharmacy.queue.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-7 h-7 mx-auto mb-2 text-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No prescriptions pending verification" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "pharmacy.queue.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/40 hover:bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Medication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Dose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Prescribed By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: [...pendingQueue, ...verifiedQueue].map((rx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `pharmacy.queue.row.${i + 1}`,
            className: "hover:bg-muted/30 border-l-2 border-l-transparent hover:border-l-accent transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2", children: rx.patientName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2", children: rx.medication }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm px-4 py-2", children: rx.dose }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2", children: rx.prescribedBy }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: rxStatusVariant[rx.status] ?? "neutral",
                  label: rx.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                rx.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `pharmacy.queue.verify_button.${i + 1}`,
                      onClick: () => handleStatusChange(rx.id, "verified"),
                      disabled: updatingId === rx.id,
                      className: "h-6 px-2 text-xs font-semibold bg-primary text-primary-foreground rounded-sm disabled:opacity-60 flex items-center gap-1",
                      children: [
                        updatingId === rx.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-2.5 h-2.5 animate-spin" }) : null,
                        "Verify"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `pharmacy.queue.reject_button.${i + 1}`,
                      onClick: () => handleStatusChange(rx.id, "rejected"),
                      disabled: updatingId === rx.id,
                      className: "h-6 px-2 text-xs font-semibold border border-border text-destructive hover:bg-destructive/5 rounded-sm disabled:opacity-60",
                      children: "Reject"
                    }
                  )
                ] }),
                rx.status === "verified" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `pharmacy.queue.dispense_button.${i + 1}`,
                    onClick: () => handleStatusChange(rx.id, "dispensed"),
                    disabled: updatingId === rx.id,
                    className: "h-6 px-2 text-xs font-semibold bg-success text-white rounded-sm disabled:opacity-60 flex items-center gap-1 hover:bg-success/0.85",
                    children: [
                      updatingId === rx.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-2.5 h-2.5 animate-spin" }) : null,
                      "Dispense"
                    ]
                  }
                )
              ] }) })
            ]
          },
          String(rx.id)
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 border-b border-border bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "All Prescriptions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs text-muted-foreground", children: [
          "(",
          prescriptions.length,
          ")"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-4 space-y-2",
          "data-ocid": "pharmacy.table.loading_state",
          children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-full" }, i))
        }
      ) : prescriptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "px-4 py-6 text-center",
          "data-ocid": "pharmacy.table.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No prescriptions yet" })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "pharmacy.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/40 hover:bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Medication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Dose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Prescribed By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-8 px-4", children: "Notes" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: prescriptions.map((rx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `pharmacy.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: rx.patientName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: rx.medication }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm px-4 py-2.5", children: rx.dose }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: rx.prescribedBy }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: rxStatusVariant[rx.status] ?? "neutral",
                  label: rx.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs px-4 py-2.5 text-muted-foreground max-w-xs truncate", children: rx.notes || "—" })
            ]
          },
          String(rx.id)
        )) })
      ] })
    ] })
  ] });
}
export {
  Pharmacy as default
};
