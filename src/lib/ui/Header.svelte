<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import LanguageSelector from './LanguageSelector.svelte';
	import Logo from '$lib/assets/Logo.png';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';

	let visible = $state(false);
	let mobileMenuOpen = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 300);
	});
</script>

{#if visible}
	<header
		class="fixed z-10 w-full bg-gray-900/80"
		in:fly={{ y: -100, duration: 500, easing: quintOut }}
	>
		<div class="flex items-center justify-between px-6 py-4 lg:px-10">
			<!-- Logo -->
			<div class="flex-1 overflow-visible">
				<a href="/">
					<img
						src={Logo}
						alt="Conforma Inox Logo"
						class="text-mask-shine h-10 w-auto transition hover:scale-110"
					/>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden flex-1 justify-center gap-2 lg:flex">
				<a
					href={localizeHref('/racing')}
					class="px-4 py-2 text-lg font-bold text-white uppercase transition
				 hover:scale-110 hover:text-red-600"
					in:fly={{ x: 50, duration: 1000, delay: 300, easing: quintOut }}
				>
					{m.racing()}
				</a>
				<a
					href={localizeHref('/industry')}
					class="px-4 py-2 text-lg font-bold text-white uppercase transition hover:scale-110 hover:text-red-600"
					in:fly={{ x: 50, duration: 1000, delay: 300 + 1 * 50, easing: quintOut }}
				>
					{m.industry()}
				</a>
				<a
					href={localizeHref('/architecture')}
					class="px-4 py-2 text-lg font-bold text-white uppercase transition hover:scale-110 hover:text-red-600"
					in:fly={{ x: 50, duration: 1000, delay: 300 + 2 * 50, easing: quintOut }}
				>
					{m.architecture()}
				</a>
			</div>

			<!-- Right side buttons -->
			<div class="hidden flex-1 justify-end gap-3 lg:flex">
				<LanguageSelector />
				<button
					class="cursor-pointer border-2 border-white px-4 py-2 text-sm font-medium text-white uppercase transition hover:border-red-600 hover:text-red-600"
					in:fly={{ x: 100, duration: 400, delay: 1000, easing: quintOut }}
				>
					{m.pricing()}
				</button>
			</div>
			<div class="flex lg:hidden">
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="cursor-pointer text-white transition hover:text-red-600"
					aria-label="Toggle mobile menu"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Hamburger Menu -->

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div
				class="bg-gray-800 px-6 py-4 lg:hidden"
				in:fly={{ y: -20, duration: 300, easing: quintOut }}
			>
				<nav class="flex flex-col gap-4">
					<a
						href={localizeHref('/racing')}
						class="block text-lg font-bold text-white uppercase transition hover:text-red-600"
						onclick={() => (mobileMenuOpen = false)}
					>
						{m.racing()}
					</a>
					<a
						href={localizeHref('/industry')}
						class="block text-lg font-bold text-white uppercase transition hover:text-red-600"
						onclick={() => (mobileMenuOpen = false)}
					>
						{m.industry()}
					</a>
					<a
						href={localizeHref('/architecture')}
						class="block text-lg font-bold text-white uppercase transition hover:text-red-600"
						onclick={() => (mobileMenuOpen = false)}
					>
						{m.architecture()}
					</a>
					<div class="flex items-center justify-between border-t border-gray-700 pt-4">
						<LanguageSelector />
						<button
							class="w-full border-2 border-white px-4 py-2 text-sm font-medium text-white uppercase transition hover:border-red-600 hover:text-red-600"
						>
							Get Pricing
						</button>
					</div>
				</nav>
			</div>
		{/if}
	</header>
{/if}
