export function DateChecker(day, month, year) {
    this.givenDate = new Date(day, month, year);

  DateChecker.prototype.getWeekDay = function()
  {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let resultDay = days[ (this.givenDate).getDay() ];
    return resultDay;

  }

}

// export class DateChecker {
//   constructor(newdate) {
//     this.givenDate = newdate;
//   }

//   weekDay(){
//   return this.findWeekDay();
//   }
//   findWeekDay(){
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     let resultDay = days[ (this.givenDate).getDay() ];
//     return resultDay;
//   }
// }