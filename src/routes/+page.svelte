<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Hero from '$lib/ui/Hero.svelte';
	import ScrollIndicator from '$lib/ui/ScrollIndicator.svelte';
</script>

<div class="relative flex w-screen flex-col">
	<Hero
		title={{
			sentence: m.landing_title(),
			words: [m.race_cars(), m.industries(), m.buildings()]
		}}
	/>
	<ScrollIndicator />

	<section
		class="sticky top-0 flex h-screen flex-col items-center justify-center bg-linear-to-b from-red-900 to-red-300 text-white"
	>
		<div class="flex w-full flex-col items-center justify-center gap-4 lg:w-2/3 lg:gap-10">
			<h2 class="text-4xl font-bold lg:text-6xl">{m.makes_us_different()}</h2>
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
					<h3 class="collapse-title text-2xl  font-semibold lg:text-4xl">
						Custom solutions for various industries
					</h3>
					<div class="collapse-content">
						Our expertise spans multiple sectors, including automotive, construction, and
						industrial applications, allowing us to cater to diverse client needs.
					</div>
				</li>
				<li class="collapse-arrow collapse border border-white">
					<input type="radio" name="my-accordion-2" />
					<h3 class="collapse-title text-2xl  font-semibold lg:text-4xl">
						Exceptional customer service and support
					</h3>
					<div class="collapse-content">
						We pride ourselves on providing outstanding customer service, ensuring that our
						clients receive the support they need throughout the entire process, from
						consultation to delivery.
					</div>
				</li>
			</ul>
		</div>
	</section>
	<section
		class="sticky top-0 flex h-screen flex-col items-center justify-center bg-linear-to-b from-[#141A27] to-gray-700"
	>
		<h2 class="text-4xl font-bold lg:text-6xl">{m.trusted_around()}</h2>
		<p class="mt-2">{m.trusted_around_description()}</p>
		<ul class="">
			<li class="mt-4">🇺🇸 USA</li>
			<li class="mt-2">🇨🇦 CANADA</li>
			<li class="mt-2">🇧🇷 BRASIL</li>
			<li class="mt-2">🇲🇽 MÉXICO</li>
			<li class="mt-2">🇭🇰 HONG KONG</li>
			<li class="mt-2">🇮🇹 ITALIA</li>
			<li class="mt-2">🇪🇸 ESPAÑA</li>
			<li class="mt-2">🇩🇪 ALEMANIA</li>
			<li class="mt-2">🇬🇧 INGLATERRA</li>
			<li class="mt-2">🇨🇱 CHILE</li>
			<li class="mt-2">🇦🇺 AUSTRALIA</li>
		</ul>
	</section>
	<section
		class="sticky top-0 flex h-[125vh] flex-col items-center justify-center bg-linear-to-b from-[#141A27] to-gray-700 text-white"
	>
		<h2 class="text-4xl font-bold lg:text-6xl">25 years of craftsmanship</h2>
		<h3 class="mt-4 text-2xl font-bold lg:text-4xl">From Argentina to the World</h3>
		<p class="mt-2">
			We have been delivering top-notch stainless steel solutions for over two decades, ensuring
			quality and reliability in every project we undertake.
		</p>
	</section>
	<div
		class="sticky top-0 flex h-screen flex-col items-center justify-center bg-linear-to-b from-blue-200 to-indigo-100 text-black"
	>
		<h2 class="text-4xl font-bold">The Fourth slide</h2>
	</div>
</div>
