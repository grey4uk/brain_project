const swiper1 = new Swiper(".swiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let idCounter = 1;
const idArray = [
  "navigation",
  "services",
  "cost",
  "start",
  "slides",
  "contacts",
  "about",
];

const priceArray = [
  { name: "design1", value: 100 },
  { name: "design2", value: 200 },
  { name: "design3", value: 300 },
  { name: "design4", value: 400 },
  { name: "design5", value: 500 },
  { name: "site1", value: 600 },
  { name: "site2", value: 700 },
  { name: "site3", value: 800 },
  { name: "site4", value: 900 },
  { name: "mobile1", value: 1000 },
  { name: "mobile2", value: 1100 },
  { name: "mobile3", value: 1200 },
  { name: "mobile4", value: 1300 },
  { name: "mobile5", value: 1400 },
];

const alertMessage = document.querySelector(".alertMessage");

const formStart = document.querySelector("#form");
formStart
  .querySelector("#startSubmitBtnTop")
  .addEventListener("click", onSubmitModal);
formStart
  .querySelector("#startSubmitBtnDown")
  .addEventListener("click", onSubmitModal);

const modalForm = document.querySelector("#modalForm");
modalForm
  .querySelector("#navBtnSbmtTop")
  .addEventListener("click", onNavSubmitModal);
modalForm
  .querySelector("#navBtnSbmtDown")
  .addEventListener("click", onNavSubmitModal);

const modalRequestForm = document.querySelector("#modalRequestForm");
modalRequestForm
  .querySelector("#submitRequestModalTop")
  .addEventListener("click", onRequestSubmitModal);
modalRequestForm
  .querySelector("#submitRequestModalDown")
  .addEventListener("click", onRequestSubmitModal);

const priceForm = document.querySelector("#priceForm");

const openRequestBtn = document.querySelector("#openRequest");
const openRequestBtnMobile = document.querySelector(".mailBtn");
const btnBlock = document.querySelector(".btnBlock");
const downBtn = document.querySelector(".downBtn");
const upBtn = document.querySelector(".upBtn");
const closeRequestBtn = document.querySelector("#goBack");
const closeRequestBtnTop = document.querySelector("#goBackTop");
const requestModal = document.querySelector(".requestModal");
const requestTitle = document.querySelector("#requestTitle");
const showMoreChoise = document.querySelector("#showMoreModal");
const meetRequest = document.querySelector("#meetRequest");
const menuBtnFixed = document.querySelector("#menuBtnFixed");
const fixedBarList = document.querySelector("#fixedBarList");
const fixedDesktopBar = document.querySelector(".fixedDesktopMenu");
const openRequestFixed = document.querySelector("#openRequestFixed");
meetRequest.addEventListener("click", openRequestModal);
openRequestFixed.addEventListener("click", openRequestModal);
openRequestBtn.addEventListener("click", openRequestModal);
openRequestBtnMobile.addEventListener("click", openRequestModal);
menuBtnFixed.addEventListener("click", openFixedBar);

function openRequestModal(e) {
  if (
    e.target === openRequestBtnMobile ||
    e.target === openRequestBtn ||
    e.target.id === "openRequestFixed"
  ) {
    requestTitle.textContent = "Подати запит";
    requestModal.querySelector("#modalName1").classList.add("visually-hidden");
    requestModal
      .querySelector("#modalName11")
      .classList.remove("visually-hidden");
    requestModal.querySelector("#modalName3").classList.add("visually-hidden");
    requestModal
      .querySelector("#modalName33")
      .classList.remove("visually-hidden");
  } else {
    requestTitle.textContent = " Призначити онлайн-зустріч";
    showMoreChoise.classList.add("visually-hidden");
  }
  requestModal.classList.toggle("requestModalTransition");
  closeRequestBtn.addEventListener("click", closeRequestModal);
  closeRequestBtnTop.addEventListener("click", closeRequestModal);
  requestModal.addEventListener("click", closeRequestModalOut);
  openRequestBtn.removeEventListener("click", openRequestModal);
  openRequestBtnMobile.removeEventListener("click", openRequestModal);
  meetRequest.removeEventListener("click", openRequestModal);
  openRequestFixed.removeEventListener("click", openRequestModal);
  btnBlock.classList.add("visually-hidden");
  downBtn.classList.add("visually-hidden");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function closeRequestModal(e) {
  requestModal.classList.toggle("requestModalTransition");
  openRequestBtn.addEventListener("click", openRequestModal);
  openRequestBtnMobile.addEventListener("click", openRequestModal);
  meetRequest.addEventListener("click", openRequestModal);
  openRequestFixed.addEventListener("click", openRequestModal);
  closeRequestBtn.removeEventListener("click", closeRequestModal);
  closeRequestBtnTop.removeEventListener("click", closeRequestModal);
  requestModal.removeEventListener("click", closeRequestModalOut);
  showMoreChoise.classList.remove("visually-hidden");
  btnBlock.classList.remove("visually-hidden");
  downBtn.classList.remove("visually-hidden");
  requestModal.querySelector("#modalName11").classList.add("visually-hidden");
  requestModal.querySelector("#modalName1").classList.remove("visually-hidden");
  requestModal.querySelector("#modalName33").classList.add("visually-hidden");
  requestModal.querySelector("#modalName3").classList.remove("visually-hidden");
  document.querySelector("#modalShowMore").classList.remove("visibleShowMore");
}
function closeRequestModalOut(e) {
  e.preventDefault();
  if (
    Array.from(requestModal.querySelectorAll("input")).includes(e.target) ||
    Array.from(showMoreChoise.children).includes(e.target) ||
    e.target === document.querySelector("#submitRequestModalTop") ||
    e.target === document.querySelector("#submitRequestModalDown") ||
    e.target === document.querySelector("#modalArrowDown") ||
    e.target === document.querySelector("#modalArrowUp") ||
    e.target === requestModal.querySelector("#modalComments")
  ) {
    return;
  } else {
    closeRequestModal();
  }
}

function openFixedBar(e) {
  menuBtnFixed.classList.add("visually-hidden");
  menuBtnFixed.removeEventListener("click", openFixedBar);
  fixedBarList.classList.add("fixedDesktopListTransition");
  document.querySelector(".main").addEventListener("click", closeFixedBar);
}
function closeFixedBar(e) {
  if (!Array.from(fixedDesktopBar.children).includes(e.target)) {
    menuBtnFixed.addEventListener("click", openFixedBar);
    fixedBarList.classList.remove("fixedDesktopListTransition");
    document.querySelector(".main").removeEventListener("click", closeFixedBar);
    const id = setTimeout(() => {
      menuBtnFixed.classList.remove("visually-hidden");
      clearTimeout(id);
    }, 600);
  }
}

////////////////////scroling one section down on buttonclick/////////////////////////
downBtn.addEventListener("click", onscrollDownBtnClick);

function onscrollDownBtnClick() {
  //   document.body.scrollTo(0, 600); // For Safari
  //   document.documentElement.scrollTo(0, 600); // For Chrome, Firefox, IE and Opera
  if (idCounter < idArray.length) {
    document
      .querySelector(`#${idArray[idCounter]}`)
      .scrollIntoView({ behavior: "smooth" });
    idCounter = idCounter + 1;
  } else {
    idCounter = 0;
    document
      .querySelector(`#${idArray[idCounter]}`)
      .scrollIntoView({ behavior: "smooth" });
    idCounter = idCounter + 1;
  }
}

upBtn.addEventListener("click", onscrollUpBtnClick);

function onscrollUpBtnClick() {
  document
    .querySelector(`#firstSection`)
    .scrollIntoView({ behavior: "smooth" });
  idCounter = 1;
}

///////////////////////////open wider choise in start section///////////////////
document
  .querySelector("#showMoreToggle")
  .addEventListener("click", onShowMoreClick);

function onShowMoreClick(e) {
  document.querySelector("#arrowDown").classList.toggle("visually-hidden");
  document.querySelector("#arrowUp").classList.toggle("visually-hidden");
  document.querySelector("#showMore").classList.toggle("visibleShowMore");
  document
    .querySelector(".submitButtonBoxTop")
    .classList.toggle("visually-hidden");
  document
    .querySelector(".submitButtonBox")
    .classList.toggle("visually-hidden");
  document.querySelector(".start").classList.toggle("bigStart");
}
/////////////////////////////////showing more inputs in nav modal//////////////////////////////////////
document
  .querySelector("#showMoreNav")
  .addEventListener("click", onNavShowMoreClick);

function onNavShowMoreClick(e) {
  document.querySelector("#navArrowDown").classList.toggle("visually-hidden");
  document.querySelector("#navArrowUp").classList.toggle("visually-hidden");
  document.querySelector("#navShowMore").classList.toggle("visibleShowMore");
  document
    .querySelector(".navSubmitButtonBox")
    .classList.toggle("visually-hidden");
  document
    .querySelector(".navSubmitButtonBoxTop")
    .classList.toggle("visually-hidden");
}

///////////////////////////////modal for mobile nav///////////////
document
  .querySelector("#showMoreModal")
  .addEventListener("click", onModalShowMoreClick);

function onModalShowMoreClick(e) {
  document.querySelector("#modalArrowDown").classList.toggle("visually-hidden");
  document.querySelector("#modalArrowUp").classList.toggle("visually-hidden");
  document.querySelector("#modalShowMore").classList.toggle("visibleShowMore");
  document
    .querySelector(".modalSubmitButtonBox")
    .classList.toggle("visually-hidden");
  document
    .querySelector(".modalSubmitButtonBoxTop")
    .classList.toggle("visually-hidden");
}

////////////////////////menu modal mobile/////////////////////
const menuModal = document.querySelector(".menuModal");

const wrapper = document.querySelector(".wrapper");

const closeButton = document.querySelector(".closeButton");

const menuButton = document.querySelector("#menuBtn");
const menuButtonFix = document.querySelector("#menuBtnFix");
const modalNavigationList = document.querySelector(".modalNavigationList");

menuButton.addEventListener("click", onOpenModalClick);
menuButtonFix.addEventListener("click", onOpenModalClick);

function onOpenModalClick(e) {
  menuModal.classList.remove("visually-hidden");
  menuModal.classList.add("menuModalTransition");
  wrapper.classList.toggle("wrapperTransition");
  const id = setTimeout(() => {
    wrapper.classList.toggle("visually-hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    clearTimeout(id);
  }, 600);
  closeButton.addEventListener("click", onCloseModalClick);
  modalNavigationList.addEventListener("click", onLinkModalClick);
  menuButton.removeEventListener("click", onOpenModalClick);
  menuButtonFix.removeEventListener("click", onOpenModalClick);
  btnBlock.classList.add("visually-hidden");
  downBtn.classList.add("visually-hidden");
}
function onCloseModalClick(e) {
  menuModal.classList.remove("menuModalTransition");
  menuButton.addEventListener("click", onOpenModalClick);
  menuButtonFix.addEventListener("click", onOpenModalClick);
  closeButton.removeEventListener("click", onCloseModalClick);
  wrapper.classList.toggle("visually-hidden");
  wrapper.classList.toggle("wrapperTransition");
  const id = setTimeout(() => {
    menuModal.classList.add("visually-hidden");
    clearTimeout(id);
  }, 600);
  btnBlock.classList.remove("visually-hidden");
  downBtn.classList.remove("visually-hidden");
}
function onLinkModalClick(e) {
  menuModal.classList.remove("menuModalTransition");
  menuButton.addEventListener("click", onOpenModalClick);
  closeButton.removeEventListener("click", onCloseModalClick);
  modalNavigationList.removeEventListener("click", onCloseModalClick);
  wrapper.classList.toggle("visually-hidden");
  wrapper.classList.toggle("wrapperTransition");
  menuModal.classList.add("visually-hidden");
  btnBlock.classList.remove("visually-hidden");
  downBtn.classList.remove("visually-hidden");
  const id = setTimeout(() => {
    document
      .querySelector(`#${e.target.getAttribute("act")}`)
      .scrollIntoView({ behavior: "smooth" });
    clearTimeout(id);
  }, 1000);
}

///////////////////animation of splash screen/////////////////////////
const splashScreen = document.querySelector(".splashScreen");
const main = document.querySelector(".main");

const id = setTimeout(() => {
  splashScreen.classList.add("hideOfSplash");
  document.querySelector(".logoLarge").classList.add("logoLargeTransition");
  screenExchange();
  clearTimeout(id);
}, 2400);

function screenExchange() {
  const id = setTimeout(() => {
    splashScreen.classList.add("visually-hidden");
    main.classList.remove("visually-hidden");
    document
      .querySelector(".logoLargeTransition")
      .classList.add("visually-hidden");
    clearTimeout(id);
  }, 1200);
}

/////////////////price pop-up////////////////////////////
const showPrice = document.querySelector("#priceOverlay");
showPrice.addEventListener("click", showPriceOpen);
const hidePrice = document.querySelector("#priceSubmit");
const priceInfoBox = document.querySelector(".priceInfoBox");
const priceInput = document.querySelector("#priceInput");

function showPriceOpen() {
  priceInfoBox.classList.remove("visually-hidden");
  priceInfoBox.classList.add("priceInfoBoxTransition");
  showPrice.classList.add("priceOverlayTransition");
  const id = setTimeout(() => {
    showPrice.classList.add("visually-hidden");
    clearTimeout(id);
  }, 600);
  showPrice.removeEventListener("click", showPriceOpen);
  priceInfoBox.addEventListener("click", closePriceOpen);
}
function closePriceOpen(e) {
  e.preventDefault();
  const inputValue = validatePhone(priceInput.value);
  if (e.target !== priceInput && e.target !== hidePrice) {
    priceInfoBox.classList.remove("priceInfoBoxTransition");
    showPrice.classList.remove("visually-hidden");
    showPrice.classList.remove("priceOverlayTransition");
    showPrice.addEventListener("click", showPriceOpen);
    priceInfoBox.removeEventListener("click", closePriceOpen);
    const id = setTimeout(() => {
      priceInfoBox.classList.add("visually-hidden");
      clearTimeout(id);
    }, 600);
  } else if (inputValue && e.target === hidePrice) {
    priceForm.submit();
    priceForm.reset();
  } else {
    alertMessage.classList.add("alertMessageTransition");
    const id = setTimeout(() => {
      alertMessage.classList.remove("alertMessageTransition");
      clearTimeout(id);
    }, 6000);
  }
}

//////////////////////handling selecting product for show price//////////////
document.querySelector(".select").addEventListener("click", onSelectClick);
const areaForPrice = document.querySelector("#price");

function onSelectClick(e) {
  setPrice(e.target.value);
}

function setPrice(val) {
  areaForPrice.textContent = priceArray.find((el) => el.name === val).value;
}
////////////////////////Carousel FADING EFFECT/////////////////////////////////////
let carouselCounter = 1;

const carouselIdArray = [
  {
    left: "leftMobile",
    middle: "middleDesign",
    right: "rightSites",
    id: "design",
  },
  {
    left: "leftDesign",
    middle: "middleSites",
    right: "rightMobile",
    id: "site",
  },
  {
    left: "leftSites",
    middle: "middleMobile",
    right: "rightDesign",
    id: "mobile",
  },
];

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
prev.addEventListener("click", moveLeft);
next.addEventListener("click", moveRight);

function moveLeft() {
  if (carouselCounter > 0) {
    carouselCounter === 1
      ? carouselTransition(1, 0, 2)
      : carouselTransition(2, 1, 0);
    carouselCounter = carouselCounter - 1;
  } else {
    carouselTransition(0, 2, 1);
    carouselCounter = 2;
  }
}

function moveRight() {
  if (carouselCounter < 2) {
    carouselCounter === 1
      ? carouselTransition(1, 2, 0)
      : carouselTransition(0, 1, 2);
    carouselCounter = carouselCounter + 1;
  } else {
    carouselTransition(2, 0, 1);
    carouselCounter = 0;
  }
}

function carouselTransition(prev, next, middle) {
  document
    .querySelector(`#${carouselIdArray[next].id}`)
    .classList.remove("visually-hidden");

  document
    .querySelector(`#${carouselIdArray[prev].left}`)
    .classList.add("unvisible");
  document
    .querySelector(`#${carouselIdArray[prev].middle}`)
    .classList.add("unvisible");
  document
    .querySelector(`#${carouselIdArray[prev].right}`)
    .classList.add("unvisible");
  document
    .querySelector(`#${carouselIdArray[next].left}`)
    .classList.remove("unvisible");
  document
    .querySelector(`#${carouselIdArray[next].middle}`)
    .classList.remove("unvisible");
  document
    .querySelector(`#${carouselIdArray[next].right}`)
    .classList.remove("unvisible");

  document
    .querySelector(`#${carouselIdArray[prev].id}`)
    .classList.add("unvisible");
  document
    .querySelector(`#${carouselIdArray[next].id}`)
    .classList.remove("unvisible");
  const id = setTimeout(() => {
    document
      .querySelector(`#${carouselIdArray[prev].id}`)
      .classList.add("visually-hidden");
    document
      .querySelector(`#${carouselIdArray[middle].id}`)
      .classList.add("visually-hidden");
    clearTimeout(id);
  }, 1000);
  setPrice(
    document.querySelector(`#${carouselIdArray[next].id}`).options[0].value
  );
}

//////////////SWIPER/////////////////////////////////////

// swipe event
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.querySelector(".swiper-container");

gestureZone.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  },
  false
);

gestureZone.addEventListener(
  "touchend",
  function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
  },
  false
);

