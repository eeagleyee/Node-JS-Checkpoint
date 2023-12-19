const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true
    });
    return password;
}

// Generate and log 5 passwords
for (let i = 0; i < 5; i++) {
    const password = generateRandomPassword();
    console.log(`Generated Password ${i + 1}: ${password}`);
}
