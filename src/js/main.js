const resume = document.querySelector(".object");
const resumeButton = document.querySelector(".resume__button");

clickToDisplayResume = function () {
  resumeButton.addEventListener("click", () => {
    resume.style.display = "block";
  });
};

closePDF = function () {
  window.addEventListener("mouseup", (event) => {
    if (event.target != resume) {
      resume.style.display = "none";
    }
  });
};

closePDF();

clickToDisplayResume();
