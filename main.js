const containerImg = document.querySelector('.container-img')

function getData(done) {
        const data = fetch('https://rickandmortyapi.com/api/character');
        data
        .then(personajes => personajes.json())
        .then(data => done(data))
}

getData(data => {
    response = data.results
    console.log(response)
    response.forEach(personaje => {
        console.log(personaje)

        let content = `
            <div class="character">
                <img src="${personaje.image}" alt="${personaje.name}">
                <h2>${personaje.name}</h2>
            </div>
        `;
        containerImg.innerHTML += content;
    });
});