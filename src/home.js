export default function home(){
    const HomeContent = document.createElement('div');
    const imageDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const awardsDiv = document.createElement('div');

    HomeContent.classList.add("Home", "content-item"); // ADD active-content when finished testing
    imageDiv.classList.add("image-div");
    descriptionDiv.classList.add("description-div");
    awardsDiv.classList.add("awards-div");

    const boldTitle = document.createElement('p');
    const slogan = document.createElement('p'); 
    const description = document.createElement('p'); 

    boldTitle.innerText = "Home Burger Bar";
    slogan.innerText = "Because There is no place like Home.";
    description.innerText = `Since the conception of Home Burger Bar to its current execution, the mission remains the same: influencing the idea of the perfect burger bar.

    This is why we cook with heart and create out of passion. At Home Bar Burger we prefer brie for cheese and we braise our meats.
    We place eclectic over specific and mix ingredients with a hunger for new experiences. Expect of us to be different and look forward to be surprised. In return we will serve you a new culture where there is no needed timing for comfort dining, service is caring and indulging means sharing.`;
    slogan.classList.add("medium-text");
    boldTitle.classList.add("big-text");
    description.classList.add("small-text");

    for (let i = 0; i < 5; i++){ // create 5 nodes and add awards to each one
        let img = document.createElement('img');
        img.setAttribute("src", "../images/s1 " + i + ".png");
        awardsDiv.appendChild(img);
    }

    imageDiv.appendChild(boldTitle);
    imageDiv.appendChild(slogan);
    descriptionDiv.appendChild(description);
    HomeContent.appendChild(imageDiv);
    HomeContent.appendChild(descriptionDiv);
    HomeContent.appendChild(awardsDiv);
    return (HomeContent);
}