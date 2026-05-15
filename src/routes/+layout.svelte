<script lang="ts">
	import './layout.css';
	import 'lenis/dist/lenis.css';
	import favicon from '$lib/assets/favicon.svg';
	import Preloader from '$lib/Preloader.svelte';
	import { onMount, setContext } from 'svelte';
	import Footer from '$lib/ui/Footer.svelte';
	import Header from '$lib/ui/Header.svelte';
	import Lenis from 'lenis';
	import WhatsappFAB from '$lib/ui/WhatsappFAB.svelte';
	import { m } from '$lib/paraglide/messages';

	let lenis: Lenis;

	let { children } = $props();
	let loaded = $state(false);

	setContext('heroVideoLoaded', {
		get loaded() {
			return loaded;
		},
		setLoaded: (value: boolean) => {
			loaded = value;
		}
	});

	onMount(() => {
		const timeout = setTimeout(() => {
			if (!loaded) {
				console.log('Video load timeout, showing page anyway');
				loaded = true;
			}
		}, 5000);

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		lenis = new Lenis({
			smoothWheel: !prefersReducedMotion,
			syncTouch: false,
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
			clearTimeout(timeout);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m.knotty_plane_cockroach_favor()}</title>
	<meta
		name="description"
		content="Conforma specializes in high-quality stainless steel fabrication for industrial tanks, piping systems, and architectural railings in Argentina."
	/>
	<meta
		name="keywords"
		content="stainless steel, industrial tanks, piping systems, Argentina, metal fabrication"
	/>
</svelte:head>

<Preloader show={!loaded} />
<WhatsappFAB />
<div class="min-h-screen w-screen overflow-hidden bg-black">
	<Header />
	{@render children()}
	<Footer />
</div>
