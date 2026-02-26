const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
const imageContainer = document.querySelector('.image-container');

const imagesCount = document.querySelectorAll('img').length;

let currentImageIndex = 1;
let timeout;
nextIcon.addEventListener('click', () => {
    currentImageIndex++;
    timeout = clearTimeout(timeout);
    updateImage();
})
prevIcon.addEventListener('click', () => {
    currentImageIndex--;
    timeout = clearTimeout(timeout);
    updateImage();
})

function updateImage() {
    if (currentImageIndex > imagesCount) {
        currentImageIndex = 1;
    }
    else if (currentImageIndex < 1) {
        currentImageIndex = imagesCount;
    }
    imageContainer.style.transform = `translateX(-${(currentImageIndex - 1) * 700}px)`;
    timeout = setTimeout(() => {
        currentImageIndex++;
        updateImage();
    },4000)
}

updateImage();