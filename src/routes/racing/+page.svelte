<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Hero from '$lib/ui/Hero.svelte';
	import { onMount } from 'svelte';
	import { inView } from 'motion';

	import ScrollIndicator from '$lib/ui/ScrollIndicator.svelte';

	import CategoriesOfficial from './sections/CategoriesOfficial.svelte';
	import CategoriesOther from './sections/CategoriesOther.svelte';
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
	videoWebM="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/videos/Yamaha-mobile.webm"
	mobileVideoWebM="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/videos/TC-proceso.webm"
	mobilePoster="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/heros/tc-proceso-poster.webp"
	poster="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/heros/yamaha-poster.webp"
	title={{ sentence: m.racing_title() }}
/>
<ScrollIndicator />

<section id="key-values" class="flex flex-col items-center gap-10 bg-white py-10 lg:py-24">
	<KeyValues />
</section>

<section
	id="categories"
	class="flex flex-col items-center gap-10 bg-linear-to-b from-white to-indigo-100 p-10 text-black lg:p-24"
>
	{#if visible}
		<CategoriesOfficial />
	{/if}
</section>

<section
	id="other-categories"
	class="flex flex-col items-center gap-y-6 bg-linear-to-b from-indigo-100 to-gray-900 py-10 text-black lg:pb-36"
>
	<CategoriesOther />
</section>

<section id="crafts" class="flex min-h-screen w-full flex-col items-center bg-gray-900">
	<Crafts />
</section>
