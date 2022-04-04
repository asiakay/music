const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu(){
  if(menu.classList.contains("active")){
    menu.classList.remove("active");

    // add the hamburger menu icon
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");

    // add the x close icon 
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/* show active submenu */ 
const items = document.querySelectorAll(".item");

/* activate submenu */
function toggleItem(){
  if(this.classList.contains("submenu-active")){
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")){
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* event listeners */
for (let item of items){
  if (item.querySelector(".submenu")){
    item.addEventListener("click", toggleItem, false);
    item.addEventListener("keypress", toggleItem, false);
  }
}

/* close submenu from anywhere on the page */

function closeSubmenu(e){
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")){
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

/* event listener */
document.addEventListener("click", closeSubmenu, false);

// https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535