function getElement(text){
    return document.getElementById(text)
}
let list = []
let list2 = [];
function getinfo(){
    list.push(+getElement("inputFirst").value);
    getElement("addNum").innerHTML += getElement("inputFirst").value + ","    
}
function intSum(){
    getElement("addNum1").innerHTML = list.reduce(function(sum,value){
        if(value >= 0){
            return sum + value;
        }
    })
}
function intCount(){
    let count = list.filter((value)=>value>=0) ;
    getElement("addNum2").innerHTML = count.length
}
function min(){
    let min = list[0];
    for(let i = 0 ; i < list.length;i++){
        if(list[i] < min ){
            min = list[i];
        }
    }
    getElement("addNum3").innerHTML = min;
}
function intMin(){
    let intMin = 0;
    let k = false
    for(let i = 0 ; i < list.length ;i++){
        if(list[i] >= 0){
            k = true;
            intMin = list[i]
        }
    }
    for(let i = 0 ; i < list.length ; i++){
        if(list[i] < min && list[i] >= 0){
            intMin = list[i];
        }
    }
    if(k == true){
        getElement("addNum4").innerHTML = intMin;
    }else{
        getElement("addNum4").innerHTML = "Không có số nguyên dương nào ";
    }
}
function finalEven(){
    for(let i = list.length -1 ; i >= 0 ;i-- ){
        if(list[i] % 2 === 0){
            return getElement("addNum5").innerHTML = list[i];
        }
    }
    return getElement("addNum5").innerHTML = "không có bất kỳ số chẵn nào"
}
function swap(){
    let vt1 = getElement("vt1").value;
    let vt2 = getElement("vt2").value;
    let temp = list[vt2-1];
    list[vt2-1] = list[vt1-1];
    list[vt1-1] = temp 
    getElement("addNum6").innerHTML = "Mảng sau khi đổi là : "
    for(let i = 0 ; i < list.length ;i++){
        getElement("addNum6").innerHTML += list[i] + ","
    }
}
function swapinc(){
    for(let i = 0 ; i < list.length ; i++){
        for(let j = i ; j < list.length ;j++){
            if(list[i] > list[j]){
                let temp = list[j];
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
    getElement("addNum7").innerHTML = "Mảng sau khi sắp xếp là : "
    for(let i = 0 ; i < list.length ;i++){
    getElement("addNum7").innerHTML += list[i] + ","
    }
}
function Firstsnt(){
    let k = true;
    for(let i = 0 ; i < list.length ; i++){
        if(list[i] === 1 || list[i] === 2){
            getElement("addNum8").innerHTML = list[i];
        }
        for(let j = 2 ; j < list[i] ; j++){
            if(list[i] % j === 0){
                k = false;
                break;
            }
        }
        if(k === true){
            getElement("addNum8").innerHTML = " Số nguyên tố đầu tiên là : "
            return getElement("addNum8").innerHTML = list[i]
        }
        k = true;
    }
    if(!getElement("addNum8").innerHTML){
        return getElement("addNum8").innerHTML = -1;
    }
}
function getinfo_1(){
   
    list2.push(+getElement("int").value);
    getElement("addNum9_1").innerHTML += getElement("int").value + ","    
}
function int(){
    let count = 0;
    for(let i = 0 ; i < list2.length ; i++){
        if(Number.isInteger(list2[i]) === true){
            count++;
        }
    }
    getElement("addNum9_2").innerHTML = "Số nguyên : " + count;
}
function compare(){
    let Negcount = 0 ;
    let Poscount = 0 ;
    for(let i = 0 ; i < list.length ; i++){
        if(Number.isInteger(list[i]) === true){
            if(list[i] > 0){
                Poscount++
            }else{
                Negcount++
            }
        }
    }
    if(Negcount > Poscount){
        getElement("addNum10").innerHTML = "Số âm > Số dương"
    }else if( Negcount === Poscount){
        getElement("addNum10").innerHTML = " Số âm = số dương "
    }else {
        getElement("addNum10").innerHTML = " Số âm < Số dương "
    }
}

