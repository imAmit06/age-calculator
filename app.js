let ageInterval = null;

function calculateAge() {
    const dobInput = document.getElementById("date-of-birth").value;
    const resultDiv = document.getElementById("result");

    if(!dobInput) {
        clearInterval(ageInterval);
        resultDiv.style.display = "block";
        resultDiv.style.color = "white";
        resultDiv.style.background = "red";
        resultDiv.textContent = "Please enter your date of birth";
        return;
    }

    clearInterval(ageInterval);

    function updateAge() {
        const dob = new Date(dobInput);
        const now = new Date();

        if(dob>now) {
            resultDiv.style.display = "block";
            resultDiv.style.color = "white";
            resultDiv.style.background = "red";
            resultDiv.textContent = "Date of birth cannot be in the future";
            clearInterval(ageInterval);
            return;
        }

        if (dob.getFullYear() < 1900) {
            resultDiv.style.display = "block";
            resultDiv.style.color = "white";
            resultDiv.style.background = "red";
            resultDiv.textContent = "Please enter a realistic date of birth (after 1900)";
            clearInterval(ageInterval);
            return;
    }

        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();
        let hours = now.getHours() - dob.getHours();
        let minutes = now.getMinutes() - dob.getMinutes();
        let seconds = now.getSeconds() - dob.getSeconds();

        if(seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if(minutes < 0) {
            minutes += 60;
            hours--;
        }
        if(hours < 0) {
            hours += 24;
            days--;
        }
        if(days < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if(months < 0) {
            months += 12;
            years--;
        }

        resultDiv.style.display = "block";
        resultDiv.style.background = "light-aqua";
        resultDiv.textContent = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old`;
    }
    updateAge();
    ageInterval = setInterval(updateAge, 1000);
}