// Az oldal betöltésekor hobbik lekérdezése
document.addEventListener("DOMContentLoaded", function() {
    // API lekérdezése a hobbikért (JSON fájl)
    fetch('hobbies.json') // Cseréld le a valódi API végpontra, ha szükséges
        .then(response => {
            if (!response.ok) {
                throw new Error('Hálózati hiba: ' + response.status);
            }
            return response.json(); // Válasz JSON formátumra konvertálása
        })
        .then(data => {
            const hobbiesList = document.getElementById("hobbiesList");
            data.forEach(hobby => {
                const listItem = document.createElement("li");
                listItem.innerText = `${hobby.name} - ${hobby.description}`;
                hobbiesList.appendChild(listItem);
            });
        })
        .catch(error => {
            document.getElementById("contactMessage").innerText = 
                "Hiba történt a hobbik betöltésekor. Kérlek, próbáld újra később.";
            console.error('Hiba a hobbik betöltésekor:', error);
        });
});

// Kapcsolat gomb eseménykezelő
document.getElementById("contactButton").addEventListener("click", function() {
    document.getElementById("contactMessage").innerText = "Kérlek, vedd fel velem a kapcsolatot az alábbi e-mail címen: dhbotond2005@gmail.com";
});
