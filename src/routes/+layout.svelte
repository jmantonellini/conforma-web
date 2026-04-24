<script lang="ts">
	import './layout.css';
	import 'lenis/dist/lenis.css';
	import favicon from '$lib/assets/favicon.svg';
	import Preloader from '$lib/Preloader.svelte';
	import { onMount } from 'svelte';
	import Footer from '$lib/ui/Footer.svelte';
	import Header from '$lib/ui/Header.svelte';
	import Lenis from 'lenis';
	import WhatsappFAB from '$lib/ui/WhatsappFAB.svelte';

	let lenis: Lenis;

	let { children } = $props();
	let loaded = $state(false);

	onMount(() => {
		loaded = true;
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		lenis = new Lenis({
			smoothWheel: !prefersReducedMotion,
			syncTouch: false, // keep false for mobile
			duration: 1.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Preloader show={!loaded} />
<WhatsappFAB />
<div class="min-h-screen w-screen overflow-hidden bg-black">
	<Header />
	{@render children()}
	<Footer />
</div>
