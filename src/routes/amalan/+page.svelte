<script lang="ts">
	import type { PageProps } from './$types';
  import PostList from '$lib/components/custom/post-list.svelte';

	let { data }: PageProps = $props();
</script>

<section class="animate space-y-6 py-6 px-4 md:px-6 lg:px-8">
  <h2 class="font-bold text-2xl">Amalan</h2>
  <PostList data={data} prefix="amalan" />
</section>
