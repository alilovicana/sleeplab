const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "buffer": require.resolve("buffer/"),
            'https': 'https-browserify'
        }
    },
    // Dodajte ostatak konfiguracije webpacka prema vašim potrebama
};
