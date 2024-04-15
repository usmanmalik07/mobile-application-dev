function SolveThis(obj) {
    var res = {};
    function add(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
             if (arr[i] !== undefined) {
                sum += arr[i];
            }
        }
        return sum;
    }

    function findMax(arr) {
        return Math.max(...arr);
    }

    function findMin(arr) {
        return Math.min(...arr);
    }

    for (let key in obj) {
        let value = obj[key]; 
        if (Array.isArray(value)) {
            switch (key) {
                case 'sum':
                    res[key] = add(value);
                    break;
                case 'max':
                    res[key] = findMax(value);
                    break;
                case 'min':
                    res[key] = findMin(value);
                    break;
            }
        }
    }
    
    
    

    return res;
}

console.log(SolveThis({ sum: [3, 2, 4], max: [2, 4, 3, 5], min: [5, 3, 4, 3]})); 
