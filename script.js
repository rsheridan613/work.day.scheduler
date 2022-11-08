$(document).ready(function () {
  var dateEl = $("#currentDay");
  var saveBtnEl = $(".saveBtn");
  var saved = JSON.parse(localStorage.getItem("saved"));

  $(function () {
    // save to local storage on button click
    saveBtnEl.on("click", function () {
      var userInput = $(this).siblings(".description").val();
      var hour = this.parentElement.id;
      var temp = JSON.parse(localStorage.getItem("saved")) || [];
      console.log(temp);
      temp.push({ hour, userInput });

      localStorage.setItem("saved", JSON.stringify(temp));
      console.log(localStorage.getItem("saved"));
    });

    //get from local storage
    $(".description").each(function (index, value) {
      console.log(saved);
      let id = $(this).parent().attr("id");
      if (saved !== null) {
        for (let i = 0; i < saved.length; i++) {
          const element = saved[i];
          if (id == element.hour) {
            $(this).text(element.userInput);
          }
        }
      }
    });

    //change color of background
    //9am

    if (dayjs().format("H") > 9) {
      $("#hour-9").addClass("past");
    } else if (dayjs().format("H") == 9) {
      $("#hour-9").addClass("present");
    } else if (dayjs().format("H") < 9) {
      $("#hour-9").addClass("future");
    }
    //10am
    if (dayjs().format("H") > 10) {
      $("#hour-10").addClass("past");
    } else if (dayjs().format("H") == 10) {
      $("#hour-10").addClass("present");
    } else if (dayjs().format("H") < 10) {
      $("#hour-10").addClass("future");
    }
    //11am
    if (dayjs().format("H") > 11) {
      $("#hour-11").addClass("past");
    } else if (dayjs().format("H") == 11) {
      $("#hour-11").addClass("present");
    } else if (dayjs().format("H") < 11) {
      $("#hour-11").addClass("future");
    }
    //12pm
    if (dayjs().format("H") > 12) {
      $("#hour-12").addClass("past");
    } else if (dayjs().format("H") == 12) {
      $("#hour-12").addClass("present");
    } else if (dayjs().format("H") < 12) {
      $("#hour-12").addClass("future");
    }
    //1pm
    if (dayjs().format("H") > 13) {
      $("#hour-13").addClass("past");
    } else if (dayjs().format("H") == 13) {
      $("#hour-13").addClass("present");
    } else if (dayjs().format("H") < 13) {
      $("#hour-13").addClass("future");
    }
    //2pm
    if (dayjs().format("H") > 14) {
      $("#hour-14").addClass("past");
    } else if (dayjs().format("H") == 14) {
      $("#hour-14").addClass("present");
    } else if (dayjs().format("H") < 14) {
      $("#hour-14").addClass("future");
    }
    //3pm
    if (dayjs().format("H") > 15) {
      $("#hour-15").addClass("past");
    } else if (dayjs().format("H") == 15) {
      $("#hour-15").addClass("present");
    } else if (dayjs().format("H") < 15) {
      $("#hour-15").addClass("future");
    }
    //4pm
    if (dayjs().format("H") > 16) {
      $("#hour-16").addClass("past");
    } else if (dayjs().format("H") == 16) {
      $("#hour-16").addClass("present");
    } else if (dayjs().format("H") < 16) {
      $("#hour-16").addClass("future");
    }
    //5pm
    if (dayjs().format("H") > 17) {
      $("#hour-17").addClass("past");
    } else if (dayjs().format("H") == 17) {
      $("#hour-17").addClass("present");
    } else if (dayjs().format("H") < 17) {
      $("#hour-17").addClass("future");
    }
    //Date on the header
    dateEl.text(dayjs().format("dddd, MMMM D"));
  });
});
