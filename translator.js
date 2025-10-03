
const languageCodes = "es"
let greeting;

if (languageCodes === "es") {
    greeting = "Hola, Mundo!";
    
} else if(languageCodes === "fr") {
    greeting = "Bonjour, le monde!";
    
}else if(languageCodes === "de") {
    greeting = "Hallo, Welt!";
}else{
    greeting = "Hello, World!";
}

console.log(greeting);