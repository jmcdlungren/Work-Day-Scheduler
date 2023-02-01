$(function () {

  // Sets function for the save button. Any time the save button is clicked, it's sibling (the text box) is saved to local storage.
  $(".saveBtn").on("click", function saveTodo() {
    var description = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    console.log(description);
    localStorage.setItem(hour, description);
  });

  // Sets function for whenever the page is refreshed. The local storage will then be retrieved and applied to the text box it was saved in above.
  for (i = 9; i <= 17; i++) {
    var data = localStorage.getItem("hour-" + i)
    $("#hour-" + i).children(".description").val(data)
  };

  // Sets up variables for the time functions.
  var rightNow = dayjs().hour();
  var today = dayjs().format('dddd, MMMM Do')
  var currentDay = document.querySelector("#currentDay");

  // Sets up function to display the current day in the header.
  function displayDay() {
    currentDay.textContent = today;
  }

  // Sets up function to change the background color of each list "time-block" list item, depending on what time it is and whether that block of time is in the past, present, or future.
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

  // Calls the function to actually display the day in the header.
  displayDay();
});
