var num = 100;
var radius = 2;
var radius2 = 1;
var max = 1920;
createRandomNodes(100, 2, 1920);


function createRandomNodes(num, radius, max) {
    var canvas = document.getElementById("canv");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i <=num; i++) {
        context.beginPath();
        var rand_x = Math.random(i) * max;
        var rand_y = Math.random(i) * max;
        context.fillStyle = 'rgb(255, 255, 255)';
        context.arc(rand_x, rand_y, radius, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
}

createRandomNodes2(100, 1, 1920);
function createRandomNodes2(num, radius2, max) {
    var canvas = document.getElementById("canv");
    var context = canvas.getContext("2d");
    for (var i = 0; i <=num; i++) {
        context.beginPath();
        var rand_x = Math.random(i) * max;
        var rand_y = Math.random(i) * max;
        context.fillStyle = 'rgb(255, 255, 255)';
        context.arc(rand_x, rand_y, radius2, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
}