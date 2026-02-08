<script>
	import CraftGallery from './CraftGallery.svelte';

	import crafts from '../crafts.json';
</script>

<div class="flex w-screen flex-col items-center gap-6 p-6 py-8 lg:gap-14 lg:py-24">
	<h2 class="text-center text-4xl font-bold lg:text-6xl">Our crafts</h2>
	<div id="separator" class="h-0.5 w-2/3 self-center bg-neutral-100"></div>
	<CraftGallery
		images={crafts.crafts[0].images}
		title={crafts.crafts[0].title}
		subtitle={crafts.crafts[0].subtitle}
		description={crafts.crafts[0].description}
	/>

	<CraftGallery
		images={crafts.crafts[1].images}
		title={crafts.crafts[1].title}
		subtitle={crafts.crafts[1].subtitle}
		description={crafts.crafts[1].description}
		variant
	/>
</div>
