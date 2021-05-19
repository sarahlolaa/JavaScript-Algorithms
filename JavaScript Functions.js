// JavaScript source code


//Convert Fahrenheit To Celsius
function convertFahrToCelsius(value) {

    var result;

    if ((typeof value === "number" && isNaN(value) === false)) {
        result = calculate(value);
    }

    else if ((typeof value === "string") && (isNaN(parseInt(value)) === false) && (Number(value) === 0)) {
        result = calculate(value);
    }

    else if ((typeof value === "string") && (isNaN(parseInt(value)) === false) && (isNaN(Number(value)) === false)) {
        result = calculate(value);
    }

    else {
        result = JSON.stringify(value) + " is not a valid number but a/an " +
            Object.prototype.toString.call(value).slice(8, -1).toLowerCase() + ".";
    };

    console.log(result);
    return result;

};

function calculate(validEntry) {
    var degCelsius = (validEntry - 32) * (5 / 9);
    return degCelsius.toFixed(4);
};




//Check YuGiOh
function checkYuGiOh(n) {

    var result;

    if (typeof n === "number" && isNaN(n) === false && n !== Infinity) {
        result = yuGiOh(n);
    }

    else if ((typeof n === "string") && (isNaN(parseInt(n)) === false) && (Number(n) === 0)) {
        result = yuGiOh(n);
    }

    else if ((typeof n === "string") && (isNaN(parseInt(n)) === false) && (isNaN(Number(n)) === false)) {
        result = yuGiOh(n);
    }

    else {
        result = "invalid parameter: " + JSON.stringify(n);
    };

    console.log(result);
    return result;

};


function yuGiOh(value) {
    var arrayAll = [];
    var stringEntry = "";

    for (var i = 1; i <= value; i++) {
        stringEntry = "";

        if ((i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0)) {

            if (i % 2 === 0) {
                stringEntry += "yu";
            };

            if (i % 3 === 0) {
                stringEntry == "" ? stringEntry += "gi" : stringEntry += "-gi";
            };

            if (i % 5 === 0) {
                stringEntry == "" ? stringEntry += "oh" : stringEntry += "-oh";
            };

            arrayAll[i - 1] = stringEntry;
        }
        else {
            arrayAll[i - 1] = i;
        };
    };

    return arrayAll;
};


