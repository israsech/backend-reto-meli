const MercadoLibreApi = require('./../MercadoLibreApi');

async function handle (q){
    const {results,filters,available_filters} = await MercadoLibreApi.search(q??'')??{};
    const items= results?.slice(0, 4);
    if(items?.length===0){
        return {}
    }else{
        const author={
            name:'Israel',
            lastName:'Silva .E'
        }
        let categorias=filters.find(filter=>filter.id==='category');
        /*if(!categorias){
            categorias=available_filters.find(filter=>filter.name==='category')
        }*/
        const {values=[]}=categorias??{};
        const nombreCategorias=values.map(v=>v?.name??'')??[]
        const formatedItems=items.map(item=>itemFormat(item))
        return {
            author,
            items:formatedItems,
            categories:nombreCategorias
        }
    }

}
function itemFormat(item){
    return {
        id:item.id,
        title:item.title,
        price:{
            currency:item['currency_id'],
            amount:item.price,
            decimals:0//todo revisar cual es el decimal
        },
        picture:item.thumbnail,
        condition:item.condition,
        'free_shiping':item['free_shiping'],
    }
}
module.exports= {handle};