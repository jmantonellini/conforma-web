<script lang="ts">
	import RotatingTitle, { type Title } from './RotatingTitle.svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		image?: string;
		videoWebM?: string | null;
		videoMP4?: string | null;
		mobileVideoWebM?: string | null;
		mobileVideoMP4?: string | null;
		title?: Title;
	};

	let {
		image = "https://picsum.photos/1920/1080",
		videoWebM = null,
		videoMP4 = null,
		mobileVideoWebM = null,
		mobileVideoMP4 = null,
		title = { sentence: '', words: [] }
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex min-h-screen w-screen! items-end overflow-hidden bg-cover bg-center"
	aria-label="Hero Section"
	style="background-image: url({image})"
>
	<div class="absolute inset-0 z-1 bg-linear-to-t from-black to-transparent"></div>
	<div
		in:fly={{ y: 100, duration: 800, delay: 200 }}
		class="z-2 mb-14 lg:m-0 h-auto w-full p-8 text-neutral-content lg:justify-start lg:p-20"
	>
		<RotatingTitle {title} />
	</div>
	{#if videoWebM || videoMP4}
		<video class="absolute inset-0 h-full w-full object-cover" autoplay muted loop playsinline>
			<source src={videoWebM} type="video/webm" media="(min-width: 768px)" />
			<source src={videoMP4} type="video/mp4" media="(min-width: 768px)" />
			<source src={mobileVideoWebM} type="video/webm" media="(max-width: 767px)" />
			<source src={mobileVideoMP4} type="video/mp4" media="(max-width: 767px)" />
		</video>
	{/if}
</div>
