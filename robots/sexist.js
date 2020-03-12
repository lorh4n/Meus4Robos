const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey;
const algorithmia = require('algorithmia');
const state = require('./state');

async function robot() {
  
    const content = state.load();
    console.log(content)
  
    var input = {
      "name": "hmmm"
    };
    algorithmia.client("simpW7CHvS2ibsVDgQOFuuhBNQb1")
      .algo("classification/GenderByName/0.1.0?timeout=300") // timeout is optional
      .pipe(input)
      .then(function(response) {
        content.genderDate =response.get().gender;
        state.save(content)
      });
  



}

module.exports = robot