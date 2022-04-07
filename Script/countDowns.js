const fallDays = document.querySelector(".card.fall span");
const footballDays = document.querySelector(".card.football span");
const marchDays = document.querySelector(".card.march span");
const summerDays = document.querySelector(".card.summer span");

document.querySelector(".card.fall").addEventListener("mouseenter", () => {
  fallDays.innerText = dayDifference(7, 29);
});
document.querySelector(".card.football").addEventListener("mouseenter", () => {
  footballDays.innerText = dayDifference(8, 23);
});
document.querySelector(".card.march").addEventListener("mouseenter", () => {
  marchDays.innerText = dayDifference(2, 15);
});
document.querySelector(".card.summer").addEventListener("mouseenter", () => {
  summerDays.innerText = dayDifference(2, 30);
});

function dayDifference(month, day) {
  const today = new Date();
  const date = new Date(today.getFullYear(), month, day);

  if (today.getMonth() == 2 && today.getDate() > 30) {
    date.setFullYear(date.getFullYear() + 1);
  }
  if (
    date.getMonth() < today.getMonth() ||
    (date.getMonth() === today.getMonth() && date.getDate < today.getDate())
  ) {
    date.setFullYear(today.getFullYear() + 1);
  }

  const one_day = 1000 * 60 * 60 * 24;

  return Math.ceil((date.getTime() - today.getTime()) / one_day);
}