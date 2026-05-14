import { j as jsxRuntimeExports, J as User, n as DEMO_PATIENTS, ai as Calendar } from "./index-4utdZC3E.js";
function formatDOB(dob) {
  const d = /* @__PURE__ */ new Date(`${dob}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function getInitials(name) {
  return name.split(" ").map((n) => n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function PortalPatientSelector({ onSelect }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "h-14 flex-shrink-0 flex items-center px-6 gap-3 bg-sidebar border-b border-sidebar-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/medunite-logo-transparent.dim_48x48.png",
          alt: "MedUnite",
          className: "w-full h-full object-contain"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold tracking-tight leading-none text-sidebar-foreground", children: "MedUnite" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-0.5 tracking-wider text-white/50", children: "Patient Portal" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex flex-col items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-7 h-7 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground tracking-tight", children: "Select Your Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Choose a patient to access the portal experience." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
          "data-ocid": "portal_selector.list",
          children: DEMO_PATIENTS.map((patient, idx) => {
            const initials = getInitials(patient.name);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `portal_selector.item.${idx + 1}`,
                onClick: () => onSelect({
                  id: patient.id,
                  name: patient.name,
                  mrn: patient.mrn,
                  dateOfBirth: patient.dateOfBirth
                }),
                className: "group text-left flex items-start gap-3 p-4 rounded border border-border bg-card shadow-sm transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary text-sm font-bold", children: initials }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors", children: patient.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 font-mono", children: patient.mrn }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 text-muted-foreground flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatDOB(patient.dateOfBirth) })
                    ] })
                  ] })
                ]
              },
              String(patient.id)
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-center text-xs text-muted-foreground", children: "Demo mode — select any patient to preview their portal experience." })
    ] }) })
  ] });
}
export {
  PortalPatientSelector as default
};
