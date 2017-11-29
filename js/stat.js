'use strict';

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var showStatisticsWindow = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.fillText('Список результатов:', 125, 60);
};

window.renderStatistics = function (ctx, names, times) {
  showStatisticsWindow(ctx);
  var max = getMaxElement(times);
  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 250;

  for (var j = 0; j < times.length; j++) {
    var barHeight = Math.floor(times[j]) * -step;
    var barPositionX = initialX + (indent + barWidth) * j;
    var barPositionY = initialY + 15;
    var timePositionY = barHeight + initialY - 15;
    var randomOpacity = (Math.random() * (1 - 0.2) + 0.2);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[j], barPositionX, barPositionY);
    ctx.fillText(Math.floor(times[j]), barPositionX, timePositionY);
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(2, 14, 134,' + randomOpacity + ' )';
    }
    ctx.fillRect(barPositionX, initialY, barWidth, barHeight);
  }
};
