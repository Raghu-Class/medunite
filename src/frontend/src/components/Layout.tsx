import PatientChartNav from "@/components/PatientChartNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRightLeft,
  ArrowUpRight,
  BarChart2,
  BedDouble,
  Bell,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileCheck,
  FlaskConical,
  Inbox,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Receipt,
  Scan,
  Settings,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";
import type { Page, Role } from "../App";
import { DEMO_PATIENTS } from "../demoData";

import { useActor } from "@/hooks/useActor";
import CommandPalette from "./CommandPalette";
import DemoBanner from "./DemoBanner";
import GuidedDemoTour from "./GuidedDemoTour";
import NotificationDropdown from "./NotificationDropdown";
import SessionWarningBanner from "./SessionWarningBanner";

interface NavItem {
  id: Page;
  label: string;
  icon: React.ElementType;
}

interface NavGroup {
  label: string | null;
  items: NavItem[];
}

type RoleNavConfig = NavGroup[];

// Icon references
const ICONS = {
  dashboard: LayoutDashboard,
  patients: Users,
  appointments: CalendarDays,
  inpatient: BedDouble,
  labs: FlaskConical,
  imaging: Scan,
  pharmacy: Syringe,
  referrals: ArrowUpRight,
  messages: MessageSquare,
  "results-inbox": Inbox,
  reporting: BarChart2,
  billing: Receipt,
  claims: FileCheck,
  "prior-auth": ShieldCheck,
  audit: ShieldCheck,
  settings: Settings,
  bell: Bell,
  mar: ClipboardList,
  "nursing-assessment": Stethoscope,
  "nursing-care-plans": ClipboardList,
  "shift-handoff": ArrowRightLeft,
  "io-tracking": Activity,
  "mental-health": Brain,
  "clinical-reference": BookOpen,
} as const;

