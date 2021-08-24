// //hydrate les données du produit
// (async function(){
//   const articleId = getArticleId()
//   const article = await getArticle(articleId)
//   // hydrateArticle(article)
//
// })()
// //récupère l'id
// function getArticleId() {
//   const queryString_url_id = window.location.search;
//   const getArticleId = queryString_url_id.slice(10);
//   return getArticleId
// }
const urlParams = new URLSearchParams(window.location.search)
const articleId = urlParams.get('id')
//récupère le produit
fetch(`http://localhost:3000/api/teddies/${articleId}`)
    .then((response) => {
      return response.json()
    })
    .then ((data) => {
      hydrateArticle(data);
    })
    .catch(function(error) {
      alert(error)
    })
//intégration des données du produit
function hydrateArticle(article){
  document.getElementById("name").innerHTML = article['name']
  document.getElementById("price").innerHTML = (article['price'] / 100) + ",00 €"
  document.getElementById("description").innerHTML = article['description']
  document.getElementById("img").src = article['imageUrl']
  document.getElementById("select").innerHTML = getColor(article['colors']);
    getDataTeddies(article);
}

function getColor(colors) {
    let value = '';
    for(let color of colors) {
        value += '<option>'+color+'</option>'
    }
    return value;
}

// ajouter une donnée dans le local storage
function  getDataTeddies(article) {
        document.querySelector("#btn_panier").addEventListener("click", function () {
        let teddiesChosen = {
            name: article['name'],
            id: article['_id'],
            color: document.querySelector("#select").value,
            quantity: document.querySelector("#teddyQte").value,
            price: article['price']/100,
        }
        let storedTeddies = JSON.parse(localStorage.getItem('addTeddy'))
        if (storedTeddies) {
            storedTeddies.push(teddiesChosen);
            localStorage.setItem('addTeddy', JSON.stringify(storedTeddies));
            popupConfirmation(article);
        } else {
            storedTeddies = [];
            storedTeddies.push(teddiesChosen);
            localStorage.setItem('addTeddy', JSON.stringify(storedTeddies));
            popupConfirmation(article);
        }
    });
}

popupConfirmation = (data) => {
     if (window.confirm('Le doudou ' + data['name']+ ' version "' + select.value + '" a bien été ajouté à votre panier ! Souhaitez-vous continuer vos achats ? (Ok : Oui / Annuler : Voir accueil)')) {
        window.location.href = "panier.html";
        } else {
            window.location.href = "../index.html";
     }
}