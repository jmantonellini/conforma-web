<script lang="ts">
	import WhatsappButton from '$lib/assets/icons/whatsapp-logo.png';
	import { fly } from 'svelte/transition';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

{#if scrollY > 50}
	<button
		class="fixed right-10 bottom-10 z-50 flex h-16 w-16 animate-shake cursor-pointer items-center justify-center transition-transform hover:scale-110 focus:outline-none"
		on:click={() =>
			window.open('https://wa.me/5493462308598?text=Hola!%20Tengo%20una%20consulta', '_blank')}
		in:fly={{ x: 300, duration: 500 }}
		out:fly={{ x: 300, duration: 500 }}
	>
		<img src={WhatsappButton} alt="WhatsApp" class="h-full" />
	</button>
{/if}
<div></div>
