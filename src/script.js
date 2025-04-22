document.getElementById("form").addEventListener("submit", function(event){


    event.preventDefault();


    const year = document.getElementById("yob").value;

    const month = document.getElementById("mob").value;

    const date = document.getElementById("dob").value;

    const gender = document.querySelector("input[name=\"gender\"]:checked")?.value;

    // results
    const results = document.getElementById("result");


    if(!year || !month || !date || !gender) {


        results.textContent = "Please make sure that all the fields are filled in."


        return;


    }


    const yearInIntegers = parseInt(year);

    const monthInIntegers = parseInt(month);

    const dateInIntegers = parseInt(date);


    if(monthInIntegers < 1 || monthInIntegers > 12) {


        results.textContent = "Please fill in a valid value for \"Month\".";


        return;


    }


    if(dateInIntegers <1 || dateInIntegers >31) {


        results.textContent = "Please fill in a valid value for \"Date\".";


        return;


    }


    const CC = Math.floor(yearInIntegers / 100);

    const YY = yearInIntegers % 100;

    const MM = monthInIntegers;

    const DD = dateInIntegers;

    // calculating day of the week.
    const d = Math.floor(((CC / 4) - 2 * CC - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);

    const dayInIntegers = ((d + 7) % 7);

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const akanName = gender === "male" ? maleNames[dayInIntegers] : femaleNames[dayInIntegers];

    results.textContent = "${akanName}";
}

);
