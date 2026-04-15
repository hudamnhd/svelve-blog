<script lang="ts">
  let { href = '#', label = 'kembali', information = '' } = $props();
</script>

<div class="flex justify-between items-center my-4 px-4 md:px-6 lg:px-8 -translate-x-1">
  <div class="justify-self-start">
	<a
		href={href}
    title="Kembali"
		class="flex items-center gap-x-1.5 relative group w-fit whitespace-nowrap duration-300 ease-in-out">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			class=" top-1/2 left-2  size-5 stroke-3 fill-none stroke-current">
			<line
				x1="5"
				y1="12"
				x2="19"
				y2="12"
				class="translate-x-2 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></line>
			<polyline
				points="12 5 5 12 12 19"
				class="translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></polyline>
		</svg>
		<div class="text-sm font-bold">{label}</div>
	</a>
  </div>

  <div class="justify-self-end text-sm font-medium whitespace-nowrap">
    <div class="flex flex-col items-end justify-self-center gap-2">
      <div>{information}</div>
      <slot />
    </div>
  </div>
</div>
