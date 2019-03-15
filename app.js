'use strict';

var form = document.getElementById('sample_form');
var table = document.getElementById('student_table');
var data = [];

function Student(first, last, status, plans) {
    this.first = first;
    this.last = last;
    this.enrolled = status;
    this.future_enrolled = plans;
}

function formData(event) {
    event.preventDefault();


    var first = event.target.first.value;
    var last = event.target.last.value;
    var enrolled = event.target.enrolled.checked;
    var futureClasses = event.target.future_enrolled.value;

    data.push(new Student(first, last, enrolled, futureClasses));
    createTable();
    form.reset();
}
function createTable() {
    var row;
    for (var i = 0; i < data.length; i++) {
        row = document.createElement('tr');
        row.innerHTML = '<td>' + data[i].first + '</td>' +
            '<td>' + data[i].last + '</td>' +
            '<td>' + data[i].enrolled + '</td>' +
            '<td>' + data[i].future_enrolled + '</td>'
    }
    table.appendChild(row);
}

form.addEventListener('submit', formData);