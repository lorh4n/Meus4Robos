const state = require('./state');
const google = require('googleapis').google;
const customSearch = google.customsearch('v1');

const googleSearchCredentials = require('../credentials/google-credentials');
async function robot() {
  const content = state.load();

  const response = await customSearch.cse.list({
    auth: googleSearchCredentials.apikey,
    cx: googleSearchCredentials.searchEngineId,
    q: 'Michael Jackson',
    searchType: 'image',
    num: 1
  });
  console.dir(response, { depth: null });
  process.exit(0);
}
module.exports = robot;