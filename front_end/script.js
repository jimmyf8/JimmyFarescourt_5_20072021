fetch('http://localhost:3000/api/teddies')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
.then(function(value){
    for (let val of value){
        console.log(val.imageUrl);
    }
})
.catch(function(err) {
    /*Une erreur est survenue*/
});

fetch('http://localhost:3000/api/teddies')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
.then(function(value){
    for (let val of value){
        console.log(val._id);
    }
})
.catch(function(err) {
    /*Une erreur est survenue*/
});

fetch('http://localhost:3000/api/teddies')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
.then(function(value){
    for (let val of value){
        console.log(val.name);
    }
})
.catch(function(err) {
    /*Une erreur est survenue*/
});

fetch('http://localhost:3000/api/teddies')
.then(function(res){
    if (res.ok){
        return res.json();
    }
})
.then(function(value){
    for (let val of value){
        console.log(val.price);
    }
})
.catch(function(err) {
    /*Une erreur est survenue*/
});
const names = 'name' ;
const body = document.getElementById('name');

for(let name of names) {
  let newDiv = document.createElement('div');
}

let name = document.getElementById("name").innerHTML;


const h1 = document.getElementById('name');
const imageUrl = 'http://localhost:3000/api/teddies';

function afficheNom(name) {
    return document.createElement(name);
    console.log(name);
}

let div = document.querySelector('.container');

let p = document.createElement('p');
p.textContent = 'JS DOM';
div.appendChild(p);


   