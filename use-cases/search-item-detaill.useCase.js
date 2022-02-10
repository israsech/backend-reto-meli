const MercadoLibreApi = require('./../MercadoLibreApi');

async function handle (id){
    const record = await MercadoLibreApi.getItemRecord(id??'')??{};
    const description= await MercadoLibreApi.getItemDescription(id??'')??{};
    const author={
        name:'Israel',
        lastName:'Silva .E'
    }
    if(!record.id){
        return {}
    }else{
        return {
            author,
            item:itemFormat(record,description)
        }
    }
}
function itemFormat(record,description){
    const {id='',title,price,currency_id,condition,free_shipping,sold_quantity,pictures=[]}=record;
    const {plain_text=''} =description;
    return {
        id,
        title,
        price:{
            currency:currency_id,
            amount:price,
            decimals: 0
        },
        picture:pictures[0]??'',
        condition,
        free_shipping,
        sold_quantity,
        description:plain_text
    }
}
module.exports= {handle};