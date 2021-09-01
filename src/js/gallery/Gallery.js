class Gallery {
  constructor() {
    this.gallery = document.querySelector(".gallery");
    this.contentArr = null;
    this.viewArr = null;
    this.previewArr = null;
    this.modal = document.querySelector(".major-modal");
    this.mask = document.querySelector(".major-modal__mask");
    this.imageArr = document.querySelectorAll(".major-modal__image");
    this.link = document.querySelector(".major-modal__link");
    this.next = document.querySelector(".major-modal__button_next");
    this.previous = document.querySelector(".major-modal__button_previous");
    this.carousel = document.querySelector(".major-modal__carousel");
    this.currentSlide = 0;
    this.galleryArr = [
      {
        preview: "thumb-1.jpg",
        image: ["discover-0.jpg", "discover-1.jpg", "discover-2.jpg"],
        link: "https://direct.chownow.com",
      },
      {
        preview: "thumb-2.jpg",
        image: ["mystand-0.jpg", "mystand-1.jpg", "mystand-2.jpg"],
        link: "https://eat.chownow.com",
      },
      {
        preview: "thumb-3.jpg",
        image: ["never-0.jpg", "never-1.jpg", "never-2.jpg"],
        link: "https://newrelic.com",
      },
      {
        preview: "thumb-4.jpg",
        image: ["newrelic-0.jpg", "newrelic-1.jpg", "newrelic-2.jpg"],
        link: "https://powur.com",
      },
      {
        preview: "thumb-5.jpg",
        image: ["ordering-0.jpg", "ordering-1.jpg", "ordering-2.jpg"],
        link: "https://www.sap.com",
      },
      {
        preview: "thumb-6.jpg",
        image: ["powur-0.jpg", "powur-1.jpg", "powur-2.jpg"],
        link: "https://github.com",
      },
      {
        preview: "thumb-4.jpg",
        image: ["newrelic-0.jpg", "newrelic-1.jpg", "newrelic-2.jpg"],
        link: "https://airbnb.com",
      },
      {
        preview: "thumb-3.jpg",
        image: ["ordering-0.jpg", "ordering-1.jpg", "ordering-2.jpg"],
        link: "https://powur.com",
      },
      {
        preview: "thumb-2.jpg",
        image: ["never-0.jpg", "never-1.jpg", "never-2.jpg"],
        link: "https://newrelic.com",
      },
      {
        preview: "thumb-1.jpg",
        image: ["discover-0.jpg", "discover-1.jpg", "discover-2.jpg"],
        link: "https://direct.chownow.com",
      },
    ];
  }

  renderCard() {
    function createCard() {
      const card = document.createElement("li");
      card.className = "gallery__card";

      const wrapper = document.createElement("div");
      wrapper.className = "gallery__wrapper";

      const content = document.createElement("div");
      content.className = "gallery__content";

      const image = document.createElement("img");
      image.className = "gallery__image";
      image.alt = "Project image";

      const view = document.createElement("div");
      view.className = "gallery__view";

      const text = document.createElement("span");
      text.className = "gallery__text";
      text.innerHTML = "View";

      card.appendChild(wrapper);
      wrapper.appendChild(content);
      content.appendChild(image);
      content.appendChild(view);
      view.appendChild(text);

      return card;
    }

    this.galleryArr.forEach(() => {
      this.gallery.appendChild(createCard());
    });
  }

  addPreview() {
    this.previewArr = document.querySelectorAll(".gallery__image");
    this.contentArr = document.querySelectorAll(".gallery__content");
    this.viewArr = document.querySelectorAll(".gallery__view");

    this.contentArr.forEach((card, id) => {
      card.classList.add(this.galleryArr[id].class);
    });

    this.previewArr.forEach((card, id) => {
      card.src = `./asset/img/${this.galleryArr[id].preview}`;
    });
  }

  hover() {
    this.contentArr.forEach((card, id) => {
      card.addEventListener("mouseover", () => {
        this.previewArr[id].classList.remove("gallery__image_unactive");
        this.previewArr[id].classList.add("gallery__image_active");
        this.contentArr[id].classList.remove("gallery__content_unactive");
        this.contentArr[id].classList.add("gallery__content_active");
        this.viewArr[id].classList.remove("gallery__view_unactive");
        this.viewArr[id].classList.add("gallery__view_active");
      });

      card.addEventListener("mouseleave", () => {
        this.previewArr[id].classList.remove("gallery__image_active");
        this.previewArr[id].classList.add("gallery__image_unactive");
        this.contentArr[id].classList.remove("gallery__content_active");
        this.contentArr[id].classList.add("gallery__content_unactive");
        this.viewArr[id].classList.remove("gallery__view_active");
        this.viewArr[id].classList.add("gallery__view_unactive");
      });
    });
  }

  clickCard() {
    this.contentArr.forEach((card, cardId) => {
      card.addEventListener("click", () => {
        this.imageArr.forEach((image, imageId) => {
          image.src = `./asset/img/${this.galleryArr[cardId].image[imageId]}`;
        });
        this.link.href = this.galleryArr[cardId].link;
        this.link.innerHTML = this.galleryArr[cardId].link;
        this.modal.classList.add("major-modal_open");
      });
    });

    this.mask.addEventListener("click", () => {
      this.modal.classList.remove("major-modal_open");
      this.carousel.style.transform = "translateX(0)";
      this.currentSlide = 0;
    });
  }

  clickButton() {
    this.next.addEventListener("click", () => {
      if (this.currentSlide !== -1) {
        this.currentSlide -= 1;
      } else {
        this.currentSlide = 1;
      }
      this.carousel.style.transform = `translateX(calc((100% / 3) * ${this.currentSlide}))`;
    });

    this.previous.addEventListener("click", () => {
      if (this.currentSlide !== 1) {
        this.currentSlide += 1;
      } else {
        this.currentSlide = -1;
      }
      this.carousel.style.transform = `translateX(calc((100% / 3) * ${this.currentSlide}))`;
    });
  }
}

export default Gallery;
