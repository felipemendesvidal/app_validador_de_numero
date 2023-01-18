function adicionar_numero(){
    
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
            return true
        }else{
            return false
        }

    }

    //verifica se é um numero e se não esta na lista
    if (isumnumero(input_number.value) && !estanalista(input_number.value, valores_adicionados )){
        alert('ok')
    }else{
        alert('valor invalido ou já em lista')
    }
   
    
    
}

function finalizer_resultado(){

}


