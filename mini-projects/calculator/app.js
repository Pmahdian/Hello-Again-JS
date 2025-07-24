class Calculator {
  constructor() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.history = [];
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
    if (!isNaN(value) {
      this.appendNumber(value);
    } else {
      switch(value) {
        case 'C': this.clear(); break;
        case '±': this.toggleSign(); break;
        case '%': this.percentage(); break;
        case '=': this.calculate(); break;
        default: this.chooseOperation(value);
      }
    }
    this.updateDisplay();
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = 
      this.currentOperand === '0' 
        ? number 
        : this.currentOperand + number;
  }

  calculate() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    
    if (isNaN(prev) return;

    switch (this.operation) {
      case '+': computation = prev + current; break;
      case '-': computation = prev - current; break;
      case '*': computation = prev * current; break;
      case '/': computation = prev / current; break;
      default: return;
    }
    
    this.history.push(`${prev} ${this.operation} ${current} = ${computation}`);
    this.currentOperand = computation.toString();
    this.operation = undefined;
  }

  updateDisplay() {
    document.getElementById('current').innerText = this.currentOperand;
    document.getElementById('history').innerText = 
      this.history.slice(-3).join(' | ');
  }
}

// Initialize
new Calculator();