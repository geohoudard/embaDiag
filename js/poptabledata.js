var cuveeData = [];
var cuveeIdCounter = 0;

function saveCuvees() {
    var table = document.getElementById("cuveeTable").getElementsByTagName('tbody')[0];

    for (var i = 0, row; row = table.rows[i]; i++) {
        var cuveeName = row.cells[0].innerText.trim();
        var cuveeNb = row.cells[1].innerText.trim();

        if (cuveeName && cuveeNb) {
            // Vérifie si la cuvée existe déjà
            var existingCuvee = cuveeData.find(function(cuvee) {
                return cuvee.name === cuveeName;
            });

            if (existingCuvee) {
                // Met à jour les données de la cuvée existante
                existingCuvee.nb = cuveeNb;
            } else {
                // Ajoute une nouvelle cuvée avec un identifiant unique
                cuveeData.push({
                    id: cuveeIdCounter++, // Génère un identifiant unique
                    name: cuveeName,
                    nb: cuveeNb,
                    diagnostic: {} // Initialise un objet de diagnostic vide
                });
            }
        }
    }

    updateCuveeDropdown();
    closePopup();
}


function openPopup() {
    // Affiche la pop-up

    document.getElementById("cuveePopup").style.display = "block";

    // Efface le contenu actuel du tableau
    var table = document.getElementById("cuveeTable").getElementsByTagName('tbody')[0];
    table.innerHTML = "";  // Vide les données précédentes

    // Remplit le tableau avec les cuvées sauvegardées
    cuveeData.forEach(function(cuvee) {
        var newRow = table.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.contentEditable = "true";
        cell2.contentEditable = "true";

        cell1.innerText = cuvee.name;
        cell2.innerText = cuvee.nb;
    });
}

function closePopup() {
    // Cache la pop-up
    document.getElementById("cuveePopup").style.display = "none";
}

