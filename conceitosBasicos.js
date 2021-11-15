var nome= 'Vitor';
var teste= 'Diego';
var idade= 24;
console.log(nome);
console.log(nome.length);
console.log(nome.toUpperCase()); // texto em caixa alta
console.log(nome.toLowerCase()); // texto em minusculo
console.log(nome.indexOf('tor')); // verifica em qual posição do index começa a palavra passada como parametro 
console.log(nome.replace(nome,teste)); //substitui uma variavel pela outra

console.log(nome.slice(1,4)); //escreve o intervalo entre 1 e 4 do index da variavel
var espaco= '           espaço';
console.log(espaco);
console.log(espaco.trim()); // retira o espaço a esquerda do texto

console.log(7 ** 2); // exponenciação
console.log(10%3); // modulação

console.log(2>3);
console.log('4'==4); //comparação fraca, pois nao se distingue os tipos da variável
console.log('4'===4); // comparação que distinge os tipos de variável

var n1 = true;
var n2= false;

console.log(!n1); // nega um booleano e verifica se é falso
console.log(!n2);
console.log(!!n2); // negação de uma outra negação

// null, undefined, '', 0 e false = são considerados como false no javascript 

console.log(!!'');
console.log(!!0);
console.log('teste' && 29 && 'teste de lógica'); // escreve o ultimo verdadeiro
console.log('vitor' && 12 && 2 && 'teste' && 0 && 38) ; // escreve o falso

console.log(0 || 'teste' || 12); //retorna o primeiro verdadeiro

console.log('vitor' && 12 && 2 || 'teste' && 0 && 38); //retorna o ultimo verdadeiro &&

var idade=24;

console.log(idade<18 ? 'Menor de idade' : 'Maior de idade'); // ternario, condicional abreviado

switch(idade){
    case 10:
        console.log('tem 10 anos ');
        break;

    case 20: 
        console.log('tem 20 anos');
        break;

    default:
        console.log('tem '+idade+ ' anos');        
}

var numeros=[3,10,230,12,34];
        console.log(numeros);
        console.log(numeros.pop()); //remove o ultimo numero do array
        console.log(numeros); 
        console.log(numeros.slice(1,6));//escreve os numeros entre a posição 2 e 6
        console.log(numeros.slice(2)); //escreve os numeros a partir da posicao 2
        console.log(numeros.join(':')); // converte o array em string, o separador entre os numeros como parametro
        console.log(numeros.includes(10)); // verifica se tem o valor no parametro existente no array
        console.log(numeros.indexOf(10));//Informa qual posiçao o valor do parametro está no array
        console.log(numeros.indexOf(20)); // Caso nao exista numero do parametro no array, é retornado o valor -1
       var numeros2=[10,2390,2130,212,3234];
       var resultado= numeros.concat(numeros2); // concatena os arrays

        console.log(resultado);


        var resultado2=[...numeros,...numeros2]; //forma abreviada de juntar arrays
        console.log(resultado2);


// Parte 2


    // var contagem=1;

    /*
    
    while(contagem <=100){   //Usando o while
        if(contagem%5==0 && contagem%3==0){
            document.write("<br>"+contagem+" = Ping pong");
        }else if(contagem%3==0){
            document.write(`<br>${contagem} = ping`);  // forma alternativa de concatenar string com número
        }else if(contagem%5==0){
            document.write(`<br>${contagem} = pong`);
        }
        ++contagem;
    }
    
    */
    

    /*
    
    for(var contagem=1;contagem<=100;contagem++){  //usando o for
        if(contagem%5==0 && contagem%3==0){
            document.write("<br>"+contagem+" = Ping pong");
        }else if(contagem%3==0){
            document.write(`<br>${contagem} = ping`);  // forma alternativa de concatenar string com número
        }else if(contagem%5==0){
            document.write(`<br>${contagem} = pong`);
        }
    }
    
    */

    var vetor=[10,23,12,21,93,8,90,12,8,78,1767];
    
    /*for(contador=0;contador<vetor.length;contador++){
        document.write(vetor[contador]+"<br>");
    }
    
    */

    /*for( var contante= vetor.length-1;contante>=0;contante--){
        document.write(vetor[contante]+"<br>");
    }
    */

    /*
    for(contador=0;contador<=100;contador++){
        
         if(contador%2===0){
            document.write("<br>módulo de 2")
             continue;
       
         }

         
        document.write("<br>utilizado o break")
    }
    */

    for(var numeros of vetor){
        document.write(numeros+"<br>"); //escreve o array de forma simplificada
    }

   // window.alert('teste'); // alerta
   
   var logico =window.confirm("Deseja continuar os estudos?"); // Confirmação

   var teste =window.prompt("Continuando..."); // abre janela pro usuário inserir um valor

   // = em javascript significa "recebe"
   

   window.alert(logico+"\n"+teste);



    


