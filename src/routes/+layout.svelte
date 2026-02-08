<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Preloader from '$lib/Preloader.svelte';
	import { onMount } from 'svelte';
	import Footer from '$lib/ui/Footer.svelte';
	import Header from '$lib/ui/Header.svelte';

	let { children } = $props();
	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Preloader show={!loaded} />
<div class="min-h-screen w-screen overflow-hidden bg-gray-900">
	<Header />
	{@render children()}
	<Footer />
</div>
