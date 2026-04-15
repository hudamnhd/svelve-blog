<script lang="ts">
	import type { PageProps } from './$types';
  import BackButton from '$lib/components/ui/back-button.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.meta.title} - Huda</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${data.meta.title} - Huda`} />
  <meta property="og:description" content={data.meta.description} />
</svelte:head>

<BackButton href="/amalan" />
<article>
  <h1 class="title">{data.meta.title}</h1>
  <p class="lead mb-4">{data.meta.description}</p>
  <data.content />
</article>

