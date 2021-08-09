main()
//affiche les produits
async function main() {
  const articles = await getArticles()
  for (article of articles) {
    displayArticle(article)
  }
  
  
}
//récupère les données
function getArticles() {
  return fetch("http://localhost:3000/api/teddies")
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
//implante dans le html
function displayArticle(article) {
  const templateElt = document.getElementById("templateArticle")
  const cloneElt = document.importNode(templateElt.content, true)

  cloneElt.getElementById("name").textContent = article.name
  cloneElt.getElementById("price").textContent = (article.price / 100) + ",00 €"
  cloneElt.getElementById("description").textContent = article.description
  cloneElt.getElementById("img").src = article.imageUrl
  cloneElt.getElementById("_id").textContent = "identifiant:   " + article._id
  cloneElt.getElementById("click").href += `?id = ${article._id}`

  
  document.getElementById("main").appendChild(cloneElt)
}


