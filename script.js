function init(x) {
    for (let i = 0; i < 16; i++) {
        const container = document.querySelector(`#row${i}`);
        if (container === null) {
            break;
        }
        container.remove();
    }
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
            content.style.height = `${x}px`;
            content.style.width = `${x}px`;
            container.appendChild(content);
            content.addEventListener("mouseover", () => {
                content.style.backgroundColor = "gray"
            })
            content.addEventListener("mouseleave", () => {
                content.style.backgroundColor = "white"
            })
        }
    }
}

init(50);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let x = parseInt(prompt());
    console.log(x);
    if (isNaN(x) || x <= 0 || x > 100) {
        alert("Invalid");
    } else {
        init(x);
    }
});