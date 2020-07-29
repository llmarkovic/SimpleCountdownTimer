const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2020,7,5,11,30,0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);

  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / 1000);

  function format(item) {
    if(item < 10) {
      return item = `0${item}`
    } else
      return item;
  }

  const values = [days, hours, minutes, seconds];
  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });

  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway is expired</h4>`
  }
}; 

let countdown = setInterval(getRemainingTime, 1000);


getRemainingTime();