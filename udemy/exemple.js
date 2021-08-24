// //fonction 
// function addition(NombreA, NombreB){
//     return NombreA + NombreB
    
// }

// function multiplication(NombreA, NombreB){
//     return NombreA * NombreB
    
// }

// function soustraction(NombreA, NombreB){
//     return NombreA - NombreB
    
// }

// function division(NombreA, NombreB){
//     if(NombreB==0){
//         throw new Error("il ya une error");

//     }
//     return NombreA / NombreB
    
// }

// do{
//     var choix = Number (prompt('\nQue soutaitez-vous faire?\n 1 - Addition\n\n\n 2- Multiplication\n\n\n 3 - Soustraction\n\n\n 4 - Division\n'))
// } while (choix!=1 && choix!=2 && choix!=3 && choix!=4  )

// do{
//     var premierNombre = Number(prompt('donnez un 1er nombre'));
//     var deuxiemeNombre = Number(prompt('donnez un 2eme nombre'));
// } while(isNaN(premierNombre) || isNaN(deuxiemeNombre));


// try{
//     switch(choix){
//         case 1:
//             var resultat = addition(premierNombre,deuxiemeNombre);
//             alert(resultat);
//         break;
//         case 2:
//             var resultat = multiplication(premierNombre,deuxiemeNombre);
//             alert(resultat);
//         break;
//         case 3:
//             var resultat = soustraction(premierNombre,deuxiemeNombre);
//             alert(resultat);
//         break;
//         case 4:
//             var resultat = division(premierNombre,deuxiemeNombre);
//             alert(resultat);
//         break;
//         default:
//             throw new Error("il ya une error")
        
    
//     }
   
//     alert('voici le résultat ' + resultat);
// }
// catch (error){
//     alert(error);
// }

// for (let i=10; i>0; i--){
//     console.log(i);
  
// }
// let i = 0;
// console.log(i);


// function addition(x){
//     let y = x-1;
//     if(x<6){
        
        
//         while(y >0){
//             return x
//             addition(x+y) ;
//         }
//     }
//     else {
//         console.log(x);
//     }
// } 


// addition(5);

// function somme(nombre) {
//     if (nombre==1) {
//         return 1;
//     }
//     else{
//         return nombre +somme(nombre-1);
    
//     }
   
// }


// console.log(somme(50));

// let = tableau2d = [['thomas','pierre','paul' ],
// ['jacques','henri','marc']];
// tableau2d.splice(2,0,['30','45','70']);
// console.log(tableau2d);

// let listeDePays = ['France','Belgique','Japon'];

// for (const pays of listeDePays){
//     console.log(pays);
// }
//  let tableauAss = {
//      'prenom' : 'Mark',
//      'nom'    : 'z',
//      'poste'  : 'pdg'
//  };





//  function concatener(tableau) {
//     let chaine = '';
//     for (const valeur in tableau){
//         chaine += (valeur + ' : ' + tableau[valeur] + '\n');
//     }
//    console.log(chaine);
//  }
//  concatener(tableauAss);,


// let chien = {
//     race: 'shiba',
//     poil: 'court',
//     aboyer: function aboyer() {
//         console.log('waf , waf');
        
//     }
// }
// chien.aboyer();


   
    

// function addition(...nombres){
    
//     let resultat = '';
//     nombres.forEach(nombre => {
//       resultat += nombre;
//     })
//     console.log(resultat);
    
    
// };
// let data =  prompt('nombres?');
// let tableau = [data];
// let nbre1 = Number(console.log(data[0]));
// let nbre2 = Number(console.log(data[2]));
// let nbre3 = Number(console.log(data[4]));
// addition(tableau);


// // window.open('https://believemy.com');
// location .reload();
// screen.availWidth;