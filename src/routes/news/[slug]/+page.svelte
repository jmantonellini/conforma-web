<script lang="ts">
	const { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - News</title>
</svelte:head>

<div class="min-h-screen bg-linear-to-b from-slate-900 to-slate-800 mt-10 lg:mt-20">
	<div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
		<a
			href="/news"
			class="mb-8 inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
		>
			<span class="mr-2">←</span>
			Back to News
		</a>

		<div class="mb-8">
			<time class="text-sm text-slate-400">
				{new Date(data.meta.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>

			<h1 class="mt-4 mb-4 text-4xl font-bold text-white sm:text-5xl">
				{data.meta.title}
			</h1>

			{#if data.meta.tags}
				<div class="mt-6 flex flex-wrap gap-2">
					{#each data.meta.tags as tag}
						<span
							class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
						>
							{tag}
						</span>
					{/each}
				</div>
			{/if}
		</div>

		{#if data.meta.image}
			<div class="mb-8 overflow-hidden rounded-lg">
				<img src={data.meta.image} alt={data.meta.title} class="h-96 w-full object-cover" />
			</div>
		{/if}

		<article
			class="prose max-w-none prose-invert [&_a]:text-blue-400 [&_a]:hover:text-blue-300 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:text-slate-300 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-slate-700 [&_code]:px-2 [&_code]:py-1 [&_code]:text-blue-300 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-100 [&_li]:mb-2 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-slate-300 [&_strong]:text-white [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:text-slate-300"
		>
			{@html data.content}
		</article>
	</div>
</div>
