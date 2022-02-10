//https://api.mercadolibre.com/items/:id
//https://api.mercadolibre.com/items/:id/description
const utils = require('./utils');
const axios = require('axios').default;
const API = 'https://api.mercadolibre.com/';


async function search(q){
  const query={q,limit:4};
  const queryString=utils.objectToUrlParams(query);
  const res=await axios.get(`${API}sites/MLA/search?${queryString}`);
  return res.data;
}

async function getItemRecord(id){
  const res=await axios.get(`${API}items/${id}`);
  return res.data
}
async function getItemDescription(id){
  const res=await axios.get(`${API}items/${id}/description`);
  return res.data
}

module.exports= {search,getItemRecord,getItemDescription};

