var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");

document.querySelector(".btn1").addEventListener("click", function () {
    var p1Value = p1.value.trim(); 
    var p2Value = p2.value.trim();

    if (p1Value === "" || p2Value === "") {
        alert("Please enter both names before calculating love percentage.");
        return;
    }
    var a = Math.floor(Math.random() * 100);
    var b = "";

    if (a <= 30) {
        b = "Love is like a pizza. You have to wait for it to arrive, and sometimes it's delivered to the wrong address....  :(";
    } else if (a > 30 && a <= 50) {
        b = "I'm not saying my love life is a mess, but it's currently under construction. +_+";
    } else if (a > 50 && a <= 75) {
        b = "My love life is like a resume: impressive at first glance, but then you realize it's all made up. ~_~";
    } else if (a > 75 && a <= 100) {
        b = "Love is like a fine wine and yours is only going to get better with age! (❁´◡`❁)";
    }

    var p1Value = p1.value;
    var p2Value = p2.value;
    var c = p1Value + " & " + p2Value + " This is your fate!";

    animateLovePercentage(a);

    function animateLovePercentage(targetPercentage) {
        var lovePercentage = document.querySelector("#main");
        var currentPercentage = 0;

        var interval = setInterval(function () {
            if (currentPercentage >= targetPercentage) {
                clearInterval(interval);
            } else {
                currentPercentage++;
                lovePercentage.textContent = currentPercentage + "%";
            }
        }, 20);
    }

    document.querySelector("h1").textContent = c;
    document.querySelector("#quote").classList.add("resultnumber2");
    document.querySelector("#quote").innerHTML = b;
    document.querySelector("#main").classList.add("resultnumber");
});

document.querySelector(".btn2").addEventListener("click", function(){
    document.querySelector("h1").textContent = "Love Calculator";
    document.querySelector("#quote").classList.remove("resultnumber2");
    document.querySelector("#quote").innerHTML = "Find out how strong your bond really is or both of you were just living in a dream!";
    document.querySelector("#main").classList.remove("resultnumber");
    document.querySelector("#main").innerHTML = `
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">Your Name</span>
            <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                id="p1"
                aria-describedby="inputGroup-sizing-lg"
            />
        </div>
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">Your Sweetheart's name</span>
            <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                id="p2"
                aria-describedby="inputGroup-sizing-lg"
            />
        </div>
    `;
})
