<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'accent' | 'ghost' | 'destructive' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let onClick: () => void;
</script>

<button
   {...$$restProps}
  type="button"
  class={`inline-flex items-center justify-center gap-1.5 rounded transition-colors focus:outline-none focus:ring-2 text-sm font-medium
    ${variant === 'primary' ? 'bg-foreground hover:bg-foreground/80 text-background' : ''}
    ${variant === 'destructive' ? 'bg-destructive hover:bg-destructive/80 text-destructive-foreground' : ''}
    ${variant === 'secondary' ? 'bg-secondary hover:bg-secondary/80 text-secondary-foreground' : ''}
    ${variant === 'accent' ? 'bg-accent hover:bg-accent/80 text-accent-foreground' : ''}
    ${variant === 'ghost' ? 'bg-transparent hover:bg-accent border' : ''}
    ${size === 'sm' ? 'min-w-8 h-8 py-1.5 px-2' : ''}
    ${size === 'md' ? 'min-w-10 h-10 py-2.5 px-3' : ''}
    ${size === 'lg' ? 'min-w-12 h-12 py-3 px-4' : ''}
  `}
  on:click={onClick}
>
  <slot />
</button>
