const text = document.querySelector("#text");
const contactBtn = document.querySelector("#btn");
const langBtn = document.querySelector("#lang-btn");
const createdBy = document.querySelector("#crt");
let isEnglish = true;

console.log(text, contactBtn, langBtn.attributes[3].value);

function changeLanguage() {
    if(isEnglish) {
        text.innerHTML = "Cześć! Jesteśmy młodym zespołem specjalizującym się w tworzeniu stron internetowych oraz rozwiązań Business Intelligence dla małych i średnich firm. Zajmujemy się także grafiką komputerową oraz tworzymy i zarządzamy wizytówkami google.";
        contactBtn.innerHTML = "Kontakt";
        langBtn.attributes[3].value = "/assets/brand/english.png";
        createdBy.innerHTML = "Strona stworzona przez";
        isEnglish = false;
    } else {
        text.innerHTML = "Hi! We are a young team from Poland that specializes in web development and bespoke business intelligence solutions for small and medium size companies. We also create graphic designs and manage google my business profiles.";
        contactBtn.innerHTML = "Contact Us";
        langBtn.attributes[3].value = "/assets/brand/polish.png";
        createdBy.innerHTML = "Created by";
        isEnglish = true;
    }
}