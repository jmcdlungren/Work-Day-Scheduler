// var advancedFormat = require('dayjs/plugin/advancedFormat')
// dayjs.extend(advancedFormat)


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  //
  // var save = document.querySelector(".saveBtn");
  // var description = document.querySelector(".description");



  $(".saveBtn").on("click", function saveTodo() {
    // saveTodo.preventDefault();
    var description = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").val();
    
    // hour.push(description);

    console.log(description);
    
    localStorage.setItem(hour, description);
    localStorage.getItem("hour");
  });

  // need to use key (9AM)

  // submit.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   var initials = initialsEl.value;
  //   var userScore = finalScore;
  //   console.log(initials, userScore);
  //   var userData = {
  //       initials: initials,
  //       score: userScore,
  //   };

  //   scoreBoard.push(userData);
  //   console.log(scoreBoard);
  //   localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));





  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  //
  var time = document.querySelector(".time-block");
  // var seven = document.querySelector("#hour-7");
  // var eight = document.querySelector("#hour-8");
  // var eleven = document.querySelector("#hour-9");
  var hour = document.querySelector(".hour");
  var rightNow = dayjs().format('hA');
  var today = dayjs().format('dddd, MMMM Do')
  var currentDay = document.querySelector("#currentDay");

  function displayDay() {
    currentDay.textContent = today;
  }

  // for (var i = 0; i < time.length; i++ && var i = 0; i < hour.length) {
  //   if (hour[i].textContent === rightNow) {
  //     time[i].classList.add("present");
  //   } else {
  //     if (hour[i].textContent < rightNow) {
  //       time[i].classList.add("past")
  //     } else {
  //       if (hour[i].textContent > rightNow) {
  //         time[i].classList.add("future")
  //       }
  //     }
  //   };

  // }






  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.





  displayDay();
});
