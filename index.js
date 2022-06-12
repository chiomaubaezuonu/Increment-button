document.getElementById("green").addEventListener("click", function(){;
    let value = document.getElementById("num").innerHTML;
     value++
    document.getElementById("num").innerHTML = value;
    if(value > 20){
        document.getElementById("num").innerHTML = 20;
    }
})

document.getElementById("red").addEventListener("click", function(){
    let deduct = document.getElementById("num").innerHTML;
    deduct--;
    document.getElementById("num").innerHTML = deduct;
    if(deduct < 0){
        document.getElementById("num").innerHTML = 0;
    }
})
