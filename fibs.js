function fibs(num){

    let arr = [0,1,1];

    if (num <= 3){
        return arr.slice(0, num)
    }
    else{
     for (let i = 3; i < num; i++){
         arr.push(arr[i-2] + arr[i-1]);
     }
     return arr
    }
}

console.log(fibs(8))