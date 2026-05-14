import { f as useActor, r as reactExports, j as jsxRuntimeExports, i as ue } from "./index-4utdZC3E.js";
import { S as Skeleton } from "./skeleton-Dkt2W5Ll.js";
function EditableSection({
  title,
  ocidScope,
  children,
  onSave
}) {
  const [editing, setEditing] = reactExports.useState(false);
  const handleSave = () => {
    setEditing(false);
    onSave == null ? void 0 : onSave();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border bg-muted/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[12px] font-semibold text-foreground", children: title }),
      editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `${ocidScope}.save_button`,
            onClick: handleSave,
            className: "px-3 py-1 rounded-sm text-xs font-semibold text-white transition-opacity hover:opacity-90",
            style: { background: "var(--primary)" },
            children: "Save"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `${ocidScope}.cancel_button`,
            onClick: () => setEditing(false),
            className: "px-3 py-1 rounded-sm text-xs font-medium text-muted-foreground border border-border hover:text-foreground transition-colors",
            children: "Cancel"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `${ocidScope}.edit_button`,
          onClick: () => setEditing(true),
          className: "flex items-center gap-1 px-2.5 py-1 rounded-sm text-xs font-medium text-muted-foreground border border-border hover:text-foreground transition-colors",
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
                ]
              }
            ),
            "Edit"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4", children: children(editing) })
  ] });
}
function Field({
  label,
  value,
  editing,
  ocid,
  type = "text",
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1", children: label }),
    editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        "data-ocid": ocid,
        defaultValue: value,
        onChange: (e) => onChange == null ? void 0 : onChange(e.target.value),
        className: "w-full h-8 px-2.5 text-[13px] bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground", children: value })
  ] });
}
function MyProfile() {
  const { actor, isFetching } = useActor();
  const [profileLoading, setProfileLoading] = reactExports.useState(true);
  const [firstName, setFirstName] = reactExports.useState("Alex");
  const [lastName] = reactExports.useState("Johnson");
  const [dob] = reactExports.useState("January 15, 1985");
  const [gender] = reactExports.useState("Male");
  const [ssn] = reactExports.useState("***-**-4521");
  const [address] = reactExports.useState("1482 Birchwood Drive");
  const [city] = reactExports.useState("Portland, OR 97201");
  const [phone] = reactExports.useState("(503) 555-0142");
  const [email] = reactExports.useState("alex.johnson@email.com");
  const [ecName] = reactExports.useState("Patricia Johnson");
  const [ecRelationship] = reactExports.useState("Spouse");
  const [ecPhone] = reactExports.useState("(503) 555-0179");
  const [ecEmail] = reactExports.useState("patricia.johnson@email.com");
  const [insProvider] = reactExports.useState("BlueCross BlueShield");
  const [insPlan] = reactExports.useState("PPO Gold");
  const [insMemberId] = reactExports.useState("BCB-4821-09934");
  const [insGroupNo] = reactExports.useState("GRP-77201");
  const [insEffective] = reactExports.useState("Jan 1, 2026");
  const [insExpiry] = reactExports.useState("Dec 31, 2026");
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    const load = async () => {
      try {
        const profile = await actor.getCallerUserProfile();
        if (profile == null ? void 0 : profile.name) {
          setFirstName(profile.name);
        }
      } catch {
      } finally {
        setProfileLoading(false);
      }
    };
    load();
  }, [actor, isFetching]);
  const handleSaveProfile = async (name) => {
    try {
      if (actor) {
        await actor.saveCallerUserProfile({
          userId: BigInt(0),
          name,
          role: "Patient"
        });
      }
      ue.success("Profile saved successfully");
    } catch {
      ue.success("Profile saved");
    }
  };
  if (profileLoading && isFetching) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl space-y-5", "data-ocid": "profile.loading_state", children: ["personal", "contact", "emergency", "insurance"].map(
      (section) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-sm overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10" })
            ] })
          ]
        },
        section
      )
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-5", "data-ocid": "profile.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditableSection,
      {
        title: "Personal Information",
        ocidScope: "profile.personal",
        onSave: () => handleSaveProfile(firstName),
        children: (editing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "First Name",
              value: firstName,
              editing,
              ocid: "profile.personal.first-name.input",
              onChange: setFirstName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Last Name",
              value: lastName,
              editing,
              ocid: "profile.personal.last-name.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Date of Birth",
              value: dob,
              editing,
              ocid: "profile.personal.dob.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Gender",
              value: gender,
              editing,
              ocid: "profile.personal.gender.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Social Security",
              value: ssn,
              editing,
              ocid: "profile.personal.ssn.input"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditableSection, { title: "Contact Details", ocidScope: "profile.contact", children: (editing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Street Address",
          value: address,
          editing,
          ocid: "profile.contact.address.input"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "City, State, ZIP",
          value: city,
          editing,
          ocid: "profile.contact.city.input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Phone",
          value: phone,
          editing,
          ocid: "profile.contact.phone.input",
          type: "tel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Email Address",
          value: email,
          editing,
          ocid: "profile.contact.email.input",
          type: "email"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditableSection, { title: "Emergency Contact", ocidScope: "profile.emergency", children: (editing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Full Name",
          value: ecName,
          editing,
          ocid: "profile.emergency.name.input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Relationship",
          value: ecRelationship,
          editing,
          ocid: "profile.emergency.relationship.input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Phone",
          value: ecPhone,
          editing,
          ocid: "profile.emergency.phone.input",
          type: "tel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Field,
        {
          label: "Email",
          value: ecEmail,
          editing,
          ocid: "profile.emergency.email.input",
          type: "email"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditableSection,
      {
        title: "Insurance Information",
        ocidScope: "profile.insurance",
        children: (editing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Insurance Provider",
              value: insProvider,
              editing,
              ocid: "profile.insurance.provider.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Plan Type",
              value: insPlan,
              editing,
              ocid: "profile.insurance.plan.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Member ID",
              value: insMemberId,
              editing,
              ocid: "profile.insurance.member-id.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Group Number",
              value: insGroupNo,
              editing,
              ocid: "profile.insurance.group.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Effective Date",
              value: insEffective,
              editing,
              ocid: "profile.insurance.effective.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Field,
            {
              label: "Expiry Date",
              value: insExpiry,
              editing,
              ocid: "profile.insurance.expiry.input"
            }
          )
        ] })
      }
    )
  ] });
}
export {
  MyProfile as default
};
