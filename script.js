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
}

const specialPrice = document.getElementById("special-price");
specialPrice.textContent = price(special);

if(special.isFeatured){
  specialName.classList.add("featured");
}

// Status
const statusLine = document.getElementById("status");
statusLine.textContent = "Open now"

if(truck.soldOut){
  statusLine.textContent = "Sold out";
  statusLine.classList.add("closed");
}

// Crew List
const crewList = document.getElementById("crew-list");

for(let i = 0; i < crew.length; i++){
  const item = document.createElement("li");
  item.textContent = crew[i];
  crewList.appendChild(item);
}

// Schedule
const dayOne = document.getElementById("day-one");
const dayOneLoc = document.getElementById("day-one-location");
dayOne.textContent = schedule[0].day;
dayOneLoc.textContent = schedule[0].location;

const dayTwo = document.getElementById("day-two");
const dayTwoLoc = document.getElementById("day-two-location");
dayTwo.textContent = schedule[1].day;
dayTwoLoc.textContent = schedule[1].location;

const dayThree = document.getElementById("day-three");
const dayThreeLoc = document.getElementById("day-three-location");
dayThree.textContent = schedule[2].day;
dayThreeLoc.textContent = schedule[2].location;

const dayFour = document.getElementById("day-four");
const dayFourLoc = document.getElementById("day-four-location");
dayFour.textContent = schedule[3].day;
dayFourLoc.textContent = schedule[3].location;

const dayFive = document.getElementById("day-five");
const dayFiveLoc = document.getElementById("day-five-location");
dayFive.textContent = schedule[4].day;
dayFiveLoc.textContent = schedule[4].location;

// Today Index
dayOne.classList.add("today");
dayOneLoc.classList.add("today");

// Phone
const phoneNum = document.getElementById("phone");
phoneNum.textContent = truck.phone;
