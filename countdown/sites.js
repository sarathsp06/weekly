function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  document.getElementById("countdown").style.height = window.innerHeight + ' px';
  for (var span of document.getElementsByClassName("span")) {
    span.addEventListener('click', function (event) {
      alert(JSON.Stringofy(event));}
    );
  }

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) return;
  calculate();
  timer = setInterval(calculate, 1000);

  function calculate() {
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
  function display(days, hours, minutes, seconds) {}
}


function getCountDownTime() {
  let countdown = localStorage.getItem('Countdown');
}

countdown("2019-09-05T10:10:00.000+05:30");
