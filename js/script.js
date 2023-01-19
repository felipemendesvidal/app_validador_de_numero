// vars 
 //pegar data atual
 let input_number = document.getElementById('input_number');
 let lista_adiconada_resultados = document.getElementById('select_resultado');
 let area_de_resultados = document.getElementById('resultado');
 //valores adicionados
 let valores_adicionados = [];
 


//verifica se é um numero
function isumnumero (numero_analisado){

    if(Number(numero_analisado) >= 1 && Number(numero_analisado)<= 100){
        return true;
    }else{
        return false;
    }
}


//verifica se o numero já esta na lista
function estanalista(numero_analisado, lista_analisada){
    if(lista_analisada.indexOf(Number(numero_analisado)) != -1){
        // -1 valor não encontrado na lista
        return true;

    }else{
        return false
    }

}

// função
function adicionar_numero(){

    

    //verifica se é um numero e se não esta na lista
    if (isumnumero(input_number.value) && !estanalista(input_number.value, valores_adicionados )){
        // colocar o valor na lista e de valores
        valores_adicionados.push(Number(input_number.value));
        // item que vai ser adicionado
        let item_option_criado = document.createElement('option');

        //valor do option
        item_option_criado.text = `Valor ${input_number.value} adicionado.`;
        
        //adicionando na lista
        lista_adiconada_resultados.appendChild(item_option_criado);
        area_de_resultados.innerHTML = '';
    }else{
        alert('valor invalido ou já em lista')
    }

    //limpar imput
    input_number.value = '';
    input_number.focus();
   
    
    
}


function finalizer_resultado(){
    if(valores_adicionados.length == 0){
        alert('adicone valores antes de finalizar');
    }else{

        let total_elementos = valores_adicionados.length;
        let valor_maior = valores_adicionados[0];
        let valor_menor = valores_adicionados[0];
        let soma_numeros = 0;
        let media_numeros = 0;


        // zerando o resultado visualmente 
        area_de_resultados.innerHTML = '';


        //maior ou menor numero verificação
        for(let para_cada_posicao in valores_adicionados){

            //soma dos numeros
            soma_numeros += valores_adicionados[para_cada_posicao]

            //testes se valores são maior ou menores
            if(valores_adicionados[para_cada_posicao] > valor_maior){
                valor_maior =valores_adicionados[para_cada_posicao];
            }
            if(valores_adicionados [para_cada_posicao] < valor_menor){
                valor_menor = valores_adicionados[para_cada_posicao]

            }
            media_numeros = soma_numeros / total_elementos;
        }

        //laço de percuros, faz a soma dos numeros

        area_de_resultados.innerHTML += `<p> O total de numeros cadastrados é  ${total_elementos}.`;
        area_de_resultados.innerHTML += `<p> O maior valor adicionado foi ${valor_maior}.`;
        area_de_resultados.innerHTML += `<p> O menor valor adicionado foi ${valor_menor}.`;
        area_de_resultados.innerHTML += `<p> A soma dos numeros adicionados é ${soma_numeros}.`;
        area_de_resultados.innerHTML += `<p> A media dos numeros adicionados é ${media_numeros}.`;






    }

}


