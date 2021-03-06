const knex = require('../database/index');

module.exports = {
    async index(req, res){
        const results = await knex('users');
        
        return res.json(results);
    },
    async create(req, res, next){

        try{

            const { username } = req.body
            await knex('users').insert({
                username
            });

            return res.status(201).send();

        }
        catch(error){
            next(error)
        }
    },
    async update(req, res, next){
        try{

            const { username } = req.body;
            const { id } = req.params; //pega dos parametros passados na url

            await knex('users').update({username}).where({id});
            
            return res.send(); //da na mesma qualquer um dos dois, pois o status 200 já é por padrão
            //return res.status(200).send();
        }
        catch(error){
            next(error);
        }
    },
    async delete(req, res, next){

        try{
            const { id } = req.params;

            await knex('users').where({ id }).del();
            return res.send();
        }
        catch(error){
            next(error);
        }

    }
}
