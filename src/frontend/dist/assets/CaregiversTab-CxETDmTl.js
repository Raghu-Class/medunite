import { f as useActor, r as reactExports, a2 as DEMO_CAREGIVERS, j as jsxRuntimeExports, B as Button, X } from "./index-4utdZC3E.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { C as Checkbox } from "./checkbox-B8IMGtpd.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
import { U as UserCheck } from "./user-check-Ck2SZDxb.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { P as Phone } from "./phone-C1YjZqVr.js";
import { M as Mail } from "./mail-Cxzi8IJt.js";
import "./index-BSY8sZ87.js";
import "./index-IXOTxK3N.js";
import "./chevron-up-BvGEbEf0.js";
const RELATIONSHIPS = [
  "Spouse",
  "Parent",
  "Child",
  "Sibling",
  "Friend",
  "Legal Guardian",
  "Healthcare Proxy",
  "Other"
];
const PERMISSION_LABELS = [
  { key: "medicalDecisionMaker", label: "Medical Decision Maker" },
  { key: "accessToRecords", label: "Access to Records" },
  { key: "receiveCommunications", label: "Receive Communications" },
  { key: "emergencyContact", label: "Emergency Contact" }
];
function CaregiversTab({
  activePatientId
}) {
  const { actor, isFetching } = useActor();
  const patientId = activePatientId ?? 1n;
  const [backendCaregivers, setBackendCaregivers] = reactExports.useState([]);
  const [isLoadingBackend, setIsLoadingBackend] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    relationship: "Spouse",
    phone: "",
    email: "",
    permissions: {
      medicalDecisionMaker: false,
      accessToRecords: true,
      receiveCommunications: true,
      emergencyContact: false
    }
  });
  const seedCaregivers = DEMO_CAREGIVERS.filter(
    (c) => c.patientId === patientId
  );
  const allCaregivers = [
    ...seedCaregivers,
    ...backendCaregivers.filter((c) => c.patientId === patientId)
  ];
  reactExports.useEffect(() => {
    if (isFetching || !actor) return;
    const a = actor;
    const pid = patientId;
    a.listCaregivers().then((results) => {
      const mapped = results.filter((c) => c.patientId === pid).map((c) => {
        let permissions = {
          medicalDecisionMaker: false,
          accessToRecords: true,
          receiveCommunications: true,
          emergencyContact: false
        };
        try {
          permissions = JSON.parse(c.permissionsJson);
        } catch {
        }
        return {
          id: `cg-backend-${String(c.id)}`,
          patientId: c.patientId,
          name: c.name,
          relationship: c.relationship,
          phone: c.phone,
          email: c.email,
          permissions,
          _backendId: c.id
        };
      });
      setBackendCaregivers(mapped);
    }).catch(() => {
    }).finally(() => setIsLoadingBackend(false));
  }, [actor, isFetching, patientId]);
  function loadFromBackend() {
    if (!actor) return;
    actor.listCaregivers().then((results) => {
      const mapped = results.filter((c) => c.patientId === patientId).map((c) => {
        let permissions = {
          medicalDecisionMaker: false,
          accessToRecords: true,
          receiveCommunications: true,
          emergencyContact: false
        };
        try {
          permissions = JSON.parse(c.permissionsJson);
        } catch {
        }
        return {
          id: `cg-backend-${String(c.id)}`,
          patientId: c.patientId,
          name: c.name,
          relationship: c.relationship,
          phone: c.phone,
          email: c.email,
          permissions,
          _backendId: c.id
        };
      });
      setBackendCaregivers(mapped);
    }).catch(() => {
    }).finally(() => setIsLoadingBackend(false));
  }
  async function handleAdd() {
    if (!form.name.trim()) return;
    if (actor) {
      try {
        await actor.addCaregiver({
          id: 0n,
          patientId,
          name: form.name,
          relationship: form.relationship,
          phone: form.phone,
          email: form.email,
          permissionsJson: JSON.stringify(form.permissions)
        });
        loadFromBackend();
      } catch {
        setBackendCaregivers((prev) => [
          ...prev,
          {
            id: `cg-new-${Date.now()}`,
            patientId,
            ...form,
            _backendId: 0n
          }
        ]);
      }
    } else {
      setBackendCaregivers((prev) => [
        ...prev,
        {
          id: `cg-new-${Date.now()}`,
          patientId,
          ...form,
          _backendId: 0n
        }
      ]);
    }
    setForm({
      name: "",
      relationship: "Spouse",
      phone: "",
      email: "",
      permissions: {
        medicalDecisionMaker: false,
        accessToRecords: true,
        receiveCommunications: true,
        emergencyContact: false
      }
    });
    setShowForm(false);
  }
  function handleRemove(backendId) {
    if (!actor) return;
    actor.removeCaregiver(backendId).then(() => {
      setBackendCaregivers(
        (prev) => prev.filter((c) => c._backendId !== backendId)
      );
    }).catch(() => {
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", "data-ocid": "caregivers.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Caregivers & Family" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "ml-auto",
          onClick: () => setShowForm((v) => !v),
          "data-ocid": "caregivers.add_caregiver.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 mr-1" }),
            showForm ? "Cancel" : "Add Caregiver"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "caregivers.add_caregiver.panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "New Caregiver" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.name,
                onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                placeholder: "Jane Doe",
                "data-ocid": "caregivers.name.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Relationship" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.relationship,
                onValueChange: (v) => setForm((f) => ({ ...f, relationship: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "caregivers.relationship.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: RELATIONSHIPS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.phone,
                onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
                placeholder: "(555) 000-0000",
                "data-ocid": "caregivers.phone.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.email,
                onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                placeholder: "jane@example.com",
                "data-ocid": "caregivers.email.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Permissions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: PERMISSION_LABELS.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                id: key,
                checked: form.permissions[key],
                onCheckedChange: (v) => setForm((f) => ({
                  ...f,
                  permissions: { ...f.permissions, [key]: !!v }
                })),
                "data-ocid": `caregivers.permission_${key}.checkbox`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: key, className: "text-xs cursor-pointer", children: label })
          ] }, key)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleAdd,
            size: "sm",
            "data-ocid": "caregivers.save.button",
            children: "Add Caregiver"
          }
        )
      ] })
    ] }),
    isLoadingBackend ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "caregivers.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" })
    ] }) : allCaregivers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "py-10 text-center text-muted-foreground text-sm",
        "data-ocid": "caregivers.empty_state",
        children: "No caregivers on file for this patient."
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "caregivers.list", children: allCaregivers.map((cg, idx) => {
      const backendCg = cg;
      const isBackend = backendCg._backendId !== void 0 && backendCg._backendId !== 0n;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-ocid": `caregivers.item.${idx + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: cg.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded", children: cg.relationship })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
            cg.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
              cg.phone
            ] }),
            cg.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" }),
              cg.email
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1", children: PERMISSION_LABELS.filter(
            ({ key }) => cg.permissions[key]
          ).map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs bg-primary/10 text-primary px-2 py-0.5 rounded",
              children: label
            },
            key
          )) })
        ] }),
        isBackend && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => handleRemove(backendCg._backendId),
            className: "text-muted-foreground hover:text-destructive",
            "data-ocid": `caregivers.delete_button.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }) }) }, cg.id);
    }) })
  ] });
}
export {
  CaregiversTab as default
};
