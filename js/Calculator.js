class Calculator {
    constructor(selector, fonas) {
        this.selector = selector;
        this.DOM = null;
        this.background = fonas;

        this.init();
    }

    init() {
        if (this.isValidSelector()) {
            this.render();
        }
    }

    isValidSelector() {
        const potencialiVieta = document.querySelector(this.selector);

        if (potencialiVieta) {
            this.DOM = potencialiVieta;
            return true;
        }

        return false;
    }

    render() {
        this.DOM.innerHTML = `<div class="calculator">
            <div class="background" style="background-color: ${this.background};">
                <div class="display">
                    <div class="result">145</div>
                    <div class="equation">45+45+55</div>
                </div>
                <div class="keyboard">
                    <div class="btn">A</div>
                    <div class="btn">%</div>
                    <div class="btn">/</div>
                    <div class="btn">*</div>
                    <div class="btn">7</div>
                    <div class="btn">8</div>
                    <div class="btn">9</div>
                    <div class="btn">-</div>
                    <div class="btn">4</div>
                    <div class="btn">5</div>
                    <div class="btn">6</div>
                    <div class="btn">+</div>
                    <div class="btn">1</div>
                    <div class="btn">2</div>
                    <div class="btn">3</div>
                    <div class="btn double">=</div>
                    <div class="btn">0</div>
                    <div class="btn">+/-</div>
                    <div class="btn">.</div>
                </div>
            </div>
        </div>`;
    }
}

export { Calculator }