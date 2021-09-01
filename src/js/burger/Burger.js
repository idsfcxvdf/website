class Burger {
  constructor() {
    this.burger = document.querySelector(".major-header__burger");
    this.nav = document.querySelector(".nav");
  }

  click() {
    this.burger.addEventListener("click", () => {
      if (this.nav.classList.contains("nav_open")) {
        this.nav.classList.remove("nav_open");
      } else {
        this.nav.classList.add("nav_open");
      }
    });
  }
}

export default Burger;
