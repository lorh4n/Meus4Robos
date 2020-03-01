const readline = require('readline-sync');
const robots = {
    text: require('./robots/text')
}

async function start() {
    const content = {
        maximumSentences: 7
    };

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    await robots.text(content)


    function askAndReturnSearchTerm() {
        return readline.question('Para a pesquisa: ');
    }

    function askAndReturnPrefix() {

        const prefixes = ['Who is', 'What is', 'The history of'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma Opção');
        const selectedPrefixText = prefixes[selectedPrefixIndex];


        return selectedPrefixText
    }

    console.log(JSON.stringify(content, null, 4))


}

start();