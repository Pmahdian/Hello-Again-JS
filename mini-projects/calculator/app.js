class Calculator {
    constructor() {
        this.currentInput = '0';
        this.formula = '';
        this.history = JSON.parse(localStorage.getItem('calcHistory')) || [];
        this.theme = 'light';
        
        this.initEventListeners();
        this.updateDisplay();
    }

    handleButtonClick(value) {
        switch(value) {
            case 'C':
                this.clear();
                break;
            case '=':
                this.calculate();
                break;
            case '±':
                this.toggleSign();
                break;
            default:
                this.appendToFormula(value);
        }
        this.updateDisplay();
    }

    calculate() {
        try {
            const result = math.evaluate(this.formula);
            this.history.unshift(`${this.formula} = ${result}`);
            localStorage.setItem('calcHistory', JSON.stringify(this.history));
            this.currentInput = result.toString();
            this.formula = '';
        } catch (error) {
            this.currentInput = 'Error';
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode');
    }
}

// راه‌اندازی اولیه
const calculator = new Calculator();