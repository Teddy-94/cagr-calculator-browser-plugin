document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("calc")
    const cagr = document.getElementById("cagr") 

    button.addEventListener("click", () => {
        const end = document.getElementById("end").value;
        const start = document.getElementById("start").value;
        const t = document.getElementById("years").value;

        const res = (Math.pow(end / start, 1 / t) - 1) * 100;

        cagr.innerHTML = `CAGR: ${res.toFixed(2)} %`
    });
});

