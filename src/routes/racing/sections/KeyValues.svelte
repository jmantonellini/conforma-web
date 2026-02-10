<script lang="ts">
	import Anvil from '$lib/assets/icons/anvil.png';
	import Badge from '$lib/assets/icons/badge.png';
	import Speedometer from '$lib/assets/icons/speedometer.png';
	import Plug from '$lib/assets/icons/plug.png';
	import { fly } from 'svelte/transition';
	import { cubicBezier } from 'motion';
</script>

<h2
	in:fly={{ y: 50, duration: 500, delay: 400, easing: cubicBezier(0.4, 0, 0.2, 1) }}
	class="text-center text-gray-900 text-4xl font-bold lg:text-6xl"
>
	We strive for excellence
</h2>
<div id="separator" class="h-0.5 w-2/3 bg-neutral"></div>
<div class="flex flex-col items-stretch justify-center gap-8 p-4 text-center lg:flex-row lg:py-24">
	<div
		class="flex flex-col items-center gap-6 rounded-xl border-3 border-gray-800 p-6 shadow-2xl lg:w-1/5"
	>
		<img src={Badge} alt="Anvil" class="h-14 w-14 text-gray-800" />
		<h2 class="text-2xl font-bold text-gray-800">Top Steel</h2>
		<p class="max-w-md text-gray-600">
			We use top-quality steel for our crafts, ensuring durability and performance on the track.
		</p>
		<p class="max-w-md text-gray-600">
			Our materials are carefully selected to meet the highest standards of strength and
			reliability.
		</p>
	</div>
	<div
		class="flex flex-col items-center gap-6 rounded-xl border-3 border-gray-800 p-6 shadow-2xl lg:w-1/5"
	>
		<img src={Anvil} alt="Badge" class="h-14 w-14 text-gray-800" />
		<h2 class="text-2xl font-bold text-gray-800">Top Craftsmanship</h2>
		<p class="max-w-md text-gray-600">
			Our skilled craftsmen bring years of experience and passion to every project, each piece is
			meticulously crafted to perfection.
		</p>
		<p class="max-w-md text-gray-600">
			We take pride in our attention to detail and commitment to excellence.
		</p>
	</div>
	<div
		class="flex flex-col items-center gap-6 rounded-xl border-3 border-gray-800 p-6 shadow-2xl lg:w-1/5"
	>
		<img src={Speedometer} alt="Speedometer" class="h-14 w-14 text-gray-800" />
		<h2 class="text-2xl font-bold text-gray-800">Top Performance</h2>
		<p class="max-w-md text-gray-600">
			Our crafts are designed and built to deliver top performance on the track.
		</p>
		<p class="max-w-md text-gray-600">
			We focus on optimizing every aspect of our designs to ensure that our racers can achieve their
			best results.
		</p>
	</div>
	<div
		class="flex flex-col items-center gap-6 rounded-xl border-3 border-gray-800 p-6 shadow-2xl lg:w-1/5"
	>
		<img src={Plug} alt="Speedometer" class="h-14 w-14 text-gray-800" />
		<h2 class="text-2xl font-bold text-gray-800">Plug & Play</h2>
		<p class="max-w-md text-gray-600">
			We designed and implemented a spring-based system that allows for easy installation and
			removal of our exhausts.
		</p>
		<p class="max-w-md text-gray-600">
			This system also aliviates the stress on the pipes, increasing their lifespan and reducing the
			need for frequent replacements.
		</p>
	</div>
</div>
