
const connection = require('../database/connections');

module.exports = {

    async index(request, response) {

        const { page = 1} = request.query;

        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id')
            .limit(5)
            .offset(5*(page-1))
            .select(['incidents.*','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);        

        const [coutIncidents] = await connection('incidents').count();
               
        console.log(coutIncidents);
        console.log(coutIncidents['count(*)']);

        response.header('X-Total-Count', coutIncidents['count(*)']);
        return response.json(incidents);
    
    },

    async delete(request,response){

        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id',id).select('*').first();
        
        console.log(id);
        console.log(ong_id);
        console.log(incident);

        if(incident.ong_id !== ong_id){
            return response.status(401).json({error: "Operation not Permitted !!"});
        }

        await connection('incidents').where('id',id).delete();

        return response.status(204).send();
    },

    async create(request, response){

        const {title, description, value} = request.body;

        const ong_id = request.headers.authorization;

        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        const id = result[0];
        return response.json({id});

    }
}