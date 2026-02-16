function display_info_card(flower) {

    document.getElementById('flower_grid').style.display = 'none';
    document.querySelectorAll('.header').forEach(el => el.style.display = 'none');
    document.getElementById('date-selector-container').style.display = 'none';

    document.getElementById('info-card').style.display = 'block';
    document.getElementById('flower_name').textContent = flower.name;
    document.getElementById('flower_description').textContent = flower.description;
    document.getElementById('flower_fun_fact').textContent = `Fun Fact: ${flower.funFact}`;
    document.getElementById('flower_difficulty').textContent = 'Difficulty: ' + '⭐'.repeat(flower.difficulty);
    document.getElementById('flower_sunlight').textContent = 'Sunlight: ' + '☀️'.repeat(flower.sunlight);
    document.getElementById('flower_watering').textContent = 'Watering: ' + '💧'.repeat(flower.watering);

    document.getElementById('play_sound').addEventListener('click', () => {
        const sound = new Audio(flower.sound);
        sound.play();
    });

    document.getElementById('back-button').addEventListener('click', () => {
        document.getElementById('info-card').style.display = 'none';
        document.getElementById('flower_grid').style.display = 'grid';
        document.getElementById('date-selector-container').style.display = 'block';
        document.querySelectorAll('.header').forEach(el => el.style.display = 'block');
    });

    const audio = new Audio(flower.sound);
    audio.play();
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
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    display_grid();

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