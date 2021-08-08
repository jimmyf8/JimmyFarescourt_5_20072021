(async function(){
  const articleId = getArticleId()
  console.log(articleId)
  const article = await getArticle(articleId)
  hydrateArticle(article)

})()

function getArticleId() {
  const queryString_url_id = window.location.search;
  const getArticleId = queryString_url_id.slice(3);
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

}