const roleNavConfig: Record<Role, RoleNavConfig> = {
  Doctor: [
    {
      label: null,
      items: [{ id: "dashboard", label: "Dashboard", icon: ICONS.dashboard }],
    },
    {
      label: "Clinical",
      items: [
        { id: "patients", label: "Patients", icon: ICONS.patients },
        { id: "appointments", label: "Appointments", icon: ICONS.appointments },
        { id: "inpatient", label: "Inpatient", icon: ICONS.inpatient },
        { id: "pdmp", label: "PDMP", icon: ICONS.audit },
        {
          id: "mental-health",
          label: "Mental Health",
          icon: ICONS["mental-health"],
        },
      ],
    },
    {
      label: "Worklists",
      items: [
        { id: "labs", label: "Lab Results", icon: ICONS.labs },
        { id: "imaging", label: "Imaging", icon: ICONS.imaging },
        {
          id: "results-inbox",
          label: "Results Inbox",
          icon: ICONS["results-inbox"],
        },
        { id: "referrals", label: "Referrals", icon: ICONS.referrals },
        {
          id: "clinical-reference",
          label: "Clinical Reference",
          icon: ICONS["clinical-reference"],
        },
      ],
    },
    {
      label: "Communication",
      items: [{ id: "messages", label: "Messages", icon: ICONS.messages }],
    },
    {
      label: "Analytics",
      items: [{ id: "reporting", label: "Reporting", icon: ICONS.reporting }],
    },
    {
      label: "System",
      items: [{ id: "settings", label: "Settings", icon: ICONS.settings }],
    },
  ],

  Nurse: [
    {
      label: null,
      items: [{ id: "dashboard", label: "Dashboard", icon: ICONS.dashboard }],
    },
    {
      label: "Nursing",
      items: [
        { id: "mar", label: "MAR", icon: ICONS.mar },
        {
          id: "nursing-assessment",
          label: "Assessment",
          icon: ICONS["nursing-assessment"],
        },
        {
          id: "nursing-care-plans",
          label: "Care Plans",
          icon: ICONS["nursing-care-plans"],
        },
        {
          id: "shift-handoff",
          label: "Shift Handoff",
          icon: ICONS["shift-handoff"],
        },
        {
          id: "io-tracking",
          label: "I&O Tracking",
          icon: ICONS["io-tracking"],
        },
      ],
    },
    {
      label: "Clinical",
      items: [
        { id: "patients", label: "Patients", icon: ICONS.patients },
        { id: "appointments", label: "Appointments", icon: ICONS.appointments },
        { id: "inpatient", label: "Wards", icon: ICONS.inpatient },
      ],
    },
    {
      label: "Worklists",
      items: [
        { id: "labs", label: "Lab Results", icon: ICONS.labs },
        {
          id: "results-inbox",
          label: "Critical Results",
          icon: ICONS["results-inbox"],
        },
      ],
    },
    {
      label: "Communication",
      items: [{ id: "messages", label: "Messages", icon: ICONS.messages }],
    },
    {
      label: "System",
      items: [{ id: "settings", label: "Settings", icon: ICONS.settings }],
    },
  ],

  Pharmacist: [
    {
      label: null,
      items: [{ id: "dashboard", label: "Dashboard", icon: ICONS.dashboard }],
    },
    {
      label: "Workflow",
      items: [
        { id: "pharmacy", label: "Pharmacy", icon: ICONS.pharmacy },
        { id: "patients", label: "Patients", icon: ICONS.patients },
        { id: "labs", label: "Drug Monitoring", icon: ICONS.labs },
        {
          id: "medication-reconciliation",
          label: "Med Reconciliation",
          icon: ICONS.mar,
        },
        {
          id: "clinical-reference",
          label: "Clinical Reference",
          icon: ICONS["clinical-reference"],
        },
      ],
    },
    {
      label: "Communication",
      items: [{ id: "messages", label: "Messages", icon: ICONS.messages }],
    },
    {
      label: "System",
      items: [{ id: "settings", label: "Settings", icon: ICONS.settings }],
    },
  ],

  Receptionist: [
    {
      label: null,
      items: [{ id: "dashboard", label: "Dashboard", icon: ICONS.dashboard }],
    },
    {
      label: "Clinical",
      items: [
        { id: "patients", label: "Patients", icon: ICONS.patients },
        { id: "appointments", label: "Appointments", icon: ICONS.appointments },
      ],
    },
    {
      label: "Administrative",
      items: [
        { id: "billing", label: "Billing", icon: ICONS.billing },
        { id: "referrals", label: "Referrals", icon: ICONS.referrals },
      ],
    },
    {
      label: "Communication",
      items: [{ id: "messages", label: "Messages", icon: ICONS.messages }],
    },
    {
      label: "System",
      items: [{ id: "settings", label: "Settings", icon: ICONS.settings }],
    },
  ],

  Billing: [
    {
      label: null,
      items: [{ id: "dashboard", label: "Dashboard", icon: ICONS.dashboard }],
    },
    {
      label: "Lookup",
      items: [
        { id: "patients", label: "Patients", icon: ICONS.patients },
        { id: "appointments", label: "Appointments", icon: ICONS.appointments },
      ],
    },
    {
      label: "Finance",
      items: [
        { id: "billing", label: "Billing", icon: ICONS.billing },
        { id: "claims", label: "Claims", icon: ICONS.claims },
        { id: "prior-auth", label: "Prior Auth", icon: ICONS["prior-auth"] },
        { id: "reporting", label: "Reporting", icon: ICONS.reporting },
      ],
    },
    {
      label: "System",
      items: [{ id: "settings", label: "Settings", icon: ICONS.settings }],
    },
  ],

  Admin: [
    {
      label: null,
      items: [{ id: "dashboard", label: "Dashboard", icon: ICONS.dashboard }],
    },
    {
      label: "Clinical",
      items: [
        { id: "patients", label: "Patients", icon: ICONS.patients },
        { id: "appointments", label: "Appointments", icon: ICONS.appointments },
      ],
    },
    {
      label: "Finance",
      items: [
        { id: "billing", label: "Billing", icon: ICONS.billing },
        { id: "claims", label: "Claims", icon: ICONS.claims },
        { id: "prior-auth", label: "Prior Auth", icon: ICONS["prior-auth"] },
      ],
    },
    {
      label: "Communication",
      items: [{ id: "messages", label: "Messages", icon: ICONS.messages }],
    },
    {
      label: "Administration",
      items: [
        { id: "reporting", label: "Reporting", icon: ICONS.reporting },
        { id: "audit", label: "Audit Log", icon: ICONS.audit },
      ],
    },
    {
      label: "System",
      items: [{ id: "settings", label: "Settings", icon: ICONS.settings }],
    },
  ],
  LabTech: [
    {
      label: null,
      items: [
        { id: "dashboard" as Page, label: "Dashboard", icon: ICONS.dashboard },
      ],
    },
    {
      label: "Lab",
      items: [
        { id: "labs" as Page, label: "Lab Results", icon: ICONS.labs },
        {
          id: "results-inbox" as Page,
          label: "Results Inbox",
          icon: ICONS["results-inbox"],
        },
        { id: "orders" as Page, label: "Orders", icon: ICONS.mar },
        {
          id: "clinical-reference" as Page,
          label: "Clinical Reference",
          icon: ICONS["clinical-reference"],
        },
      ],
    },
    {
      label: "System",
      items: [
        { id: "settings" as Page, label: "Settings", icon: ICONS.settings },
      ],
    },
  ],
  Radiologist: [
    {
      label: null,
      items: [
        { id: "dashboard" as Page, label: "Dashboard", icon: ICONS.dashboard },
      ],
    },
    {
      label: "Imaging",
      items: [
        { id: "imaging" as Page, label: "Imaging", icon: ICONS.imaging },
        {
          id: "clinical-reference" as Page,
          label: "Clinical Reference",
          icon: ICONS["clinical-reference"],
        },
      ],
    },
    {
      label: "System",
      items: [
        { id: "settings" as Page, label: "Settings", icon: ICONS.settings },
      ],
    },
  ],
};

