const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
$ham.addEventListener("click", () => {
  $hd.classList.toggle("on");
});

function loadItems() {
  return fetch(
    "https://www.7timer.info/bin/api.pl?lon=127.354&lat=36.382&product=civillight&output=json"
  ) //
    .then((response) => response.json())
    .then((json) => json.dataseries);
}

function displayItems(items) {
  const container = document.querySelector("#app");
  const info = items[0];
  container.innerHTML = `
  <p>${info.date}</p>
  <p><img src="./image/${info.weather}.png" alt="날씨아이콘" /></p>
  <p class="temp">
    <span>최고온도 : ${info.temp2m.max} &#8451;</span>
    <span>최저온도 : ${info.temp2m.min} &#8451;</span>
  </p>
  `;
}

loadItems() //
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);

let swiper = new Swiper(".slide1", {
  pagination: {
    el: ".pg1",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});
