<script lang="ts">
	import Anvil from '$lib/assets/icons/anvil.png';
	import Badge from '$lib/assets/icons/badge.png';
	import Speedometer from '$lib/assets/icons/speedometer.png';
</script>

<div class="flex flex-col items-center justify-center gap-12 p-4 py-36 text-center lg:flex-row">
	<div class="flex h-full flex-col items-center gap-6 rounded border-3 border-gray-800 p-10 lg:w-1/4">
		<img src={Badge} alt="Anvil" class="h-24 w-24 text-gray-800" />
		<h2 class="text-2xl font-bold text-gray-800">Top Steel</h2>
		<p class="max-w-md text-gray-600">
			We use top-quality steel for our crafts, ensuring durability and performance on the track.
		</p>
		<p class="max-w-md text-gray-600">
			Our materials are carefully selected to meet the highest standards of strength and
			reliability.
		</p>
	</div>
	<div class="flex h-full flex-col items-center gap-6 rounded border-3 border-gray-800 p-10 lg:w-1/4">
		<img src={Anvil} alt="Badge" class="h-24 w-24 text-gray-800" />
		<h2 class="text-2xl font-bold text-gray-800">Top Craftsmanship</h2>
		<p class="max-w-md text-gray-600">
			Our skilled craftsmen bring years of experience and passion to every project, ensuring that
			each piece is meticulously crafted to perfection.
		</p>
		<p class="max-w-md text-gray-600">
			We take pride in our attention to detail and commitment to excellence.
		</p>
	</div>
	<div class="flex h-full flex-col items-center gap-6 rounded border-3 border-gray-800 p-10 lg:w-1/4">
		<img src={Speedometer} alt="Speedometer" class="h-24 w-24 text-gray-800" />
		<h2 class="text-2xl font-bold text-gray-800">Top Performance</h2>
		<p class="max-w-md text-gray-600">
			Our crafts are designed and built to deliver top performance on the track.
		</p>
		<p class="max-w-md text-gray-600">
			We focus on optimizing every aspect of our designs to ensure that our racers can achieve their
			best results.
		</p>
	</div>
</div>
