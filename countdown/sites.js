var timer;


function getCountDownTime() {
  let time = localStorage.getItem('Countdown');
  if (time == null || time == "") {
    return null
  }
  return chrono.parseDate(time);
}


function saveCountDownTime(time) {
  localStorage.setItem('Countdown', time);
}


function run(dateEnd) {
  return function() {
    var timer, days, hours, minutes, seconds;
    var dateStart = new Date();
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);
    if (timeRemaining < 0) {
      return
    }
    days = parseInt(timeRemaining / 86400);
    timeRemaining = timeRemaining % 86400;
    hours = parseInt(timeRemaining / 3600);
    timeRemaining = timeRemaining % 3600;
    minutes = parseInt(timeRemaining / 60);
    timeRemaining = timeRemaining % 60;
    seconds = parseInt(timeRemaining);

    document.getElementById("days").innerHTML = parseInt(days, 10);
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
  }
}

function countdown(dateEnd) {
  if (timer != null) {
    clearInterval(timer);
  }
  dateEnd = dateEnd.getTime();
  run(dateEnd);
  timer = setInterval(run(dateEnd), 1000);
  return timer;
}


function config() {
  let input = document.getElementById("dateInput")
  let clear = document.getElementById("info")
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      saveCountDownTime(input.value);
      load()
    }
  });

  clear.addEventListener('click', function(event) {
    saveCountDownTime("");
    load();
  });
}


function load() {
  time = getCountDownTime();
  if (time == null) {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("dateInput").style.display = "flex";
  } else {
    document.getElementById("countdown").style.display = "flex";
    document.getElementById("dateInput").style.display = "none";
    timer = countdown(time);
  }
}


config()
load()
