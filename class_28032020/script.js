alert("page loaded");
//My impelementation of .every() method
Array.prototype.myEvery = function(func) {
    let flag = true;
    this.forEach(function(value){
        if (!flag) { return; }
        if (func(value) === false){
            flag = false;
        }
    });
    return flag;
}

//My implementation .filter() method
Array.prototype.myFilter = function(func) {
    let returnArray = [];
    this.forEach(function(value){
        if (func(value)) { returnArray.push(value) }
    });
    return returnArray;
}

//My implementation .find() method
Array.prototype.myFind = function(func) {
    let returnVal = '';
    this.forEach(function(value){
        if (returnVal !== '') { return; }
        if (func(value)) { 
            returnVal = value; 
        }
    });
    return returnVal ? returnVal : undefined;
}

//My implementation .findIndex() method
Array.prototype.myFindIndex = function(func) {
    let returnVal = -1;
    this.forEach(function(value, index){
        if (returnVal !== -1) { return; }
        if (func(value)) { 
            returnVal = index; 
        }
    });
    return returnVal;
}

//My implementation .flat() method
Array.prototype.myFlat = function(maxDepth = 1) {
    let returnArray = [];
    (function flatAndPush(arr, depth){
        arr.forEach(function(element){
            if((typeof element == "object") && depth) {
                flatAndPush(element, depth - 1)
            } else {
                returnArray.push(element);
            }
        });
    })(this, maxDepth);
    return returnArray;
}

//my implementation of map
Array.prototype.myMap = function(func) {
    let returnArray = [];
    this.forEach(function(value) {
        returnArray.push(func(value));
    });
    return returnArray;
}

//my implementation of flatMap()
Array.prototype.myFlatMap = function(func) {
    return this.myMap(func).myFlat();
}

//my implementation of some()
Array.prototype.mySome = function(func) {
    let flag = false;
    this.forEach(function(value) {
        if (flag) { return; }
        else {
            flag = func(value);
        }
    });
    return flag;
}

//-----------------------------function calls are below------------------------------------
//every demo
arr1 = [1, 2, -1, 4, 5];
console.log("every demo",
    arr1.myEvery(function(value) {
        return value > 0;
    })
);

//filter demo
arr2 = [1, 2, 3, 4, 5, 6];
console.log("filter demo",
    arr2.myFilter(function(value) {
        return value % 2 == 0;
    })
);

//find demo
arr3 = [1, 2, 3, 4, 5, 6];
console.log("find demo",
    arr3.myFind(function(value) {
        return value > 7;
    })
);

//findIndex demo
arr4 = [1, 2, 3, 4, 5, 6];
console.log("findIndex demo",
    arr4.myFindIndex(function(value) {
        return value > 7;
    })
);


//flat demo
arr5 = [[5, [6, [7, 8, 9]]], 1, 2];
arr_demo = [["a", "b", "c"], [""], ["abc"]];
console.log("flat demo",
arr5.myFlat(3)
);

//map demo
arr6 = [1, 2, 3, 4, 5];
console.log("mapdemo",
    arr6.myMap(function(val) {
        return val * 3;
    })
);

//flatmap demo
arr7 = ["it's lockdown in", "", "India"];
console.log("flatmap demo",
    arr7.myFlatMap(item => item.split(" "))
);

//some demo
arr8 = [1, 3, 5]
console.log("some demo",
    arr8.mySome(function(val) {
        return val % 2 === 0;
    })
);
