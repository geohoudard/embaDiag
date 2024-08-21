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

    // bouteille (sur 9)
    if (bottleWeight > 910) scorebottle += 3, scoresobriete += 3;
    if (bottleWeight > 835 && bottleWeight < 910 && bottleshape === 'standard') scorebottle += 3;//reduction
    if (bottleWeight > 835 && bottleWeight < 910 && bottleshape === 'speciale') scorebottle += 1;//reduction
    if (bottlecolor === 'opaque') scorebottle += 3; //recyclage
    if (bottlecolor === 'blanche') scorebottle += 3;//materiaux
    if (bottleincr === 'oui') scorebottle += 3;//recyclage

    // coiffe (max 8)
    if (coiffeMat === 'etain') scorecoiffe += 3;//reduction
    if (coiffeMat === 'alu_epais') scorecoiffe += 1;//reduction
    if (coiffeMat === 'complexe') scorecoiffe += 1;//reduction
    if (coiffeSize === 'longue') scorecoiffe += 1;//reduction
    if (coiffecoll === 'autre' || coiffecoll === 'papier') scorecoiffe += 1;//reduction
    if (coiffethermo === 'oui') scorecoiffe += 3;//recyclage

    // bouchage (max 5)
    if (capsuleType === 'plastique') scorebouchage += 3;//recyclage
    if (capsuleColor === 'mono-inf' || capsuleColor === 'poly' || capsuleColor === 'poly-inf') scorebouchage += 1;//reduction
    if (bouchonType === 'non') scorebouchage += 1;//materiaux

    // étiquette (max 10)
    if (etiquetteCount >= 2) scoreetiquette += 1;//reduction
    if (etiquetteColor >= 3) scoreetiquette += 1;//reduction
    if (etiquetteEcoInk === 'Oui') scoreetiquette += 1;//reduction
    if (etiquetteMat === 'papierreshum') scoreetiquette += 1;//materiaux
    if (etiquetteMat === 'papiercoton' || etiquetteMat === 'métal') scoreetiquette += 3;//materiaux
    if (etiquetteDor === 'dorurechaud') scoreetiquette += 1;//reduction
    if (etiquetteColle === 'colleultra') scoreetiquette += 3;//recyclage

    // étuis ou coffrets (max 14)
    if (etuisType === 'commande') scoreetuis += 1;//reduction
    if (etuisType === 'systematique') scoreetuis += 3;//reduction
    if (etuiWeight >= 900) scoreetuis += 1;//reduction
    if (elementsassos) scoreetuis += 1;//reduction
    if (etuisEcoink) scoreetuis += 1;//reduction
    if (etuisBois) scoreetuis += 3;//recyclage
    if (etuisPapier) scoreetuis += 1;//materiaux
    if (etuisCarton) scoreetuis += 0;//materiaux
    if (etuisPlastique) scoreetuis += 1;//materiaux
    if (etuisAimant) scoreetuis += 3;//recyclage

    // suremballage (max 9)
    if (suremballage === 'sac_sur_demande') scoresuremb += 1;//reduction
    if (suremballage === 'sac_systematique') scoresuremb += 3;//reduction
    if (suremballageEcoink) scoresuremb += 1;//reduction
    if (sacPapier) scoresuremb += 1;//materiaux
    if (sacPlastique) scoresuremb += 1;//materiaux
    if (sacAimant) scoresuremb += 3;//recyclage
    
    // carton (max 8)
    if (cartonRecycled === 'non') scorecarton += 1;//materiaux
    if (cartonCannelure === 'A' 
        || cartonCannelure === 'B'
        || cartonCannelure === 'C'
        || cartonCannelure === 'D'
        || cartonCannelure === 'E') scorecarton += 1;//reduction
    if (cartonInter === 'plastique') scorecarton += 3;//materiaux
    if (cartonInter === 'carton') scorecarton += 1;//materiaux
    if (cartonScotch === 'plastique') scorecarton += 1;//materiaux
    if (cartonDor === 'dorurechaud') scorecarton += 1;//reduction
    if (cartonInk === 'huileminerale') scorecarton += 1;//materiaux

    // objet (max 3)
    if (objet === 'oui') scoreobjet += 3;//reduction

    score = Math.round ((1 - ((scorebottle + scorecoiffe + scorebouchage + scoreetiquette + scoreetuis + scoresuremb +scorecarton + scoreobjet) / 66)) * 100)

    scorebottle = Math.round ((1-(scorebottle/9))*100);
    scorecoiffe = Math.round ((1-(scorecoiffe/8))*100);
    scorebouchage = Math.round ((1-(scorebouchage/5))*100);
    scoreetiquette = Math.round ((1-(scoreetiquette/10))*100);
    scoreetuis = Math.round ((1-(scoreetuis/14))*100);
    scoresuremb = Math.round ((1-(scoresuremb/9))*100);
    scorecarton = Math.round ((1-(scorecarton/8))*100);
    scoreobjet = Math.round ((1-(scoreobjet/3))*100);

    console.log("Calculated Score:", score);

    // Affichage des résultats

    const diagnosisResult = document.getElementById('diagnosisResult');
    diagnosisResult.innerHTML = `Votre EmbaScore est de ${score} %.<br><br>
    Bouteille : ${scorebottle} %<br>
    Coiffe : ${scorecoiffe} %<br>
    Bouchage : ${scorebouchage} %<br>
    Etiquette : ${scoreetiquette} %<br>
    Etuis : ${scoreetuis} %<br>
    Suremballage : ${scoresuremb} %<br>
    Cartons : ${scorecarton} %<br>
    Objets Pub : ${scoreobjet} %<br>`;

    if (bottleWeight > 910) {
        diagnosisResult.innerHTML += '<br><br>Baisser le poids de la bouteille, à minima sous les 900g.';
    } else if (bottleWeight < 910 && bottleWeight > 835 && bottleshape === 'standard') {
        diagnosisResult.innerHTML += '<br>En bouteille standard, vous devez vous approcher des 800-835g.';
    } else if (bottleWeight < 836 && bottleshape === 'standard') {
        diagnosisResult.innerHTML += '<br>Votre format et poids de bouteille sont optimaux.';
    } else {
        diagnosisResult.innerHTML += '<br>Pratique optimale.';
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

function createNewCuvee() {
    const newCuveeName = document.getElementById('newCuveeName').value;
    if (!newCuveeName) {
        alert('Veuillez entrer un nom pour la nouvelle cuvée.');
        return;
    }
    // Initialiser la nouvelle cuvée avec un score de 0 ou une autre valeur par défaut
    cuvees[newCuveeName] = 0;
    console.log(`Nouvelle cuvée créée: ${newCuveeName}`);
    alert(`Nouvelle cuvée créée: ${newCuveeName}`);
}

// Exemple de fonction supplémentaire qui pourrait être dans votre script original
function resetForm() {
    document.getElementById('diagnosticForm').reset();
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = '';
    }
}

// Ajouter des écouteurs d'événements pour les actions utilisateur
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', calculateDiagnosis);
    document.getElementById('resetButton').addEventListener('click', resetForm);
});