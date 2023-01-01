<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import type { PageServerData } from './$types';
export let data: PageServerData;
//console.log(data);
</script>

<div>
	<h1>posts</h1>
	<hr />
	{#each data.items as item}
	<div>
		<h3>{item.title}</h3>
		<p>ID : {item.save_id}</p>
		<a href={`/posts/${item.save_id}`} class="btn">[ show ]
		</a>		
		<hr />
	</div>
	{/each}	
</div>
