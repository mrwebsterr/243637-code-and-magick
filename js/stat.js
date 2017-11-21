'use strict';

var getMaxElement = function (arr) {
  var max = -1;
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (element > max) {
      max = element;
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.fillText('Список результатов:', 125, 60);
  var max = getMaxElement(times);
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 250;

  for (var j = 0; j < times.length; j++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(names[j], initialX + (indent + barWidth) * j, initialY + 15);
    ctx.fillText(Math.floor(times[j]), initialX + (indent + barWidth) * j, Math.floor(times[j]) * -step + initialY - 15);
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(2, 14, 134,' + (Math.random() * (1 - 0.2) + 0.2) + ' )';
    }
    ctx.fillRect(initialX + (indent + barWidth) * j, initialY, barWidth, Math.floor(times[j]) * -step);
  }
};
