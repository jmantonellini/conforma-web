<script lang="ts">
	export type Title = {
		sentence: string;
		words?: string[];
	};

	let { title }: { title: Title } = $props();
</script>

<span class="w-full text-5xl lg:text-8xl">
	<h1
		class="text-mask-shine text-center lg:text-start font-bold tracking-tight text-white italic drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] text-shadow-lg"
	>
		{title.sentence}
		{#if title.words}
			<span class="text-rotate text-red-600 italic duration-6000">
				<span>
					{#each title.words as word}
						<span class="px-2 text-shadow-lg">{word}</span>
					{/each}
				</span>
			</span>
		{/if}
	</h1>
</span>
