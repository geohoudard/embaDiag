function calculateDiagnosis() {
    console.log("calculateDiagnosis called");

    // Récupérer les valeurs du formulaire
    const bottleWeight = parseFloat(document.getElementById('bottleWeight').value);
    const bottleshape = document.getElementById('bottleshape').value;
    const bottlecolor = document.getElementById('bottlecolor').value;
    const bottleincr = document.getElementById('bottleincr').value; 
    
    const coiffeMat = document.getElementById('coiffeMat').value;
    const coiffeSize = document.getElementById('coiffeSize').value;
    const coiffecoll = document.getElementById('coiffecoll').value;
    const coiffethermo = document.getElementById('coiffethermo').value;
    
    const capsuleType = document.getElementById('capsuleType').value;
    const capsuleColor = document.getElementById('capsuleColor').value;
    const bouchonType = document.getElementById('bouchonType').value;
    
    const etiquetteCount = parseInt(document.getElementById('etiquetteCount').value);
    const etiquetteColor = document.getElementById('etiquetteColor').value;
    const etiquetteEcoInk = document.getElementById('etiquetteEcoInk').value;
    const etiquetteMat = document.getElementById('etiquetteMat').value;
    const etiquetteDor = document.getElementById('etiquetteDor').value;
    const etiquetteColle = document.getElementById('etiquetteColle').value;
    
    const etuisType = document.getElementById('etuisType').value;
    const etuiWeight = parseFloat(document.getElementById('etuiWeight').value);
    const elementsassos = document.getElementById('elementsassos').checked;
    const etuisEcoink = document.getElementById('etuisEcoink').checked;
    const etuisBois = document.getElementById('etuisBois').checked;
    const etuisPapier = document.getElementById('etuisPapier').checked;
    const etuisCarton = document.getElementById('etuisCarton').checked;
    const etuisPlastique = document.getElementById('etuisPlastique').checked;
    const etuisAimant = document.getElementById('etuisAimant').checked;
    
    const suremballage = document.getElementById('suremballage').value;
    const suremballageEcoink = document.getElementById('suremballageEcoink').checked;
    const sacPapier = document.getElementById('sacPapier').checked;
    const sacCarton = document.getElementById('sacCarton').checked;
    const sacPlastique = document.getElementById('sacPlastique').checked;
    const sacAimant = document.getElementById('sacAimant').checked;
    
    const cartonRecycled = document.getElementById('cartonRecycled').value;
    const cartonCannelure = document.getElementById('cartonCannelure').value;
    const cartonInter = document.getElementById('cartonInter').value;
    const cartonScotch = document.getElementById('cartonScotch').value;
    const cartonDor = document.getElementById('cartonDor').value;
    const cartonInk = document.getElementById('cartonInk').value;

    const objet = document.getElementById('objet').value;

    console.log("Form Values:", { 
        bottleWeight, bottleshape, bottlecolor, bottleincr, 
        coiffeMat, coiffeSize, coiffecoll, coiffethermo, 
        capsuleType, capsuleColor, bouchonType, 
        etiquetteCount, etiquetteColor, etiquetteEcoInk, etiquetteMat, etiquetteDor, etiquetteColle, 
        etuisType, etuiWeight, elementsassos, etuisEcoink, etuisBois, etuisPapier, etuisCarton, etuisPlastique, etuisAimant, 
        suremballage, suremballageEcoink, sacPapier, sacCarton, sacPlastique, sacAimant, 
        cartonRecycled, cartonCannelure, cartonInter, cartonScotch, cartonDor, cartonInk, 
        objet 
    });

    // Logique de calcul
    let score = 0;

    let scorebottle = 0;
    let scorecoiffe = 0;
    let scorebouchage = 0;
    let scoreetiquette = 0;
    let scoreetuis = 0;
    let scoresuremb = 0;
    let scorecarton = 0;
    let scoreobjet = 0;

    let scoresobriete = 0;
    let scorerecyclage = 0;
    let scoremateriaux = 0;

    let scorecarbone = 0;

    // bouteille (sur 9)
    if (bottleWeight > 910) scorebottle += 3, scoresobriete += 1;
    if (bottleWeight > 835 && bottleWeight < 910 && bottleshape === 'standard') scorebottle += 3, scoresobriete += 1;
    if (bottleWeight > 835 && bottleWeight < 910 && bottleshape === 'speciale') scorebottle += 1, scoresobriete += 1;
    if (bottlecolor === 'opaque') scorebottle += 3, scorerecyclage += 1;
    if (bottlecolor === 'blanche') scorebottle += 3, scoremateriaux += 1;
    if (bottleincr === 'oui') scorebottle += 3, scorerecyclage += 1;

    // coiffe (max 8)
    if (coiffeMat === 'etain') scorecoiffe += 3, scoresobriete += 1, scorecarbone += 48.1;
    if (coiffeMat === 'alu_epais') scorecoiffe += 1, scoresobriete += 1, scorecarbone += 9.2;
    if (coiffeMat === 'complexe') scorecoiffe += 1, scoresobriete += 1;
    if (coiffeMat === 'complexe' && coiffeSize === 'longue') scorecarbone += 17.8;
    if (coiffeMat === 'complexe'&& coiffeSize === 'courte') scorecarbone += 10.2;
    if (coiffeMat === 'papier' && coiffeSize === 'longue') scorecarbone += 2.3;
    if (coiffeMat === 'papier'&& coiffeSize === 'courte') scorecarbone += 1.2;
    if (coiffeSize === 'longue') scorecoiffe += 1, scoresobriete += 1;
    if (coiffecoll === 'autre' || coiffecoll === 'papier') scorecoiffe += 1, scoresobriete += 1;
    if (coiffethermo === 'oui') scorecoiffe += 3, scorerecyclage += 1;

    // bouchage (max 5)
    if (capsuleType === 'plastique') scorebouchage += 3, scorerecyclage += 1;
    if (capsuleColor === 'mono-inf' || capsuleColor === 'poly' || capsuleColor === 'poly-inf') scorebouchage += 1, scoresobriete += 1;
    if (bouchonType === 'non') scorebouchage += 1, scoremateriaux += 1;

    // étiquette (max 10)
    if (etiquetteCount >= 2) scoreetiquette += 1, scoresobriete += 1;
    if (etiquetteColor >= 3) scoreetiquette += 1, scoresobriete += 1;
    if (etiquetteEcoInk === 'Oui') scoreetiquette += 1, scoresobriete += 1;
    if (etiquetteMat === 'papierreshum') scoreetiquette += 1, scoremateriaux += 1;
    if (etiquetteMat === 'papiercoton' || etiquetteMat === 'métal') scoreetiquette += 3, scoremateriaux += 1;
    if (etiquetteDor === 'dorurechaud') scoreetiquette += 1, scoresobriete += 1;
    if (etiquetteColle === 'colleultra') scoreetiquette += 3, scorerecyclage += 1;

    // étuis ou coffrets (max 14)
    if (etuisType === 'commande') scoreetuis += 1, scoresobriete += 1;
    if (etuisType === 'systematique') scoreetuis += 3, scoresobriete += 1;
    if (etuiWeight >= 900) scoreetuis += 1, scoresobriete += 1;
    if (elementsassos) scoreetuis += 1, scoresobriete += 1;
    if (etuisEcoink) scoreetuis += 1, scoresobriete += 1;
    if (etuisBois) scoreetuis += 3, scorerecyclage += 1;
    if (etuisPapier) scoreetuis += 1, scoremateriaux += 1;
    if (etuisCarton) scoreetuis += 0, scoremateriaux += 1;
    if (etuisPlastique) scoreetuis += 1, scoremateriaux += 1;
    if (etuisAimant) scoreetuis += 3, scorerecyclage += 1;

    // suremballage (max 9)
    if (suremballage === 'sac_sur_demande') scoresuremb += 1, scoresobriete += 1;
    if (suremballage === 'sac_systematique') scoresuremb += 3, scoresobriete += 1;
    if (suremballageEcoink) scoresuremb += 1, scoresobriete += 1;
    if (sacPapier) scoresuremb += 1, scoremateriaux += 1;
    if (sacPlastique) scoresuremb += 1, scoremateriaux += 1;
    if (sacAimant) scoresuremb += 3, scorerecyclage += 1;
    
    // carton (max 8)
    if (cartonRecycled === 'non') scorecarton += 1, scoremateriaux += 1;
    if (cartonCannelure === 'A' 
        || cartonCannelure === 'B'
        || cartonCannelure === 'C'
        || cartonCannelure === 'D'
        || cartonCannelure === 'E') scorecarton += 1, scoresobriete += 1;
    if (cartonInter === 'plastique') scorecarton += 3, scoremateriaux += 1;
    if (cartonInter === 'carton') scorecarton += 1, scoremateriaux += 1;
    if (cartonScotch === 'plastique') scorecarton += 1, scoremateriaux += 1;
    if (cartonDor === 'dorurechaud') scorecarton += 1, scoresobriete += 1;
    if (cartonInk === 'huileminerale') scorecarton += 1, scoremateriaux += 1;

    // objet (max 3)
    if (objet === 'oui') scoreobjet += 3, scoresobriete += 1;

    score = Math.round ((1 - ((scorebottle + scorecoiffe + scorebouchage + scoreetiquette + scoreetuis + scoresuremb +scorecarton + scoreobjet) / 66)) * 100)

    scorebottle = Math.round ((1-(scorebottle/9))*100);
    scorecoiffe = Math.round ((1-(scorecoiffe/8))*100);
    scorebouchage = Math.round ((1-(scorebouchage/5))*100);
    scoreetiquette = Math.round ((1-(scoreetiquette/10))*100);
    scoreetuis = Math.round ((1-(scoreetuis/14))*100);
    scoresuremb = Math.round ((1-(scoresuremb/9))*100);
    scorecarton = Math.round ((1-(scorecarton/8))*100);
    scoreobjet = Math.round ((1-(scoreobjet/3))*100);

    scoresobriete = Math.round ((1-(scoresobriete/18))*100);
    scorerecyclage = Math.round ((1-(scorerecyclage/7))*100);
    scoremateriaux = Math.round ((1-(scoremateriaux/12))*100);

    console.log("Calculated Score:", score);

    const embascore = document.getElementById('embascore');
    embascore.innerHTML = `${score} %`;

    const indicebottle = document.getElementById('indicebottle');
    indicebottle.innerHTML = `${scorebottle} %`;
    const indicecoiffe = document.getElementById('indicecoiffe');
    indicecoiffe.innerHTML = `${scorecoiffe} %`;
    const indicebouchage = document.getElementById('indicebouchage');
    indicebouchage.innerHTML = `${scorebouchage} %`;
    const indiceetiquette = document.getElementById('indiceetiquette');
    indiceetiquette.innerHTML = `${scoreetiquette} %`;
    const indiceetuis = document.getElementById('indiceetuis');
    indiceetuis.innerHTML = `${scoreetuis} %`;
    const indicesuremb = document.getElementById('indicesuremb');
    indicesuremb.innerHTML = `${scoresuremb} %`;
    const indicecarton = document.getElementById('indicecarton');
    indicecarton.innerHTML = `${scorecarton} %`;
    const indiceobjet = document.getElementById('indiceobjet');
    indiceobjet.innerHTML = `${scoreobjet} %`;

    const indicesobriete = document.getElementById('indicesobriete');
    indicesobriete.innerHTML = `Sobriété : ${scoresobriete} %`;

    const indicerecyclage = document.getElementById('indicerecyclage');
    indicerecyclage.innerHTML = `Recyclage : ${scorerecyclage} %`;

    const indicemateriaux = document.getElementById('indicemateriaux');
    indicemateriaux.innerHTML = `Matériaux : ${scoremateriaux} %`;

    const indicecarbone = document.getElementById('indicecarbone');
    indicecarbone.innerHTML = `Empreinte carbone :<br>${scorecarbone} gCO2e / Bouteille`;

    // Mise à jour des indicateurs visuels
    setScoreIndicator("Sobriété-indicator", scoresobriete); 
    setScoreIndicator("Recyclage-indicator", scorerecyclage); 
    setScoreIndicator("Matériaux-indicator", scoremateriaux);

    // Affichage des conseils d'améioration
    const diagnosisAdvise = document.getElementById('diagnosisAdvise');
    diagnosisAdvise.innerHTML = "";
    if (bottleWeight > 910) {
        diagnosisAdvise.innerHTML += 'Baisser le poids de la bouteille, à minima sous les 900g.';
    } else if (bottleWeight < 910 && bottleWeight > 835 && bottleshape === 'standard') {
        diagnosisAdvise.innerHTML += 'En bouteille standard, vous devez vous approcher des 800-835g.';
    } else if (bottleWeight < 836 && bottleshape === 'standard') {
        diagnosisAdvise.innerHTML += 'Votre format et poids de bouteille sont optimaux.';
    } else {
        diagnosisAdvise.innerHTML += 'Pratique optimale.';
    }
}

// Accordéon
const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        // Fermer toutes les sections ouvertes
        for (let j = 0; j < accordions.length; j++) {
            if (accordions[j] !== this) {
                accordions[j].classList.remove("active");
                accordions[j].nextElementSibling.style.display = "none";
            }
        }
        // Ouvrir la section cliquée
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Affichage du plan d'Eco-conception Adelphe CIVC
function viewPDF() {
    window.open('media/plan-de-prevention-commun-champagne_2023.pdf', '_blank');
}

// Ajouter des écouteurs d'événements pour les actions utilisateur
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', calculateDiagnosis);
    document.getElementById('resetButton').addEventListener('click', resetForm);
});

// Barres de couleurs de score : position du curseur
function setScoreIndicator(id, scorecolor) {
    const indicator = document.getElementById(id);
    const barWidth = 200;
    const position = (scorecolor/100) * barWidth;
    indicator.style.left = `${position}px`;
}

function createPieChart(canvasId, score) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Score', 'Restant'],
            datasets: [{
                data: [score, 100 - score],
                backgroundColor: ['#ff6384', '#dddddd'],
                hoverBackgroundColor: ['#ff6384', '#eeeeee']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}
