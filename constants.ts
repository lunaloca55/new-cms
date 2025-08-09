
import { Lead, EnrollmentStage, LeadTemperature } from './types';

export const MOCK_LEADS: Lead[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '555-0101', homeAddress: '123 Maple St, Springfield, USA', programOfInterest: 'Computer Science', birthDate: '1998-05-21', stage: EnrollmentStage.Applied, temperature: LeadTemperature.Hot, lastContacted: '2024-07-22T10:00:00Z', createdAt: '2024-06-01T09:00:00Z' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phoneNumber: '555-0102', homeAddress: '456 Oak Ave, Springfield, USA', programOfInterest: 'Business Administration', birthDate: '1999-09-15', stage: EnrollmentStage.Deposited, temperature: LeadTemperature.Hot, lastContacted: '2024-07-20T14:30:00Z', createdAt: '2024-05-15T11:00:00Z' },
  { id: 3, firstName: 'Michael', lastName: 'Johnson', email: 'michael.j@example.com', phoneNumber: '555-0103', homeAddress: '789 Pine Ln, Springfield, USA', programOfInterest: 'Mechanical Engineering', birthDate: '2000-01-10', stage: EnrollmentStage.Interested, temperature: LeadTemperature.Warm, lastContacted: '2024-07-18T08:45:00Z', createdAt: '2024-07-05T13:00:00Z' },
  { id: 4, firstName: 'Emily', lastName: 'Davis', email: 'emily.d@example.com', phoneNumber: '555-0104', homeAddress: '101 Birch Rd, Springfield, USA', programOfInterest: 'Nursing', birthDate: '1997-11-30', stage: EnrollmentStage.Accepted, temperature: LeadTemperature.Warm, lastContacted: '2024-07-21T11:20:00Z', createdAt: '2024-04-20T16:00:00Z' },
  { id: 5, firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', phoneNumber: '555-0105', homeAddress: '212 Cedar Blvd, Springfield, USA', programOfInterest: 'Fine Arts', birthDate: '2001-03-25', stage: EnrollmentStage.Lead, temperature: LeadTemperature.Cold, lastContacted: '2024-07-10T16:00:00Z', createdAt: '2024-07-10T16:00:00Z' },
  { id: 6, firstName: 'Sarah', lastName: 'Wilson', email: 'sarah.w@example.com', phoneNumber: '555-0106', homeAddress: '333 Elm Ct, Springfield, USA', programOfInterest: 'Psychology', birthDate: '1999-07-07', stage: EnrollmentStage.Matriculated, temperature: LeadTemperature.Warm, lastContacted: '2024-07-01T09:00:00Z', createdAt: '2024-02-10T10:00:00Z' },
  { id: 7, firstName: 'David', lastName: 'Brown', email: 'david.b@example.com', phoneNumber: '555-0107', homeAddress: '444 Spruce Way, Springfield, USA', programOfInterest: 'Computer Science', birthDate: '2000-08-19', stage: EnrollmentStage.Dropped, temperature: LeadTemperature.NonResponsive, lastContacted: '2024-06-15T12:00:00Z', createdAt: '2024-03-01T14:00:00Z' },
  { id: 8, firstName: 'Jessica', lastName: 'Miller', email: 'jessica.m@example.com', phoneNumber: '555-0108', homeAddress: '555 Willow Dr, Springfield, USA', programOfInterest: 'Business Administration', birthDate: '1998-12-12', stage: EnrollmentStage.Applied, temperature: LeadTemperature.Hot, lastContacted: '2024-07-23T09:15:00Z', createdAt: '2024-06-11T18:00:00Z' },
  { id: 9, firstName: 'Daniel', lastName: 'Garcia', email: 'daniel.g@example.com', phoneNumber: '555-0109', homeAddress: '666 Redwood Pkwy, Springfield, USA', programOfInterest: 'Data Science', birthDate: '2002-02-28', stage: EnrollmentStage.Interested, temperature: LeadTemperature.Warm, lastContacted: '2024-07-19T17:00:00Z', createdAt: '2024-07-08T10:30:00Z' },
  { id: 10, firstName: 'Laura', lastName: 'Rodriguez', email: 'laura.r@example.com', phoneNumber: '555-0110', homeAddress: '777 Sequoia Ave, Springfield, USA', programOfInterest: 'Nursing', birthDate: '1999-04-01', stage: EnrollmentStage.Accepted, temperature: LeadTemperature.Hot, lastContacted: '2024-07-22T13:00:00Z', createdAt: '2024-05-25T12:00:00Z' },
  { id: 11, firstName: 'James', lastName: 'Martinez', email: 'james.m@example.com', phoneNumber: '555-0111', homeAddress: '888 Aspen Cir, Springfield, USA', programOfInterest: 'Fine Arts', birthDate: '2000-06-18', stage: EnrollmentStage.Lead, temperature: LeadTemperature.Cold, lastContacted: '2024-07-15T11:00:00Z', createdAt: '2024-07-15T11:00:00Z' },
  { id: 12, firstName: 'Olivia', lastName: 'Hernandez', email: 'olivia.h@example.com', phoneNumber: '555-0112', homeAddress: '999 Mahogany Pl, Springfield, USA', programOfInterest: 'Psychology', birthDate: '1997-10-05', stage: EnrollmentStage.Dropped, temperature: LeadTemperature.NonResponsive, lastContacted: '2024-05-30T10:00:00Z', createdAt: '2024-03-15T09:00:00Z' },
];

export const ENROLLMENT_STAGES_ORDERED = [
  EnrollmentStage.Lead,
  EnrollmentStage.Interested,
  EnrollmentStage.Applied,
  EnrollmentStage.Accepted,
  EnrollmentStage.Deposited,
  EnrollmentStage.Matriculated,
];
