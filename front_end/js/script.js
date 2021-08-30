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
    .then((httpBodyResponse) => {
      return httpBodyResponse.json()
    })
    .then((articles) => {
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
  cloneElt.getElementById("click").href += '?id='+ article._id
  document.getElementById("main").appendChild(cloneElt)
}


//fleche
const btn_fleche = document.querySelector('.btn_fleche');

btn_fleche.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})