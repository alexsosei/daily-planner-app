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

// create column 
var col1 = $(`<div class="col-sm-2"> <p class="hour">`);

// create column 2
var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add event..."></textarea>`);

//create column 3
var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`);

