let display=document.getElementById("screen");

function allclear(){
    display.value="";

}

function show(value){
  if (value === "%") {
    const currentValue = parseFloat(display.value);
    const percentageValue = currentValue / 100;
    display.value = percentageValue;
  } else {
    display.value += value;
  }
}

function calc(){
    display.value = eval(display.value);
}
