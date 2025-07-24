class Calculator {
    constructor() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.history = [];
    }

    clear() {
        this.currentOperand = '0';
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand === '0' 
            ? number 
            : this.currentOperand + number;
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            // سایر عملگرها
        }
        
        this.history.push(`${prev} ${this.operation} ${current} = ${computation}`);
        this.currentOperand = computation.toString();
        this.operation = undefined;
    }

    updateDisplay() {
        document.getElementById('current').innerText = this.currentOperand;
        document.getElementById('history').innerText = this.history.join('\n');
    }
}

// Initialize
const calculator = new Calculator();
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        // هندل کردن کلیک دکمه‌ها
    });
});