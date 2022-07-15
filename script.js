const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipPerPeerson = document.getElementById("tip-value");
const totalPerPerson = document.getElementById("total-value");
const tips = document.querySelectorAll(".tipbutton");
const customTip = document.getElementById("custom");
const resetbutton = document.getElementById("reset");


billInput.addEventListener("input", billInputfun);

peopleInput.addEventListener("input", peopleInputfun);

tips.forEach(function(val) {
val.addEventListener('click' , handleClick)
}); 

customTip.addEventListener("input" , custominput )

resetbutton.addEventListener("click" , reset)

billInput.value = "0";
peopleInput.value = "1";
tipPerPeerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputfun() {
    billValue = parseFloat(billInput.value)
    calculateTip();
}

function peopleInputfun() {
    peopleValue = parseFloat(peopleInput.value)
    calculateTip();
}

function handleClick(event) {
    tips.forEach(function(val) {
        val.classList.remove("active-tip");
        if (event.target.innerHTML == val.innerHTML) {
          val.classList.add("active-tip");
          tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
}

function custominput() {
    tipValue = parseFloat(customTip.value / 100);

    tips.forEach(function(val) { 
    val.classList.remove("active-tip")
})
calculateTip();
}

function reset() {
      billInput.value = 0;
      peopleInput.value = 1;
      tipPerPeerson.innerHTML = "$" + (0.0).toFixed(2);
      totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
}

function calculateTip()  {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let halfTotal = billValue / peopleValue;
        let total = halfTotal + tipAmount;
        tipPerPeerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}
