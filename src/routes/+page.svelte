<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import type { PageServerData } from './$types';
import IndexRow from './IndexRow.svelte';
import TopHeadBox from './TopHeadBox.svelte';
import Config from '$lib/LibConfig';
export let data: PageServerData;
//console.log(data);
</script>

<div class="body_main_wrap">
	<TopHeadBox site_name={Config.MY_SITE_NAME} info_text={Config.MY_SITE_INFO} />
	<div class="container mb-4">
		<div class="btn_disp_ara_wrap mt-0">
			<div class="card shadow-sm my-2">
				<h5 class="card-header myblog_color_accent">Pages</h5>
				<div class="card-body">
				  {#each data.page_items as item}
				  <a class="btn btn-outline-dark  mx-1 mb-2" 
				  href={`/pages/${item.save_id}`}>{item.title}
				  </a>
				  {/each}          
				</div>
			</div>			
		</div>
		<h3 class="my-2">Posts</h3> 
		<hr />
		<div class="body_wrap card shadow-sm mb-4">
			<div id="post_items_box" class="card-body mt-2 mb-4">
				{#each data.items as item}
				<IndexRow id={item.save_id}  title={item.title} 
				date={item.dt_str} category={item.categoryName}  />  				
				{/each}	
			</div><!-- post_items_box_end -->
		</div><!-- body_wrap_end -->		
	</div>
</div>

<!--
				<div>
					<h3>{item.title}</h3>
					<p>ID : {item.save_id}</p>
					<a href={`/posts/${item.save_id}`} class="btn">[ show ]
					</a>		
					<hr />
				</div>

-->