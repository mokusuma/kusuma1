const t = document.querySelector('.numberSecond3 .t');
const tl = document.querySelector('.numberSecond3 .tl');
const tr = document.querySelector('.numberSecond3 .tr');
const c = document.querySelector('.numberSecond3 .c');
const br = document.querySelector('.numberSecond3 .br');
const bl = document.querySelector('.numberSecond3 .bl');
const b = document.querySelector('.numberSecond3 .b');

const number = [t, tl, tr, c, br, bl, b];

const number0 = [t, tl, tr, b, br, bl];
const number1 = [tr, br];
const number2 = [t, tr, c, bl, b];
const number3 = [t, tr, c, br, b];
const number4 = [tl, tr, c, br];
const number5 = [t, tl, c, br, b];
const number6 = [t, tl, c, br, bl, b];
const number7 = [t, tr, br];
const number8 = [t, tl, tr, c, br, bl, b];
const number9 = [t, tl, tr, c, br, b];

const numbers = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9];

let currentIndex = 0;
let intervalId;

function changeNumber() {
  const divs = document.querySelectorAll('.numberSecond3 .number');

  // Loop melalui semua elemen div dan ubah warna latar belakangnya
  for (let i = 0; i < divs.length; i++) {
    // Hapus kelas sebelumnya
    divs[i].style.backgroundColor = '#e96e6e';
  }

  const currentNumber = numbers[currentIndex];

  // Tambahkan kelas warna baru untuk setiap elemen angka saat ini
  currentNumber.forEach((element) => {
    element.style.backgroundColor = 'red';
  });

  // Pindah ke angka selanjutnya
  currentIndex = (currentIndex + 1) % numbers.length;
}

function startTimer() {
  // Hentikan timer jika sedang berjalan
  stopTimer();

  // Mulai timer
  intervalId = setInterval(changeNumber, 1000);
}

function stopTimer() {
  // Hentikan timer
  clearInterval(intervalId);
}

function resetTimer() {
  // Hentikan timer
  clearInterval(intervalId);

  // Kembalikan tampilan ke angka 0
  const divs = document.querySelectorAll('.numberSecond3 .number');
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = '#e96e6e';
  }

  currentIndex = 0;
}

startTimer();
