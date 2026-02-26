// @ts-check
let current_flower_audio = null;

const assets_path = './assets/';

function set_care_level(element_id, label, icon_filename, count) {
    const el = document.getElementById(element_id);
    el.innerHTML = label;
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = assets_path + icon_filename;
        img.alt = '';
        img.classList.add('care-level-icon');
        el.appendChild(img);
    }
}

function display_info_card(flower) {
    document.getElementById('main-layout').classList.add('active');

    const info_card = document.getElementById('info-card');
    info_card.classList.remove('long-name');
    if (flower.name === 'Lily of the Valley') {
        info_card.classList.add('long-name');
    }

    document.getElementById('flower_name').textContent = flower.name;
    document.getElementById('flower_info_image').src = flower.image;
    document.getElementById('flower_info_image').alt = flower.name;
    document.getElementById('flower_description_content').textContent = flower.description;
    document.getElementById('flower_fun_fact').textContent = `Fun Fact: ${flower.funFact}`;

    set_care_level('flower_difficulty', 'Difficulty: ', 'star.png', flower.difficulty);
    set_care_level('flower_sunlight', 'Sunlight: ', 'sunlight.png', flower.sunlight);
    set_care_level('flower_watering', 'Watering: ', 'water.png', flower.watering);

    current_flower_audio = new Audio(flower.sound);
    current_flower_audio.play();
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

function open_help() {
    const help_overlay = document.getElementById('help-overlay');
    help_overlay.classList.add('visible');
    help_overlay.setAttribute('aria-hidden', 'false');
}

function close_help() {
    const help_overlay = document.getElementById('help-overlay');
    help_overlay.classList.remove('visible');
    help_overlay.setAttribute('aria-hidden', 'true');
}

function handle_play_sound_click() {
    if (current_flower_audio) {
        current_flower_audio.currentTime = 0;
        current_flower_audio.play();
    }
}

function handle_submit_date_click() {
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
}

function init() {
    display_grid();

    document.getElementById('help-button').addEventListener('click', open_help);
    document.getElementById('help-close').addEventListener('click', close_help);
    document.getElementById('help-backdrop').addEventListener('click', close_help);

    document.getElementById('play-sound').addEventListener('click', handle_play_sound_click);
    document.getElementById('submit-date').addEventListener('click', handle_submit_date_click);
}

document.addEventListener('DOMContentLoaded', init);
