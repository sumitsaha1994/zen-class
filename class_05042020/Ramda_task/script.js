//---------------------------------Ramda fn------------------------------------
//----------Run the index.html file and open browser console to see the outputs 
function fn_curry1(f) {
    return function fn(x) {
        if (arguments.length == 0) {
            return fn;
        } else {
            return f.apply(this, arguments);
        }
    }
}

function fn_curry2(f) {
    return function fn(arg1, arg2) {
        if (arguments.length == 0) {
            return fn;
        } else if (arguments.length == 1) {
            return fn_curry1(function(_arg2) {
                return f(arg1, _arg2);
            });
        } else {
            return f(arg1, arg2);
        }
    }
}

function fn_curry3(f) {
    return function fn(arg1, arg2, arg3) {
        if (arguments.length == 0) {
            return fn;
        } else if (arguments.length == 1) {
            return fn_curry2(function(_arg2, _arg3) {
                return f(arg1, _arg2, _arg3);
            });
        } else if (arguments.length == 2) {
            return fn_curry1(function (_arg3) {
                return f(arg1, arg2, _arg3);
            });
        } else {
            return f(arg1, arg2, arg3);
        }
    }
}
function fn_curryN(f, len) {
    switch (len) {
        case 1: 
            fn_curry1(f);
            break;
        case 2:
            fn_curry2(f);
            break;
        case 3:
            fn_curry3(f);
            break;
    }
}
//---------------------------------
//add() method implementation
//---------------------------------
let add = fn_curry2(function add(x, y) {
    return Number(x) + Number(y);
});

//---------------------------------
//max of three numbers
//---------------------------------
let max = fn_curry3(function max(a, b, c) {
    return a > b ? a : b > c ? b : c;
});

//----------------------------------
//pickAll
//----------------------------------
let pickAll = fn_curry2(function pickAll(param1, param2) {
    returnObj = {};
    if (!Array.isArray(param1)){
        param1 = [param1];
    }
    param1.forEach(element => {
        typeof param2 == 'object' 
            ? element in param2 ? returnObj[element] = param2[element] : returnObj[element] = undefined 
            : returnObj[element] = undefined;
    });
    return returnObj;
});

//----------------------------------
//assocPath
//----------------------------------
let assocPath = fn_curry3(function assocPath(param1, param2, param3) {
    if (param1.length == 0) {
        return param2;
    }
    let firstKey = param1[0];
    if (param1.length == 1) {
        param3[firstKey] = param2;
    } else {
        let obj = {}, obj1;
        obj[param1[param1.length - 1]] = param2;
        for (let i = param1.length - 2; i > 0 ; i--) {
            obj1 = {};
            obj1[param1[i]] = obj;
            obj = obj1;
        }
        param3[firstKey] = obj;
    }  
    return param3;
});

//---------------------------------
//dissocPath
//---------------------------------
let dissocPath = fn_curry2(function dissocPath(param1, param2) {
     if (param1.length == 0) {
        return param2;
    }
    let maxDepth = param1.length;
    
    let func = (obj, depth) => {
        for (let key in obj) {
            if (param1[depth-1] == key) {
                depth == maxDepth ? delete obj[key] : obj[key] = func(obj[key], ++depth);
                break;
            }
        }
        return obj;
    }
    return func(param2, 1);
});

//--------------------------------
//if else
//--------------------------------
let ifElse = fn_curry3(function ifElse(_condition, _if, _else) {
    return (arg) => _condition(arg) ? _if(arg) : _else(arg);
});

//--------------------------------
//cond
//--------------------------------
let cond = fn_curry1(function cond(pairs){
    return (arg) => {
        return (function func(pairs, arg, i) {
                    return pairs[i][0](arg) ? pairs[i][1](arg) : func(pairs, arg, ++i);
                })(pairs, arg, 0);
    }
});

//--------------------------------
//converge
//--------------------------------
function converge(f_con, f_branches) {
    return (arg) => {
        f_branches.forEach(branch => {
            f_con = f_con(branch(arg));
        });
        return f_con;
    }
}


console.log("Add: ",add(1)()()(2));
console.log("Pick All: ",pickAll(['a', 'b', '1'])()({1: 10, a:1, b: 2, c: 3}));
console.log("Pick All: ", pickAll()()(['a', 'b', '1'])({a:1}));
console.log("Assoc Path: ", assocPath(['a', 'c'])()(42, {a: {c: 3}, b: 2}));
console.log("Dissoc Path: ", dissocPath(['a','d'])()({a: {c:{e:7, f:9}, d:4}, b:2}));

const x = ifElse(
    function(){ arguments[0] },
    ()=>'Hey it\'s True',
    ()=>'Nahh it\'s False',
);

console.log("If Else: ", x(true));

const fn = cond([
    [(a) => a == 0, () => 'value is zero'],
    [(a) => a == 10, () => 'value is 10'],
    [(a) => a == 20, () => 'value is 20'],
    [() => true, () => 'No Matches found']
]);

console.log("cond: ", fn(11));

const my_f = converge(max, [(a) => a, (a) => a * 2, (a) => a * 3]);

console.log("Converge: ", my_f(-3));