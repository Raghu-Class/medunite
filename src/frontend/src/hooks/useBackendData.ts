import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { useDemoMode } from "./useDemoMode";

const STALE_TIME = 60_000; // 60 seconds

function useEffectiveActor() {
  const { actor: realActor, isFetching } = useActor();
  const { isDemoMode, demoActor } = useDemoMode();
  const actor = isDemoMode ? demoActor : realActor;
  // In demo mode, we always have the actor ready immediately
  const ready = isDemoMode ? !!actor : !!actor && !isFetching;
  return { actor, ready, isDemoMode };
}

export function usePatients() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["patients", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listPatients(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useAppointments() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["appointments", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listAppointments(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useLabResults() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["labResults", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listLabResults(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useInvoices() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["invoices", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listInvoices(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function usePrescriptions() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["prescriptions", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listPrescriptions(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useClaims() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["claims", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listClaims(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useMessages() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["messages", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listMessages(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useImagingOrders() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["imagingOrders", isDemoMode ? "demo" : "real"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryFn: () => actor!.listImagingOrders() as Promise<any[]>,
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useReferrals() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["referrals", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listReferrals(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useMedications() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["medications", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listMedications(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}

export function useClinicalNotes() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["clinicalNotes", isDemoMode ? "demo" : "real"],
    queryFn: () => actor!.listClinicalNotes(),
    enabled: ready,
    staleTime: STALE_TIME,
  });
}
