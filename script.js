//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const ageForm = document.getElementById('ageForm');

    ageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const age = document.getElementById('age').value;
        const name = document.getElementById('name').value;

        if (age === "" || name === "") {
            alert("Please enter valid details.");
            return;
        }

        new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (age > 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000);
        })
        .then(function (message) {
            alert(message);
        })
        .catch(function (message) {
            alert(message);
        });
    });
});
