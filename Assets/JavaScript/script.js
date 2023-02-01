// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  //

  $(".saveBtn").on("click", function saveTodo() {
    var description = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    console.log(description);
    localStorage.setItem(hour, description);
  });

  for (i = 9; i <= 17; i++) {
    var data = localStorage.getItem("hour-" + i)
    $("#hour-" + i).children(".description").val(data)
  };

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  //
  // var timeBlock = document.querySelector(".time-block");

  // var hour = document.querySelectorAll(".hour");
  // var hour = $(time).children(".hour").val();
  var rightNow = dayjs().hour();
  var today = dayjs().format('dddd, MMMM Do')
  var currentDay = document.querySelector("#currentDay");

  function displayDay() {
    currentDay.textContent = today;
  }

  $(".time-block").each(function () {
    var time = $(this).attr("id").split("-")[1]
    if (time == rightNow) {
      $(this).addClass("present");
    } else if (time < rightNow) {
      $(this).addClass("past")
    } else {
      $(this).addClass("future")
    }
  });



  // for (var i = 0; i < time.length; i++) {

  // if (hour.textContent === rightNow) {
  //   time[i].classList.add("present");
  // } else {
  //   if (hour.textContent < rightNow) {
  //     time[i].classList.add("past")
  //   } else {
  //     if (hour.textContent > rightNow) {
  //       time[i].classList.add("future")
  //     }
  //   }
  // };

  // }

  displayDay();
});
