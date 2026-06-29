const slimes = [
  {
    title: "Клиар-слайм «Огненная лава»",
    description: "Прозрачная текстура с огненными оттенками, блестками и ярким лавовым настроением.",
    image: "assets/clear-slime-fire-lava.svg",
  },
  {
    title: "Кранч-слайм «Зимний хрусталь»",
    description: "Хрустящие шарики, ледяной голубой цвет и маленькие зимние украшения внутри.",
    image: "assets/crunch-slime-winter-crystal.svg",
  },
  {
    title: "Баттер-слайм «Звёздная пыль»",
    description: "Нежная баттер-текстура с космическим сиянием, блестками и звездными деталями.",
    image: "assets/butter-slime-star-dust.svg",
  },
];

const birthdayPricing = [
  {
    title: "Пакет «Мини»",
    kicker: "До 6 детей",
    price: "13 000 ₽",
    description: "Компактный праздник для близкой компании с главным слайм-мастер-классом.",
    features: [
      "2 часа программы",
      "«Нащупай-шоу» с ВАУ-наполнителем",
      "«Слайм-шоу»: создание слайма",
      "Закрытие комнаты только для вас",
    ],
    highlighted: false,
    contactMessage: "Демо-заявка: интересует пакет «Мини».",
  },
  {
    title: "Пакет «Стандарт»",
    kicker: "До 8 детей",
    price: "15 000 ₽",
    description: "Больше шоу и эффектов для яркого праздника в творческой студии.",
    features: [
      "2 часа программы",
      "Эффектное «Серебряное шоу» с бумагой",
      "«Нащупай-шоу» с ВАУ-наполнителем",
      "«Слайм-шоу»: создание слайма",
      "Закрытие комнаты только для вас",
    ],
    highlighted: true,
    contactMessage: "Демо-заявка: интересует пакет «Стандарт».",
  },
  {
    title: "Пакет «Макси»",
    kicker: "До 10 детей",
    price: "17 000 ₽",
    description: "Максимальный праздничный формат для большой компании гостей.",
    features: [
      "2 часа программы",
      "Эффектное «Серебряное шоу» с бумагой",
      "«Нащупай-шоу» с ВАУ-наполнителем",
      "«Слайм-шоу»: создание слайма",
      "Закрытие комнаты только для вас",
    ],
    highlighted: false,
    contactMessage: "Демо-заявка: интересует пакет «Макси».",
  },
];

const pricing = [
  {
    title: "Игра в кинетический песок",
    kicker: "Свободная игра",
    price: "от 300 ₽",
    description: "Короткий или полноценный игровой формат с кинетическим песком в студии.",
    features: ["15 минут - 300 рублей", "30 минут - 450 рублей", "60 минут - 700 рублей"],
    highlighted: false,
    contactMessage: "Демо-заявка: интересует игра в кинетический песок.",
  },
  {
    title: "Мастер-классы",
    kicker: "Создание слайма",
    price: "от 500 ₽",
    description: "Ребенок создает уникальный слайм и может продолжить игру в студии.",
    features: [
      "15 минут - 500 рублей",
      "30 минут - 900 рублей: слайм + игра",
      "60 минут - 1600 рублей: слайм + игры в песочнице",
      "90 минут - 1800 рублей: All inclusive",
    ],
    highlighted: true,
    contactMessage: "Демо-заявка: интересует мастер-класс.",
  },
  {
    title: "Абонемент",
    kicker: "10 часов",
    price: "8 000 ₽",
    description: "Удобный демонстрационный формат для регулярных посещений.",
    features: ["10 часов посещения", "Срок действия - 2 месяца", "Скидка 10% на каждый последующий час"],
    highlighted: false,
    contactMessage: "Демо-заявка: интересует абонемент.",
  },
];

