function modificar() {


    let first_use = document.getElementById("seleccionar_1");
    let first_value = first_use.value;
   
    let second_use = document.getElementById("seleccionar_2")
    let second_value = second_use.value;


    let money_income = document.getElementById("money_income");
    let income_value = money_income.value;

    if(income_value<=0){
        let verificar = document.getElementById("veri");
        verificar.className = "verificacion";
        verificar.innerText="Por favor ingrese un número valido";
    } else{
        let validar = document.getElementById("veri");
        validar.className = "validacion ocultar";
    }
    
    
    let outputValue = 0;
	
	if(first_value ==  'Dolar' && second_value == 'Dolar'){
       outputValue = income_value;
    }
    if(first_value ==  'Peso Colombiano' && second_value == 'Peso Colombiano'){
       outputValue = income_value;
    }
    if(first_value ==  'Euro' && second_value == 'Euro'){
       outputValue = income_value;
    }
    if(first_value ==  'Libra Esterlina' && second_value == 'Libra Esterlina'){
       outputValue = income_value;
    }
    if(first_value ==  'Peso Mexicano' && second_value == 'Peso Mexicano'){
       outputValue = income_value;
    }
    
    if(first_value ==  'Dolar' && second_value == 'Peso Colombiano'){
        outputValue = income_value * 4000;
    }
    if(first_value ==  'Peso Colombiano' && second_value == 'Dolar'){
        outputValue = income_value / 4000;
    }
    if(first_value ==  'Peso Colombiano' && second_value == 'Euro' ){
        outputValue = income_value / 4526;
    }
    if(first_value ==  'Euro' && second_value == 'Peso Colombiano' ){
        outputValue = income_value * 4526;
    }
    if(first_value ==  'Peso Colombiano' && second_value == 'Libra Esterlina' ){
        outputValue = income_value / 5349;
    }
    if(first_value ==  'Libra Esterlina' && second_value == 'Peso Colombiano' ){
        outputValue = income_value * 5349;
    }
    if(first_value ==  'Peso Colombiano' && second_value == 'Peso Mexicano' ){
        outputValue = income_value / 191;
    }
    if(first_value ==  'Peso Mexicano' && second_value == 'Peso Colombiano' ){
        outputValue = income_value * 191;
    }
    if(first_value ==  'Dolar' && second_value == 'Peso Mexicano' ){
        outputValue = income_value * 20.68;
    }
    if(first_value ==  'Peso Mexicano' && second_value == 'Dolar' ){
        outputValue = income_value / 20.68;
    }
    if(first_value ==  'Dolar' && second_value == 'Euro' ){
        outputValue = income_value  / 1.14;
    }
    if(first_value == 'Euro'  && second_value == 'Dolar' ){
        outputValue = income_value  * 1.14;
    }
    if(first_value ==  'Dolar' && second_value == 'Libra Esterlina'){
        outputValue = income_value  / 1.35;
    }
    if(first_value == 'Libra Esterlina' && second_value == 'Dolar' ){
        outputValue = income_value  * 1.35;
    }

    if(first_value ==  'Peso Mexicano' && second_value == 'Euro' ){
        outputValue = income_value / 23.67;
    }
    if(first_value == 'Euro'  && second_value == 'Peso Mexicano' ){
        outputValue = income_value  * 23.67;
    }
    if(first_value ==  'Peso Mexicano' && second_value == 'Libra Esterlina' ){
        outputValue = income_value / 27.98;
    }
    if(first_value == 'Libra Esterlina' && second_value == 'Peso Mexicano' ){
        outputValue = income_value  * 27.67;
    }
    if(first_value == 'Euro'  && second_value == 'Libra Esterlina' ){
        outputValue = income_value / 1.18;
    }
    if(first_value == 'Libra Esterlina' && second_value == 'Euro'){
        outputValue = income_value  * 1.18;
    }


    document.getElementById("Total").innerText = outputValue;
}

const coin = ['Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let select_currency = document.getElementById("seleccionar_1");
let select_currency2 = document.getElementById("seleccionar_2");

const codigo = document.createDocumentFragment();
coin.forEach((item, index, arr) => {
    let desplegables = document.createElement("option");
    desplegables.setAttribute("value", item);
    desplegables.innerText = item;
    codigo.appendChild(desplegables);
   
});
select_currency.appendChild(codigo);

const codigo2 = document.createDocumentFragment(); 
coin.forEach((item, index, arr) => {
    let desplegables = document.createElement("option");
    desplegables.setAttribute("value", item);
    desplegables.innerText = item;
    codigo2.appendChild(desplegables);
});
select_currency2.appendChild(codigo2 );



