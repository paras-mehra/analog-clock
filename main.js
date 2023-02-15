let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let setClock = setInterval(() => {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let cal_Hr = hr * 30 + min / 2;
  let cal_Min = min * 6 + sec / 10;
  let cal_Sec = sec * 6;

  hour.style.transform = `rotate(${cal_Hr}deg)`;
  minute.style.transform = `rotate(${cal_Min}deg)`;
  seconds.style.transform = `rotate(${cal_Sec}deg)`;
}, 1000);
