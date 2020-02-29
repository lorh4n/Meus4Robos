 const readline = require('readline-sync')
 
 function start() {
    const content = {};
    
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();


    function askAndReturnSearchTerm() {

        return readline.question('Para a pesquisa: ');
    }

    function askAndReturnPrefix() {

        const prefixes = ['Who is', 'What is', 'The history of' ];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma Opção');
        const selectedPrefixText = prefixes[selectedPrefixIndex];


        return selectedPrefixText
    }

    console.log(content);
 }

 start();