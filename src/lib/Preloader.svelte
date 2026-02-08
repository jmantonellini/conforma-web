<script lang="ts">
	import { fade } from 'svelte/transition';
	import Logotipo from './assets/Logotipo.svelte';

	let { show = true } = $props();
</script>

{#if show}
	<div transition:fade class="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900">
		<Logotipo class="animate-pulse" />
	</div>
{/if}
