let stars, fractionStars, fractionLife, fractionIntelligent, fractionCommunicate, planetLifespan, communicationLifespan, alien, alienDensity;
let galaxyDiameter, galaxyThickness;
let intelligentSpecies, intelligentSpeciesDensity;

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) document.getElementById('btn').click();
});

function getUIValue(_id) {
  return document.getElementById(_id).value
}

function getAliens(s, fs, fl, fi, fc, pl, cl) {
  let n = s * fs * fl * fi * fc * (cl / pl);
  return Math.floor(n)
}

function getIntelligent(s, fs, fl, fi) {
  let n = s * fs * fl * fi;
  return Math.floor(n)
}

function getIntelligentDensity(gd, gt) {
  let volume = Math.pow(gd / 2, 2) * Math.PI * gt;
  let d = (volume / intelligentSpecies / gt) ** 0.5;
  return d
}

function getAlienDensity(gd, gt) {
  let volume = Math.pow(gd/2, 2) * Math.PI * gt;
  let d = (volume / alien / gt)**0.5;
  return d
}

function calculate() {
  stars = getUIValue('stars'), fractionStars = getUIValue('fraction-stars'), fractionLife = getUIValue('fraction-life'),
    fractionIntelligent = getUIValue('fraction-intelligent'), fractionCommunicate = getUIValue('fraction-communicate'),
    planetLifespan = getUIValue('planet-lifespan'), communicationLifespan = getUIValue('communication-lifespan'),
    galaxyDiameter = getUIValue('galaxy-diameter'), galaxyThickness = getUIValue('galaxy-thickness');
  alien = getAliens(stars.replace(/[^0-9.]/g, ''), fractionStars.replace(/[^0-9.]/g, ''), fractionLife.replace(/[^0-9.]/g, ''), fractionIntelligent.replace(/[^0-9.]/g, ''), fractionCommunicate.replace(/[^0-9.]/g, ''), planetLifespan.replace(/[^0-9.]/g, ''), communicationLifespan.replace(/[^0-9.]/g, ''));
  alienDensity = getAlienDensity(galaxyDiameter.replace(/[^0-9.]/g, ''), galaxyThickness.replace(/[^0-9.]/g, '')); //alien density regex
  document.getElementById('result').innerText = `Alien civilizations N=${alien.toLocaleString()}\nOne civilization every ${alienDensity.toLocaleString()} lightyear(s)`;
  intelligentSpecies = getIntelligent(stars.replace(/[^0-9.]/g, ''), fractionStars.replace(/[^0-9.]/g, ''), fractionLife.replace(/[^0-9.]/g, ''), fractionIntelligent.replace(/[^0-9.]/g, ''));
  intelligentSpeciesDensity = getIntelligentDensity(galaxyDiameter.replace(/[^0-9.]/g, ''), galaxyThickness.replace(/[^0-9.]/g, ''));
  document.getElementById('result-2').innerText = `Planets with intelligent life ${intelligentSpecies.toLocaleString()}\nOne planet with intelligent life every ${intelligentSpeciesDensity.toLocaleString()} lightyear(s)`;
}
