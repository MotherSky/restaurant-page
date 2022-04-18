function createModal(menuArray, imageArr, titleText, id){
    const modalBg = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeBtn = document.createElement('div');
    closeBtn.innerText = "\u00D7";
    closeBtn.classList.add("close-btn");
    const menuImgContainer = document.createElement('div');
    for (let i = 0; i < imageArr.length; i++){
        let menuImg = document.createElement('img');
        menuImg.setAttribute("src", imageArr[i]);
        menuImgContainer.appendChild(menuImg);
    }
    //const menuImg = document.createElement('img');
    //menuImg.setAttribute("src", imageArr);
    //menuImgContainer.appendChild(menuImg);
    const menuItems = document.createElement('div');
    const menuTitle = document.createElement('p'); // Main courses || cocktails
    menuTitle.textContent = titleText;
    const itemsContainer = document.createElement('div');

    modalBg.id = id;
    modalBg.classList.add("modal-bg");
    modalContent.classList.add("modal-content");
    menuImgContainer.classList.add("menu-img");
    menuItems.classList.add("menu-items");
    menuTitle.classList.add("menu-title");
    itemsContainer.classList.add("items");

    menuArray.forEach((elem) => {
        let item = document.createElement('div');
        item.classList.add("item");
        let leftSection = document.createElement('div');
        let rightSection = document.createElement('div');
        leftSection.classList.add("left-section");
        rightSection.classList.add("right-section");
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.innerText = elem.title;
        p.innerText = elem.ingredients;
        leftSection.append(h3, p);
        p = document.createElement('p');
        p.innerText = elem.price;
        rightSection.append(p);
        item.append(leftSection, rightSection);
        itemsContainer.append(item);
    })

    menuItems.append(menuTitle, itemsContainer);
    modalContent.append(closeBtn, menuImgContainer, menuItems);
    modalBg.appendChild(modalContent);
    document.body.appendChild(modalBg);
}

function createBurgersMenu(){
    let burgersMenu = [{
        title: "Burger Provençal",
        ingredients: "Rare cooking recommended! Salad, Tomato, Cheddar, Prepared Beef, (with tomato caviar, grated counting, herbs from Provence), French fries",
        price: "15$",
    },
    {
        title: "Burger L\’Authentique",
        ingredients: "Lettuce, tomato, marinated ground beef, caramelized onions, cheddar, Cornichons (tangy French pickles)",
        price: "15$",
    },
    {
        title: "Burger Le Fermier",
        ingredients: "Lettuce, tomato, braised and marinated chicken, Swiss cheese, chive, mustard, garlic sauce",
        price: "14$",
    },
    {
        title: "Burger Ibérique",
        ingredients: "Salad, Tomato, Emmental, Chorizo/Mayo Sauce, Marinated chicken (with tomato caviar and snacky chorizo), French fries",
        price: "14$",
    },
    {
        title: "Burger Végétarien",
        ingredients: "Galette de Légumes (carrot, corn, potato, onion, curry, egg), Salad, Tomato, White sauce (Saint-Morêt, dill, cucumber, citrus juice), French fries",
        price: "12$",
    },
    ];

    const burgersImgArray = ["images/menu-burger.jpg", "images/menu-burger1.jpg", "images/menu-burger2.jpg", "images/menu-burger3.jpg", "images/menu-burger4.jpg",
    ];
    createModal(burgersMenu, burgersImgArray, "Main courses", "main-courses-modal");
}

function createCocktailsMenu(){

    let cocktailsMenu = [{
        title: "North Cali Mojito",
        ingredients: "Sauvignon Blanc, Hendricks Gin, Midori, Ginger Liquor, Pineapple Juice, Cucumber & Basil",
        price: "12$",
    },
    {
        title: "Rockin' Red Mojito",
        ingredients: "Bacardi Dragon Berry, Grey Goose Pear Vodka, Cayenne, Mint & Lime",
        price: "12$",
    },
    {
        title: "Pirate Jack",
        ingredients: "Jack Honey, Absolute Vanilla, Baileys Irish Cream, Rum Raisin",
        price: "14$",
    },
    {
        title: "Piña Colada Royale",
        ingredients: "White & Malibu Rum, Pineapple, Coconut Milk, Creme de Cacao, Vanilla Bean",
        price: "14$",
    },
    {
        title: "Big Island Punch",
        ingredients: "Southern Comfort, Bacardi Dragon Berry, Mango, Fresh Lemon & Lime",
        price: "12$",
    },
    {
        title: "Camaro Red Sangria",
        ingredients: "Blackberry & Cherry Infused Vodka Merlot, Fresh Seasonal Fruits",
        price: "13$",
    },
    ];

    const cocktailsImgArray = ["images/menu-cocktail.jpg", "images/menu-cocktail1.jpg", "images/menu-cocktail2.jpg",
    ];
    createModal(cocktailsMenu, cocktailsImgArray, "Cocktails", "cocktails-modal");
}

let burgersIndex = 0;
let cocktailsIndex = 0;

function showSlides(selector, index) {
    let i;
    let slides = document.querySelectorAll(selector); //"#id img"
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    if (index == slides.length) {index = 0}    
    slides[index].style.display = "block";
    index++;
    setTimeout(showSlides, 2000, selector, index); // Change image every 2 seconds
}

/*let cocktailsIndex = 0;
function showCocktailSlides() {
    let i;
    let selector = "#cocktails-modal img"
    let slides = document.querySelectorAll(selector); //"#id img"
    console.log(`${selector} : index = ${cocktailsIndex}`);
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    cocktailsIndex++;
    if (cocktailsIndex == slides.length) {cocktailsIndex = 0}    
    slides[cocktailsIndex].style.display = "block";
    setTimeout(showCocktailSlides, 2000,); // Change image every 2 seconds
}*/

export default function menu(){
    const menuContent = document.createElement('div');
    const imagesDiv = document.createElement('div');
    const mainCoursesDiv = document.createElement('div');
    const cocktailsDiv = document.createElement('div');
    const menuText = document.createElement('p');
    const mainCoursesText = document.createElement('p');
    const cocktailsText = document.createElement('p');

    menuContent.classList.add("menu", "content-item");
    imagesDiv.classList.add("images-div");
    mainCoursesDiv.classList.add("main-courses");
    cocktailsDiv.classList.add("cocktails");
    menuText.classList.add("big-text");
    mainCoursesText.classList.add("medium-text");
    cocktailsText.classList.add("medium-text");
    mainCoursesText.id = "main-courses-text";
    cocktailsText.id = "cocktails-text";

    menuText.innerText = "Menu";
    mainCoursesText.innerText = "Main Courses";
    cocktailsText.innerText = "Cocktails";
    
    createBurgersMenu();
    createCocktailsMenu();
    showSlides("#main-courses-modal img", burgersIndex);
    showSlides("#cocktails-modal img", cocktailsIndex);
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id == "main-courses-text"){
            document.querySelector("#main-courses-modal").style.display = "flex";
        }
        if (e.target && e.target.id == "cocktails-text"){
            document.querySelector("#cocktails-modal").style.display = "flex";
        }
        if (e.target && e.target.classList.contains("close-btn")){
            e.target.parentNode.parentNode.style.display = "none";
        }
    });
    //createCocktailsModal(cocktailsText);

    mainCoursesDiv.appendChild(mainCoursesText);
    cocktailsDiv.appendChild(cocktailsText);
    imagesDiv.append(mainCoursesDiv, cocktailsDiv);
    menuContent.append(menuText, imagesDiv);
    
    return (menuContent);
}