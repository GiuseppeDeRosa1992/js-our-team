function printPage (name, job, img) {
    div.innerHTML += 
    `<div class="card text-center p-2">
        <h1>${name}</h1> 
        <h2>${job}</h2>
        <img src="../img/${img}">${img}</img>
    </div>`
}