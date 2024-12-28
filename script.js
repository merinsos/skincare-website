// Yaş doğrulama
document.getElementById("verify-age").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    if (age >= 18) {
        document.getElementById("age-verification-page").classList.remove("active");
        document.getElementById("main-content").classList.add("active");
    } else {
        document.getElementById("age-error").textContent = "Web sitesine yalnızca 18 yaş ve üzeri erişim sağlayabilir.";
    }
});

// Cilt tipi formu
document.getElementById("skin-type-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const skinFeel = document.getElementById("skin-feel").value;
    const issues = Array.from(document.querySelectorAll('input[name="issues"]:checked')).map(i => i.value);

    const morningRoutine = [
        "Nazik bir temizleyici",
        "Nemlendirici",
        "Güneş kremi"
    ];
    const eveningRoutine = [
        "Çift aşamalı temizlik (yağ bazlı + su bazlı temizleyici)",
        "Sorunlara uygun serum",
        "Yoğun nemlendirici"
    ];

    // Rutini doldur
    document.getElementById("morning-steps").innerHTML = morningRoutine.map(step => `<li>${step}</li>`).join("");
    document.getElementById("evening-steps").innerHTML = eveningRoutine.map(step => `<li>${step}</li>`).join("");

    // Bölümleri göster
    document.getElementById("skin-type-questions").classList.remove("active");
    document.getElementById("routine-result").classList.add("active");
});
