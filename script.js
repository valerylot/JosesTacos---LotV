// Jose's Taco Truck
// The data is done. The page is not.

const truck = {
  name: "Jose's Taco Truck",
  tagline: "Same recipes, worse parking.",
  phone: "209-555-0147",
  soldOut: false
};

const special = {
  name: "Three birria tacos and a consome",
  price: 11.00,
  isFeatured: true
};

const schedule = [
  { day: "Monday", location: "Behind the laundromat on Pacific" },
  { day: "Tuesday", location: "Weber Ave, by the courthouse" },
  { day: "Wednesday", location: "Behind the laundromat on Pacific" },
  { day: "Thursday", location: "The lot on Hammer Lane" },
  { day: "Friday", location: "Victory Park, until we run out" }
];

const crew = ["Marisol", "Big Kevin", "Darnell"];

const todayIndex = 0;

// Your code goes below here.

const header = document.getElementById("truck-name");
header.textContent = truck.name;

const tagline = document.getElementById("tagline");
tagline.textContent = truck.tagline;

const specialName = document.getElementById("special");
specialName.textContent = special.name;

// Today's Special and Pricing
function price (num){
  let price = num.price;
  return `Today's special price is $${price}.`;
};

const specialPrice = document.getElementById("special-price");
specialPrice.textContent = price(special);

if(special.isFeatured){
  specialName.classList.add("featured");
};

// Status
const statusLine = document.getElementById("status");
statusLine.textContent = "Open now"

if(truck.soldOut){
  statusLine.textContent = "Sold out";
  statusLine.classList.add("closed");
};

// Crew List
const crewList = document.getElementById("crew-list");

for(let i = 0; i < crew.length; i++){
  const item = document.createElement("li");
  item.textContent = crew[i];
  crewList.appendChild(item);
};

// Schedule
const rows = document.querySelectorAll("#truck-schedule tr");

for(let i = 0; i < schedule.length; i++){
  const row = rows[i];

  row.children[0].textContent = schedule[i].day;
  row.children[1].textContent = schedule[i].location;
}

// Today Index
const dayOne = document.getElementById("day-one");
const dayOneLoc = document.getElementById("day-one-location");
dayOne.classList.add("today");
dayOneLoc.classList.add("today");

// Phone
const phoneNum = document.getElementById("phone");
phoneNum.textContent = truck.phone;
