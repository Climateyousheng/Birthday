function generateMessage() {
    const name = document.getElementById('nameInput').value;
    const wishMessage = document.getElementById('wishMessage');
    
    if (name) {
        wishMessage.textContent = `🎉 Happy Birthday, ${name}! 🎉 Wishing you all the happiness in the world!`;
    } else {
        wishMessage.textContent = "Please enter a valid name!";
    }
}
