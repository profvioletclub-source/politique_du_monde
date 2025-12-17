function loadCountries(continent) {
  fetch('pays.json')
    .then(response => response.json())
    .then(countries => {
      // Filtrer par continent
      let filtered = countries.filter(c => c.continent === continent);

      // Tri alphabétique
      filtered.sort((a, b) => a.name.localeCompare(b.name, 'fr'));

      const grid = document.getElementById("countryGrid");
      grid.innerHTML = "";

      // Génération des cartes
      filtered.forEach(country => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<a href="${country.url}">${country.name}</a>`;
        grid.appendChild(card);
      });
    })
    .catch(error => console.error("Erreur lors du chargement des pays :", error));
}
