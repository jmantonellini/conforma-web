<script lang="ts">
	let slideID = $state(1);

	const handleSlideChange = (e: Event) => {
		e.preventDefault();
		slideID = slideID === 1 ? 2 : 1;
		const carousel = document.querySelector('.carousel') as HTMLElement;
		const slide = document.getElementById(`slide${slideID}`) as HTMLElement;
		if (carousel && slide) {
			slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
		}
	};
</script>

<h2 class="text-center text-3xl font-bold lg:text-5xl">Before | After</h2>
<p class="mt-4 text-center text-lg lg:max-w-2/3 lg:text-2xl">
	Check the <i>Conforma Effect</i> with this side to side comparisson
</p>
<div class="relative flex h-3/5 w-full items-center justify-center lg:h-full lg:gap-4">
	<a href="#slide2" onclick={(e) => handleSlideChange(e)} class="btn btn-circle btn-secondary">❮</a>
	<div class="carousel h-full carousel-center rounded-2xl border-2 border-gray-300 bg-white">
		<div id="slide1" class="relative carousel-item w-full">
			<figure class="diff h-full min-h-auto w-[80vw] lg:w-100" tabindex="-1">
				<div class="diff-item-1" role="img" tabindex="-1">
					<img alt="daisy" src="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/escape-1-viejo.webp" />
				</div>
				<div class="diff-item-2" role="img">
					<img alt="daisy" src="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/escape-1-nuevo.webp" />
				</div>
				<div class="diff-resizer"></div>
			</figure>
		</div>
		<div id="slide2" class="relative carousel-item h-full w-full">
			<figure class="diff h-full min-h-auto" tabindex="-1">
				<div class="diff-item-1" role="img" tabindex="-1">
					<img alt="daisy" src="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/escape-2-viejo.webp" />
				</div>
				<div class="diff-item-2" role="img">
					<img alt="daisy" src="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/images/escape-2-nuevo.webp" />
				</div>
				<div class="diff-resizer bg-white"></div>
			</figure>
		</div>
	</div>
	<a href="#slide1" onclick={(e) => handleSlideChange(e)} class="btn btn-circle btn-secondary">❯</a>
</div>
