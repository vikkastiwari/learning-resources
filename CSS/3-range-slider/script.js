const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function(event) {
    console.log(event);
    output.innerHTML = this.value;
}