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
    headerLogo.classList.add("header-logo");
    headerLogo.setAttribute("src", "../images/logo.png")
    list.appendChild(headerLogo);
    for (let i = 0; i < items.length; i++){
        items[i] = document.createElement("li"); // create 4 ul items
        items[i].textContent = itemsContent[i]; // change the text of each li
        items[i].classList.add(itemsClasses[i]); // add a class for each li
        items[i].classList.add("header-item");
        list.appendChild(items[i]); // add each element to parent(ul)
    }
    list.children[0].classList.add("active-item"); // add active-item class to first item(home) (ADD IT BACK TO FIRST CHILD WHEN FINISHED TESTING)
    return (list);
}

function selectTab(){
    const headerItems = document.querySelectorAll(".header-item");
    const contentItems = document.querySelectorAll(".content-item");
    const homeItem = document.querySelector("#header .home");
    const logo = document.querySelector(".header-logo");
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
}

function createHeader(){
    const header = document.createElement("div");
    header.id = "header";
    header.appendChild(createHeaderItems());
    return header;
}

body.insertBefore(createHeader(), contentDiv);
contentDiv.append(home(), menu(), visit(), contact());
selectTab();