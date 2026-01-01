// airtable-test.mjs
import 'dotenv/config';

// Variables d’environnement
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

// Vérification minimale (important pour ne pas perdre du temps)
if (!AIRTABLE_TOKEN || !BASE_ID || !TABLE_NAME) {
  console.error("❌ Variables d’environnement manquantes");
  console.error({
    AIRTABLE_TOKEN: !!AIRTABLE_TOKEN,
    BASE_ID: !!BASE_ID,
    TABLE_NAME: !!TABLE_NAME,
  });
  process.exit(1);
}

// URL Airtable
const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?maxRecords=5`;

try {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP ${response.status}`);
  }

  const data = await response.json();

  console.log("✅ Réponse Airtable :");
  console.log(JSON.stringify(data, null, 2));

} catch (error) {
  console.error("❌ Erreur lors de l’appel Airtable");
  console.error(error);
}
