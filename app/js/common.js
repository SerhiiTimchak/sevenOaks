window.onload = function() {

    // Carusel START 
    let images = document.querySelectorAll('#slider .images img');
    let counter = 0;
    let btnPrev = document.getElementById('btn-left');
    let btnNext = document.getElementById('btn-right');
    btnPrev.onclick = function() {
        images[counter].className = 'transp';
        images[counter].className = '';
        counter--;
        if (counter < 0) {
            counter = images.length - 1;
        };

        images[counter].className = 'active';
    };

    btnNext.onclick = function() {
        images[counter].className = 'transp';
        images[counter].className = '';
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        images[counter].className = 'active';
    };
    // Carusel END

    //Buttons Height START

    // var caruselImgActive = document.querySelector(".active");
    // var caruselImgButton = document.querySelector("#btn-left");
    // var caruselButtonsLine = document.querySelector(".buttons");
    // var caruselImgStyle = window.getComputedStyle(caruselImgActive);
    // var caruselImgHeight = caruselImgStyle.getPropertyValue('height');
    // var caruselButtonHeight = caruselImgButton.offsetHeight;

    var sliderBlock = document.querySelector("#slider");
    var caruselImgActive = document.querySelector(".active");
    var caruselImgButton = document.querySelector("#btn-left");
    var caruselButtonsLine = document.querySelector(".buttons");
    var caruselImgStyle = window.getComputedStyle(caruselImgActive);
    var caruselImgHeight = caruselImgStyle.getPropertyValue('height');
    var caruselButtonHeight = caruselImgButton.offsetHeight;

    function setSliderBlockDiamentions(imageHeight, sliderBlock) {
        let height = parseInt(imageHeight);
        sliderBlock.style.height = height + 'px';
    }

    function calculateCenter(imgHeight, buttonHeight) {
        let result = (parseInt(caruselImgHeight) - parseInt(caruselButtonHeight)) / 2;
        return result;
    };

    function setButtonsPosition(result, buttonsLine) {
        buttonsLine.style.visibility = 'visible';
        buttonsLine.style.top = result + 'px';
    };

    // set up position welcomeMessage
    var welcomeBlock = document.querySelector(".wrapper .welcomeMessage");

    function positionWelcomeBlock(block, imageHeight) {
        var result = parseInt(caruselImgHeight) * 0.6230769230769231;
        block.style.top = result + 'px';
    }
    positionWelcomeBlock(welcomeBlock, caruselImgHeight);
    setSliderBlockDiamentions(caruselImgHeight, sliderBlock);
    setButtonsPosition(calculateCenter(caruselImgHeight, caruselButtonHeight), caruselButtonsLine);

    window.onresize = function() {

        sliderBlock = document.querySelector("#slider");
        caruselImgActive = document.querySelector(".active");
        caruselImgButton = document.querySelector("#btn-left");
        caruselButtonsLine = document.querySelector(".buttons");
        caruselImgStyle = window.getComputedStyle(caruselImgActive);
        caruselImgHeight = caruselImgStyle.getPropertyValue('height');
        caruselButtonHeight = caruselImgButton.offsetHeight;

        setSliderBlockDiamentions(caruselImgHeight, sliderBlock);
        setButtonsPosition(calculateCenter(caruselImgHeight, caruselButtonHeight), caruselButtonsLine);
        positionWelcomeBlock(welcomeBlock, caruselImgHeight);

    };
    //Buttons Height END
};

// Navigation menu slider START
$(function() {
    $('.menu-button').on('click', function() {
        $('.navigation-menu-wrapper').slideToggle(300, function() {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            };
        });
    });
});
// Navigation menu slider END

// Welcome block START

//Welcome block END