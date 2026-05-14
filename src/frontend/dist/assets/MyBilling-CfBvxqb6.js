import { c as createLucideIcon, aO as usePortalContext, r as reactExports, aP as DEMO_INVOICES, j as jsxRuntimeExports, B as Button, C as ChevronDown, i as ue } from "./index-4utdZC3E.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-CMzOpeqR.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { C as CircleCheckBig } from "./circle-check-big-BlGxcqiI.js";
import { F as FileText } from "./file-text-BiTX0NSn.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
const INVOICE_DESCRIPTIONS = {
  "11": {
    description: "Office Visit — Dr. Jordan Lee",
    details: "CPT 99213 – Level 3 Office Visit. Diabetes follow-up with medication review. Date of service: Feb 28, 2026."
  },
  "12": {
    description: "Lab Services — Comprehensive Metabolic Panel",
    details: "CPT 80053 – Comprehensive Metabolic Panel. CPT 85025 – CBC with Differential. HbA1c check. Date of service: Jan 10, 2026."
  },
  "1": {
    description: "Copay — Annual Wellness Visit",
    details: "CPT 99395 – Annual wellness examination. Preventive care visit. Date of service: Sep 5, 2025."
  },
  "13": {
    description: "Specialist Consultation — Endocrinology",
    details: "CPT 99243 – Level 3 consultation. Referral from Dr. Jordan Lee for insulin therapy evaluation. Date of service: Dec 8, 2025."
  }
};
const DUE_DATE = "April 15, 2026";
function MyBilling() {
  const { id: PORTAL_PATIENT_ID } = usePortalContext();
  const portalInvoices = reactExports.useMemo(
    () => DEMO_INVOICES.filter((inv) => inv.patientId === PORTAL_PATIENT_ID),
    [PORTAL_PATIENT_ID]
  );
  const pendingInvoices = reactExports.useMemo(
    () => portalInvoices.filter((inv) => inv.status !== "paid"),
    [portalInvoices]
  );
  const paidInvoices = reactExports.useMemo(
    () => portalInvoices.filter((inv) => inv.status === "paid"),
    [portalInvoices]
  );
  const outstandingBalance = reactExports.useMemo(
    () => pendingInvoices.reduce((sum, inv) => sum + Number(inv.amount) / 100, 0),
    [pendingInvoices]
  );
  const [payExpanded, setPayExpanded] = reactExports.useState(false);
  const [paySuccess, setPaySuccess] = reactExports.useState(false);
  const [planExpanded, setPlanExpanded] = reactExports.useState(false);
  const [planSuccess, setPlanSuccess] = reactExports.useState(false);
  const [expandedInvoice, setExpandedInvoice] = reactExports.useState(null);
  const [payForm, setPayForm] = reactExports.useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: outstandingBalance.toFixed(2)
  });
  const [installments, setInstallments] = reactExports.useState(3);
  const monthlyAmount = (outstandingBalance / installments).toFixed(2);
  const handlePay = () => {
    if (!payForm.cardNumber || !payForm.expiry || !payForm.cvv) {
      ue.error("Please fill in all payment fields");
      return;
    }
    setPaySuccess(true);
  };
  const handlePlanSetup = () => {
    setPlanSuccess(true);
  };
  function invoiceLabel(id) {
    var _a;
    return ((_a = INVOICE_DESCRIPTIONS[String(id)]) == null ? void 0 : _a.description) ?? `Invoice #${String(id)}`;
  }
  function invoiceDetails(id) {
    var _a;
    return ((_a = INVOICE_DESCRIPTIONS[String(id)]) == null ? void 0 : _a.details) ?? "No additional details available.";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "billing.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        "data-ocid": "billing.balance.card",
        className: "border-2 border-destructive/20 bg-destructive/5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-5 h-5 text-destructive" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide font-semibold", children: "Outstanding Balance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-foreground", children: [
                  "$",
                  outstandingBalance.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                  "Due by ",
                  DUE_DATE
                ] })
              ] })
            ] }),
            !paySuccess && outstandingBalance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                "data-ocid": "billing.pay_now.button",
                onClick: () => {
                  setPayExpanded(!payExpanded);
                  setPlanExpanded(false);
                },
                children: [
                  payExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 mr-1.5" }),
                  "Pay Now"
                ]
              }
            )
          ] }),
          paySuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-4 pt-4 border-t border-border flex items-center gap-3 text-success",
              "data-ocid": "billing.pay.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Payment Submitted Successfully" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "$",
                    payForm.amount,
                    " payment confirmed. A receipt has been sent to your email."
                  ] })
                ] })
              ]
            }
          ),
          payExpanded && !paySuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-4 pt-4 border-t border-border space-y-3",
              "data-ocid": "billing.pay.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Payment Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Card Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "1234 5678 9012 3456",
                        value: payForm.cardNumber,
                        onChange: (e) => setPayForm({ ...payForm, cardNumber: e.target.value }),
                        "data-ocid": "billing.card_number.input",
                        className: "text-sm h-8"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Expiry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "MM/YY",
                        value: payForm.expiry,
                        onChange: (e) => setPayForm({ ...payForm, expiry: e.target.value }),
                        "data-ocid": "billing.expiry.input",
                        className: "text-sm h-8"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "CVV" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "123",
                        value: payForm.cvv,
                        onChange: (e) => setPayForm({ ...payForm, cvv: e.target.value }),
                        "data-ocid": "billing.cvv.input",
                        className: "text-sm h-8"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Amount" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: payForm.amount,
                        onChange: (e) => setPayForm({ ...payForm, amount: e.target.value }),
                        "data-ocid": "billing.amount.input",
                        className: "text-sm h-8"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "bg-primary text-primary-foreground hover:bg-primary/90",
                      onClick: handlePay,
                      "data-ocid": "billing.pay.submit_button",
                      children: "Submit Payment"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => setPayExpanded(false),
                      "data-ocid": "billing.pay.cancel_button",
                      children: "Cancel"
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      }
    ),
    outstandingBalance > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "billing.plans.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Payment Plans" }),
        !planSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            "data-ocid": "billing.setup_plan.button",
            onClick: () => {
              setPlanExpanded(!planExpanded);
              setPayExpanded(false);
            },
            children: [
              planExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 mr-1.5" }),
              "Set Up Payment Plan"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-3 bg-muted/40 rounded border border-border",
            "data-ocid": "billing.plan.item.1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "$50 / month" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "4 remaining payments · Next due: Apr 1, 2026" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "success", label: "Active" })
            ]
          }
        ),
        planSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 p-3 bg-success/10 border border-success/25 rounded text-success",
            "data-ocid": "billing.plan.success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Payment Plan Confirmed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "$",
                  monthlyAmount,
                  "/month for ",
                  installments,
                  " months starting next billing cycle."
                ] })
              ] })
            ]
          }
        ),
        planExpanded && !planSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "pt-3 border-t border-border space-y-4",
            "data-ocid": "billing.plan.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "New Payment Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-2 block", children: "Choose Installments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [3, 6, 12].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `billing.plan.installments.${n}.toggle`,
                    onClick: () => setInstallments(n),
                    className: `flex-1 py-2.5 text-sm font-medium rounded border transition-colors ${installments === n ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border hover:bg-muted/40"}`,
                    children: [
                      n,
                      " months"
                    ]
                  },
                  n
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/30 rounded border border-border space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Total balance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                    "$",
                    outstandingBalance.toFixed(2)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Installments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                    installments,
                    " payments"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border pt-1 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Monthly payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-bold text-primary", children: [
                    "$",
                    monthlyAmount
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90",
                    onClick: handlePlanSetup,
                    "data-ocid": "billing.plan.submit_button",
                    children: [
                      "Confirm Plan — $",
                      monthlyAmount,
                      "/mo"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setPlanExpanded(false),
                    "data-ocid": "billing.plan.cancel_button",
                    children: "Cancel"
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }),
    paidInvoices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "billing.history.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Payment History" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: paidInvoices.map((inv, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `billing.history.row.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: invoiceLabel(inv.id) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs text-right", children: [
                "$",
                (Number(inv.amount) / 100).toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "success", label: "Paid" }) })
            ]
          },
          String(inv.id)
        )) })
      ] }) })
    ] }),
    pendingInvoices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "billing.invoices.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Invoices Due" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-2", children: pendingInvoices.map((inv, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `billing.invoices.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/30 rounded border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: invoiceLabel(inv.id) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground capitalize", children: inv.status })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
                  "$",
                  (Number(inv.amount) / 100).toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs",
                    "data-ocid": `billing.invoice.button.${i + 1}`,
                    onClick: () => setExpandedInvoice(
                      expandedInvoice === String(inv.id) ? null : String(inv.id)
                    ),
                    children: expandedInvoice === String(inv.id) ? "Hide" : "View"
                  }
                )
              ] })
            ] }),
            expandedInvoice === String(inv.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mt-1 p-3 bg-muted/20 border border-t-0 border-border rounded-b text-xs text-muted-foreground",
                "data-ocid": `billing.invoice.panel.${i + 1}`,
                children: invoiceDetails(inv.id)
              }
            )
          ]
        },
        String(inv.id)
      )) })
    ] })
  ] });
}
export {
  MyBilling as default
};
