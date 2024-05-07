async function getData(){
    // solicitud HTTP utilizando fetch
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c16171d43429540b148302f2064e85aa', {
        method: 'GET', // Método de la solicitud, en esta caso 'GET'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer <c16171d43429540b148302f2064e85aa>" // Incluye la API key en el encabezado de autorización
        }
    })
    const datas = await res.json();
    const pelis = document.getElementById("popular");
    const data = document.createElement("div");
    for(const key in datas.results){
        console.log(datas.results[key]);
        data.innerHTML += `<div class="populares"><img src='https://image.tmdb.org/t/p/w500${datas.results[key].poster_path}'>
                            <b>${datas.results[key].title}</b>
                            
                            <p>${datas.results[key].release_date}</p>
                            </div>`;
    }
    
    pelis.appendChild(data);
}
getData();