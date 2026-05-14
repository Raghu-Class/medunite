import { j as jsxRuntimeExports, a as Stethoscope, S as ShieldCheck, G as ChartColumn, r as reactExports } from "./index-4utdZC3E.js";
import { m as motion } from "./proxy-C5moefjr.js";
import { A as ArrowRight } from "./arrow-right-C7mPJTYk.js";
const BRAND_DARK_HEX = "#1a2744";
const BRAND_DARK2_HEX = "#1e2d4a";
const BRAND_GRADIENT = "linear-gradient(90deg, #2563eb, #4f46e5, #2563eb)";
function ECGCanvas() {
  const canvasRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let offset = 0;
    const W = canvas.width;
    const H = canvas.height;
    const mid = H / 2;
    const speed = 1.5;
    function ecgY(x) {
      const t = (x % 120 + 120) % 120;
      if (t < 10) return mid + Math.sin(t / 10 * Math.PI) * 4;
      if (t < 20) return mid;
      if (t < 25) return mid - Math.sin((t - 20) / 5 * Math.PI) * 6;
      if (t < 28) return mid + 28;
      if (t < 32) return mid - 36;
      if (t < 36) return mid + 28;
      if (t < 40) return mid;
      if (t < 60) return mid - Math.sin((t - 40) / 20 * Math.PI) * 6;
      return mid;
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(99,190,155,0.08)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.shadowColor = "rgba(99,190,155,0.7)";
      ctx.shadowBlur = 6;
      ctx.strokeStyle = "rgba(99,190,155,0.9)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i <= W; i++) {
        const y = ecgY(i - offset);
        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
      offset += speed;
      rafRef.current = requestAnimationFrame(draw);
    }
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      width: 320,
      height: 60,
      className: "w-full h-full",
      "aria-hidden": "true",
      tabIndex: -1
    }
  );
}
function TypewriterText({ text, delay = 0 }) {
  const elRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      el.textContent = text;
      return;
    }
    el.textContent = "";
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        el.textContent = text.slice(0, i + 1);
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: elRef });
}
function CountChip({
  value,
  label,
  delay = 0
}) {
  const elRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const start = performance.now();
    const duration = 1200;
    const timeout = setTimeout(() => {
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        el.textContent = String(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: elRef, className: "text-sm font-bold text-white tabular-nums", children: "0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/70", children: label })
  ] });
}
function HeroVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full flex items-center justify-center p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        style: {
          background: "radial-gradient(ellipse 60% 40% at 60% 50%, rgba(99,190,155,0.12) 0%, transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-sm space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          className: "rounded-lg p-3.5 border",
          style: {
            background: "rgba(255,255,255,0.05)",
            borderColor: "rgba(255,255,255,0.12)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold text-white",
                    style: { background: "var(--primary)" },
                    children: "MC"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white leading-none", children: "Catherine Lee" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: { color: "rgba(255,255,255,0.5)" },
                      children: "MRN-002 · 58 yrs · F"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-0.5 rounded-sm text-xs font-semibold bg-danger/20 text-danger", children: "Critical" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
              { label: "BP", value: "158/95" },
              { label: "HR", value: "88 bpm" },
              { label: "SpO₂", value: "97%" }
            ].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded p-1.5 text-center",
                style: { background: "rgba(255,255,255,0.05)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "rgba(255,255,255,0.5)" },
                      children: v.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-white mt-0.5", children: v.value })
                ]
              },
              v.label
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "rounded-lg p-3 border",
          style: {
            background: "rgba(0,0,0,0.3)",
            borderColor: "rgba(99,190,155,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-semibold uppercase tracking-wider",
                  style: { color: "rgba(99,190,155,0.9)" },
                  children: "Live ECG"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-success animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs",
                    style: { color: "rgba(99,190,155,0.7)" },
                    children: "Normal Sinus"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[60px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ECGCanvas, {}) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.35 },
          className: "rounded-lg p-3.5 border",
          style: {
            background: "rgba(255,255,255,0.05)",
            borderColor: "rgba(255,255,255,0.12)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs uppercase tracking-wider font-semibold mb-1.5",
                style: { color: "rgba(255,255,255,0.4)" },
                children: "SOAP Note"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-xs leading-relaxed",
                style: { color: "rgba(255,255,255,0.75)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-semibold",
                      style: { color: "rgba(99,190,155,0.9)" },
                      children: [
                        "S:",
                        " "
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TypewriterText,
                    {
                      text: "Chest pain, exertional onset, 3/10 severity...",
                      delay: 600
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, delay: 0.5 },
          className: "flex flex-wrap gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CountChip, { value: 98, label: "Patients", delay: 600 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CountChip, { value: 12, label: "Pending Orders", delay: 800 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CountChip, { value: 3, label: "Critical Labs", delay: 1e3 })
          ]
        }
      )
    ] })
  ] });
}
function Landing({
  onSignIn,
  onTryDemo,
  onPatientPortal
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              height: "100vh",
              scrollSnapAlign: "start",
              overflow: "hidden",
              position: "relative",
              background: BRAND_DARK_HEX
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": "true",
                  style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": "true",
                  style: {
                    position: "absolute",
                    top: "-20%",
                    right: "-10%",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(99,190,155,0.08) 0%, transparent 70%)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-10 pt-8 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold text-white flex-shrink-0",
                        style: { background: "var(--primary)" },
                        children: "M"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-white tracking-tight", children: "MedUnite" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onSignIn,
                      className: "text-sm font-medium transition-colors",
                      style: { color: "rgba(255,255,255,0.6)" },
                      "data-ocid": "landing.signin.link",
                      children: "Sign In →"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-1 lg:grid-cols-[55%_45%] px-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-6 py-12 max-w-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border",
                              style: {
                                background: "rgba(99,190,155,0.15)",
                                borderColor: "rgba(99,190,155,0.3)",
                                color: "rgba(99,190,155,0.9)"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-success animate-pulse" }),
                                "Enterprise EHR Platform"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "h1",
                            {
                              className: "text-5xl xl:text-6xl font-bold leading-tight text-white",
                              style: { letterSpacing: "-0.02em" },
                              children: [
                                "Healthcare management built for how clinicians",
                                " ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(99,190,155,0.9)" }, children: "actually work" })
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.p,
                      {
                        initial: { opacity: 0, y: 16 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6, delay: 0.15 },
                        className: "text-base leading-relaxed max-w-md",
                        style: { color: "rgba(255,255,255,0.6)" },
                        children: "Unify patient records, clinical workflows, pharmacy, billing, and reporting in one role-based platform."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 12 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6, delay: 0.1 },
                        className: "flex flex-col sm:flex-row gap-3",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              "data-ocid": "landing.try_demo.primary_button",
                              onClick: onTryDemo,
                              className: "flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all hover:opacity-90 active:scale-95",
                              style: {
                                background: "white",
                                color: BRAND_DARK_HEX
                              },
                              children: [
                                "Try Demo — No login required",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              "data-ocid": "landing.signin.button",
                              onClick: onSignIn,
                              className: "flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all hover:bg-white/10 active:scale-95",
                              style: {
                                borderColor: "rgba(255,255,255,0.3)",
                                color: "rgba(255,255,255,0.85)"
                              },
                              children: "Sign In"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.6, delay: 0.45 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "landing.patient_portal.link",
                            onClick: onPatientPortal,
                            className: "text-sm transition-colors hover:underline",
                            style: { color: "rgba(99,190,155,0.8)" },
                            children: "Patient Portal →"
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVisual, {}) })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              height: "100vh",
              scrollSnapAlign: "start",
              overflow: "hidden",
              background: "var(--background)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": "true",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: BRAND_GRADIENT
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-4xl px-8 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    viewport: { once: true },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest mb-3 text-primary", children: "Why MedUnite" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "h2",
                        {
                          className: "text-3xl font-bold text-foreground mb-12",
                          style: { letterSpacing: "-0.02em" },
                          children: [
                            "Everything your team needs,",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: "nothing they don't" })
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                  {
                    icon: Stethoscope,
                    iconBgClass: "bg-primary/10",
                    iconColorClass: "text-primary",
                    title: "Clinical clarity",
                    desc: "One unified chart. Every provider sees the same complete picture — meds, labs, notes, and alerts.",
                    delay: 0.1
                  },
                  {
                    icon: ShieldCheck,
                    iconBgClass: "bg-success/10",
                    iconColorClass: "text-success",
                    title: "Built-in safety",
                    desc: "Drug interaction checks, allergy alerts, and care gap reminders catch issues before they reach the patient.",
                    delay: 0.2
                  },
                  {
                    icon: ChartColumn,
                    iconBgClass: "bg-primary/15",
                    iconColorClass: "text-primary",
                    title: "Smarter decisions",
                    desc: "Real-time analytics and population health views turn clinical data into actionable insights.",
                    delay: 0.3
                  }
                ].map(
                  ({
                    icon: Icon,
                    iconBgClass,
                    iconColorClass,
                    title,
                    desc,
                    delay
                  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay },
                      viewport: { once: true },
                      className: "rounded-lg p-6 text-left border bg-card",
                      style: { borderColor: "var(--border)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `w-10 h-10 rounded-md flex items-center justify-center mb-4 ${iconBgClass}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${iconColorClass}` })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: desc })
                      ]
                    },
                    title
                  )
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              height: "100vh",
              scrollSnapAlign: "start",
              overflow: "hidden",
              background: BRAND_DARK2_HEX,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              position: "relative",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": "true",
                  style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": "true",
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(99,190,155,0.1) 0%, transparent 70%)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative px-8 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  viewport: { once: true },
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-semibold uppercase tracking-widest",
                        style: { color: "rgba(99,190,155,0.7)" },
                        children: "Live Demo"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "h2",
                      {
                        className: "text-5xl font-bold text-white leading-tight",
                        style: { letterSpacing: "-0.02em" },
                        children: [
                          "Ready to see MedUnite",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(99,190,155,0.9)" }, children: "in action?" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-base leading-relaxed",
                        style: { color: "rgba(255,255,255,0.55)" },
                        children: "Explore every module — no login, no setup. The full platform, live in your browser."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "landing.cta.primary_button",
                        onClick: onTryDemo,
                        className: "inline-flex items-center gap-2.5 px-8 py-3.5 rounded font-semibold text-sm transition-all hover:opacity-90 active:scale-95",
                        style: {
                          background: "white",
                          color: BRAND_DARK_HEX
                        },
                        children: [
                          "Try the Demo",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs pt-2 text-white/30", children: "For demonstration purposes only. Not for clinical use." })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-0 right-0 flex items-center justify-center h-10 border-t",
                  style: { borderColor: "rgba(255,255,255,0.08)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/30", children: [
                    "© ",
                    (/* @__PURE__ */ new Date()).getFullYear(),
                    " MedUnite Health Systems"
                  ] })
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  Landing as default
};
