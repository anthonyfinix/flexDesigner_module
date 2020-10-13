export default () => {
  document
    .querySelectorAll(".controls-button-wrapper > .btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".controls-button-wrapper > .btn")
          .forEach((btn) => {
            btn.classList.remove("btn-primary");
          });
        btn.classList.add("btn-primary");
        document
          .querySelectorAll(".controls-wrapper > .collapse")
          .forEach((collaspe) => {
            collaspe.classList.remove("show");
          });
      });
    });
};
