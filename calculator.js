// ডিসপ্লে ইনপুট ফিল্ড এবং সব বাটন সিলেক্ট করা
const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');

let currentInput = "";

// প্রতিটি বাটনে ক্লিক ইভেন্ট লিসেনার যোগ করা
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === 'AC') {
            // সবকিছু ক্লিয়ার করার জন্য
            currentInput = "";
            display.value = "0";
        } 
        else if (buttonText === 'DEL') {
            // শেষ একটি ক্যারেক্টার মুছে ফেলার জন্য
            currentInput = currentInput.substring(0, currentInput.length - 1);
            display.value = currentInput || "0";
        } 
        else if (buttonText === '=') {
            // হিসাব করার জন্য
            try {
                // eval() ফাংশন দিয়ে স্ট্রিং ইকুয়েশন ক্যালকুলেট করা
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
            // সাধারণ সংখ্যা এবং অপারেটর স্ক্রিনে দেখানোর জন্য
            if (display.value === "0" && !isNaN(buttonText)) {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
            display.value = currentInput;
        }
    });
});