// Page breadcrumb metadata — covers all pages including chart-only ones
const pageLabel: Record<Page, string> = {
  dashboard: "Dashboard",
  patients: "Patients",
  notes: "Clinical Notes",
  medications: "Medications",
  "clinical-reference": "Clinical Reference",
  appointments: "Appointments",
  encounter: "Encounter",
  labs: "Lab Results",
  imaging: "Imaging",
  pharmacy: "Pharmacy",
  referrals: "Referrals",
  billing: "Billing",
  claims: "Claims",
  messages: "Messages",
  audit: "Audit Log",
  reporting: "Reporting",
  inpatient: "Inpatient / Wards",
  "results-inbox": "Results Inbox",
  "medication-reconciliation": "Medication Reconciliation",
  "prior-auth": "Prior Authorization",
  pdmp: "PDMP",
  settings: "Settings",
  orders: "Clinical Orders",
  "problem-list": "Problem List",
  consents: "Consent Forms",
  safety: "Patient Safety",
  "advance-directives": "Advance Directives",
  "patient-timeline": "Patient Timeline",
  "patient-encounters": "Patient Encounters",
  "patient-chart": "Patient Chart",
  mar: "MAR",
  "nursing-assessment": "Nursing Assessment",
  "nursing-care-plans": "Nursing Care Plans",
  "shift-handoff": "Shift Handoff Notes",
  "io-tracking": "I&O Tracking",
  "video-visit": "Video Visit",
  "mental-health": "Mental Health Outcomes",
  caregivers: "Caregivers",
};

const pageGroupLabel: Record<Page, string> = {
  dashboard: "",
  patients: "Clinical",
  notes: "Clinical",
  medications: "Clinical",
  "clinical-reference": "Clinical",
  appointments: "Clinical",
  encounter: "Clinical",
  labs: "Worklists",
  imaging: "Worklists",
  pharmacy: "Worklists",
  referrals: "Worklists",
  billing: "Finance",
  claims: "Finance",
  messages: "Communication",
  audit: "System",
  reporting: "Analytics",
  inpatient: "Clinical",
  "results-inbox": "Communication",
  "medication-reconciliation": "Clinical",
  "prior-auth": "Finance",
  pdmp: "Clinical",
  settings: "System",
  orders: "Worklists",
  "problem-list": "Clinical",
  consents: "Clinical",
  safety: "Clinical",
  "advance-directives": "Clinical",
  "patient-timeline": "Clinical",
  "patient-encounters": "Clinical",
  "patient-chart": "Clinical",
  "mental-health": "Clinical",
  caregivers: "Clinical",
  mar: "Nursing",
  "nursing-assessment": "Nursing",
  "nursing-care-plans": "Nursing",
  "shift-handoff": "Nursing",
  "io-tracking": "Nursing",
  "video-visit": "Appointments",
};

const roleDisplayNames: Record<Role, string> = {
  Doctor: "Attending Physician",
  Nurse: "Registered Nurse",
  Pharmacist: "Pharmacist",
  Receptionist: "Receptionist",
  Billing: "Billing Specialist",
  Admin: "System Administrator",
  LabTech: "Lab Technician",
  Radiologist: "Radiologist",
};

