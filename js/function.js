function printPage (name, job, img) {
    div.innerHTML += 
    `<div class="card text-center p-2 my-2">
        <figure>
            <img src="./img/${img}" class="w-25"></img>
        </figure>
        <h2>${name}</h2> 
        <h3>${job}</h3>
    </div>`
}