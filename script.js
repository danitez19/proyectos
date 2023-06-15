


//Se agrega la funcionalidad sobre el boton

let boton = document.getElementById('btnCalcular')
    boton.addEventListener("click",function(){
        let input = document.getElementById('totalCuenta');
        let input2 = document.getElementById('porcentaje');
        let totalCuenta = input.value; 
        let porcPropina = input2.value;
        resultado = totalCuenta * (porcPropina/100);
        document.getElementById('result').innerHTML = resultado; 
        
});

// Se crea la lista desplegable 

let select = document.getElementById('porcentaje'); 
let valores = [10,20,30,40,50,60,70,80,90,100];	
for (let i = 0; i < valores.length; i++){
    let opciones = document.createElement('option');
    opciones.innerHTML = valores[i];
    opciones.value = valores[i];
    select.appendChild(opciones); //Se añade al selec las opciones

}
