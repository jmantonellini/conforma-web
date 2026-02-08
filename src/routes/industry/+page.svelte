<script lang="ts">
	import Hero from '$lib/ui/Hero.svelte';
	import ScrollIndicator from '$lib/ui/ScrollIndicator.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let isMobile = writable(false);

	onMount(() => {
		isMobile.set(window.innerWidth < 768);
		window.addEventListener('resize', () => {
			isMobile.set(window.innerWidth < 768);
		});
	});
</script>

<div class="flex w-screen flex-col">
	{#if $isMobile}
		<Hero
			video={'https://media.sssinstagram.com/get?__sig=qPsYcPqYsBhqQdv3IeDr1g&__expires=1768623640&uri=https%3A%2F%2Fscontent-lga3-2.cdninstagram.com%2Fo1%2Fv%2Ft2%2Ff2%2Fm86%2FAQNk2qL3pLWFvJGNn-Az6h_o1vkrZh2-b1mHmqwq7wGJsrbM5D5T7He8cp5Pbrs36h3JXvB2ZL3Lu1NKzSWJZaRU-RREHFweGbVUuUE.mp4%3F_nc_cat%3D109%26_nc_sid%3D5e9851%26_nc_ht%3Dscontent-lga3-2.cdninstagram.com%26_nc_ohc%3D3ftNZODwPYsQ7kNvwHHfkeh%26efg%3DeyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTI1MDU5ODExNjgyMzIxNSwiYXNzZXRfYWdlX2RheXMiOjEwNiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjIyLCJ1cmxnZW5fc291cmNlIjoid3d3In0%253D%26ccb%3D17-1%26_nc_gid%3D3YW8yRgJ8WAvSBgX0QRzbQ%26_nc_zt%3D28%26vs%3Dcdbffad5035cd320%26_nc_vs%3DHBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9COTQ2MTA3NjVGOEFGNDVCMjExODg4RjYzNjkyMzJCQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYRmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xNTU1ODExMjQyNDU1ODY3Xzk1Mjk4OTg3OTE0MjM5MDA1NS5tcDQVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm3sKUiLLauAQVAigCQzMsF0A2GuFHrhR7GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA%26oh%3D00_AfozAqo1Q_8f0R16b8loAoECnCX1ibTD-AHSgLZdXRwo9w%26oe%3D696CDC8E%26dl%3D1&filename=Creamos%20y%20fabricamos%20doce%20cestos%20de%20basura%20en%20acero%20inoxidable%2C%20con%20un%20particular%20dise%C3%B1o%20a%20pedid.mp4&ua=-&referer=https%3A%2F%2Fwww.instagram.com%2F'}
		/>
	{:else}
		<Hero
			image={'https://media.sssinstagram.com/get?__sig=1Xz1gPQY5KX1j1v3IeDr1g&__expires=1768623640&uri=https%3A%2F%2Fscontent-lga3-2.cdninstagram.com%2Fo1%2Fv%2Ft51.2885-15%2Fe35%2F322324646_847509053622145_0736544862637065256_n.jpg%3F_nc_cat%3D109%26_nc_sid%3D8ae9d6%26_nc_ht%3Dscontent-lga3-2.cdninstagram.com%26_nc_ohc%3D6Y7kXoXJXbMAX8rT6Ih%26edm%3DAP_V10EAAAA%26ccb%3D17-1%26ig_cache_key%3DMjkyMjA0NzA4NjI0NjI0MjM0NQ%3D%3D.2-ccb17-1%26oh%3D00_AfC4YJH6qDKoOZxXHc1Y6kYl8bJH9mXG3cXcXoXoZ8kR7g%26oe%3D696D8F4C%26dl%3D1&filename=Creamos%20y%20fabricamos%20doce%20cestos%20de%20basura%20en%20acero%20inoxidable%2C%20con%20un%20particular%20dise%C3%B1o%20a%20pedid.jpg&ua=-&referer=https%3A%2F%2Fwww.instagram.com%2F'}
		/>
	{/if}
	<ScrollIndicator />
</div>
