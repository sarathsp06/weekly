var timer;


function getCountDownTime() {
  let time = localStorage.getItem('Countdown');
  if (time == null || time == "") {
    return null
  }
  return parseDate(time);
}

function saveCountDownTime(time) {
  localStorage.setItem('Countdown', time);
}

function displayConter(days, hours, minutes, seconds,over) {
  document.getElementById("days").textContent = Math.trunc(days);
  document.getElementById("hours").textContent = ("0" + Math.trunc(hours)).slice(-2);
  document.getElementById("minutes").textContent = ("0" + Math.trunc(minutes)).slice(-2);
  document.getElementById("seconds").textContent = ("0" + Math.trunc(seconds)).slice(-2);
  if (over === true && document.getElementById("over").style.display != "block") {
    document.getElementById("over").style.display = "inline";
  } else {
    document.getElementById("over").style.display = "none";
  }
}


function run(dateEnd) {
  return function() {
    var dateStart = new Date();
    var timeRemaining = (dateEnd - dateStart.getTime()) / 1000;
    var over = false
    if (timeRemaining < 0) {
      timeRemaining = 0 - timeRemaining
      over = true;
    }

    var days, hours, minutes, seconds;
    days = timeRemaining / 86400;
    timeRemaining = timeRemaining % 86400;
    hours = timeRemaining / 3600;
    timeRemaining = timeRemaining % 3600;
    minutes = timeRemaining / 60;
    timeRemaining = timeRemaining % 60;
    seconds = timeRemaining;
    displayConter(days, hours, minutes, seconds,over);
  }
}

function clearTimer() {
  if (timer != null) {
    clearInterval(timer);
    timer = null;
  }
}

function countdown(dateEnd) {
  clearTimer();
  dateEnd = dateEnd.getTime();
  run(dateEnd)();
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
    window.focus();
    document.getElementById("dateInput").focus();
  } else {
    document.getElementById("countdown").style.display = "flex";
    document.getElementById("dateInput").style.display = "none";
    timer = countdown(time);
  }
}


config()
load()
