import { r as reactExports, aI as DEMO_PROBLEMS, j as jsxRuntimeExports, B as Button, i as ue } from "./index-4utdZC3E.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import { P as Plus } from "./plus-CoKHV7of.js";
import { C as CircleCheckBig } from "./circle-check-big-BlGxcqiI.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
function ProblemList({
  activePatientId,
  activePatientName,
  onClearFilter
}) {
  const [problems, setProblems] = reactExports.useState(DEMO_PROBLEMS);
  const [expanded, setExpanded] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    icd10: "",
    dateOnset: "",
    status: "active",
    severity: "Moderate"
  });
  const displayedProblems = activePatientId ? problems.filter((p) => p.patientId === activePatientId) : problems;
  const handleAddProblem = () => {
    if (!form.name.trim()) {
      ue.error("Problem name is required");
      return;
    }
    const newProblem = {
      id: Date.now(),
      patientId: activePatientId ?? 1n,
      ...form
    };
    setProblems((prev) => [newProblem, ...prev]);
    setForm({
      name: "",
      icd10: "",
      dateOnset: "",
      status: "active",
      severity: "Moderate"
    });
    setExpanded(false);
    ue.success(`Problem "${form.name}" added`);
  };
  const handleResolve = (id) => {
    setProblems(
      (prev) => prev.map(
        (p) => p.id === id ? { ...p, status: "resolved", resolved: true } : p
      )
    );
    ue.success("Problem marked as resolved");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", "data-ocid": "problem_list.page", children: [
    activePatientId && activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientFilterBar,
      {
        patientName: activePatientName,
        onClear: onClearFilter ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Problem List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            "data-ocid": "problem_list.open_modal_button",
            onClick: () => setExpanded((v) => !v),
            className: "gap-1.5",
            children: [
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              expanded ? "Cancel" : "Add Problem"
            ]
          }
        )
      ] }) }),
      expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "prob-name", className: "text-xs", children: "Problem Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "prob-name",
                "data-ocid": "problem_list.input",
                placeholder: "e.g. Type 2 Diabetes",
                value: form.name,
                onChange: (e) => setForm((f) => ({ ...f, name: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "prob-icd", className: "text-xs", children: "ICD-10 Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "prob-icd",
                "data-ocid": "problem_list.icd10.input",
                placeholder: "e.g. E11.9",
                value: form.icd10,
                onChange: (e) => setForm((f) => ({ ...f, icd10: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "prob-onset", className: "text-xs", children: "Date of Onset" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "prob-onset",
                type: "date",
                "data-ocid": "problem_list.date.input",
                value: form.dateOnset,
                onChange: (e) => setForm((f) => ({ ...f, dateOnset: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.status,
                onValueChange: (v) => setForm((f) => ({ ...f, status: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "problem_list.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "chronic", children: "Chronic" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resolved", children: "Resolved" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Severity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.severity,
                onValueChange: (v) => setForm((f) => ({ ...f, severity: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "problem_list.severity.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Mild", children: "Mild" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Moderate", children: "Moderate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Severe", children: "Severe" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            "data-ocid": "problem_list.submit_button",
            onClick: handleAddProblem,
            children: "Save Problem"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          !activePatientId && /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-36", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Problem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-24", children: "ICD-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-28", children: "Date Onset" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-28", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-24", children: "Severity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-28" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: displayedProblems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { "data-ocid": "problem_list.empty_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            colSpan: activePatientId ? 6 : 7,
            className: "text-center text-muted-foreground py-8 text-sm",
            children: "No problems recorded"
          }
        ) }) : displayedProblems.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `problem_list.item.${idx + 1}`,
            className: p.status === "resolved" ? "opacity-50" : "",
            children: [
              !activePatientId && /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs text-muted-foreground", children: [
                "#",
                String(p.patientId)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-mono text-muted-foreground", children: p.icd10 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: p.dateOnset || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-sm border ${p.status === "active" ? "bg-primary/10 text-primary border-primary/20" : p.status === "chronic" ? "bg-warning/10 text-warning border-warning/20" : "bg-muted text-muted-foreground border-border"}`,
                  children: p.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: p.severity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: p.status !== "resolved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  "data-ocid": `problem_list.resolve_button.${idx + 1}`,
                  onClick: () => handleResolve(p.id),
                  className: "h-7 gap-1 text-xs",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" }),
                    "Resolve"
                  ]
                }
              ) })
            ]
          },
          p.id
        )) })
      ] }) })
    ] })
  ] });
}
export {
  ProblemList as default
};
