//hydrate les données du produit
(async function(){
  const articleId = getArticleId()
  const article = await getArticle(articleId)
  // hydrateArticle(article)

})()
//récupère l'id
function getArticleId() {
  const queryString_url_id = window.location.search;
  const getArticleId = queryString_url_id.slice(10);
  return getArticleId
}
//récupère le produit
function getArticle(articleId){
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
}

//intégration des données du produit
function hydrateArticle(article){
  // console.log(article);
  document.getElementById("name").textContent = article['name']
  document.getElementById("price").textContent = (article['price'] / 100) + ",00 €"
  document.getElementById("description").textContent = article['description']
 
 
  document.getElementById("img").src = article['imageUrl']
}


// ajouter une donnée dans le local storage
btn_panier.onclick = () =>{
  console.log('ici');
 
  localStorage.setItem("Quantité",teddyNum.value)
  localStorage.setItem("Prix",teddyPrice)
  localStorage.setItem("Email",Email.value)
}
// if(localStorage.getItem("Quantité") != null)
//     h1.textContent = `Vous avez commandé ${localStorage.getItem("Quantité")}`;

//récupérer une donnée dans le local storage
let maDonneeNom = localStorage.getItem("Nom");
let maDonneePrenom = localStorage.getItem("Prénom");

console.log(maDonneeNom);
//supprimer une donnée dans le local storage
localStorage.removeItem("Prénom")

//supprimer le local storage
