const body = document.querySelector('body');

const colorsList = document.getElementsByClassName('color');
colorsList[0].style.backgroundColor = 'black';

const pixelList = document.getElementsByClassName('pixel');

const clearBtn = document.getElementById('clear-board');

const generateBtn = document.getElementById('generate-board');

// Função responsável por selecionar a cor da paleta
function selectColor(e) {
  for (let i = 0; i < colorsList.length; i += 1) {
    colorsList[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

// Adiciona o evento selectColor a paleta de cores
function defineColorEvent() {
  for (let i = 0; i < colorsList.length; i += 1) {
    colorsList[i].addEventListener('click', selectColor);
  }
}

defineColorEvent();

// Função responsável por pintar os pixels
function pixelPainter(e) {
  const newColor = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = newColor;
}

// Adiciona o evento pixelPainter aos pixels
function definePixelEvent() {
  for (let i = 0; i < pixelList.length; i += 1) {
    pixelList[i].addEventListener('click', pixelPainter);
  }
}

definePixelEvent();

// Função responsável por criar novas boards
function newBoard(number) {
  const newPixelBoard = document.createElement('div');
  newPixelBoard.id = 'pixel-board';
  body.appendChild(newPixelBoard);
  let newNumber = number;
  if (newNumber < 5) {
    newNumber = 5;
  } else if (newNumber > 50) { newNumber = 50; }
  for (let line = 0; line < newNumber; line += 1) {
    const newPixelLine = document.createElement('div'); newPixelLine.classList = (`line ${line}`);
    newPixelBoard.appendChild(newPixelLine);
    for (let column = 0; column < newNumber; column += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList = 'pixel';
      newPixel.style.backgroundColor = 'white';
      newPixelLine.appendChild(newPixel);
    }
  }
  definePixelEvent();
}

// Função responsável por reiniciar as cores
function clearBoard() {
  for (let i = 0; i < pixelList.length; i += 1) {
    pixelList[i].style.backgroundColor = 'white';
  }
}

// Adiciona a função que reinicia as cores
clearBtn.addEventListener('click', clearBoard);

// Função responsável por deletar a board atual
function deleteBoard() {
  const newBoardInput = document.getElementById('board-size');
  const numberBoard = newBoardInput.value;
  const oldBoardList = document.getElementsByClassName('pixel');
  const oldBoardLine = document.getElementsByClassName('line');
  const oldBoard = document.getElementById('pixel-board');
  if (numberBoard === '') {
    alert('Board Inválido!');
  } else {
    oldBoard.remove();
    for (let i = 0; i < oldBoardList.length; i += 1) {
      oldBoardList[i].remove();
      oldBoardLine[i].remove();
    }
    newBoard(numberBoard);
  }
}

// Adiciona a função que deleta a board atual
generateBtn.addEventListener('click', deleteBoard);

// Função responsável por embaralhar as cores num leque de possíveis cores
const allColors = [
  'IndianRed',
  'LightCoral',
  'Salmon',
  'DarkSalmon',
  'LightSalmon',
  'Crimson',
  'Red',
  'FireBrick',
  'DarkRed',
  'DarkSlateGray',
  'SlateGray',
  'LightSlateGray',
  'DimGray',
  'Gray',
  'DarkGray',
  'Silver',
  'Maroon',
  'Brown',
  'Sienna',
  'SaddleBrown',
  'Chocolate',
  'Peru',
  'DarkGoldenrod',
  'Goldenrod',
  'SandyBrown',
  'RosyBrown',
  'MidnightBlue',
  'Navy',
  'DarkBlue',
  'MediumBlue',
  'Blue',
  'RoyalBlue',
  'MediumSlateBlue',
  'CornflowerBlue',
  'DodgerBlue',
  'DeepSkyBlue',
  'LightSkyBlue',
  'LightSteelBlue',
  'SteelBlue',
  'CadetBlue',
  'DarkTurquoise',
  'MediumTurquoise',
  'Turquoise',
  'Aqua',
  'DarkSeaGreen',
  'MediumAquamarine',
  'DarkOliveGreen',
  'Olive',
  'OliveDrab',
  'YellowGreen',
  'DarkGreen',
  'Green',
  'ForestGreen',
  'SeaGreen',
  'MediumSeaGreen',
  'SpringGreen',
  'MediumSpringGreen',
  'LightGreen',
  'LimeGreen',
  'Lime',
  'LawnGreen',
  'Indigo',
  'Purple',
  'DarkMagenta',
  'DarkOrchid',
  'DarkViolet',
  'RebeccaPurple',
  'MediumOrchid',
  'MediumPurple',
  'Magenta',
  'Violet',
  'Plum',
  'DarkKhaki',
  'Khaki',
  'Yellow',
  'Orange',
  'DarkOrange',
  'OrangeRed',
  'Tomato',
  'Coral',
  'DeepPink',
  'HotPink',
  'MediumVioletRed',
];

function randomizeColor() {
  const randomColor1 = allColors[Math.floor(Math.random() * allColors.length)];
  const randomColor2 = allColors[Math.floor(Math.random() * allColors.length)];
  const randomColor3 = allColors[Math.floor(Math.random() * allColors.length)];
  const randomColor4 = allColors[Math.floor(Math.random() * allColors.length)];
  const randomColor5 = allColors[Math.floor(Math.random() * allColors.length)];
  colorsList[1].style.backgroundColor = randomColor1;
  colorsList[2].style.backgroundColor = randomColor2;
  colorsList[3].style.backgroundColor = randomColor3;
  if (randomColor1 === randomColor2 || randomColor1 === randomColor3) {
    colorsList[1].style.backgroundColor = randomColor4;
  }
  if (randomColor2 === randomColor3) {
    colorsList[2].style.backgroundColor = randomColor5;
  }

  console.log(randomColor1, randomColor2, randomColor3, randomColor4, randomColor5);
}
window.onload = function initialize() {
  randomizeColor();
};
