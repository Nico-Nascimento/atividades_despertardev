function apiPlanetas() {
  axios
    .get(`https://api.le-systeme-solaire.net/rest/bodies/`)
    .then((result) => {
      console.log("1. Consuma a API:");
      const corposCelestes = result.data.bodies;

      console.log("2. Filtre os Planetas:");
      const planetas = corposCelestes.filter(
        (corpos) => corpos.isPlanet === true
      );
      console.log(planetas);

      console.log("3. Encontre a Terra:");
      const terra = planetas.find((planets) => planets.englishName === "Earth");
      console.log(terra);

      console.log("4. Verifique Condições com some:");
      const temLua = planetas.some((planet) => planet.moons === null);
      console.log(temLua);

      console.log("5. Transforme os Dados com map:");
      const nomesPlanetas = planetas.map((planetas) => planetas.englishName);
      console.log(nomesPlanetas);

      console.log("6. Classificação por Tamanho: ");
      const classTamanho = planetas
        .sort((a, b) => b.meanRadius - a.meanRadius)
        .map((planetas) => planetas.englishName);
      console.log(classTamanho);

      console.log("7. Informações Concatenadas:");
      const joinPlanetas = nomesPlanetas.join(", ");
      console.log(joinPlanetas);

      console.log("8. Sistema Solar Compacto:");
      const menoresPlanetas = planetas
        .sort((a, b) => a.meanRadius - b.meanRadius)
        .slice(0, 5);
      const totalMassa = planetas.reduce(
        (acc, planet) => acc + planet.mass.massValue,
        0
      );
      console.log(menoresPlanetas);
      console.log(totalMassa);

      console.log("9. Luas e Desidade:");
      const densidadeLuas = planetas.filter(
        (planet) =>
          planet.moons && planet.moons.length > 2 && planet.density > 1
      );
      console.log(densidadeLuas);

      console.log("10. Ordem de descobrimento:");
      const ordemDescobrimento = corposCelestes.filter(corpos => corpos.discoveryDate !== '');
      const sortDescobrimento = ordemDescobrimento.sort((a, b) => new Date(a.discoveryDate.split("/").reverse()) - new Date(b.discoveryDate.split("/").reverse()));
      sortDescobrimento.forEach(astro => console.log(`${astro.englishName}: ${astro.discoveryDate}`));

      console.log("11. Encontrando Astro:");
      encontrarPlaneta();
      function encontrarPlaneta() {
        const nomePlaneta = prompt("Difite o nome do planeta:");
        const encontrado = planetas.find(
          (corpos) => corpos.englishName === nomePlaneta
        );

        if (encontrado) {
          console.log(`Aphelion: ${encontrado.aphelion}`);
          console.log(`Perihelio: ${encontrado.perihelion}`);
          console.log(`Massa: ${encontrado.mass.massValue}`);
          console.log(`Gravidade: ${encontrado.gravity}`);
          console.log(`Densidade ${encontrado.density}`);
        }
      }

      console.log("12. Filtro de Temperatura:");
      const filtroTemperatura = planetas
        .filter((temp) => temp.avgTemp >= 281 && temp.avgTemp <= 303)
        .sort((a, b) => a.avgTemp - b.avgTemp);
      filtroTemperatura.forEach((planeta) => {
        console.log(
          `Planeta: ${planeta.englishName} - Temperatura: ${planeta.avgTemp}`
        );
      });

      console.log(`13. Separando Planetas:`);
      const separatedByType = {};
      planetByBody();
      function planetByBody() {
        corposCelestes.forEach((corpse) => {
          const bodyType = corpse.bodyType;

          if (separatedByType[bodyType]) {
            separatedByType[bodyType].push(corpse.englishName);
          } else {
            separatedByType[bodyType] = [corpse.englishName];
          }
        });
        console.log(separatedByType);
      }

      console.log(`14. Ordenação Complexa:`);
      sortAndFilterPlanets();
      function sortAndFilterPlanets() {
        planetas.sort((a, b) => {
          const typeComparison = a.bodyType.localeCompare(b.bodyType);
          if (typeComparison !== 0) {
            return typeComparison;
          }
          return b.meanRadius - a.meanRadius;
        });
      }

      console.log(`15 Encontrando planetas orbitados.. :`);
      const planetMoons = [...planetas].filter((corpse) => {
        if (corpse.moons !== null) {
          console.log(`Planeta: ${corpse.englishName}`);
          corpse.moons.forEach((moon) => console.log(`Lua: ${moon.moon}`));
        }
      });

      console.log(`16. Média da Massa dos Planetas:`);
      const totalMass = planetas.reduce(
        (total, planet) =>
          total +
          planet.mass.massValue * Math.pow(10, planet.mass.massExponent),
        0
      );
      const averageMass = totalMass / planetas.length;
      console.log(
        `A média da massa de todos os planetas é: ${Number(averageMass).toFixed(
          2
        )}`
      );

      console.log(`17. Calcule a distância entre Saturno e Plutão:`);
      const saturno = corposCelestes.find(
        (body) => body.englishName === "Saturn"
      );
      const plutao = corposCelestes.find(
        (body) => body.englishName === "Pluto"
      );
      const distanciaEntreEles = Math.abs(saturno.aphelion - plutao.perihelion);
      console.log(
        `A menor distância entre eles em relação ao sol é ${distanciaEntreEles}`
      );

      console.log(`18. Planetas com Luas:`);
      const planetasComLuas = corposCelestes.filter(
        (planet) => planet.moons && planet.moons.length > 0
      );
      planetasComLuas.forEach((planet) => {
        console.log(`${planet.englishName}: ${planet.moons.length} lua(s)`);
      });

      statisticalAnalysis()
      function statisticalAnalysis() {
        const planets = planetas.filter(body => body.isPlanet && body.englishName !== 'Earth');
        const planetMasses = planets.map(planet => planet.mass.massValue);
        planetMasses.sort((a, b) => a - b);
      
        const median = calcMedian(planetMasses);
        const closestPlanet = findClosestPlanet(planets, median);

        console.log('Massas dos planetas:', planetMasses);
        console.log('Mediana das massas dos planetas:', median);
        console.log('Planeta mais próximo da mediana:', closestPlanet.englishName);
      }
      
      function calcMedian(sortedArray) {
        const length = sortedArray.length;
        const middle = Math.floor(length / 2);
      
        if (length % 2 === 0) {
          return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
        } else {
          return sortedArray[middle];
        }
      }
      
      function findClosestPlanet(planets, targetMass) {
        return planets.reduce((closest, planet) => {
          const planetMass = planet.mass.massValue;
          const closestMass = closest.mass.massValue;
          const currentDifference = Math.abs(planetMass - targetMass);
          const closestDifference = Math.abs(closestMass - targetMass);
      
          return currentDifference < closestDifference ? planet : closest;
        });
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });
}

apiPlanetas();
