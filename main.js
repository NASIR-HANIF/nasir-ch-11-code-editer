let editer = document.getElementById("editer");
let btn = document.getElementById("btn")
let result_box = document.getElementById("result-box");



btn.addEventListener("click",function(){
   let editer_value =  editer.value;
   result_box.innerHTML = editer_value
})

// btn.onclick = function(){
//    let editer_value =  editer.value;
//    result_box.innerHTML = editer_value

// }