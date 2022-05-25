//01. Print an Array with a Given Delimiter
function solve1(array, delimiter){
    let result = array.join(delimiter);
    console.log(result);
}
solve1(['One', 'Two', 'Three'], '-');

//02. Print every N-th Element from an Array
function solve2(array, nSteps){
    let result = [];

    for (let i = 0; i < array.length; i+=nSteps) {
        result.push(array[i]);
        console.log(result.pop(array[i]))
    }
}
solve2(['5', '20', '31', '4', '20'], 2);

//03. Add and Remove Elements
function solve3(array){
    let result = [1];

    for (let i = 0; i < array.length - 1; i++) {
        if(array[i] == 'add'){
            result.push(result[i] + 1);
            console.log(result[i]);
        }
        if(array[i] == 'remove'){
            let lastEntry = result.pop();   
            result.pop();
            result.pop();
        }   
    }
}
solve3(['add', 'add', 'remove','add', 'add']); 