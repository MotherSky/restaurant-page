function setAttributes(elem, attrs) {
    Object.entries(attrs).forEach(([attr, value]) => {
      elem.setAttribute(attr, value);
    });
}

function createContactForm(){
    const formContainer =  document.createElement("div");
    formContainer.classList.add("form-container");
    const formName = document.createElement('input');
    setAttributes(formName, {"type": "text", "class": "field", "placeholder": "Name*"},);
    const formEmail = document.createElement('input');
    setAttributes(formEmail, {"type": "email", "class": "field", "placeholder": "Email*"},);
    const formNumber = document.createElement('input');
    setAttributes(formNumber, {"type": "tel", "class": "field", "placeholder": "Number"},);
    const formSubject = document.createElement('input');
    setAttributes(formSubject, {"type": "text", "class": "field", "placeholder": "Subject*"},);
    const formText = document.createElement("textarea");
    setAttributes(formText, {"class": "field", "placeholder": "Your Message"},);
    const formButton = document.createElement("button");
    setAttributes(formButton, {"class": "field", "type": "submit",});
    formButton.innerText = "Send";
    formContainer.append(formName, formEmail, formNumber, formSubject, formText, formButton);
    return (formContainer);
}

export default function contact(){
    const contactContent = document.createElement('div');
    contactContent.classList.add("contact", "content-item");
    const contactContainer = document.createElement('div');
    contactContainer.classList.add("contact-container");
    const contactTitle = document.createElement('p');
    contactTitle.innerText = "Contact Us";
    contactTitle.classList.add("big-text");
    const jobContact = document.createElement('p');
    jobContact.innerText = "For job opportunities, please send your resume to ";
    const email = document.createElement("a");
    email.innerText = "ataleb@student.1337.ma";
    email.href = "mailto:ataleb@student.1337.ma";
    jobContact.appendChild(email);
    const otherContact = document.createElement("p");
    otherContact.innerText = "For all other inquiries, send us a message via the form below and we’ll get back to you as soon as possible. Looking forward to hearing from you.";


    const formContainer =  createContactForm();
    contactContainer.append(contactTitle, jobContact, otherContact, formContainer);
    contactContent.appendChild(contactContainer);
    return (contactContent);
}