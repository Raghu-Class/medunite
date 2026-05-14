import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as ShieldCheck, B as Button, R as Receipt, F as FlaskConical, a as Stethoscope } from "./index-4utdZC3E.js";
import { I as Input } from "./input-B6WlinMn.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, a as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./proxy-C5moefjr.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
import "./chevron-up-BvGEbEf0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z", key: "1pvr1r" }
  ],
  ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }],
  ["path", { d: "M12 4v4", key: "1bq03y" }],
  ["path", { d: "M10 4h4", key: "1xpv9s" }]
];
const ConciergeBell = createLucideIcon("concierge-bell", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
];
const HeartPulse = createLucideIcon("heart-pulse", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
];
const Microscope = createLucideIcon("microscope", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
];
const ScanLine = createLucideIcon("scan-line", __iconNode);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  var _a;
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = ((_a = children.props) == null ? void 0 : _a.ref) ?? (children == null ? void 0 : children.ref);
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      exitingComponents.current.add(key);
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender == null ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove == null ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
function getFirstName(name) {
  const parts = name.split(" ");
  if (name.startsWith("Dr.")) return `${parts[0]} ${parts[1]}`;
  return parts[0];
}
function ChipSelector({
  options,
  value,
  onChange,
  multi = false
}) {
  const isSelected = (opt) => multi ? value.includes(opt) : value === opt;
  const handleClick = (opt) => {
    if (multi) {
      const arr = value;
      onChange(
        arr.includes(opt) ? arr.filter((x) => x !== opt) : [...arr, opt]
      );
    } else {
      onChange(opt);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => handleClick(opt),
      className: [
        "px-3 py-1.5 text-sm rounded border transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        isSelected(opt) ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-foreground hover:border-primary/40 hover:bg-muted/50"
      ].join(" "),
      children: opt
    },
    opt
  )) });
}
function ShiftCard({
  label,
  sublabel,
  selected,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: [
        "flex-1 p-5 rounded border text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/40 hover:bg-muted/30"
      ].join(" "),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: [
              "text-base font-semibold",
              selected ? "text-primary" : "text-foreground"
            ].join(" "),
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: sublabel })
      ]
    }
  );
}
function DoctorFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [specialty, setSpecialty] = reactExports.useState("");
  const [panelSize, setPanelSize] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const totalSteps = 4;
  const advance = (nextStep) => {
    setDir(1);
    setError("");
    setStep(nextStep);
  };
  const handleNext = () => {
    if (step === 1 && !specialty) {
      setError("Please select one to continue.");
      return;
    }
    if (step < 3) advance(step + 1);
    else onComplete({ specialty, panelSize });
  };
  const SPECIALTIES = [
    "Family Medicine",
    "Internal Medicine",
    "Cardiology",
    "Orthopedics",
    "Pediatrics",
    "Oncology",
    "Psychiatry",
    "Other"
  ];
  const PANEL_SIZES = ["Fewer than 10", "10–30", "More than 30"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: Stethoscope,
        heading: `Welcome, ${firstName}`,
        body: "Let's personalise your workspace. It takes 60 seconds and shapes what you see every day.",
        cta: "Get started →",
        onCta: () => advance(1)
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "What is your primary specialty?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This shapes your care gap protocols, order sets, and dashboard." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: SPECIALTIES,
          value: specialty,
          onChange: (v) => {
            setSpecialty(v);
            setError("");
          }
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(0);
          }
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "How many patients do you typically follow?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Helps us calibrate your dashboard defaults." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: PANEL_SIZES,
          value: panelSize,
          onChange: (v) => setPanelSize(v)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(1);
          },
          skipLabel: "Skip this step →",
          onSkipStep: () => advance(3)
        }
      )
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `Specialty: ${specialty || "Not set"}. Your care gap protocols, order sets, and dashboard will reflect your specialty.`,
        onEnter: () => onComplete({ specialty, panelSize }),
        onBack: () => {
          setDir(-1);
          setStep(2);
        }
      }
    )
  ] });
}
function NurseFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [ward, setWard] = reactExports.useState("");
  const [shift, setShift] = reactExports.useState(
    ""
  );
  const [error, setError] = reactExports.useState("");
  const WARDS = [
    "ICU",
    "General Medicine",
    "Surgical",
    "Pediatric",
    "Emergency"
  ];
  const handleNext = () => {
    if (step === 1 && !ward) {
      setError("Please select a ward to continue.");
      return;
    }
    if (step === 2 && !shift) {
      setError("Please select a shift to continue.");
      return;
    }
    setError("");
    if (step < 3) {
      setDir(1);
      setStep(step + 1);
    } else onComplete({ ward, shift });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps: 4, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: HeartPulse,
        heading: `Welcome, ${firstName}`,
        body: "Your workspace brings together patient monitoring, medication administration, and care coordination.",
        cta: "Get started →",
        onCta: () => {
          setDir(1);
          setStep(1);
        }
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Which ward are you assigned to?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sets the default view in your Medication Administration Record." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: WARDS,
          value: ward,
          onChange: (v) => {
            setWard(v);
            setError("");
          }
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(0);
          }
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Which shift do you work?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pre-fills your shift handoff window." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShiftCard,
          {
            label: "Day Shift",
            sublabel: "7:00 am to 7:00 pm",
            selected: shift === "day",
            onClick: () => {
              setShift("day");
              setError("");
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShiftCard,
          {
            label: "Night Shift",
            sublabel: "7:00 pm to 7:00 am",
            selected: shift === "night",
            onClick: () => {
              setShift("night");
              setError("");
            }
          }
        )
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(1);
          }
        }
      )
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `Ward: ${ward}. Shift: ${shift === "day" ? "Day (7am–7pm)" : "Night (7pm–7am)"}. Your MAR will default to your ward and your shift handoff will pre-fill your window.`,
        onEnter: () => onComplete({ ward, shift }),
        onBack: () => {
          setDir(-1);
          setStep(2);
        }
      }
    )
  ] });
}
function PharmacistFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [formulary, setFormulary] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const handleNext = () => {
    if (step === 1 && !formulary) {
      setError("Please select one to continue.");
      return;
    }
    setError("");
    if (step < 2) {
      setDir(1);
      setStep(step + 1);
    } else onComplete({ formulary });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps: 3, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: FlaskConical,
        heading: `Welcome, ${firstName}`,
        body: "Your Pharmacy queue centralises all incoming prescriptions awaiting verification or dispensing.",
        cta: "Get started →",
        onCta: () => {
          setDir(1);
          setStep(1);
        }
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Which prescription type do you primarily handle?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sets the default queue filter when you open Pharmacy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: ["Retail", "Mail Order", "Specialty", "All"],
          value: formulary,
          onChange: (v) => {
            setFormulary(v);
            setError("");
          }
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(0);
          }
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `Queue will default to ${formulary} prescriptions.`,
        onEnter: () => onComplete({ formulary }),
        onBack: () => {
          setDir(-1);
          setStep(1);
        }
      }
    )
  ] });
}
function ReceptionistFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [providers, setProviders] = reactExports.useState([]);
  const [location, setLocation] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const PROVIDERS = [
    "Dr. Sarah Chen",
    "Dr. James Wilson",
    "Dr. Emily Rodriguez",
    "Dr. Michael Thompson",
    "Dr. Lisa Park"
  ];
  const LOCATIONS = [
    "Main Campus",
    "North Clinic",
    "South Clinic",
    "Telehealth Only"
  ];
  const handleNext = () => {
    if (step === 1 && providers.length === 0) {
      setError("Please select at least one provider.");
      return;
    }
    setError("");
    if (step < 3) {
      setDir(1);
      setStep(step + 1);
    } else onComplete({ providers, location });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps: 4, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: ConciergeBell,
        heading: `Welcome, ${firstName}`,
        body: "Your workflow covers patient registration, appointment scheduling, and front-desk check-in.",
        cta: "Get started →",
        onCta: () => {
          setDir(1);
          setStep(1);
        }
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Which providers do you schedule for?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select all that apply. You can change this anytime in Settings." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: PROVIDERS,
          value: providers,
          onChange: (v) => {
            setProviders(v);
            setError("");
          },
          multi: true
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(0);
          }
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Which location are you based at?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Helps filter the appointment calendar by default." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: LOCATIONS,
          value: location,
          onChange: (v) => setLocation(v)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(1);
          },
          skipLabel: "Skip →",
          onSkipStep: () => {
            setDir(1);
            setStep(3);
          }
        }
      )
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `Appointments will default to showing schedules for ${providers.length > 0 ? providers.join(", ") : "all providers"}.`,
        onEnter: () => onComplete({ providers, location }),
        onBack: () => {
          setDir(-1);
          setStep(2);
        }
      }
    )
  ] });
}
function BillingFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [payer, setPayer] = reactExports.useState("");
  const [aging, setAging] = reactExports.useState("60");
  const [error, setError] = reactExports.useState("");
  const handleNext = () => {
    if (step === 1 && !payer) {
      setError("Please select a payer focus to continue.");
      return;
    }
    setError("");
    if (step < 2) {
      setDir(1);
      setStep(step + 1);
    } else onComplete({ payer, agingThreshold: Number(aging) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps: 3, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: Receipt,
        heading: `Welcome, ${firstName}`,
        body: "The Billing module manages the full revenue cycle from invoice creation to payment collection.",
        cta: "Get started →",
        onCta: () => {
          setDir(1);
          setStep(1);
        }
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Which payers do you primarily work with?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Sets the default Claims queue filter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChipSelector,
          {
            options: [
              "Medicare",
              "Medicaid",
              "Commercial",
              "Self-Pay",
              "All"
            ],
            value: payer,
            onChange: (v) => {
              setPayer(v);
              setError("");
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Flag claims older than:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChipSelector,
          {
            options: ["30 days", "60 days", "90 days"],
            value: `${aging} days`,
            onChange: (v) => setAging(v.split(" ")[0])
          }
        )
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(0);
          }
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `Claims will default to ${payer}. Aging alerts fire after ${aging} days.`,
        onEnter: () => onComplete({ payer, agingThreshold: Number(aging) }),
        onBack: () => {
          setDir(-1);
          setStep(1);
        }
      }
    )
  ] });
}
function AdminFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [staffName, setStaffName] = reactExports.useState("");
  const [staffRole, setStaffRole] = reactExports.useState("");
  const [invitedList, setInvitedList] = reactExports.useState([]);
  const [inviteError, setInviteError] = reactExports.useState("");
  const [skipInviteWarning, setSkipInviteWarning] = reactExports.useState(false);
  const [staffSkipped, setStaffSkipped] = reactExports.useState(false);
  const [availability, setAvailability] = reactExports.useState([
    [true, true],
    [true, true],
    [true, true],
    [true, true],
    [true, true]
  ]);
  const [availSkipped, setAvailSkipped] = reactExports.useState(false);
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const STAFF_ROLES = [
    "Doctor",
    "Nurse",
    "Pharmacist",
    "Receptionist",
    "Billing",
    "LabTech",
    "Radiologist"
  ];
  const handleAddStaff = () => {
    if (!staffName.trim() || !staffRole) {
      setInviteError("Please enter a name and select a role.");
      return;
    }
    const entry = { name: staffName.trim(), role: staffRole };
    const updated = [...invitedList, entry];
    setInvitedList(updated);
    try {
      const existing = JSON.parse(
        localStorage.getItem("medunite_admin_invited_staff") || "[]"
      );
      localStorage.setItem(
        "medunite_admin_invited_staff",
        JSON.stringify([...existing, entry])
      );
    } catch {
    }
    setStaffName("");
    setStaffRole("");
    setInviteError("");
  };
  const saveAvailability = () => {
    try {
      localStorage.setItem(
        "medunite_admin_provider_availability",
        JSON.stringify(availability)
      );
    } catch {
    }
    setDir(1);
    setStep(3);
  };
  const prefs = {
    setupComplete: invitedList.length > 0 && !availSkipped,
    staffInvited: invitedList.length > 0,
    availabilitySet: !availSkipped
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps: 5, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: ShieldCheck,
        heading: `Welcome, ${firstName}`,
        body: "Two quick setup tasks will make the system useful for your team. You can skip either, but we recommend completing both.",
        cta: "Get started →",
        onCta: () => {
          setDir(1);
          setStep(1);
        }
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Invite your first team member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Add clinical and admin staff to the system." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border border-border rounded p-4 bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: staffName,
              onChange: (e) => setStaffName(e.target.value),
              placeholder: "Full name",
              className: "h-9 text-sm",
              "data-ocid": "onboarding.staff_name.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: staffRole, onValueChange: setStaffRole, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "mt-1 h-9 text-sm",
                "data-ocid": "onboarding.staff_role.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select role" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STAFF_ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
          ] })
        ] }),
        inviteError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: inviteError }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: handleAddStaff,
            "data-ocid": "onboarding.add_staff.button",
            children: "Add staff member"
          }
        )
      ] }),
      invitedList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: invitedList.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 text-sm text-success",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              s.name,
              " added as ",
              s.role
            ] })
          ]
        },
        `${s.name}-${s.role}`
      )) }),
      skipInviteWarning ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-warning/30 bg-warning/10 rounded p-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Without staff accounts, your clinical team won't be able to log in." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-xs text-muted-foreground hover:text-foreground underline",
              onClick: () => {
                setStaffSkipped(true);
                setDir(1);
                setStep(2);
              },
              children: "Confirm skip"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-xs text-foreground font-medium",
              onClick: () => setSkipInviteWarning(false),
              children: "Go back"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "text-xs text-muted-foreground hover:text-foreground",
            onClick: () => setSkipInviteWarning(true),
            children: "Skip this step (not recommended)"
          }
        ),
        invitedList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: () => {
              setDir(1);
              setStep(2);
            },
            "data-ocid": "onboarding.next.button",
            children: "Continue →"
          }
        )
      ] }),
      invitedList.length === 0 && !skipInviteWarning && /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: () => {
            setDir(1);
            setStep(2);
          },
          onBack: () => {
            setDir(-1);
            setStep(0);
          },
          nextLabel: "Continue →"
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Set provider availability" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Configure default office hours for scheduling." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded p-4 bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs font-medium text-muted-foreground mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "AM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "PM" })
        ] }),
        DAYS.map((day, di) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid grid-cols-3 gap-2 items-center py-1 border-t border-border/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: day }),
              [0, 1].map((si) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: availability[di][si],
                  onChange: (e) => {
                    const next = availability.map(
                      (row, r) => row.map(
                        (cell, c) => r === di && c === si ? e.target.checked : cell
                      )
                    );
                    setAvailability(next);
                  },
                  className: "h-4 w-4 accent-primary",
                  "data-ocid": `onboarding.avail.${day.toLowerCase()}.checkbox`
                }
              ) }, si))
            ]
          },
          day
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "text-xs text-muted-foreground hover:text-foreground",
            onClick: () => {
              setAvailSkipped(true);
              setDir(1);
              setStep(3);
            },
            children: "Skip →"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                setDir(-1);
                setStep(1);
              },
              children: "← Back"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: saveAvailability,
              "data-ocid": "onboarding.save_avail.button",
              children: "Save availability →"
            }
          )
        ] })
      ] })
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Setup summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-2 text-sm ${!staffSkipped ? "text-success" : "text-warning"}`,
            children: [
              !staffSkipped ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 text-center", children: "⚠" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: !staffSkipped ? `${invitedList.length} staff member(s) invited` : "Staff invitation skipped" }),
              staffSkipped && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-xs underline text-muted-foreground hover:text-foreground ml-1",
                  onClick: () => {
                    setDir(-1);
                    setStep(1);
                  },
                  children: "Fix now"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-2 text-sm ${!availSkipped ? "text-success" : "text-warning"}`,
            children: [
              !availSkipped ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 text-center", children: "⚠" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: !availSkipped ? "Provider availability configured" : "Provider availability skipped" }),
              availSkipped && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-xs underline text-muted-foreground hover:text-foreground ml-1",
                  onClick: () => {
                    setDir(-1);
                    setStep(2);
                  },
                  children: "Fix now"
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              setDir(-1);
              setStep(2);
            },
            children: "← Back"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: () => {
              setDir(1);
              setStep(4);
            },
            "data-ocid": "onboarding.summary.next.button",
            children: "Continue →"
          }
        )
      ] })
    ] }),
    step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `System setup ${prefs.setupComplete ? "complete" : "partially complete"}. Staff invited: ${prefs.staffInvited ? "yes" : "no"}. Provider availability: ${prefs.availabilitySet ? "configured" : "skipped"}.`,
        onEnter: () => onComplete(prefs),
        onBack: () => {
          setDir(-1);
          setStep(3);
        }
      }
    )
  ] });
}
function LabTechFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [section, setSection] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const handleNext = () => {
    if (step === 1 && !section) {
      setError("Please select a section to continue.");
      return;
    }
    setError("");
    if (step < 2) {
      setDir(1);
      setStep(step + 1);
    } else onComplete({ section });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps: 3, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: Microscope,
        heading: `Welcome, ${firstName}`,
        body: "Your workspace focuses on processing incoming lab orders and reporting results back to ordering providers.",
        cta: "Get started →",
        onCta: () => {
          setDir(1);
          setStep(1);
        }
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Which section do you work in?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Filters your default lab worklist view." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: [
            "Chemistry",
            "Hematology",
            "Microbiology",
            "Pathology",
            "All Sections"
          ],
          value: section,
          onChange: (v) => {
            setSection(v);
            setError("");
          }
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(0);
          }
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `Your lab worklist will default to ${section} orders.`,
        onEnter: () => onComplete({ section }),
        onBack: () => {
          setDir(-1);
          setStep(1);
        }
      }
    )
  ] });
}
function RadiologistFlow({
  firstName,
  onComplete,
  onSkip
}) {
  const [step, setStep] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const [modality, setModality] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const handleNext = () => {
    if (step === 1 && !modality) {
      setError("Please select a modality to continue.");
      return;
    }
    setError("");
    if (step < 2) {
      setDir(1);
      setStep(step + 1);
    } else onComplete({ modality });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FlowShell, { step, totalSteps: 3, dir, onSkip, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WelcomeStep,
      {
        icon: ScanLine,
        heading: `Welcome, ${firstName}`,
        body: "Your workspace covers imaging order management, DICOM viewing, and radiology report generation.",
        cta: "Get started →",
        onCta: () => {
          setDir(1);
          setStep(1);
        }
      }
    ),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "What is your primary imaging modality?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Filters your default imaging queue." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChipSelector,
        {
          options: [
            "X-ray",
            "CT",
            "MRI",
            "Ultrasound",
            "Nuclear",
            "All Modalities"
          ],
          value: modality,
          onChange: (v) => {
            setModality(v);
            setError("");
          }
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavRow,
        {
          onNext: handleNext,
          onBack: () => {
            setDir(-1);
            setStep(0);
          }
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadyStep,
      {
        summary: `Your imaging queue will default to ${modality} orders.`,
        onEnter: () => onComplete({ modality }),
        onBack: () => {
          setDir(-1);
          setStep(1);
        }
      }
    )
  ] });
}
function WelcomeStep({
  icon: Icon,
  heading,
  body,
  cta,
  onCta
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground", children: heading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto", children: body })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: onCta,
        "data-ocid": "onboarding.welcome.button",
        className: "min-w-[140px]",
        children: cta
      }
    )
  ] });
}
function ReadyStep({
  summary,
  onEnter,
  onBack
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground", children: "You're all set" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto border border-border/60 rounded p-3 bg-muted/30 text-left", children: summary })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onBack, children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onEnter, "data-ocid": "onboarding.enter.button", children: "Enter MedUnite →" })
    ] })
  ] });
}
function NavRow({
  onNext,
  onBack,
  nextLabel = "Continue →",
  skipLabel,
  onSkipStep
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      onBack && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onBack, children: "← Back" }),
      skipLabel && onSkipStep && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "text-xs text-muted-foreground hover:text-foreground",
          onClick: onSkipStep,
          children: skipLabel
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: onNext, "data-ocid": "onboarding.next.button", children: nextLabel })
  ] });
}
function FlowShell({
  step,
  totalSteps,
  dir,
  onSkip,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background flex flex-col",
      "data-ocid": "onboarding.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 bg-primary flex items-center justify-center rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "w-4 h-4 text-primary-foreground",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 17l10 5 10-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12l10 5 10-5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground tracking-tight", children: "MedUnite" })
          ] }),
          totalSteps > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "Step ",
            step + 1,
            " of ",
            totalSteps
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[480px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: dir * 24 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: dir * -24 },
            transition: { duration: 0.22, ease: "easeOut" },
            children
          },
          step
        ) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onSkip,
            className: "text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors",
            "data-ocid": "onboarding.skip.button",
            children: "Skip all setup →"
          }
        ) })
      ]
    }
  );
}
function OnboardingFlow({
  role,
  userName,
  onComplete
}) {
  const firstName = getFirstName(userName);
  const handleSkip = () => onComplete({});
  switch (role) {
    case "Doctor":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        DoctorFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    case "Nurse":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        NurseFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    case "Pharmacist":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        PharmacistFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    case "Receptionist":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReceptionistFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    case "Billing":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        BillingFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    case "Admin":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdminFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    case "LabTech":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        LabTechFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    case "Radiologist":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadiologistFlow,
        {
          firstName,
          onComplete,
          onSkip: handleSkip
        }
      );
    default:
      return null;
  }
}
export {
  OnboardingFlow as default
};
