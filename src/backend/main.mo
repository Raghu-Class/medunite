import Map "mo:core/Map";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Array "mo:core/Array";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  module Patient {
    public type Type = {
      id : Nat;
      name : Text;
      dateOfBirth : Text;
      phone : Text;
      email : Text;
      mrn : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Appointment {
    public type Type = {
      id : Nat;
      patientId : Nat;
      providerId : Nat;
      date : Text;
      status : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module ClinicalNote {
    public type Type = {
      id : Nat;
      patientId : Nat;
      noteType : Text;
      content : Text;
      authorId : Nat;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Medication {
    public type Type = {
      id : Nat;
      patientId : Nat;
      name : Text;
      dose : Text;
      frequency : Text;
      status : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module LabResult {
    public type Type = {
      id : Nat;
      patientId : Nat;
      testName : Text;
      result : Text;
      unit : Text;
      isCritical : Bool;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Invoice {
    public type Type = {
      id : Nat;
      patientId : Nat;
      amount : Nat;
      status : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Message {
    public type Type = {
      id : Nat;
      fromUserId : Nat;
      toUserId : Nat;
      content : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module AuditLogEntry {
    public type Type = {
      id : Nat;
      actorId : Principal;
      action : Text;
      entityType : Text;
      entityId : Nat;
      timestamp : Time.Time;
    };
    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Prescription {
    public type Type = {
      id : Nat;
      patientId : Nat;
      patientName : Text;
      medication : Text;
      dose : Text;
      prescribedBy : Text;
      notes : Text;
      status : Text;
      createdAt : Time.Time;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Referral {
    public type Type = {
      id : Nat;
      patientId : Nat;
      patientName : Text;
      referredTo : Text;
      reason : Text;
      priority : Text;
      status : Text;
      notes : Text;
      createdAt : Time.Time;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Claim {
    public type Type = {
      id : Nat;
      patientId : Nat;
      patientName : Text;
      claimNumber : Text;
      insurerId : Nat;
      totalAmount : Nat;
      status : Text;
      serviceDate : Text;
      cptCodes : Text;
      diagnosisCodes : Text;
      submittedAt : Time.Time;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module ImagingOrder {
    public type Type = {
      id : Nat;
      patientId : Nat;
      patientName : Text;
      modality : Text;
      bodyPart : Text;
      priority : Text;
      status : Text;
      orderedBy : Text;
      indication : Text;
      createdAt : Time.Time;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Allergy {
    public type Type = {
      id : Nat;
      patientId : Nat;
      allergen : Text;
      reaction : Text;
      severity : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module MentalHealthAssessment {
    public type Type = {
      id : Nat;
      patientId : Nat;
      assessmentType : Text;
      date : Text;
      scoresJson : Text;
      totalScore : Int;
      severity : Text;
      providerId : Nat;
      notes : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Caregiver {
    public type Type = {
      id : Nat;
      patientId : Nat;
      name : Text;
      relationship : Text;
      phone : Text;
      email : Text;
      permissionsJson : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module SurveyResponse {
    public type Type = {
      id : Nat;
      patientId : Nat;
      rating : Nat;
      comment : Text;
      submittedAt : Time.Time;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };


  module InboxResult {
    public type Type = {
      id : Nat;
      patientName : Text;
      testName : Text;
      resultSummary : Text;
      flag : Text;
      resultType : Text;
      orderedDate : Text;
      receivedDate : Text;
      provider : Text;
      acknowledged : Bool;
      note : Text;
      callbackProvider : Text;
      callbackMethod : Text;
      callbackDateTime : Text;
      callbackNotes : Text;
      forwardedTo : Text;
    };

    public func compare(a : Type, b : Type) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };
  public type UserProfile = {
    name : Text;
    userId : Nat;
    role : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let patients = Map.empty<Nat, Patient.Type>();
  let appointments = Map.empty<Nat, Appointment.Type>();
  let clinicalNotes = Map.empty<Nat, ClinicalNote.Type>();
  let medications = Map.empty<Nat, Medication.Type>();
  let labResults = Map.empty<Nat, LabResult.Type>();
  let invoices = Map.empty<Nat, Invoice.Type>();
  let messages = Map.empty<Nat, Message.Type>();
  let auditLogs = Map.empty<Nat, AuditLogEntry.Type>();
  let prescriptions = Map.empty<Nat, Prescription.Type>();
  let referrals = Map.empty<Nat, Referral.Type>();
  let claims = Map.empty<Nat, Claim.Type>();
  let imagingOrders = Map.empty<Nat, ImagingOrder.Type>();
  let allergies = Map.empty<Nat, Allergy.Type>();
  let mentalHealthAssessments = Map.empty<Nat, MentalHealthAssessment.Type>();
  let caregivers = Map.empty<Nat, Caregiver.Type>();
  let surveyResponses = Map.empty<Nat, SurveyResponse.Type>();
  let inboxResults = Map.empty<Nat, InboxResult.Type>();

  var nextPatientId = 1;
  var nextAppointmentId = 1;
  var nextClinicalNoteId = 1;
  var nextMedicationId = 1;
  var nextLabResultId = 1;
  var nextInvoiceId = 1;
  var nextMessageId = 1;
  var nextAuditLogId = 1;
  var nextPrescriptionId = 1;
  var nextReferralId = 1;
  var nextClaimId = 1;
  var nextImagingOrderId = 1;
  var nextAllergyId = 1;
  var nextMentalHealthAssessmentId = 1;
  var nextCaregiverId = 1;
  var nextSurveyResponseId = 1;
  var nextInboxResultId = 1;

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func createPatient(name : Text, dob : Text, phone : Text, email : Text, mrn : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create patients");
    };
    let id = nextPatientId;
    nextPatientId += 1;
    let patient : Patient.Type = {
      id;
      name;
      dateOfBirth = dob;
      phone;
      email;
      mrn;
    };
    patients.add(id, patient);
    addAuditLog(caller, "Create", "Patient", id);
    id;
  };

  public query ({ caller }) func listPatients() : async [Patient.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view patients");
    };
    patients.values().toArray().sort();
  };

  public shared ({ caller }) func createAppointment(patientId : Nat, providerId : Nat, date : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create appointments");
    };
    let id = nextAppointmentId;
    nextAppointmentId += 1;
    let appointment : Appointment.Type = {
      id;
      patientId;
      providerId;
      date;
      status = "scheduled";
    };
    appointments.add(id, appointment);
    addAuditLog(caller, "Create", "Appointment", id);
    id;
  };

  public query ({ caller }) func listAppointments() : async [Appointment.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view appointments");
    };
    appointments.values().toArray().sort();
  };

  public shared ({ caller }) func createClinicalNote(patientId : Nat, noteType : Text, content : Text, authorId : Nat) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create clinical notes");
    };
    let id = nextClinicalNoteId;
    nextClinicalNoteId += 1;
    let note : ClinicalNote.Type = {
      id;
      patientId;
      noteType;
      content;
      authorId;
    };
    clinicalNotes.add(id, note);
    addAuditLog(caller, "Create", "ClinicalNote", id);
    id;
  };

  public query ({ caller }) func listClinicalNotes() : async [ClinicalNote.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view clinical notes");
    };
    clinicalNotes.values().toArray().sort();
  };

  public shared ({ caller }) func addMedication(patientId : Nat, name : Text, dose : Text, frequency : Text, status : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add medications");
    };
    let id = nextMedicationId;
    nextMedicationId += 1;
    let medication : Medication.Type = {
      id;
      patientId;
      name;
      dose;
      frequency;
      status;
    };
    medications.add(id, medication);
    addAuditLog(caller, "Create", "Medication", id);
    id;
  };

  public query ({ caller }) func listMedications() : async [Medication.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view medications");
    };
    medications.values().toArray().sort();
  };

  public shared ({ caller }) func addLabResult(patientId : Nat, testName : Text, result : Text, unit : Text, isCritical : Bool) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add lab results");
    };
    let id = nextLabResultId;
    nextLabResultId += 1;
    let labResult : LabResult.Type = {
      id;
      patientId;
      testName;
      result;
      unit;
      isCritical;
    };
    labResults.add(id, labResult);
    addAuditLog(caller, "Create", "LabResult", id);
    id;
  };

  public query ({ caller }) func listLabResults() : async [LabResult.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view lab results");
    };
    labResults.values().toArray().sort();
  };

  public shared ({ caller }) func createInvoice(patientId : Nat, amount : Nat, status : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create invoices");
    };
    let id = nextInvoiceId;
    nextInvoiceId += 1;
    let invoice : Invoice.Type = {
      id;
      patientId;
      amount;
      status;
    };
    invoices.add(id, invoice);
    addAuditLog(caller, "Create", "Invoice", id);
    id;
  };

  public query ({ caller }) func listInvoices() : async [Invoice.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view invoices");
    };
    invoices.values().toArray().sort();
  };

  public shared ({ caller }) func sendMessage(fromUserId : Nat, toUserId : Nat, content : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can send messages");
    };
    let id = nextMessageId;
    nextMessageId += 1;
    let message : Message.Type = {
      id;
      fromUserId;
      toUserId;
      content;
    };
    messages.add(id, message);
    addAuditLog(caller, "Send", "Message", id);
    id;
  };

  public query ({ caller }) func listMessages() : async [Message.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view messages");
    };

    let callerProfile = userProfiles.get(caller);
    let isAdmin = AccessControl.isAdmin(accessControlState, caller);

    let allMessages = messages.values().toArray();
    switch (callerProfile) {
      case (?profile) {
        let filtered = allMessages.filter(
          func(msg : Message.Type) : Bool {
            isAdmin or msg.fromUserId == profile.userId or msg.toUserId == profile.userId
          }
        );
        filtered.sort();
      };
      case (null) {
        if (isAdmin) {
          allMessages.sort();
        } else {
          [];
        };
      };
    };
  };

  func addAuditLog(actorPrincipal : Principal, action : Text, entityType : Text, entityId : Nat) {
    let id = nextAuditLogId;
    nextAuditLogId += 1;
    let log : AuditLogEntry.Type = {
      id;
      actorId = actorPrincipal;
      action;
      entityType;
      entityId;
      timestamp = Time.now();
    };
    auditLogs.add(id, log);
  };

  public query ({ caller }) func listAuditLogs() : async [AuditLogEntry.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view audit logs");
    };
    auditLogs.values().toArray().sort();
  };

  // Prescription functions
  public shared ({ caller }) func createPrescription(
    patientId : Nat,
    patientName : Text,
    medication : Text,
    dose : Text,
    prescribedBy : Text,
    notes : Text
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create prescriptions");
    };
    let id = nextPrescriptionId;
    nextPrescriptionId += 1;
    let prescription : Prescription.Type = {
      id;
      patientId;
      patientName;
      medication;
      dose;
      prescribedBy;
      notes;
      status = "pending";
      createdAt = Time.now();
    };
    prescriptions.add(id, prescription);
    addAuditLog(caller, "Create", "Prescription", id);
    id;
  };

  public query ({ caller }) func listPrescriptions() : async [Prescription.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view prescriptions");
    };
    prescriptions.values().toArray().sort();
  };

  public shared ({ caller }) func updatePrescriptionStatus(id : Nat, newStatus : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update prescription status");
    };
    switch (prescriptions.get(id)) {
      case (?prescription) {
        let updatedPrescription = { prescription with status = newStatus };
        prescriptions.add(id, updatedPrescription);
        addAuditLog(caller, "UpdateStatus", "Prescription", id);
        true;
      };
      case (null) { false };
    };
  };

  // Referral functions
  public shared ({ caller }) func createReferral(
    patientId : Nat,
    patientName : Text,
    referredTo : Text,
    reason : Text,
    priority : Text,
    notes : Text
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create referrals");
    };
    let id = nextReferralId;
    nextReferralId += 1;
    let referral : Referral.Type = {
      id;
      patientId;
      patientName;
      referredTo;
      reason;
      priority;
      status = "pending";
      notes;
      createdAt = Time.now();
    };
    referrals.add(id, referral);
    addAuditLog(caller, "Create", "Referral", id);
    id;
  };

  public query ({ caller }) func listReferrals() : async [Referral.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view referrals");
    };
    referrals.values().toArray().sort();
  };

  public shared ({ caller }) func updateReferralStatus(id : Nat, newStatus : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update referral status");
    };
    switch (referrals.get(id)) {
      case (?referral) {
        let updatedReferral = { referral with status = newStatus };
        referrals.add(id, updatedReferral);
        addAuditLog(caller, "UpdateStatus", "Referral", id);
        true;
      };
      case (null) { false };
    };
  };

  // Claim functions
  public shared ({ caller }) func createClaim(
    patientId : Nat,
    patientName : Text,
    claimNumber : Text,
    insurerId : Nat,
    totalAmount : Nat,
    serviceDate : Text,
    cptCodes : Text,
    diagnosisCodes : Text
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create claims");
    };
    let id = nextClaimId;
    nextClaimId += 1;
    let claim : Claim.Type = {
      id;
      patientId;
      patientName;
      claimNumber;
      insurerId;
      totalAmount;
      status = "submitted";
      serviceDate;
      cptCodes;
      diagnosisCodes;
      submittedAt = Time.now();
    };
    claims.add(id, claim);
    addAuditLog(caller, "Create", "Claim", id);
    id;
  };

  public query ({ caller }) func listClaims() : async [Claim.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view claims");
    };
    claims.values().toArray().sort();
  };

  public shared ({ caller }) func updateClaimStatus(id : Nat, newStatus : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update claim status");
    };
    switch (claims.get(id)) {
      case (?claim) {
        let updatedClaim = { claim with status = newStatus };
        claims.add(id, updatedClaim);
        addAuditLog(caller, "UpdateStatus", "Claim", id);
        true;
      };
      case (null) { false };
    };
  };

  // Imaging Order functions
  public shared ({ caller }) func createImagingOrder(
    patientId : Nat,
    patientName : Text,
    modality : Text,
    bodyPart : Text,
    priority : Text,
    orderedBy : Text,
    indication : Text
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create imaging orders");
    };
    let id = nextImagingOrderId;
    nextImagingOrderId += 1;
    let order : ImagingOrder.Type = {
      id;
      patientId;
      patientName;
      modality;
      bodyPart;
      priority;
      status = "ordered";
      orderedBy;
      indication;
      createdAt = Time.now();
    };
    imagingOrders.add(id, order);
    addAuditLog(caller, "Create", "ImagingOrder", id);
    id;
  };

  public query ({ caller }) func listImagingOrders() : async [ImagingOrder.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view imaging orders");
    };
    imagingOrders.values().toArray().sort();
  };

  public shared ({ caller }) func updateImagingOrderStatus(id : Nat, newStatus : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update imaging order status");
    };
    switch (imagingOrders.get(id)) {
      case (?order) {
        let updatedOrder = { order with status = newStatus };
        imagingOrders.add(id, updatedOrder);
        addAuditLog(caller, "UpdateStatus", "ImagingOrder", id);
        true;
      };
      case (null) { false };
    };
  };

  // Allergy functions
  public shared ({ caller }) func addAllergy(patientId : Nat, allergen : Text, reaction : Text, severity : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add allergies");
    };
    let id = nextAllergyId;
    nextAllergyId += 1;
    let allergy : Allergy.Type = {
      id;
      patientId;
      allergen;
      reaction;
      severity;
    };
    allergies.add(id, allergy);
    addAuditLog(caller, "Create", "Allergy", id);
    id;
  };

  public query ({ caller }) func listAllergies() : async [Allergy.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view allergies");
    };
    allergies.values().toArray().sort();
  };

  // New update endpoints for existing types
  public shared ({ caller }) func updateAppointmentStatus(id : Nat, newStatus : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update appointment status");
    };
    switch (appointments.get(id)) {
      case (?appointment) {
        let updatedAppointment = { appointment with status = newStatus };
        appointments.add(id, updatedAppointment);
        addAuditLog(caller, "UpdateStatus", "Appointment", id);
        true;
      };
      case (null) { false };
    };
  };

  public shared ({ caller }) func updateMedicationStatus(id : Nat, newStatus : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update medication status");
    };
    switch (medications.get(id)) {
      case (?medication) {
        let updatedMedication = { medication with status = newStatus };
        medications.add(id, updatedMedication);
        addAuditLog(caller, "UpdateStatus", "Medication", id);
        true;
      };
      case (null) { false };
    };
  };

  public shared ({ caller }) func updateInvoiceStatus(id : Nat, newStatus : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update invoice status");
    };
    switch (invoices.get(id)) {
      case (?invoice) {
        let updatedInvoice = { invoice with status = newStatus };
        invoices.add(id, updatedInvoice);
        addAuditLog(caller, "UpdateStatus", "Invoice", id);
        true;
      };
      case (null) { false };
    };
  };

  // New mental health assessment functions
  public shared ({ caller }) func createMentalHealthAssessment(assessment : MentalHealthAssessment.Type) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create mental health assessments");
    };
    let id = nextMentalHealthAssessmentId;
    nextMentalHealthAssessmentId += 1;
    let newAssessment = { assessment with id };
    mentalHealthAssessments.add(id, newAssessment);
    addAuditLog(caller, "Create", "MentalHealthAssessment", id);
    id;
  };

  public query ({ caller }) func listMentalHealthAssessments() : async [MentalHealthAssessment.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view mental health assessments");
    };
    mentalHealthAssessments.values().toArray().sort();
  };

  // Caregiver functions
  public shared ({ caller }) func addCaregiver(caregiver : Caregiver.Type) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add caregivers");
    };
    let id = nextCaregiverId;
    nextCaregiverId += 1;
    let newCaregiver = { caregiver with id };
    caregivers.add(id, newCaregiver);
    addAuditLog(caller, "Create", "Caregiver", id);
    id;
  };

  public query ({ caller }) func listCaregivers() : async [Caregiver.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view caregivers");
    };
    caregivers.values().toArray().sort();
  };

  public shared ({ caller }) func removeCaregiver(id : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can remove caregivers");
    };
    if (caregivers.containsKey(id)) {
      caregivers.remove(id);
      addAuditLog(caller, "Delete", "Caregiver", id);
      true;
    } else {
      false;
    };
  };

  // New update patient endpoint
  public shared ({ caller }) func updatePatient(id : Nat, name : Text, dob : Text, phone : Text, email : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update patients");
    };
    switch (patients.get(id)) {
      case (?patient) {
        let updatedPatient = {
          patient with
          name;
          dateOfBirth = dob;
          phone;
          email;
        };
        patients.add(id, updatedPatient);
        addAuditLog(caller, "Update", "Patient", id);
        true;
      };
      case (null) { false };
    };
  };

  // Survey response functions
  public shared ({ caller }) func saveSurveyResponse(response : SurveyResponse.Type) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save survey responses");
    };
    let id = nextSurveyResponseId;
    nextSurveyResponseId += 1;
    let newResponse = { response with id };
    surveyResponses.add(id, newResponse);
    addAuditLog(caller, "Create", "SurveyResponse", id);
    id;
  };

  public query ({ caller }) func listSurveyResponses() : async [SurveyResponse.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view survey responses");
    };
    surveyResponses.values().toArray().sort();
  };
  // InboxResult functions
  public shared ({ caller }) func createInboxResult(
    patientName : Text, testName : Text, resultSummary : Text,
    flag : Text, resultType : Text, orderedDate : Text,
    receivedDate : Text, provider : Text
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create inbox results");
    };
    let id = nextInboxResultId;
    nextInboxResultId += 1;
    let result : InboxResult.Type = {
      id; patientName; testName; resultSummary; flag;
      resultType; orderedDate; receivedDate; provider;
      acknowledged = false; note = ""; callbackProvider = "";
      callbackMethod = ""; callbackDateTime = ""; callbackNotes = "";
      forwardedTo = "";
    };
    inboxResults.add(id, result);
    addAuditLog(caller, "Create", "InboxResult", id);
    id;
  };

  public query ({ caller }) func listInboxResults() : async [InboxResult.Type] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view inbox results");
    };
    inboxResults.values().toArray().sort();
  };

  public shared ({ caller }) func acknowledgeResult(id : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can acknowledge results");
    };
    switch (inboxResults.get(id)) {
      case (?r) {
        inboxResults.add(id, { r with acknowledged = true });
        addAuditLog(caller, "Acknowledge", "InboxResult", id);
        true;
      };
      case (null) { false };
    };
  };

  public shared ({ caller }) func saveResultNote(id : Nat, note : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save result notes");
    };
    switch (inboxResults.get(id)) {
      case (?r) {
        inboxResults.add(id, { r with note });
        addAuditLog(caller, "Note", "InboxResult", id);
        true;
      };
      case (null) { false };
    };
  };

  public shared ({ caller }) func saveResultCallback(
    id : Nat, callbackProvider : Text, callbackMethod : Text,
    callbackDateTime : Text, callbackNotes : Text
  ) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save callback records");
    };
    switch (inboxResults.get(id)) {
      case (?r) {
        inboxResults.add(id, { r with callbackProvider; callbackMethod; callbackDateTime; callbackNotes });
        addAuditLog(caller, "Callback", "InboxResult", id);
        true;
      };
      case (null) { false };
    };
  };

  public shared ({ caller }) func forwardResult(id : Nat, forwardedTo : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can forward results");
    };
    switch (inboxResults.get(id)) {
      case (?r) {
        inboxResults.add(id, { r with forwardedTo });
        addAuditLog(caller, "Forward", "InboxResult", id);
        true;
      };
      case (null) { false };
    };
  };


};
