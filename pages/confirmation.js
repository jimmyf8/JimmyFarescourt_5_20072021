if(localStorage.getItem("Quantité") != null)
h1.textContent = `Vous avez commandé ${localStorage.getItem("Quantité")} produit`;

if(localStorage.getItem("Quantité") != null && localStorage.getItem("Quantité") >1)
h1.textContent = `Vous avez commandé ${localStorage.getItem("Quantité")} produits`;