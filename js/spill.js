const sprakhjertet = () => {
    // INGEN KAN KØDDE MED DETTE SCRIPTET!! 8-)

    // Lagre IDene til det som skal være dynamisk
    var storage = {
        title: 'tittel',
        question: 'spørsmål',
        image: 'bilde'
    };

    var stats = {
        points: 0,
        life: 5
    };

    // En funksjon for å sette/hente 
    // doc(method ?= 'string', id = 'string', store ?= 'string')
    /** @param {String[]} args */
    function doc (...args) {
        var method = 'hent', id, store;
        // Sjekk at alle argumentene/parametrene er i form av "string"
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                return console.warn('Feil: Fant verdi av typen:', typeof args[i]);
            }
        }
        // Sjekk antall argumenter/parametre
        // (args < 2) feil, (args = 2) hent, (args > 2) velg metode
        if (args.length < 2) {
            return console.warn('Feil: Mangler argumenter!\n  Minst 2 argumenter')
        } else if (args.length >= 2 && args[0] === /^(hent|get|sett?)$/i) {
            method = args[0];
            id = args[1];
            store = args[2] ? args[2].toLowerCase() : undefined;
            if (method === /^sett?$/i && !store) {
                return console.warn('Feil: Verdien til "store" er påkrevd for å sette en verdi')
            }
        } else if (args.length == 2) {
            id = args[0];
            store = args[1];
        }
        
        // Utfør metoden som skal brukes
        if (method === /^(hent|get)$/i) {
            for (let key in storage) {
                if (storage[key] == id) {
                    return storage[key];
                } else if (store && typeof storage[store] !== 'string') {
                    return storage[store];
                }
            }
            return console.warn('Feil: Fant ikke elementet med ID:', id);
        } else if (method === /^sett?$/i) {
            if (!storage[store]) {
                return console.warn('Feil: Kan ikke finne', store, 'i lageret');
            } else if (!document.getElementById(id)) {
                return console.warn('Feil: Kan ikke finne elementet med ID:', id)
            } else {
                storage[store] = document.getElementById(id);
            }
        }
    }

    for (let key in storage) {
        doc('sett', storage[key], key);
    }

    var game = {
        //
    };
};