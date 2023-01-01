import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import Config from '$lib/LibConfig';

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
    /*
    [
      let postItem: any[] = [
      {save_id: 1, title: "t1", content:"c1"},
      {save_id: 2, title: "t2", content:"c2"},
    ];
    */
    const url = Config.MY_JSON_URL + '/files/test2022/cms.json';
    const req = await fetch( url );
    const json = await req.json();  
    let items = json.items 
//console.log(items)    
    postItem = items;
    return postItem;
  } catch (e) {
    console.error(e);
  }
}
//
/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }) => {
    const items = await getList();
//console.log(items);
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      items: items,
    };
    throw error(404, 'Not found');
}
