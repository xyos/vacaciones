import { VacationRequestStatus } from "./vacation-request-status.enum";

export class VacationRequest {
  constructor(
    public id: number,
    public state: VacationRequestStatus,
    public employee: any,
    public initialDate: string,
    public days: number,
  ) {
  }
}
