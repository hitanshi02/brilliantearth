const menu = document.querySelector(".menu");
const menuSection = menu.querySelector(".menu-section");
const menuArrow = menu.querySelector(".menu-mobile-arrow");
const menuClosed = menu.querySelector(".menu-mobile-close");
const menuToggle = document.querySelector(".menu-mobile-toggle");
const menuOverlay = document.querySelector(".overlay");
let subMenu;
menuSection.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
menuArrow.addEventListener("click", () => {
  hideSubMenu();
});
menuToggle.addEventListener("click", () => {
  toggleMenu();
});
menuClosed.addEventListener("click", () => {
  toggleMenu();
});
menuOverlay.addEventListener("click", () => {
  toggleMenu();
});
// Show & Hide Toggle Menu Function
function toggleMenu() {
  menu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
}
// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".menu-subs");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".menu-mobile-title").innerHTML = menuTitle;
  menu.querySelector(".menu-mobile-header").classList.add("active");
}
// Hide the Mobile Side Menu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".menu-mobile-title").innerHTML = "";
  menu.querySelector(".menu-mobile-header").classList.remove("active");
}
// Windows Screen Resizes Function
window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#fix-header").addClass("fixed-menu");
    $("#mob-fix-header").addClass("fixed-menu");
    $(".fix-div-show").css("display", "block");
  } else {
    $("#fix-header").removeClass("fixed-menu");
    $("#mob-fix-header").removeClass("fixed-menu");
    $(".fix-div-show").css("display", "none");
  }
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Bottom To Top Arrow
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $("#return-to-top").fadeIn(200);
  } else {
    $("#return-to-top").fadeOut(200);
  }
});
$("#return-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    100
  );
});

const select = document.querySelectorAll(".selectBtn");
const option = document.querySelectorAll(".option");
let index = 1;

select.forEach((a) => {
  a.addEventListener("click", (b) => {
    const next = b.target.nextElementSibling;
    next.classList.toggle("toggle");
    next.style.zIndex1 = index++;
  });
});
option.forEach((a) => {
  a.addEventListener("click", (b) => {
    b.target.parentElement.classList.remove("toggle");
    const parent = b.target.closest(".select").children[0];
    parent.setAttribute("data-type", b.target.getAttribute("data-type"));
    parent.innerText = b.target.innerText;
  });
});

$(".product-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".Inspired-slider ").owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  nav: true,
  dots: false,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

$(".filter-button").first().addClass("FilterActive");

$(".filter-button").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $(".FilterContent > .ShowContent")
    .removeClass("FilterActive")
    .eq(position)
    .addClass("FilterActive");

  $siblings.removeClass("FilterActive");
  $this.addClass("FilterActive");

  if (position == 1) {
    $(".filter-arrow > .ri-arrow-left-s-fill").removeClass("filter-color");
    $(".filter-arrow > .ri-arrow-right-s-fill").addClass("filter-color");
  } else {
    $(".filter-arrow > .ri-arrow-left-s-fill").addClass("filter-color");
    $(".filter-arrow > .ri-arrow-right-s-fill").removeClass("filter-color");
  }
});

$(".filter-nav").click(function () {
  // alert($(this).attr('class'));

  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $siblings.removeClass("filter-color");
  $this.addClass("filter-color");

  if (position == 1) {
    $(".content-2").addClass("FilterActive");
    $(".content-1").removeClass("FilterActive");
    $(".filter-button2").addClass("FilterActive");
    $(".filter-button1").removeClass("FilterActive");
  } else {
    $(".content-1").addClass("FilterActive");
    $(".content-2").removeClass("FilterActive");
    $(".filter-button1").addClass("FilterActive");
    $(".filter-button2").removeClass("FilterActive");
  }
});

$(".GREENLANDRUBIES .radio-slide").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],

  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    767: {
      items: 6,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
    },
    1400: {
      items: 6,
    },
    1600: {
      items: 6,
    },
  },
});
$(".GREENLANDRUBIES .Brightstone").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],

  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    767: {
      items: 6,
    },
    992: {
      items: 6,
    },
    1400: {
      items: 8,
    },
    1600: {
      items: 10,
    },
  },
});

$(".SettingStyle-slider-diamond").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],

  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    767: {
      items: 6,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1400: {
      items: 4,
    },
    1600: {
      items: 4,
    },
    1800: {
      items: 5,
    },
  },
});

$(".GREENLANDRUBIES .abc").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],

  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    767: {
      items: 6,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1400: {
      items: 6,
    },
    1600: {
      items: 6,
    },
  },
});

$(".GREENLANDRUBIES .ShopbyGemstone").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],

  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    767: {
      items: 6,
    },
    992: {
      items: 6,
    },
    1200: {
      items: 8,
    },
    1400: {
      items: 10,
    },
    1600: {
      items: 12,
    },
  },
});

$(".SettingStyle-slider").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],

  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    767: {
      items: 6,
    },
    992: {
      items: 4,
    },
    1400: {
      items: 4,
    },
    1600: {
      items: 6,
    },
  },
});

// Shop by Style & More Filters - mobile

$(".mob-filetr").owlCarousel({
  loop: false,
  margin: 0,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],
  // mouseDrag: false,
  touchDrag: false,
  responsive: {
    0: {
      items: 1,
    },
  },
});

// Custom Engagement Rings
$(".Design-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    575: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

function opendrop(g) {
  var a = document.getElementById(g);
  $(a).toggle();
  $(".drop-icon").toggleClass("drop-icon-rotate");
}

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down1 .Drop-options1 ul a").click(function () {
  var text = $(this).html();
  $(".drop-down1 .DropSelected1 a span").html(text);
  $(".drop-down1 .Drop-options1 ul").hide();
  $(".drop-icon").removeClass("drop-icon-rotate");
});

//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("drop-down1")) {
    $(".drop-down1 .Drop-options1 ul").hide();
    $(".drop-icon").removeClass("drop-icon-rotate");
  }
});

//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("mob-Sort-Dropdown")) {
    $(".mob-dropdown").slideUp();
  }
});

$(".mob-dropdown").hide();
$(".mob-Sort-Dropdown .ri-arrow-up-down-fill").click(function () {
  $(".mob-dropdown").slideToggle();
});

$(".mob-Sort-Dropdown .mob-dropdown li").click(function () {
  $(".mob-dropdown").slideUp();
});

$(".GREENLANDRUBIES .ShopbyGemstone").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],

  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    767: {
      items: 6,
    },
    992: {
      items: 4,
    },
    1400: {
      items: 4,
    },
    1600: {
      items: 9,
    },
  },
});
