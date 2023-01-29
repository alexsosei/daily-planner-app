function getLocalStorage(key) {
 let value = localStorage.getItem(key)   
 if (value) {
    $('#text${key}');
 }
}
$( document ).ready(function () {
    $("#currentDay").text(moment().format("dddd,MMMM Do"));
    for (let i = 9; i< 18; i++) {

// create a row
var row = $(`<div data-time=${i} id='${i}' class="row">`);
