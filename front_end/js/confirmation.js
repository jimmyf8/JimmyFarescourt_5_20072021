
let orderId = localStorage.getItem('Order')

// Récupération du prix total de la commande
let totalPrice = localStorage.getItem('totalPrice');
let text = '';
text += 'Numéro de commande: '+ orderId +  '\n'+ 
    '<br/>Montant total de votre commande: '+totalPrice + "€"
document.getElementById('recapitulatif').innerHTML = text;
// Efface le localStorage après avoir affiché le récapitulatif de la commande
localStorage.clear()