function handleGesture() {
  if (touchendX < touchstartX) {
    console.log("Swiped left");
  }

  if (touchendX > touchstartX) {
    console.log("Swiped right");
  }

  if (touchendY < touchstartY) {
    console.log("Swiped up");
  }

  if (touchendY > touchstartY) {
    console.log("Swiped down");
  }

  if (touchendY === touchstartY) {
    console.log("Tap");
  }
}

const swiperBoxIds = [
  { id: "sub", img: "./portfolio/sub.webp" },
  { id: "sub1", img: "./portfolio/sub1.webp" },
  { id: "sub2", img: "./portfolio/sub2.webp" },
  { id: "sub3", img: "./portfolio/sub3.webp" },
  { id: "sub4", img: "./portfolio/sub4.webp" },
  { id: "sub5", img: "./portfolio/sub5.webp" },
  { id: "sub6", img: "./portfolio/sub6.webp" },
  { id: "sub7", img: "./portfolio/sub7.webp" },
  { id: "sub8", img: "./portfolio/sub8.webp" },
  { id: "sub9", img: "./portfolio/sub9.webp" },
  { id: "sub10", img: "./portfolio/sub10.webp" },
  { id: "race1", img: "./portfolio/race1.webp" },
  { id: "race2", img: "./portfolio/race2.webp" },
  { id: "site1", img: "./portfolio/site1.webp" },
  { id: "site2", img: "./portfolio/site2.webp" },
  { id: "site3", img: "./portfolio/site3.webp" },
];

