import { c as createLucideIcon, u as useDemoMode, f as useActor, p as React, r as reactExports, j as jsxRuntimeExports, X, q as CircleAlert, U as Users, s as CalendarDays, F as FlaskConical, l as ClipboardList, R as Receipt, M as MOCK_NOTIFICATIONS, P as Pill, t as Scan, v as BookOpen, I as Inbox, w as Settings, A as Activity, a as Stethoscope, x as ArrowRightLeft, y as MessageSquare } from "./index-4utdZC3E.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { P as Progress } from "./progress-DiD8RwaG.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { a as usePatients, u as useAppointments, c as useLabResults, d as useInvoices, e as usePrescriptions } from "./useBackendData-DW6vRqpq.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
import { C as CalendarCheck } from "./calendar-check-BxtSnl4N.js";
import { M as Mail } from "./mail-Cxzi8IJt.js";
import { U as UserCheck } from "./user-check-Ck2SZDxb.js";
import { G as GitBranch } from "./git-branch-Cj6wUQcK.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./generateCategoricalChart-CDEKTkJ0.js";
import { B as BarChart } from "./BarChart-Cu6sctOx.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 14h6", key: "159ibu" }],
  ["path", { d: "M12 17v-6", key: "1y8rbf" }]
];
const ClipboardPlus = createLucideIcon("clipboard-plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
const scheduleStatusVariant = {
  scheduled: "info",
  completed: "success",
  cancelled: "danger",
  "no-show": "neutral",
  "in-progress": "warning"
};
function relativeTime(ts) {
  const ms = Number(ts / BigInt(1e6));
  const diff = Date.now() - ms;
  if (diff < 6e4) return "just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  return `${Math.floor(diff / 864e5)}d ago`;
}
function StatCard({
  title,
  value,
  sub,
  icon: Icon,
  iconClass,
  valueClass,
  ocid,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      "data-ocid": ocid,
      className: `border border-border shadow-card bg-card ${onClick ? "cursor-pointer hover:bg-muted/30 transition-colors" : ""}`,
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${iconClass}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-3xl font-bold tabular-nums leading-none ${valueClass ?? "text-foreground"}`,
              children: value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: sub })
        ] })
      ]
    }
  );
}
const QUICK_ACTIONS = {
  Doctor: [
    {
      label: "Start Encounter",
      icon: Stethoscope,
      page: "appointments",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "New Referral",
      icon: GitBranch,
      page: "referrals",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "View Lab Results",
      icon: FlaskConical,
      page: "labs",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Add Patient",
      icon: UserPlus,
      page: "patients",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ],
  Nurse: [
    {
      label: "Inpatient Wards",
      icon: ClipboardList,
      page: "inpatient",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Medication Admin (MAR)",
      icon: ClipboardList,
      page: "mar",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Nursing Assessment",
      icon: Stethoscope,
      page: "nursing-assessment",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Shift Handoff",
      icon: ArrowRightLeft,
      page: "shift-handoff",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ],
  Pharmacist: [
    {
      label: "Pharmacy Queue",
      icon: ClipboardList,
      page: "pharmacy",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Prescriptions",
      icon: ClipboardPlus,
      page: "medication-reconciliation",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Medication Reconciliation",
      icon: ClipboardPlus,
      page: "medication-reconciliation",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Clinical Reference",
      icon: BookOpen,
      page: "clinical-reference",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ],
  Receptionist: [
    {
      label: "Register Patient",
      icon: UserPlus,
      page: "patients",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Book Appointment",
      icon: CalendarDays,
      page: "appointments",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Today's Schedule",
      icon: UserCheck,
      page: "appointments",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Referrals",
      icon: ClipboardList,
      page: "referrals",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ],
  Billing: [
    {
      label: "View Claims",
      icon: Receipt,
      page: "claims",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Revenue Cycle",
      icon: Activity,
      page: "reporting",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Prior Authorization",
      icon: ClipboardPlus,
      page: "prior-auth",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "View Patients",
      icon: Users,
      page: "patients",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ],
  Admin: [
    {
      label: "Add User",
      icon: UserPlus,
      page: "settings",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "View Reports",
      icon: ClipboardList,
      page: "reporting",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Audit Log",
      icon: Settings,
      page: "audit",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ],
  LabTech: [
    {
      label: "Lab Worklist",
      icon: FlaskConical,
      page: "labs",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Results Inbox",
      icon: Inbox,
      page: "results-inbox",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Orders",
      icon: ClipboardList,
      page: "orders",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Clinical Reference",
      icon: BookOpen,
      page: "clinical-reference",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ],
  Radiologist: [
    {
      label: "Imaging Queue",
      icon: Scan,
      page: "imaging",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Orders",
      icon: ClipboardList,
      page: "orders",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Clinical Reference",
      icon: BookOpen,
      page: "clinical-reference",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ]
};
const PROVIDER_TASKS = [
  {
    id: 1,
    icon: FlaskConical,
    description: "3 unreviewed lab results",
    priority: "urgent",
    page: "labs"
  },
  {
    id: 2,
    icon: MessageSquare,
    description: "2 patient messages",
    priority: "normal",
    page: "messages"
  },
  {
    id: 3,
    icon: Receipt,
    description: "1 unsigned clinical note",
    priority: "urgent",
    page: "notes"
  },
  {
    id: 4,
    icon: Pill,
    description: "2 refill requests pending",
    priority: "normal",
    page: "pharmacy"
  },
  {
    id: 5,
    icon: ClipboardList,
    description: "1 prior auth needs review",
    priority: "low",
    page: "prior-auth"
  }
];
const taskPriorityVariant = {
  urgent: "danger",
  normal: "warning",
  low: "neutral"
};
function Dashboard({
  onNavigate,
  role = "Doctor",
  activePatient
}) {
  const { isDemoMode, demoActor } = useDemoMode();
  const { actor: realActor, isFetching } = useActor();
  const actor = isDemoMode ? demoActor : realActor;
  const patientsQ = usePatients();
  const appointmentsQ = useAppointments();
  const labsQ = useLabResults();
  const invoicesQ = useInvoices();
  const prescriptionsQ = usePrescriptions();
  const [skipNoticeDismissed, setSkipNoticeDismissed] = React.useState(
    () => !!localStorage.getItem(`medunite_skip_notice_dismissed_${role}`)
  );
  const dismissSkipNotice = () => {
    localStorage.setItem(`medunite_skip_notice_dismissed_${role}`, "1");
    setSkipNoticeDismissed(true);
  };
  const [onboardingDismissed, setOnboardingDismissed] = React.useState(
    () => !!localStorage.getItem("medunite_onboarding_dismissed")
  );
  const dismissOnboarding = () => {
    localStorage.setItem("medunite_onboarding_dismissed", "1");
    setOnboardingDismissed(true);
  };
  const [setupDismissed, setSetupDismissed] = React.useState(() => {
    try {
      const saved = localStorage.getItem("admin-setup-checklist-v1");
      return saved ? JSON.parse(saved).dismissed === true : false;
    } catch {
      return false;
    }
  });
  const [setupChecked, setSetupChecked] = React.useState(() => {
    try {
      const saved = localStorage.getItem("admin-setup-checklist-v1");
      return saved ? JSON.parse(saved).checked ?? [false, false, false, false, false] : [false, false, false, false, false];
    } catch {
      return [false, false, false, false, false];
    }
  });
  const saveSetupState = (checked, dismissed) => {
    localStorage.setItem(
      "admin-setup-checklist-v1",
      JSON.stringify({ checked, dismissed })
    );
  };
  const toggleSetupItem = (i) => {
    const next = [...setupChecked];
    next[i] = !next[i];
    setSetupChecked(next);
    saveSetupState(next, setupDismissed);
  };
  const dismissSetup = () => {
    setSetupDismissed(true);
    saveSetupState(setupChecked, true);
  };
  const setupComplete = setupChecked.filter(Boolean).length;
  const [auditLogs, setAuditLogs] = reactExports.useState([]);
  const [logsLoading, setLogsLoading] = reactExports.useState(false);
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const loading = patientsQ.isLoading || appointmentsQ.isLoading || labsQ.isLoading || invoicesQ.isLoading || prescriptionsQ.isLoading;
  const totalPatients = reactExports.useMemo(
    () => patientsQ.data ? patientsQ.data.length : "—",
    [patientsQ.data]
  );
  const patientNames = reactExports.useMemo(() => {
    if (!patientsQ.data) return {};
    const names = {};
    for (const p of patientsQ.data) names[String(p.id)] = p.name;
    return names;
  }, [patientsQ.data]);
  const todayAppts = reactExports.useMemo(
    () => appointmentsQ.data ? appointmentsQ.data.filter((a) => a.date.startsWith(todayStr)) : [],
    [appointmentsQ.data, todayStr]
  );
  const criticalLabs = reactExports.useMemo(
    () => labsQ.data ? labsQ.data.filter((l) => l.isCritical).slice(0, 3) : [],
    [labsQ.data]
  );
  const allCriticalCount = reactExports.useMemo(
    () => labsQ.data ? labsQ.data.filter((l) => l.isCritical).length : 0,
    [labsQ.data]
  );
  const pendingInvoices = reactExports.useMemo(
    () => invoicesQ.data ? invoicesQ.data.filter((i) => i.status !== "paid").length : "—",
    [invoicesQ.data]
  );
  const pendingOrders = reactExports.useMemo(
    () => prescriptionsQ.data ? prescriptionsQ.data.filter(
      (p) => p.status === "pending" || p.status === "dispensing"
    ).length : "—",
    [prescriptionsQ.data]
  );
  reactExports.useEffect(() => {
    if (!actor) return;
    if (!isDemoMode && isFetching) return;
    setLogsLoading(true);
    actor.listAuditLogs().then((logs) => {
      const sorted = [...logs].sort(
        (a, b) => Number(b.timestamp - a.timestamp)
      );
      setAuditLogs(sorted.slice(0, 5));
    }).catch(() => {
    }).finally(() => setLogsLoading(false));
  }, [actor, isFetching, isDemoMode]);
  const criticalCount = criticalLabs.length;
  const hasCriticals = !loading && criticalCount > 0;
  const quickActions = QUICK_ACTIONS[role] ?? QUICK_ACTIONS.Doctor;
  const SETUP_ITEMS = [
    { label: "Invite staff and assign roles", tab: "users" },
    { label: "Configure provider schedules", tab: "availability" },
    { label: "Set up lab integrations", tab: "lab-integration" },
    { label: "Review SmartPhrase library", tab: "smartphrases" },
    { label: "Test FHIR API connection", tab: "fhir" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "dashboard.page", children: [
    !isDemoMode && (() => {
      const prefs = (() => {
        try {
          return JSON.parse(
            localStorage.getItem(`medunite_prefs_${role}`) || "{}"
          );
        } catch {
          return {};
        }
      })();
      const isEmpty = Object.keys(prefs).length === 0 && !!localStorage.getItem(`medunite_onboarded_${role}`);
      if (!isEmpty || skipNoticeDismissed) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-3 border border-border rounded-sm bg-muted/30 px-4 py-3",
          "data-ocid": "dashboard.skip_notice.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground flex-1 leading-relaxed", children: "Setup was skipped — your workspace is showing all records. Update preferences in Settings → Profile anytime." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-xs text-muted-foreground hover:text-foreground flex-shrink-0",
                "data-ocid": "dashboard.skip_notice.close_button",
                onClick: dismissSkipNotice,
                children: "Dismiss ×"
              }
            )
          ]
        }
      );
    })(),
    role === "Admin" && !setupDismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border rounded-sm bg-card",
        "data-ocid": "dashboard.setup_checklist.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "System Setup Checklist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex-shrink-0", children: [
                setupComplete,
                " of 5 complete"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 max-w-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: setupComplete / 5 * 100, className: "h-1.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "dashboard.setup_checklist.close_button",
                onClick: dismissSetup,
                className: "text-muted-foreground hover:text-foreground transition-colors flex-shrink-0",
                "aria-label": "Dismiss checklist",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: SETUP_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `dashboard.setup_checklist.item.${i + 1}`,
              className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `dashboard.setup_checklist.checkbox.${i + 1}`,
                    onClick: () => toggleSetupItem(i),
                    className: "flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-sm border-2 transition-all",
                    style: {
                      borderColor: setupChecked[i] ? "var(--primary)" : "var(--border)",
                      background: setupChecked[i] ? "var(--primary)" : "transparent"
                    },
                    "aria-label": `${setupChecked[i] ? "Uncheck" : "Check"} ${item.label}`,
                    children: setupChecked[i] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "w-3 h-3 text-primary-foreground",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-sm flex-1 transition-colors ${setupChecked[i] ? "line-through text-muted-foreground" : "text-foreground"}`,
                    children: item.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `dashboard.setup_checklist.settings.button.${i + 1}`,
                    onClick: () => onNavigate == null ? void 0 : onNavigate("settings"),
                    className: "text-xs text-primary hover:underline font-medium flex-shrink-0 transition-colors",
                    children: "Configure →"
                  }
                )
              ]
            },
            item.tab
          )) })
        ]
      }
    ),
    !activePatient && !onboardingDismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 bg-primary/5 border border-primary/20 rounded-sm p-3 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Getting started:" }),
        " Select a patient from the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onNavigate == null ? void 0 : onNavigate("patients"),
            className: "text-primary underline underline-offset-2 hover:text-primary/80 transition-colors",
            children: "Patients list"
          }
        ),
        " ",
        "to unlock clinical workflows, chart tabs, and encounter tools."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: dismissOnboarding,
          className: "text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-0.5",
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
    ] }),
    hasCriticals && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-destructive/10 border border-destructive/30 px-4 py-2.5 flex items-center gap-3 cursor-pointer hover:bg-destructive/15 transition-colors",
        "data-ocid": "dashboard.critical.error_state",
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") onNavigate == null ? void 0 : onNavigate("labs");
        },
        onClick: () => onNavigate == null ? void 0 : onNavigate("labs"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-destructive flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-destructive", children: [
            criticalCount,
            " Critical Lab Result",
            criticalCount !== 1 ? "s" : "",
            " ",
            "Require Immediate Attention"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-destructive/70 underline", children: "View in Lab Results →" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          ocid: "dashboard.patients.card",
          title: "Total Patients",
          value: loading ? "—" : totalPatients,
          sub: "registered in system",
          icon: Users,
          iconClass: "text-muted-foreground",
          onClick: () => onNavigate == null ? void 0 : onNavigate("patients")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          ocid: "dashboard.appointments.card",
          title: "Today's Appointments",
          value: loading ? "—" : todayAppts.length,
          sub: "scheduled for today",
          icon: CalendarDays,
          iconClass: "text-muted-foreground",
          onClick: () => onNavigate == null ? void 0 : onNavigate("appointments")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          ocid: "dashboard.critical_labs.card",
          title: "Critical Results",
          value: loading ? "—" : criticalCount,
          sub: "unreviewed",
          icon: FlaskConical,
          iconClass: "text-destructive",
          valueClass: hasCriticals ? "text-destructive" : "text-foreground",
          onClick: () => onNavigate == null ? void 0 : onNavigate("labs")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          ocid: "dashboard.pending_orders.card",
          title: "Pending Orders",
          value: loading ? "—" : pendingOrders,
          sub: "awaiting fulfillment",
          icon: ClipboardList,
          iconClass: "text-warning",
          valueClass: !loading && pendingOrders !== "—" && pendingOrders > 0 ? "text-warning" : "text-foreground",
          onClick: () => onNavigate == null ? void 0 : onNavigate("pharmacy")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          ocid: "dashboard.invoices.card",
          title: "Pending Invoices",
          value: loading ? "—" : pendingInvoices,
          sub: "unpaid",
          icon: Receipt,
          iconClass: "text-muted-foreground",
          onClick: () => onNavigate == null ? void 0 : onNavigate("billing")
        }
      )
    ] }),
    (role === "Doctor" || role === "Nurse") && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", "data-ocid": "smart-context-strip", children: [
      role === "Doctor" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onNavigate == null ? void 0 : onNavigate("appointments"),
            className: "text-xs font-medium px-3 py-1.5 rounded border bg-card hover:bg-muted/40 flex items-center gap-1.5 transition-colors shadow-card border-border",
            "data-ocid": "smart-context-strip.appointments.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "w-3.5 h-3.5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums font-semibold", children: todayAppts.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Appointments Today" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onNavigate == null ? void 0 : onNavigate("results-inbox"),
            className: "text-xs font-medium px-3 py-1.5 rounded border bg-card hover:bg-muted/40 flex items-center gap-1.5 transition-colors shadow-card border-border",
            "data-ocid": "smart-context-strip.results.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FlaskConical,
                {
                  className: `w-3.5 h-3.5 ${allCriticalCount > 0 ? "text-destructive" : "text-muted-foreground"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `tabular-nums font-semibold ${allCriticalCount > 0 ? "text-destructive" : ""}`,
                  children: allCriticalCount
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Pending Results" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onNavigate == null ? void 0 : onNavigate("messages"),
            className: "text-xs font-medium px-3 py-1.5 rounded border bg-card hover:bg-muted/40 flex items-center gap-1.5 transition-colors shadow-card border-border",
            "data-ocid": "smart-context-strip.messages.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums font-semibold", children: MOCK_NOTIFICATIONS.filter(
                (n) => !n.read && n.type === "message"
              ).length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Unread Messages" })
            ]
          }
        )
      ] }),
      role === "Nurse" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onNavigate == null ? void 0 : onNavigate("mar"),
          className: `text-xs font-medium px-3 py-1.5 rounded border bg-card hover:bg-muted/40 flex items-center gap-1.5 transition-colors shadow-card ${typeof pendingOrders === "number" && pendingOrders > 0 ? "border-warning text-warning" : "border-border"}`,
          "data-ocid": "smart-context-strip.overdue.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pill,
              {
                className: `w-3.5 h-3.5 ${typeof pendingOrders === "number" && pendingOrders > 0 ? "text-warning" : "text-muted-foreground"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `tabular-nums font-semibold ${typeof pendingOrders === "number" && pendingOrders > 0 ? "text-warning" : ""}`,
                children: typeof pendingOrders === "number" ? pendingOrders : 0
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Medications Overdue" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "dashboard.quick_actions.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Quick Actions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: quickActions.map((action, i) => {
            const Icon = action.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `dashboard.quick_actions.button.${i + 1}`,
                onClick: () => onNavigate == null ? void 0 : onNavigate(action.page),
                className: "flex flex-col items-center gap-2 px-5 py-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/40 transition-all min-w-[96px] group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-lg flex items-center justify-center ${action.bg} transition-all group-hover:opacity-90 group-hover:scale-110`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 ${action.color}` })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground leading-tight text-center", children: action.label })
                ]
              },
              action.label
            );
          }) }) })
        ]
      }
    ),
    (role === "Doctor" || role === "Nurse") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card lg:col-span-2",
          "data-ocid": "dashboard.tasks.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Pending Tasks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-sm text-xs font-bold bg-destructive text-destructive-foreground leading-none", children: PROVIDER_TASKS.length })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: PROVIDER_TASKS.map((task, i) => {
              const Icon = task.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `dashboard.tasks.item.${i + 1}`,
                  className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted/30 transition-colors cursor-pointer",
                  onClick: () => onNavigate == null ? void 0 : onNavigate(task.page),
                  onKeyDown: (e) => {
                    if (e.key === "Enter" || e.key === " ")
                      onNavigate == null ? void 0 : onNavigate(task.page);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-7 h-7 rounded bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-muted-foreground" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 text-sm text-foreground", children: task.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        variant: taskPriorityVariant[task.priority],
                        label: task.priority
                      }
                    )
                  ]
                },
                task.id
              );
            }) }) })
          ]
        }
      ),
      role === "Doctor" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "dashboard.activity_summary.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Today's Activity" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
              { label: "Patients Seen", value: 4 },
              { label: "Notes Signed", value: 3 },
              { label: "Orders Placed", value: 7 },
              { label: "Prescriptions Sent", value: 5 }
            ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `dashboard.activity_summary.item.${i + 1}`,
                className: "bg-muted/40 rounded-lg p-3 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold tabular-nums text-foreground leading-none", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-tight", children: stat.label })
                ]
              },
              stat.label
            )) }) })
          ]
        }
      )
    ] }),
    role === "Doctor" && (() => {
      const oneWeekAgo = /* @__PURE__ */ new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const weekStart = oneWeekAgo.toISOString().slice(0, 10);
      const encountersThisWeek = todayAppts.filter((a) => a.date >= weekStart).length + 5;
      const rvus = (encountersThisWeek * 2.4).toFixed(1);
      const openTasks = todayAppts.filter(
        (a) => a.status === "scheduled" || a.status === "pending"
      ).length;
      const performanceStats = [
        {
          label: "Encounters This Week",
          value: String(encountersThisWeek)
        },
        { label: "RVUs Generated", value: rvus },
        { label: "Avg Encounter Time", value: "24 min" },
        { label: "Open Tasks", value: String(openTasks) }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "dashboard.my_performance.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: [
                "My Performance",
                (() => {
                  try {
                    const p = JSON.parse(
                      localStorage.getItem("medunite_prefs_Doctor") || "{}"
                    );
                    return p.specialty ? ` · ${p.specialty}` : "";
                  } catch {
                    return "";
                  }
                })()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "This week" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: performanceStats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `dashboard.my_performance.item.${i + 1}`,
                className: "bg-muted/40 rounded-lg p-3 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold tabular-nums text-foreground leading-none", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-tight", children: stat.label })
                ]
              },
              stat.label
            )) }) })
          ]
        }
      );
    })(),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border shadow-card bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Today's Schedule" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 space-y-2",
            "data-ocid": "dashboard.schedule.loading_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-3/4" })
            ]
          }
        ) : todayAppts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-muted-foreground text-center py-8",
            "data-ocid": "dashboard.schedule.empty_state",
            children: "No appointments scheduled today"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: todayAppts.map((a, i) => {
          const time = a.date.includes("T") ? a.date.split("T")[1].substring(0, 5) : "--:--";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `dashboard.schedule.item.${i + 1}`,
              className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted/30 transition-colors cursor-pointer",
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ")
                  onNavigate == null ? void 0 : onNavigate("appointments");
              },
              onClick: () => onNavigate == null ? void 0 : onNavigate("appointments"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground w-10 flex-shrink-0 tabular-nums", children: time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate text-foreground", children: patientNames[String(a.patientId)] ?? `Patient #${a.patientId}` }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: scheduleStatusVariant[a.status] ?? "neutral",
                    label: a.status
                  }
                )
              ]
            },
            String(a.id)
          );
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border shadow-card bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Critical Lab Alerts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 space-y-2",
            "data-ocid": "dashboard.criticals.loading_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-3/4" })
            ]
          }
        ) : criticalLabs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-muted-foreground text-center py-8",
            "data-ocid": "dashboard.criticals.empty_state",
            children: "No critical results pending"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: criticalLabs.map((lab, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `dashboard.criticals.item.${i + 1}`,
            className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted/30 transition-colors cursor-pointer",
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ")
                onNavigate == null ? void 0 : onNavigate("labs");
            },
            onClick: () => onNavigate == null ? void 0 : onNavigate("labs"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate text-foreground", children: lab.testName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-primary hover:underline", children: patientNames[String(lab.patientId)] ?? `Patient #${lab.patientId}` }),
                  " · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                    lab.result,
                    " ",
                    lab.unit
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "danger", label: "Critical" })
            ]
          },
          String(lab.id)
        )) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "dashboard.activity.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Recent Activity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "dashboard.activity.view_all.button",
                onClick: () => onNavigate == null ? void 0 : onNavigate("audit"),
                className: "text-xs text-primary hover:underline font-medium",
                children: "View All"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: logsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 space-y-2",
              "data-ocid": "dashboard.activity.loading_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-5/6" })
              ]
            }
          ) : auditLogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm text-muted-foreground text-center py-8",
              "data-ocid": "dashboard.activity.empty_state",
              children: "No recent activity"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: auditLogs.map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `dashboard.activity.item.${i + 1}`,
              className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded border bg-muted text-muted-foreground border-border flex-shrink-0", children: log.entityType }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 text-sm text-foreground truncate", children: log.action }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground flex-shrink-0 tabular-nums", children: relativeTime(log.timestamp) })
              ]
            },
            String(log.id)
          )) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentVolumeChart, {})
  ] });
}
const WEEKLY_DATA = [
  { label: "Mon", count: 5 },
  { label: "Tue", count: 8 },
  { label: "Wed", count: 4 },
  { label: "Thu", count: 9 },
  { label: "Fri", count: 6 },
  { label: "Sat", count: 3 },
  { label: "Sun", count: 7 }
];
const _currentMonthLabel = (/* @__PURE__ */ new Date()).toLocaleString("default", {
  month: "short"
});
const MONTHLY_DATA = Array.from({ length: 30 }, (_, i) => ({
  label: `${_currentMonthLabel} ${i + 1}`,
  count: [
    8,
    5,
    11,
    7,
    9,
    12,
    6,
    10,
    8,
    14,
    7,
    9,
    11,
    5,
    8,
    13,
    10,
    6,
    9,
    12,
    7,
    11,
    8,
    15,
    9,
    7,
    10,
    13,
    8,
    11
  ][i] ?? 8
}));
const TOP_PROVIDERS = [
  { name: "Dr. Emily Carter", specialty: "Internal Medicine", count: 24 },
  { name: "Dr. Michael Ross", specialty: "Cardiology", count: 18 },
  { name: "Dr. Sarah Kim", specialty: "Pediatrics", count: 15 }
];
function AppointmentVolumeChart() {
  const [view, setView] = React.useState("weekly");
  const data = view === "weekly" ? WEEKLY_DATA : MONTHLY_DATA;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "dashboard.top_providers.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Top Providers This Week" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: TOP_PROVIDERS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `dashboard.top_providers.item.${i + 1}`,
              className: "flex items-center gap-3 px-4 py-2.5 border-b border-border last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground bg-primary flex-shrink-0", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.specialty })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold tabular-nums text-foreground", children: p.count })
              ]
            },
            p.name
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "dashboard.volume_chart.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "px-4 py-3 border-b border-border flex flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Appointment Volume" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded overflow-hidden border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "dashboard.volume_chart.weekly.toggle",
                  onClick: () => setView("weekly"),
                  className: `px-2.5 py-0.5 text-xs transition-colors ${view === "weekly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/50"}`,
                  children: "Weekly"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "dashboard.volume_chart.monthly.toggle",
                  onClick: () => setView("monthly"),
                  className: `px-2.5 py-0.5 text-xs transition-colors ${view === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/50"}`,
                  children: "Monthly"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data,
              barSize: view === "weekly" ? 28 : 8,
              margin: { top: 4, right: 4, left: -20, bottom: 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    dataKey: "label",
                    tick: {
                      fontSize: view === "weekly" ? 11 : 9,
                      fill: "var(--muted-foreground)"
                    },
                    axisLine: false,
                    tickLine: false,
                    interval: view === "monthly" ? 6 : 0
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                    axisLine: false,
                    tickLine: false,
                    domain: [0, "auto"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: {
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "4px",
                      fontSize: 12
                    },
                    cursor: { fill: "var(--muted)", opacity: 0.3 },
                    formatter: (value) => [value, "Appointments"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "count",
                    fill: "var(--chart-1)",
                    radius: [3, 3, 0, 0]
                  }
                )
              ]
            }
          ) }) })
        ]
      }
    )
  ] });
}
export {
  Dashboard as default
};
