function verificar(){
    const valor_min = document.getElementById('value_min')
    const valor_max = document.getElementById('value_max')
    
    function validation(){
        if (valor_min.value === "" || valor_max.value === ""){
            alert("preencha os campos corretamente")
        }

    }
    validation()

    function createArrayElements(){
        const numberentre = valor_max.value - valor_min.value
        var array = []
        for(let i = 0; i < numberentre; i++){
           array.push(i)
           console.log(array[i])
        }
    }
    createArrayElements()

}