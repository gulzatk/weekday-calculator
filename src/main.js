import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {DateChecker}  from './calculator';

$(document).ready(function() {
    $('#date').submit(function(event) {
        event.preventDefault();
        let day = $("input#day").val();
        let month = $("input#month").val();
        let year = $("input#year").val();

        let inputDate = new DateChecker(day, month, year);

        let finalResult = inputDate.getWeekDay()
        $("#result").text(finalResult);
        $("#result").show;
    });

});
