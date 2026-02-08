<script lang="ts">
	let { logo, name, cover = true } = $props();
</script>

<img
	src={logo}
	alt={name + ' Logo'}
	class="lg:h-24 lg:w-60 w-30 h-12 rounded-2xl bg-gray-800 {cover ? 'object-cover' : 'object-contain p-1 lg:p-4'}"
/>
