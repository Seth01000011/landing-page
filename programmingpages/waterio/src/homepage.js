export default function buildHomePage() {
    const content = document.createElement("div");
    
    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("h2")
    title.textContent = ("Water.io");


    content.appendChild(header);
    header.appendChild(title);
    

    return content;
};