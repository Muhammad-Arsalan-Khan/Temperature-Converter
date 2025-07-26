let btnConverter = document.querySelector("#btn");
btnConverter.addEventListener("click", converter);

function converter() {
    btnConverter.innerText="Clicked"
    btnConverter.style.backgroundColor="#55c2da";
    let entertemp =parseFloat(document.querySelector("#temperature").value) ;
    let inputUnit = document.querySelector("#input-unit").value;
    let outputUnit = document.querySelector("#output-unit").value;
    let ans = document.querySelector("p");
    let resultValue;

    switch(inputUnit){
        // Celsius
        case 'c':{
            if(outputUnit === 'f'){
               resultValue = entertemp*1.8+32;
               ans.innerText=`${entertemp} Celsius is Equal to ${resultValue} Fahrenheit`;
            } else if(outputUnit === 'k'){
                resultValue = entertemp+273.15;
                ans.innerText=`${entertemp} Celsius is Equal to ${resultValue} Kelvin`;
            } else{
                resultValue = entertemp;
                ans.innerText= `${entertemp} Celsius`
            }
        }
    }
    switch(inputUnit){
        // Fahrenheit
        case 'f':{
            if(outputUnit === 'k'){
                resultValue = ((entertemp-32)*5/9)+273.15;
                ans.innerText=`${entertemp} Fahrenheit is Equal to ${resultValue} Kelvin`;
            } else if(outputUnit === 'c'){
                resultValue = (entertemp-32)*5/9;
                ans.innerText=`${entertemp} Fahrenheit is Equal to ${resultValue} Celsius`;
            } else{
                resultValue = entertemp;
                ans.innerText= `${entertemp} Fahrenheit`
            }
        }
    }
    switch(inputUnit){
        // Kelvin
        case 'k':{
            if(outputUnit === 'f'){
                resultValue = ((entertemp-273.15)*1.8)+32;
                ans.innerText=`${entertemp} Kelvin is Equal to ${resultValue} Fahrenheit`;
            } else if(outputUnit === 'c'){
                resultValue = entertemp-273.15;
                ans.innerText=`${entertemp} Kelvin is Equal to ${resultValue} Celsius`;
            } else{
                resultValue = entertemp;
                ans.innerText= `${entertemp} Kelvin`
            }
        }
    }
}
