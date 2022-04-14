function createModal(menuArray, imageSrc, titleText, id){
    const modalBg = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeBtn = document.createElement('div');
    closeBtn.innerText = "\u00D7";
    closeBtn.classList.add("close-btn");
    const menuImg = document.createElement('img');
    menuImg.setAttribute("src", imageSrc);
    const menuItems = document.createElement('div');
    const menuTitle = document.createElement('p'); // Main courses || cocktails
    menuTitle.textContent = titleText;
    const itemsContainer = document.createElement('div');

    modalBg.id = id;
    modalBg.classList.add("modal-bg");
    modalContent.classList.add("modal-content");
    menuImg.classList.add("menu-img");
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
    modalContent.append(closeBtn, menuImg, menuItems);
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
        ingredients: "Lettuce, tomato, braised and marinated chicken, Swiss cheese, chive ,mustard,& garlic sauce",
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

    createModal(burgersMenu, "../images/menu-burger.jpg", "Main courses", "main-courses-modal");
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
    ];

    createModal(cocktailsMenu, "../images/menu-cocktail.jpg", "Cocktails", "cocktails-modal");
}

export default function menu(){
    const menuContent = document.createElement('div');
    const imagesDiv = document.createElement('div');
    const mainCoursesDiv = document.createElement('div');
    const cocktailsDiv = document.createElement('div');
    const menuText = document.createElement('p');
    const mainCoursesText = document.createElement('p');
    const cocktailsText = document.createElement('p');

    menuContent.classList.add("Menu", "content-item", "active-content"); // remove active when finished testing
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