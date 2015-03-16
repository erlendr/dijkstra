(function(){
  var board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-10, 10, 10, -10],
    axis: true,
    showCopyright: false,
  });

  var pointA = [5,0];
  var pointB = [1,7];
  var pointC = [-5,1];
  var pointD = [5,7];

  //Add points for triangle
  var pointAPoint = board.create('point', pointA, {
    name: 'A',
    strokecolor: 'red',
  });

  var pointBPoint = board.create('point', pointB, {
    name: 'B',
    strokecolor: 'red',
  });

  var pointCPoint = board.create('point', pointC, {
    name: 'C',
    strokecolor: 'red',
  });

  var pointDPoint = board.create('point', pointD, {
    name: 'D',
    strokecolor: 'red',
  });

  var lineAC = board.create('line', [pointAPoint, pointCPoint], {
    straightFirst: false,
    straightLast: false, 
    strokeWidth: 2,
  });

  var lineAB = board.create('line', [pointAPoint, pointBPoint], {
    straightFirst: false,
    straightLast: false, 
    strokeWidth: 2,
  });

  var lineAD = board.create('line', [pointAPoint, pointDPoint], {
    straightFirst: false,
    straightLast: false, 
    strokeWidth: 2,
  });

})();

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2-x1, 2) +Math.pow(y2-y1, 2)); 
}