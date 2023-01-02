<!-- routes/posts/[id]/+page.svelte -->
<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { marked } from 'marked';
import type { PageServerData } from './$types';
import Config from '$lib/LibConfig';	
export let data:PageServerData, post: any = {};
console.log(data.item);
post = data.item;
let content = post.content;
content = marked.parse(content);
</script>

<!-- MarkUp -->
<div class="container post_show_wrap">
	<a href={`/`}>
		<button class="btn btn-outline-primary my-2">Back</button>
	</a>
	<hr />	
	<h1>{post.title}</h1>
	<hr />
	<div>{@html content}</div>
	<hr />
</div>
