const numSecreto = Math.floor(Math.random() *10+1);

const adivina = () => {
    let a = prompt("Adivina el numero");

    if (a== numSecreto) {
        console.log("Adivinaste");
    } else {
        console.warn("Sigue intentando");
        console.log("El numero era " + numSecreto);
    }
};