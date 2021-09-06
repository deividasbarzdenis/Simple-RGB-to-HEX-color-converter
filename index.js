const fullRGBColorToHex = () => {
    // getting input value:
    let input =document.getElementById('rgb').value;

    // regex for check input string:
    const matchInput =
        /\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b,\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b,\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b/
    
    // compare user input string and regex pattern:
    let match = matchInput.test(input);
    if (match === true) {
        
        // splits input sting to array of values:
        let rgbColor = input.split(',');
        
        // converted all values to hex and joined to string:
        let color = "#" + rgbToHex(rgbColor[0]) + rgbToHex(rgbColor[1]) + rgbToHex(rgbColor[2]);
        
        // inserting hex color value by id  to element:
        document.getElementById("hexColor").innerText = color;
    } else {
        alert("Bad input")
    }
}

// convert rgb numbers to hex
const rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}






