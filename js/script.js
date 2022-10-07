// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
const btn = document.getElementById("calcola");
const calcolaBiglietto = function (){
    let km= document.getElementById("km").value;
    let age = document.getElementById("age").value;
    console.log(km);
    console.log(age);
    let prezzoBiglietto = 0.21 * km;
if (age<18){
    console.log(prezzoBiglietto -= prezzoBiglietto * 0.2); 
    document.getElementById("testo").innerHTML ="il biglietto costerà" + " " + prezzoBiglietto.toFixed(2)+"€"+" " +"e hai ottenuto uno sconto del 20%" ;
}else if(age>65){
    console.log(prezzoBiglietto -= prezzoBiglietto * 0.4) 
    document.getElementById("testo").innerHTML = "il biglietto costerà" + " " + prezzoBiglietto.toFixed(2)+"€"+" " +"e hai ottenuto uno sconto del 40%" ;
} else{
    console.log(prezzoBiglietto) 
    document.getElementById("testo").innerHTML = "il biglietto costerà" + " " + prezzoBiglietto.toFixed(2)+"€"
}
}
btn.addEventListener("click", calcolaBiglietto);

