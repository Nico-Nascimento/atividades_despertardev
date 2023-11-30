const axios = require("axios");

// 1. Consuma a API
axios
  .get("https://api.le-systeme-solaire.net/rest/bodies")
  .then((response) => {
    const celestialBodies = response.data.bodies;

    // 2. Filtre os Planetas
    const planets = celestialBodies.filter((body) => body.isPlanet);

    // 3. Encontre a Terra
    const earth = planets.find((planet) => planet.englishName === "Earth");

    // 4. Verifique Condições com some
    const planetsWithoutMoons = planets.some((planet) => planet.moons === null);

    // 5. Transforme os Dados com map
    const planetNames = planets.map((planet) => planet.englishName);

    // 6. Classificação por Tamanho
    const sortedPlanetsBySize = planets
      .map((planet) => ({
        name: planet.englishName,
        radius: planet.meanRadius,
      }))
      .sort((a, b) => a.radius - b.radius);

    // 7. Informações Concatenadas
    const concatenatedPlanetNames = planetNames.join(", ");

    // 8. Sistema Solar Compacto
    const smallestPlanets = sortedPlanetsBySize.slice(0, 5);
    const totalMassOfSmallestPlanets = smallestPlanets.reduce(
      (acc, planet) => acc + planet.mass.value,
      0
    );

    // 9. Luas e Densidade
    const planetsWithMoreThan2MoonsAndHighDensity = planets.filter(
      (planet) => planet.moons.length > 2 && planet.density > 1
    );

    // 10. Ordem de descobrimento
    const discoveredAstros = celestialBodies.filter(
      (body) => body.discovered !== undefined
    );
    const sortedDiscoveredAstros = discoveredAstros.sort(
      (a, b) => new Date(b.discovered) - new Date(a.discovered)
    );
    sortedDiscoveredAstros.forEach((astro) =>
      console.log(`${astro.englishName}: ${astro.discovered}`)
    );

    // 11. Encontrando Astro
    function findAstroInfoByName(name) {
      const astro = celestialBodies.find((body) => body.englishName === name);
      return astro
        ? {
            distance: astro.semimajorAxis,
            mass: astro.mass,
            gravity: astro.gravity,
            density: astro.density,
          }
        : null;
    }

    // 12. Filtro de Temperatura
    const planetsWithTemperatureRange = celestialBodies
      .filter((body) => {
        const avgTempCelsius = body.avgTemp - 273.15;
        return avgTempCelsius >= 8 && avgTempCelsius <= 30;
      })
      .sort((a, b) => a.avgTemp - b.avgTemp);

    // 13. Separando Planetas
    function separatePlanetsByType() {
      const planetTypes = {};
      celestialBodies.forEach((body) => {
        const type = body.bodyType;
        if (type in planetTypes) {
          planetTypes[type].push(body.englishName);
        } else {
          planetTypes[type] = [body.englishName];
        }
      });
      return planetTypes;
    }

    // 14. Ordenação Complexa
    const sortedPlanetsByTypeAndSize = celestialBodies
      .filter((body) => body.isPlanet)
      .map((planet) => ({ name: planet.englishName, size: planet.meanRadius }))
      .sort((a, b) => b.size - a.size)
      .reduce((acc, planet) => {
        if (!acc[planetType]) {
          acc[planetType] = [];
        }
        if (acc[planetType].length < 3) {
          acc[planetType].push(planet.name);
        }
        return acc;
      }, {});

    // 15. Encontrando planetas orbitados
    const planetsWithOrbitingBodies = celestialBodies.filter(
      (body) => body.isPlanet && body.satellites.length > 0
    );

    planetsWithOrbitingBodies.forEach((planet) => {
      const orbitingBodies = planet.satellites.map(
        (satellite) => satellite.englishName
      );
      console.log(
        `${planet.englishName} é orbitado por: ${orbitingBodies.join(", ")}`
      );
    });

    // 16. Média da Massa dos Planetas
    const totalMass = celestialBodies
      .filter((body) => body.isPlanet)
      .reduce((acc, planet) => acc + planet.mass.value, 0);
    const averageMass = totalMass / planets.length;

    // 17. Calcule a distância entre Saturno e Plutão
    const saturn = celestialBodies.find(
      (body) => body.englishName === "Saturn"
    );
    const pluto = celestialBodies.find((body) => body.englishName === "Pluto");
    const distanceBetweenSaturnAndPluto = Math.abs(
      saturn.aphelion - pluto.perihelion
    );

    // 18. Planetas com Luas
    const planetsWithMoons = celestialBodies.filter(
      (body) => body.isPlanet && body.moons.length > 0
    );
    planetsWithMoons.forEach((planet) => {
      console.log(`${planet.englishName} has ${planet.moons.length} moon(s)`);
    });

    // 19. Análise Estatística do Sistema Solar
    const planetsOnly = celestialBodies.filter((body) => body.isPlanet);
    const planetMasses = planetsOnly.map((planet) => planet.mass.value);
    const sortedPlanetMasses = planetMasses.sort((a, b) => a - b);
    const medianMass = calculateMedian(sortedPlanetMasses);

    // Função auxiliar para calcular a mediana
    function calculateMedian(sortedArray) {
      const middle = Math.floor(sortedArray.length / 2);
      if (sortedArray.length % 2 === 0) {
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
      } else {
        return sortedArray[middle];
      }
    }

    // Encontrar o planeta mais próximo da mediana
    const planetClosestToMedian = planetsOnly.find(
      (planet) => Math.abs(planet.mass.value - medianMass) < 0.01
    );

    console.log("Atividades concluídas com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao consumir a API:", error.message);
  });
