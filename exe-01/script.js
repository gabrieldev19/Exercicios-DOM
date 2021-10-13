function verificar(){
    const valor_min = document.getElementById('value_min')
    const valor_max = document.getElementById('value_max')
    
    function verifyMin_Max(){
        if(valor_min.value < valor_max.value){
           // AddArray()
        }
        if(valor_max.value === "" || valor_min.value === ""){
            alert("erro")
        }
        if(valor_min.value > valor_max.value){
            alert("erro")
        }
    } 
    verifyMin_Max()

    function AddArray(){
        const math = valor_max.value - valor_min.value
        const newarray = []
        for(let i = 0; i < math; i++){
            newarray.push([i])
        }
        //console.log(newarray)
        
    }
    AddArray()

    function numerosmulti(){
        const result = []
        for(let index = 0; index < newarray.length; index ++){
            if(newarray[index] % 2 == 0 && newarray[index] % 3 == 0){
                result.push(newarray[index])
            }
        }
        console.log(result)
    }
    numerosmulti()
    
}