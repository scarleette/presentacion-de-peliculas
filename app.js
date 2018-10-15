$('.collapse').collapse()


fetch(`https://www.omdbapi.com/?apikey=348097f5&s=code&type=movie&plot=full`)
    .then(response => response.json())
    .then(data => {
    // console.log(data);
    leerObjeto(data);
});

function leerObjeto(data) {
    return new Promise ((resolve, reject) => {
        // console.log(data);
    const arrayPeliculas = data.Search;
    // console.log(arrayPeliculas);
    arrayPeliculas.forEach(elemento => {
        // console.log(elemento);
        const cajita = {
            nombre: elemento.Title,
            año: elemento.Year,
            imagen:elemento.Poster,
            id: elemento.imdbID
        };
        // console.log(cajita);
        resolve (cajita);
        despliegueCartelera(cajita)
        });
    });
};
   

function despliegueCartelera(cajita) {
    // console.log('holi');
    document.getElementById('pelicula').innerHTML +=
    `   <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="S${cajita.id}">
                    <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" 
                    data-target="#${cajita.id}" aria-controls="${cajita.id}">
                        <img id = "img1"src=${cajita.imagen} alt="">
                    </button>
                    </div>
                    </h5>
                </div>
                <div id="${cajita.id}" class="collapse" aria-labelledby="S${cajita.id}" 
                data-parent="#accordionExample">
                <div class="card-body">
                <div class = "info" >
                   <img src=${cajita.imagen} alt="">
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Rerum a nesciunt quia impedit provident hic perferendis ipsam voluptatibus odit!
                        Mollitia repellendus inventore eius iure aliquid quasi excepturi error vel.
                        Repudiandae!</p>
                    <div>
                </div>
            </div>
        </div>
    </br>`
};


function mostarPeliculas () {
    document.getElementById('pelicula').style.display = "block";
}
