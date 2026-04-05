const images = document.querySelectorAll(".slider img");

let index = 0;
let totalImages = images.length;

function removeActive() {
    for (let i = 0; i < totalImages; i++) {
        images[i].classList.remove("active");
    }
}

function showNextImage() {
    removeActive();

    index = index + 1;

    if (index >= totalImages) {
        index = 0;
    }

    images[index].classList.add("active");
}

function startSlider() {
    setInterval(function () {
        showNextImage();
    }, 2000);
}

startSlider();