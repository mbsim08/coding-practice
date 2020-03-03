//Removing duplicates from array

let a = [1,4,2,1,7,8,]

let b = []

let len = a.length

for(let i = 0; i<len ; i++ ){
    if(b.indexOf(a[i]) === -1){
        b.push(a[i]);
    }

}

console.log(b)