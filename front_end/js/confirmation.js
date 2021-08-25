//Récupérer et afficher les données sur la page web et implation
document.querySelector("#nom");
console.log(document.querySelector("#nom").innerHTML = localStorage.getItem("Nom"));
document.querySelector("#prenom");
console.log(document.querySelector("#prenom").innerHTML = localStorage.getItem("Prenom"));
document.querySelector("#adresse");
console.log(document.querySelector("#adresse").innerHTML = localStorage.getItem("Adresse"));
document.querySelector("#ville");
console.log(document.querySelector("#ville").innerHTML = localStorage.getItem("Ville"));
document.querySelector("#codePostal");
console.log(document.querySelector("#codePostal").innerHTML = localStorage.getItem("Code postal"));

//efface les données
accueil.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}

retour.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}

panier.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}

ocorino1.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}

logo_nav.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}