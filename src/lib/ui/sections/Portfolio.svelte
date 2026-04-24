<script lang="ts">
	import { onMount } from 'svelte';
	import ResponsiveImage from '../ResponsiveImage.svelte';

	let galleryItems = $state([
		{
			id: 1,
			cat: 'racing',
			title: 'Kawasaki Z550',
			tag: 'Racing Exhaust',
			thumb:
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/kawasaki/kawa-1-thumb.webp',
			urls: [
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/kawasaki/kawa-1.webp'
			],
			alt: 'Kawasaki Z550 with a full race header installed, shown in the engine bay. The header is made of stainless steel and features smooth bends and a polished finish.'
		},
		{
			id: 2,
			cat: 'architecture',
			title: 'Floating Stair Railing · Brushed 316L',
			tag: 'Architecture',
			thumb:
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/architecture/stair_railing-thumb.webp',
			urls: [
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/architecture/stair_railing.webp'
			],
			alt: 'Floating stair railing made of brushed 316L stainless steel. The railing features a minimalist design with clean lines, mounted to the side of a staircase with no visible supports, creating a floating effect. The finish is matte and industrial, complementing the modern architectural style of the space.'
		},
		{
			id: 3,
			cat: 'industry',
			title: 'Piping for Chemical Plant',
			tag: 'Laboratory',
			urls: [
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/industry/Peyte_pipes.webp'
			],
			alt: 'Piping system for a chemical plant, made of 316L stainless steel. The system includes various diameters of pipes, fittings, and flanges, all designed to handle corrosive chemicals and high-pressure fluids. The pipes are arranged in a complex network, demonstrating the precision and expertise required for industrial applications in chemical processing.'
		},
		{
			id: 4,
			cat: 'racing',
			title: 'Collino Mustang',
			tag: 'Exhaust System',
			thumb:
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/collino/collino-2-thumb.webp',
			urls: [
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/collino/collino-2.webp'
			],
			alt: 'Collino Mustang exhaust system, made of stainless steel with a polished finish. The system features two primary tubes that merge smoothly into a single outlet, designed to optimize exhaust flow and improve performance. The polished finish gives the system a sleek and professional appearance, suitable for high-performance racing applications.'
		},
		{
			id: 7,
			cat: 'industry',
			title: 'Mixing tanks · 700L AISI 304',
			tag: 'Industry',
			thumb:
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/industry/mixing_tanks-thumb.webp',
			urls: [
				'https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/crafts/industry/mixing_tanks.webp'
			],
			alt: 'Two 700L mixing tanks made of AISI 304 stainless steel, designed for industrial applications. The tanks feature a cylindrical shape with a conical bottom for efficient mixing and easy discharge of contents. Each tank is equipped with a top-mounted agitator for thorough mixing of liquids, and the polished finish provides corrosion resistance and ease of cleaning, making them suitable for use in food processing, pharmaceuticals, or chemical manufacturing.'
		}
	]);

	const tabs = ['all', 'racing', 'architecture', 'industry'];

	let activeTab = $state('all');

	let filteredItems = $derived(
		activeTab === 'all' ? galleryItems : galleryItems.filter((item) => item.cat === activeTab)
	);

	function switchTab(cat) {
		activeTab = cat;
	}

	let isMobile = $state(false);
	let visibleId = $state<number | null>(null);

	function observeItem(node: HTMLElement, id: number) {
		const obs = new IntersectionObserver(
			([entry]) => {
				if (!isMobile) return;
				if (entry.isIntersecting) visibleId = id;
				else if (visibleId === id) visibleId = null;
			},
			{ threshold: 0.8, rootMargin: '0px 0px -20% 0px' }
		);

		obs.observe(node);
		return { destroy: () => obs.disconnect() };
	}

	onMount(() => {
		isMobile = window.innerWidth < 768;
		console.log('MOBILE', isMobile);
	});
</script>

<section
	class="relative bg-black px-8 pt-28 pb-32 lg:px-16"
	id="works"
	style="clip-path: polygon(0 0, 100% 2rem, 100% 100%, 0 100%);"
>
	<div
		class="mb-4 flex items-center gap-4 text-[0.72rem] tracking-[0.35em] text-red-800 uppercase before:h-px before:w-7.5 before:bg-red-800 before:content-['']"
	>
		Portfolio
	</div>
	<h2 class="mb-6 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[0.02em] text-white">
		OUR WORK
	</h2>

	<div class="mt-16 mb-0 flex justify-between gap-0 border-b border-gray-400 lg:justify-normal">
		{#each tabs as tab (tab)}
			<button
				onclick={() => switchTab(tab)}
				class="cursor-pointer border-b-2 border-transparent bg-transparent py-4 text-[0.8rem] text-gray-400 uppercase transition-all duration-200 lg:px-8 {activeTab ===
				tab
					? 'border-b-2 border-red-800 text-red-800'
					: 'hover:text-white'}">{tab}</button
			>
		{/each}
	</div>

	<div class="columns-1 gap-0.75 bg-black lg:columns-3">
		{#each filteredItems as item (item.id)}
			<div
				use:observeItem={item.id}
				class="group relative cursor-pointer overflow-hidden bg-cover bg-center"
				data-cat={item.cat}
			>
				<!-- Simplified visual representation for gallery items -->
				<div
					class="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-800 to-gray-900 text-4xl transition-transform duration-500 select-none group-hover:scale-105"
				></div>
				<ResponsiveImage src={item?.urls?.[0] || ''} alt={item.alt} />
				<div
					class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/85 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					class:!opacity-100={isMobile && visibleId === item.id}
				>
					<div class="mb-1 text-[0.65rem] tracking-[0.25em] text-red-800 uppercase">
						{item.tag}
					</div>
					<div class=" text-[1.4rem] text-white">
						{item.title}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
