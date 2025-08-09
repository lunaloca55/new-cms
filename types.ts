
export enum EnrollmentStage {
  Lead = 'Lead',
  Interested = 'Interested',
  Applied = 'Applied',
  Accepted = 'Accepted',
  Deposited = 'Deposited',
  Matriculated = 'Matriculated',
  Dropped = 'Dropped',
}

export enum LeadTemperature {
  Hot = 'Hot',
  Warm = 'Warm',
  Cold = 'Cold',
  NonResponsive = 'Non-Responsive',
}

export interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  homeAddress: string;
  programOfInterest: string;
  birthDate: string; // YYYY-MM-DD
  stage: EnrollmentStage;
  temperature: LeadTemperature;
  lastContacted: string; // ISO 8601 date string
  createdAt: string; // ISO 8601 date string
}
