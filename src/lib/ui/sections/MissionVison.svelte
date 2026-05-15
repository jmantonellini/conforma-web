<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<section
	class="relative bg-white px-8 py-28 lg:px-16"
	id="mission"
	style="clip-path: polygon(0 2rem, 100% 0%, 100% 100%, 0 100%);"
>
	<div
		class="mb-4 flex items-center gap-4 text-[0.72rem] tracking-[0.35em] text-red-800 uppercase before:h-px before:w-7.5 before:bg-red-800 before:content-['']"
	>
		{m.jumpy_bad_reindeer_twirl()}
	</div>
	<h2
		class="mb-6 font-['Bebas_Neue',sans-serif] text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[0.02em] text-black"
	>
		{m.zany_mushy_crocodile_thrive()} &amp;<br />{m.giant_merry_thrush_value()}
	</h2>

	<div class="mt-16 grid grid-rows-2 gap-24 lg:grid-cols-2 lg:grid-rows-1">
		<div class="relative overflow-hidden border border-gray-400 p-6 lg:p-12">
			<div class="absolute top-0 right-0 left-0 h-0.5 bg-red-800"></div>
			<div class="mb-8 text-xs tracking-[0.3em] text-red-800 uppercase">
				{m.lower_alive_bee_dance()}
			</div>
			<p class="text-xl leading-relaxed font-light tracking-[0.02em] text-gray-800">
				{m.north_mild_liger_fry()}
				<strong class="font-semibold text-red-800">{m.bald_civil_thrush_pout()}</strong>
				— {m.empty_lucky_firefox_find()}
			</p>
		</div>
		<div class="relative overflow-hidden border border-gray-400 p-6 lg:p-12">
			<div class="absolute top-0 right-0 left-0 h-0.5 bg-red-800"></div>
			<div class="mb-8 text-xs tracking-[0.3em] text-red-800 uppercase">Our Vision</div>
			<p class="text-xl leading-relaxed font-light tracking-[0.02em] text-gray-800">
				{m.white_fit_loris_explore()} <strong class="font-semibold text-red-800"
					>{m.male_lofty_nuthatch_exhale()}</strong
				> — {m.suave_dark_kestrel_slurp()}
			</p>
		</div>
	</div>

	<div class="mt-16 grid grid-rows-2 gap-8 lg:grid-cols-2 lg:grid-rows-1">
		<div
			class="border-l-2 border-red-700 pl-6 transition-colors duration-200 hover:border-l-red-800"
		>
			<div class="mb-2 text-base font-semibold tracking-[0.15em] text-red-800 uppercase">
				{m.whole_cozy_samuel_trust()}
			</div>
			<p class="text-[0.88rem] leading-relaxed text-gray-800">
				{m.mad_trite_myna_aid()}
			</p>
		</div>
		<div
			class="border-l-2 border-red-700 pl-6 transition-colors duration-200 hover:border-l-red-800"
		>
			<div class="mb-2 text-base font-semibold tracking-[0.15em] text-red-800 uppercase">
				{m.gaudy_east_beaver_tickle()}
			</div>
			<p class="text-[0.88rem] leading-relaxed text-gray-800">
				{m.dull_dark_chipmunk_hurl()}
			</p>
		</div>
		<div
			class="border-l-2 border-red-700 pl-6 transition-colors duration-200 hover:border-l-red-800"
		>
			<div class="mb-2 text-base font-semibold tracking-[0.15em] text-red-800 uppercase">
				{m.clear_fancy_lemur_roar()}
			</div>
			<p class="text-[0.88rem] leading-relaxed text-gray-800">
				{m.extra_watery_gecko_quiz()}
			</p>
		</div>
		<div
			class="border-l-2 border-red-700 pl-6 transition-colors duration-200 hover:border-l-red-800"
		>
			<div class="mb-2 text-base font-semibold tracking-[0.15em] text-red-800 uppercase">
				{m.loved_this_mongoose_aim()}
			</div>
			<p class="text-[0.88rem] leading-relaxed text-gray-800">
				{m.factual_these_shrimp_soar()}
			</p>
		</div>
	</div>
</section>
