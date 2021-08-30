function getStoredTeddies () {
    let storedTeddies = JSON.parse(localStorage.getItem('addTeddy'));
    if (storedTeddies) {
        document.querySelector('#contentTeddies').innerHTML = getTeddies(storedTeddies);
    }
}
//mettre les données dans le tableau
function getTeddies(storedTeddies) {
    products = [];
    let som = 0;
    let result = '';
    for(teddy of storedTeddies) {
        result += '<tr>\n' +
            // '        <td>'+teddy.id+'</td>\n' +
            '        <td>'+teddy.name+'</td>\n' +
            '        <td>'+teddy.color+'</td>\n' +
            '        <td>'+teddy.quantity+'</td>\n' +
            '        <td>'+teddy.price+' €</td>\n' +
            '        <td>'+teddy.price * teddy.quantity+' €</td>\n' +
            ' </tr>'
         som += teddy.price * teddy.quantity;
        // Envoi du montant total de la commande au localStorage
        localStorage.setItem('totalPrice', som)
    }
    //total
    document.querySelector('#total').innerHTML = 'Total panier: '+som +'€';
    return result;
}
getStoredTeddies();

//Formulaire et Validation
// Fonction expression régulière (REGEX) pour valider prénom, nom et ville
function validFirstnameLastnameCity(value) {
    return /^[A-Z-a-zéèàùôê\s]{3,40}$/.test(value)
}
// Fonction expression régulière (REGEX) pour valider adresse
function validAddress(value) {
    return /^[A-Z-a-z-0-9éèàùôê\s]{5,80}$/.test(value)
}
// Fonction expression régulière (REGEX) pour valider adresse email
function validMail(value) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');
// Vérification de la validité du prénom
firstName.addEventListener('change', function (event) {
    if (validFirstnameLastnameCity(firstName.value)) {} else {
        event.preventDefault()
        alert("Ce prénom n'est pas valide, veuillez en renseigner un nouveau.")
    }
})
// Vérification de la validité du nom
lastName.addEventListener('change', function (e) {
    if (validFirstnameLastnameCity(lastName.value)) {} else {
        e.preventDefault()
        alert("Ce nom n'est pas valide, veuillez en renseigner un nouveau.")
    }
})
// Vérification de la validité de l'adresse
address.addEventListener('change', function (e) {
    if (validAddress(address.value)) {} else {
        e.preventDefault()
        alert("Cette adresse n'est pas valide, veuillez en renseigner une nouvelle.")
    }
})
// Vérification de la validité de la ville
city.addEventListener('change', function (e) {
    if (validFirstnameLastnameCity(city.value)) {} else {
        e.preventDefault()
        alert("Ce nom de ville n'est pas valide, veuillez en renseigner un nouveau.")
    }
})
// Vérification de la validité de l'adresse mail
email.addEventListener("change", function (e) {
    if (validMail(email.value)) {} else {
        e.preventDefault()
        alert("Cette adresse mail n'est pas valide, veuillez en renseigner une nouvelle (exemple d'adresse valide : jean.dupont@gmail.com).")
    }
})
//On soumet le formulaire d'ajout
document.getElementById("formConfirm").addEventListener("submit", function (event){
    event.preventDefault();
    if (validFirstnameLastnameCity(firstName.value) && validFirstnameLastnameCity(lastName.value) && validAddress(address.value) && validFirstnameLastnameCity(city.value) && validMail(email.value)) {
        event.preventDefault()
        const storagePrice = localStorage.getItem('totalPrice')
        // Création d'une variable qui comprends les données du formulaire
        let contact = {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value,
        }
        let products = []
        let storedTeddies = JSON.parse(localStorage.getItem('addTeddy'));
        for (let storedTeddy of storedTeddies) {
            let productsId = storedTeddy.id
            products.push(productsId)
        }
        let send = {
            contact,
            products,
        }
        const post = async function (data) {
            try {
                let response = await fetch("http://localhost:3000/api/teddies/order", {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    let data = await response.json()
                    localStorage.setItem('Order', data.orderId)
                    window.location = 'confirmation.html'
                    localStorage.removeItem('addTeddy')
                } else {
                    event.preventDefault();
                    console.error('Retour du serveur : ', response.status)
                    alert('Erreur rencontrée : ' + response.status)
                }
            } catch (error) {
                alert("Erreur : " + error)
            }
        }
        post(send)
    }
});

document.getElementById('clear').addEventListener('click', function (){
    document.getElementById('table').style.display = 'none';
    localStorage.clear();
    window.location = '../../index.html';
})
let storedTeddies = JSON.parse(localStorage.getItem('addTeddy'));
if (storedTeddies == null) {
    document.getElementById('table').style.display = 'none';
    document.getElementById('formConfirm').style.display = 'none';
    document.getElementById('clear').style.display = 'none';
    document.getElementById('h2_panier').style.display = 'none';
 
}
if(storedTeddies !== null){
    document.getElementById('h1_panier').innerHTML = "Mon panier";
    document.getElementById('lien_panier_vide').innerHTML = "";
}

