let currentFlowerAudio = null;

function display_info_card(flower) {
    document.getElementById('main-layout').classList.add('active');
    document.getElementById('date-selector-container').style.display = 'none';
    document.querySelectorAll('.header').forEach(el => el.style.display = 'none');

    const infoCard = document.getElementById('info-card');
    infoCard.classList.remove('long-name');
    if (flower.name === 'Lily of the Valley') infoCard.classList.add('long-name');

    document.getElementById('flower_name').textContent = flower.name;
    document.getElementById('flower_info_image').src = flower.image;
    document.getElementById('flower_info_image').alt = flower.name;
    document.getElementById('flower_description_content').textContent = flower.description;
    document.getElementById('flower_fun_fact').textContent = `Fun Fact: ${flower.funFact}`;

    const assetsPath = './assets/';
    function setCareLevel(elementId, label, iconFilename, count) {
        const el = document.getElementById(elementId);
        el.innerHTML = label;
        for (let i = 0; i < count; i++) {
            const img = document.createElement('img');
            img.src = assetsPath + iconFilename;
            img.alt = '';
            img.classList.add('care-level-icon');
            el.appendChild(img);
        }
    }
    setCareLevel('flower_difficulty', 'Difficulty: ', 'star.png', flower.difficulty);
    setCareLevel('flower_sunlight', 'Sunlight: ', 'sunlight.png', flower.sunlight);
    setCareLevel('flower_watering', 'Watering: ', 'water.png', flower.watering);

    document.getElementById('back-button').addEventListener('click', () => {
        document.getElementById('main-layout').classList.remove('active');
        document.getElementById('date-selector-container').style.display = 'block';
        document.querySelectorAll('.header').forEach(el => el.style.display = 'block');
    });

    currentFlowerAudio = new Audio(flower.sound);
    currentFlowerAudio.play();
}


function display_grid() {
    const grid = document.getElementById('flower_grid');

    const keys = Object.keys(flower_data).reverse();

    keys.forEach((i) => {
        const flower = flower_data[i];

        const card = document.createElement('button');
        card.classList.add('flower-card');
        card.id = i;
        card.type = 'button';

        const img = document.createElement('img');
        img.src = flower.image;
        img.alt = flower.name;

        card.appendChild(img);
        grid.appendChild(card);

        card.addEventListener('click', () => {
            display_info_card(flower);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    display_grid();

    document.getElementById('play-sound').addEventListener('click', () => {
        if (currentFlowerAudio) {
            currentFlowerAudio.currentTime = 0;
            currentFlowerAudio.play();
        }
    });

    document.getElementById('submit-date').addEventListener('click', () => {
        const birthdate = document.getElementById('birthdate').value;
        if (!birthdate) {
            alert('Please select a valid birthdate.');
            return;
        }

        const date = new Date(birthdate);
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const zodiac_sign = get_zodiac(month, day);
        if (!zodiac_sign) {
            alert('Could not determine zodiac sign. Please check your birthdate.');
            return;
        }
        display_info_card(flower_data[zodiac_sign]);
    });
});