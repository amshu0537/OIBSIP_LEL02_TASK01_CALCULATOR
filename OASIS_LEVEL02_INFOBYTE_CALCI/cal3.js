let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");  // display area
let equal = document.getElementById("equal");  //  = button
let clear = document.getElementById("clear");  // AC button
let erase = document.getElementById("erase");  // DEL button

window.onload = () => {
    input.value = "";
};

button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        input.value += button_class.value;
    });
});

equal.addEventListener("click", () => {
    equal_pressed = 1;
    let input_value = input.value;
    try {
        let solution = eval(input_value);
        if (Number.isInteger(solution)) {
            input.value = solution;
        }
        else {
            input.value = solution.toFixed(2);
        }
    }
    catch (err) {
        alert("Invalid Input!");
    }
});

clear.addEventListener("click", () => {
    input.value = "";
});

erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});