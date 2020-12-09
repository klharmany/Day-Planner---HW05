$(document).ready(function () {
    let workHours = [
        "9:00 am",
        "10:00 am",
        "11:00 am",
        "12:00 pm",
        "1:00 pm",
        "2:00 pm",
        "3:00 pm",
        "4:00 pm",
        "5:00 pm",
    ];
}
)

currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var inputBlockEl = $(".time-block");
var saveBtns = $(".saveBtn");

var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));