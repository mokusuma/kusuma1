const canvas = document.querySelector('canvas');
const userName = document.querySelector('.name');
const nameOutput = document.querySelector('.name-output');
const playButton = document.querySelector('.play');
const front = document.querySelector('.front');
const filter = document.querySelector('.modal-filter');
const timerElement = document.querySelector('.timer');
const warning = document.querySelector('#alert');
const DKey = document.querySelector('#D');
const FKey = document.querySelector('#F');
const JKey = document.querySelector('#J');
const KKey = document.querySelector('#D');
const lightD = document.querySelector('#light-1');
const lightF = document.querySelector('#light-2');
const lightK = document.querySelector('#light-3');
const lightL = document.querySelector('#light-4');
const score = document.querySelector('#score')
const fail = document.querySelector('#fail')

// menambahkan key pada button
document.addEventListener('keydown', function(event) {
    if(event.key === 'd' || event.key === 'D'){
        DKey.click();
    }
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'f' || event.key === 'F'){
        FKey.click();
    }
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'j' || event.key === 'J'){
        JKey.click();
    }
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'k' || event.key === 'K'){
        KKey.click();
    }
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        playButton.click();
    }
});

// buat canvas
const c = canvas.getContext('2d');

c.strokeStyle = '#000';

// membuat garis pada canvas
c.beginPath();
c.moveTo(100, 0);
c.lineTo(100, 600)
c.moveTo(200, 0);
c.lineTo(200, 600)
c.moveTo(300, 0);
c.lineTo(300, 600)
c.moveTo(400, 0);
c.lineTo(400, 600)

c.stroke();

// var untuk waktu
let second = 0;
let minute = 0;
let interval;

// var img
let img = new Image();
let x = -50;
img.src = 'virus.svg';

let filterValue = 3;

// function saat tombol ditekan
function play(){
    // membrikan username dan menghilangkan bgian belakang modal
    nameOutput.textContent = userName.value
    front.style.display = 'none'
    
    // menolak saat username tidak terisi
    if(!userName.value) {
            warning.style.display = 'grid';
            setTimeout(function(){
                    warning.style.display = 'none';
                    front.style.display = 'grid';
                    filter.style.display = 'block';

                }, 2000);
                filter.style.display = 'block';
            } else{
                countdown = setInterval(function(){
                    filter.textContent = filterValue--;
                    if(filterValue < 0){
                        clearInterval(countdown);    
                        filter.style.display = 'none';
                        resume();
                        spawn();
                    }
                }, 1000)
            }
            
            clearInterval(interval);
            
            // mengatur agar saat second mencapai 60 minute akan bertambah dan second menjadi 0
            function resume(){
                let interval = setInterval( function() {
                    second++;
                    
                    if(second >= 60){
                        minute++;
                second = 0;
            }
            
            // disaat minute dan second kurang dari 10 maka akan ada 0 dibelakang
            let minuteText = minute < 10 ? '0' + minute : minute;
            let secondText = second < 10 ? '0' + second : second;
            
            // penempatan mnute dan second
            timerElement.textContent = minuteText + ':' + secondText;  
        } , 1000)
            }
    
    let objects = [];
    function spawn() {
        // tempat object akan muncul saat spawn
        let choices = [0, 100, 200, 300];
        
        // mengubah tempat spawn setiap 1 detik
        setInterval(function(){
            let randomIndex = Math.floor(Math.random() * choices.length);
            let randomChoices = choices[randomIndex];
            
            let object = {
                x: randomChoices,
                y: -50
            }
            
            objects.push(object);
        }, 1000);

        // menggerakkan dan memunculkan object
        setInterval(function(){
            // menghapus jalur pada object saat object muncul
            c.clearRect(0, 0, 90, canvas.height);
            c.clearRect(100, 0, 90, canvas.height);
            c.clearRect(200, 0, 90, canvas.height);
            c.clearRect(300, 0, 90, canvas.height);
            
            // menggerakkan object kebawah
            for(let i = 0; i < objects.length; i++){
                let object = objects[i];
                object.y +=5;
                
                c.drawImage(img, object.x, object.y , 100, 100);
                
                // mengubah y menjadi ke atas
                if(object.y >= 450){
                    objects.splice(i, 1);
                    i--
                }

                let score = 0;
                let fail = 0;
                let objectY = 420 < object.y > 400 ;
                if(DKey.click || c.drawImage(img, object.x[0], objectY , 100, 100)) {
                    lightD.style.display = block;
                    score+1;
                }
            }
        }, 20);
    }
}

