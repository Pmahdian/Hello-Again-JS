class Calculator {
  constructor() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.resetScreen = false;
    this.init();
  }

  init() {
    this.updateDisplay();
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.dataset.value;
        this.handleInput(value);
      });
    });
  }

  handleInput(value) {
    if (!isNaN(value) || value === '.') {
      this.appendNumber(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
      this.chooseOperation(value);
    } else {
      switch(value) {
        case 'C': this.clear(); break;
        case '±': this.toggleSign(); break;
        case '%': this.percentage(); break;
        case '=': this.calculate(); break;
        case '←': this.delete(); break;
      }
    }
    this.updateDisplay();
  }

  appendNumber(number) {
    if (this.resetScreen) {
      this.currentOperand = '0';
      this.resetScreen = false;
    }
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand =
      this.currentOperand === '0' && number !== '.'
        ? number
        : this.currentOperand + number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.resetScreen = true;
  }

  calculate() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+': computation = prev + current; break;
      case '-': computation = prev - current; break;
      case '*': computation = prev * current; break;
      case '/': computation = prev / current; break;
      default: return;
    }
    
    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = '';
  }

  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.length === 1 
      ? '0' 
      : this.currentOperand.slice(0, -1);
  }

  toggleSign() {
    this.currentOperand = this.currentOperand.startsWith('-')
      ? this.currentOperand.slice(1)
      : '-' + this.currentOperand;
  }

  percentage() {
    this.currentOperand = (parseFloat(this.currentOperand) / 100).toString();
  }

  updateDisplay() {
    document.getElementById('current').innerText = this.currentOperand;
    document.getElementById('history').innerText = 
      this.previousOperand + ' ' + (this.operation || '');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
});