window.onload = function() {
    let images = document.querySelectorAll('#slider .images img');
    let counter = 0;
    let btnPrev = document.getElementById('btn-left');
    let btnNext = document.getElementById('btn-right');
    btnPrev.onclick = function() {
        images[counter].className = '';
        counter--;
        if (counter < 0) {
            counter = images.length - 1;
        };

        images[counter].className = 'active';
    };

    btnNext.onclick = function() {
        images[counter].className = '';
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        images[counter].className = 'active';
    }
}