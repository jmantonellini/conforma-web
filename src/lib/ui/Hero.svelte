<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		poster?: string;
		mobilePoster?: string | null;
		videoMP4?: string | null;
		mobileVideoMP4?: string | null;
		onVideoLoaded?: () => void;
	};

	let {
		poster,
		mobilePoster = null,
		videoMP4 = null,
		mobileVideoMP4 = null,
		onVideoLoaded = () => {}
	}: Props = $props();

	let view = $state(false);
	let desktopVideo: HTMLVideoElement | null = $state(null);
	let mobileVideo: HTMLVideoElement | null = $state(null);
	let videoLoaded = $state(false);

	function handleVideoLoad() {
		if (!videoLoaded && onVideoLoaded) {
			videoLoaded = true;
			onVideoLoaded();
		}
	}

	function forcePlayVideo(video: HTMLVideoElement) {
		if (!video) return;

		const playPromise = video.play();
		if (playPromise !== undefined) {
			playPromise.catch((error) => {
				console.log('Autoplay prevented:', error);
				// Try to play on user interaction
				const playOnInteraction = () => {
					video.play().catch((e) => console.log('Still cannot play:', e));
					document.removeEventListener('touchstart', playOnInteraction);
					document.removeEventListener('click', playOnInteraction);
				};
				document.addEventListener('touchstart', playOnInteraction);
				document.addEventListener('click', playOnInteraction);
			});
		}
	}

	onMount(() => {
		view = true;

		// Check if videos are already loaded
		if (desktopVideo && desktopVideo.readyState >= 2) {
			handleVideoLoad();
			forcePlayVideo(desktopVideo);
		}
		if (mobileVideo && mobileVideo.readyState >= 2) {
			handleVideoLoad();
			forcePlayVideo(mobileVideo);
		}
	});
</script>

<div class="relative h-screen w-screen! overflow-hidden" aria-label="Hero Section">
	<div class="absolute inset-0 z-1 flex h-full w-full flex-col justify-end p-8">
		{#if view}
			<h1
				class="text-6xl font-bold text-white lg:text-8xl"
				in:fly={{ x: 100, duration: 600, delay: 1000 }}
			>
				Forged
			</h1>
			<h1
				class="text-6xl font-bold text-white lg:text-8xl"
				in:fly={{ x: 100, duration: 600, delay: 1600 }}
			>
				for
			</h1>
			<h1
				class="text-6xl font-bold text-white lg:text-8xl"
				in:fly={{ x: 100, duration: 600, delay: 2200 }}
			>
				Excellence
			</h1>
		{/if}
	</div>
	{#if videoMP4}
		<!-- Desktop -->
		<video
			bind:this={desktopVideo}
			class="hidden h-full w-full object-cover md:block"
			{poster}
			autoplay
			aria-hidden="true"
			tabindex="-1"
			muted
			loop
			playsinline
			oncanplay={handleVideoLoad}
			onloadeddata={handleVideoLoad}
		>
			<source src={videoMP4} type="video/mp4" />
		</video>

		<!-- Mobile -->
		<video
			bind:this={mobileVideo}
			class="block h-full w-full object-cover md:hidden"
			poster={mobilePoster ?? poster}
			autoplay
			muted
			aria-hidden="true"
			tabindex="-1"
			loop
			playsinline
			oncanplay={handleVideoLoad}
			onloadeddata={handleVideoLoad}
		>
			<source src={mobileVideoMP4 ?? videoMP4} type="video/mp4" />
		</video>
	{/if}
</div>
