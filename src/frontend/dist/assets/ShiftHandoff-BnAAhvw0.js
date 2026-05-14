import { c as createLucideIcon, r as reactExports, a3 as useControllableState, j as jsxRuntimeExports, a4 as createContextScope, an as useId, a7 as Primitive, a6 as composeEventHandlers, ad as Presence, a8 as useComposedRefs, af as useLayoutEffect2, f as useActor, B as Button, n as DEMO_PATIENTS, C as ChevronDown, aN as ChevronRight, i as ue } from "./index-4utdZC3E.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { A as ArrowRight } from "./arrow-right-C7mPJTYk.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
];
const ClipboardCheck = createLucideIcon("clipboard-check", __iconNode);
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent$1.displayName = CONTENT_NAME;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible$1;
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CollapsibleTrigger$1,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CollapsibleContent$1,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}
const SHIFT_LABELS = {
  day: "Day (7am–3pm)",
  evening: "Evening (3pm–11pm)",
  night: "Night (11pm–7am)"
};
const INITIAL_NOTES = [
  {
    id: "ho-1",
    fromNurse: "RN. Sarah Park",
    toNurse: "RN. David Torres",
    shift: "day",
    patientName: "James Harrington",
    timestamp: "2026-03-16 14:55",
    situation: "Post-op day 2, cardiac surgery. Patient is alert and oriented x3. BP 138/82, HR 78, SpO2 96% on 2L NC. Wound site intact, no signs of dehiscence.",
    background: "68-year-old male admitted for CABG x3. PMH: CAD, HTN, DM2. No known drug allergies. Currently on Metoprolol, aspirin, and IV Vancomycin for MRSA prophylaxis.",
    assessment: "Stable. Mild incisional pain rated 3/10. Lung sounds clear bilaterally. Lower extremity edema 1+ bilateral. Urine output adequate at 45 mL/hr over last 4 hours.",
    recommendation: "Continue cardiac monitoring. Assess incision site at 1900. Pain reassessment in 2 hours. PT consult scheduled for tomorrow. Notify MD if HR > 110 or SpO2 < 92%."
  },
  {
    id: "ho-2",
    fromNurse: "RN. Maria Gonzalez",
    toNurse: "RN. Kevin Brown",
    shift: "evening",
    patientName: "Margaret Chen",
    timestamp: "2026-03-15 22:50",
    situation: "71-year-old female admitted for hypertensive urgency. BP improved from 190/110 to 152/94 after IV labetalol. Now switched to PO antihypertensives.",
    background: "Chronic hypertension x 20 years. Also manages T2DM. Last HbA1c 8.4%. Current medications: Lisinopril 20mg, Amlodipine 10mg, Metformin 1000mg.",
    assessment: "Hemodynamically improved. Complaining of mild headache 2/10. Neurological exam intact. FS glucose 152 at 1800.",
    recommendation: "Continue BP monitoring every 2 hours overnight. Bedside glucose check at 2200 and 0200. Call MD if SBP > 170 or < 90."
  },
  {
    id: "ho-3",
    fromNurse: "RN. Angela Reyes",
    toNurse: "RN. Sarah Park",
    shift: "night",
    patientName: "Linda Washington",
    timestamp: "2026-03-15 06:45",
    situation: "56-year-old female, T2DM admission for glucose management. Glucose trended from 310 to 185 overnight on insulin drip per protocol.",
    background: "Hx of DM2 x 15 years. Also on dialysis for CKD Stage 4. Insulin drip started at 2300 per MD order. No allergies.",
    assessment: "Glucose improving. No hypoglycemia overnight (nadir 142 at 0400). Stable vitals. IV site intact, no infiltration. Urine output 15 mL/hr — consistent with renal baseline.",
    recommendation: "Transition to SQ insulin per endocrinology recommendation when glucose < 150 x2. Continue hourly glucose checks. Dietary consult needed — request low-carb renal diet."
  }
];
const patientNames = DEMO_PATIENTS.slice(0, 10).map((p) => p.name);
const SBAR_SECTIONS = [
  {
    key: "situation",
    letter: "S",
    label: "Situation",
    color: "text-primary"
  },
  {
    key: "background",
    letter: "B",
    label: "Background",
    color: "text-primary"
  },
  {
    key: "assessment",
    letter: "A",
    label: "Assessment",
    color: "text-warning"
  },
  {
    key: "recommendation",
    letter: "R",
    label: "Recommendation",
    color: "text-success"
  }
];
function ShiftHandoff({
  onNavigate: _onNavigate
}) {
  const [notes, setNotes] = reactExports.useState(INITIAL_NOTES);
  const [loading] = reactExports.useState(false);
  const { actor, isFetching } = useActor();
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    actor.listClinicalNotes().then((notes2) => {
      const backendNotes = notes2.filter((n) => n.noteType === "shift-handoff").map((n) => {
        try {
          return JSON.parse(n.content);
        } catch {
          return null;
        }
      }).filter(Boolean);
      if (backendNotes.length > 0) {
        setNotes((prev) => [...backendNotes, ...prev]);
      }
    }).catch(() => {
    });
  }, [actor, isFetching]);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [shiftFilter, setShiftFilter] = reactExports.useState(() => {
    try {
      const p = JSON.parse(
        localStorage.getItem("medunite_prefs_Nurse") || "{}"
      );
      if (p.shift === "day" || p.shift === "night") return p.shift;
    } catch {
    }
    return "all";
  });
  const [openSections, setOpenSections] = reactExports.useState(
    {}
  );
  const [form, setForm] = reactExports.useState({
    patientName: "",
    fromNurse: "",
    toNurse: "",
    shift: "day",
    situation: "",
    background: "",
    assessment: "",
    recommendation: ""
  });
  const filtered = notes.filter(
    (n) => shiftFilter === "all" || n.shift === shiftFilter
  );
  const toggleSection = (noteId, section) => {
    setOpenSections((prev) => {
      const current = new Set(prev[noteId] ?? ["situation"]);
      if (current.has(section)) {
        current.delete(section);
      } else {
        current.add(section);
      }
      return { ...prev, [noteId]: current };
    });
  };
  const isSectionOpen = (noteId, section) => {
    const sections = openSections[noteId];
    if (!sections) return section === "situation";
    return sections.has(section);
  };
  const handleMarkRead = (noteId) => {
    setNotes(
      (prev) => prev.map(
        (n) => n.id === noteId ? { ...n, readBy: "RN. Current User" } : n
      )
    );
  };
  const handleSubmit = () => {
    if (!form.patientName || !form.fromNurse || !form.toNurse || !form.situation)
      return;
    const note = {
      id: `ho-${Date.now()}`,
      ...form,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      })
    };
    setNotes((prev) => [note, ...prev]);
    setForm({
      patientName: "",
      fromNurse: "",
      toNurse: "",
      shift: "day",
      situation: "",
      background: "",
      assessment: "",
      recommendation: ""
    });
    setShowForm(false);
    if (actor) {
      actor.createClinicalNote(1n, "shift-handoff", JSON.stringify(note), 1n).then(() => ue.success("Handoff note saved")).catch(() => {
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "shift-handoff.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Shift Handoff Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded-sm font-medium", children: "SBAR Format" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border border-border rounded-sm overflow-hidden", children: ["all", "day", "evening", "night"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `shift-handoff.filter.${s}.tab`,
            onClick: () => setShiftFilter(s),
            className: `px-2.5 py-1 text-xs font-medium capitalize transition-colors ${shiftFilter === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
            children: s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)
          },
          s
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            "data-ocid": "shift-handoff.open_modal_button",
            onClick: () => setShowForm((v) => !v),
            className: "h-7 text-xs gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
              showForm ? "Cancel" : "New Handoff Note"
            ]
          }
        )
      ] })
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        "data-ocid": "shift-handoff.add.panel",
        className: "border-primary/20 bg-primary/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold text-foreground", children: "New Handoff Note — SBAR" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "sh-patient",
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    children: "Patient"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "sh-patient",
                    "data-ocid": "shift-handoff.patient.select",
                    value: form.patientName,
                    onChange: (e) => setForm((f) => ({ ...f, patientName: e.target.value })),
                    className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select patient..." }),
                      patientNames.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: name, children: name }, name))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "sh-shift",
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    children: "Shift"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "sh-shift",
                    "data-ocid": "shift-handoff.shift.select",
                    value: form.shift,
                    onChange: (e) => setForm((f) => ({ ...f, shift: e.target.value })),
                    className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "day", children: "Day (7am–3pm)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "evening", children: "Evening (3pm–11pm)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "night", children: "Night (11pm–7am)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "sh-from-nurse",
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    children: "From Nurse"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "sh-from-nurse",
                    "data-ocid": "shift-handoff.from-nurse.input",
                    value: form.fromNurse,
                    onChange: (e) => setForm((f) => ({ ...f, fromNurse: e.target.value })),
                    placeholder: "RN. Name",
                    className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "sh-to-nurse",
                    className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                    children: "To Nurse"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "sh-to-nurse",
                    "data-ocid": "shift-handoff.to-nurse.input",
                    value: form.toNurse,
                    onChange: (e) => setForm((f) => ({ ...f, toNurse: e.target.value })),
                    placeholder: "RN. Name",
                    className: "w-full h-8 px-2 text-[12px] bg-background border border-input rounded-sm focus:outline-none"
                  }
                )
              ] })
            ] }),
            [
              {
                key: "situation",
                label: "S — Situation",
                placeholder: "Current patient condition..."
              },
              {
                key: "background",
                label: "B — Background",
                placeholder: "Relevant medical history..."
              },
              {
                key: "assessment",
                label: "A — Assessment",
                placeholder: "Nurse's clinical assessment..."
              },
              {
                key: "recommendation",
                label: "R — Recommendation",
                placeholder: "What actions should the incoming nurse take..."
              }
            ].map(({ key, label, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `sh-${key}`,
                  className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1",
                  children: label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: `sh-${key}`,
                  "data-ocid": `shift-handoff.${key}.textarea`,
                  value: form[key],
                  onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })),
                  rows: 2,
                  placeholder,
                  className: "w-full px-2 py-1.5 text-[12px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring resize-none"
                }
              )
            ] }, key)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  "data-ocid": "shift-handoff.add.submit_button",
                  onClick: handleSubmit,
                  className: "h-7 text-xs",
                  children: "Submit Handoff"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  "data-ocid": "shift-handoff.add.cancel_button",
                  onClick: () => setShowForm(false),
                  className: "h-7 text-xs",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "shift-handoff.loading_state", children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-64" })
        ]
      },
      k
    )) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "py-12 text-center text-[13px] text-muted-foreground bg-card border border-border rounded-sm",
        "data-ocid": "shift-handoff.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "w-8 h-8 text-muted-foreground/40 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No handoff notes found." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "shift-handoff.list", children: filtered.map((note, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `shift-handoff.item.${idx + 1}`,
        className: "bg-card border border-border rounded-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: note.patientName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: note.timestamp })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[12px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: note.fromNurse }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: note.toNurse })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: note.shift === "day" ? "info" : note.shift === "evening" ? "warning" : "neutral",
                  label: SHIFT_LABELS[note.shift]
                }
              ),
              note.readBy ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-success font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                "Read"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "handoff.mark_read.button",
                  onClick: () => handleMarkRead(note.id),
                  className: "text-xs font-medium px-2 py-0.5 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors",
                  children: "Mark as Read"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `shift-handoff.toggle.${idx + 1}`,
                  onClick: () => setExpandedId(expandedId === note.id ? null : note.id),
                  className: "p-0.5 hover:bg-muted/40 rounded-sm transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      className: `w-3.5 h-3.5 text-muted-foreground transition-transform ${expandedId === note.id ? "rotate-180" : ""}`
                    }
                  )
                }
              )
            ] })
          ] }),
          expandedId === note.id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: SBAR_SECTIONS.map(({ key, letter, label, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Collapsible,
            {
              open: isSectionOpen(note.id, key),
              onOpenChange: () => toggleSection(note.id, key),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full flex items-center justify-between px-4 py-2.5 hover:bg-muted/20 transition-colors text-left",
                    "data-ocid": `shift-handoff.sbar.${key}.toggle`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `text-xs font-bold uppercase tracking-widest ${color} w-5`,
                            children: letter
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label })
                      ] }),
                      isSectionOpen(note.id, key) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-muted-foreground" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: note[key] }) }) })
              ]
            },
            key
          )) })
        ]
      },
      note.id
    )) })
  ] });
}
export {
  ShiftHandoff as default
};
