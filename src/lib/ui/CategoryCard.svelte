<script lang="ts">
	let { logo, car, name, website } = $props();

</script>

<button
	onclick={() => window.open(website, '_blank')}
	class="group relative flex h-60 w-80 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 pt-8 shadow-lg transition duration-300 ease-in-out hover:translate-y-1.25"
>
	<img src={logo} alt={name} class="mx-auto h-20 rounded-xl object-contain" />
	<div class="relative mt-6 h-20">
		<img
			src={car}
			alt={'Auto de ' + name}
			class="absolute bottom-0 left-1/2 w-[120%] max-w-none -translate-x-1/2 translate-y-10 transition-all duration-500 ease-out group-hover:translate-y-2 group-hover:scale-125"
		/>
	</div>
</button>
