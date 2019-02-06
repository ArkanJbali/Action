
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
 }
 export interface NewAction {
  id: number;
  eventName: string;
  appName: string;
  defSeverity: string;
  comperator: string;
  percent: number;
  eventSeverity: string;
  actionName: string;
  description: string;
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

