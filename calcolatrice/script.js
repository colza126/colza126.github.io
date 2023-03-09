//variabili
var risultato;
var primoNumero;
var operazione;

function aggiornaLabel(numero) {
    // Seleziona l'elemento label
    var label = document.getElementById("monitor");
    
    // Aggiorna il testo della label
    if(numero > -1){
        label.innerHTML += numero;
    }else if(numero == -1){
        label.innerHTML = label.textContent.substring(0, label.textContent.length - 1);
    }else{
        label.innerHTML = ""
    }
}
//funzione che apprende che operazione si deve svolgere e prende and il primo numero 
//dell'operazione
function ap(OperazioneP){
    var label = document.getElementById("monitor");
    primoNumero = label.innerHTML
    operazione = OperazioneP
    label.innerHTML = ""
}
//conclude l'opeazione e stampa il risultato
function op(){
    var label = document.getElementById("monitor");
    secondoNumero = label.innerHTML
    primoNumero = parseInt(primoNumero)
    secondoNumero = parseInt(secondoNumero)
    if(operazione == "addizione"){
        risultato = primoNumero + secondoNumero
    }else if(operazione == "sottrazione"){
        risultato = primoNumero - secondoNumero
    }else if(operazione == "moltiplicazione"){
        risultato = primoNumero * secondoNumero
    }else if(operazione == "divisione"){
        risultato = primoNumero / secondoNumero
    }
    if(risultato == "NaN"){
        label.innerHTML = 0;
    }else{
        label.innerHTML = risultato;
    }
}