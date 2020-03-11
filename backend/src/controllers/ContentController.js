const state = require('../../../robots/state');

const content = state.load();
module.exports = {
    async show(req, res){
        res.json(content)
    },

    async search(req, res){
        content.searchTerm = req.params.name;
        return res.send();
    },

}
