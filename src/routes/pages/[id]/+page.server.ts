import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import Config from '$lib/LibConfig';
import LibCommon from '$lib/LibCommon';

/**
* getitem
* @param
*
* @return
*/  
const getitem = async function (id: string): Promise<any> 
{
  try {   
    let postItem: any = {};
    const url = Config.MY_JSON_URL + '/files/test2022/cms.json';
    const req = await fetch( url );
    const json = await req.json();  
    let items = json.page_items 
//    items = LibCommon.getDatetimeArray(items);
//console.log(items)    
    postItem = items;
    //@ts-ignore
    const result = items.filter(item => item.save_id === id);
    if(result.length > 0) {
      postItem = result[0];
    }
    return postItem;
  } catch (e) {
    console.error(e);
  }
}

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }) => {
console.log("id=", params.id);
  const item = await getitem(params.id);
//console.log(item);
    return {
      title: 'Hello world: id=' + params.id,
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      item: item,
    };
//    throw error(404, 'Not found');
}