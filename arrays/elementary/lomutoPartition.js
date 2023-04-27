
/*
* Swap function using destructuring assignment
*/

function swap(array, i,j){
    [array[i], array[j]] = [array[j], array[i]]
}

/*
* Lomuto partition function
* array: array of elementos to find a particion index
* low: the lowest integer index to consider the partition
* high: the higest  integer index to consider the partition
*/
function lomutoPartition(array,low, hight){

    const pivot = array[hight];
    let i = low - 1;
                                        
    for (let j = low; j<hight; j++){

        
        if (pivot >= array[j]){
            i++;
            swap(array, j, i);        
        }
    }

    swap(array, i+1, hight)

    return i+1;
}

let array = [1,2,3];
console.log("🚀 ~ file: lomutoPartition.js:25 ~  lomutoPartition(array, 0, 2):", lomutoPartition(array, 0, 2));
console.log("🚀 ~ file: lomutoPartition.js:27 ~ array:", array)


array = [3,2,1];

console.log("🚀 ~ file: lomutoPartition.js:31 ~ lomutoPartition(array, 0, 2):", lomutoPartition(array, 0, 2));
console.log("🚀 ~ file: lomutoPartition.js:32 ~ array:", array)


array = [1,3,2];

console.log("🚀 ~ file: lomutoPartition.js:37 ~ lomutoPartition(array, 0, 2):", lomutoPartition(array, 0, 2));
console.log("🚀 ~ file: lomutoPartition.js:38 ~ array:", array)
