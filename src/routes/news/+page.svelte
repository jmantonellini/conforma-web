<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import type { Post } from '$lib/posts';
	import { m } from '$lib/paraglide/messages';

	const { data }: { data: { posts: Post[] } } = $props();
</script>

<svelte:head>
	<title>{m.sweet_tense_iguana_flip()} - Conforma</title>
</svelte:head>

<div class="mt-10 min-h-screen bg-linear-to-b from-slate-900 to-slate-800 lg:mt-20">
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="mb-12">
			<h1 class="mb-4 text-3xl font-bold text-white sm:text-6xl lg:text-5xl">{m.fit_early_mammoth_pout()}</h1>
			<p class="text-lg text-slate-300 lg:text-xl">{m.knotty_north_leopard_enrich()}</p>
			<div class="mt-6 h-1 w-24 rounded-full bg-blue-500"></div>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post (post.slug)}
				<a
					aria-label={`Read more about ${post.title}`}
					href={localizeHref(`/news/${post.slug}`)}
					class="group overflow-hidden rounded-lg border border-slate-600 bg-slate-700/50 backdrop-blur transition-all duration-300 hover:border-blue-500 hover:bg-slate-600 hover:shadow-xl hover:shadow-blue-500/20"
				>
					{#if post.image}
						<div class="h-48 overflow-hidden bg-slate-800">
							<img
								src={post.image}
								alt={post.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					{/if}

					<div class="p-6">
						<time class="text-sm text-slate-400">
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>

						<h2
							class="mt-3 mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-400"
						>
							{post.title}
						</h2>

						<p class="line-clamp-2 text-slate-300">
							{post.excerpt || m.keen_ago_mallard_dream()}
						</p>
					</div></a
				>
			{/each}
		</div>

		{#if data.posts.length === 0}
			<div class="py-12 text-center">
				<p class="text-xl text-slate-400">{m.patchy_day_goose_nurture()}</p>
			</div>
		{/if}
	</div>
</div>
