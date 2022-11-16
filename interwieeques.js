let fun = (arr)=>{
    var count=0;
    return()=>{
        console.log('hello'+arr[count]);
        count++;
    }

}

let name1 = fun(["Ram","Shyam"]);

name1()// Print Hello Ram

name1()//print Hello Shyam

