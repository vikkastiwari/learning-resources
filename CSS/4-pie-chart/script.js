const piechart = document.querySelector('.piechart');
document.querySelector('#inputHandler').addEventListener("input", (e) => {
    piechart.style = `--percentage:${e.target.value}%`;
})