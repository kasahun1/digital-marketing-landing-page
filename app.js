
let toggleBtn = document.querySelector(".nav-toggler");
let linksContainer = document.querySelector(".links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  linksContainer.classList.toggle("active");
})



let faqs = [...document.querySelectorAll(".faq")];
faqs.map((faq) => {
  let ques = faq.querySelector(".question-box");
  ques.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