const reviews = [
  {
    name: "Демо-родитель 1",
    text: "Яркая студия, понятная программа и спокойная организация праздника. Ребенок увлекся мастер-классом и забрал домой свой слайм.",
  },
  {
    name: "Демо-родитель 2",
    text: "Дизайн страницы показывает, как можно быстро выбрать формат, посмотреть цены и оставить тестовую заявку без реальной отправки данных.",
  },
  {
    name: "Демо-родитель 3",
    text: "Карточки, отзывы и блок дня рождения сохранены как портфолио-концепт: все контакты и адреса заменены демонстрационными данными.",
  },
  {
    name: "Демо-родитель 4",
    text: "Визуальный стиль оставляет ощущение детского праздника, но не использует реальные фотографии, логотипы или отзывы организации.",
    image: "assets/review-demo.svg",
    imageAlt: "Декоративная иллюстрация творческого стола",
  },
];

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const slimesGrid = document.querySelector("[data-slimes-grid]");
const birthdayPricingGrid = document.querySelector("[data-birthday-pricing-grid]");
const pricingGrid = document.querySelector("[data-pricing-grid]");
const reviewsGrid = document.querySelector("[data-reviews-grid]");
const phoneInput = document.querySelector("[data-phone-input]");
const contactSection = document.querySelector("#contacts");
const contactForm = document.querySelector(".contact-form");
const contactMessageInput = document.querySelector("textarea[name='message']");

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const renderSlimes = () => {
  slimesGrid.innerHTML = "";

  slimes.forEach((item) => {
    const card = createElement("article", "slime-card");
    const visual = createElement("div", "slime-visual");
    const image = createElement("img");

    image.src = item.image;
    image.alt = item.title;
    visual.append(image);

    card.append(visual, createElement("h3", "", item.title), createElement("p", "", item.description));
    slimesGrid.append(card);
  });
};

const renderPriceCards = (items, grid) => {
  grid.innerHTML = "";

  items.forEach((item) => {
    const card = createElement("article", `price-card${item.highlighted ? " is-highlighted" : ""}`);
    const features = createElement("ul");

    item.features.forEach((feature) => {
      features.append(createElement("li", "", feature));
    });

    const button = createElement("a", "button button-primary", "Записаться");
    button.href = "#contacts";
    if (item.contactMessage) button.dataset.contactMessage = item.contactMessage;

    card.append(
      createElement("span", "price-kicker", item.kicker),
      createElement("h3", "", item.title),
      createElement("div", "price-value", item.price),
      createElement("p", "", item.description),
      features,
      button,
    );
    grid.append(card);
  });
};

const renderBirthdayPricing = () => {
  renderPriceCards(birthdayPricing, birthdayPricingGrid);
};

const renderPricing = () => {
  renderPriceCards(pricing, pricingGrid);
};

const renderReviews = () => {
  reviewsGrid.innerHTML = "";

  reviews.forEach((item) => {
    const card = createElement("article", "review-card");

    card.append(createElement("h3", "", item.name), createElement("p", "", item.text));

    if (item.image) {
      const photo = createElement("img", "review-photo");
      photo.src = item.image;
      photo.alt = item.imageAlt || "";
      card.append(photo);
    }

    reviewsGrid.append(card);
  });
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  nav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;

  menuToggle.classList.remove("is-open");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Открыть меню");
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-contact-message]");

  if (!trigger || !contactMessageInput || !contactSection) return;

  event.preventDefault();
  contactMessageInput.value = trigger.dataset.contactMessage;
  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    contactMessageInput.focus();
    contactMessageInput.setSelectionRange(contactMessageInput.value.length, contactMessageInput.value.length);
  }, 450);
});

const showLocalDemoResponse = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({ ok: true, transport: "local-demo" });
    }, 500);
  });

const getContactFormStatus = () => {
  let status = contactForm.querySelector("[data-contact-form-status]");

  if (!status) {
    status = createElement("p", "contact-form-status");
    status.setAttribute("data-contact-form-status", "");
    status.setAttribute("aria-live", "polite");
    contactForm.append(status);
  }

  return status;
};

const setContactFormStatus = (message, type = "idle") => {
  const status = getContactFormStatus();

  status.textContent = message;
  status.dataset.status = type;
};

