// saveResults.js

function saveResults() {
    const headers = [
        "Poids de la bouteille (g)","Forme de la bouteille","Couleur de la bouteille","Incrustations dans le verre",
        "Coiffe matiere","coiffe longueur","Collerette","plastique thermoforme", 
        "Type de capsule","Impressions sur la capsule","bouchonType",
        "etiquetteCount","etiquetteColor","etiquetteEcoInk"
    ];
    const rows = [
        [
            document.getElementById('bottleWeight').value,
            document.getElementById('bottleshape').value,
            document.getElementById('bottlecolor').value,
            document.getElementById('bottleincr').value,

            document.getElementById('coiffeMat').value,
            document.getElementById('coiffeSize').value,
            document.getElementById('coiffecoll').value,
            document.getElementById('coiffethermo').value,

            document.getElementById('capsuleType').value,
            document.getElementById('capsuleColor').value,
            document.getElementById('bouchonType').value,

            document.getElementById('etiquetteCount').value,
            document.getElementById('etiquetteColor').value,
            document.getElementById('etiquetteEcoInk').value,
            document.getElementById('etiquetteMat').value,
            document.getElementById('etiquetteDor').value,
            document.getElementById('etiquetteColle').value,
            
            document.getElementById('etuisType').value,
            document.getElementById('etuiWeight').value,
            document.getElementById('elementsassos').checked ? 'Oui' : 'Non',
            document.getElementById('etuisEcoink').checked ? 'Oui' : 'Non',
            document.getElementById('etuisBois').checked ? 'Oui' : 'Non',
            document.getElementById('etuisPapier').checked ? 'Oui' : 'Non',
            document.getElementById('etuisCarton').checked ? 'Oui' : 'Non',
            document.getElementById('etuisPlastique').checked ? 'Oui' : 'Non',
            document.getElementById('etuisAimant').checked ? 'Oui' : 'Non',

            document.getElementById('suremballage').value,
            document.getElementById('suremballageEcoink').checked ? 'Oui' : 'Non',
            document.getElementById('sacPapier').checked ? 'Oui' : 'Non',
            document.getElementById('sacCarton').checked ? 'Oui' : 'Non',
            document.getElementById('sacPlastique').checked ? 'Oui' : 'Non',
            document.getElementById('sacAimant').checked ? 'Oui' : 'Non',

            document.getElementById('cartonRecycled').value,
            document.getElementById('cartonCannelure').value,
            document.getElementById('cartonInter').value,
            document.getElementById('cartonScotch').value,
            document.getElementById('cartonDor').value,
            document.getElementById('cartonInk').value,

            document.getElementById('objet').value
        ]
    ];
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

    values.forEach((value) => {
        {
            document.getElementById('bottleWeight').value = value[0].replace(/"/g, '');
            document.getElementById('bottleshape').value = value[1].replace(/"/g, '');
            document.getElementById('bottlecolor').value = value[2].replace(/"/g, '');
            document.getElementById('bottleincr').value = value[3].replace(/"/g, '');

            document.getElementById('coiffeMat').value = value[4].replace(/"/g, '');
            document.getElementById('coiffeSize').value = value[5].replace(/"/g, '');
            document.getElementById('coiffecoll').value = value[6].replace(/"/g, '');
            document.getElementById('coiffethermo').value = value[7].replace(/"/g, '');

            document.getElementById('capsuleType').value = value[8].replace(/"/g, '');
            document.getElementById('capsuleColor').value = value[9].replace(/"/g, '');
            document.getElementById('bouchonType').value = value[10].replace(/"/g, '');

            document.getElementById('etiquetteCount').value = value[11].replace(/"/g, '');
            document.getElementById('etiquetteColor').value = value[12].replace(/"/g, '');
            document.getElementById('etiquetteEcoInk').value = value[13].replace(/"/g, '');
            document.getElementById('etiquetteMat').value = value[14].replace(/"/g, '');
            document.getElementById('etiquetteDor').value = value[15].replace(/"/g, '');
            document.getElementById('etiquetteColle').value = value[16].replace(/"/g, '');

            document.getElementById('etuisType').value = value[17].replace(/"/g, '');
            document.getElementById('etuiWeight').value = value[18].replace(/"/g, '');
            document.getElementById('elementsassos').checked = value[19].replace(/"/g, '')=== 'Oui';
            document.getElementById('etuisEcoink').checked = value[20].replace(/"/g, '')=== 'Oui';
            document.getElementById('etuisBois').checked = value[21].replace(/"/g, '')=== 'Oui';
            document.getElementById('etuisPapier').checked = value[22].replace(/"/g, '')=== 'Oui';
            document.getElementById('etuisCarton').checked = value[23].replace(/"/g, '')=== 'Oui';
            document.getElementById('etuisPlastique').checked = value[24].replace(/"/g, '')=== 'Oui';
            document.getElementById('etuisAimant').checked = value[25].replace(/"/g, '')=== 'Oui';

            document.getElementById('suremballage').value = value[26].replace(/"/g, '');
            document.getElementById('suremballageEcoink').checked = value[27].replace(/"/g, '')=== 'Oui';
            document.getElementById('sacPapier').checked = value[28].replace(/"/g, '')=== 'Oui';
            document.getElementById('sacCarton').checked = value[29].replace(/"/g, '')=== 'Oui';
            document.getElementById('sacPlastique').checked = value[30].replace(/"/g, '')=== 'Oui';
            document.getElementById('sacAimant').checked = value[31].replace(/"/g, '')=== 'Oui';

            document.getElementById('cartonRecycled').value = value[32].replace(/"/g, '');
            document.getElementById('cartonCannelure').value = value[33].replace(/"/g, '');
            document.getElementById('cartonInter').value = value[34].replace(/"/g, '');
            document.getElementById('cartonScotch').value = value[35].replace(/"/g, '');
            document.getElementById('cartonDor').value = value[36].replace(/"/g, '');
            document.getElementById('cartonInk').value = value[37].replace(/"/g, '');

            document.getElementById('objet').value = value[38].replace(/"/g, '');
        }
    });
}
