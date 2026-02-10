<script lang="ts">
	import RotatingTitle, { type Title } from './RotatingTitle.svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		poster?: string;
		mobilePoster?: string | null;
		videoWebM?: string | null;
		videoMP4?: string | null;
		mobileVideoWebM?: string | null;
		mobileVideoMP4?: string | null;
		title?: Title;
	};

	let {
		poster,
		mobilePoster = null,
		videoWebM = null,
		videoMP4 = null,
		mobileVideoWebM = null,
		mobileVideoMP4 = null,
		title = { sentence: '', words: [] }
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex min-h-screen w-screen! items-center overflow-hidden"
	aria-label="Hero Section"
>
	<div class="absolute inset-0 z-1 bg-linear-to-t from-transparent via-black via-40% to-transparent to-90%"></div>
	<div
		in:fly={{ y: 100, duration: 800, delay: 200 }}
		class="z-2 h-auto w-full p-8 text-neutral-content lg:p-20"
	>
		<RotatingTitle {title} />
	</div>
	{#if videoWebM || videoMP4}
		<!-- Desktop -->
		<video
			class="absolute inset-0 hidden h-full w-full object-cover md:block"
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
			class="absolute inset-0 block h-full w-full object-cover md:hidden"
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
