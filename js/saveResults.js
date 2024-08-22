function saveResults() {
    const headers = [
        "Nom de la Cuvée", 
        "Nombre de Bouteilles",
        "Poids de la bouteille (g)", "Forme de la bouteille", "Couleur de la bouteille", "Incrustations dans le verre",
        "Coiffe matiere", "Coiffe longueur", "Collerette", "Plastique thermoformé", 
        "Type de capsule", "Impressions sur la capsule", "Type de bouchon",
        "Nombre d'étiquettes", "Nombre de couleurs", "Usage d'aplats de couleurs",
        "Matière de l'étiquette", "Dorure", "Colle",
        "Type d'étuis/coffret", "Poids d'étui/coffret", "Éléments associés", "Aplats de couleurs étuis",
        "Bois utilisé", "Papier utilisé", "Carton utilisé", "Plastique utilisé", "Aimant(s) utilisé(s)",
        "Type de suremballage", "Aplats de couleurs suremballage", "Papier utilisé suremballage",
        "Carton utilisé suremballage", "Plastique utilisé suremballage", "Aimant(s) utilisé(s) suremballage",
        "Carton recyclé", "Cannelure", "Intercalaire", "Scotch", "Dorure carton", "Encrage carton",
        "Objet publicitaire associé"
    ];

    const rows = cuveeData.map(cuvee => [
        cuvee.name,
        cuvee.nb || "",  
        cuvee.diagnostic.bottleWeight || "",
        cuvee.diagnostic.bottleshape || "",
        cuvee.diagnostic.bottlecolor || "",
        cuvee.diagnostic.bottleincr || "",

        cuvee.diagnostic.coiffeMat || "",
        cuvee.diagnostic.coiffeSize || "",
        cuvee.diagnostic.coiffecoll || "",
        cuvee.diagnostic.coiffethermo || "",

        cuvee.diagnostic.capsuleType || "",
        cuvee.diagnostic.capsuleColor || "",
        cuvee.diagnostic.bouchonType || "",

        cuvee.diagnostic.etiquetteCount || "",
        cuvee.diagnostic.etiquetteColor || "",
        cuvee.diagnostic.etiquetteEcoInk || "",
        cuvee.diagnostic.etiquetteMat || "",
        cuvee.diagnostic.etiquetteDor || "",
        cuvee.diagnostic.etiquetteColle || "",
        
        cuvee.diagnostic.etuisType || "",
        cuvee.diagnostic.etuiWeight || "",
        cuvee.diagnostic.elementsassos ? 'Oui' : 'Non',
        cuvee.diagnostic.etuisEcoink ? 'Oui' : 'Non',
        cuvee.diagnostic.etuisBois ? 'Oui' : 'Non',
        cuvee.diagnostic.etuisPapier ? 'Oui' : 'Non',
        cuvee.diagnostic.etuisCarton ? 'Oui' : 'Non',
        cuvee.diagnostic.etuisPlastique ? 'Oui' : 'Non',
        cuvee.diagnostic.etuisAimant ? 'Oui' : 'Non',

        cuvee.diagnostic.suremballage || "",
        cuvee.diagnostic.suremballageEcoink ? 'Oui' : 'Non',
        cuvee.diagnostic.sacPapier ? 'Oui' : 'Non',
        cuvee.diagnostic.sacCarton ? 'Oui' : 'Non',
        cuvee.diagnostic.sacPlastique ? 'Oui' : 'Non',
        cuvee.diagnostic.sacAimant ? 'Oui' : 'Non',

        cuvee.diagnostic.cartonRecycled || "",
        cuvee.diagnostic.cartonCannelure || "",
        cuvee.diagnostic.cartonInter || "",
        cuvee.diagnostic.cartonScotch || "",
        cuvee.diagnostic.cartonDor || "",
        cuvee.diagnostic.cartonInk || "",

        cuvee.diagnostic.objet || ""
    ]);

    let csvContent = headers.join(",") + "\n";
    rows.forEach(row => {
        csvContent += row.map(value => `"${value}"`).join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sauvegarde_eco_conception_champagne.csv';
    link.click();
}

function loadCSV(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        const text = reader.result;
        parseCSV(text);
    };
    reader.readAsText(input.files[0]);
}

function parseCSV(csvText) {
    const rows = csvText.split('\n').map(row => row.trim()).filter(row => row !== '');
    const headers = rows[0].split(',');
    const values = rows.slice(1).map(row => row.split(','));

    cuveeData = values.map((value, index) => {
        return {
            id: index,  // Temporairement utiliser l'index
            name: value[0].replace(/"/g, ''),
            nb: value[1].replace(/"/g, ''),
            diagnostic: {
                bottleWeight: value[2].replace(/"/g, ''),
                bottleshape: value[3].replace(/"/g, ''),
                bottlecolor: value[4].replace(/"/g, ''),
                bottleincr: value[5].replace(/"/g, ''),

                coiffeMat: value[6].replace(/"/g, ''),
                coiffeSize: value[7].replace(/"/g, ''),
                coiffecoll: value[8].replace(/"/g, ''),
                coiffethermo: value[9].replace(/"/g, ''),

                capsuleType: value[10].replace(/"/g, ''),
                capsuleColor: value[11].replace(/"/g, ''),
                bouchonType: value[12].replace(/"/g, ''),

                etiquetteCount: value[13].replace(/"/g, ''),
                etiquetteColor: value[14].replace(/"/g, ''),
                etiquetteEcoInk: value[15].replace(/"/g, ''),
                etiquetteMat: value[16].replace(/"/g, ''),
                etiquetteDor: value[17].replace(/"/g, ''),
                etiquetteColle: value[18].replace(/"/g, ''),
                
                etuisType: value[19].replace(/"/g, ''),
                etuiWeight: value[20].replace(/"/g, ''),
                elementsassos: value[21].replace(/"/g, '') === 'Oui',
                etuisEcoink: value[22].replace(/"/g, '') === 'Oui',
                etuisBois: value[23].replace(/"/g, '') === 'Oui',
                etuisPapier: value[24].replace(/"/g, '') === 'Oui',
                etuisCarton: value[25].replace(/"/g, '') === 'Oui',
                etuisPlastique: value[26].replace(/"/g, '') === 'Oui',
                etuisAimant: value[27].replace(/"/g, '') === 'Oui',

                suremballage: value[28].replace(/"/g, ''),
                suremballageEcoink: value[29].replace(/"/g, '') === 'Oui',
                sacPapier: value[30].replace(/"/g, '') === 'Oui',
                sacCarton: value[31].replace(/"/g, '') === 'Oui',
                sacPlastique: value[32].replace(/"/g, '') === 'Oui',
                sacAimant: value[33].replace(/"/g, '') === 'Oui',

                cartonRecycled: value[34].replace(/"/g, ''),
                cartonCannelure: value[35].replace(/"/g, ''),
                cartonInter: value[36].replace(/"/g, ''),
                cartonScotch: value[37].replace(/"/g, ''),
                cartonDor: value[38].replace(/"/g, ''),
                cartonInk: value[39].replace(/"/g, ''),

                objet: value[40].replace(/"/g, '')
            }
        };
    });

    // Met à jour le compteur d'ID pour qu'il soit supérieur à l'ID maximum existant
    if (cuveeData.length > 0) {
        const maxId = Math.max(...cuveeData.map(cuvee => cuvee.id));
        cuveeIdCounter = maxId + 1;
    } else {
        cuveeIdCounter = 0;
    }

    // Mettre à jour la liste déroulante avec les noms des cuvées
    updateCuveeDropdown();
}