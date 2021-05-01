window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 100);
})

const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener('click', function () {
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
})

