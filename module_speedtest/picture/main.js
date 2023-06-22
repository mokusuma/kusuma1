
const img = document.querySelector('img');
const container = document.querySelector('.container');
const hiddenElements = document.querySelectorAll( '.hidden');
let isBgColorVisible = false;

function updateContainerSize() {
    container.style.width = img.offsetWidth   + 5 + 'px';
    container.style.height = img.offsetHeight + 5 + 'px';
}

window.addEventListener('resize', updateContainerSize);
updateContainerSize();



let currentIndex = 0;

setInterval(function() {
    if (currentIndex < hiddenElements.length) {
        hiddenElements[currentIndex].style.backgroundColor = 'white';
        currentIndex++;
    } else {
        hiddenElements.forEach(function(hidden) {
            hidden.style.backgroundColor = '';
        });
        currentIndex = 0;
    }
}, 1000)