if (contactForm) {
  const submitButton = contactForm.querySelector("button[type='submit']");
  const submitButtonText = submitButton?.textContent || "Показать демо-ответ";

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Демо-режим...";
    }

    setContactFormStatus("Демо-режим: заявка не отправляется и нигде не сохраняется.", "pending");

    try {
      await showLocalDemoResponse();
      contactForm.reset();
      if (phoneInput) phoneInput.value = "+7 (000) 000-00-00";
      setContactFormStatus("Готово: это локальный демо-ответ без отправки данных.", "success");
    } catch {
      setContactFormStatus("Демо-ответ временно недоступен. Данные не отправлялись.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButtonText;
      }
    }
  });
}

const getPhoneDigits = (value) => {
  const digits = value.replace(/\D/g, "");
  const withoutCountry = digits.startsWith("8") ? digits.slice(1) : digits.startsWith("7") ? digits.slice(1) : digits;

  return withoutCountry.slice(0, 10);
};

const formatPhoneDigits = (digits) => {
  let result = "+7 ";

  if (digits.length > 0) result += `(${digits.slice(0, 3)}`;
  if (digits.length >= 3) result += ") ";
  if (digits.length > 3) result += digits.slice(3, 6);
  if (digits.length > 6) result += `-${digits.slice(6, 8)}`;
  if (digits.length > 8) result += `-${digits.slice(8, 10)}`;

  return result;
};

const formatPhone = (value) => formatPhoneDigits(getPhoneDigits(value));

const getPhoneDigitPosition = (value, cursorPosition) => {
  const digitsBeforeCursor = value.slice(0, cursorPosition).replace(/\D/g, "");

  return Math.max(0, digitsBeforeCursor.length - 1);
};

const setPhoneValue = (digits, cursorDigitPosition = digits.length) => {
  phoneInput.value = formatPhoneDigits(digits);

  let digitPosition = 0;
  let cursorPosition = phoneInput.value.length;

  for (let index = 3; index < phoneInput.value.length; index += 1) {
    if (!/\d/.test(phoneInput.value[index])) continue;

    if (digitPosition === cursorDigitPosition) {
      cursorPosition = index;
      break;
    }

    digitPosition += 1;
  }

  if (cursorDigitPosition >= digits.length) cursorPosition = phoneInput.value.length;
  phoneInput.setSelectionRange(cursorPosition, cursorPosition);
};

if (phoneInput) {
  phoneInput.value = formatPhone(phoneInput.value);

  phoneInput.addEventListener("input", () => {
    setPhoneValue(getPhoneDigits(phoneInput.value));
  });

  phoneInput.addEventListener("keydown", (event) => {
    if (event.key !== "Backspace" && event.key !== "Delete") return;

    const digits = getPhoneDigits(phoneInput.value);
    const selectionStart = phoneInput.selectionStart;
    const selectionEnd = phoneInput.selectionEnd;
    const startDigitPosition = getPhoneDigitPosition(phoneInput.value, selectionStart);
    const endDigitPosition = getPhoneDigitPosition(phoneInput.value, selectionEnd);

    if (selectionStart !== selectionEnd) {
      event.preventDefault();
      setPhoneValue(digits.slice(0, startDigitPosition) + digits.slice(endDigitPosition), startDigitPosition);
      return;
    }

    if (event.key === "Backspace") {
      event.preventDefault();
      if (startDigitPosition === 0) {
        setPhoneValue(digits, 0);
        return;
      }

      setPhoneValue(digits.slice(0, startDigitPosition - 1) + digits.slice(startDigitPosition), startDigitPosition - 1);
      return;
    }

    event.preventDefault();
    if (startDigitPosition >= digits.length) {
      setPhoneValue(digits);
      return;
    }

    setPhoneValue(digits.slice(0, startDigitPosition) + digits.slice(startDigitPosition + 1), startDigitPosition);
  });

  phoneInput.addEventListener("blur", () => {
    if (!getPhoneDigits(phoneInput.value)) phoneInput.value = "+7 (000) 000-00-00";
  });
}

renderSlimes();
renderBirthdayPricing();
renderPricing();
renderReviews();
