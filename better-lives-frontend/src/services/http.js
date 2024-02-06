import axios from "axios";

const get = async (url, query, headers) => {
  try{
    const res = await axios.get(url, {headers: {"ngrok-skip-browser-warning": 'skip-browser-warning'} });
    return res.data;

  }catch(err){
    return []
  }
 
};

export {
  get,
};
