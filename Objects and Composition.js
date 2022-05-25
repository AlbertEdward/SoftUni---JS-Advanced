function solve(name, population, treasury){
    let result = { name, population, treasury };

    return result;
}

solve1(Tortuga, 7000, 15000);

function solve2([array]){
    let result = [];
    result.city = []; 
    result.population = [];

    for (let i = 0; i < array.length; i++) {
        result.city = array[i];
        result.population = array[i+1];
        
    }
}

solve2(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
