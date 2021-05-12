// using selectors insde the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    // This is to remove the active class of the elements that I do not click.
    // In this way, only the element clicked its shown.
    // If the article im clicking on doest not match the question, remove the show text class.
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    // Toggle class
    question.classList.toggle("show-text");
  });
});

// traversing the dom
/* const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
}); */
