import { c as createLucideIcon, aO as usePortalContext, r as reactExports, j as jsxRuntimeExports, a0 as Lock, F as FlaskConical, P as Pill, T as TriangleAlert, B as Button, i as ue, W as DEMO_APPOINTMENTS } from "./index-4utdZC3E.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Shield, a as Separator } from "./separator-xYB8AGqu.js";
import { S as Switch } from "./switch-Rr3vJljY.js";
import { H as Heart } from "./heart-CgPgDgav.js";
import { U as UserCheck } from "./user-check-Ck2SZDxb.js";
import "./index-BSY8sZ87.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode);
const DEFAULT_CONSENT = {
  labs: true,
  medications: true,
  vitals: true,
  mentalHealth: false,
  billing: true,
  analyticsOptIn: false,
  revokedProviders: [],
  lastUpdated: null
};
const DATA_CATEGORIES = [
  {
    key: "labs",
    icon: FlaskConical,
    label: "Labs & Test Results",
    description: "Blood work, urine tests, cultures, and diagnostic lab panels."
  },
  {
    key: "medications",
    icon: Pill,
    label: "Medications",
    description: "Prescriptions, dosage history, refills, and pharmacy records."
  },
  {
    key: "vitals",
    icon: Heart,
    label: "Vitals & Measurements",
    description: "Blood pressure, weight, heart rate, and temperature readings."
  },
  {
    key: "mentalHealth",
    icon: Shield,
    label: "Mental Health Notes",
    description: "Therapy notes, psychiatric assessments, and behavioral health records."
  },
  {
    key: "billing",
    icon: Building2,
    label: "Billing & Insurance",
    description: "Invoices, insurance claims, co-pays, and payment history."
  }
];
function getProviders(patientId) {
  const patientAppts = DEMO_APPOINTMENTS.filter(
    (a) => a.patientId === patientId
  );
  const providerIds = [
    ...new Set(patientAppts.map((a) => String(a.providerId)))
  ];
  const providerNames = {
    "10": "Dr. Sarah Chen"
  };
  return providerIds.map((id) => ({
    id,
    name: providerNames[id] ?? `Provider ${id}`,
    specialty: "Primary Care"
  }));
}
function PrivacyControls() {
  const { id: PORTAL_PATIENT_ID } = usePortalContext();
  const STORAGE_KEY = `medunite_consent_${PORTAL_PATIENT_ID}`;
  const [consent, setConsent] = reactExports.useState(DEFAULT_CONSENT);
  const [dirty, setDirty] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const providers = getProviders(PORTAL_PATIENT_ID);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setConsent({ ...DEFAULT_CONSENT, ...JSON.parse(raw) });
    } catch {
    }
  }, [STORAGE_KEY]);
  function toggleCategory(key) {
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
    setDirty(true);
  }
  function toggleAnalytics() {
    setConsent((prev) => ({ ...prev, analyticsOptIn: !prev.analyticsOptIn }));
    setDirty(true);
  }
  function revokeProvider(id) {
    setConsent((prev) => ({
      ...prev,
      revokedProviders: prev.revokedProviders.includes(id) ? prev.revokedProviders.filter((p) => p !== id) : [...prev.revokedProviders, id]
    }));
    setDirty(true);
  }
  async function handleSave() {
    setSaving(true);
    const updated = {
      ...consent,
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
    }
    setConsent(updated);
    setDirty(false);
    setSaving(false);
    ue.success("Privacy settings saved.");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "privacy.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-lg font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-primary" }),
        "Privacy & Data Controls"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "You decide who sees your health information." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "privacy.categories.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Data Category Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Control which categories of your health data providers can view." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-0 divide-y divide-border", children: DATA_CATEGORIES.map((cat, idx) => {
        const Icon = cat.icon;
        const isOn = consent[cat.key];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `privacy.category.item.${idx + 1}`,
            className: "flex items-start gap-4 py-4 first:pt-0 last:pb-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded flex items-center justify-center bg-muted flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: `category-${cat.key}`,
                    className: "text-sm font-semibold text-foreground cursor-pointer",
                    children: cat.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: cat.description }),
                !isOn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 text-xs text-warning", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
                  "Restricting this may limit your care team's ability to treat you."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  id: `category-${cat.key}`,
                  "data-ocid": `privacy.category.${cat.key}.switch`,
                  checked: isOn,
                  onCheckedChange: () => toggleCategory(cat.key)
                }
              )
            ]
          },
          cat.key
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "privacy.analytics.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Research Analytics" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "analytics-switch",
              className: "text-sm font-semibold text-foreground cursor-pointer",
              children: "Contribute anonymous data to research"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "When enabled, your de-identified health trends (no name, date of birth, or contact info) are included in population health analytics that help improve care for everyone." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" }),
            "Your identity is never shared. You can opt out at any time."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            id: "analytics-switch",
            "data-ocid": "privacy.analytics.switch",
            checked: consent.analyticsOptIn,
            onCheckedChange: toggleAnalytics
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "privacy.providers.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }),
          "Provider Access"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Providers who currently have access to your records." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: providers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4",
          "data-ocid": "privacy.providers.empty_state",
          children: "No providers have accessed your records."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "space-y-0 divide-y divide-border",
          "data-ocid": "privacy.providers.list",
          children: providers.map((provider, idx) => {
            const isRevoked = consent.revokedProviders.includes(
              provider.id
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `privacy.providers.item.${idx + 1}`,
                className: "flex items-center gap-3 py-3 first:pt-0 last:pb-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary", children: provider.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: provider.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: provider.specialty })
                  ] }),
                  isRevoked ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground italic", children: "Access revoked" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `privacy.providers.restore.button.${idx + 1}`,
                        onClick: () => revokeProvider(provider.id),
                        className: "text-xs font-semibold text-primary hover:underline transition-colors",
                        children: "Restore"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `privacy.providers.revoke.button.${idx + 1}`,
                      onClick: () => revokeProvider(provider.id),
                      className: "text-xs font-semibold text-destructive border border-destructive/30 px-2.5 py-1 rounded hover:bg-destructive/5 transition-colors",
                      children: "Revoke Access"
                    }
                  )
                ]
              },
              provider.id
            );
          })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between",
        "data-ocid": "privacy.save.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: consent.lastUpdated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Last updated:",
            " ",
            new Date(consent.lastUpdated).toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short"
            })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Changes not yet saved" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "privacy.save.button",
              onClick: handleSave,
              disabled: !dirty || saving,
              className: "gap-1.5",
              children: [
                saving ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin inline-block" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5" }),
                saving ? "Saving..." : "Save Changes"
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  PrivacyControls as default
};
