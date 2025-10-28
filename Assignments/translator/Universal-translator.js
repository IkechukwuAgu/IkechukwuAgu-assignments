const  languageCode ="fr";
let greetings;


if (languageCode === "es") {
    greetings = "Hola, Mundo!";
    
} else if (languageCode === "fr"){
    greetings = "Bonjour le monde!";
    
}else if (languageCode === "de") {
    greetings = "Hallo, Welt!";
} else {
    greetings = "Hello, World!";
}

console.log(greetings);
