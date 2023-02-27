"use strict"
let travel = prompt("Sayohat uchun ketadigan summa:")

let dollar1=500;
let dollar2=250;
let euro=120;

let expenses= (dollar1+dollar2)*10650.34 + euro*11650.03;

let title = document.querySelector(".heading");
if(travel >= expenses){
  title.textContent = "Oq yo'l , Alisher";
  console.log("Oq yo'l ,  Alisher");
}
else{
  title.textContent = "Sizda yetarli mablag' mavjud emas";
  console.log("Sizda yetarli mablag' mavjud emas");
}


