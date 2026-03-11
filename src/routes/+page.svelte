<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Hero from '$lib/ui/Hero.svelte';
	import ScrollIndicator from '$lib/ui/ScrollIndicator.svelte';
	import WorldBackground from '$lib/assets/bg-world.png';
	import matter from 'gray-matter';
	import { localizeHref } from '$lib/paraglide/runtime';

	let countries = [
		{ code: '🇺🇸', name: 'USA' },
		{ code: '🇨🇦', name: 'CANADA' },
		{ code: '🇧🇷', name: 'BRASIL' },
		{ code: '🇲🇽', name: 'MÉXICO' },
		{ code: '🇭🇰', name: 'HONG KONG' },
		{ code: '🇮🇹', name: 'ITALIA' },
		{ code: '🇪🇸', name: 'ESPAÑA' },
		{ code: '🇩🇪', name: 'ALEMANIA' },
		{ code: '🇬🇧', name: 'INGLATERRA' },
		{ code: '🇨🇱', name: 'CHILE' },
		{ code: '🇦🇺', name: 'AUSTRALIA' }
	];

	let { data } = $props();

	let latestPosts = $derived(data.latestPosts);
</script>

<div class="relative flex w-screen flex-col">
	<Hero
		poster="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/heros/Hero-Racing-1.webp"
		title={{
			sentence: m.landing_title(),
			words: [m.race_cars(), m.industries(), m.buildings()]
		}}
	/>
	<ScrollIndicator />

	<section class="justify-cente flex h-screen flex-col items-center">
		<div class="flex w-full flex-col items-center justify-center gap-4 lg:w-2/3 lg:gap-10">
			<h2 class="text-4xl font-bold lg:text-6xl">25 years of craftsmanship</h2>
			<ul class="flex w-full flex-col gap-4 lg:gap-6">
				<li class="collapse-arrow collapse border border-white">
					<input type="radio" name="my-accordion-2" checked={true} />
					<h3 class="collapse-title text-2xl font-semibold lg:text-4xl">
						Top-quality stainless steel products
					</h3>
					<div class="collapse-content">
						We use only the highest grade stainless steel materials to ensure durability,
						performance, and resistance to corrosion in all our products.
					</div>
				</li>
				<li class="collapse-arrow collapse border border-white">
					<input type="radio" name="my-accordion-2" />
					<h3 class="collapse-title text-2xl font-semibold lg:text-4xl">
						Custom solutions for various industries
					</h3>
					<div class="collapse-content">
						Our expertise spans multiple sectors, including automotive, construction, and industrial
						applications, allowing us to cater to diverse client needs.
					</div>
				</li>
				<li class="collapse-arrow collapse border border-white">
					<input type="radio" name="my-accordion-2" />
					<h3 class="collapse-title text-2xl font-semibold lg:text-4xl">
						Exceptional customer service and support
					</h3>
					<div class="collapse-content">
						We pride ourselves on providing outstanding customer service, ensuring that our clients
						receive the support they need throughout the entire process, from consultation to
						delivery.
					</div>
				</li>
			</ul>
		</div>
	</section>
	<section
		class="flex h-screen flex-col items-center justify-center bg-cover bg-center p-6 text-white lg:h-[70vh]"
		style="background-image: url({WorldBackground});"
	>
		<h2 class="text-4xl font-bold lg:text-6xl">{m.trusted_around()}</h2>
		<p class="mt-2">{m.trusted_around_description()}</p>
		<ul class="flex gap-4">
			{#each countries as country (country.code)}
				<li class="bg-opacity-50 flex items-center gap-2 rounded bg-black px-4 py-2">
					<span class="text-2xl">{country.code}</span>
					<span class="text-lg font-semibold">{country.name}</span>
				</li>
			{/each}
		</ul>
	</section>
	<section
		class="flex h-[125vh] flex-col items-center justify-center bg-linear-to-b from-[#141A27] to-gray-700 text-white"
	>
		<h2 class="text-4xl font-bold">Mission and Values</h2>
	</section>
	<div
		class="sticky top-0 flex h-screen flex-col items-center justify-center bg-linear-to-b from-gray-700 via-gray-200 to-white text-black"
	>
		<h2 class="text-4xl font-bold">Latest news and updates</h2>
		<div class="flex flex-wrap justify-center gap-6">
			{#each latestPosts as post (post.slug)}
				<div class="max-w-md rounded-lg bg-white p-6 shadow-lg">
					{#if post.image}
						<img src={post.image} alt={post.title} class="mb-4 h-48 w-full rounded object-cover" />
					{/if}
					<h3 class="text-2xl font-semibold">{post.title}</h3>
					<p class="text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
					<p class="mt-2 text-gray-800">{post?.body?.slice(0, 150)}...</p>
					<a
						href={localizeHref(`/news/${post.slug}`)}
						class="mt-4 inline-block text-blue-600 hover:underline">Read more</a
					>
				</div>
			{/each}
		</div>
		{#if latestPosts.length === 0}
			<p>No posts available yet.</p>
		{/if}
	</div>
</div>
