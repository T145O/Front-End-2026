function converter(type, value) {
    let val = parseFloat(value);
    let c = document.getElementById("celsius"), f = document.getElementById("fahrenheit"), k = document.getElementById("kelvin");
    
    if (type === "celsius") {
        f.value = (val * 1.8) + 32; k.value = val + 273.15;
    } else if (type === "fahrenheit") {
        c.value = (val - 32) / 1.8; k.value = ((val - 32) / 1.8) + 273.15;
    } else if (type === "kelvin") {
        c.value = val - 273.15; f.value = ((val - 273.15) * 1.8) + 32;
    }
    if (value === "") c.value = f.value = k.value = "";
}