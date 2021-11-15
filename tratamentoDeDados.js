var numero = "12";
var numero2= Number.parseInt(numero);

// window.alert("A variável "+numero+" é uma "+typeof numero);
// window.alert("A variável "+numero+" é agora um "+typeof numero2);
var n1= 2.3;

window.alert("A variável "+n1+" é um float");
var n2=Number.parseInt(n1);

window.alert("A variável "+n2+" é um inteiro");

var texto = String(n2); //converte pra String

window.alert("A variável "+n2+" é agora um"+ typeof texto);
window.alert(`${texto} é uma ${typeof texto} e ${n2} é um ${typeof n2}`)