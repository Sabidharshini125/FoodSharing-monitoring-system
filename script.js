// let receivedRecords = [];
// let availableFood = [];

// function donateFood() {
//     const donorName = document.getElementById('donorName').value;
//     const foodType = document.getElementById('foodType').value;
//     const quantity = document.getElementById('quantity').value;

//     const record = {
//         donor: donorName,
//         foodType: foodType,
//         quantity: quantity
//     };

//     receivedRecords.push(record);
//     displayReceivedRecords();
// }

// function askForFood() {
//     const ngoName = document.getElementById('ngoName').value;
//     const foodNeeded = document.getElementById('foodNeeded').value;
//     const quantityNeeded = document.getElementById('quantityNeeded').value;

//     const foodRequest = {
//         ngo: ngoName,
//         foodType: foodNeeded,
//         quantity: quantityNeeded
//     };

//     availableFood.push(foodRequest);
//     displayAvailableFood();
// }

// function displayReceivedRecords() {
//     const receivedList = document.getElementById('receivedRecords');
//     receivedList.innerHTML = '';

//     receivedRecords.forEach(record => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${record.donor} donated ${record.quantity} kg of ${record.foodType}`;
//         receivedList.appendChild(listItem);
//     });
// }

// function displayAvailableFood() {
//     const availableList = document.getElementById('availableFood');
//     availableList.innerHTML = '';

//     availableFood.forEach(food => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${food.ngo} needs ${food.quantity} kg of ${food.foodType}`;
//         availableList.appendChild(listItem);
//     });
// }

const body = document.body;
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const collapsedClass = "collapsed";
collapseBtn.addEventListener("click", function() {
  body.classList.toggle(collapsedClass);
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
});

const html = document.documentElement;
const switchLabel = document.querySelector(".switch label");
const switchLabelText = switchLabel.querySelector("span:last-child");
const lightModeClass = "light-mode";
switchInput.addEventListener("input", function () {
  html.classList.toggle(lightModeClass);
  if (html.classList.contains(lightModeClass)) {
    switchLabelText.textContent = "Light";
  } else {
    switchLabelText.textContent = "Dark";
  }
});
if (localStorage.getItem("dark-mode") === "false") {
    html.classList.add(lightModeClass);
    switchInput.checked = false;
    switchLabelText.textContent = "Light";
  }
  switchInput.addEventListener("input", function () {
    if (html.classList.contains(lightModeClass)) {
      localStorage.setItem("dark-mode", "false");
    } else {
      localStorage.setItem("dark-mode", "true");
    }
  });
