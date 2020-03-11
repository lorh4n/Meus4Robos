const readline = require('readline-sync');
const state = require('./state')

function robot() {
  const content = state.load();

  content.prefix = askAndReturnPrefix();
  state.save(content);

  function askAndReturnPrefix() {

    const prefixes = ['Who is', 'What is', 'The history of'];
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma Opção');
    const selectedPrefixText = prefixes[selectedPrefixIndex];


    return selectedPrefixText;
  }
}

module.exports = robot;