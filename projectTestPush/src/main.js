// Importation des bibliothèques nécessaires
require('dotenv').config(); // Charge les variables d'environnement depuis un fichier .env

// Utilisation des clés secrètes à partir des variables d'environnement
const apiKey = process.env.API_KEY;
const dbPassword = process.env.DB_PASSWORD;
const jwtSecret = process.env.JWT_SECRET;

console.log(`API Key: ${apiKey}`);
console.log(`Database Password: ${dbPassword}`);
console.log(`JWT Secret: ${jwtSecret}`);

// Le reste du code de votre application...
