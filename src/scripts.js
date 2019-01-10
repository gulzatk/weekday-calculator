class DayCalculator {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.givenDate = new Date(year, month, day, 0, 0, 0, 0)
  }
}
