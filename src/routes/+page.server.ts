import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import Config from '$lib/LibConfig';
import LibCommon from '$lib/LibCommon';
/**
* getList
* @param
*
* @return
*/  
const getList = async function (): Promise<any> 
{
  try {   
    let postItem: any[] = [];
    const url = Config.MY_JSON_URL + '/files/test2022/cms.json';
    const req = await fetch( url );
    const json = await req.json();  
    let data = json; 
    data.items  = LibCommon.getDatetimeArray(data.items);
//console.log(data.items);    
    postItem = data;
    return postItem;
  } catch (e) {
    console.error(e);
  }
}
//
/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }) => {
    const data = await getList();
//console.log(items);
    return {
      items: data.items,
      page_items: data.page_items,
    };
    throw error(404, 'Not found');
}

