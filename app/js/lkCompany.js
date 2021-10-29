document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#opener").forEach((item) => {
    item.addEventListener("click", () => {
      let parent = item.parentElement;
      parent.classList.toggle("open");
      if (parent.classList.contains("open")) {
        item.childNodes[0].textContent = "Свернуть ";
      } else {
        item.childNodes[0].textContent = "Показать все ";
      }
    });
  });

  document.querySelectorAll("#addName").forEach((item) => {
    item.addEventListener("click", () => {
      gsap.to("#modalAddName", { opacity: 1, display: "block" });

      document
        .querySelector("#modalAddName #closeModal")
        .addEventListener("click", () => {
          gsap.to("#modalAddName", { opacity: 0, display: "none" });
        });
    });
  });
  document.querySelectorAll("#addCompany").forEach((item) => {
    item.addEventListener("click", () => {
      gsap.to("#modalAddCompany", { opacity: 1, display: "block" });

      document
        .querySelector("#modalAddCompany #closeModal")
        .addEventListener("click", () => {
          gsap.to("#modalAddCompany", { opacity: 0, display: "none" });
        });
    });
  });
  document.querySelectorAll("#complete").forEach((item) => {
    item.addEventListener("click", () => {
      gsap.to("#modalModeration", { opacity: 1, display: "block" });

      document
        .querySelectorAll("#modalModeration #closeModal")
        .forEach((button) => {
          button.addEventListener("click", () => {
            gsap.to("#modalModeration", { opacity: 0, display: "none" });
          });
        });
    });
  });
});
