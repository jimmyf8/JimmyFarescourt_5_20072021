// le titre indique que le panier est vide
let h1 = document.querySelector("#h1_panier");
if(localStorage.getItem("addTeddy") != null)
h1.textContent = `Mon panier`;


//supprimer le local storage
clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();//recharge la page
}




//function

function getStoredTeddies () {
    let storedTeddies = JSON.parse(localStorage.getItem('addTeddy'));
    if (storedTeddies) {
        document.querySelector('#contentTeddies').innerHTML = getTeddies(storedTeddies);
    }
}
//mettre les données dans le tableau
function getTeddies(storedTeddies) {
    let som = 0;
    let result = '';
    for(teddy of storedTeddies) {
        result += '<tr>\n' +
            '        <td>'+teddy.name+'</td>\n' +
            '        <td>'+teddy.color+'</td>\n' +
            '        <td>'+teddy.quantity+'</td>\n' +
            '        <td>'+teddy.price+' €</td>\n' +
            '        <td>'+teddy.price * teddy.quantity+' €</td>\n' +
            ' </tr>'
         som += teddy.price * teddy.quantity;
    }
    //total
    document.querySelector('#total').innerHTML = 'Total panier: '+som +'€';
    return result;
}
function getSum(value) {
    let  sum = 0;
    sum = sum + value;
    return sum;
}
getStoredTeddies();



//bouton confirmer
let btnFormulaire = document.getElementById("confirmation");
console.log(btnFormulaire);

btnFormulaire.addEventListener("click", ()=>{
    //stocker les saisies dans le local storage
   
    localStorage.setItem("Nom", document.querySelector("#nom").value);
    localStorage.setItem("Prenom", document.querySelector("#prenom").value);
    localStorage.setItem("Adresse", document.querySelector("#adresse").value);
    localStorage.setItem("Ville", document.querySelector("#ville").value);
    localStorage.setItem("Code postal", document.querySelector("#codePostal").value);
    localStorage.setItem("Email", document.querySelector("#email").value);
    
    
   
});

//validation du formulaire   
confirmation.onclick = () =>{
    if(localStorage.getItem("Email") != ""){
                alert("vous avez validé la commande!");
                window.open("confirmation_de_commande.html");
            }
}
    



