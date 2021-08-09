//hydrate les données du produit
(async function(){
  const articleId = getArticleId()
  const article = await getArticle(articleId)
  hydrateArticle(article)

})()
//récupère l'id
function getArticleId() {
  const queryString_url_id = window.location.search;
  const getArticleId = queryString_url_id.slice(10);
  return getArticleId
}
//récupère le produit
function getArticle(articleId){
  return fetch(`http://localhost:3000/api/teddies/${articleId}`)
  .then(function(httpBodyResponse) {
    return httpBodyResponse.json()
  })
  .then(function(articles) {
    return articles
  })
  .catch(function(error) {
    alert(error)
  })
}

//intégration des données du produit
function hydrateArticle(article){
  document.getElementById("name").textContent = article.name
  document.getElementById("price").textContent = (article.price / 100) + ",00 €"
  document.getElementById("description").textContent = article.description
  document.getElementById("color1").textContent = article.colors[0]
  document.getElementById("color2").textContent = article.colors[1]
  document.getElementById("color3").textContent = article.colors[2]
  document.getElementById("color4").textContent = article.colors[3]
 
  document.getElementById("img").src = article.imageUrl
}


