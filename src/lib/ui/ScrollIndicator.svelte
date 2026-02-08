<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isVisible = $state(true);

	function handleScroll() {
		if (window.scrollY > 50) {
			isVisible = false;
		} else {
			isVisible = true;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if isVisible}
	<div
		class="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform animate-bounce"
		in:fade
		out:fade
	>
		<div class="flex h-8 w-8 items-center justify-center rounded-full border border-white">
			<svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</div>
{/if}
