// Charger le fichier pays.json
fetch('pays.json')
  .then(response => response.json())
  .then(countries => {
    // Tri alphabétique
    countries.sort((a, b) => a.name.localeCompare(b.name, 'fr'));

    const grid = document.getElementById("countryGrid");

    // Génération des cartes
    countries.forEach(country => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<a href="${country.url}">${country.name}</a>`;
      grid.appendChild(card);
    });
  })
  .catch(error => console.error("Erreur lors du chargement des pays :", error));
