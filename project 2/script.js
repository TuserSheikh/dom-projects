const btn = document.getElementById('btn');
const inputForColorCode = document.getElementById('colorCode');

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

btn.addEventListener('click', function () {
  const hexColorCode = generateRandomHexColor();

  inputForColorCode.value = hexColorCode;
  document.body.style.backgroundColor = hexColorCode;
});
