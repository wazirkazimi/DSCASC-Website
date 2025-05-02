const topNav = document.getElementById("top-nav");
const changeBG= document.getElementById("hero-bg")
const ugtab= document.getElementById("ugTab")
const pgtab= document.getElementById("pgTab")
const ugbanners= document.querySelectorAll("#UG")
const pgbanners= document.querySelectorAll("#PG")
console.log(pgbanners)
console.log(ugbanners)
//To hide all the PG banners
pgbanners.forEach(banner => {
    banner.classList.add('hide');
});

let lastScrollY = window.scrollY;
console.log(lastScrollY)

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        topNav.classList.add("hide");
    } else if (window.scrollY < lastScrollY) {
        topNav.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});

let current = 1;
const totalImages = 5;

setInterval(() => {
  changeBG.style.backgroundImage = `url('./assests/bg${current}.jpg')`;
  console.log(current);

  current = current % totalImages + 1;
}, 1500);
ugtab.addEventListener('click',()=>{
    pgtab.classList.remove('active')
    ugtab.classList.add('active')
    pgbanners.forEach(banner => {
        banner.classList.add('hide');
    });
    ugbanners.forEach(banner => {
        banner.classList.remove('hide');
    });
})
pgtab.addEventListener('click',()=>{
    pgtab.classList.add('active')
    ugtab.classList.remove('active')
    ugbanners.forEach(banner => {
        banner.classList.add('hide');
    });
    pgbanners.forEach(banner => {
        banner.classList.remove('hide');
    });
})

const slides = document.querySelectorAll('.banner-slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);