<script lang="ts">
	import CategoryCard from '$lib/ui/CategoryCard.svelte';
	import { fly } from 'svelte/transition';
	import { cubicBezier } from 'motion';

	import TC2000 from '$lib/assets/categories/TC2000.webp';
	import TC2000Auto from '$lib/assets/categories/Auto-TC2000.webp';
	import FormulaNacional from '$lib/assets/categories/Formula-Nacional-Argentina.webp';
	import FormulaNacionalAuto from '$lib/assets/categories/Auto-Formula-Nacional.webp';
	import TC from '$lib/assets/categories/ACTC.webp';
	import TCAuto from '$lib/assets/categories/Auto-TC.webp';
</script>

<h2
	in:fly={{ y: 50, duration: 500, delay: 400, easing: cubicBezier(0.4, 0, 0.2, 1) }}
	class="text-center text-4xl font-bold lg:text-6xl"
>
	Officially suppling PRO categories
</h2>
<div id="separator" class="h-0.5 w-2/3 bg-neutral"></div>
<p
	in:fly={{ y: 50, duration: 500, delay: 400, easing: cubicBezier(0.4, 0, 0.2, 1) }}
	class="mt-4 text-center text-lg lg:max-w-2/3 lg:text-2xl"
>
	We are proud to be the official stainless steel exhaust systems suppliers for some of the most
	prestigious racing categories in Argentina.
</p>
<ul class="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6">
	<li in:fly={{ y: 50, duration: 500, delay: 800, easing: cubicBezier(0.4, 0, 0.2, 1) }}>
		<CategoryCard website="https://tc2000.com.ar/" logo={TC2000} car={TC2000Auto} name="TC2000" />
	</li>
	<li in:fly={{ y: 50, duration: 500, delay: 900, easing: cubicBezier(0.4, 0, 0.2, 1) }}>
		<CategoryCard
			website="https://formulanacional.com.ar/"
			logo={FormulaNacional}
			car={FormulaNacionalAuto}
			name="Formula Nacional"
		/>
	</li>
	<li in:fly={{ y: 50, duration: 500, delay: 1000, easing: cubicBezier(0.4, 0, 0.2, 1) }}>
		<CategoryCard website="https://actc.org.ar/" logo={TC} car={TCAuto} name="TC" />
	</li>
</ul>
