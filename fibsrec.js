
function fibsrec(num, arr = [0,1]){ 
    console.log("This was printed recursively");

    if(arr.length >= num){
        return arr.slice(0,num)
    }
    else{
        arr.push(arr[arr.length-2] + arr[arr.length-1])

        return fibsrec(num, arr)
    }
}

console.log(fibsrec(8))