const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

var alarms = [];
var id = 1;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function stopSound(){
  document.getElementById("audioAlarm").pause();
}


function startSound(){
  document.getElementById("audioAlarm").play();
}

const setTime = () => {
  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  var alarmslist = JSON.parse(localStorage.getItem("alarms")) || [];
  for (let i = 0; i < alarmslist.length; i++) {
    const alarm = alarmslist[i];
    if (alarm.hour == hoursForClock && alarm.minute == minutes && alarm.format == ampm && alarm.status) {
      alarmslist.splice(i, 1);
      localStorage.setItem("alarms", JSON.stringify(alarms));
      document.getElementById("alarm_"+alarm.id).remove();

      document.getElementById("play").onclick();
      //document.getElementById("audioAlarm").play();

      break;
    }
  }
  alarms = alarmslist;

  hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeElement.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};

function getAlarmDiv(details) {
  let div = document.createElement('div');
  div.className = 'alarmDetail';
  div.id = 'alarm_'+details.id;
  div.innerHTML = `
    <span>${details.hour}</span>:
    <span>${details.minute}</span>
    <span>${details.format}</span>
    <label class="switch">
      <input type="checkbox" ${details.status ? 'checked' : ''}>
      <span class="slider round"></span>
    </label>

  `;
  return div;
}

function renderAlarm(alarm) {
  let div = getAlarmDiv(alarm);
  let container = document.querySelector('#alarmContainer');
  container.appendChild(div);
  id++;
}


function renderAlarms() {
  alarms = JSON.parse(localStorage.getItem("alarms")) || [];
  for (var obj of alarms) {
    renderAlarm(obj);
  }
}



function addAlarm(){
  let hourInput = document.querySelector('#hourInput').value;
  let minuteInput = document.querySelector('#minuteInput').value;
  let amPM = document.querySelector('#amPM').value;

  var details = {};
  details.hour = hourInput;
  details.minute = minuteInput;
  details.format = amPM;
  details.status = true;
  details.id = id;

  var alarms = JSON.parse(localStorage.getItem("alarms")) || [];
  alarms.push(details);
  localStorage.setItem("alarms", JSON.stringify(alarms));

  alarms.push(details);
  renderAlarm(details);

}

(function (){
  renderAlarms()
}).call(this);

setTime();

setInterval(setTime, 1000);

//Hour Input
const hourInput = document.querySelector('#hourInput');
hourInput.addEventListener('input', () => {
  hourInput.value = hourInput.value.replace(/[^0-9]/g, ''); // allow only digits
  var hrValue = parseInt(hourInput.value)
  if(hrValue <= 0 || hrValue >= 11){
    hourInput.value = "11";
  }
});

//Minute Input
const minuteInput = document.querySelector('#minuteInput');
minuteInput.addEventListener('input', () => {
  minuteInput.value = minuteInput.value.replace(/[^0-9]/g, ''); // allow only digits
  var minuteValue = parseInt(minuteInput.value)
  if(minuteValue <= 0 || minuteValue >= 59){
    minuteInput.value = "59";
  }
});
