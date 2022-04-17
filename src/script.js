document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    document.getElementById("version").checked == true ? document.getElementById("btn").click() : document.getElementById("new-btn").click();
  }
});


document.addEventListener('change', () => {
  if (document.getElementById("version").checked == true){
    document.getElementById("wrapper").style.display = 'block';
    document.getElementById("new-wrapper").style.display = 'none';
  } else{
    document.getElementById("wrapper").style.display = 'none';
    document.getElementById("new-wrapper").style.display = 'block';
  }
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('galaxy-select').addEventListener('change', () => {
    let galaxyOption = document.getElementById('galaxy-select').value;
    switch (galaxyOption) {
      case 'milky-way': {
        document.getElementById('stars').value = '100';
        document.getElementById('galaxy-diameter').value = '260,000';
        document.getElementById('galaxy-thickness').value = '2,000';
        break;
      }
      case 'andromeda': {
        document.getElementById('stars').value = '1,000';
        document.getElementById('galaxy-diameter').value = '220,000';
        document.getElementById('galaxy-thickness').value = '2,600';
        break;
      }
      default: {
        return 1;
      }
    }
  });
});

function getUIValue(_id) {
  return document.getElementById(_id).value;
}

function getAliens(s, fs, fl, fi, fc, pl, cl) {
  s = s*1000000000;
  let n = s * fs * fl * fi * fc * (cl / pl);
  return Math.floor(n);
}

function new_getAliens(s, fs, fc, pl, cl){
  s *= 1e+9, pl*=1e+9;
  let n = s * fs * fc * (cl / pl);
  return Math.floor(n);
}

function getIntelligent(s, fs, fl, fi, pl, cl) {
  s = s*1000000000;
  let n = s * fs * fl * fi * (cl / pl);
  return Math.floor(n);
}

function getIntelligentDensity(gd, gt, _aliens) {
  let dIntelligent = (gd ** 2 + gt ** 2) ** 0.5 / _aliens;
  return dIntelligent;
}

function getAlienDensity(gd, gt, _aliens) {
  let dAlien = (gd ** 2 + gt ** 2) ** 0.5 / _aliens;
  return dAlien;
}


function ui2Num(_ui) {
  let uiNumber = _ui.replace(/[^0-9.]/g, '');
  return uiNumber;
}

function calculate() {
  let stars = ui2Num(getUIValue('stars')), fStars = ui2Num(getUIValue('fraction-stars')), fLife = ui2Num(getUIValue('fraction-life')),
    fIntelligent = ui2Num(getUIValue('fraction-intelligent')), fCommunicate = ui2Num(getUIValue('fraction-communicate')),
    pLifespan = ui2Num(getUIValue('planet-lifespan')), cLifespan = ui2Num(getUIValue('communication-lifespan'));
    galaxyDiameter = ui2Num(getUIValue('galaxy-diameter')), galaxyThickness = ui2Num(getUIValue('galaxy-thickness'));
  let aliens = getAliens(stars, fStars, fLife, fIntelligent, fCommunicate, pLifespan, cLifespan),
    alienDensity = getAlienDensity(galaxyDiameter, galaxyThickness, aliens);
    intelligentLife = getIntelligent(stars, fStars, fLife, fIntelligent, pLifespan, cLifespan);
    intelligentLifeDensity = getIntelligentDensity(galaxyDiameter, galaxyThickness, intelligentLife);
  document.getElementById('result').innerText = `Alien civilizations ${aliens}
  One alien civilization every ${alienDensity.toLocaleString()} lightyears
  
  Intelligent life ${intelligentLife.toLocaleString()}
  One intelligent life planet every ${intelligentLifeDensity.toLocaleString()} lightyears`;
  return 0;
}

function new_calculate(){
  let stars = getUIValue("new-stars"), newFStars = getUIValue("new-fraction-stars"), newFCommunicate = getUIValue("new-fraction-communicate"),
  newCLifespan = ui2Num(getUIValue("new-communication-lifespan")), newPLifespan = getUIValue("new-planet-lifespan"),
  newGalaxyDiameter = ui2Num(getUIValue("new-galaxy-diameter")), newGalaxyThickness = ui2Num(getUIValue("new-galaxy-thickness"));

  let aliens = new_getAliens(stars, newFStars, newFCommunicate, newPLifespan, newCLifespan);
  let alienDensity = getAlienDensity(newGalaxyDiameter, newGalaxyThickness, aliens);
  document.getElementById('result').innerText = `Alien civilizations ${aliens}
  One civilization every ${alienDensity.toLocaleString()} lightyears`;
}
