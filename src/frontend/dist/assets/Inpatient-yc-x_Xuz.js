import { p as React, j as jsxRuntimeExports, f as useActor, u as useDemoMode, r as reactExports, E as DEMO_INPATIENT_BEDS, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
const InpatientCapacityStats = React.memo(
  function InpatientCapacityStats2({ wards }) {
    const totalBeds = wards.reduce((sum, w) => sum + w.beds.length, 0);
    const occupied = wards.reduce(
      (sum, w) => sum + w.beds.filter((b) => b.status === "occupied").length,
      0
    );
    const available = wards.reduce(
      (sum, w) => sum + w.beds.filter((b) => b.status === "available").length,
      0
    );
    const reserved = wards.reduce(
      (sum, w) => sum + w.beds.filter((b) => b.status === "reserved").length,
      0
    );
    const stats = [
      {
        label: "Total Beds",
        value: totalBeds,
        color: "var(--chart-1)",
        sub: "across all wards"
      },
      {
        label: "Occupied",
        value: occupied,
        color: "var(--destructive)",
        sub: `${Math.round(occupied / Math.max(totalBeds, 1) * 100)}% occupancy`
      },
      {
        label: "Available",
        value: available,
        color: "var(--success)",
        sub: "ready for admission"
      },
      {
        label: "Reserved",
        value: reserved,
        color: "var(--warning)",
        sub: "held / pending"
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm px-4 py-3 shadow-card",
        "data-ocid": "inpatient.stats.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", style: { color: stat.color }, children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: stat.sub })
        ]
      },
      stat.label
    )) });
  }
);
function morseTotalScore(a) {
  return a.morseHistory + a.morseSecondary + a.morseAid + a.morseIV + a.morseGait + a.morseMental;
}
function morseRiskLevel(score) {
  if (score < 25) return { label: "Low Risk", variant: "success" };
  if (score < 51) return { label: "Medium Risk", variant: "warning" };
  return { label: "High Risk", variant: "danger" };
}
function bradenTotalScore(a) {
  return a.bradenSensory + a.bradenMoisture + a.bradenActivity + a.bradenMobility + a.bradenNutrition + a.bradenFriction;
}
function bradenRiskLevel(score) {
  if (score <= 9) return { label: "Very High Risk", variant: "danger" };
  if (score <= 12) return { label: "High Risk", variant: "danger" };
  if (score <= 14) return { label: "Moderate Risk", variant: "warning" };
  return { label: "Low Risk", variant: "success" };
}
const ISOLATION_BADGE = {
  Contact: {
    label: "C",
    color: "bg-warning/15 text-warning border-warning/30"
  },
  Droplet: {
    label: "D",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  Airborne: {
    label: "A",
    color: "bg-destructive/10 text-destructive border-destructive/20"
  }
};
function bedStatusVariant(s) {
  if (s === "available") return "success";
  if (s === "reserved") return "warning";
  return "info";
}
function historyActionVariant(a) {
  if (a === "admitted") return "info";
  if (a === "discharged") return "success";
  return "warning";
}
const InpatientContext = reactExports.createContext(null);
function useInpatientContext() {
  const ctx = reactExports.useContext(InpatientContext);
  if (!ctx)
    throw new Error(
      "useInpatientContext must be used within InpatientProvider"
    );
  return ctx;
}
const INITIAL_WARDS = [
  {
    id: "icu",
    name: "ICU",
    beds: [
      {
        number: "ICU-01",
        status: "occupied",
        patientName: "James Harrington",
        admittedDate: "Mar 10",
        diagnosis: "Post-operative cardiac",
        isolation: "Contact",
        isolationNotes: "MRSA wound infection — contact precautions",
        safetyAssessment: {
          morseHistory: 25,
          morseSecondary: 15,
          morseAid: 0,
          morseIV: 20,
          morseGait: 10,
          morseMental: 15,
          bradenSensory: 2,
          bradenMoisture: 3,
          bradenActivity: 1,
          bradenMobility: 2,
          bradenNutrition: 3,
          bradenFriction: 2,
          assessedDate: "2026-03-13"
        },
        history: [
          {
            date: "Mar 10",
            action: "admitted",
            patientName: "James Harrington",
            diagnosis: "Post-operative cardiac"
          }
        ]
      },
      {
        number: "ICU-02",
        status: "occupied",
        patientName: "Maria Gonzalez",
        admittedDate: "Mar 11",
        diagnosis: "Respiratory failure",
        isolation: "Airborne",
        isolationNotes: "Rule out TB — pending cultures",
        safetyAssessment: {
          morseHistory: 0,
          morseSecondary: 15,
          morseAid: 15,
          morseIV: 20,
          morseGait: 20,
          morseMental: 15,
          bradenSensory: 3,
          bradenMoisture: 2,
          bradenActivity: 1,
          bradenMobility: 2,
          bradenNutrition: 2,
          bradenFriction: 1,
          assessedDate: "2026-03-13"
        },
        history: [
          {
            date: "Mar 11",
            action: "admitted",
            patientName: "Maria Gonzalez",
            diagnosis: "Respiratory failure"
          }
        ]
      },
      { number: "ICU-03", status: "available" },
      { number: "ICU-04", status: "reserved" },
      {
        number: "ICU-05",
        status: "occupied",
        patientName: "Robert Chen",
        admittedDate: "Mar 12",
        diagnosis: "Septic shock",
        history: [
          {
            date: "Mar 12",
            action: "admitted",
            patientName: "Robert Chen",
            diagnosis: "Septic shock"
          }
        ]
      },
      { number: "ICU-06", status: "available" }
    ]
  },
  {
    id: "general",
    name: "General Medicine",
    beds: [
      {
        number: "GEN-01",
        status: "occupied",
        patientName: "Eleanor Voss",
        admittedDate: "Mar 08",
        diagnosis: "Pneumonia",
        history: [
          {
            date: "Mar 08",
            action: "admitted",
            patientName: "Eleanor Voss",
            diagnosis: "Pneumonia"
          }
        ]
      },
      {
        number: "GEN-02",
        status: "occupied",
        patientName: "Michael Torres",
        admittedDate: "Mar 09",
        diagnosis: "COPD exacerbation",
        history: [
          {
            date: "Mar 09",
            action: "admitted",
            patientName: "Michael Torres",
            diagnosis: "COPD exacerbation"
          }
        ]
      },
      { number: "GEN-03", status: "available" },
      {
        number: "GEN-04",
        status: "occupied",
        patientName: "Sandra Kim",
        admittedDate: "Mar 10",
        diagnosis: "Cellulitis",
        history: [
          {
            date: "Mar 10",
            action: "admitted",
            patientName: "Sandra Kim",
            diagnosis: "Cellulitis"
          }
        ]
      },
      { number: "GEN-05", status: "available" },
      { number: "GEN-06", status: "reserved" },
      {
        number: "GEN-07",
        status: "occupied",
        patientName: "Frank Nguyen",
        admittedDate: "Mar 11",
        diagnosis: "Heart failure exacerbation",
        history: [
          {
            date: "Mar 11",
            action: "admitted",
            patientName: "Frank Nguyen",
            diagnosis: "Heart failure exacerbation"
          }
        ]
      },
      { number: "GEN-08", status: "available" }
    ]
  },
  {
    id: "surgical",
    name: "Surgical",
    beds: [
      {
        number: "SUR-11",
        status: "occupied",
        patientName: "Raymond Cho",
        admittedDate: "Mar 11",
        diagnosis: "Knee arthroscopy",
        history: [
          {
            date: "Mar 11",
            action: "admitted",
            patientName: "Raymond Cho",
            diagnosis: "Knee arthroscopy"
          }
        ]
      },
      { number: "SUR-12", status: "reserved" },
      { number: "SUR-13", status: "available" },
      {
        number: "SUR-14",
        status: "occupied",
        patientName: "Evelyn Carter",
        admittedDate: "Mar 12",
        diagnosis: "Thyroidectomy",
        history: [
          {
            date: "Mar 12",
            action: "admitted",
            patientName: "Evelyn Carter",
            diagnosis: "Thyroidectomy"
          }
        ]
      },
      { number: "SUR-15", status: "available" }
    ]
  },
  {
    id: "pediatric",
    name: "Pediatric",
    beds: [
      {
        number: "PED-01",
        status: "occupied",
        patientName: "Emma Wilson (8y)",
        admittedDate: "Mar 11",
        diagnosis: "Asthma exacerbation",
        history: [
          {
            date: "Mar 11",
            action: "admitted",
            patientName: "Emma Wilson (8y)",
            diagnosis: "Asthma exacerbation"
          }
        ]
      },
      {
        number: "PED-02",
        status: "occupied",
        patientName: "Liam Brown (4y)",
        admittedDate: "Mar 12",
        diagnosis: "Febrile seizure",
        history: [
          {
            date: "Mar 12",
            action: "admitted",
            patientName: "Liam Brown (4y)",
            diagnosis: "Febrile seizure"
          }
        ]
      },
      { number: "PED-03", status: "available" },
      {
        number: "PED-04",
        status: "occupied",
        patientName: "Sofia Martinez (12y)",
        admittedDate: "Mar 10",
        diagnosis: "Appendicitis",
        history: [
          {
            date: "Mar 10",
            action: "admitted",
            patientName: "Sofia Martinez (12y)",
            diagnosis: "Appendicitis"
          }
        ]
      },
      { number: "PED-05", status: "available" },
      { number: "PED-06", status: "reserved" },
      {
        number: "PED-07",
        status: "occupied",
        patientName: "Noah Davis (6y)",
        admittedDate: "Mar 13",
        diagnosis: "RSV bronchiolitis",
        history: [
          {
            date: "Mar 13",
            action: "admitted",
            patientName: "Noah Davis (6y)",
            diagnosis: "RSV bronchiolitis"
          }
        ]
      }
    ]
  },
  {
    id: "emergency",
    name: "Emergency",
    beds: [
      {
        number: "ER-01",
        status: "occupied",
        patientName: "Unknown (Trauma)",
        admittedDate: "Mar 13",
        diagnosis: "MVA injuries",
        history: [
          {
            date: "Mar 13",
            action: "admitted",
            patientName: "Unknown (Trauma)",
            diagnosis: "MVA injuries"
          }
        ]
      },
      {
        number: "ER-02",
        status: "occupied",
        patientName: "Marcus Hill",
        admittedDate: "Mar 13",
        diagnosis: "Acute MI",
        history: [
          {
            date: "Mar 13",
            action: "admitted",
            patientName: "Marcus Hill",
            diagnosis: "Acute MI"
          }
        ]
      },
      { number: "ER-03", status: "available" },
      { number: "ER-04", status: "available" }
    ]
  }
];
const INITIAL_ROUNDING_NOTES = {
  "icu:ICU-01": [
    {
      id: "r1",
      timestamp: "Mar 16, 07:30",
      provider: "Dr. Sarah Chen",
      note: "Patient stable post-op. BP 118/76, HR 72. Wound site clean. Plan to reduce vasopressor support today."
    },
    {
      id: "r2",
      timestamp: "Mar 15, 19:00",
      provider: "Dr. Marcus Williams",
      note: "Evening rounds. Patient alert and oriented x3. Pain 3/10. Continue current management."
    }
  ],
  "icu:ICU-02": [
    {
      id: "r3",
      timestamp: "Mar 16, 08:00",
      provider: "Dr. James Rodriguez",
      note: "Respiratory status improved. FiO2 weaned to 0.4. Plan for possible extubation tomorrow."
    }
  ],
  "general:GEN-01": [
    {
      id: "r4",
      timestamp: "Mar 16, 09:00",
      provider: "NP Maria Santos",
      note: "Ambulating with assist x2. Diet advanced to soft. Social work consult placed for discharge planning."
    }
  ]
};
function InpatientProvider({ children }) {
  const { actor: realActor } = useActor();
  const { isDemoMode, demoActor } = useDemoMode();
  const actor = isDemoMode ? demoActor : realActor;
  const [wards, setWards] = reactExports.useState(() => {
    if (isDemoMode) {
      const wardMap = {
        icu: { id: "icu", name: "ICU", beds: [] },
        general: { id: "general", name: "General Medicine", beds: [] },
        surgical: { id: "surgical", name: "Surgical", beds: [] },
        pediatric: { id: "pediatric", name: "Pediatric", beds: [] },
        emergency: { id: "emergency", name: "Emergency", beds: [] }
      };
      for (const bed of DEMO_INPATIENT_BEDS) {
        if (wardMap[bed.wardId]) {
          wardMap[bed.wardId].beds.push({
            number: bed.number,
            status: bed.status,
            patientName: bed.patientName,
            admittedDate: bed.admittedDate,
            diagnosis: bed.diagnosis,
            history: []
          });
        }
      }
      const result = Object.values(wardMap).filter((w) => w.beds.length > 0);
      return result.length > 0 ? result : INITIAL_WARDS;
    }
    return INITIAL_WARDS;
  });
  const [admitForm, setAdmitForm] = reactExports.useState(null);
  const [dischargeConfirm, setDischargeConfirm] = reactExports.useState(null);
  const [expandedHistory, setExpandedHistory] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [expandedTransferHistory, setExpandedTransferHistory] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedRounding, setExpandedRounding] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [roundingNotes, setRoundingNotes] = reactExports.useState(INITIAL_ROUNDING_NOTES);
  const [roundingFormKey, setRoundingFormKey] = reactExports.useState(null);
  const [roundingFormText, setRoundingFormText] = reactExports.useState("");
  const [transferForm, setTransferForm] = reactExports.useState(null);
  const [dietaryOrders, setDietaryOrders] = reactExports.useState({});
  const [editingDiet, setEditingDiet] = reactExports.useState(null);
  const [dischargeChecklists, setDischargeChecklists] = reactExports.useState({});
  const [expandedChecklist, setExpandedChecklist] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [globalAdmitOpen, setGlobalAdmitOpen] = reactExports.useState(false);
  const [globalAdmitForm, setGlobalAdmitForm] = reactExports.useState({
    patientName: "",
    age: "",
    diagnosis: "",
    wardId: "",
    bedNumber: "",
    attendingPhysician: ""
  });
  const [dietForm, setDietForm] = reactExports.useState({
    dietType: "Regular",
    texture: "Regular",
    foodAllergies: "",
    supplements: ""
  });
  const toggleHistory = (wardId, bedNumber) => {
    const key = `${wardId}:${bedNumber}`;
    setExpandedHistory((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  const toggleTransferHistory = (wardId, bedNum) => {
    const key = `${wardId}:${bedNum}`;
    setExpandedTransferHistory((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  const toggleRounding = (wardId, bedNum) => {
    const key = `${wardId}:${bedNum}`;
    setExpandedRounding((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  const handleAddRoundingNote = (wardId, bedNum) => {
    if (!roundingFormText.trim()) return;
    const key = `${wardId}:${bedNum}`;
    const newNote = {
      id: `rn-${Date.now()}`,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      provider: "Dr. Sarah Chen",
      note: roundingFormText.trim()
    };
    setRoundingNotes((prev) => ({
      ...prev,
      [key]: [newNote, ...prev[key] ?? []]
    }));
    setRoundingFormText("");
    setRoundingFormKey(null);
  };
  const handleAdmit = () => {
    if (!admitForm || !admitForm.name.trim()) return;
    setWards(
      (prev) => prev.map((w) => {
        if (w.id !== admitForm.wardId) return w;
        const firstAvail = w.beds.findIndex((b) => b.status === "available");
        if (firstAvail === -1) return w;
        const newBeds = [...w.beds];
        const entry = {
          date: "Mar 13",
          action: "admitted",
          patientName: admitForm.name,
          diagnosis: admitForm.diagnosis || "Pending assessment"
        };
        newBeds[firstAvail] = {
          ...newBeds[firstAvail],
          status: "occupied",
          patientName: admitForm.name,
          admittedDate: "Mar 13",
          diagnosis: admitForm.diagnosis || "Pending assessment",
          history: [...newBeds[firstAvail].history ?? [], entry]
        };
        return { ...w, beds: newBeds };
      })
    );
    setAdmitForm(null);
    if (actor && admitForm) {
      actor.createClinicalNote(
        1n,
        "inpatient-admission",
        JSON.stringify({
          ward: admitForm.wardId,
          patientName: admitForm.name,
          diagnosis: admitForm.diagnosis,
          date: (/* @__PURE__ */ new Date()).toISOString()
        }),
        0n
      ).catch(() => {
      });
    }
  };
  const handleDischarge = () => {
    if (!dischargeConfirm) return;
    setWards(
      (prev) => prev.map((w) => {
        if (w.id !== dischargeConfirm.wardId) return w;
        return {
          ...w,
          beds: w.beds.map((b) => {
            if (b.number !== dischargeConfirm.bedNumber) return b;
            const entry = {
              date: "Mar 13",
              action: "discharged",
              patientName: b.patientName ?? "Unknown",
              diagnosis: b.diagnosis
            };
            return {
              number: b.number,
              status: "available",
              history: [...b.history ?? [], entry]
            };
          })
        };
      })
    );
    if (actor && dischargeConfirm) {
      actor.createClinicalNote(
        1n,
        "inpatient-discharge",
        JSON.stringify({
          ward: dischargeConfirm.wardId,
          bed: dischargeConfirm.bedNumber,
          date: (/* @__PURE__ */ new Date()).toISOString()
        }),
        0n
      ).catch(() => {
      });
    }
    setDischargeConfirm(null);
  };
  const handleTransfer = () => {
    if (!transferForm || !transferForm.destWardId || !transferForm.destBedNumber)
      return;
    const { wardId, bedNumber, destWardId, destBedNumber } = transferForm;
    setWards((prev) => {
      const srcWard = prev.find((w) => w.id === wardId);
      const srcBed = srcWard == null ? void 0 : srcWard.beds.find((b) => b.number === bedNumber);
      if (!srcBed) return prev;
      return prev.map((w) => {
        if (w.id === wardId) {
          return {
            ...w,
            beds: w.beds.map((b) => {
              if (b.number !== bedNumber) return b;
              return {
                number: b.number,
                status: "available",
                history: [
                  ...b.history ?? [],
                  {
                    date: "Mar 13",
                    action: "transferred",
                    patientName: b.patientName ?? "Unknown",
                    diagnosis: `Transferred to ${destBedNumber}`
                  }
                ]
              };
            })
          };
        }
        if (w.id === destWardId) {
          return {
            ...w,
            beds: w.beds.map((b) => {
              if (b.number !== destBedNumber) return b;
              return {
                ...b,
                status: "occupied",
                patientName: srcBed.patientName,
                admittedDate: srcBed.admittedDate,
                diagnosis: srcBed.diagnosis,
                history: [
                  ...b.history ?? [],
                  {
                    date: "Mar 13",
                    action: "transferred",
                    patientName: srcBed.patientName ?? "Unknown",
                    diagnosis: `Transferred from ${bedNumber}`
                  }
                ]
              };
            })
          };
        }
        return w;
      });
    });
    ue.success(`Patient transferred to ${destBedNumber}`);
    setTransferForm(null);
    if (actor) {
      actor.createClinicalNote(
        1n,
        "inpatient-transfer",
        JSON.stringify({ transferForm, date: (/* @__PURE__ */ new Date()).toISOString() }),
        0n
      ).catch(() => {
      });
    }
  };
  const handleGlobalAdmit = () => {
    if (!globalAdmitForm.patientName || !globalAdmitForm.wardId || !globalAdmitForm.bedNumber) {
      ue.error("Patient name, ward, and bed are required.");
      return;
    }
    setWards(
      (prev) => prev.map((w) => {
        if (w.id !== globalAdmitForm.wardId) return w;
        return {
          ...w,
          beds: w.beds.map((b) => {
            if (b.number !== globalAdmitForm.bedNumber) return b;
            return {
              ...b,
              status: "occupied",
              patientName: globalAdmitForm.patientName,
              diagnosis: globalAdmitForm.diagnosis,
              admittedDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
              }),
              history: [
                ...b.history ?? [],
                {
                  date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                  }),
                  action: "admitted",
                  patientName: globalAdmitForm.patientName,
                  diagnosis: globalAdmitForm.diagnosis
                }
              ]
            };
          })
        };
      })
    );
    ue.success(
      `${globalAdmitForm.patientName} admitted to ${globalAdmitForm.bedNumber}`
    );
    setGlobalAdmitOpen(false);
    setGlobalAdmitForm({
      patientName: "",
      age: "",
      diagnosis: "",
      wardId: "",
      bedNumber: "",
      attendingPhysician: ""
    });
  };
  const saveDietaryOrder = (key, order) => {
    setDietaryOrders((prev) => ({ ...prev, [key]: { ...order } }));
    setEditingDiet(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    InpatientContext.Provider,
    {
      value: {
        wards,
        setWards,
        admitForm,
        setAdmitForm,
        dischargeConfirm,
        setDischargeConfirm,
        expandedHistory,
        expandedTransferHistory,
        expandedRounding,
        roundingNotes,
        roundingFormKey,
        setRoundingFormKey,
        roundingFormText,
        setRoundingFormText,
        transferForm,
        setTransferForm,
        dietaryOrders,
        editingDiet,
        setEditingDiet,
        dischargeChecklists,
        setDischargeChecklists,
        expandedChecklist,
        setExpandedChecklist,
        globalAdmitOpen,
        setGlobalAdmitOpen,
        globalAdmitForm,
        setGlobalAdmitForm,
        dietForm,
        setDietForm,
        toggleHistory,
        toggleTransferHistory,
        toggleRounding,
        handleAddRoundingNote,
        handleAdmit,
        handleDischarge,
        handleTransfer,
        handleGlobalAdmit,
        saveDietaryOrder
      },
      children
    }
  );
}
function SafetyAssessmentSection({
  bed,
  onSave
}) {
  const defaultAssessment = {
    morseHistory: 0,
    morseSecondary: 0,
    morseAid: 0,
    morseIV: 0,
    morseGait: 0,
    morseMental: 0,
    bradenSensory: 3,
    bradenMoisture: 3,
    bradenActivity: 3,
    bradenMobility: 3,
    bradenNutrition: 3,
    bradenFriction: 2,
    assessedDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
  };
  const [expanded, setExpanded] = React.useState(false);
  const [assessing, setAssessing] = React.useState(false);
  const [draft, setDraft] = React.useState(
    bed.safetyAssessment ?? defaultAssessment
  );
  const existing = bed.safetyAssessment;
  const handleSave = () => {
    onSave(draft);
    setAssessing(false);
    ue.success("Safety assessment saved");
  };
  const morseFields = [
    {
      label: "History of falling",
      field: "morseHistory",
      opts: [
        { label: "No", v: 0 },
        { label: "Yes", v: 25 }
      ]
    },
    {
      label: "Secondary diagnosis",
      field: "morseSecondary",
      opts: [
        { label: "No", v: 0 },
        { label: "Yes", v: 15 }
      ]
    },
    {
      label: "IV / Heparin lock",
      field: "morseIV",
      opts: [
        { label: "No", v: 0 },
        { label: "Yes", v: 20 }
      ]
    },
    {
      label: "Mental status",
      field: "morseMental",
      opts: [
        { label: "Knows ability", v: 0 },
        { label: "Forgets limits", v: 15 }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border-t border-border",
      "data-ocid": `inpatient.safety.${bed.number}.panel`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((v) => !v),
            className: "w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
            "data-ocid": `inpatient.safety.${bed.number}.toggle`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Safety Assessments" }),
              existing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-xs font-semibold px-1.5 py-0.5 rounded border ${morseRiskLevel(morseTotalScore(existing)).variant === "success" ? "bg-success/10 text-success border-success/20" : morseRiskLevel(morseTotalScore(existing)).variant === "warning" ? "bg-warning/15 text-warning border-warning/30" : "bg-destructive/10 text-destructive border-destructive/20"}`,
                    children: [
                      "MFS: ",
                      morseTotalScore(existing)
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-xs font-semibold px-1.5 py-0.5 rounded border ${bradenRiskLevel(bradenTotalScore(existing)).variant === "success" ? "bg-success/10 text-success border-success/20" : bradenRiskLevel(bradenTotalScore(existing)).variant === "warning" ? "bg-warning/15 text-warning border-warning/30" : "bg-destructive/10 text-destructive border-destructive/20"}`,
                    children: [
                      "Braden: ",
                      bradenTotalScore(existing)
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-warning font-medium", children: "Not assessed" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2.5 pb-2.5 space-y-2 bg-muted/20", children: existing && !assessing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: morseRiskLevel(morseTotalScore(existing)).variant,
                label: `Fall: ${morseRiskLevel(morseTotalScore(existing)).label} (${morseTotalScore(existing)})`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatusBadge,
              {
                variant: bradenRiskLevel(bradenTotalScore(existing)).variant,
                label: `PU: ${bradenRiskLevel(bradenTotalScore(existing)).label} (${bradenTotalScore(existing)})`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Assessed: ",
            existing.assessedDate
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setDraft(existing);
                setAssessing(true);
              },
              className: "text-xs text-primary underline",
              "data-ocid": `inpatient.safety.${bed.number}.edit_button`,
              children: "Reassess"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Morse Fall Scale" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: morseFields.map(({ label, field, opts }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground flex-1 pr-1", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: opts.map(({ label: ol, v }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setDraft((p) => ({ ...p, [field]: v })),
                    className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${draft[field] === v ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:text-foreground"}`,
                    children: ol
                  },
                  v
                )) })
              ]
            },
            field
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleSave,
                className: "flex-1 text-xs font-semibold py-1 rounded-sm text-white",
                style: { background: "var(--primary)" },
                children: "Save Assessment"
              }
            ),
            existing && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setAssessing(false),
                className: "text-xs text-muted-foreground px-2 py-1 rounded-sm border border-border",
                children: "Cancel"
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
const BedCard = React.memo(function BedCard2({
  ward,
  bed,
  idx
}) {
  const {
    wards,
    setWards,
    dischargeConfirm,
    setDischargeConfirm,
    expandedHistory,
    expandedTransferHistory,
    expandedRounding,
    roundingNotes,
    roundingFormKey,
    setRoundingFormKey,
    roundingFormText,
    setRoundingFormText,
    transferForm,
    setTransferForm,
    dietaryOrders,
    editingDiet,
    setEditingDiet,
    dischargeChecklists,
    setDischargeChecklists,
    expandedChecklist,
    setExpandedChecklist,
    dietForm,
    setDietForm,
    toggleHistory,
    toggleTransferHistory,
    toggleRounding,
    handleAddRoundingNote,
    handleDischarge,
    handleTransfer,
    saveDietaryOrder
  } = useInpatientContext();
  const historyOpen = expandedHistory.has(`${ward.id}:${bed.number}`);
  const isTransferring = (transferForm == null ? void 0 : transferForm.wardId) === ward.id && (transferForm == null ? void 0 : transferForm.bedNumber) === bed.number;
  const dietKey = `${ward.id}:${bed.number}`;
  const currentDiet = dietaryOrders[dietKey];
  const isEditingThisDiet = editingDiet === dietKey;
  const statKey = `${ward.id}:${bed.number}`;
  const checklist = dischargeChecklists[statKey] ?? {};
  const checklistOpen = expandedChecklist.has(statKey);
  const STAT_ORDERS = ["CBC", "BMP", "12-lead ECG", "Chest X-Ray"];
  const DISCHARGE_ITEMS = [
    "Medications reconciled",
    "Follow-up scheduled",
    "Patient education provided",
    "Transportation arranged"
  ];
  const allChecked = DISCHARGE_ITEMS.every((item) => checklist[item]);
  const destWard = (transferForm == null ? void 0 : transferForm.destWardId) ? wards.find((w) => w.id === transferForm.destWardId) : null;
  const availableDestBeds = destWard ? destWard.beds.filter(
    (b) => b.status === "available" && b.number !== bed.number
  ) : [];
  const borderColor = bed.status === "available" ? "rgb(187 247 208)" : bed.status === "reserved" ? "rgb(253 230 138)" : "rgb(191 219 254)";
  const bgColor = bed.status === "available" ? "rgba(187,247,208,0.3)" : bed.status === "reserved" ? "rgba(253,230,138,0.3)" : "rgb(248 250 252)";
  const handleToggleDietEdit = () => {
    if (isEditingThisDiet) {
      setEditingDiet(null);
    } else {
      setEditingDiet(dietKey);
      setDietForm(
        currentDiet ?? {
          dietType: "Regular",
          texture: "Regular",
          foodAllergies: "",
          supplements: ""
        }
      );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `inpatient.${ward.id}.bed.${idx + 1}`,
      className: "border border-border rounded-sm overflow-hidden",
      style: {
        borderColor,
        borderLeftWidth: bed.isolation ? "3px" : void 0,
        borderLeftColor: bed.isolation === "Contact" ? "rgb(217 119 6)" : bed.isolation === "Droplet" ? "rgb(37 99 235)" : bed.isolation === "Airborne" ? "rgb(220 38 38)" : void 0
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-2.5 py-2 text-left",
            style: { background: bgColor },
            onClick: () => toggleHistory(ward.id, bed.number),
            "data-ocid": `inpatient.${ward.id}.history.panel.${idx + 1}`,
            "aria-expanded": historyOpen,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: bed.number }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                bed.isolation && ISOLATION_BADGE[bed.isolation] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs font-bold px-1 py-0.5 rounded border ${ISOLATION_BADGE[bed.isolation].color}`,
                    title: `${bed.isolation} isolation`,
                    children: ISOLATION_BADGE[bed.isolation].label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: bedStatusVariant(bed.status),
                    label: bed.status
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5", children: bed.status === "occupied" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-snug truncate", children: bed.patientName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-snug", children: bed.diagnosis }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            "Admitted ",
            bed.admittedDate
          ] }),
          bed.safetyAssessment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex flex-wrap gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-xs font-semibold px-1.5 py-0.5 rounded border ${morseRiskLevel(morseTotalScore(bed.safetyAssessment)).variant === "success" ? "bg-success/10 text-success border-success/20" : morseRiskLevel(morseTotalScore(bed.safetyAssessment)).variant === "warning" ? "bg-warning/15 text-warning border-warning/30" : "bg-destructive/10 text-destructive border-destructive/20"}`,
                children: [
                  "Fall:",
                  " ",
                  morseRiskLevel(morseTotalScore(bed.safetyAssessment)).label
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-xs font-semibold px-1.5 py-0.5 rounded border ${bradenRiskLevel(bradenTotalScore(bed.safetyAssessment)).variant === "success" ? "bg-success/10 text-success border-success/20" : bradenRiskLevel(bradenTotalScore(bed.safetyAssessment)).variant === "warning" ? "bg-warning/15 text-warning border-warning/30" : "bg-destructive/10 text-destructive border-destructive/20"}`,
                children: [
                  "Braden: ",
                  bradenTotalScore(bed.safetyAssessment)
                ]
              }
            )
          ] }),
          (dischargeConfirm == null ? void 0 : dischargeConfirm.wardId) === ward.id && dischargeConfirm.bedNumber === bed.number ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Discharge?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.discharge.confirm_button.${idx + 1}`,
                onClick: handleDischarge,
                className: "text-xs font-semibold px-1.5 py-0.5 rounded-sm",
                style: {
                  color: "var(--destructive)",
                  border: "1px solid rgb(252 165 165)"
                },
                children: "Yes"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.discharge.cancel_button.${idx + 1}`,
                onClick: () => setDischargeConfirm(null),
                className: "text-xs text-muted-foreground px-1.5 py-0.5 rounded-sm border border-border",
                children: "No"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.discharge.button.${idx + 1}`,
                onClick: () => setDischargeConfirm({
                  wardId: ward.id,
                  bedNumber: bed.number
                }),
                className: "flex-1 text-xs font-medium text-muted-foreground px-1.5 py-1 rounded-sm border border-border hover:text-foreground transition-colors",
                children: "Discharge"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.transfer.button.${idx + 1}`,
                onClick: () => isTransferring ? setTransferForm(null) : setTransferForm({
                  wardId: ward.id,
                  bedNumber: bed.number,
                  destWardId: "",
                  destBedNumber: ""
                }),
                className: "flex-1 text-xs font-medium px-1.5 py-1 rounded-sm border transition-colors",
                style: {
                  color: "var(--chart-4)",
                  borderColor: "var(--chart-4)"
                },
                children: "Transfer"
              }
            )
          ] })
        ] }) : bed.status === "reserved" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Reserved" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", style: { color: "var(--success)" }, children: "Available" }) }),
        bed.status === "occupied" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SafetyAssessmentSection,
          {
            bed,
            onSave: (assessment) => {
              setWards(
                (prev) => prev.map(
                  (w) => w.id !== ward.id ? w : {
                    ...w,
                    beds: w.beds.map(
                      (b) => b.number !== bed.number ? b : { ...b, safetyAssessment: assessment }
                    )
                  }
                )
              );
            }
          }
        ),
        bed.status === "occupied" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-2.5 py-2 bg-muted/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground uppercase tracking-wide", children: "Dietary Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.diet.edit_button.${idx + 1}`,
                onClick: handleToggleDietEdit,
                className: "text-xs font-medium text-primary hover:underline",
                children: isEditingThisDiet ? "Cancel" : "Edit Diet"
              }
            )
          ] }),
          !isEditingThisDiet ? currentDiet ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            currentDiet.dietType,
            currentDiet.texture !== "Regular" ? ` / ${currentDiet.texture}` : "",
            currentDiet.foodAllergies ? ` · Allergies: ${currentDiet.foodAllergies}` : ""
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No dietary order on file" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "space-y-1.5 mt-1",
              "data-ocid": `inpatient.${ward.id}.diet.panel.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: `diet-type-${ward.id}-${idx}`,
                        className: "block text-xs text-muted-foreground mb-0.5",
                        children: "Diet Type"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        id: `diet-type-${ward.id}-${idx}`,
                        "data-ocid": `inpatient.${ward.id}.diet.type.select.${idx + 1}`,
                        value: dietForm.dietType,
                        onChange: (e) => setDietForm((f) => ({ ...f, dietType: e.target.value })),
                        className: "w-full h-6 px-1 text-xs bg-background border border-input rounded-sm focus:outline-none",
                        children: [
                          "Regular",
                          "Low-Sodium",
                          "Diabetic",
                          "Clear Liquids",
                          "NPO",
                          "Renal",
                          "Cardiac"
                        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: `diet-texture-${ward.id}-${idx}`,
                        className: "block text-xs text-muted-foreground mb-0.5",
                        children: "Texture"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        id: `diet-texture-${ward.id}-${idx}`,
                        "data-ocid": `inpatient.${ward.id}.diet.texture.select.${idx + 1}`,
                        value: dietForm.texture,
                        onChange: (e) => setDietForm((f) => ({ ...f, texture: e.target.value })),
                        className: "w-full h-6 px-1 text-xs bg-background border border-input rounded-sm focus:outline-none",
                        children: ["Regular", "Soft", "Pureed", "Mechanical Soft"].map(
                          (t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t)
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: `diet-allergy-${ward.id}-${idx}`,
                        className: "block text-xs text-muted-foreground mb-0.5",
                        children: "Food Allergies"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        id: `diet-allergy-${ward.id}-${idx}`,
                        "data-ocid": `inpatient.${ward.id}.diet.allergies.input.${idx + 1}`,
                        value: dietForm.foodAllergies,
                        onChange: (e) => setDietForm((f) => ({
                          ...f,
                          foodAllergies: e.target.value
                        })),
                        placeholder: "e.g. Shellfish, Nuts",
                        className: "w-full h-6 px-1 text-xs bg-background border border-input rounded-sm focus:outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: `diet-supp-${ward.id}-${idx}`,
                        className: "block text-xs text-muted-foreground mb-0.5",
                        children: "Supplements"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        id: `diet-supp-${ward.id}-${idx}`,
                        "data-ocid": `inpatient.${ward.id}.diet.supplements.input.${idx + 1}`,
                        value: dietForm.supplements,
                        onChange: (e) => setDietForm((f) => ({
                          ...f,
                          supplements: e.target.value
                        })),
                        placeholder: "e.g. Ensure, Vitamin D",
                        className: "w-full h-6 px-1 text-xs bg-background border border-input rounded-sm focus:outline-none"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `inpatient.${ward.id}.diet.save_button.${idx + 1}`,
                    onClick: () => saveDietaryOrder(dietKey, dietForm),
                    className: "text-xs font-semibold px-2 py-0.5 rounded-sm text-white",
                    style: { background: "var(--primary)" },
                    children: "Save"
                  }
                )
              ]
            }
          )
        ] }),
        bed.status === "occupied" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-2.5 py-2 bg-muted/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5", children: "Stat Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: STAT_ORDERS.map((test) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.stat.button.${idx + 1}`,
                onClick: () => ue.success(`Stat order placed: ${test}`, {
                  duration: 3e3
                }),
                className: "text-xs font-semibold px-2 py-0.5 rounded-sm border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
                children: test
              },
              test
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.checklist.toggle.${idx + 1}`,
                onClick: () => setExpandedChecklist((prev) => {
                  const next = new Set(prev);
                  if (next.has(statKey)) next.delete(statKey);
                  else next.add(statKey);
                  return next;
                }),
                className: "w-full flex items-center justify-between px-2.5 py-1.5 hover:bg-muted/20 transition-colors text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground uppercase tracking-wide", children: "Discharge Checklist" }),
                    allChecked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-success bg-success/10 px-1.5 py-0.5 rounded-sm border border-success/20", children: "Complete" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: `w-3 h-3 text-muted-foreground transition-transform ${checklistOpen ? "rotate-180" : ""}`,
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
                    }
                  )
                ]
              }
            ),
            checklistOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "px-2.5 pb-2 space-y-1.5 bg-muted/10",
                "data-ocid": `inpatient.${ward.id}.checklist.panel.${idx + 1}`,
                children: DISCHARGE_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "flex items-center gap-2 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: checklist[item] ?? false,
                          onChange: (e) => setDischargeChecklists((prev) => ({
                            ...prev,
                            [statKey]: {
                              ...prev[statKey] ?? {},
                              [item]: e.target.checked
                            }
                          })),
                          className: "w-3 h-3 accent-primary",
                          "data-ocid": `inpatient.${ward.id}.checklist.checkbox.${idx + 1}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-xs ${checklist[item] ? "line-through text-muted-foreground" : "text-foreground"}`,
                          children: item
                        }
                      )
                    ]
                  },
                  item
                ))
              }
            )
          ] })
        ] }),
        isTransferring && transferForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border-t border-border px-2.5 py-2 bg-muted/20",
            "data-ocid": `inpatient.${ward.id}.transfer.panel`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-1.5", children: "Transfer Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "dest-ward-select",
                      className: "block text-xs text-muted-foreground mb-0.5",
                      children: "Destination Ward"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "dest-ward-select",
                      value: transferForm.destWardId,
                      onChange: (e) => setTransferForm(
                        (prev) => prev ? {
                          ...prev,
                          destWardId: e.target.value,
                          destBedNumber: ""
                        } : prev
                      ),
                      className: "w-full h-7 px-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select ward..." }),
                        wards.filter((w) => w.id !== ward.id).map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: w.id, children: w.name }, w.id))
                      ]
                    }
                  )
                ] }),
                transferForm.destWardId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "dest-bed-select",
                      className: "block text-xs text-muted-foreground mb-0.5",
                      children: "Destination Bed"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "dest-bed-select",
                      value: transferForm.destBedNumber,
                      onChange: (e) => setTransferForm(
                        (prev) => prev ? { ...prev, destBedNumber: e.target.value } : prev
                      ),
                      className: "w-full h-7 px-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select bed..." }),
                        availableDestBeds.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b.number, children: b.number }, b.number))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 pt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `inpatient.${ward.id}.transfer.confirm_button.${idx + 1}`,
                      onClick: handleTransfer,
                      disabled: !transferForm.destWardId || !transferForm.destBedNumber,
                      className: "flex-1 text-xs font-semibold py-1 rounded-sm text-white disabled:opacity-40",
                      style: { background: "var(--chart-4)" },
                      children: "Confirm"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `inpatient.${ward.id}.transfer.cancel_button.${idx + 1}`,
                      onClick: () => setTransferForm(null),
                      className: "flex-1 text-xs text-muted-foreground py-1 rounded-sm border border-border",
                      children: "Cancel"
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        historyOpen && (bed.history ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border-t border-border px-2.5 py-2 bg-muted/10",
            "data-ocid": `inpatient.${ward.id}.history.panel.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5", children: "Bed History" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: (bed.history ?? []).map((entry, hi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-12 shrink-0 pt-0.5", children: entry.date }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: historyActionVariant(entry.action),
                        label: entry.action
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground leading-snug truncate", children: entry.patientName }),
                      entry.diagnosis && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug truncate", children: entry.diagnosis })
                    ] })
                  ]
                },
                `${entry.date}-${entry.action}-${hi}`
              )) })
            ]
          }
        ),
        bed.status === "occupied" && (bed.transferHistory ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border-t border-border",
            "data-ocid": `inpatient.${ward.id}.transfer_history.panel.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `inpatient.${ward.id}.transfer_history.toggle.${idx + 1}`,
                  onClick: () => toggleTransferHistory(ward.id, bed.number),
                  className: "w-full flex items-center justify-between px-2.5 py-1.5 text-left hover:bg-muted/20 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: [
                      "Transfer History (",
                      (bed.transferHistory ?? []).length,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: expandedTransferHistory.has(`${ward.id}:${bed.number}`) ? "▲" : "▼" })
                  ]
                }
              ),
              expandedTransferHistory.has(`${ward.id}:${bed.number}`) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2.5 pb-2 space-y-2 bg-muted/5", children: (bed.transferHistory ?? []).map((ev, ti) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border border-border rounded-sm p-2 text-xs space-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "info", label: "transfer" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: ev.timestamp })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "From:" }),
                      " ",
                      ev.fromWard,
                      " / ",
                      ev.fromBed
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "To:" }),
                      " ",
                      ev.toWard,
                      " / ",
                      ev.toBed
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Reason:" }),
                      " ",
                      ev.reason
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Provider:" }),
                      " ",
                      ev.orderingProvider
                    ] })
                  ]
                },
                `${ev.timestamp}-${ti}`
              )) })
            ]
          }
        ),
        bed.status === "occupied" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border-t border-border",
            "data-ocid": `inpatient.rounding.panel.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `inpatient.rounding.toggle.${idx + 1}`,
                  onClick: () => toggleRounding(ward.id, bed.number),
                  className: "w-full flex items-center justify-between px-2.5 py-1.5 text-left hover:bg-muted/20 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: [
                      "Rounding Notes (",
                      (roundingNotes[`${ward.id}:${bed.number}`] ?? []).length,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: expandedRounding.has(`${ward.id}:${bed.number}`) ? "▲" : "▼" })
                  ]
                }
              ),
              expandedRounding.has(`${ward.id}:${bed.number}`) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 pb-3 space-y-2 bg-muted/5", children: [
                (roundingNotes[`${ward.id}:${bed.number}`] ?? []).map(
                  (rn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "border border-border rounded-sm p-2 text-xs space-y-0.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: rn.provider }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: rn.timestamp })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed", children: rn.note })
                      ]
                    },
                    rn.id
                  )
                ),
                roundingFormKey === `${ward.id}:${bed.number}` ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      "data-ocid": "inpatient.rounding.note.textarea",
                      value: roundingFormText,
                      onChange: (e) => setRoundingFormText(e.target.value),
                      rows: 3,
                      placeholder: "Enter rounding note...",
                      className: "w-full px-2 py-1.5 text-xs bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring resize-none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "inpatient.rounding.submit_button",
                        onClick: () => handleAddRoundingNote(ward.id, bed.number),
                        className: "px-2.5 py-1 text-xs font-semibold rounded-sm text-white",
                        style: { background: "var(--primary)" },
                        children: "Save Note"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setRoundingFormKey(null);
                          setRoundingFormText("");
                        },
                        className: "px-2.5 py-1 text-xs font-medium rounded-sm text-muted-foreground border border-border",
                        children: "Cancel"
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setRoundingFormKey(`${ward.id}:${bed.number}`);
                      setRoundingFormText("");
                    },
                    className: "flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors pt-0.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          className: "w-3 h-3",
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
                      "Add Rounding Note"
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
});
function WardSection({ wardId }) {
  const { wards, admitForm, setAdmitForm, handleAdmit } = useInpatientContext();
  const ward = wards.find((w) => w.id === wardId);
  if (!ward) return null;
  const wardOccupied = ward.beds.filter((b) => b.status === "occupied").length;
  const wardAvail = ward.beds.filter((b) => b.status === "available").length;
  const isAdmitting = (admitForm == null ? void 0 : admitForm.wardId) === ward.id;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "bg-card border border-border rounded-sm overflow-hidden",
      "data-ocid": `inpatient.${ward.id}.panel`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between px-4 py-3 border-b border-border",
            style: { background: "var(--muted)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: ward.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  ward.beds.length,
                  " beds — ",
                  wardOccupied,
                  " occupied, ",
                  wardAvail,
                  " ",
                  "available"
                ] })
              ] }),
              wardAvail > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `inpatient.${ward.id}.admit.button`,
                  onClick: () => setAdmitForm(
                    isAdmitting ? null : { wardId: ward.id, name: "", diagnosis: "" }
                  ),
                  className: "flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-medium text-white",
                  style: {
                    background: "var(--primary)",
                    border: "1px solid var(--primary)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        className: "w-3 h-3",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        "aria-hidden": "true",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
                        ]
                      }
                    ),
                    "Admit Patient"
                  ]
                }
              )
            ]
          }
        ),
        isAdmitting && admitForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2", children: [
            "Admit Patient to ",
            ward.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `admit-name-${ward.id}`,
                  className: "block text-xs text-muted-foreground mb-0.5",
                  children: "Patient Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `admit-name-${ward.id}`,
                  type: "text",
                  "data-ocid": `inpatient.${ward.id}.admit.name.input`,
                  value: admitForm.name,
                  onChange: (e) => setAdmitForm((f) => f ? { ...f, name: e.target.value } : f),
                  placeholder: "Full name",
                  className: "w-full h-7 px-2 text-xs bg-background border border-input rounded-sm focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `admit-diag-${ward.id}`,
                  className: "block text-xs text-muted-foreground mb-0.5",
                  children: "Diagnosis"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `admit-diag-${ward.id}`,
                  type: "text",
                  "data-ocid": `inpatient.${ward.id}.admit.diagnosis.input`,
                  value: admitForm.diagnosis,
                  onChange: (e) => setAdmitForm(
                    (f) => f ? { ...f, diagnosis: e.target.value } : f
                  ),
                  placeholder: "Primary diagnosis",
                  className: "w-full h-7 px-2 text-xs bg-background border border-input rounded-sm focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.admit.submit_button`,
                onClick: handleAdmit,
                className: "h-7 px-3 text-xs font-semibold text-white rounded-sm",
                style: { background: "var(--primary)" },
                children: "Admit"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `inpatient.${ward.id}.admit.cancel_button`,
                onClick: () => setAdmitForm(null),
                className: "h-7 px-2 text-xs text-muted-foreground border border-border rounded-sm",
                children: "Cancel"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-3", children: ward.beds.map((bed, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(BedCard, { ward, bed, idx }, bed.number)) })
      ]
    }
  );
}
function InpatientInner() {
  var _a;
  const {
    wards,
    globalAdmitOpen,
    setGlobalAdmitOpen,
    globalAdmitForm,
    setGlobalAdmitForm,
    handleGlobalAdmit
  } = useInpatientContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "inpatient.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm overflow-hidden",
        "data-ocid": "inpatient.global-admit.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "inpatient.global-admit.open_modal_button",
              onClick: () => setGlobalAdmitOpen((v) => !v),
              className: "w-full flex items-center justify-between px-4 py-3 hover:bg-muted/20 transition-colors text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "w-4 h-4 text-primary",
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Admit New Patient" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 bg-muted text-muted-foreground rounded-sm font-medium", children: "Select Ward & Bed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: `w-4 h-4 text-muted-foreground transition-transform ${globalAdmitOpen ? "rotate-180" : ""}`,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
                  }
                )
              ]
            }
          ),
          globalAdmitOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 border-t border-border bg-muted/10 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: [
              [
                {
                  id: "ga-name",
                  label: "Patient Name",
                  key: "patientName",
                  placeholder: "Full name"
                },
                {
                  id: "ga-age",
                  label: "Age",
                  key: "age",
                  placeholder: "e.g. 64"
                },
                {
                  id: "ga-diag",
                  label: "Diagnosis",
                  key: "diagnosis",
                  placeholder: "Primary diagnosis..."
                },
                {
                  id: "ga-physician",
                  label: "Attending Physician",
                  key: "attendingPhysician",
                  placeholder: "Dr. Name"
                }
              ].map(({ id, label, key, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: id,
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    children: label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id,
                    "data-ocid": `inpatient.global-admit.${key.toLowerCase()}.input`,
                    value: globalAdmitForm[key],
                    onChange: (e) => setGlobalAdmitForm((f) => ({
                      ...f,
                      [key]: e.target.value
                    })),
                    placeholder,
                    className: "w-full h-8 px-2.5 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
                  }
                )
              ] }, id)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "ga-ward",
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    children: "Ward"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "ga-ward",
                    "data-ocid": "inpatient.global-admit.ward.select",
                    value: globalAdmitForm.wardId,
                    onChange: (e) => setGlobalAdmitForm((f) => ({
                      ...f,
                      wardId: e.target.value,
                      bedNumber: ""
                    })),
                    className: "w-full h-8 px-2 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select ward..." }),
                      wards.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: w.id, children: w.name }, w.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "ga-bed",
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    children: "Bed"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "ga-bed",
                    "data-ocid": "inpatient.global-admit.bed.select",
                    value: globalAdmitForm.bedNumber,
                    onChange: (e) => setGlobalAdmitForm((f) => ({
                      ...f,
                      bedNumber: e.target.value
                    })),
                    className: "w-full h-8 px-2 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring",
                    disabled: !globalAdmitForm.wardId,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select bed..." }),
                      (((_a = wards.find((w) => w.id === globalAdmitForm.wardId)) == null ? void 0 : _a.beds) ?? []).filter((b) => b.status === "available").map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b.number, children: b.number }, b.number))
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "inpatient.global-admit.submit_button",
                  onClick: handleGlobalAdmit,
                  className: "h-8 px-4 rounded-sm text-sm font-semibold text-white",
                  style: { background: "var(--primary)" },
                  children: "Confirm Admission"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "inpatient.global-admit.cancel_button",
                  onClick: () => setGlobalAdmitOpen(false),
                  className: "h-8 px-3 rounded-sm text-sm font-medium text-muted-foreground border border-border hover:text-foreground transition-colors",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InpatientCapacityStats, { wards }),
    wards.map((ward) => /* @__PURE__ */ jsxRuntimeExports.jsx(WardSection, { wardId: ward.id }, ward.id))
  ] });
}
function Inpatient() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InpatientProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InpatientInner, {}) });
}
export {
  Inpatient as default
};
