const generateBtnEl = document.getElementById('generate_button');

const singleHexColorGenerator = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
                let random = Math.floor(Math.random() * hex.length);
                // hexColor = hexColor + random;
                hexColor += hex[random];
        }
        return hexColor;
}


const colorGenerator = () => {
        const color = [];
        for (let i = 0; i < 4; i++) {
                color.push(singleHexColorGenerator());
        }
        return color;
}

const renderColor = () => {
        const colorsContainerEl = document.querySelector('.color_container')
        colorsContainerEl.innerHTML = "";
        const color = colorGenerator();
        color.forEach((color, i) => {
                const colorDiv = document.createElement("div");
                colorDiv.id = `color${i + 1}`;
                colorDiv.style.background = color;

                const colorTag = document.createElement('p');
                colorTag.id = `color${i + 1}Tag`;
                colorTag.className = "colorTag";
                colorTag.innerHTML = color;
                colorDiv.appendChild(colorTag)
                colorsContainerEl.appendChild(colorDiv)
        });
};

generateBtnEl.addEventListener('click', renderColor);