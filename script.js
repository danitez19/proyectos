
//Se agrega la funcionalidad sobre el boton

let boton = document.getElementById('btnCalcular')
    boton.addEventListener("click",function(){
        let input = document.getElementById('totalCuenta');
        let input2 = document.getElementById('porcPropina'); 
        let totalCuenta = input.value; 
        let porcPropina = input2.value;;
        resultado = totalCuenta * (porcPropina/100);
        document.getElementById('result').innerHTML = resultado;
        
});