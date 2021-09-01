class Scroll {
  constructor() {
    this.home = document.querySelector(".nav__link_home");
    this.about = document.querySelector(".nav__link_about");
    this.work = document.querySelector(".nav__link_work");
    this.contact = document.querySelector(".nav__link_contact");

    this.aboutTitle = document.querySelector(".about__title");
    this.workTitle = document.querySelector(".work__title");
    this.contactTitle = document.querySelector(".contact__title");
    this.aboutWrapper = document.querySelector(".about__wrapper");
    this.workWrapper = document.querySelector(".work__wrapper");
    this.contactWrapper = document.querySelector(".contact__wrapper");
  }

  teleport() {
    this.home.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
    this.about.addEventListener("click", () => {
      window.scrollTo(0, 1090);
    });
    this.work.addEventListener("click", () => {
      window.scrollTo(0, 1510);
    });
    this.contact.addEventListener("click", () => {
      window.scrollTo(0, 2003);
    });
  }

  move() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 400) {
        this.aboutTitle.classList.add("about__title_animation");
        this.aboutWrapper.classList.add("about__wrapper_animation");
      }
      if (window.pageYOffset >= 1060) {
        this.workTitle.classList.add("work__title_animation");
        this.workWrapper.classList.add("work__wrapper_animation");
      }
      if (window.pageYOffset >= 1800) {
        this.contactTitle.classList.add("contact__title_animation");
        this.contactWrapper.classList.add("contact__wrapper_animation");
      }
    });
  }
}

export default Scroll;
