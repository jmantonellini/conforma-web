<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		poster?: string;
		mobilePoster?: string | null;
		videoWebM?: string | null;
		videoMP4?: string | null;
		mobileVideoWebM?: string | null;
		mobileVideoMP4?: string | null;
	};

	let {
		poster,
		mobilePoster = null,
		videoWebM = null,
		videoMP4 = null,
		mobileVideoWebM = null,
		mobileVideoMP4 = null
	}: Props = $props();

	let view = $state(false);

	onMount(() => {
		view = true;
	});
</script>

<div class="relative h-screen w-screen! overflow-hidden" aria-label="Hero Section">
	<div class="absolute inset-0 z-1 flex h-full w-full flex-col justify-end p-8">
		{#if view}
			<h1
				class="[-webkit-text-stroke: 2px white] text-6xl font-bold text-white lg:text-8xl"
				in:fly={{ x: 100, duration: 600, delay: 1000 }}
			>
				Forged
			</h1>
			<h1
				class="[-webkit-text-stroke: 2px white] text-6xl font-bold text-white lg:text-8xl"
				in:fly={{ x: 100, duration: 600, delay: 1600 }}
			>
				for
			</h1>
			<h1
				class="[-webkit-text-stroke: 2px white] text-6xl font-bold text-white lg:text-8xl"
				in:fly={{ x: 100, duration: 600, delay: 2200 }}
			>
				Excellence
			</h1>
		{/if}
	</div>
	{#if videoWebM || videoMP4}
		<!-- Desktop -->
		<video
			class="hidden h-full w-full object-cover md:block"
			{poster}
			autoplay
			aria-hidden="true"
			tabindex="-1"
			muted
			loop
			playsinline
		>
			<source src={videoWebM} type="video/webm" />
			<source src={videoMP4} type="video/mp4" />
		</video>

		<!-- Mobile -->
		<video
			class="block h-full w-full object-cover md:hidden"
			poster={mobilePoster ?? poster}
			autoplay
			muted
			aria-hidden="true"
			tabindex="-1"
			loop
			playsinline
		>
			<source src={mobileVideoWebM ?? videoWebM} type="video/webm" />
			<source src={mobileVideoMP4 ?? videoMP4} type="video/mp4" />
		</video>
	{/if}
</div>
