<script>
	let { children } = $props();
</script>

<div class="bg-background text-foreground max-w-3xl mx-auto w-full min-h-screen">
{@render children()}
</div>
