if(localStorage.getItem("Quantité") != null)
h1.textContent = `Vous avez commandé ${localStorage.getItem("Quantité")} produit`;

if(localStorage.getItem("Quantité") != null && localStorage.getItem("Quantité") >1)
h1.textContent = `Vous avez commandé ${localStorage.getItem("Quantité")} produits`;

//Récupérer et afficher les données sur la page web
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
