const span = document.querySelector(".typing")

function typing (text, count) {
    
    if (count < text.length) {
        setTimeout(() => {
            span.textContent += text.charAt(count);
            count++;
            typing (text, count);
        }, 160)
    }
}

typing ("Julio Souza", 0);
