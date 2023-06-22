const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');



c.fillStyle = 'white'

let x = -15;

function draw() {

    requestAnimationFrame(draw);
    c.clearRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.arc(x, 150, 10, 0, 2 * Math.PI);
    c.fill()

    x++

    if (x > 400) {
        x = -15;
    }
}

draw()