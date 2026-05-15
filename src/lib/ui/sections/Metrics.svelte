<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	import WorldBackground from '$lib/assets/bg-world.png';
</script>

<section
	class="flex h-screen flex-col text-center items-center justify-center gap-20 bg-gray-900 bg-center p-6 text-white lg:h-[70vh]"
	style="background-image: url({WorldBackground}); clip-path: polygon(0 2rem, 100% 0%, 100% 100%, 0 100%);"
>
	<h2 class="text-6xl font-bold">{m.trusted_around()}</h2>
	<div class="flex p-6">
	<div class="flex flex-col items-center px-6">
			<h3 class="font-bebas text-5xl lg:text-5xl font-bold">20</h3>
			<div class="text-lg text-gray-300">{m.smug_small_falcon_absorb()}</div>
		</div>
		<div class="flex flex-col items-center px-6">
			<h3 class="font-bebas text-5xl lg:text-5xl font-bold">25+</h3>
			<div class="text-lg text-gray-300">{m.ornate_day_hare_dazzle()}</div>
		</div>
		<div class="flex flex-col items-center px-6">
			<h3 class="font-bebas text-5xl lg:text-5xl font-bold">340°</h3>
			<div class="text-lg text-gray-300">{m.keen_spicy_newt_relish()}</div>
		</div>
		
	</div>
</section>
