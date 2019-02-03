
export interface EventsInstance {
  id: number;
  title: string;
  appName: string;
  defSeverity: string;
  comperator: string;
  percent: number;
  eventSeverity: string;
  actionName: string;
  description: string;
  solution: string;
 }
 export interface NewAction {
  SeqID: number;
  title: String;
  AppName: String;
  DefSev: String;
  Comperator: String;
  NumberOfOccurance: number;
  ActionSeverity: String;
  ActionSelection: String;
  Description: String;
}
// export interface EventsInstance {
//   id: number;
//   app: {
//     name: string};
// // defectSeverity: string;
//   comperator: string;
//   percent: string;
//   eventSev: {
//     severity: string;
//   };
//   fixAction: {
//     actionName: string};
//   // solution: string;
// }

// export interface Events {
//   userId: number ;
//   id: number;
//   title: string ;
//   body: string ;
// }