function addNewRow() {
    var table = document.getElementById("cuveeTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.contentEditable = "true";
    cell2.contentEditable = "true";
    
    cell1.innerText = "";
    cell2.innerText = "";
}

function updateCuveeDropdown() {
    var select = document.getElementById("cuveeSelect");
    select.innerHTML = "<option value='' disabled selected>Choisissez une cuvée</option>";

    // Ajouter les cuvées au menu déroulant
    cuveeData.forEach(function(cuvee) {
        var option = document.createElement("option");
        option.value = cuvee.id; // Utilise l'identifiant unique comme valeur
        option.text = cuvee.name;  // Utilise le nom de la cuvée comme texte visible
        select.appendChild(option);
    });
}


function loadCuveeData() {
    var select = document.getElementById("cuveeSelect");
    var selectedId = select.value; // On utilise l'ID pour trouver la cuvée
    var selectedCuvee = cuveeData.find(function(cuvee) {
        return cuvee.id == selectedId;
    });

    if (selectedCuvee) {
        var diagnostic = selectedCuvee.diagnostic;

        // Charger les données du diagnostic dans le formulaire
        document.getElementById("bottleWeight").value = diagnostic.bottleWeight || "";
        document.getElementById("bottleshape").value = diagnostic.bottleshape || "0";
        document.getElementById("bottlecolor").value = diagnostic.bottlecolor || "0";
        document.getElementById("bottleincr").value = diagnostic.bottleincr || "0";

        document.getElementById("coiffeMat").value = diagnostic.coiffeMat || "0";
        document.getElementById("coiffeSize").value = diagnostic.coiffeSize || "0";
        document.getElementById("coiffecoll").value = diagnostic.coiffecoll || "0";
        document.getElementById("coiffethermo").value = diagnostic.coiffethermo || "0";

        document.getElementById("capsuleType").value = diagnostic.capsuleType || "0";
        document.getElementById("capsuleColor").value = diagnostic.capsuleColor || "0";
        document.getElementById("bouchonType").value = diagnostic.bouchonType || "0";

        document.getElementById("etiquetteCount").value = diagnostic.etiquetteCount || "";
        document.getElementById("etiquetteColor").value = diagnostic.etiquetteColor || "";
        document.getElementById("etiquetteEcoInk").checked = diagnostic.etiquetteEcoInk || false;
        document.getElementById("etiquetteMat").value = diagnostic.etiquetteMat || "0";
        document.getElementById("etiquettecontreMat").value = diagnostic.etiquettecontreMat || "0";
        document.getElementById("papierreshum").checked = diagnostic.papierreshum || false;
        document.getElementById("etiquetteDor").value = diagnostic.etiquetteDor || "0";
        document.getElementById("etiquetteColle").value = diagnostic.etiquetteColle || "0";

        document.getElementById("etuisType").value = diagnostic.etuisType || "0";
        document.getElementById("etuiWeight").value = diagnostic.etuiWeight || "";
        document.getElementById("elementsassos").checked = diagnostic.elementsassos || false;
        document.getElementById("etuisEcoink").checked = diagnostic.etuisEcoink || false;
        document.getElementById("etuissilkpaper").checked = diagnostic.etuissilkpaper || false;
        document.getElementById("etuisPapier").checked = diagnostic.etuisPapier || false;
        document.getElementById("etuisCarton").checked = diagnostic.etuisCarton || false;
        document.getElementById("etuisBois").checked = diagnostic.etuisBois || false;
        document.getElementById("etuisPlastique").checked = diagnostic.etuisPlastique || false;
        document.getElementById("etuisAimant").checked = diagnostic.etuisAimant || false;
        
        document.getElementById("suremballage").value = diagnostic.suremballage || "0";
        document.getElementById("suremballageEcoink").checked = diagnostic.suremballageEcoink || false;
        document.getElementById("sacPapier").checked = diagnostic.sacPapier || false;
        document.getElementById("sacCarton").checked = diagnostic.sacCarton || false;
        document.getElementById("sacPlastique").checked = diagnostic.sacPlastique || false;
        document.getElementById("sacAimant").checked = diagnostic.sacAimant || false;

        document.getElementById("cartonRecycled").value = diagnostic.cartonRecycled || "0";
        document.getElementById("cartonCannelure").value = diagnostic.cartonCannelure || "0";
        document.getElementById("cartonInter").value = diagnostic.cartonInter || "0";
        document.getElementById("cartonScotch").value = diagnostic.cartonScotch || "0";
        document.getElementById("cartonDor").value = diagnostic.cartonDor || "0";
        document.getElementById("cartonInk").value = diagnostic.cartonInk || "0";

        document.getElementById("objet").value = diagnostic.objet || "0";

    }
}

function saveDiagnostic() {
    var select = document.getElementById("cuveeSelect");
    var selectedId = select.value;

    var selectedCuvee = cuveeData.find(function(cuvee) {
        return cuvee.id == selectedId;
    });

    if (selectedCuvee) {
        var diagnostic = {
            bottleWeight: document.getElementById("bottleWeight").value,
            bottleshape: document.getElementById("bottleshape").value,
            bottlecolor: document.getElementById("bottlecolor").value,
            bottleincr: document.getElementById("bottleincr").value,

            coiffeMat: document.getElementById("coiffeMat").value,
            coiffeSize: document.getElementById("coiffeSize").value,
            coiffecoll: document.getElementById("coiffecoll").value,
            coiffethermo: document.getElementById("coiffethermo").value,

            capsuleType: document.getElementById("capsuleType").value,
            capsuleColor: document.getElementById("capsuleColor").value,
            bouchonType: document.getElementById("bouchonType").value,

            etiquetteCount: document.getElementById("etiquetteCount").value,
            etiquetteColor: document.getElementById("etiquetteColor").value,
            etiquetteEcoInk: document.getElementById("etiquetteEcoInk").checked,
            etiquetteMat: document.getElementById("etiquetteMat").value,
            etiquettecontreMat: document.getElementById("etiquettecontreMat").value,
            papierreshum: document.getElementById("papierreshum").checked,
            etiquetteDor: document.getElementById("etiquetteDor").value,
            etiquetteColle: document.getElementById("etiquetteColle").value,

            etuisType: document.getElementById("etuisType").value,
            etuiWeight: document.getElementById("etuiWeight").value,
            elementsassos: document.getElementById("elementsassos").checked,
            etuisEcoink: document.getElementById("etuisEcoink").checked,
            etuissilkpaper: document.getElementById("etuissilkpaper").checked,
            etuisPapier: document.getElementById("etuisPapier").checked,
            etuisCarton: document.getElementById("etuisCarton").checked,
            etuisBois: document.getElementById("etuisBois").checked,
            etuisPlastique: document.getElementById("etuisPlastique").checked,
            etuisAimant: document.getElementById("etuisAimant").checked,

            suremballage: document.getElementById("suremballage").value,
            suremballageEcoink: document.getElementById("suremballageEcoink").checked,
            sacPapier: document.getElementById("sacPapier").checked,
            sacCarton: document.getElementById("sacCarton").checked,
            sacPlastique: document.getElementById("sacPlastique").checked,
            sacAimant: document.getElementById("sacAimant").checked,

            cartonRecycled: document.getElementById("cartonRecycled").value,
            cartonCannelure: document.getElementById("cartonCannelure").value,
            cartonInter: document.getElementById("cartonInter").value,
            cartonScotch: document.getElementById("cartonScotch").value,
            cartonDor: document.getElementById("cartonDor").value,
            cartonInk: document.getElementById("cartonInk").value,

            objet: document.getElementById("objet").value,
        };

        selectedCuvee.diagnostic = diagnostic;

        alert("Diagnostic sauvegardé pour la cuvée : " + selectedCuvee.name);
    } else {
        alert("Veuillez sélectionner une cuvée valide.");
    }
}

// Infobulles

document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tooltip-icon');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseenter', function() {
            let tooltipText = this.getAttribute('data-tooltip');
            let tooltipBox = document.createElement('div');
            tooltipBox.className = 'tooltip-box';
            tooltipBox.innerHTML = tooltipText;
            document.body.appendChild(tooltipBox);
            
            let rect = this.getBoundingClientRect();
            tooltipBox.style.top = rect.top + window.scrollY - tooltipBox.offsetHeight - 10 + 'px';
            tooltipBox.style.left = rect.left + window.scrollX + 'px';
            tooltipBox.style.display = 'block';
        });

        tooltip.addEventListener('mouseleave', function() {
            let tooltipBox = document.querySelector('.tooltip-box');
            if (tooltipBox) {
                tooltipBox.remove();
            }
        });
    });
});
