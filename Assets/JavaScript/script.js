$(function () {

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

  displayDay();
});
