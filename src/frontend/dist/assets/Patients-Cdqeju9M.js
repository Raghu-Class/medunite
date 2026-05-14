import { c as createLucideIcon, u as useDemoMode, f as useActor, r as reactExports, g as useQueryClient, i as ue, j as jsxRuntimeExports, p as React, T as TriangleAlert, X, B as Button, P as Pill, F as FlaskConical, ai as Calendar, l as ClipboardList, a as Stethoscope, o as Search, C as ChevronDown } from "./index-4utdZC3E.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { I as Input } from "./input-B6WlinMn.js";
import { S as Switch } from "./switch-Rr3vJljY.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D2sDVimt.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { a as usePatients, g as useMedications, c as useLabResults, u as useAppointments, h as useClinicalNotes, e as usePrescriptions } from "./useBackendData-DW6vRqpq.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as ConsentsTab } from "./ConsentsTab-BoPwNeOD.js";
import { S as ShieldAlert } from "./shield-alert-CZH2jIqU.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { L as LoaderCircle } from "./loader-circle-C8Vxse_z.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import "./index-BSY8sZ87.js";
import "./checkbox-B8IMGtpd.js";
import "./select-D0xeunuB.js";
import "./index-IXOTxK3N.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
];
const GitMerge = createLucideIcon("git-merge", __iconNode);
const PatientsContext = reactExports.createContext(null);
function usePatientsContext() {
  const ctx = reactExports.useContext(PatientsContext);
  if (!ctx)
    throw new Error("usePatientsContext must be used within PatientsProvider");
  return ctx;
}
function detectDuplicates(patients) {
  const pairs = [];
  for (let i = 0; i < patients.length; i++) {
    for (let j = i + 1; j < patients.length; j++) {
      const a = patients[i];
      const b = patients[j];
      const sameName = a.name.toLowerCase() === b.name.toLowerCase();
      const sameDob = a.dateOfBirth === b.dateOfBirth;
      const samePhone = a.phone && b.phone && a.phone === b.phone;
      if (sameName && sameDob) {
        pairs.push({ a, b, reason: "Same name & date of birth" });
      } else if (sameName && samePhone) {
        pairs.push({ a, b, reason: "Same name & phone number" });
      }
    }
  }
  return pairs;
}
const LAB_REFERENCE_RANGES = {
  HbA1c: {
    display: "4.0–5.6%",
    getFlag: (v) => v < 5.7 ? "normal" : v < 6.5 ? "high" : "critical"
  },
  Potassium: {
    display: "3.5–5.0 mEq/L",
    getFlag: (v) => {
      if (v < 2.5 || v > 6.5) return "critical";
      if (v < 3.5) return "low";
      if (v > 5) return "high";
      return "normal";
    }
  },
  Glucose: {
    display: "70–99 mg/dL",
    getFlag: (v) => {
      if (v < 40 || v > 500) return "critical";
      if (v < 70) return "low";
      if (v >= 100) return "high";
      return "normal";
    }
  },
  Sodium: {
    display: "135–145 mEq/L",
    getFlag: (v) => {
      if (v < 125 || v > 155) return "critical";
      if (v < 135) return "low";
      if (v > 145) return "high";
      return "normal";
    }
  },
  Creatinine: {
    display: "0.7–1.3 mg/dL",
    getFlag: (v) => {
      if (v > 4) return "critical";
      if (v > 1.3) return "high";
      if (v < 0.7) return "low";
      return "normal";
    }
  },
  Hemoglobin: {
    display: "12.0–17.5 g/dL",
    getFlag: (v) => {
      if (v < 7) return "critical";
      if (v < 12) return "low";
      if (v > 17.5) return "high";
      return "normal";
    }
  },
  WBC: {
    display: "4.5–11.0 K/µL",
    getFlag: (v) => {
      if (v < 2 || v > 20) return "critical";
      if (v < 4.5) return "low";
      if (v > 11) return "high";
      return "normal";
    }
  }
};
function getLabFlag(testName, resultStr, isCritical) {
  if (isCritical) return "critical";
  const val = Number.parseFloat(resultStr);
  if (Number.isNaN(val)) return "normal";
  const ref = LAB_REFERENCE_RANGES[testName];
  if (ref) return ref.getFlag(val);
  return "normal";
}
const flagVariant = {
  normal: "success",
  low: "warning",
  high: "warning",
  critical: "danger"
};
const flagLabel = {
  normal: "Normal",
  low: "Low",
  high: "High",
  critical: "Critical"
};
function PatientsProvider({ children }) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const [search, setSearch] = reactExports.useState("");
  const [patients, setPatients] = reactExports.useState([]);
  const [allMedications, setAllMedications] = reactExports.useState([]);
  const [allLabResults, setAllLabResults] = reactExports.useState([]);
  const [allAppointments, setAllAppointments] = reactExports.useState([]);
  const [allClinicalNotes, setAllClinicalNotes] = reactExports.useState([]);
  const [allPrescriptions, setAllPrescriptions] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [selectedPatient, setSelectedPatient] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    mrn: ""
  });
  const queryClient = useQueryClient();
  const { data: patientsData, isLoading: patientsLoading } = usePatients();
  const { data: medsData, isLoading: medsLoading } = useMedications();
  const { data: labsData, isLoading: labsLoading } = useLabResults();
  const { data: apptsData, isLoading: apptsLoading } = useAppointments();
  const { data: notesData, isLoading: notesLoading } = useClinicalNotes();
  const { data: rxData, isLoading: rxLoading } = usePrescriptions();
  reactExports.useEffect(() => {
    if (isDemoMode) return;
    if (patientsData) setPatients(patientsData);
    if (medsData) setAllMedications(medsData);
    if (labsData) setAllLabResults(labsData);
    if (apptsData) setAllAppointments(apptsData);
    if (notesData) setAllClinicalNotes(notesData);
    if (rxData) setAllPrescriptions(rxData);
    const anyLoading = patientsLoading || medsLoading || labsLoading || apptsLoading || notesLoading || rxLoading;
    if (!anyLoading) setLoading(false);
  }, [
    patientsData,
    medsData,
    labsData,
    apptsData,
    notesData,
    rxData,
    patientsLoading,
    medsLoading,
    labsLoading,
    apptsLoading,
    notesLoading,
    rxLoading,
    isDemoMode
  ]);
  reactExports.useEffect(() => {
    if (!isDemoMode || !actor) return;
    setLoading(true);
    Promise.all([
      actor.listPatients(),
      actor.listMedications(),
      actor.listLabResults(),
      actor.listAppointments(),
      actor.listClinicalNotes(),
      actor.listPrescriptions()
    ]).then(
      ([patientData, medData, labData, apptData, noteData, rxDataRaw]) => {
        setPatients(patientData);
        setAllMedications(medData);
        setAllLabResults(labData);
        setAllAppointments(apptData);
        setAllClinicalNotes(noteData);
        setAllPrescriptions(rxDataRaw);
      }
    ).catch(() => ue.error("Failed to load patients")).finally(() => setLoading(false));
  }, [actor, isDemoMode]);
  const filtered = reactExports.useMemo(
    () => patients.filter(
      (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.mrn.includes(search) || p.phone.includes(search)
    ),
    [patients, search]
  );
  const duplicates = reactExports.useMemo(() => detectDuplicates(patients), [patients]);
  const abnormalPatientIds = reactExports.useMemo(() => {
    const ids = /* @__PURE__ */ new Set();
    for (const l of allLabResults) {
      const flag = getLabFlag(l.testName, l.result, l.isCritical);
      if (flag !== "normal") ids.add(l.patientId);
    }
    return ids;
  }, [allLabResults]);
  const handleAdd = async () => {
    if (!form.name.trim() || !form.mrn.trim()) {
      ue.error("Name and MRN are required");
      return;
    }
    if (form.dateOfBirth) {
      const dob = new Date(form.dateOfBirth);
      const now = /* @__PURE__ */ new Date();
      if (Number.isNaN(dob.getTime()) || dob > now || dob.getFullYear() < 1900) {
        ue.error("Please enter a valid date of birth");
        return;
      }
    }
    if (form.phone && !/^[\d\s\-\+\(\)]{7,15}$/.test(form.phone)) {
      ue.error("Please enter a valid phone number");
      return;
    }
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.createPatient(
        form.name,
        form.dateOfBirth,
        form.phone,
        form.email,
        form.mrn
      );
      ue.success("Patient registered");
      setShowForm(false);
      setForm({ name: "", dateOfBirth: "", phone: "", email: "", mrn: "" });
      queryClient.invalidateQueries({ queryKey: ["patients"] });
    } catch {
      ue.error("Failed to register patient");
    } finally {
      setSubmitting(false);
    }
  };
  const handleCancel = () => {
    setShowForm(false);
    setForm({ name: "", dateOfBirth: "", phone: "", email: "", mrn: "" });
  };
  const handleMerge = (pair) => {
    var _a;
    const removeId = pair.a.id < pair.b.id ? pair.b.id : pair.a.id;
    const keepId = pair.a.id < pair.b.id ? pair.a.id : pair.b.id;
    setPatients((prev) => prev.filter((p) => p.id !== removeId));
    if ((selectedPatient == null ? void 0 : selectedPatient.id) === removeId) setSelectedPatient(null);
    ue.success(
      `Records merged — kept MRN ${(_a = patients.find((p) => p.id === keepId)) == null ? void 0 : _a.mrn}`
    );
  };
  const handleRowClick = (patient, onSelectPatient) => {
    setSelectedPatient((prev) => (prev == null ? void 0 : prev.id) === patient.id ? null : patient);
    onSelectPatient == null ? void 0 : onSelectPatient({
      id: patient.id,
      name: patient.name,
      mrn: patient.mrn,
      dateOfBirth: patient.dateOfBirth
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PatientsContext.Provider,
    {
      value: {
        patients,
        allMedications,
        allLabResults,
        allAppointments,
        allClinicalNotes,
        allPrescriptions,
        loading,
        submitting,
        showForm,
        setShowForm,
        selectedPatient,
        setSelectedPatient,
        form,
        setForm,
        filtered,
        duplicates,
        abnormalPatientIds,
        handleAdd,
        handleCancel,
        handleMerge,
        handleRowClick,
        search,
        setSearch
      },
      children
    }
  );
}
function computeCareGaps(patient) {
  const dob = new Date(patient.dateOfBirth);
  const now = /* @__PURE__ */ new Date();
  let age = now.getFullYear() - dob.getFullYear();
  if (now < new Date(now.getFullYear(), dob.getMonth(), dob.getDate())) age--;
  const isFemale = patient.name.match(
    /^(Eleanor|Linda|Diana|Natalie|Amanda|Lisa|Sarah|Rebecca)/i
  ) !== null;
  const gaps = [];
  gaps.push({
    screening: "Flu Vaccine",
    recommendedFor: "All adults, annually",
    lastCompleted: null,
    dueDate: "2025-10-01",
    status: "overdue"
  });
  gaps.push({
    screening: "Blood Pressure Check",
    recommendedFor: "All adults, annually",
    lastCompleted: "2025-09-15",
    dueDate: "2026-09-15",
    status: "up-to-date"
  });
  if (isFemale && age >= 40)
    gaps.push({
      screening: "Mammogram",
      recommendedFor: "Women 40+, annually",
      lastCompleted: "2024-11-20",
      dueDate: "2025-11-20",
      status: "overdue"
    });
  if (isFemale && age >= 21)
    gaps.push({
      screening: "Pap Smear",
      recommendedFor: "Women 21+, every 3 years",
      lastCompleted: "2024-06-01",
      dueDate: "2027-06-01",
      status: "up-to-date"
    });
  if (age >= 50)
    gaps.push({
      screening: "Colonoscopy",
      recommendedFor: "Adults 50+, every 10 years",
      lastCompleted: null,
      dueDate: "2024-01-01",
      status: "overdue"
    });
  gaps.push({
    screening: "HbA1c",
    recommendedFor: "Diabetic patients, every 6 months",
    lastCompleted: "2025-12-01",
    dueDate: "2026-06-01",
    status: age > 45 ? "due-soon" : "up-to-date"
  });
  return gaps;
}
function getCareGapOverdueNames(patient) {
  return computeCareGaps(patient).filter((g) => g.status === "overdue").map((g) => g.screening);
}
function SectionHeader({
  icon: Icon,
  title,
  count
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: title }),
    count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs text-muted-foreground tabular-nums", children: [
      count,
      " item",
      count !== 1 ? "s" : ""
    ] })
  ] });
}
function EmptySection({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic py-2", children: message });
}
function ChartSummaryTab({
  patient,
  medications,
  labResults,
  appointments,
  clinicalNotes,
  prescriptions
}) {
  const activeMeds = medications.filter(
    (m) => m.patientId === patient.id && m.status === "active"
  );
  const abnormalLabs = labResults.filter(
    (l) => l.patientId === patient.id && getLabFlag(l.testName, l.result, l.isCritical) !== "normal"
  );
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const upcomingAppts = appointments.filter(
    (a) => a.patientId === patient.id && a.date >= today && a.status === "scheduled"
  ).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
  const recentNotes = clinicalNotes.filter((n) => n.patientId === patient.id).slice(-3).reverse();
  const pendingPrescriptions = prescriptions.filter(
    (p) => p.patientId === patient.id && (p.status === "pending" || p.status === "dispensing")
  );
  const overdueGaps = computeCareGaps(patient).filter(
    (g) => g.status === "overdue"
  );
  const [gapBannerDismissed, setGapBannerDismissed] = React.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    overdueGaps.length > 0 && !gapBannerDismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start justify-between gap-3 px-4 py-3 border border-warning/30 bg-warning/10 rounded-sm",
        "data-ocid": "chart.caregap.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "w-4 h-4 text-warning flex-shrink-0 mt-0.5",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                overdueGaps.length,
                " Overdue Screening",
                overdueGaps.length !== 1 ? "s" : "",
                " Due"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: overdueGaps.map((g) => g.screening).join(" · ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "chart.caregap.close_button",
              onClick: () => setGapBannerDismissed(true),
              className: "text-warning hover:text-warning/80 flex-shrink-0 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "w-4 h-4",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-1",
        "data-ocid": "chart.summary.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Pill,
                title: "Active Medications",
                count: activeMeds.length
              }
            ),
            activeMeds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptySection, { message: "No active medications on record" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              activeMeds.slice(0, 5).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  "data-ocid": `chart.medication.item.${i + 1}`,
                  className: "flex items-start justify-between gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-tight", children: m.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        m.dose,
                        " · ",
                        m.frequency
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "success", label: "Active" })
                  ]
                },
                String(m.id)
              )),
              activeMeds.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "+",
                activeMeds.length - 5,
                " more"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: FlaskConical,
                title: "Abnormal Lab Flags",
                count: abnormalLabs.length
              }
            ),
            abnormalLabs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptySection, { message: "All results within normal range" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: abnormalLabs.slice(0, 5).map((l, i) => {
              const flag = getLabFlag(l.testName, l.result, l.isCritical);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  "data-ocid": `chart.lab.item.${i + 1}`,
                  className: "flex items-start justify-between gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-tight", children: l.testName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [
                        l.result,
                        " ",
                        l.unit
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: flagVariant[flag],
                        label: flagLabel[flag]
                      }
                    )
                  ]
                },
                String(l.id)
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Calendar,
                title: "Upcoming Appointments",
                count: upcomingAppts.length
              }
            ),
            upcomingAppts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptySection, { message: "No upcoming appointments scheduled" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: upcomingAppts.map((a, i) => {
              const date = a.date.slice(0, 10);
              const time = a.date.includes("T") ? a.date.split("T")[1].substring(0, 5) : null;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  "data-ocid": `chart.appointment.item.${i + 1}`,
                  className: "flex items-center justify-between gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: date }),
                      time && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: time })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "info", label: a.status })
                  ]
                },
                String(a.id)
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: ClipboardList,
                title: "Recent Clinical Notes",
                count: recentNotes.length
              }
            ),
            recentNotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptySection, { message: "No clinical notes on record" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: recentNotes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                "data-ocid": `chart.note.item.${i + 1}`,
                className: "border-l-2 border-primary/30 pl-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: n.noteType }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground line-clamp-2 mt-0.5", children: n.content })
                ]
              },
              String(n.id)
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Stethoscope,
                title: "Pending Prescriptions",
                count: pendingPrescriptions.length
              }
            ),
            pendingPrescriptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptySection, { message: "No pending prescriptions" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: pendingPrescriptions.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                "data-ocid": `chart.prescription.item.${i + 1}`,
                className: "flex items-start justify-between gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-tight", children: p.medication }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.dose })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "warning", label: p.status })
                ]
              },
              String(p.id)
            )) })
          ] })
        ]
      }
    )
  ] });
}
function CareGapsTab({ patient }) {
  const gaps = computeCareGaps(patient);
  const gapStatusVariant = (s) => {
    if (s === "overdue") return "danger";
    if (s === "due-soon") return "warning";
    return "success";
  };
  const gapStatusLabel = (s) => {
    if (s === "overdue") return "Overdue";
    if (s === "due-soon") return "Due Soon";
    return "Up to Date";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "patients.caregaps.panel", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Screening" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Recommended For" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Last Completed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Due Date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "px-4 py-2.5" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: gaps.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      TableRow,
      {
        "data-ocid": `patients.caregap.row.${i + 1}`,
        className: "hover:bg-muted/30 even:bg-muted/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: g.screening }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground px-4 py-2.5", children: g.recommendedFor }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: g.lastCompleted ?? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic", children: "Never" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5 font-mono", children: g.dueDate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatusBadge,
            {
              variant: gapStatusVariant(g.status),
              label: gapStatusLabel(g.status)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: g.status === "overdue" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `patients.caregap.schedule.button.${i + 1}`,
              className: "text-xs font-semibold px-2 py-1 rounded-sm border transition-colors hover:bg-muted/40",
              style: {
                color: "var(--primary)",
                borderColor: "var(--border)"
              },
              children: "Schedule"
            }
          ) })
        ]
      },
      g.screening
    )) })
  ] }) }) });
}
const SEED_PROBLEMS = {
  "1": [
    {
      id: 1,
      name: "Type 2 Diabetes Mellitus",
      icd10: "E11.9",
      onset: "2018-04-12",
      severity: "Moderate",
      status: "Active"
    },
    {
      id: 2,
      name: "Hypertension, Essential",
      icd10: "I10",
      onset: "2016-08-01",
      severity: "Mild",
      status: "Active"
    },
    {
      id: 3,
      name: "Obesity, Class I",
      icd10: "E66.9",
      onset: "2019-01-15",
      severity: "Mild",
      status: "Active"
    }
  ],
  "2": [
    {
      id: 1,
      name: "Congestive Heart Failure, Systolic",
      icd10: "I50.20",
      onset: "2021-06-22",
      severity: "Severe",
      status: "Active"
    },
    {
      id: 2,
      name: "Hypokalemia",
      icd10: "E87.6",
      onset: "2026-01-10",
      severity: "Moderate",
      status: "Active"
    },
    {
      id: 3,
      name: "Type 2 Diabetes Mellitus",
      icd10: "E11.9",
      onset: "2015-03-05",
      severity: "Moderate",
      status: "Active"
    }
  ],
  "3": [
    {
      id: 1,
      name: "Hypothyroidism",
      icd10: "E03.9",
      onset: "2020-09-18",
      severity: "Mild",
      status: "Active"
    },
    {
      id: 2,
      name: "Iron Deficiency Anemia",
      icd10: "D50.9",
      onset: "2022-11-30",
      severity: "Mild",
      status: "Resolved"
    }
  ],
  "4": [
    {
      id: 1,
      name: "Dyslipidemia",
      icd10: "E78.5",
      onset: "2019-07-20",
      severity: "Moderate",
      status: "Active"
    },
    {
      id: 2,
      name: "Hypertension, Essential",
      icd10: "I10",
      onset: "2020-02-14",
      severity: "Mild",
      status: "Active"
    },
    {
      id: 3,
      name: "Obesity, Class I",
      icd10: "E66.9",
      onset: "2021-05-01",
      severity: "Mild",
      status: "Active"
    }
  ],
  "5": [
    {
      id: 1,
      name: "Seasonal Allergic Rhinitis",
      icd10: "J30.1",
      onset: "2015-04-10",
      severity: "Mild",
      status: "Active"
    },
    {
      id: 2,
      name: "Asthma, Mild Intermittent",
      icd10: "J45.20",
      onset: "2016-09-25",
      severity: "Mild",
      status: "Active"
    }
  ]
};
function ProblemListTab({ patient }) {
  const patientKey = String(Number(patient.id));
  const [problems, setProblems] = React.useState(
    () => SEED_PROBLEMS[patientKey] ?? []
  );
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [newProblem, setNewProblem] = React.useState({
    name: "",
    icd10: "",
    onset: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    severity: "Mild",
    status: "Active"
  });
  const handleMarkResolved = (id) => setProblems(
    (prev) => prev.map((p) => p.id === id ? { ...p, status: "Resolved" } : p)
  );
  const handleAddProblem = () => {
    if (!newProblem.name.trim()) return;
    setProblems((prev) => [...prev, { ...newProblem, id: Date.now() }]);
    setNewProblem({
      name: "",
      icd10: "",
      onset: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      severity: "Mild",
      status: "Active"
    });
    setShowAddForm(false);
    ue.success("Problem added to problem list");
  };
  const active = problems.filter((p) => p.status === "Active");
  const resolved = problems.filter((p) => p.status === "Resolved");
  const severityVariant = (s) => s === "Mild" ? "success" : s === "Moderate" ? "warning" : "danger";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "patients.problems.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        "data-ocid": "patients.problems.open_modal_button",
        onClick: () => setShowAddForm((v) => !v),
        className: "h-7 text-xs gap-1.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
          "Add Problem"
        ]
      }
    ) }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-muted/30 border border-border rounded-sm p-4 space-y-3",
        "data-ocid": "patients.problems.add.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "New Problem / Diagnosis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "prob-name",
                  className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                  children: "Problem / Diagnosis"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "prob-name",
                  "data-ocid": "patients.problems.name.input",
                  value: newProblem.name,
                  onChange: (e) => setNewProblem((p) => ({ ...p, name: e.target.value })),
                  placeholder: "e.g. Type 2 Diabetes Mellitus",
                  className: "h-7 text-xs"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "prob-icd10",
                  className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                  children: "ICD-10 Code"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "prob-icd10",
                  "data-ocid": "patients.problems.icd10.input",
                  value: newProblem.icd10,
                  onChange: (e) => setNewProblem((p) => ({ ...p, icd10: e.target.value })),
                  placeholder: "e.g. E11.9",
                  className: "h-7 text-xs font-mono"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "prob-onset",
                  className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                  children: "Onset Date"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "prob-onset",
                  type: "date",
                  "data-ocid": "patients.problems.onset.input",
                  value: newProblem.onset,
                  onChange: (e) => setNewProblem((p) => ({ ...p, onset: e.target.value })),
                  className: "h-7 text-xs"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "prob-severity",
                  className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                  children: "Severity"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  id: "prob-severity",
                  "data-ocid": "patients.problems.severity.select",
                  value: newProblem.severity,
                  onChange: (e) => setNewProblem((p) => ({
                    ...p,
                    severity: e.target.value
                  })),
                  className: "w-full h-7 px-2 text-xs bg-background border border-input rounded-sm focus:outline-none",
                  children: ["Mild", "Moderate", "Severe"].map(
                    (s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s)
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "patients.problems.submit_button",
                className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
                onClick: handleAddProblem,
                children: "Add"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs",
                "data-ocid": "patients.problems.cancel_button",
                onClick: () => setShowAddForm(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: [
        "Active (",
        active.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: ["Problem", "ICD-10", "Onset", "Severity", "Status", ""].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableHead,
            {
              className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
              children: h
            },
            h
          )
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: active.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 6,
            className: "text-center text-sm text-muted-foreground py-8",
            "data-ocid": "patients.problems.active.empty_state",
            children: "No active problems recorded"
          }
        ) }) : active.map((prob, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `patients.problems.active.item.${i + 1}`,
            className: "hover:bg-muted/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-medium text-sm", children: prob.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-mono text-sm text-muted-foreground", children: prob.icd10 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-sm text-muted-foreground", children: prob.onset }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: severityVariant(prob.severity),
                  label: prob.severity
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "info", label: prob.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `patients.problems.resolve.button.${i + 1}`,
                  onClick: () => handleMarkResolved(prob.id),
                  className: "text-xs font-semibold px-2 py-1 rounded-sm border transition-colors hover:bg-muted/40",
                  style: {
                    color: "var(--primary)",
                    borderColor: "var(--border)"
                  },
                  children: "Mark Resolved"
                }
              ) })
            ]
          },
          prob.id
        )) })
      ] }) })
    ] }),
    resolved.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: [
        "Resolved (",
        resolved.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: ["Problem", "ICD-10", "Onset", "Severity", "Status"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableHead,
            {
              className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
              children: h
            },
            h
          )
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: resolved.map((prob, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `patients.problems.resolved.item.${i + 1}`,
            className: "hover:bg-muted/30 opacity-75",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-sm text-muted-foreground line-through", children: prob.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-mono text-sm text-muted-foreground", children: prob.icd10 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-sm text-muted-foreground", children: prob.onset }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: severityVariant(prob.severity),
                  label: prob.severity
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "neutral", label: "Resolved" }) })
            ]
          },
          prob.id
        )) })
      ] }) })
    ] })
  ] });
}
const SEED_ADVANCE_DIRECTIVES = {
  "1": {
    dnrStatus: "DNR",
    dnrLastUpdated: "2026-01-15",
    dnrNote: "Patient expressed wishes clearly. Family informed and agreed.",
    proxyName: "Mary Johnson",
    proxyRelationship: "Daughter",
    proxyPhone: "(555) 234-5678",
    livingWillOnFile: true,
    livingWillDate: "2025-11-20",
    careGoals: "Patient wishes to remain comfortable and at home. Declined aggressive interventions. Prefers palliative focus if condition deteriorates.",
    polstOnFile: true,
    polstDate: "2026-01-15"
  },
  "2": {
    dnrStatus: "Full Code",
    dnrLastUpdated: "2026-02-10",
    dnrNote: "",
    proxyName: "David Okonkwo",
    proxyRelationship: "Spouse",
    proxyPhone: "(555) 876-5432",
    livingWillOnFile: false,
    livingWillDate: "",
    careGoals: "Wants all interventions pursued. Active father of three.",
    polstOnFile: false,
    polstDate: ""
  }
};
const SEED_ISOLATION = {
  "1": {
    type: "Contact",
    flags: ["MRSA", "Contact Precautions"],
    notes: "MRSA wound culture positive — contact precautions in place",
    setDate: "2026-03-08"
  },
  "3": {
    type: "Contact",
    flags: ["MRSA", "Contact Precautions"],
    notes: "MRSA precautions — wound culture positive",
    setDate: "2026-03-10"
  },
  "5": {
    type: "Airborne",
    flags: ["Airborne Precautions", "Neutropenic Precautions"],
    notes: "Rule out active TB — pending sputum culture; also neutropenic post-chemo",
    setDate: "2026-03-12"
  }
};
const ISOLATION_FLAG_COLORS = {
  MRSA: "bg-destructive/10 text-destructive border-destructive/20",
  "C. Diff": "bg-warning/15 text-warning border-warning/30",
  "Contact Precautions": "bg-warning/15 text-warning border-warning/30",
  "Droplet Precautions": "bg-primary/10 text-primary border-primary/20",
  "Airborne Precautions": "bg-destructive/10 text-destructive border-destructive/20",
  "Neutropenic Precautions": "bg-accent/10 text-accent border-accent/20"
};
const ALL_ISOLATION_FLAGS = [
  "MRSA",
  "C. Diff",
  "Contact Precautions",
  "Droplet Precautions",
  "Airborne Precautions",
  "Neutropenic Precautions"
];
const defaultAdvanceDirective = () => ({
  dnrStatus: "Full Code",
  dnrLastUpdated: "",
  dnrNote: "",
  proxyName: "",
  proxyRelationship: "",
  proxyPhone: "",
  livingWillOnFile: false,
  livingWillDate: "",
  careGoals: "",
  polstOnFile: false,
  polstDate: ""
});
function AdvanceDirectivesTab({ patient }) {
  const key = String(Number(patient.id));
  const [data, setData] = React.useState(
    SEED_ADVANCE_DIRECTIVES[key] ?? defaultAdvanceDirective()
  );
  const [editingDnr, setEditingDnr] = React.useState(false);
  const [editingProxy, setEditingProxy] = React.useState(false);
  const [editingGoals, setEditingGoals] = React.useState(false);
  const [draft, setDraft] = React.useState(data);
  const dnrVariant = (s) => {
    if (s === "Full Code") return "success";
    if (s === "DNR") return "danger";
    if (s === "DNI") return "warning";
    return "neutral";
  };
  const handleSave = (section) => {
    setData(draft);
    if (section === "dnr") setEditingDnr(false);
    if (section === "proxy") setEditingProxy(false);
    if (section === "goals") setEditingGoals(false);
    ue.success("Advance directive updated");
  };
  const startEdit = (section) => {
    setDraft(data);
    if (section === "dnr") setEditingDnr(true);
    if (section === "proxy") setEditingProxy(true);
    if (section === "goals") setEditingGoals(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "patients.directives.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-muted/10 rounded-sm p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Code Status / DNR" })
        ] }),
        !editingDnr && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-6 text-xs px-2",
            "data-ocid": "patients.directives.dnr.edit_button",
            onClick: () => startEdit("dnr"),
            children: "Edit"
          }
        )
      ] }),
      editingDnr ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "dir-dnr-status",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                children: "Code Status"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "dir-dnr-status",
                "data-ocid": "patients.directives.dnr.select",
                value: draft.dnrStatus,
                onChange: (e) => setDraft((p) => ({
                  ...p,
                  dnrStatus: e.target.value
                })),
                className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring",
                children: [
                  "Full Code",
                  "DNR",
                  "DNI",
                  "Comfort Care Only"
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "dir-dnr-date",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                children: "Date"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.directives.dnr.date.input",
                type: "date",
                value: draft.dnrLastUpdated,
                onChange: (e) => setDraft((p) => ({ ...p, dnrLastUpdated: e.target.value })),
                className: "h-8 text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "dir-dnr-notes-ta",
              className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
              children: "Notes"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "dir-dnr-notes-ta",
              "data-ocid": "patients.directives.dnr.textarea",
              value: draft.dnrNote,
              onChange: (e) => setDraft((p) => ({ ...p, dnrNote: e.target.value })),
              rows: 2,
              className: "text-sm resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                "data-ocid": "patients.directives.polst.switch",
                checked: draft.polstOnFile,
                onCheckedChange: (v) => setDraft((p) => ({ ...p, polstOnFile: v }))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: "POLST on File" })
          ] }),
          draft.polstOnFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              "data-ocid": "patients.directives.polst.input",
              type: "date",
              value: draft.polstDate,
              onChange: (e) => setDraft((p) => ({ ...p, polstDate: e.target.value })),
              className: "h-7 text-xs w-36"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                "data-ocid": "patients.directives.living_will.switch",
                checked: draft.livingWillOnFile,
                onCheckedChange: (v) => setDraft((p) => ({ ...p, livingWillOnFile: v }))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: "Living Will on File" })
          ] }),
          draft.livingWillOnFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: draft.livingWillDate,
              onChange: (e) => setDraft((p) => ({ ...p, livingWillDate: e.target.value })),
              className: "h-7 text-xs w-36"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              "data-ocid": "patients.directives.dnr.save_button",
              className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
              onClick: () => handleSave("dnr"),
              children: "Save"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs",
              "data-ocid": "patients.directives.dnr.cancel_button",
              onClick: () => setEditingDnr(false),
              children: "Cancel"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatusBadge,
            {
              variant: dnrVariant(data.dnrStatus),
              label: data.dnrStatus
            }
          ),
          data.dnrLastUpdated && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "Last updated: ",
            data.dnrLastUpdated
          ] })
        ] }),
        data.dnrNote && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80 italic mt-1", children: data.dnrNote }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-xs ${data.polstOnFile ? "text-success font-medium" : "text-muted-foreground"}`,
              children: [
                "POLST:",
                " ",
                data.polstOnFile ? `On File (${data.polstDate})` : "Not on file"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-xs ${data.livingWillOnFile ? "text-success font-medium" : "text-muted-foreground"}`,
              children: [
                "Living Will:",
                " ",
                data.livingWillOnFile ? `On File (${data.livingWillDate})` : "Not on file"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-muted/10 rounded-sm p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Healthcare Proxy" }),
        !editingProxy && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-6 text-xs px-2",
            "data-ocid": "patients.directives.proxy.edit_button",
            onClick: () => startEdit("proxy"),
            children: "Edit"
          }
        )
      ] }),
      editingProxy ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "dir-proxy-name",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                children: "Name"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.directives.proxy.name.input",
                value: draft.proxyName,
                onChange: (e) => setDraft((p) => ({ ...p, proxyName: e.target.value })),
                className: "h-8 text-sm",
                placeholder: "Full name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "dir-proxy-rel",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                children: "Relationship"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.directives.proxy.relationship.input",
                value: draft.proxyRelationship,
                onChange: (e) => setDraft((p) => ({
                  ...p,
                  proxyRelationship: e.target.value
                })),
                className: "h-8 text-sm",
                placeholder: "e.g. Daughter"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "dir-proxy-phone",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                children: "Phone"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.directives.proxy.phone.input",
                value: draft.proxyPhone,
                onChange: (e) => setDraft((p) => ({ ...p, proxyPhone: e.target.value })),
                className: "h-8 text-sm",
                placeholder: "(555) 000-0000"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              "data-ocid": "patients.directives.proxy.save_button",
              className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
              onClick: () => handleSave("proxy"),
              children: "Save"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs",
              "data-ocid": "patients.directives.proxy.cancel_button",
              onClick: () => setEditingProxy(false),
              children: "Cancel"
            }
          )
        ] })
      ] }) : data.proxyName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: data.proxyName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          data.proxyRelationship,
          " · ",
          data.proxyPhone
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No healthcare proxy on record" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-muted/10 rounded-sm p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Care Goals & Patient Wishes" }),
        !editingGoals && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-6 text-xs px-2",
            "data-ocid": "patients.directives.goals.edit_button",
            onClick: () => startEdit("goals"),
            children: "Edit"
          }
        )
      ] }),
      editingGoals ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            "data-ocid": "patients.directives.goals.textarea",
            value: draft.careGoals,
            onChange: (e) => setDraft((p) => ({ ...p, careGoals: e.target.value })),
            rows: 4,
            className: "text-sm resize-none",
            placeholder: "Document patient's expressed goals of care, values, and wishes..."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              "data-ocid": "patients.directives.goals.save_button",
              className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
              onClick: () => handleSave("goals"),
              children: "Save"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs",
              "data-ocid": "patients.directives.goals.cancel_button",
              onClick: () => setEditingGoals(false),
              children: "Cancel"
            }
          )
        ] })
      ] }) : data.careGoals ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 whitespace-pre-wrap", children: data.careGoals }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No care goals documented" })
    ] })
  ] });
}
function IsolationSection({ patient }) {
  const key = String(Number(patient.id));
  const [isolation, setIsolation] = React.useState(
    SEED_ISOLATION[key] ?? { type: null, flags: [], notes: "", setDate: "" }
  );
  const [expanded, setExpanded] = React.useState(false);
  const [draft, setDraft] = React.useState(isolation);
  const hasFlags = isolation.flags && isolation.flags.length > 0;
  const handleSave = () => {
    setIsolation(draft);
    setExpanded(false);
    ue.success(
      draft.flags.length > 0 ? `Isolation flags updated: ${draft.flags.join(", ")}` : "Isolation precautions cleared"
    );
  };
  const toggleFlag = (flag) => setDraft((p) => ({
    ...p,
    flags: p.flags.includes(flag) ? p.flags.filter((f) => f !== flag) : [...p.flags, flag]
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "patients.isolation.panel", children: [
    hasFlags && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 px-4 py-2 border-b bg-destructive/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-3.5 h-3.5 text-destructive flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-destructive mr-1", children: "Isolation:" }),
        isolation.flags.map((flag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded border ${ISOLATION_FLAG_COLORS[flag]}`,
            children: flag
          },
          flag
        )),
        isolation.setDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
          "since ",
          isolation.setDate
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "patients.isolation.toggle",
          onClick: () => {
            setDraft(isolation);
            setExpanded((v) => !v);
          },
          className: "text-xs text-muted-foreground hover:text-foreground underline flex-shrink-0",
          children: expanded ? "Hide" : "Manage"
        }
      )
    ] }),
    !hasFlags && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-4 py-1.5 border-b bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "patients.isolation.toggle",
        onClick: () => {
          setDraft(isolation);
          setExpanded((v) => !v);
        },
        className: "text-xs text-muted-foreground hover:text-foreground underline",
        children: expanded ? "▲ Hide isolation precautions" : "▼ Set isolation precautions"
      }
    ) }),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-muted/10 border-b border-border px-5 py-4 space-y-3",
        "data-ocid": "patients.isolation.form.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Isolation Precautions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Select Applicable Flags" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: ALL_ISOLATION_FLAGS.map((flag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "flex items-center gap-2 cursor-pointer select-none",
                "data-ocid": "patients.isolation.flag.checkbox",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: draft.flags.includes(flag),
                      onChange: () => toggleFlag(flag),
                      className: "rounded border-input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-flex items-center text-xs font-medium px-1.5 py-0.5 rounded border ${ISOLATION_FLAG_COLORS[flag]}`,
                      children: flag
                    }
                  )
                ]
              },
              flag
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "isolation-date-input",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                children: "Date Set"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "isolation-date-input",
                "data-ocid": "patients.isolation.date.input",
                type: "date",
                value: draft.setDate,
                onChange: (e) => setDraft((p) => ({ ...p, setDate: e.target.value })),
                className: "h-8 text-sm"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "isolation-notes-input",
                className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1",
                children: "Notes / Reason"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "isolation-notes-input",
                "data-ocid": "patients.isolation.notes.input",
                value: draft.notes,
                onChange: (e) => setDraft((p) => ({ ...p, notes: e.target.value })),
                className: "h-8 text-sm",
                placeholder: "e.g. MRSA positive wound culture"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "patients.isolation.save_button",
                className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
                onClick: handleSave,
                children: "Save"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs",
                "data-ocid": "patients.isolation.cancel_button",
                onClick: () => setExpanded(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const PatientDetailPanel = React.memo(function PatientDetailPanel2({
  patient,
  allMedications,
  allLabResults,
  allAppointments,
  allClinicalNotes,
  allPrescriptions,
  onClose
}) {
  const patientMeds = allMedications.filter((m) => m.patientId === patient.id);
  const patientLabs = allLabResults.filter((l) => l.patientId === patient.id);
  const patientAppts = allAppointments.filter((a) => a.patientId === patient.id).sort((a, b) => b.date.localeCompare(a.date));
  const patientNotes = allClinicalNotes.filter(
    (n) => n.patientId === patient.id
  );
  const patientRx = allPrescriptions.filter((p) => p.patientId === patient.id);
  const abnormalCount = patientLabs.filter(
    (l) => getLabFlag(l.testName, l.result, l.isCritical) !== "normal"
  ).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border bg-card mt-1",
      "data-ocid": "patients.detail.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-3 bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold", children: patient.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: patient.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "MRN: ",
                patient.mrn,
                " · DOB: ",
                patient.dateOfBirth
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            abnormalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs font-semibold text-destructive bg-destructive/10 border border-destructive/20 px-2.5 py-1 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
              abnormalCount,
              " Abnormal Result",
              abnormalCount !== 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "patients.detail.close_button",
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground transition-colors p-1",
                "aria-label": "Close chart",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IsolationSection, { patient }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "summary", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TabsList,
            {
              className: "w-full justify-start rounded-none border-b border-border bg-transparent px-5 h-10 gap-0",
              "data-ocid": "patients.detail.tab",
              children: [
                { value: "summary", label: "Chart Summary" },
                {
                  value: "medications",
                  label: `Medications (${patientMeds.length})`
                },
                { value: "labs", label: `Lab Results (${patientLabs.length})` },
                {
                  value: "appointments",
                  label: `Appointments (${patientAppts.length})`
                },
                {
                  value: "notes",
                  label: `Clinical Notes (${patientNotes.length})`
                },
                {
                  value: "prescriptions",
                  label: `Prescriptions (${patientRx.length})`
                },
                { value: "problems", label: "Problem List" },
                { value: "caregaps", label: "Care Gaps" },
                { value: "safety", label: "Safety" },
                { value: "directives", label: "Advance Directives" },
                { value: "consents", label: "Consents" }
              ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: tab.value,
                  "data-ocid": `patients.detail.${tab.value}.tab`,
                  className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-xs font-medium px-4 h-10",
                  children: tab.label
                },
                tab.value
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "summary", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChartSummaryTab,
              {
                patient,
                medications: allMedications,
                labResults: allLabResults,
                appointments: allAppointments,
                clinicalNotes: allClinicalNotes,
                prescriptions: allPrescriptions
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "medications", className: "mt-0", children: patientMeds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-muted-foreground text-center py-8",
                "data-ocid": "patients.medications.empty_state",
                children: "No medications recorded"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: ["Name", "Dose", "Frequency", "Status"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableHead,
                {
                  className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: patientMeds.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  "data-ocid": `patients.medication.row.${i + 1}`,
                  className: "hover:bg-muted/30 even:bg-muted/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: m.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: m.dose }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: m.frequency }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: m.status === "active" ? "success" : "neutral",
                        label: m.status
                      }
                    ) })
                  ]
                },
                String(m.id)
              )) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "labs", className: "mt-0", children: patientLabs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-muted-foreground text-center py-8",
                "data-ocid": "patients.labs.empty_state",
                children: "No lab results recorded"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: ["Test", "Result", "Unit", "Flag"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableHead,
                {
                  className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: patientLabs.map((l, i) => {
                const flag = getLabFlag(
                  l.testName,
                  l.result,
                  l.isCritical
                );
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TableRow,
                  {
                    "data-ocid": `patients.lab.row.${i + 1}`,
                    className: "hover:bg-muted/30 even:bg-muted/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: l.testName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5 font-mono", children: l.result }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground px-4 py-2.5", children: l.unit }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        StatusBadge,
                        {
                          variant: flagVariant[flag],
                          label: flagLabel[flag]
                        }
                      ) })
                    ]
                  },
                  String(l.id)
                );
              }) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "appointments", className: "mt-0", children: patientAppts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-muted-foreground text-center py-8",
                "data-ocid": "patients.appointments.empty_state",
                children: "No appointments on record"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: ["Date", "Status"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableHead,
                {
                  className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: patientAppts.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  "data-ocid": `patients.appointment.row.${i + 1}`,
                  className: "hover:bg-muted/30 even:bg-muted/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: a.date.slice(0, 16).replace("T", " ") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: a.status === "completed" ? "success" : a.status === "cancelled" ? "danger" : "info",
                        label: a.status
                      }
                    ) })
                  ]
                },
                String(a.id)
              )) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notes", className: "mt-0", children: patientNotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-muted-foreground text-center py-8",
                "data-ocid": "patients.notes.empty_state",
                children: "No clinical notes on record"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: patientNotes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `patients.note.item.${i + 1}`,
                className: "border border-border bg-muted/20 p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: n.noteType }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground whitespace-pre-wrap", children: n.content })
                ]
              },
              String(n.id)
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "prescriptions", className: "mt-0", children: patientRx.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-muted-foreground text-center py-8",
                "data-ocid": "patients.prescriptions.empty_state",
                children: "No prescriptions on record"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: ["Medication", "Dose", "Prescribed By", "Status"].map(
                (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableHead,
                  {
                    className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                    children: h
                  },
                  h
                )
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: patientRx.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  "data-ocid": `patients.prescription.row.${i + 1}`,
                  className: "hover:bg-muted/30 even:bg-muted/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: p.medication }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: p.dose }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground px-4 py-2.5", children: p.prescribedBy }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: p.status === "dispensed" ? "success" : p.status === "pending" ? "warning" : "neutral",
                        label: p.status
                      }
                    ) })
                  ]
                },
                String(p.id)
              )) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "problems", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemListTab, { patient }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "caregaps", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CareGapsTab, { patient }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "safety", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IsolationSection, { patient }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "directives", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdvanceDirectivesTab, { patient }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "consents", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConsentsTab, { patientId: patient.id, patientName: patient.name }) })
          ] })
        ] })
      ]
    }
  );
});
const PatientFilters = React.memo(function PatientFilters2({
  search,
  onSearchChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        "data-ocid": "patients.search_input",
        placeholder: "Search by name, MRN, or phone...",
        value: search,
        onChange: (e) => onSearchChange(e.target.value),
        className: "pl-8 h-8 text-sm"
      }
    )
  ] });
});
function PatientMergePanel({
  duplicates,
  onMerge
}) {
  if (duplicates.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-warning/30 bg-warning/10 p-4 space-y-3",
      "data-ocid": "patients.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
            duplicates.length,
            " potential duplicate record",
            duplicates.length > 1 ? "s" : "",
            " detected"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: duplicates.map((pair, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between bg-white border border-warning/20 px-4 py-3 gap-4",
            "data-ocid": `patients.duplicate.row.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: pair.a.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground font-mono", children: [
                    pair.a.mrn,
                    " · ",
                    pair.a.dateOfBirth
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: pair.b.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground font-mono", children: [
                    pair.b.mrn,
                    " · ",
                    pair.b.dateOfBirth
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground bg-warning/20 px-2 py-0.5 rounded-full", children: pair.reason }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    "data-ocid": `patients.confirm_button.${i + 1}`,
                    className: "border-warning/30 text-foreground hover:bg-warning/10 h-7 text-xs",
                    onClick: () => onMerge(pair),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GitMerge, { className: "w-3 h-3 mr-1" }),
                      "Merge"
                    ]
                  }
                )
              ] })
            ]
          },
          `${String(pair.a.id)}-${String(pair.b.id)}`
        )) })
      ]
    }
  );
}
function PatientRegistrationForm({
  form,
  setForm,
  submitting,
  onSubmit,
  onCancel
}) {
  const [errors, setErrors] = reactExports.useState({});
  const handleSubmit = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!form.mrn.trim()) {
      newErrors.mrn = "MRN is required";
    }
    if (form.dateOfBirth) {
      const dob = new Date(form.dateOfBirth);
      if (Number.isNaN(dob.getTime()) || dob >= /* @__PURE__ */ new Date()) {
        newErrors.dateOfBirth = "Enter a valid past date";
      }
    }
    if (form.phone && form.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border bg-card p-5",
      "data-ocid": "patients.registration.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "Register New Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.name.input",
                value: form.name,
                onChange: (e) => {
                  setForm((p) => ({ ...p, name: e.target.value }));
                  if (errors.name)
                    setErrors((prev) => ({ ...prev, name: void 0 }));
                },
                placeholder: "e.g. Jane Smith",
                className: "mt-1 h-8 text-sm"
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Date of Birth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.dob.input",
                type: "date",
                value: form.dateOfBirth,
                onChange: (e) => {
                  setForm((p) => ({ ...p, dateOfBirth: e.target.value }));
                  if (errors.dateOfBirth)
                    setErrors((prev) => ({ ...prev, dateOfBirth: void 0 }));
                },
                className: "mt-1 h-8 text-sm"
              }
            ),
            errors.dateOfBirth && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.dateOfBirth })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.phone.input",
                value: form.phone,
                onChange: (e) => {
                  setForm((p) => ({ ...p, phone: e.target.value }));
                  if (errors.phone)
                    setErrors((prev) => ({ ...prev, phone: void 0 }));
                },
                placeholder: "(555) 555-5555",
                className: "mt-1 h-8 text-sm"
              }
            ),
            errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.email.input",
                type: "email",
                value: form.email,
                onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                placeholder: "patient@email.com",
                className: "mt-1 h-8 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "MRN *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "patients.mrn.input",
                value: form.mrn,
                onChange: (e) => {
                  setForm((p) => ({ ...p, mrn: e.target.value }));
                  if (errors.mrn)
                    setErrors((prev) => ({ ...prev, mrn: void 0 }));
                },
                placeholder: "MRN-XXX",
                className: "mt-1 h-8 text-sm font-mono"
              }
            ),
            errors.mrn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.mrn })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "patients.submit_button",
              size: "sm",
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              onClick: handleSubmit,
              disabled: submitting,
              children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 mr-1.5 animate-spin" }),
                "Registering..."
              ] }) : "Register Patient"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "patients.cancel_button",
              size: "sm",
              variant: "outline",
              onClick: onCancel,
              disabled: submitting,
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
const ISOLATION_SEED_IDS = /* @__PURE__ */ new Set(["1", "3", "5"]);
const PatientRow = React.memo(function PatientRow2({
  patient,
  index,
  isSelected,
  hasAbnormal,
  onRowClick
}) {
  const patientKey = String(Number(patient.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    TableRow,
    {
      "data-ocid": `patients.row.${index + 1}`,
      className: `cursor-pointer transition-all ${isSelected ? "bg-primary/5 border-l-2 border-l-primary" : "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent"}`,
      onClick: onRowClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 text-muted-foreground", children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          patient.name,
          hasAbnormal && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-destructive" }),
          ISOLATION_SEED_IDS.has(patientKey) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center text-xs font-bold uppercase tracking-wide px-1.5 py-0.5 rounded border bg-destructive/10 text-destructive border-destructive/20", children: "Isolation" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground px-4 py-2.5", children: patient.mrn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: patient.dateOfBirth }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: patient.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground px-4 py-2.5", children: patient.email })
      ]
    },
    String(patient.id)
  );
});
function PatientsInner({
  onSelectPatient
}) {
  const {
    loading,
    submitting,
    showForm,
    setShowForm,
    selectedPatient,
    setSelectedPatient,
    form,
    setForm,
    filtered,
    duplicates,
    abnormalPatientIds,
    handleAdd,
    handleCancel,
    handleMerge,
    handleRowClick,
    search,
    setSearch,
    allMedications,
    allLabResults,
    allAppointments,
    allClinicalNotes,
    allPrescriptions
  } = usePatientsContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "patients.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PatientFilters, { search, onSearchChange: setSearch }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "patients.primary_button",
          size: "sm",
          className: "bg-primary text-primary-foreground hover:bg-primary/90",
          onClick: () => setShowForm((v) => !v),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
            "Register Patient"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientRegistrationForm,
      {
        form,
        setForm,
        submitting,
        onSubmit: handleAdd,
        onCancel: handleCancel
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PatientMergePanel, { duplicates, onMerge: handleMerge }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "patients.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4 w-6" }),
        ["Name", "MRN", "Date of Birth", "Phone", "Email"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableHead,
          {
            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
            children: h
          },
          h
        ))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? ["sk-0", "sk-1", "sk-2", "sk-3", "sk-4"].map((rowKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "patients.loading_state", children: ["c0", "c1", "c2", "c3", "c4", "c5"].map((colKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }) }, colKey)) }, rowKey)) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          colSpan: 6,
          className: "text-center text-muted-foreground py-10 text-sm",
          "data-ocid": "patients.empty_state",
          children: "No patients found"
        }
      ) }) : filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        PatientRow,
        {
          patient: p,
          index: i,
          isSelected: (selectedPatient == null ? void 0 : selectedPatient.id) === p.id,
          hasAbnormal: abnormalPatientIds.has(p.id),
          onRowClick: () => handleRowClick(p, onSelectPatient)
        },
        String(p.id)
      )) })
    ] }) }),
    selectedPatient && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientDetailPanel,
      {
        patient: selectedPatient,
        allMedications,
        allLabResults,
        allAppointments,
        allClinicalNotes,
        allPrescriptions,
        onClose: () => setSelectedPatient(null)
      }
    )
  ] });
}
function Patients({
  onSelectPatient
} = {}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PatientsProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PatientsInner, { onSelectPatient }) });
}
export {
  Patients as default,
  getCareGapOverdueNames,
  getLabFlag
};
