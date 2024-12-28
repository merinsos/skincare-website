document.getElementById("verify-age").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    if (age >= 18) {
        document.getElementById("age-verification").classList.remove("active");
        document.getElementById("skin-type-questions").classList.add("active");
    } else {
        document.getElementById("age-error").textContent = "Web sitesine yalnızca 18 yaş ve üzeri erişim sağlayabilir.";
    }
});

document.getElementById("skin-type-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Cilt tipi ve sorunları al
    const skinFeel = document.getElementById("skin-feel").value;
    const issues = Array.from(document.querySelectorAll('input[name="issues"]:checked')).map(i => i.value);
    const routineTime = document.getElementById("routine-time").value;

    // Cilt tipi açıklamaları
    const skinFeelDescription = {
        dry: "Cildiniz nemsiz ve pul pul görünebilir. Yoğun nemlendirme odaklı bir rutin öneriyoruz.",
        oily: "Cildiniz parlama yapabilir ve gözenekleriniz tıkanmaya eğilimlidir. Dengeleyici ürünler önerilir.",
        combination: "Bazı bölgeler kuru, bazı bölgeler yağlı olabilir. Karma cilt için dengeli bir rutin oluşturulmalıdır.",
        sensitive: "Cildiniz kızarıklık ve tahrişe eğilimlidir. Hassas ciltler için yatıştırıcı ürünler önerilir."
    };

    // Günlük rutin detayları
    const routineSteps = {
        short: ["Nazik bir temizleyici", "Nemlendirici", "Güneş kremi"],
        medium: ["Nazik bir temizleyici", "Eksfolyasyon (haftada 2 kez)", "Serum", "Nemlendirici", "Güneş kremi"],
        long: [
            "Çift aşamalı temizlik (yağ bazlı + su bazlı temizleyici)",
            "Tonik",
            "Eksfolyasyon (haftada 2-3 kez)",
            "Cilt sorununa uygun serum (ör. leke karşıtı, nemlendirme)",
            "Nemlendirici",
            "Güneş kremi (sabahları)"
        ]
    };

    // Rutini oluştur
    const routine = `
        <strong>Cilt Tipiniz:</strong> ${skinFeelDescription[skinFeel]}<br>
        <strong>Sorunlar:</strong> ${issues.length > 0 ? issues.join(", ") : "Belirtilmedi."}<br>
        <strong>Önerilen Rutin Süresi:</strong> ${routineTime === "short" ? "Kısa" : routineTime === "medium" ? "Orta" : "Uzun"}.
    `;

    const steps = routineSteps[routineTime].map(step => `<li>${step}</li>`).join("");

    // Sonuçları göster
    document.getElementById("routine-details").innerHTML = routine;
    document.getElementById("routine-steps").innerHTML = steps;

    // Bölümleri güncelle
    document.getElementById("skin-type-questions").classList.remove("active");
    document.getElementById("routine-result").classList.add("active");
});
