import { f as useActor, r as reactExports, j as jsxRuntimeExports, B as Button, C as ChevronDown, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D2sDVimt.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Phone } from "./phone-C1YjZqVr.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
const SEED_RESULTS_SEED = [
  {
    id: 1,
    patientName: "Eleanor Vasquez",
    testName: "HbA1c",
    resultSummary: "8.9% (Ref: 4.0–5.6%)",
    flag: "critical",
    orderedDate: "2026-03-10",
    receivedDate: "2026-03-12",
    type: "lab",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 2,
    patientName: "Marcus Webb",
    testName: "Troponin I",
    resultSummary: "0.18 ng/mL (Ref: <0.04)",
    flag: "critical",
    orderedDate: "2026-03-11",
    receivedDate: "2026-03-12",
    type: "lab",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 3,
    patientName: "Diana Cho",
    testName: "Potassium",
    resultSummary: "6.2 mEq/L (Ref: 3.5–5.0)",
    flag: "critical",
    orderedDate: "2026-03-11",
    receivedDate: "2026-03-13",
    type: "lab",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 4,
    patientName: "Robert Kim",
    testName: "Chest X-Ray",
    resultSummary: "Bilateral infiltrates consistent with pneumonia. No pleural effusion.",
    flag: "high",
    orderedDate: "2026-03-10",
    receivedDate: "2026-03-11",
    type: "imaging",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 5,
    patientName: "Eleanor Vasquez",
    testName: "Fasting Glucose",
    resultSummary: "186 mg/dL (Ref: 70–99)",
    flag: "high",
    orderedDate: "2026-03-09",
    receivedDate: "2026-03-11",
    type: "lab",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 6,
    patientName: "James Okafor",
    testName: "CT Abdomen/Pelvis",
    resultSummary: "No acute findings. Mild hepatic steatosis noted.",
    flag: "normal",
    orderedDate: "2026-03-08",
    receivedDate: "2026-03-10",
    type: "imaging",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 7,
    patientName: "Linda Park",
    testName: "Complete Metabolic Panel",
    resultSummary: "Creatinine 1.8 mg/dL (Ref: 0.7–1.3). Remaining values WNL.",
    flag: "high",
    orderedDate: "2026-03-09",
    receivedDate: "2026-03-12",
    type: "lab",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 8,
    patientName: "Samuel Torres",
    testName: "CBC with Differential",
    resultSummary: "WBC 11.2 K/uL (Ref: 4.5–11.0). All other values normal.",
    flag: "high",
    orderedDate: "2026-03-10",
    receivedDate: "2026-03-12",
    type: "lab",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 9,
    patientName: "Natalie Osei",
    testName: "Thyroid Panel (TSH/T4)",
    resultSummary: "TSH 0.12 mIU/L (Ref: 0.4–4.0). Free T4 normal.",
    flag: "low",
    orderedDate: "2026-03-08",
    receivedDate: "2026-03-11",
    type: "lab",
    provider: "Dr. Sarah Chen"
  },
  {
    id: 10,
    patientName: "Carlos Mendez",
    testName: "Urinalysis",
    resultSummary: "No significant abnormalities detected.",
    flag: "normal",
    orderedDate: "2026-03-11",
    receivedDate: "2026-03-13",
    type: "lab",
    provider: "Dr. Sarah Chen"
  }
];
const COLLEAGUES = [
  "Dr. Marcus Williams — Cardiology",
  "Dr. Lisa Park — Endocrinology",
  "Dr. James Okafor — Internal Medicine",
  "Dr. Amanda Torres — Nephrology",
  "Nurse Rebecca Hall"
];
const flagVariant = (f) => {
  switch (f) {
    case "normal":
      return "success";
    case "low":
      return "info";
    case "high":
      return "warning";
    case "critical":
      return "critical";
  }
};
function ResultsInbox() {
  const { actor, isFetching } = useActor();
  const [results, setResults] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [expandedNote, setExpandedNote] = reactExports.useState(null);
  const [noteDraft, setNoteDraft] = reactExports.useState({});
  const [expandedForward, setExpandedForward] = reactExports.useState(null);
  const [forwardTarget, setForwardTarget] = reactExports.useState(
    {}
  );
  const [callbackOpen, setCallbackOpen] = reactExports.useState({});
  const [callbackDraft, setCallbackDraft] = reactExports.useState({});
  const loadResults = reactExports.useCallback(async () => {
    if (!actor) return;
    const typedActor = actor;
    try {
      const raw = await typedActor.listInboxResults();
      if (raw.length === 0) {
        await Promise.all(
          SEED_RESULTS_SEED.map(
            (r) => actor.createInboxResult(
              r.patientName,
              r.testName,
              r.resultSummary,
              r.flag,
              r.type,
              r.orderedDate,
              r.receivedDate,
              r.provider
            )
          )
        );
        const seeded = await actor.listInboxResults();
        setResults(mapResults(seeded));
      } else {
        setResults(mapResults(raw));
      }
    } catch (err) {
      console.error("Failed to load inbox results", err);
      setResults(
        SEED_RESULTS_SEED.map((r) => ({
          ...r,
          acknowledged: false,
          note: "",
          callbackProvider: "",
          callbackMethod: "",
          callbackDateTime: "",
          callbackNotes: "",
          forwardedTo: ""
        }))
      );
    } finally {
      setLoading(false);
    }
  }, [actor]);
  reactExports.useEffect(() => {
    if (!isFetching && actor) {
      loadResults();
    }
  }, [actor, isFetching, loadResults]);
  function mapResults(raw) {
    return raw.map((r) => ({
      id: Number(r.id),
      patientName: r.patientName,
      testName: r.testName,
      resultSummary: r.resultSummary,
      flag: r.flag,
      type: r.resultType,
      orderedDate: r.orderedDate,
      receivedDate: r.receivedDate,
      provider: r.provider,
      acknowledged: r.acknowledged,
      note: r.note,
      callbackProvider: r.callbackProvider,
      callbackMethod: r.callbackMethod,
      callbackDateTime: r.callbackDateTime,
      callbackNotes: r.callbackNotes,
      forwardedTo: r.forwardedTo
    }));
  }
  const handleAcknowledge = async (id) => {
    if (!actor) return;
    try {
      await actor.acknowledgeResult(BigInt(id));
      ue.success("Result acknowledged");
      setExpandedNote(null);
      setExpandedForward(null);
      await loadResults();
    } catch {
      ue.error("Failed to acknowledge result");
    }
  };
  const handleSaveNote = async (id, note) => {
    if (!actor) return;
    try {
      await actor.saveResultNote(BigInt(id), note);
      ue.success("Note saved");
      setExpandedNote(null);
      await loadResults();
    } catch {
      ue.error("Failed to save note");
    }
  };
  const handleSaveCallback = async (id) => {
    if (!actor) return;
    const draft = callbackDraft[id];
    if (!(draft == null ? void 0 : draft.providerNotified) || !(draft == null ? void 0 : draft.dateTime)) {
      ue.error("Provider notified and date/time are required");
      return;
    }
    try {
      await actor.saveResultCallback(
        BigInt(id),
        draft.providerNotified,
        draft.method,
        draft.dateTime,
        draft.notes
      );
      ue.success("Callback documented");
      setCallbackOpen((prev) => ({ ...prev, [id]: false }));
      await loadResults();
    } catch {
      ue.error("Failed to save callback");
    }
  };
  const handleForward = async (id) => {
    if (!actor) return;
    const target = forwardTarget[id];
    if (!target) {
      ue.error("Please select a recipient");
      return;
    }
    try {
      await actor.forwardResult(BigInt(id), target);
      ue.success("Result forwarded");
      setExpandedForward(null);
      await loadResults();
    } catch {
      ue.error("Failed to forward result");
    }
  };
  const toggleCallback = (id) => {
    setCallbackOpen((prev) => ({ ...prev, [id]: !prev[id] }));
    if (!callbackDraft[id]) {
      setCallbackDraft((prev) => ({
        ...prev,
        [id]: {
          providerNotified: "",
          method: "Phone",
          dateTime: "",
          notes: ""
        }
      }));
    }
  };
  const pending = results.filter((r) => !r.acknowledged);
  const ackList = results.filter((r) => r.acknowledged);
  const ResultRow = ({
    result,
    idx,
    showAckButton
  }) => {
    const isCbOpen = callbackOpen[result.id] ?? false;
    const cbDraft = callbackDraft[result.id] ?? {
      providerNotified: "",
      method: "Phone",
      dateTime: "",
      notes: ""
    };
    const hasCallback = !!result.callbackProvider;
    const hasNote = !!result.note;
    const isForwarded = !!result.forwardedTo;
    const currentNoteDraft = noteDraft[result.id] ?? result.note ?? "";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        "data-ocid": `inbox.result.item.${idx + 1}`,
        className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `inbox.patient.link.${idx + 1}`,
              className: "text-[13px] font-semibold text-primary hover:underline",
              children: result.patientName
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: result.testName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 uppercase tracking-wide", children: result.type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground", children: result.resultSummary }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: flagVariant(result.flag), label: result.flag }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-[12px] text-muted-foreground", children: result.orderedDate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-[12px] text-muted-foreground", children: result.receivedDate }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              showAckButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `inbox.acknowledge.button.${idx + 1}`,
                  onClick: () => handleAcknowledge(result.id),
                  className: "h-6 text-xs px-2 border-success/0.4 text-success hover:bg-success/0.05",
                  children: "Acknowledge"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `inbox.note.button.${idx + 1}`,
                  onClick: () => setExpandedNote(expandedNote === result.id ? null : result.id),
                  className: "h-6 text-xs px-2",
                  children: [
                    expandedNote === result.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                    "Note"
                  ]
                }
              ),
              !isForwarded ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `inbox.forward.button.${idx + 1}`,
                  onClick: () => setExpandedForward(
                    expandedForward === result.id ? null : result.id
                  ),
                  className: "h-6 text-xs px-2",
                  children: "Forward"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground italic", children: "Forwarded" }),
              result.flag === "critical" && (hasCallback ? /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "success", label: "Callback Logged" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `inbox.callback.button.${idx + 1}`,
                  onClick: () => toggleCallback(result.id),
                  className: "h-6 text-xs px-2 border-warning/0.4 text-warning hover:bg-warning/0.05",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3 mr-1" }),
                    isCbOpen ? "Close" : "Log Callback"
                  ]
                }
              ))
            ] }),
            hasCallback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 p-2.5 bg-success/0.08 border border-success/0.3 rounded-sm text-xs space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3 text-success" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-success", children: "Callback documented" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-success", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Provider:" }),
                " ",
                result.callbackProvider,
                " ·",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Method:" }),
                " ",
                result.callbackMethod,
                " ·",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Time:" }),
                " ",
                result.callbackDateTime
              ] }),
              result.callbackNotes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: result.callbackNotes })
            ] }),
            isCbOpen && !hasCallback && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-2 p-3 bg-warning/0.06 border border-warning/0.3 rounded-sm space-y-2",
                "data-ocid": `inbox.callback.panel.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-warning", children: "Log Critical Value Callback" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Provider Notified" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          "data-ocid": `inbox.callback.provider.input.${idx + 1}`,
                          placeholder: "Provider name...",
                          value: cbDraft.providerNotified,
                          onChange: (e) => setCallbackDraft((prev) => ({
                            ...prev,
                            [result.id]: {
                              ...cbDraft,
                              providerNotified: e.target.value
                            }
                          })),
                          className: "h-7 text-xs mt-0.5"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Method" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Select,
                        {
                          value: cbDraft.method,
                          onValueChange: (v) => setCallbackDraft((prev) => ({
                            ...prev,
                            [result.id]: {
                              ...cbDraft,
                              method: v
                            }
                          })),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SelectTrigger,
                              {
                                "data-ocid": `inbox.callback.method.select.${idx + 1}`,
                                className: "h-7 text-xs mt-0.5",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Phone", children: "Phone" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Page", children: "Page" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "In-Person", children: "In-Person" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Text", children: "Text" })
                            ] })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Date / Time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": `inbox.callback.datetime.input.${idx + 1}`,
                        type: "datetime-local",
                        value: cbDraft.dateTime,
                        onChange: (e) => setCallbackDraft((prev) => ({
                          ...prev,
                          [result.id]: { ...cbDraft, dateTime: e.target.value }
                        })),
                        className: "h-7 text-xs mt-0.5"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Notes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        "data-ocid": `inbox.callback.notes.textarea.${idx + 1}`,
                        placeholder: "Additional notes...",
                        value: cbDraft.notes,
                        onChange: (e) => setCallbackDraft((prev) => ({
                          ...prev,
                          [result.id]: { ...cbDraft, notes: e.target.value }
                        })),
                        className: "text-xs mt-0.5 h-16 resize-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        "data-ocid": `inbox.callback.cancel.button.${idx + 1}`,
                        onClick: () => setCallbackOpen((prev) => ({ ...prev, [result.id]: false })),
                        className: "h-7 text-xs px-3",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        "data-ocid": `inbox.callback.save.button.${idx + 1}`,
                        onClick: () => handleSaveCallback(result.id),
                        className: "h-7 text-xs px-3",
                        children: "Save Callback"
                      }
                    )
                  ] })
                ]
              }
            ),
            expandedNote === result.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-2 p-3 bg-muted/30 border border-border rounded-sm space-y-2",
                "data-ocid": `inbox.note.panel.${idx + 1}`,
                children: [
                  hasNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground italic", children: [
                    "Saved note: ",
                    result.note
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      "data-ocid": `inbox.note.textarea.${idx + 1}`,
                      placeholder: "Add a clinical note...",
                      value: currentNoteDraft,
                      onChange: (e) => setNoteDraft((prev) => ({
                        ...prev,
                        [result.id]: e.target.value
                      })),
                      className: "text-xs h-16 resize-none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        "data-ocid": `inbox.note.cancel.button.${idx + 1}`,
                        onClick: () => setExpandedNote(null),
                        className: "h-7 text-xs px-3",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        "data-ocid": `inbox.note.save.button.${idx + 1}`,
                        onClick: () => handleSaveNote(result.id, currentNoteDraft),
                        className: "h-7 text-xs px-3",
                        children: "Save Note"
                      }
                    )
                  ] })
                ]
              }
            ),
            expandedForward === result.id && !isForwarded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-2 p-3 bg-muted/30 border border-border rounded-sm space-y-2",
                "data-ocid": `inbox.forward.panel.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Forward to colleague" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: forwardTarget[result.id] ?? "",
                      onValueChange: (v) => setForwardTarget((prev) => ({ ...prev, [result.id]: v })),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectTrigger,
                          {
                            "data-ocid": `inbox.forward.select.${idx + 1}`,
                            className: "h-7 text-xs",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select recipient..." })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: COLLEAGUES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        "data-ocid": `inbox.forward.cancel.button.${idx + 1}`,
                        onClick: () => setExpandedForward(null),
                        className: "h-7 text-xs px-3",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        "data-ocid": `inbox.forward.confirm.button.${idx + 1}`,
                        onClick: () => handleForward(result.id),
                        className: "h-7 text-xs px-3",
                        children: "Forward"
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ]
      },
      result.id
    );
  };
  const ResultTable = ({
    results: tableResults,
    showAck
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-sm overflow-hidden", children: tableResults.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: "px-4 py-10 text-center text-[13px] text-muted-foreground",
      "data-ocid": "inbox.empty_state",
      children: showAck ? "No pending results to review." : "No acknowledged results yet."
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[13px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Patient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Test / Study" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Result" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Flag" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Ordered" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tableResults.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResultRow,
      {
        result: r,
        idx,
        showAckButton: showAck
      },
      r.id
    )) })
  ] }) }) });
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "inbox.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "inbox.page", children: [
    pending.filter((r) => r.flag === "critical").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-3 px-4 py-3 border border-destructive/30 bg-destructive/5 rounded-sm",
        "data-ocid": "inbox.critical.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "w-4 h-4 text-destructive flex-shrink-0 mt-0.5",
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-destructive", children: [
              pending.filter((r) => r.flag === "critical").length,
              " Critical Result",
              pending.filter((r) => r.flag === "critical").length !== 1 ? "s" : "",
              " ",
              "Require Immediate Attention"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-0.5", children: pending.filter((r) => r.flag === "critical").map((r) => `${r.patientName} — ${r.testName}`).join(" · ") })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "pending", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "w-full justify-start rounded-none border-b border-border bg-transparent px-0 h-10 gap-0",
          "data-ocid": "inbox.tab",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "pending",
                "data-ocid": "inbox.pending.tab",
                className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-xs font-medium px-4 h-10",
                children: [
                  "Pending Review",
                  pending.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 inline-flex items-center justify-center min-w-[18px] h-4 px-1 rounded-full text-xs font-bold bg-destructive text-destructive-foreground", children: pending.length })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "acknowledged",
                "data-ocid": "inbox.acknowledged.tab",
                className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-xs font-medium px-4 h-10",
                children: [
                  "Acknowledged (",
                  ackList.length,
                  ")"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pending", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResultTable, { results: pending, showAck: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "acknowledged", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResultTable, { results: ackList, showAck: false }) })
      ] })
    ] })
  ] });
}
export {
  ResultsInbox as default
};
