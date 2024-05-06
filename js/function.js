console.log("Ciao Giuseppe")

//creo lista che contiene 6 oggetti con dentro ognuno delle caratteristiche diverse
let arrayObjects = [
    {
        Nome: "Wayne Barnett",
        Ruolo: "Founder & CEO",
        Immagine: "wayne-barnett-founder-ceo.jpg"
    },
    {
        Nome: "Angela Caroll",
        Ruolo: "Chief Editor",
        Immagine: "angela-caroll-chief-editor.jpg"
    },
    {
        Nome: "Walter Gordon",
        Ruolo: "Office Manager",
        Immagine: "walter-gordon-office-manager.jpg"
    },
    {
        Nome: "Angela Lopez",
        Ruolo: "Social Media Manager",
        Immagine: "angela-lopez-social-media-manager.jpg"
    },
    {
        Nome: "Scott Estrada",
        Ruolo: "Developer",
        Immagine: "scott-estrada-developer.jpg"
    },
    {
        Nome: "Barbara Ramos",
        Ruolo: "Graphic Designer",
        Immagine: "barbara-ramos-graphic-designer.jpg"
    },
]
//faccio console.log della lista degli oggetti finita
console.log(arrayObjects)

//creo ciclo con contatore per scorrere in tutta la lista arrayObjects
for (let i = 0; i < arrayObjects.length; i++) {
    //creo variabile di appoggio per gli arrayObjects in posizione i
    let arrayTeam = arrayObjects[i]
    //creo ciclo che mi identifica la chiave e la proprietà nella lista in tutti gli indici i
    for(let key in arrayTeam) {
        console.log("La chiave è:", key, "La proprietà è: ", arrayTeam[key] )
    }
}