const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
const circle = document.getElementById("circle");
output.innerHTML = slider.value;

slider.oninput = function(event) {
    console.log(event);
    output.innerHTML = this.value;
    circle.style.width = this.value + "px";
    circle.style.height = this.value + "px";
}