export default function visit(){
    const visitContent = document.createElement('div');
    visitContent.classList.add("visit-us", "content-item", "active-content");
    const visitTitle = document.createElement('p'); // to change later for h1
    visitTitle.innerText = "Visit Us";
    visitTitle.classList.add("big-text");
    const links = document.createElement('div');
    const visitAddress = document.createElement('a');
    visitAddress.innerText = "Rue de Rivoli, 75001 Paris, France";
    visitAddress.href = "https://goo.gl/maps/1NWiLJXigpfxH4xV9";
    visitAddress.target = "_blank";
    const visitNumber = document.createElement('a');
    visitNumber.innerText = "(212)-420-1337";
    visitNumber.href = "tel:2124201337";
    visitNumber.target = "_blank";
    links.append(visitAddress, visitNumber);
    const visitHours = document.createElement('div');
    const mondayThursday = document.createElement('h3');
    mondayThursday.innerText = "Monday - Thursday";
    const firstHours = document.createElement('p');
    firstHours.innerText = "1:00 PM - 11:00 PM";
    const fridaySunday = document.createElement('h3');
    fridaySunday.innerText = "Friday - Sunday";
    const secondHours = document.createElement('p');
    secondHours.innerText = "1:00 PM - 1:00 AM";
    const HappyHour = document.createElement('h3');
    HappyHour.innerText = "Happy Hour"
    const happyHours = document.createElement('p');
    happyHours.innerText = "Saturday 6:00 PM - 9:00 PM";
    const map = document.createElement("p");
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7783276324208!2d2.3344402153108876!3d48.862437308376336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2912a319763f5826!2zNDjCsDUxJzQ0LjgiTiAywrAyMCcxMS45IkU!5e0!3m2!1sen!2sma!4v1650031098015!5m2!1sen!2sma" width="80%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    visitHours.append(mondayThursday, firstHours, fridaySunday, secondHours, HappyHour, happyHours);
    visitContent.append(visitTitle, links, visitHours, map);
    return (visitContent);
}