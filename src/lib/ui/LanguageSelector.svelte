<script lang="ts">
	import { locales, getLocale, type Locale, setLocale } from '$lib/paraglide/runtime';

	function switchToLanguage(newLanguage: Locale) {
		setLocale(newLanguage);
	}

	const labels = {
		es: 'ES',
		en: 'EN',
		pt: 'PT',
		it: 'IT',
	};
</script>

<div class="dropdown h-fit">
	<button tabindex="0" type="button" class="btn btn-ghost btn-md" aria-expanded="false">
		{labels[getLocale()]}
	</button>
	<ul class="dropdown-content rounded items-center z-1 mt-2 bg-gray-900/80 shadow-2xl">
		{#each locales as langTag}
			{#if langTag !== getLocale()}
				<li>
					<button
						on:click={() => switchToLanguage(langTag)}
						class="btn btn-ghost w-full text-center justify-center"
						name="themed-dropdown"
						disabled={langTag === getLocale()}
					>
						{labels[langTag]}
					</button>
				</li>
			{/if}
		{/each}
	</ul>
</div>