const swiperBox = document.querySelector(".swiper1");
const lightBox = document.querySelector("#lightBox");
const closeLightBox = document.querySelector("#closeLightBox");
const lightBoxImg = document.querySelector("#lightBoxImg");
swiperBox.addEventListener("click", openLightBox);

function openLightBox(e) {
  if (e.target.tagName !== "IMG") {
    return;
  }
  fixedDesktopBar.classList.add("visually-hidden");
  lightBoxImg.src = swiperBoxIds.find((el) => el.id === e.target.id).img;
  lightBox.classList.add("lightBoxTransition");
  swiperBox.removeEventListener("click", openLightBox);
  lightBox.addEventListener("click", onCloseLightBox);
}
function onCloseLightBox(e) {
  if (e.target === closeLightBox || e.target.tagName !== "IMG") {
    lightBox.classList.remove("lightBoxTransition");
    swiperBox.addEventListener("click", openLightBox);
    lightBox.removeEventListener("click", onCloseLightBox);
    fixedDesktopBar.classList.remove("visually-hidden");
  }
}

////////////////////////submit form in start section///////////////////////

function onSubmitModal(e) {
  e.preventDefault();
  const mail = validateEmail(document.querySelector("#POST-name1").value);
  const phone = validatePhone(document.querySelector("#POST-name2").value);
  if (mail && phone) {
    formStart.submit();
    formStart.reset();
  } else {
    alertMessage.classList.add("alertMessageTransition");
    const id = setTimeout(() => {
      alertMessage.classList.remove("alertMessageTransition");
      clearTimeout(id);
    }, 4000);
  }
}

