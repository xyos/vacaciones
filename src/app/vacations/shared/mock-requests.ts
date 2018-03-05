import { VacationRequest } from './vacation-request.model';
import { VacationRequestStatus } from './vacation-request-status.enum';
import { Employee } from './employee.model';

export const REQUESTS : VacationRequest[] = [
  {
    'id': 1,
    'employee': new Employee(1, "Jhon Doe", "CEO", "", "2017-07-24"),
    'state' : VacationRequestStatus.New,
    'initialDate' : "2018-03-05",
    'days' : 4,
  },
  {
    'id': 2,
    'employee': new Employee(2, "Alice Cooper", "CTO", "", "2016-07-24"),
    'state' : VacationRequestStatus.New,
    'initialDate' : "2018-03-06",
    'days' : 2,
  },
  {
    'id': 3,
    'employee': new Employee(4, "Barack Trump", "Developer", "", "2016-08-12"),
    'state' : VacationRequestStatus.New,
    'initialDate' : "2018-03-15",
    'days' : 30,
  },
  {
    'id': 4,
    'employee': new Employee(7, "Chris Cornellius", "Designer", "", "2016-05-12"),
    'state' : VacationRequestStatus.New,
    'initialDate' : "2018-06-15",
    'days' : 30,
  },
]
