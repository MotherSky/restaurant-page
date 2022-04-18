import home from './home.js';
import menu from './menu.js';
import visit from './visit.js'
import contact from './contact.js'

const contentDiv = document.querySelector("#content");
const body = document.body;

function createHeaderItems(){
    const list = document.createElement("ul");
    let items = Array(4);
    const itemsContent = ["Home", "Menu", "Visit Us", "Contact"];
    const itemsClasses = ["home", "menu", "visit-us", "contact"];
    const headerLogo = document.createElement("img");
    const hamburgerMenu = document.createElement("img");
    const navbar = document.createElement("div");
    const closeNavbar = document.createElement("img");
    navbar.classList.add("navbar");
    hamburgerMenu.setAttribute("src", "images/menu.svg");
    closeNavbar.setAttribute("src", "images/close.svg");
    closeNavbar.classList.add("close-navbar");
    hamburgerMenu.classList.add("hamburger-menu");
    headerLogo.classList.add("header-logo");
    headerLogo.setAttribute("src", "images/logo.png");
    navbar.appendChild(closeNavbar);
    list.append(headerLogo, navbar);
    for (let i = 0; i < items.length; i++){
        items[i] = document.createElement("li"); // create 4 ul items
        items[i].textContent = itemsContent[i]; // change the text of each li
        items[i].classList.add(itemsClasses[i]); // add a class for each li
        items[i].classList.add("header-item");
        navbar.appendChild(items[i]); // add each element to parent(ul)
    }
    navbar.children[0].classList.add("active-item"); // add active-item class to first item(home) (ADD IT BACK TO FIRST CHILD WHEN FINISHED TESTING)
    list.appendChild(hamburgerMenu);
    return (list);
}

function tabsEvents(){
    const headerItems = document.querySelectorAll(".header-item");
    const contentItems = document.querySelectorAll(".content-item");
    const homeItem = document.querySelector("#header .home");
    const logo = document.querySelector(".header-logo");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileNavbar = document.querySelector("#header .navbar");
    const closeNavbar = document.querySelector(".close-navbar");
    headerItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (!e.target.classList.contains("active-item")){ // if the item isn't active already
                headerItems.forEach((item) => item.classList.remove("active-item")); // remove other active items
                e.target.classList.add("active-item");
                contentItems.forEach((item) => {
                    item.classList.remove("active-content");
                });
                const activeClass = e.target.classList[0]; // get first item class (Home/Menu/Location/Contact...)
                const activeContent = document.querySelectorAll("." + activeClass)[1]; // the second node should be the active content item
                activeContent.classList.add("active-content");
            }
        })
    });

    logo.addEventListener("click", (e) => {
        if (e.target.classList.contains("header-logo")){
            homeItem.click();
        }
    });

    hamburgerMenu.addEventListener("click", (e) => {
        if (e.target.classList.contains("hamburger-menu")){
            mobileNavbar.style.display = "grid";
            closeNavbar.style.display = "grid";
        }
    });

    closeNavbar.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-navbar")){
            mobileNavbar.style.display = "none";
            closeNavbar.style.display = "none";
        }
    });
}

function createHeader(){
    const header = document.createElement("div");
    header.id = "header";
    header.appendChild(createHeaderItems());
    return header;
}

body.insertBefore(createHeader(), contentDiv);
contentDiv.append(home(), menu(), visit(), contact());
tabsEvents();