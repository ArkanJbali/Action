export interface EventsInstance {
  id: number;
  eventName: string;
  severity: string;
  description: string;
  fixAction: string;
}
export interface ActionLog {
  seqID: string ;
  title: string ;
  severity: string ;
  description: string ;
  solution: string ;
}
export interface ActionsByApp {
  appName: string ;
appType: string;
appCount: number ;
percentage: string ;
}
export interface ActionsBySeverity {
  Severity: string ;
  SevNum: number ;
  Def: string ;
}
export interface SevChart {
  name: string;
  cri: number;
  war: number;
  err: number;
}
export interface WeekBySeverity {
  Week: string ;
  Warning: string;
  Error: string;
  Critical: string;
}
