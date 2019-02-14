export interface Apps {
 appName: string;
}
export interface Actions {
  name: string;
}
export interface Emails {
  email: string;
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
  userName: string;
  msg: string;
}
