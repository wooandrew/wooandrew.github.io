/*function toProject() {
    
    var project_ = document.getElementById("project");
    project_.scrollIntoView();
}

function toAbout() {
    
    var about_ = document.getElementById("about");
    about_.scrollIntoView();
}

// Startup

var i = 0;
var speed = 500;
var txt = "return\xa00;";

function typeWriter() {
    
    if (i < txt.length) {
        document.getElementById("retzerop").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}*/

//window.onload = typeWriter;


// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        
        el.dataset.text = newText;
        
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        
        return promise;
    }
    
    update() {
        
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } 
            else if (this.frame >= start) {
                
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } 
            else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } 
        else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const phrases = [
    'return 0;',
    'a list of projects',
    'by Andrew Woo'
];


const el = document.querySelector('.retzerop');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
    
    fx.setText(phrases[counter]).then(() => {
        
        if(counter === 1) {
            setTimeout(next, 3500);
        }
        else {
            setTimeout(next, 1500);
        }
    });
    counter = (counter + 1) % phrases.length;
};

next()