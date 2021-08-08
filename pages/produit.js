(async function(){
  const articleId = getArticleId()
  const article = await getArticle(articleId)
  hydrateArticle(article)

})()

function getArticleId() {
  const queryString_url_id = window.location.search;
  const getArticleId = queryString_url_id.slice(10);
  return getArticleId
}

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
function hydrateArticle(article){
  document.getElementById("name").textContent = article.name
  document.getElementById("price").textContent = (article.price / 100) + "   euros"
  document.getElementById("description").textContent = article.description
  document.getElementById("img").src = article.imageUrl
}

localStorage.setItem('name', 'Nobert');