function onRequestSubmitModal(e) {
  e.preventDefault();
  const mail = document.querySelector("#modalName1").value
    ? validateEmail(document.querySelector("#modalName1").value)
    : true;
  const phone = validatePhone(document.querySelector("#modalName2").value);
  if (mail && phone) {
    modalRequestForm.submit();
    modalRequestForm.reset();
  } else {
    alertMessage.classList.add("alertMessageTransition");
    const id = setTimeout(() => {
      alertMessage.classList.remove("alertMessageTransition");
      clearTimeout(id);
    }, 4000);
  }
}

function onNavSubmitModal(e) {
  e.preventDefault();
  const mail = validateEmail(document.querySelector("#navName1").value);
  const phone = validatePhone(document.querySelector("#navName2").value);
  if (mail && phone) {
    modalForm.submit();
    modalForm.reset();
  } else {
    alertMessage.classList.add("alertMessageTransition");
    const id = setTimeout(() => {
      alertMessage.classList.remove("alertMessageTransition");
      clearTimeout(id);
    }, 4000);
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePhone(tel) {
  const re =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
  return re.test(tel);
}

////////////////////INTERSECTION OBSERVER//////////////////////
const sectionIdArray = [
  {
    section: "firstSection",
    title: "navigation",
    anchor: "firstSectionAnchor",
  },
  {
    section: "secondSection",
    title: "services",
    anchor: "secondSectionAnchor",
  },
  { section: "thirdSection", title: "cost", anchor: "thirdSectionAnchor" },
  { section: "forthSection", title: "start", anchor: "forthSectionAnchor" },
  { section: "fifthSection", title: "slides", anchor: "fifthSectionAnchor" },
  {
    section: "sixthSection",
    title: "contacts",
    anchor: "sixthSectionAnchor",
  },
  { section: "seventhSection", title: "about", anchor: "seventhSectionAnchor" },
];

let prevRatio = 0;

const fixedBar = document.querySelector("#btnBlockFixed");

createObserver();
createObserverFirst();
createObserverFifth();
createObserverSeventh();

function createObserver() {
  let options = {
    root: null,
    rootMargin: "0%",
    threshold: buildThresholdList(),
  };
  const observer = new IntersectionObserver(handleIntersectingTitle, options);
  sectionIdArray.map((el) =>
    observer.observe(document.querySelector(`#${el.section}`))
  );
}
function createObserverFirst() {
  let options = {
    root: null,
    rootMargin: "0%",
    threshold: 0,
  };
  const observer = new IntersectionObserver(handleIntersectingFirst, options);

  observer.observe(document.querySelector(`#firstSection`));
}
function createObserverFifth() {
  let options = {
    root: null,
    rootMargin: "0%",
    threshold: 0,
  };
  const observer = new IntersectionObserver(handleIntersectingFifth, options);

  observer.observe(document.querySelector(`#fifthSection`));
}
function createObserverSeventh() {
  let options = {
    root: null,
    rootMargin: "0%",
    threshold: 0,
  };
  const observer = new IntersectionObserver(handleIntersectingSeventh, options);

  observer.observe(document.querySelector(`#seventhSection`));
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 10;

  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersectingTitle(entries) {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= prevRatio) {
        target.style.opacity =
          entry.intersectionRatio * 2 <= 1 ? entry.intersectionRatio * 2 : 1;
      } else {
        target.style.opacity =
          entry.intersectionRatio * 2 <= 1 ? entry.intersectionRatio * 2 : 1;
      }
      prevRatio = entry.intersectionRatio;
    } else {
    }
  });
}

function handleIntersectingFirst(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fixedBar.classList.add("opacityClass");
      fixedDesktopBar.classList.add("opacityClass");
    } else {
      fixedBar.classList.remove("opacityClass");
      fixedDesktopBar.classList.remove("opacityClass");
    }
  });
}

function handleIntersectingFifth(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      swiper1.update();
      swiper2.update();
    }
  });
}

function handleIntersectingSeventh(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      downBtn.classList.add("visually-hidden");
      upBtn.classList.remove("visually-hidden");
    } else {
      downBtn.classList.remove("visually-hidden");
      upBtn.classList.add("visually-hidden");
    }
  });
}
