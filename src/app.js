const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {


  //!button click active class without this
  secBtn.forEach((eachBtn) => {
    eachBtn.addEventListener("click", (btn) => {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      btn.target.classList.add("active-btn");
    });
  });

  //sections Active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //toggle theme

  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    let span = document.querySelectorAll(".bg-text");

    span.forEach((eachSpan) => {
      if (eachSpan.style.visibility === "hidden") {
        eachSpan.style.visibility = "visible";
      } else {
        eachSpan.style.visibility = "hidden";
      }
    });
  });
}

PageTransitions();
