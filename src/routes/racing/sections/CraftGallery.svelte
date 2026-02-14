<script lang="ts">
	type GalleryImage = {
		src: string;
		alt?: string;
	};

	const {
		title,
		subtitle,
		description = [],
		images,
		variant = false
	} = $props<{
		title: string;
		subtitle?: string;
		description?: string[];
		images: GalleryImage[];
		variant?: boolean;
	}>();

	let activeIndex = $state(0);
	let isZoomed = $state(false);

	const activeImage = $derived(images[activeIndex]);

	function selectImage(index: number) {
		activeIndex = index;
	}

	function onKeyNavigate(event: KeyboardEvent, index: number) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			selectImage(index);
		}
	}
</script>

<section aria-labelledby="gallery-title" class="flex flex-col gap-8 lg:max-w-5xl">
	<div class="grid gap-8 lg:grid-cols-2">
		<!-- LEFT/TOP SECTION -->
		<div class="grid w-full grid-cols-1 gap-4 {variant && 'order-2'}">
			<!-- MAIN IMAGE -->
			<div
				role="img"
				class="group relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100"
				onmouseenter={() => (isZoomed = true)}
				onmouseleave={() => (isZoomed = false)}
			>
					<img
						src={activeImage.src}
						alt={activeImage.alt ?? title}
						class="h-full w-full object-cover transition-transform duration-300
             {isZoomed ? 'scale-110' : 'scale-100'}
             hidden sm:block"
					/>
				<!-- Mobile (no zoom) -->
					<img
						src={activeImage.src}
						alt={activeImage.alt ?? title}
						class="h-full w-full object-cover sm:hidden"
					/>

				<!-- THUMBNAILS -->
			</div>
			{#if images.length > 1}
				<div
					class="flex gap-4 overflow-x-auto pb-2"
					role="tablist"
					aria-label="Image gallery thumbnails"
				>
					{#each images.slice(0, images.length) as image, index}
						<button
							type="button"
							role="tab"
							aria-selected={index === activeIndex}
							aria-label={`View image ${index + 1}`}
							tabindex={index === activeIndex ? 0 : -1}
							onclick={() => selectImage(index)}
							onkeydown={(e) => onKeyNavigate(e, index)}
							class="relative aspect-square h-20 shrink-0 cursor-pointer overflow-hidden rounded-xl border-2
             transition focus-visible:ring-2 focus-visible:ring-black
             focus-visible:outline-none
             {index === activeIndex
								? 'border-white'
								: 'border-transparent opacity-70 hover:opacity-100'}"
						>
							<img loading="lazy" src={image.src} alt={image.alt ?? title} class="h-full w-full object-cover" />
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<!-- TEXT CONTENT -->
		<div class="flex flex-col gap-4 {variant && 'order-1 text-right'}">
			<h3 id="gallery-title" class="text-3xl font-bold">
				{title}
			</h3>

			{#if subtitle}
				<p class="text-lg text-neutral-200">
					{subtitle}
				</p>
			{/if}

			{#each description.slice(0, 2) as paragraph}
				<p class="leading-relaxed text-neutral-300">
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
</section>
