console.log("hello welcome");

const menuBar = document.querySelector("#menu-bar");

const navDilog = document.querySelector("#nav-dilog");

const closeMenuButton = document.querySelector("#close-menu-button");


const  faqsItem = document.querySelectorAll(".faqs-item");

let inititaltranslateLeftToRight = 44
let inititaltranslateRightToLeft = -32

menuBar.addEventListener("click", () => {
  navDilog.classList.toggle("hidden");
});

closeMenuButton.addEventListener("click", () => {
  navDilog.classList.toggle("hidden");
});

// intersection observer function

const setupintersectinObserver = (element, leftTORight, speed) => {
  const observer = new IntersectionObserver((entries) => {
    const isIntercepting = entries[0].isIntersecting;
    if (isIntercepting) {
      document.addEventListener("scroll", scrollHandler);
    }
    else{
      document.removeEventListener("scroll", scrollHandler);
    }
  });

  observer.observe(element);
  const scrollHandler = () => {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    console.log(translateX);
    let totalTranslate = 0;
    if(leftTORight){
      totalTranslate = inititaltranslateLeftToRight + translateX
    }else{
      totalTranslate = inititaltranslateRightToLeft - translateX
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
  };
};

const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");
const line4 = document.querySelector("#line4")


setupintersectinObserver(line1, true, 0.1);
setupintersectinObserver(line2, true, 0.1);
setupintersectinObserver(line3, false, 0.1);
setupintersectinObserver(line4, false, 0.7);





// expand and collapse the faqs items 

faqsItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    const i = event.currentTarget.querySelector("i")
    i.classList.toggle("-rotate-180")
    event.currentTarget.nextElementSibling.classList.toggle("hidden")
  })
}
)