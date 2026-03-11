<script lang="ts">
	import Hero from "$lib/ui/Hero.svelte";
	import ScrollIndicator from "$lib/ui/ScrollIndicator.svelte";

</script>

<div class="flex w-screen flex-col">
	<Hero
		videoWebM="https://pub-0e65f71de72c4675b566dee8de019eb5.r2.dev/videos/Barandas.webm"
		title={{ sentence: 'Quality and detail in your structures' }}
	/>
	<ScrollIndicator />
</div>
