const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getInformacoes();
    res.json(informacoes);
}

exports.createInformacoes = async (req, res) => {
    const informacoes = req.body;
    const newInformacoes = await informacoesRepository.createInformacoes(informacoes);
    res.json(newInformacoes);
}

exports.updateInformacoes = async (req, res) => {
    const informacoes = req.body;
    const updatedInformacoes = await informacoesRepository.updateInformacoes(informacoes);
    res.json(updatedInformacoes);
    
}

exports.deleteInformacoes = async (req, res) => {
    await informacoesRepository.deleteInformacoes();
    res.json({message: `Informação deletada`});
}