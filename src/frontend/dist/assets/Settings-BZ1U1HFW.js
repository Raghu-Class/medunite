var _a, _b, _c, _d, _e, _f, _g;
import { c as createLucideIcon, u as useDemoMode, r as reactExports, aL as DEMO_LAB_CONNECTIONS, n as DEMO_PATIENTS, j as jsxRuntimeExports, B as Button, C as ChevronDown, i as ue, aM as DEMO_USERS, d as Clock } from "./index-4utdZC3E.js";
import { B as Badge } from "./badge-D0bvPgLI.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Switch } from "./switch-Rr3vJljY.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D2sDVimt.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as Check } from "./select-D0xeunuB.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { S as Send } from "./send-DfSjPJ-o.js";
import { R as RefreshCw } from "./refresh-cw-DuZvDijR.js";
import PDMP from "./PDMP-Cu7DKZI_.js";
import { S as SmartPhrases } from "./SmartPhrases-DhdxWgVo.js";
import { U as UserCheck } from "./user-check-Ck2SZDxb.js";
import { C as CircleCheck } from "./circle-check-bR4Q56wu.js";
import "./index-BSY8sZ87.js";
import "./index-IXOTxK3N.js";
import "./shield-alert-CZH2jIqU.js";
import "./textarea-BQtbz16y.js";
import "./pen-B9xSOcM5.js";
import "./trash-2-BcsATfdj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = createLucideIcon("circle-plus", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
];
const UserX = createLucideIcon("user-x", __iconNode);
let _labIdCounter = Date.now();
const nextLabId = () => (++_labIdCounter).toString(36);
const initialConnections = [
  {
    id: 1,
    name: "Quest Diagnostics",
    interfaceType: "HL7 v2.5",
    endpoint: "https://api.questdiagnostics.com/hl7",
    status: "active"
  },
  {
    id: 2,
    name: "LabCorp",
    interfaceType: "FHIR R4",
    endpoint: "https://api.labcorp.com/fhir",
    status: "active"
  },
  {
    id: 3,
    name: "Bio Reference",
    interfaceType: "HL7 v2.5",
    endpoint: "https://api.bioreference.com/hl7",
    status: "inactive"
  }
];
const pendingOrders = [
  { id: "ord-1", label: `CBC Panel — ${((_a = DEMO_PATIENTS[0]) == null ? void 0 : _a.name) ?? "Patient"}` },
  { id: "ord-2", label: `HbA1c — ${((_b = DEMO_PATIENTS[1]) == null ? void 0 : _b.name) ?? "Patient"}` },
  {
    id: "ord-3",
    label: `Lipid Panel — ${((_c = DEMO_PATIENTS[2]) == null ? void 0 : _c.name) ?? "Patient"}`
  }
];
const mockHl7Message = (patient, test) => `MSH|^~\\&|MEDUNITE|ST_MICHAEL|QUEST|LABINFO|${(/* @__PURE__ */ new Date()).toISOString().replace(/[-:T.Z]/g, "").slice(
  0,
  14
)}||ORM^O01|${(Date.now() % 1e8).toString(16).toUpperCase().padStart(8, "0")}|P|2.5
PID|1||MRN-${1e5 + Date.now() % 9e4}^^^MedUnite^MR||${patient.split(" ").reverse().join("^")}||19780315|F
ORC|NW|ORD-2026-${1e3 + Date.now() % 9e3}||||||20260313120000
OBR|1|||${test}^${test}^L|||20260313120000`;
const mockFhirBundle = (patient, test) => JSON.stringify(
  {
    resourceType: "Bundle",
    id: `bundle-${nextLabId()}`,
    type: "message",
    entry: [
      {
        resource: {
          resourceType: "ServiceRequest",
          status: "active",
          intent: "order",
          code: { text: test },
          subject: { display: patient },
          authoredOn: (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    ]
  },
  null,
  2
);
const mockIncomingResults = [
  {
    id: 1,
    timestamp: "2026-03-13 08:14",
    lab: "Quest Diagnostics",
    patient: ((_d = DEMO_PATIENTS[0]) == null ? void 0 : _d.name) ?? "Alice Johnson",
    test: "CBC Panel",
    result: "WBC 5.2, RBC 4.8, Hgb 13.4 — Normal",
    messageType: "HL7 ACK",
    rawMessage: mockHl7Message(
      ((_e = DEMO_PATIENTS[0]) == null ? void 0 : _e.name) ?? "Alice Johnson",
      "CBC Panel"
    ),
    expanded: false
  },
  {
    id: 2,
    timestamp: "2026-03-13 07:50",
    lab: "LabCorp",
    patient: ((_f = DEMO_PATIENTS[1]) == null ? void 0 : _f.name) ?? "Bob Martinez",
    test: "HbA1c",
    result: "7.8% — Elevated",
    messageType: "FHIR Bundle",
    rawMessage: mockFhirBundle(
      ((_g = DEMO_PATIENTS[1]) == null ? void 0 : _g.name) ?? "Bob Martinez",
      "HbA1c"
    ),
    expanded: false
  }
];
const connectionStatusVariant = {
  active: "success",
  inactive: "neutral"
};
const transmitStatusVariant = {
  Sent: "info",
  Acknowledged: "success",
  Failed: "danger"
};
function LabIntegration() {
  var _a2, _b2, _c2;
  const { isDemoMode } = useDemoMode();
  const SECTION_LABELS = {
    chemistry: "Chemistry",
    hematology: "Hematology",
    microbiology: "Microbiology",
    pathology: "Pathology"
  };
  const sectionPref = reactExports.useMemo(() => {
    try {
      const p = JSON.parse(
        localStorage.getItem("medunite_prefs_LabTech") || "{}"
      );
      return p.labSection || "";
    } catch {
      return "";
    }
  }, []);
  const [connections, setConnections] = reactExports.useState(
    () => isDemoMode ? DEMO_LAB_CONNECTIONS.map((c) => ({
      id: c.id,
      name: c.name,
      interfaceType: c.protocol,
      endpoint: c.endpoint,
      status: c.status === "connected" ? "active" : "inactive"
    })) : initialConnections
  );
  const [showAddConnection, setShowAddConnection] = reactExports.useState(false);
  const [newConn, setNewConn] = reactExports.useState({
    name: "",
    interfaceType: "HL7 v2.5",
    endpoint: "",
    status: "active"
  });
  const [selectedOrder, setSelectedOrder] = reactExports.useState("");
  const [selectedLab, setSelectedLab] = reactExports.useState("");
  const [transmissions, setTransmissions] = reactExports.useState([
    {
      id: 1,
      timestamp: "2026-03-13 09:02",
      patient: ((_a2 = DEMO_PATIENTS[0]) == null ? void 0 : _a2.name) ?? "Alice Johnson",
      test: "CBC Panel",
      lab: "Quest Diagnostics",
      status: "Acknowledged"
    },
    {
      id: 2,
      timestamp: "2026-03-13 08:47",
      patient: ((_b2 = DEMO_PATIENTS[1]) == null ? void 0 : _b2.name) ?? "Bob Martinez",
      test: "HbA1c",
      lab: "LabCorp",
      status: "Acknowledged"
    },
    {
      id: 3,
      timestamp: "2026-03-12 16:30",
      patient: ((_c2 = DEMO_PATIENTS[2]) == null ? void 0 : _c2.name) ?? "Carol White",
      test: "Lipid Panel",
      lab: "Bio Reference",
      status: "Failed"
    }
  ]);
  const [incomingResults, setIncomingResults] = reactExports.useState(mockIncomingResults);
  const handleToggleConnection = (id) => {
    setConnections(
      (prev) => prev.map(
        (c) => c.id === id ? { ...c, status: c.status === "active" ? "inactive" : "active" } : c
      )
    );
    ue.success("Connection status updated");
  };
  const handleAddConnection = () => {
    if (!newConn.name || !newConn.endpoint) {
      ue.error("Lab name and endpoint are required");
      return;
    }
    setConnections((prev) => [...prev, { id: prev.length + 1, ...newConn }]);
    ue.success(`Lab connection "${newConn.name}" added`);
    setShowAddConnection(false);
    setNewConn({
      name: "",
      interfaceType: "HL7 v2.5",
      endpoint: "",
      status: "active"
    });
  };
  const handleTransmit = () => {
    if (!selectedOrder || !selectedLab) {
      ue.error("Select an order and target lab");
      return;
    }
    const order = pendingOrders.find((o) => o.id === selectedOrder);
    const [testPart, patientPart] = ((order == null ? void 0 : order.label) ?? "").split(" — ");
    setTransmissions((prev) => [
      {
        id: prev.length + 1,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }).replace(",", ""),
        patient: patientPart ?? "Unknown",
        test: testPart ?? selectedOrder,
        lab: selectedLab,
        status: "Sent"
      },
      ...prev
    ]);
    ue.success(`Order transmitted to ${selectedLab}`);
    setSelectedOrder("");
    setSelectedLab("");
  };
  const simulateIncoming = () => {
    var _a3, _b3, _c3;
    const labs = ["Quest Diagnostics", "LabCorp"];
    const patients = [
      ((_a3 = DEMO_PATIENTS[3]) == null ? void 0 : _a3.name) ?? "James Thornton",
      ((_b3 = DEMO_PATIENTS[4]) == null ? void 0 : _b3.name) ?? "Aisha Patel",
      ((_c3 = DEMO_PATIENTS[5]) == null ? void 0 : _c3.name) ?? "William Park"
    ];
    const tests = [
      "Metabolic Panel",
      "Thyroid Panel",
      "Urinalysis",
      "Vitamin D"
    ];
    const results = [
      "Within normal limits",
      "Mildly elevated — see full report",
      "Low — clinical review advised"
    ];
    const types = ["HL7 ACK", "FHIR Bundle"];
    const seed = Date.now();
    const lab = labs[seed % labs.length];
    const patient = patients[(seed >> 2) % patients.length];
    const test = tests[(seed >> 4) % tests.length];
    const result = results[(seed >> 6) % results.length];
    const messageType = types[(seed >> 8) % types.length];
    const rawMessage = messageType === "HL7 ACK" ? mockHl7Message(patient, test) : mockFhirBundle(patient, test);
    const now = /* @__PURE__ */ new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setIncomingResults((prev) => [
      {
        id: prev.length + 1,
        timestamp,
        lab,
        patient,
        test,
        result,
        messageType,
        rawMessage,
        expanded: true
      },
      ...prev
    ]);
    ue.success("Incoming result received");
  };
  const toggleExpanded = (id) => {
    setIncomingResults(
      (prev) => prev.map((r) => r.id === id ? { ...r, expanded: !r.expanded } : r)
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "labintegration.page", children: [
    sectionPref && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Showing:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-sm", children: SECTION_LABELS[sectionPref] ?? sectionPref })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "labintegration.connections.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Lab Connections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Manage external laboratory system integrations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "bg-primary text-primary-foreground hover:bg-primary/90",
            "data-ocid": "labintegration.connections.primary_button",
            onClick: () => setShowAddConnection((v) => !v),
            children: [
              showAddConnection ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
              "Add Connection"
            ]
          }
        )
      ] }),
      showAddConnection && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border bg-card p-5 mb-3",
          "data-ocid": "labintegration.connections.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4", children: "New Lab Connection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Lab Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "labintegration.connections.name.input",
                    value: newConn.name,
                    onChange: (e) => setNewConn((p) => ({ ...p, name: e.target.value })),
                    className: "mt-1 h-8 text-sm",
                    placeholder: "e.g. Sonic Healthcare"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Interface Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: newConn.interfaceType,
                    onValueChange: (v) => setNewConn((p) => ({
                      ...p,
                      interfaceType: v
                    })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          "data-ocid": "labintegration.connections.interface.select",
                          className: "mt-1 h-8 text-sm",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HL7 v2.5", children: "HL7 v2.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "FHIR R4", children: "FHIR R4" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Endpoint URL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "labintegration.connections.endpoint.input",
                    value: newConn.endpoint,
                    onChange: (e) => setNewConn((p) => ({ ...p, endpoint: e.target.value })),
                    className: "mt-1 h-8 text-sm",
                    placeholder: "https://api.lab.com/hl7"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: newConn.status,
                    onValueChange: (v) => setNewConn((p) => ({ ...p, status: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          "data-ocid": "labintegration.connections.status.select",
                          className: "mt-1 h-8 text-sm",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inactive", children: "Inactive" })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  "data-ocid": "labintegration.connections.submit_button",
                  className: "bg-primary text-primary-foreground hover:bg-primary/90",
                  onClick: handleAddConnection,
                  children: "Save Connection"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  "data-ocid": "labintegration.connections.cancel_button",
                  variant: "outline",
                  onClick: () => setShowAddConnection(false),
                  children: "Cancel"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "labintegration.connections.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Lab Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Interface" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Endpoint" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: connections.map((conn, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `labintegration.connections.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: conn.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs bg-muted px-1.5 py-0.5 rounded", children: conn.interfaceType }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs px-4 py-2.5 text-muted-foreground font-mono", children: conn.endpoint }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: connectionStatusVariant[conn.status],
                  label: conn.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-6 text-xs px-2",
                  "data-ocid": `labintegration.connections.toggle.${i + 1}`,
                  onClick: () => handleToggleConnection(conn.id),
                  children: conn.status === "active" ? "Deactivate" : "Activate"
                }
              ) })
            ]
          },
          conn.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "labintegration.transmission.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-3", children: "Transmit Lab Orders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card p-5 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Pending Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedOrder, onValueChange: setSelectedOrder, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                "data-ocid": "labintegration.transmission.order.select",
                className: "mt-1 h-8 text-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select order" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: pendingOrders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.id, children: o.label }, o.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Target Lab" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedLab, onValueChange: setSelectedLab, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                "data-ocid": "labintegration.transmission.lab.select",
                className: "mt-1 h-8 text-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select lab" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: connections.filter((c) => c.status === "active").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.name, children: c.name }, c.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "bg-primary text-primary-foreground hover:bg-primary/90 w-full",
            "data-ocid": "labintegration.transmission.submit_button",
            onClick: handleTransmit,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5 mr-1.5" }),
              "Transmit Order"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Transmission Log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "labintegration.transmission.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Timestamp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Test" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Lab" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: transmissions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 5,
            className: "text-center py-6 text-sm text-muted-foreground",
            "data-ocid": "labintegration.transmission.empty_state",
            children: "No transmissions yet."
          }
        ) }) : transmissions.map((tx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `labintegration.transmission.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-mono px-4 py-2.5 text-muted-foreground", children: tx.timestamp }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: tx.patient }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: tx.test }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: tx.lab }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: transmitStatusVariant[tx.status],
                  label: tx.status
                }
              ) })
            ]
          },
          tx.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "labintegration.results.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Incoming Results Feed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "HL7 and FHIR messages received from connected labs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            "data-ocid": "labintegration.results.primary_button",
            onClick: simulateIncoming,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 mr-1.5" }),
              "Simulate Incoming Result"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "labintegration.results.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Timestamp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Lab" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Test" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Result" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Msg Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Raw" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: incomingResults.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: 7,
            className: "text-center py-6 text-sm text-muted-foreground",
            "data-ocid": "labintegration.results.empty_state",
            children: "No incoming results yet."
          }
        ) }) : incomingResults.map((res, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `labintegration.results.row.${i + 1}`,
              className: "hover:bg-muted/30 even:bg-muted/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-mono px-4 py-2.5 text-muted-foreground", children: res.timestamp }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: res.lab }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: res.patient }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm px-4 py-2.5", children: res.test }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableCell,
                  {
                    className: "text-sm px-4 py-2.5 max-w-[200px] truncate",
                    title: res.result,
                    children: res.result
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs bg-muted px-1.5 py-0.5 rounded", children: res.messageType }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `labintegration.results.toggle.${i + 1}`,
                    className: "flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors",
                    onClick: () => toggleExpanded(res.id),
                    children: [
                      res.expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                      res.expanded ? "Hide" : "View"
                    ]
                  }
                ) })
              ]
            },
            res.id
          ),
          res.expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "px-4 pb-3 pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border bg-muted/40 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: [
              "Raw Message — ",
              res.messageType
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs font-mono text-foreground overflow-x-auto whitespace-pre-wrap break-all leading-relaxed", children: res.rawMessage })
          ] }) }) }, `raw-${res.id}`)
        ] })) })
      ] }) })
    ] })
  ] });
}
const mockUsers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    email: "s.chen@stmichaels.org",
    role: "Doctor",
    status: "active"
  },
  {
    id: 2,
    name: "James Nguyen",
    email: "j.nguyen@stmichaels.org",
    role: "Nurse",
    status: "active"
  },
  {
    id: 3,
    name: "Maria Santos",
    email: "m.santos@stmichaels.org",
    role: "Pharmacist",
    status: "active"
  },
  {
    id: 4,
    name: "Tom Bradley",
    email: "t.bradley@stmichaels.org",
    role: "Receptionist",
    status: "active"
  },
  {
    id: 5,
    name: "Linda Park",
    email: "l.park@stmichaels.org",
    role: "Billing",
    status: "active"
  },
  {
    id: 6,
    name: "Dr. Ahmed Hassan",
    email: "a.hassan@stmichaels.org",
    role: "Doctor",
    status: "active"
  },
  {
    id: 7,
    name: "System Admin",
    email: "admin@stmichaels.org",
    role: "Admin",
    status: "active"
  }
];
const roleVariant = {
  Doctor: "info",
  Nurse: "info",
  Pharmacist: "info",
  Receptionist: "warning",
  Billing: "warning",
  Admin: "danger",
  LabTech: "info",
  Radiologist: "info"
};
const allRoles = [
  "Doctor",
  "Nurse",
  "Pharmacist",
  "Receptionist",
  "Billing",
  "Admin",
  "LabTech",
  "Radiologist"
];
function UserManagement() {
  const { isDemoMode } = useDemoMode();
  const loading = false;
  const [users, setUsers] = reactExports.useState(
    () => isDemoMode ? DEMO_USERS.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status
    })) : mockUsers
  );
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    role: "Doctor",
    status: "active"
  });
  const [editingId, setEditingId] = reactExports.useState(null);
  const [editForm, setEditForm] = reactExports.useState({
    name: "",
    email: "",
    role: "Doctor",
    status: "active"
  });
  const handleAdd = () => {
    if (!form.name || !form.email) {
      ue.error("Name and email required");
      return;
    }
    setUsers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: form.name,
        email: form.email,
        role: form.role,
        status: form.status
      }
    ]);
    ue.success("User added");
    setShowForm(false);
    setForm({ name: "", email: "", role: "Doctor", status: "active" });
  };
  const startEdit = (user) => {
    setEditingId(user.id);
    setEditForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
  };
  const saveEdit = (userId) => {
    if (!editForm.name || !editForm.email) {
      ue.error("Name and email required");
      return;
    }
    setUsers(
      (prev) => prev.map((u) => u.id === userId ? { ...u, ...editForm } : u)
    );
    ue.success("User updated");
    setEditingId(null);
  };
  const toggleStatus = (userId) => {
    setUsers(
      (prev) => prev.map((u) => {
        if (u.id !== userId) return u;
        const next = u.status === "active" ? "inactive" : "active";
        ue.success(`${u.name} set to ${next}`);
        return { ...u, status: next };
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "users.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
        "data-ocid": "users.primary_button",
        onClick: () => setShowForm((v) => !v),
        children: [
          showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 mr-1.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
          "Add User"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border bg-card p-5",
        "data-ocid": "users.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "Add User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "users.name.input",
                  value: form.name,
                  onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                  className: "mt-1 h-8 text-sm",
                  placeholder: "Full name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "users.email.input",
                  type: "email",
                  value: form.email,
                  onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                  className: "mt-1 h-8 text-sm",
                  placeholder: "user@hospital.org"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.role,
                  onValueChange: (v) => setForm((p) => ({ ...p, role: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "users.role.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: allRoles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.status,
                  onValueChange: (v) => setForm((p) => ({ ...p, status: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "users.status.select",
                        className: "mt-1 h-8 text-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inactive", children: "Inactive" })
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "users.submit_button",
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                onClick: handleAdd,
                children: "Add User"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "users.cancel_button",
                variant: "outline",
                onClick: () => setShowForm(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "users.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
        loading,
        users.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `users.row.${i + 1}`,
              className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm px-4 py-2.5", children: user.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm px-4 py-2.5 text-muted-foreground", children: user.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: roleVariant[user.role],
                    label: user.role
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: user.status === "active" ? "success" : "neutral",
                    label: user.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      "data-ocid": `users.edit_button.${i + 1}`,
                      className: "h-7 px-2 text-xs gap-1",
                      onClick: () => editingId === user.id ? setEditingId(null) : startEdit(user),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3" }),
                        "Edit"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      "data-ocid": `users.delete_button.${i + 1}`,
                      className: "h-7 px-2 text-xs gap-1",
                      style: {
                        color: user.status === "active" ? "var(--destructive)" : "var(--success)"
                      },
                      onClick: () => toggleStatus(user.id),
                      children: user.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "w-3 h-3" }),
                        "Deactivate"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-3 h-3" }),
                        "Activate"
                      ] })
                    }
                  )
                ] }) })
              ]
            },
            user.id
          ),
          editingId === user.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableRow,
            {
              "data-ocid": `users.edit_button.${i + 1}`,
              className: "bg-muted/30 border-l-2 border-l-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { colSpan: 5, className: "px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "users.name.input",
                        value: editForm.name,
                        onChange: (e) => setEditForm((p) => ({
                          ...p,
                          name: e.target.value
                        })),
                        className: "mt-1 h-7 text-sm"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "users.email.input",
                        type: "email",
                        value: editForm.email,
                        onChange: (e) => setEditForm((p) => ({
                          ...p,
                          email: e.target.value
                        })),
                        className: "mt-1 h-7 text-sm"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Role" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: editForm.role,
                        onValueChange: (v) => setEditForm((p) => ({ ...p, role: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1 h-7 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: allRoles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: editForm.status,
                        onValueChange: (v) => setEditForm((p) => ({
                          ...p,
                          status: v
                        })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1 h-7 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inactive", children: "Inactive" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      "data-ocid": `users.save_button.${i + 1}`,
                      className: "h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90",
                      onClick: () => saveEdit(user.id),
                      children: "Save Changes"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      "data-ocid": `users.cancel_button.${i + 1}`,
                      className: "h-7 text-xs",
                      onClick: () => setEditingId(null),
                      children: "Cancel"
                    }
                  )
                ] })
              ] })
            },
            `edit-${user.id}`
          )
        ] }))
      ] })
    ] }) })
  ] });
}
const MILESTONES = [
  {
    id: 1,
    title: "Milestone 1 — Demo Ready",
    status: "COMPLETE",
    description: "Full clinical workflows for all 6 roles, 10 interconnected demo patients, Epic-style inline chart with 18+ tabs, MFA, session timeout, drug interaction engine, patient portal, and telehealth.",
    sprints: [
      "Sprint 1–7: Core EHR modules, patient chart, encounter workflow, pharmacy, billing, inpatient wards",
      "Sprint 8: Backend wiring, privacy controls, roadmap tab",
      "Sprint 9: Mental Health Outcomes, Caregivers tab, portal health risk score"
    ],
    items: [
      "45+ staff pages covering all major EHR modules",
      "13 patient portal pages",
      "Role-based navigation (6 roles)",
      "Full clinical loop: encounter → pharmacy → lab → imaging → billing",
      "38 backend endpoints across 14 entity types"
    ]
  },
  {
    id: 2,
    title: "Milestone 2 — Production Polish",
    status: "COMPLETE",
    description: "Systematic elimination of technical debt: design token consistency, typography scale, backend wiring for remaining modules, performance, accessibility, and code quality.",
    sprints: [
      "Sprint 10: Mental Health + Caregivers backend wiring, portal appointments",
      "Sprint 11: Final oklch/color token pass, sub-scale text pass (300+ instances)",
      "Sprint 12: Portal MyMessages backend, prescription refills, LabIntegration patient names",
      "Sprint 13: Portal patient identity fix, stable IDs, text/color final pass",
      "Sprint 14: Navigation fixed (mental-health + caregivers), fake delays removed, flicker fixed",
      "Sprint 15: Portal patient config centralized, card shadows, star hover fixed"
    ],
    items: [
      "All hardcoded oklch literals replaced with design tokens",
      "All sub-12px text raised to readable minimums",
      "All off-palette Tailwind color classes eliminated",
      "Navigation bugs fixed across all roles",
      "Backend wiring for Mental Health, Caregivers, Consents, ResultsInbox"
    ]
  },
  {
    id: 3,
    title: "Milestone 3 — Clinical Depth & UX Quality",
    status: "COMPLETE",
    description: "Performance optimisation, mega-file refactoring, onboarding improvements, and a fully functional multi-patient portal.",
    sprints: [
      "Sprint 16: AdvanceDirectives backend, patient list O(1) search, card shadows",
      "Sprint 17: Reporting.tsx split (2607→175 lines), Inpatient/Patients partial extraction",
      "Sprint 18: Inpatient.tsx (2801→90 lines), Patients.tsx (2666→180 lines), React.memo + context providers",
      "Sprint 19: Appointments.tsx (1862→290 lines), PatientChart.tsx (1447→210 lines), 11 sub-components",
      "Sprint 20: as-any casts removed, PrivacyControls cleaned, backend.d.ts typed",
      "Sprint 21: ConsentsTab backend wiring, registration validation, ResultsInbox types clean",
      "Sprint 22: Multi-patient portal (patient selector), sidebar flicker fixed, final color pass"
    ],
    items: [
      "All mega-files refactored (Inpatient 90 lines, Patients 180, Reporting 175)",
      "React.memo + context-provider pattern on all heavy lists",
      "Multi-patient portal with patient selector",
      "ConsentsTab, AdvanceDirectives fully persisted",
      "Registration form validation",
      "No known open bugs"
    ]
  },
  {
    id: 4,
    title: "Milestone 4 — Role Completeness & Workflow Depth",
    status: "IN_PROGRESS",
    description: "Add missing clinical roles (Lab Technician, Radiologist), onboarding for all role types, and workflow depth improvements for existing roles.",
    sprints: [
      "Sprint 23 (current): Lab Technician + Radiologist roles, portal nav grouping, roadmap update",
      "Sprint 24 (planned): Nurse Quick Actions pointing to MAR/Assessment; ClinicalReference accessible for Doctor role in sidebar",
      "Sprint 25 (planned): Role-specific dashboard widgets (LabTech pending orders stat, Radiologist imaging queue count)"
    ],
    items: [
      "Lab Technician role (sidebar: Lab Results, Orders, Results Inbox, Clinical Reference)",
      "Radiologist role (sidebar: Imaging, Orders, Results Inbox, Clinical Reference)",
      "Portal nav visual grouping (Primary / Health / Settings)",
      "Nurse Quick Actions for MAR and Nursing Assessment",
      "Doctor sidebar access to Clinical Reference"
    ]
  },
  {
    id: 5,
    title: "Milestone 5 — Platform Readiness",
    status: "PLANNED",
    description: "Multi-site support, FHIR R4 import/export, admin configuration UI, and enterprise security hardening for production deployment.",
    sprints: [
      "Sprint 26 (planned): Multi-site org structure, site selector in header",
      "Sprint 27 (done): PDMP lookup audit logging and inpatient admit/discharge/transfer persisted to backend",
      "Sprint 27 (done): PDMP lookup audit logging and inpatient admit/discharge/transfer persisted to backend",
      "Sprint 28 (done): VideoVisit wired to active patient, unread messages badge on sidebar, Doctor productivity stats card on Dashboard"
    ],
    items: [
      "Multi-site / multi-organization support",
      "FHIR R4 import/export with real external systems",
      "Admin-configurable module toggles",
      "Audit-ready compliance reporting (HIPAA, HL7)",
      "Performance optimization for 500+ concurrent users"
    ]
  }
];
function RoadmapTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-3xl", "data-ocid": "roadmap.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-foreground", children: "MedUnite Development Roadmap" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Current build progress and upcoming milestone plans." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: MILESTONES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "border border-border bg-card rounded-sm overflow-hidden",
        "data-ocid": `roadmap.milestone.item.${m.id}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 px-4 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 mt-0.5", children: m.status === "COMPLETE" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-success" }) : m.status === "IN_PROGRESS" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-warning" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-5 h-5 text-muted-foreground/40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: m.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatusBadge,
                {
                  variant: m.status === "COMPLETE" ? "success" : m.status === "IN_PROGRESS" ? "warning" : "neutral",
                  label: m.status === "COMPLETE" ? "Complete" : m.status === "IN_PROGRESS" ? "In Progress" : "Planned"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3", children: m.description }),
            m.sprints && m.sprints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5", children: "Sprints" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 pl-2 border-l border-border", children: m.sprints.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "li",
                {
                  className: "text-xs text-muted-foreground/80 pl-2",
                  children: s
                },
                s
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: m.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-xs text-muted-foreground",
                children: [
                  m.status === "COMPLETE" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-success flex-shrink-0 mt-0.5" }) : m.status === "IN_PROGRESS" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 flex-shrink-0 mt-0.5 border border-warning rounded-sm" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 flex-shrink-0 mt-0.5 border border-border rounded-sm opacity-40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
                ]
              },
              item
            )) })
          ] })
        ] })
      },
      m.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "Last updated:",
      " ",
      (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }),
      " · ",
      "Version 123 · Sprint 23 · Admin view only"
    ] })
  ] });
}
const SEED_BLOCKS = [
  {
    id: 1,
    provider: "Dr. Sarah Chen",
    day: "Monday",
    startTime: "08:00",
    endTime: "12:00",
    type: "Available"
  },
  {
    id: 2,
    provider: "Dr. Sarah Chen",
    day: "Monday",
    startTime: "13:00",
    endTime: "17:00",
    type: "Available"
  },
  {
    id: 3,
    provider: "Dr. Sarah Chen",
    day: "Wednesday",
    startTime: "09:00",
    endTime: "13:00",
    type: "Blocked"
  },
  {
    id: 4,
    provider: "Dr. Marcus Williams",
    day: "Tuesday",
    startTime: "08:00",
    endTime: "17:00",
    type: "Available"
  },
  {
    id: 5,
    provider: "Dr. Marcus Williams",
    day: "Thursday",
    startTime: "08:00",
    endTime: "17:00",
    type: "Available"
  },
  {
    id: 6,
    provider: "Dr. Amara Osei",
    day: "Monday",
    startTime: "10:00",
    endTime: "15:00",
    type: "Available"
  },
  {
    id: 7,
    provider: "Dr. Amara Osei",
    day: "Friday",
    startTime: "08:00",
    endTime: "12:00",
    type: "Blocked"
  },
  {
    id: 8,
    provider: "NP Jennifer Torres",
    day: "Wednesday",
    startTime: "08:00",
    endTime: "17:00",
    type: "Available"
  },
  {
    id: 9,
    provider: "NP Jennifer Torres",
    day: "Friday",
    startTime: "08:00",
    endTime: "17:00",
    type: "Available"
  }
];
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
function ProviderAvailabilityTab({ isAdmin }) {
  const [blocks, setBlocks] = reactExports.useState(SEED_BLOCKS);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    provider: "",
    day: "Monday",
    startTime: "08:00",
    endTime: "17:00",
    type: "Available"
  });
  const handleAdd = () => {
    if (!form.provider.trim()) return;
    const newBlock = {
      id: Date.now(),
      ...form
    };
    setBlocks((prev) => [...prev, newBlock]);
    setForm({
      provider: "",
      day: "Monday",
      startTime: "08:00",
      endTime: "17:00",
      type: "Available"
    });
    setShowAddForm(false);
  };
  const handleRemove = (id) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "settings.provider_availability.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Provider Schedule Blocks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Manage when providers are available or blocked for appointments." })
      ] }),
      isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          "data-ocid": "settings.availability.open_modal_button",
          onClick: () => setShowAddForm((v) => !v),
          className: "h-8 text-xs gap-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5" }),
            "Add Block"
          ]
        }
      )
    ] }),
    isAdmin && showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-muted/40 border border-border p-4 space-y-3",
        "data-ocid": "settings.availability.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "New Schedule Block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 sm:col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Provider Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "settings.availability.input",
                  value: form.provider,
                  onChange: (e) => setForm((f) => ({ ...f, provider: e.target.value })),
                  placeholder: "Dr. Name",
                  className: "h-8 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Day" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  "data-ocid": "settings.availability.select",
                  value: form.day,
                  onChange: (e) => setForm((f) => ({ ...f, day: e.target.value })),
                  className: "w-full h-8 text-sm border border-input bg-background px-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-ring",
                  children: DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d, children: d }, d))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: form.type,
                  onChange: (e) => setForm((f) => ({
                    ...f,
                    type: e.target.value
                  })),
                  className: "w-full h-8 text-sm border border-input bg-background px-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-ring",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Available", children: "Available" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Blocked", children: "Blocked" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Start Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "time",
                  value: form.startTime,
                  onChange: (e) => setForm((f) => ({ ...f, startTime: e.target.value })),
                  className: "h-8 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "End Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "time",
                  value: form.endTime,
                  onChange: (e) => setForm((f) => ({ ...f, endTime: e.target.value })),
                  className: "h-8 text-sm"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "settings.availability.submit_button",
                onClick: handleAdd,
                className: "h-8 text-xs",
                children: "Add Block"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                "data-ocid": "settings.availability.cancel_button",
                onClick: () => setShowAddForm(false),
                className: "h-8 text-xs",
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "settings.availability.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
        "Provider",
        "Day",
        "Start",
        "End",
        "Type",
        ...isAdmin ? ["Actions"] : []
      ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableHead,
        {
          className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
          children: h
        },
        h
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
        blocks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: isAdmin ? 6 : 5,
            className: "text-center text-sm text-muted-foreground py-8",
            "data-ocid": "settings.availability.empty_state",
            children: "No schedule blocks configured."
          }
        ) }),
        blocks.map((block, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `settings.availability.row.${i + 1}`,
            className: "hover:bg-muted/30 even:bg-muted/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-sm font-medium", children: block.provider }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 text-sm text-muted-foreground", children: block.day }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-mono text-xs text-muted-foreground", children: block.startTime }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5 font-mono text-xs text-muted-foreground", children: block.endTime }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-semibold ${block.type === "Available" ? "bg-success/10 text-success border border-success/30" : "bg-destructive/10 text-destructive border border-destructive/30"}`,
                  children: block.type
                }
              ) }),
              isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `settings.availability.delete_button.${i + 1}`,
                  onClick: () => handleRemove(block.id),
                  className: "text-xs text-muted-foreground hover:text-destructive transition-colors",
                  children: "Remove"
                }
              ) })
            ]
          },
          block.id
        ))
      ] })
    ] }) })
  ] });
}
function FhirApiExplorer() {
  const [copied, setCopied] = reactExports.useState(null);
  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    });
  };
  const endpoints = [
    {
      method: "GET",
      url: "/fhir/r4/Patient",
      description: "Retrieve all patient records in FHIR R4 Patient resource format.",
      sample: JSON.stringify(
        {
          resourceType: "Bundle",
          type: "searchset",
          total: 2,
          entry: [
            {
              resource: {
                resourceType: "Patient",
                id: "patient-001",
                identifier: [{ system: "urn:medunite:mrn", value: "MRN-001" }],
                name: [{ family: "Chen", given: ["Margaret"] }],
                birthDate: "1968-03-15",
                gender: "female",
                telecom: [{ system: "phone", value: "(555) 234-5678" }]
              }
            },
            {
              resource: {
                resourceType: "Patient",
                id: "patient-002",
                identifier: [{ system: "urn:medunite:mrn", value: "MRN-002" }],
                name: [{ family: "Okonkwo", given: ["Robert"] }],
                birthDate: "1954-07-22",
                gender: "male"
              }
            }
          ]
        },
        null,
        2
      )
    },
    {
      method: "GET",
      url: "/fhir/r4/Encounter",
      description: "Retrieve patient encounters (visits, admissions) as FHIR R4 Encounter resources.",
      sample: JSON.stringify(
        {
          resourceType: "Bundle",
          type: "searchset",
          entry: [
            {
              resource: {
                resourceType: "Encounter",
                id: "encounter-001",
                status: "finished",
                class: { code: "AMB", display: "Ambulatory" },
                subject: {
                  reference: "Patient/patient-001",
                  display: "Margaret Chen"
                },
                period: {
                  start: "2025-03-10T09:00:00Z",
                  end: "2025-03-10T09:45:00Z"
                },
                reasonCode: [
                  {
                    coding: [
                      {
                        system: "http://hl7.org/fhir/sid/icd-10",
                        code: "E11.9",
                        display: "Type 2 diabetes mellitus"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        null,
        2
      )
    },
    {
      method: "GET",
      url: "/fhir/r4/Observation",
      description: "Retrieve clinical observations including vitals, lab results, and assessments.",
      sample: JSON.stringify(
        {
          resourceType: "Bundle",
          type: "searchset",
          entry: [
            {
              resource: {
                resourceType: "Observation",
                id: "obs-001",
                status: "final",
                code: {
                  coding: [
                    {
                      system: "http://loinc.org",
                      code: "4548-4",
                      display: "HbA1c"
                    }
                  ]
                },
                subject: { reference: "Patient/patient-001" },
                valueQuantity: {
                  value: 8.2,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                },
                referenceRange: [{ low: { value: 0 }, high: { value: 5.7 } }],
                interpretation: [{ coding: [{ code: "H", display: "High" }] }]
              }
            }
          ]
        },
        null,
        2
      )
    },
    {
      method: "GET",
      url: "/fhir/r4/MedicationRequest",
      description: "Retrieve active and historical medication orders and prescriptions.",
      sample: JSON.stringify(
        {
          resourceType: "Bundle",
          type: "searchset",
          entry: [
            {
              resource: {
                resourceType: "MedicationRequest",
                id: "medrx-001",
                status: "active",
                intent: "order",
                medicationCodeableConcept: {
                  coding: [
                    {
                      system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                      code: "860975",
                      display: "Metformin 500 mg"
                    }
                  ]
                },
                subject: { reference: "Patient/patient-001" },
                dosageInstruction: [
                  {
                    text: "500mg twice daily with meals",
                    timing: {
                      repeat: { frequency: 2, period: 1, periodUnit: "d" }
                    }
                  }
                ]
              }
            }
          ]
        },
        null,
        2
      )
    },
    {
      method: "GET",
      url: "/fhir/r4/DiagnosticReport",
      description: "Retrieve diagnostic reports including lab panels, imaging reports, and pathology.",
      sample: JSON.stringify(
        {
          resourceType: "Bundle",
          type: "searchset",
          entry: [
            {
              resource: {
                resourceType: "DiagnosticReport",
                id: "dr-001",
                status: "final",
                category: [
                  {
                    coding: [
                      {
                        system: "http://terminology.hl7.org/CodeSystem/v2-0074",
                        code: "LAB"
                      }
                    ]
                  }
                ],
                code: { text: "Complete Metabolic Panel" },
                subject: { reference: "Patient/patient-001" },
                effectiveDateTime: "2025-03-10T08:00:00Z",
                result: [
                  { reference: "Observation/obs-001", display: "HbA1c" },
                  { reference: "Observation/obs-002", display: "Creatinine" }
                ]
              }
            }
          ]
        },
        null,
        2
      )
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "settings.fhir_api.panel", className: "space-y-4 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-md bg-muted/40 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: "FHIR R4 API Reference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Simulated FHIR R4 endpoints for EHR interoperability. Production deployment would expose these via a standards-compliant FHIR server." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: "text-xs font-semibold shrink-0 border-primary/40 text-primary",
          children: "FHIR R4"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: endpoints.map((ep) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `settings.fhir_api.${ep.url.replace(/\//g, "").replace(/\./g, "_").toLowerCase()}.card`,
        className: "border border-border rounded-md overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 px-4 py-3 bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-success/10 text-success flex-shrink-0 mt-0.5", children: ep.method }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs font-mono font-semibold text-foreground", children: ep.url }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: ep.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                "data-ocid": `settings.fhir_api.${ep.url.replace(/\//g, "").toLowerCase()}.button`,
                className: "h-7 text-xs flex-shrink-0 mt-0.5",
                onClick: () => copyToClipboard(ep.sample, ep.url),
                "aria-label": "Copy sample response",
                children: copied === ep.url ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-success" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "Copied" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" }),
                  "Copy"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-muted px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2", children: "Sample Response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs font-mono text-foreground overflow-x-auto leading-relaxed max-h-48 overflow-y-auto scrollbar-none", children: ep.sample })
          ] })
        ]
      },
      ep.url
    )) })
  ] });
}
const NOTIF_STORAGE_KEY = "medunite_notif_prefs";
function NotificationPreferences() {
  const defaultPrefs = {
    criticalLabs: true,
    patientMessages: true,
    prescriptionReady: true,
    appointmentReminders: false
  };
  const loadPrefs = () => {
    try {
      const stored = localStorage.getItem(NOTIF_STORAGE_KEY);
      if (stored) return { ...defaultPrefs, ...JSON.parse(stored) };
    } catch {
    }
    return defaultPrefs;
  };
  const [prefs, setPrefs] = reactExports.useState(loadPrefs);
  const toggle = (key) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const savePrefs = () => {
    localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify(prefs));
    ue.success("Notification preferences saved");
  };
  const items = [
    {
      key: "criticalLabs",
      label: "Critical Lab Results",
      description: "Receive alerts when a critical lab result requires immediate attention.",
      ocid: "settings.notif.critical_labs.switch"
    },
    {
      key: "patientMessages",
      label: "New Patient Messages",
      description: "Be notified when a patient sends you a secure message.",
      ocid: "settings.notif.patient_messages.switch"
    },
    {
      key: "prescriptionReady",
      label: "Prescription Ready",
      description: "Alert when a patient prescription has been dispensed by pharmacy.",
      ocid: "settings.notif.prescription_ready.switch"
    },
    {
      key: "appointmentReminders",
      label: "Appointment Reminders",
      description: "Receive a reminder 24 hours before each scheduled appointment.",
      ocid: "settings.notif.appointment_reminders.switch"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-xl space-y-4",
      "data-ocid": "settings.notifications.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Choose which notifications you would like to receive." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border border-border rounded-sm", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between px-4 py-4 gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: item.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  "data-ocid": item.ocid,
                  checked: prefs[item.key],
                  onCheckedChange: () => toggle(item.key),
                  "aria-label": item.label
                }
              )
            ]
          },
          item.key
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "settings.notif.save_button",
            onClick: savePrefs,
            size: "sm",
            children: "Save Preferences"
          }
        )
      ]
    }
  );
}
function Settings({ role }) {
  var _a2;
  const isAdmin = role === "Admin";
  const isDoctor = role === "Doctor";
  const isNurse = role === "Nurse";
  const isClinical = isAdmin || isDoctor || isNurse;
  const showSmartPhrases = isClinical;
  const showPdmp = isClinical;
  const showProviderAvailability = isClinical;
  const showLabIntegration = isAdmin;
  const showUserManagement = isAdmin;
  const tabs = [
    ...showSmartPhrases ? [{ value: "smart-phrases", label: "SmartPhrases" }] : [],
    ...showPdmp ? [{ value: "pdmp", label: "PDMP" }] : [],
    ...showProviderAvailability ? [{ value: "provider-availability", label: "Provider Availability" }] : [],
    ...showLabIntegration ? [{ value: "lab-integration", label: "Lab Integration" }] : [],
    ...showUserManagement ? [{ value: "user-management", label: "User Management" }] : [],
    { value: "fhir-api", label: "FHIR API" },
    { value: "notifications", label: "Notifications" },
    ...isAdmin ? [{ value: "roadmap", label: "Roadmap" }] : []
  ];
  const defaultTab = ((_a2 = tabs[0]) == null ? void 0 : _a2.value) ?? "smart-phrases";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", "data-ocid": "settings.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: defaultTab, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsList,
      {
        className: "w-full justify-start rounded-none border-b border-border bg-transparent h-10 gap-0 px-0",
        "data-ocid": "settings.tabs",
        children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: tab.value,
            "data-ocid": `settings.${tab.value}.tab`,
            className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-xs font-medium px-4 h-10 text-muted-foreground hover:text-foreground transition-colors",
            children: tab.label
          },
          tab.value
        ))
      }
    ),
    showSmartPhrases && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "smart-phrases", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartPhrases, {}) }),
    showPdmp && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pdmp", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PDMP, {}) }),
    showProviderAvailability && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "provider-availability", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProviderAvailabilityTab, { isAdmin }) }),
    showLabIntegration && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "lab-integration", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LabIntegration, {}) }),
    showUserManagement && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "user-management", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserManagement, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "fhir-api", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FhirApiExplorer, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notifications", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationPreferences, {}) }),
    isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "roadmap", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoadmapTab, {}) })
  ] }) });
}
export {
  Settings as default
};
