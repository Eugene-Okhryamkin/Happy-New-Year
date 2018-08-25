var clock  = document.getElementById('clock');
var hny    = document.getElementById('happyNewYear');
var music  = document.getElementById('music');
hny.style.display = 'none';

function getTime() {
  var endTime = 'January 1, 2019 00:00';
  var time = new Date(endTime);
  var now = new Date();
  var timer = time - now;

  if (time > now) {
    var days = parseInt(timer / (60 * 60 * 1000 * 24));
    var hours = parseInt(timer / (60 * 60 * 1000)) % 24;
    var minutes = parseInt(timer / (1000 * 60)) % 60;
    var seconds = parseInt(timer / 1000) % 60;


    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    seconds.toString();

    clock.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
  }
  else {
    clock.style.display = 'none'
    hny.style.display   = 'block';
    music.play();
    
  }

}

setInterval(getTime, 1000);








