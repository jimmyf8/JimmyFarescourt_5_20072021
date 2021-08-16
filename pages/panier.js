// ajouter une donnée dans le local storage
Confirmer_la_commande.onclick = () =>{
    localStorage.setItem("Nom",Nom.value);
    localStorage.setItem("Prénom",Prenom.value);
    localStorage.setItem("Email",Email.value);
    
    
}
//affiche message de confirmation
function displayMessage(message) {
    const templateElement = document.getElementById("templateMessage")
    document.getElementById("container").appendChild(templateElement)
  
}

if(localStorage.getItem("Quantité") != null)
titre_panier.textContent = `Voici le récapitulatif de vos commandes`;

//récupérer une donnée dans le local storage
 let maDonneeNom = localStorage.getItem("Nom");
 let maDonneePrix = localStorage.getItem("Prix");
 let maDonneeQuantite = localStorage.getItem("Quantité");
 console.log(maDonneeNom);
 console.log(maDonneePrix);
 console.log(maDonneeQuantite);


//supprimer une donnée dans le local storage
//  localStorage.removeItem("Prénom")

//supprimer le local storage
clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}
//écoute du formulaire
document.getElementById("formulaire").addEventListener("submit", function(){
   
    var erreur;
    var inputs = document.getElementById("input");

    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else{
        alert('Formulaire envoyé!')
    }
    
});

//tableau
let data = [];
data [data.length] = maDonneeQuantite;
data [data.length] =maDonneePrix;
data [data.length] = maDonneeNom;

console.log(data);

var Nom = localStorage.getElementById("resultat_panier").textContent = maDonneeQuantite;


//function

function getStoredTeddies () {
    let storedTeddies = Json.parse(localStorage.getItem('addTeddy'))
    if (storedTeddies) {
        let table ='';
        table +=  `  <table class="table table-dark">
        <thead>
          <tr>
            <th id="Nom_panier">Libellé</th>
            <th id="Quantite_panier">Quantité</th>
            <th id="Prix_panier">Prix</th>
            <th id="Couleur_panier">Couleur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td id ="resultat_panier">Doe</td>
            <td>0</td>
            <td>noir</td>
          </tr>
        </tbody>
        <input type="submit" value="vider le panier" id="clear">
      </table>`
                document.querySelector('').innerHTML = table
    }
}

function getTeddies(storedTeddies) {
    let result ='';
    for (teddy of storedTeddies) {
        result +=   `<th>Libellé</th>
                    <th id ="resultat_panier">maDonneeQuantite</th>
                    <th>article.name/th>
                    <th>Couleur</th>  
                    <td><button><span class=" glyphicon glyphicon-remove">"onclick"</span></button></td>`  
    }
    return result;
}
getStoredTeddies()

//récapitulatif
if(localStorage.getItem("Quantité") != null)
h1.textContent = `Vous avez commandé ${localStorage.getItem("Quantité")} produit`;

if(localStorage.getItem("Quantité") != null && localStorage.getItem("Quantité") >1)
h1.textContent = `Vous avez commandé ${localStorage.getItem("Quantité")} produits`;