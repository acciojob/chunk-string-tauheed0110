function stringChop(str, size) {
    const arr = [];
    while(str){
        if(str.length < size){
            arr.push(str);
            str = "";
        }else{
            arr.push(str.slice(0, size))
            str = str.slice(size);
        }
       
    }
    return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
