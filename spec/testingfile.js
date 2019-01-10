import  { DateChecker }  from './calculator';

describe("DateChecker", function() {

    it ('should return what weekday inputdate is', function() {
        let newdate = new DateChecker('10-01-2019');
        expect(newdate.getWeekDay()).toEqual("Thirsday");
    });
});