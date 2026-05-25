
const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === 'AC') {
    
            currentInput = "";
            display.value = "0";
        } 
        else if (buttonText === 'DEL') {
        
            currentInput = currentInput.substring(0, currentInput.length - 1);
            display.value = currentInput || "0";
        } 
        else if (buttonText === '=') {
        
            try {
                
                if (currentInput !== "") {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                }
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        } 
        else {
        
            if (display.value === "0" && !isNaN(buttonText)) {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
            display.value = currentInput;
        }
    });
});
