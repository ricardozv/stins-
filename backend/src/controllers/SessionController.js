const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email }  = req.body;

        let user = await User.findOne({ email });

        if (!user){
            user = await User.create({ email });

        }

       return res.json(user);
       
    }
};












// index: método que retorna uma listagem de sessões
// show: método que lista uma única sessão
// store: método que cria um sessão
// update: método que altera uma sessão
// destroy: método que remove uma sessão