const allRoles: Role[] = [
  "Doctor",
  "Nurse",
  "Pharmacist",
  "Receptionist",
  "Billing",
  "Admin",
  "LabTech",
  "Radiologist",
];

const sectionLabelStyle =
  "text-sidebar-foreground/60 font-semibold uppercase tracking-widest";

const ROLE_USER_NAMES: Record<string, string> = {
  Doctor: "Dr. Sarah Chen",
  Nurse: "Maria Santos RN",
  Pharmacist: "Alex Kim PharmD",
  Receptionist: "Taylor Brown",
  Billing: "Pat Wilson",
  Admin: "Chris Davis",
  LabTech: "Alex Kim, MLT",
  Radiologist: "Dr. James Park",
};

const ROLE_USER_INITIALS: Record<string, string> = {
  Doctor: "SC",
  Nurse: "MS",
  Pharmacist: "AK",
  Receptionist: "TB",
  Billing: "PW",
  Admin: "CD",
  LabTech: "AK",
  Radiologist: "JP",
};

export default function Layout({
  page,
  setPage,
  children,
  hasCriticals,
  role,
  setRole,
  onLogout,
  isDemoMode,
  activePatient,
  onClearPatient,
  onSelectPatient,
  showSessionWarning,
  onStayLoggedIn,
  onLogoutSession,
}: {
  page: Page;
  setPage: (p: Page) => void;
  children: ReactNode;
  hasCriticals?: boolean;
  role: Role;
  setRole: (r: Role) => void;
  onLogout?: () => void;
  isDemoMode?: boolean;
  activePatient?: {
    id: bigint;
    name: string;
    mrn: string;
    dateOfBirth: string;
  } | null;
  onClearPatient?: () => void;
  onSelectPatient?: (patient: {
    id: bigint;
    name: string;
    mrn: string;
    dateOfBirth: string;
  }) => void;
  showSessionWarning?: boolean;
  onStayLoggedIn?: () => void;
  onLogoutSession?: () => void;
}) {
  const navGroups = roleNavConfig[role];
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => localStorage.getItem("sidebar-collapsed") === "true",
  );
  const [pendingRole, setPendingRole] = useState<Role | null>(null);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("sidebar-collapsed", String(next));
      return next;
    });
  };

  const confirmRoleSwitch = () => {
    if (!pendingRole) return;
    handleRoleChange(pendingRole);
    setPendingRole(null);
  };
  const { actor, isFetching: actorFetching } = useActor();
  const [pendingInboxCount, setPendingInboxCount] = useState(5);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);

  useEffect(() => {
    if (!actor || actorFetching) return;
    (actor as any)
      .listInboxResults()
      .then((raw: any[]) => {
        const count = raw.filter((r: any) => !r.acknowledged).length;
        setPendingInboxCount(count);
      })
      .catch(() => {
        // keep default of 5
      });
  }, [actor, actorFetching]);

  useEffect(() => {
    if (!actor || actorFetching) return;
    actor
      .listMessages()
      .then((msgs) => {
        const count = msgs.filter((m) => m.fromUserId !== BigInt(0)).length;
        setUnreadMessageCount(count);
      })
      .catch(() => {});
  }, [actor, actorFetching]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const groupLabel = pageGroupLabel[page];
  const label = pageLabel[page];

  const handleSetPage = (p: Page) => {
    setPage(p);
  };

  const roleDefaultPage: Record<Role, Page> = {
    Doctor: "dashboard",
    Nurse: "patients",
    Pharmacist: "pharmacy",
    Receptionist: "appointments",
    Billing: "billing",
    Admin: "reporting",
    LabTech: "labs",
    Radiologist: "imaging",
  };

  const roleToasts: Record<Role, string> = {
    Doctor: "Viewing as Doctor — full clinical access",
    Nurse: "Viewing as Nurse — patient care and orders",
    Pharmacist:
      "Viewing as Pharmacist — pharmacy queue and medication verification",
    Receptionist:
      "Viewing as Receptionist — scheduling and patient registration",
    Billing: "Viewing as Billing Specialist — invoices and claims",
    Admin: "Viewing as Administrator — full system access",
    LabTech: "Viewing as Lab Technician — lab results and orders",
    Radiologist: "Viewing as Radiologist — imaging and reports",
  };

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    setPage(roleDefaultPage[newRole]);
    toast(roleToasts[newRole], { duration: 3000 });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <TooltipProvider delayDuration={300}>
        <aside
          className={cn(
            "flex-shrink-0 flex flex-col bg-sidebar transition-all duration-200",
            sidebarCollapsed ? "w-14" : "w-56",
          )}
        >
          {/* Logo - h-14 matches global header */}
          <div className="h-14 flex items-center px-3 flex-shrink-0 border-b border-sidebar-border overflow-hidden">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                <img
                  src="/assets/generated/medunite-logo-transparent.dim_48x48.png"
                  alt="MedUnite"
                  className="w-full h-full object-contain"
                />
              </div>
              {!sidebarCollapsed && (
                <div className="min-w-0">
                  <p className="text-sm font-bold tracking-tight leading-none text-sidebar-foreground">
                    MedUnite
                  </p>
                  <p className="text-xs mt-0.5 tracking-wider text-sidebar-foreground/60">
                    Clinical Platform
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Nav */}
          <nav
            className="flex-1 py-2 px-1.5 overflow-y-auto"
            data-ocid="nav.panel"
          >
            {navGroups.map((group, groupIdx) => (
              <div
                key={group.label ?? `overview-${groupIdx}`}
                className={
                  group.label && !sidebarCollapsed
                    ? "mt-3"
                    : group.label
                      ? "mt-2"
                      : ""
                }
              >
                {group.label && !sidebarCollapsed && (
                  <p className={`text-xs px-2.5 mb-1 ${sectionLabelStyle}`}>
                    {group.label}
                  </p>
                )}
                {group.label && sidebarCollapsed && (
                  <div className="mx-1 my-1 h-px bg-sidebar-border/50" />
                )}
                <div className="space-y-px">
                  {group.items.map(({ id, label: itemLabel, icon: Icon }) => {
                    const isActive =
                      page === id ||
                      (id === "appointments" && page === "encounter");
                    const btn = (
                      <button
                        type="button"
                        key={id}
                        data-ocid={`nav.${id}.link`}
                        onClick={() => handleSetPage(id)}
                        className={cn(
                          "w-full flex items-center transition-all relative border-l-2",
                          sidebarCollapsed
                            ? "justify-center px-0 py-2"
                            : "gap-2.5 px-2.5 py-1.5 text-sm",
                          isActive
                            ? "font-semibold bg-sidebar-primary text-sidebar-primary-foreground border-l-sidebar-primary"
                            : "border-l-transparent font-medium text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                        )}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {!sidebarCollapsed && <span>{itemLabel}</span>}
                        {!sidebarCollapsed && id === "labs" && hasCriticals && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                        )}
                        {!sidebarCollapsed &&
                          id === "results-inbox" &&
                          pendingInboxCount > 0 && (
                            <span className="ml-auto text-xs font-bold bg-destructive text-destructive-foreground rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none">
                              {pendingInboxCount}
                            </span>
                          )}
                        {!sidebarCollapsed &&
                          id === "messages" &&
                          unreadMessageCount > 0 && (
                            <span className="ml-auto text-xs font-bold bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none">
                              {unreadMessageCount}
                            </span>
                          )}
                      </button>
                    );
                    if (sidebarCollapsed) {
                      return (
                        <Tooltip key={id}>
                          <TooltipTrigger asChild>{btn}</TooltipTrigger>
                          <TooltipContent side="right" className="text-xs">
                            {itemLabel}
                          </TooltipContent>
                        </Tooltip>
                      );
                    }
                    return btn;
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Collapse toggle */}
          <div className="border-t border-sidebar-border py-2 px-1.5">
            <button
              type="button"
              onClick={toggleSidebar}
              data-ocid="nav.sidebar.toggle"
              className="w-full flex items-center justify-center py-1.5 text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent/40 transition-colors rounded-sm"
              aria-label={
                sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-3.5 h-3.5" />
              ) : (
                <div className="flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="text-xs">Collapse</span>
                </div>
              )}
            </button>
          </div>
        </aside>
      </TooltipProvider>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - h-14 matches sidebar logo block */}
        <header className="h-14 bg-card border-b border-border flex items-center px-5 flex-shrink-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs">
            {groupLabel ? (
              <>
                <span className="text-muted-foreground font-medium">
                  {groupLabel}
                </span>
                <span className="text-muted-foreground/60">/</span>
                <span className="font-semibold text-foreground">{label}</span>
              </>
            ) : (
              <span className="font-semibold text-foreground">{label}</span>
            )}
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Demo badge */}
            {isDemoMode && (
              <span
                data-ocid="header.demo.panel"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-warning/20 text-warning-foreground border border-warning/50"
              >
                <svg
                  className="w-2.5 h-2.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                DEMO
              </span>
            )}

            {/* Cmd+K palette trigger */}
            <button
              type="button"
              data-ocid="header.command_palette_open"
              onClick={() => setCmdPaletteOpen(true)}
              className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded font-mono hover:bg-muted transition-colors hidden sm:inline-flex items-center gap-1"
              aria-label="Open command palette"
            >
              <span>⌘K</span>
            </button>

            {/* Notifications dropdown */}
            <NotificationDropdown />

            {/* Divider */}
            <div className="w-px h-6 bg-border" />

            {/* User profile */}
            <div
              className="flex items-center gap-2.5"
              data-ocid="header.user.panel"
            >
              {/* Avatar */}
              <div className="w-7 h-7 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 rounded-sm bg-accent">
                {ROLE_USER_INITIALS[role]}
              </div>

              {/* Name + role selector */}
              <div className="flex flex-col justify-center min-w-0">
                <span className="text-xs font-semibold text-foreground leading-none truncate">
                  {ROLE_USER_NAMES[role]}
                </span>
                <div className="relative">
                  <DropdownMenu onOpenChange={() => setPendingRole(null)}>
                    <DropdownMenuTrigger
                      data-ocid="header.role.select"
                      className="text-xs text-muted-foreground hover:text-foreground cursor-pointer leading-none mt-0.5 outline-none flex items-center gap-0.5"
                    >
                      {roleDisplayNames[role]}
                      <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-[160px]">
                      {allRoles.map((r) => (
                        <DropdownMenuItem
                          key={r}
                          data-ocid={`header.role.option.${r.toLowerCase()}`}
                          className={cn(
                            r === role ? "font-semibold text-primary" : "",
                          )}
                          onClick={() => r !== role && setPendingRole(r)}
                        >
                          {roleDisplayNames[r]}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {pendingRole && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-card border border-border shadow-card z-50 p-2.5 rounded-sm min-w-[180px]"
                      data-ocid="header.role.confirm.panel"
                    >
                      <p className="text-xs font-medium text-foreground mb-2">
                        Switch to {roleDisplayNames[pendingRole]}?
                      </p>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          data-ocid="header.role.confirm_button"
                          onClick={confirmRoleSwitch}
                          className="px-2.5 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          data-ocid="header.role.cancel_button"
                          onClick={() => setPendingRole(null)}
                          className="px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border rounded-sm hover:bg-muted transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Logout */}
              <button
                type="button"
                className="p-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                aria-label={isDemoMode ? "Exit Demo" : "Log out"}
                data-ocid="header.logout.button"
                onClick={onLogout}
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Demo banner — shown for all authenticated staff */}
        <DemoBanner />
        {isDemoMode && (
          <GuidedDemoTour
            isDemoMode={isDemoMode}
            onNavigate={(p) => setPage(p as any)}
          />
        )}

        {/* Session warning */}
        {showSessionWarning && (
          <SessionWarningBanner
            onStay={onStayLoggedIn ?? (() => {})}
            onLogout={onLogoutSession ?? (() => {})}
          />
        )}

        {/* Patient chart nav — two-row bar when patient is active */}
        {activePatient && (
          <PatientChartNav
            patient={activePatient}
            currentPage={page}
            onNavigate={(p) => setPage(p as Parameters<typeof setPage>[0])}
            onClear={onClearPatient ?? (() => {})}
          />
        )}

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div key={page} className="page-enter h-full">
            {children}
          </div>
        </main>
      </div>
      {/* Command Palette */}
      <CommandPalette
        open={cmdPaletteOpen}
        onClose={() => setCmdPaletteOpen(false)}
        onNavigate={(p) => {
          handleSetPage(p as Parameters<typeof setPage>[0]);
          setCmdPaletteOpen(false);
        }}
        onSelectPatient={(patient) => {
          if (onSelectPatient) onSelectPatient(patient);
          handleSetPage("patient-chart");
          setCmdPaletteOpen(false);
        }}
        patients={DEMO_PATIENTS.map((p) => ({
          id: p.id,
          name: p.name,
          mrn: p.mrn,
          dateOfBirth: p.dateOfBirth,
        }))}
      />
    </div>
  );
}
