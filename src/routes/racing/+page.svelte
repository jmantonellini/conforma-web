<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Hero from '$lib/ui/Hero.svelte';
	import { onMount } from 'svelte';
	import { inView } from 'motion';

	import ScrollIndicator from '$lib/ui/ScrollIndicator.svelte';

	import CategoriesOfficial from './sections/CategoriesOfficial.svelte';
	import CategoriesOther from './sections/CategoriesOther.svelte';
	import Comparisson from './sections/Comparisson.svelte';
	import Crafts from './sections/Crafts.svelte';
	import KeyValues from './sections/KeyValues.svelte';

	let visible = $state(false);

	onMount(() => {
		const box = document.getElementById('categories') as HTMLElement;
		inView(
			box,
			() => {
				visible = true;
				console.log('VISIBLE', visible);
			},
			{ amount: 0.4 }
		);
	});
</script>

<Hero
	videoWebM={'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/videos/Yamaha-mobile.webm'}
	title={{ sentence: m.racing_title() }}
/>
<ScrollIndicator />

<section id="key-values" class="bg-white">
	<KeyValues />
</section>

<section
	id="categories"
	class="flex flex-col items-center gap-10 bg-linear-to-b from-blue-200 to-indigo-100 p-10 text-black lg:p-36"
>
	{#if visible}
		<CategoriesOfficial />
	{/if}
</section>

<section
	id="other-categories"
	class="flex flex-col items-center gap-y-6 bg-linear-to-b from-indigo-100 to-white py-10 text-black lg:pb-36"
>
	<CategoriesOther />
</section>

<section id="crafts" class="flex min-h-screen w-full flex-col items-center bg-gray-900">
	<Crafts />
</section>

<section
	id="comparison"
	style="background-image: url('https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/backgrounds/welding-bg.webp'); background-size: cover; background-position: left;"
>
	<div class="relative flex h-screen flex-col items-center gap-10 p-4 backdrop-blur-sm lg:p-16">
		<Comparisson />
	</div>
</section>
