document.getElementById('checkPasswordBtn').addEventListener('click', function () {
    const password = document.getElementById('passwordInput').value;
    // using the notable password validator library to check if the password is strong enough
    const result = zxcvbn(password);
    console.log("Result: ", result);

    // Showing the strength of the password in the UI

    const passwordStrengthElement = document.getElementById('validationResult');
    const container = document.querySelector('.container');

    // If password is weak we  will show a warning message and make the box red

    if (result.score < 3) {
        passwordStrengthElement.innerHTML = `<strong>Password strength:</strong> ${result.score}/4 (Weak)<br><strong>Message:</strong> ${result.feedback.warning}`;
        passwordStrengthElement.classList.remove('strong-password');
        passwordStrengthElement.classList.add('weak-password');
        container.classList.remove('strong-background');
        container.classList.add('weak-background');
    } else {
        // If it's medium, we will  display a message that it's good but not
        passwordStrengthElement.innerHTML = `<strong>Password strength:</strong> ${result.score}/4 (Good)`;
        passwordStrengthElement.classList.remove('weak-password');
        passwordStrengthElement.classList.add('strong-password');
        container.classList.remove('weak-background');
        container.classList.add('strong-background');
    }



});
