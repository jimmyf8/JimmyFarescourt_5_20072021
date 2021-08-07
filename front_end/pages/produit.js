(async function(){
    const articleId = getArticleId()
    console.log(articleId)
    const article = getArticle(articleId)
    hydrateArticle(article)
})()

function getArticleId(){
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {

}

function hydrateArticle(article){

}