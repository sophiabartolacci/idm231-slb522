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
            console.log(`Clicked on ${flower.name}`);
            const audio = new Audio(flower.sound);
            audio.play();
        });
    });
}

display_grid();