<!-- routes/posts/[id]/+page.svelte -->
<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import type { PageServerData } from './$types';
import Config from '$lib/LibConfig';	
export let data:PageServerData, post: any = {};
console.log(data.item);
post = data.item;
</script>

<!-- MarkUp -->
<div>
	<a href={`/`} class="btn">[ Back ]
	</a>		
	<h1>Show : {post.title}</h1>
	<hr />
	<div>{@html post.content}</div>
	<hr />
</div>
