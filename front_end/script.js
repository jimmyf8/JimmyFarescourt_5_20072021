main()

async function main() {
  const articles = await getArticles()
  for (article of articles) {
    displayArticle(article)
  }
  
  
}

function getArticles() {
  return fetch('http://localhost:3000/api/teddies')
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

function displayArticle() {
  document.getElementById("main").innerHTML += `
  <div  class="card" id="main">
    <img class="card-img-top" src="${article.imageUrl}" alt="Card image cap" id="img">
    <div class="card-body">
      <h5 class="card-title" id="name">${article.name}</h5>
      <p class="card-text" id="description">${article.description}</p>
      <p class="card-text" id="_id">identifiant: ${article._id}</p>
      <p class="card-text" id="price">${article.price}/100</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>      
  `
}
  
  