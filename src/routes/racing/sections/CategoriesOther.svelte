<script lang="ts">
	import TCPickUp from '$lib/assets/categories/TCPickUp.webp';
	import TCPickUpPista from '$lib/assets/categories/TCPistaPickUp.webp';
	import TCPM from '$lib/assets/categories/TCPistaMouras.webp';
	import TCM from '$lib/assets/categories/TCMouras.webp';
	import TCPista from '$lib/assets/categories/TCPista.webp';
	import TNApat from '$lib/assets/categories/TN-Apat.webp';
	import TP from '$lib/assets/categories/Turismo-Pista.webp';
	import T4000 from '$lib/assets/categories/T4000.webp';
	import TCPatagonico from '$lib/assets/categories/TCPatagonico.webp';
	import TCR from '$lib/assets/categories/TCR-South-America.webp';
	import TCBonaerense from '$lib/assets/categories/TCBonaerense.webp';
	import CordobaPista from '$lib/assets/categories/CordobaPista.webp';
	import TCSantafesino from '$lib/assets/categories/TCSantafesino.webp';
	import TCMarYSierras from '$lib/assets/categories/TCMarYSierras.webp';
	import ProCar4000 from '$lib/assets/categories/ProCar4000.webp';
	import RallyArgentino from '$lib/assets/categories/RallyArgentino.webp';

	import CategoryCardSmall from '$lib/ui/CategoryCardSmall.svelte';
</script>

<h2 class="text-center text-4xl font-bold lg:mb-10 lg:text-6xl">And even more!</h2>
<div class="relative flex overflow-x-hidden">
	<div class="ml-5 flex w-max shrink-0 animate-marquee gap-5 whitespace-nowrap lg:ml-20 lg:gap-20">
		<CategoryCardSmall logo={TCPickUp} name="TC PickUp" />
		<CategoryCardSmall logo={TCPickUpPista} name="TC PickUp Pista" />
		<CategoryCardSmall logo={TCPM} name="TC PickUp Mouras" />
		<CategoryCardSmall logo={TCM} name="TC Mouras" />
		<CategoryCardSmall logo={TCPista} name="TC Pista" />
		<CategoryCardSmall logo={TNApat} name="Turismo Nacional C2 / C3" />
		<CategoryCardSmall logo={TP} name="Turismo Pista" />
		<CategoryCardSmall logo={T4000} name="Turismo 4000" />
	</div>
	<div
		class="absolute top-0 mr-5 flex w-max shrink-0 animate-marquee2 gap-5 whitespace-nowrap lg:mr-20 lg:gap-20"
	>
		<CategoryCardSmall logo={TCPickUp} name="TC PickUp" />
		<CategoryCardSmall logo={TCPickUpPista} name="TC PickUp Pista" />
		<CategoryCardSmall logo={TCPM} name="TC PickUp Mouras" />
		<CategoryCardSmall logo={TCM} name="TC Mouras" />
		<CategoryCardSmall logo={TCPista} name="TC Pista" />
		<CategoryCardSmall logo={TNApat} name="Turismo Nacional C2 / C3" />
		<CategoryCardSmall logo={TP} name="Turismo Pista" />
		<CategoryCardSmall logo={T4000} name="Turismo 4000" />
	</div>
</div>
<div class="relative flex overflow-x-hidden">
	<div
		class="mr-5 flex w-max shrink-0 animate-marquee-inverted gap-5 whitespace-nowrap lg:mr-20 lg:gap-20"
	>
		<CategoryCardSmall logo={TCR} name="TCR South America" />
		<CategoryCardSmall logo={TCPatagonico} name="TC Patagónico" />
		<CategoryCardSmall logo={TCBonaerense} name="TC Bonaerense" cover={false} />
		<CategoryCardSmall logo={CordobaPista} name="Cordoba Pista" cover={false} />
		<CategoryCardSmall logo={TCSantafesino} name="TC Santafesino" cover={false} />
		<CategoryCardSmall logo={TCMarYSierras} name="Turismo Mar y Sierras" />
		<CategoryCardSmall logo={ProCar4000} name="ProCar 4000" />
		<CategoryCardSmall logo={RallyArgentino} name="Rally Argentino" cover={false} />
	</div>
	<div
		class="absolute top-0 ml-5 flex w-max shrink-0 animate-marquee2-inverted gap-5 whitespace-nowrap lg:ml-20 lg:gap-20"
	>
		<CategoryCardSmall logo={TCR} name="TCR South America" />
		<CategoryCardSmall logo={TCPatagonico} name="TC Patagónico" />
		<CategoryCardSmall logo={TCBonaerense} name="TC Bonaerense" cover={false} />
		<CategoryCardSmall logo={CordobaPista} name="Cordoba Pista" cover={false} />
		<CategoryCardSmall logo={TCSantafesino} name="TC Santafesino" cover={false} />
		<CategoryCardSmall logo={TCMarYSierras} name="Turismo Mar y Sierras" />
		<CategoryCardSmall logo={ProCar4000} name="ProCar 4000" />
		<CategoryCardSmall logo={RallyArgentino} name="Rally Argentino" cover={false} />
	</div>
</div>
