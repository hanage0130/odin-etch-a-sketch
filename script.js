for (let i = 0; i < 16; i++) {
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.classList.add("row");
    content.id = `row${i}`;
    container.appendChild(content);
    for (let j = 0; j < 16; j++) {
        const container = document.querySelector(`#row${i}`);
        const content = document.createElement("div");
        content.classList.add("cell");
        content.style.borderStyle = "solid";
        content.style.borderWidth = "1px";
        content.style.height = "25px";
        content.style.width = "25px";
        container.appendChild(content);
        content.addEventListener("mouseover", () => {
            content.style.backgroundColor = "gray"
        })
        content.addEventListener("mouseleave", () => {
            content.style.backgroundColor = "white"
        })
    }
}