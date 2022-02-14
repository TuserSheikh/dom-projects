const btnChangeColor = document.getElementById('btn');
const inputForColorCode = document.getElementById('colorCode');
const btnCopy = document.getElementById('btn-copy');

function generateRandomHexColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase();
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase();
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase();

  return `#${red}${green}${blue}`;
}

function changeBackgroundAndShowColorCode() {
  const hexColorCode = generateRandomHexColor();
  inputForColorCode.value = hexColorCode;
  document.body.style.backgroundColor = hexColorCode;
}

btnChangeColor.addEventListener('click', function () {
  changeBackgroundAndShowColorCode();
});

btnCopy.addEventListener('click', function () {
  navigator.clipboard.writeText(inputForColorCode.value);
});

window.onload = function () {
  changeBackgroundAndShowColorCode();
};
