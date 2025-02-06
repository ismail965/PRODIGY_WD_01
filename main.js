const pizzaImages = document.querySelectorAll('.pizza img');
const toggleImages = document.querySelectorAll('.pizza-toggle img');
let currentIndex = 0;

toggleImages[currentIndex].classList.add('active');

pizzaImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        toggleImages.forEach(toggleImg => toggleImg.classList.remove('active'));
        toggleImages[currentIndex].classList.add('active');
        toggleImages[currentIndex].src = pizzaImages[index].src;
        img.classList.toggle('resized');
        currentIndex = (currentIndex + 1) % toggleImages.length;
        });
    });


