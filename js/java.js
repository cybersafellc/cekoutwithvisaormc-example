// name on form to on card

const nameOnCard = document.querySelector("#nameOnCard");
const outpotNameOnCard = document.querySelector("#NameOnDebitCardMain");
const outputGcCard = document.querySelector("#outputGiftCard");

nameOnCard.addEventListener("input", function () {
  outpotNameOnCard.innerHTML = nameOnCard.value;
  outputGcCard.innerHTML = nameOnCard.value;
});

// name on form to on card end

// number card
const numberCardOnInput = document.querySelector("#numberCardInput");
const numberCardOnOutput = document.querySelector("#numberCardOutput");
numberCardOnInput.addEventListener("input", function () {
  var modifvalue = numberCardOnInput.value.replace(/-/g, " ");
  numberCardOnOutput.innerHTML = modifvalue;
  if (numberCardOnInput.value.length === 4 || numberCardOnInput.value.length === 9 || numberCardOnInput.value.length === 14) {
    numberCardOnInput.value += "-";
  }
});
// number card end

// exp start
const expdatemy = document.querySelector("#ExpiredDateMonth");
const expOutput = document.querySelector("#expoutput");

expdatemy.addEventListener("input", function () {
  if (expdatemy.value.length == 2) {
    expdatemy.value += "/";
  }
  expOutput.innerHTML = expdatemy.value;
});
// exp end

// cvv start
const cvvInput = document.querySelector("#inputCVV");
const cvvoutput = document.querySelector("#cvvOutput");

cvvInput.addEventListener("input", function () {
  cvvoutput.innerHTML = cvvInput.value;
});
// cvv end

// visa or mc start
const inputmcorvisa = document.querySelector("#floatingSelect");
const outputLogovisa = document.querySelector("#outputLogovisa");
const outputLogoMc = document.querySelector("#outputLogoMc");

inputmcorvisa.addEventListener("input", function () {
  if (inputmcorvisa.value == 1) {
    outputLogovisa.classList.add("view");
    outputLogoMc.classList.remove("view");
  } else if (inputmcorvisa.value == 2) {
    outputLogoMc.classList.add("view");
    outputLogovisa.classList.remove("view");
  } else if (inputmcorvisa.value == 3) {
    outputLogoMc.classList.remove("view");
    outputLogovisa.classList.remove("view");
  }
});
// visa or mc end

// value dollar start
const inputValueDonate = document.querySelector("#inputValueDonate");
const outputValueDonate = document.querySelector("#outputValueDonate");

inputValueDonate.addEventListener("input", function () {
  outputValueDonate.innerHTML = inputValueDonate.value;
});
// value dollar end
