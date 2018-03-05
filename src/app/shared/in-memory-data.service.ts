import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const vacations = [
      {
        'id': 1,
        'employee': { id: 1, name: "Jhon Doe", position: "CEO", picture: "", lastVacations : "2017-07-24"},
        'state' : 0,
        'initialDate' : "2018-03-05",
        'days' : 4,
      },
      {
        'id': 2,
        'employee': { id: 4, name: "Alice Cooper", position: "Designer", picture: "", lastVacations : "2017-07-24"},
        'state' : 1,
        'initialDate' : "2018-03-06",
        'days' : 2,
      },
      {
        'id': 3,
        'employee': { id: 2, name: "Chris Cornellius", position: "Developer", picture: "", lastVacations : "2017-07-24"},
        'state' : 0,
        'initialDate' : "2018-03-15",
        'days' : 30,
      },
      {
        'id': 4,
        'employee': { id: 13, name: "Pepe Giraldo", position: "Developer", picture: "", lastVacations : "2017-07-24"},
        'state' : 0,
        'initialDate' : "2018-03-05",
        'days' : 4,
      },
      {
        'id': 5,
        'employee': { id: 19, name: "Andres Romero", position: "Developer", picture: "", lastVacations : "2017-07-24"},
        'state' : 1,
        'initialDate' : "2018-03-06",
        'days' : 2,
      },
      {
        'id': 6,
        'employee': { id: 12, name: "Viviana Perez", position: "Singer", picture: "", lastVacations : "2017-07-24"},
        'state' : 0,
        'initialDate' : "2018-03-15",
        'days' : 30,
      },
      {
        'id': 7,
        'employee': { id: 13, name: "Diana Mejia", position: "Security Manager", picture: "", lastVacations : "2017-07-24"},
        'state' : 0,
        'initialDate' : "2018-06-15",
        'days' : 30,
      },
    ];
    return {vacations};
  }
}
