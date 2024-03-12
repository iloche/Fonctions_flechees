let wings = document.querySelector(".wings"),
    introduction = document.querySelector(".introduction"),
    outro = document.querySelector(".outro")

wings.addEventListener("click", () => {
    introduction.classList.toggle('show');
    outro.classList.toggle('show');
})

// 🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙

// 🌙 // // // // // // Fonctions traditionnelles // // // // // 🍓

// 🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙

// // Déclaration de variables
// let myInput = document.querySelector("input"),
//     myButton = document.querySelector("button"),
//     myPara = document.querySelector(".name");

// function salutation(prenom) {
//     if(myInput.value != ""){
//         myPara.innerHTML = `Coucou ${prenom}, comment vas-tu ?`;
//         myInput.value = "";
//     }      
// }

// // Événement sur le bouton "myButton"
// myButton.addEventListener('click', function(){
//     salutation(myInput.value);
// });

// 🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙

// 🌙 // // // // // // Fonctions fléchées // //  // // // // // 🍓

// 🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙🍓🌙

// // Déclaration de variables
// let myInput = document.querySelector("input"),
//     myButton = document.querySelector("button"),
//     myPara = document.querySelector(".name");

// // Définition de la fonction fléchée salutation
// const salutation = prenom => { // La fonction prend un paramètre prenom donc pas de parenthèses, si plusieurs paramètres alors parenthères
//     // Vérifie si la valeur de l'input n'est pas vide
//     if (myInput.value !== "") {
//         // Injection du contenu HTML
//         myPara.innerHTML = `Coucou ${prenom}, comment vas-tu ?`;
//         // Réinitialise la valeur de mon input
//         myInput.value = "";
//     }
// };

// // Événement sur le bouton "myButton"
// myButton.addEventListener('click', () => {
//     salutation(myInput.value);
// });