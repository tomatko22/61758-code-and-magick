'use strict';
var cloudWidth = 420;
var cloudHeight = 270;
var cloudX = 100;
var cloudY = 10;
var shift = 10;
var paddingTop = 25;
var paddingLeft = 30;
var paddingBottom = 20;

var indent = 50;
var initPositionX = 150;
var initPositionY = 250;
var columnWidth = 40;
var indentTimesValue = 10;


// Функция, возвращающая случайное число между 0 (включительно) и 1 (не включая 1)
var getRandomNum = function () {
 return Math.random();
}

window.renderStatistics = function (ctx, names, times) {
// Рисуем облако c тенью
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloudX + shift, cloudY + shift, cloudWidth, cloudHeight);

  ctx.fillStyle = 'white';
  ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);

// Сообщение в облаке
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', cloudX + paddingLeft, cloudY + paddingTop);
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', cloudX + paddingLeft, cloudY + paddingTop * 2);

// Находим максимальное значение времени
  var maxTime = times[0];

  for (var i = 0; i < times.length; i ++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

// Находим коэфф для вычисления высоты колонок
  var histogramHeight = 150;
  var rate = histogramHeight / (maxTime - 0);

// Рисуем гистограмму
  for (var i = 0; i < times.length; i++) {
    var columnHeigth = -(Math.floor(times[i] * rate));
    if (names[i] === 'Вы') {
          ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
          var saturation = (getRandomNum()).toFixed(1);
          ctx.fillStyle = 'rgba(0, 0, 255, ' + saturation +')';
        }
    ctx.fillRect(initPositionX + columnWidth * i + indent * i, initPositionY, columnWidth, columnHeigth);
    ctx.fillStyle = '#222';
    ctx.fillText(names[i], initPositionX + columnWidth * i + indent * i, initPositionY + paddingBottom);
    ctx.fillText(Math.floor(times[i] / 1000) + 'сек', initPositionX + columnWidth * i + indent * i, initPositionY + columnHeigth - indentTimesValue);
  }
};