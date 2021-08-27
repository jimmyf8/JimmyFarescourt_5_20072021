

//Récupérer et afficher les données sur la page web et implation

document.querySelector("#id");
console.log(document.querySelector("#id").innerHTML = localStorage.getItem("Id"));
document.querySelector("#total");
console.log(document.querySelector("#total").innerHTML = " votre total est de  " +  localStorage.getItem("Total") + " €");

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


//création d'un objet

const newUser = {
    lastName: "Nom",
    firstName: "Prenom",
    adress: "adress",
    city: "Ville",
    email: "Email",
   
};

const promise = fetch("http://localhost:3000/api/teddies/order", {
    method:"POST",
    body: JSON.stringify(newUser),
    headers:{
        "Content-Type": "application/json",
    },
});

promise.then(async (response) => {
    try{
        console.log(response);
        const contenu = await response.json();
        console.log(contenu);

    }
    catch (e) {
        console.log(e);
    }
});