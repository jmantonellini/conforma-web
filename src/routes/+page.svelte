<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Hero from '$lib/ui/Hero.svelte';
	import ScrollIndicator from '$lib/ui/ScrollIndicator.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import SteelTechnique from '$lib/ui/sections/Steel&Technique.svelte';
	import MissionVison from '$lib/ui/sections/MissionVison.svelte';
	import Process from '$lib/ui/sections/Process.svelte';
	import Metrics from '$lib/ui/sections/Metrics.svelte';
	import Fields from '$lib/ui/sections/Fields.svelte';
	import Portfolio from '$lib/ui/sections/Portfolio.svelte';

	let { data } = $props();

	let latestPosts = $derived(data.latestPosts);

	let isMobile = $state(false);

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<div class="relative flex w-screen flex-col">
	<Hero
		poster="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/heros/Hero-Racing-1.webp"
		videoWebM="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/videos/TC-proceso.webm"
		title="Forged for Excellence"
	/>
	<ScrollIndicator />

	<Fields />

	<div class="bg-white">
		<Portfolio />
	</div>

	<div class="bg-black">
		<Process />
	</div>

	<div class="bg-white">
		<Metrics />
	</div>

	<div class="bg-gray-900">
		<SteelTechnique />
	</div>

	<div class="-mt-px bg-gray-400">
		<MissionVison />
	</div>

	<section
		class="flex flex-col items-center justify-center py-12 text-white"
		style="clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);"
	>
		<h2 class="mb-10 text-4xl font-bold text-white">{m.latest_news()}</h2>
		<div class="flex flex-wrap justify-center gap-6">
			{#each latestPosts as post (post.slug)}
				<div class="max-w-md rounded-lg bg-white p-6 shadow-lg">
					{#if post.image}
						<img
							src={post.image}
							alt={post.title}
							class="mb-4 h-48 w-full rounded-lg object-cover"
						/>
					{/if}
					<h3 class="text-2xl font-semibold text-black">{post.title}</h3>
					<p class="text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
					<p class="mt-2 text-gray-800">{post?.body?.slice(0, 150)}...</p>
					<a
						href={localizeHref(`/news/${post.slug}`)}
						class="mt-4 inline-block text-blue-600 hover:underline">{m.read_more()}</a
					>
				</div>
			{/each}
		</div>
		{#if latestPosts.length === 0}
			<p>No posts available yet.</p>
		{/if}
	</section>
</div>
