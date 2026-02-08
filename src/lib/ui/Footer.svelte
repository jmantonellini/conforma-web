<script lang="ts">
	import Facebook from '$lib/icons/Facebook.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<footer class="py-12 text-gray-300">
	<div class="mx-auto flex max-w-6xl flex-col gap-7 px-4">
		<script type="module">
			import App from 'https://cdn.fouita.com/public/instagram-feed.js?11';

			new App({
				target: document.getElementById('ft-insta-app'),
				props: {
					settings: {
						layout: 'masonry',
						source: 'insta',
						selected: 'uname',
						header: true,
						autoplay: true,
						zigzag: true,
						cols: 4,
						cardHeight: 300,
						gap: 1,
						direction: 'down',
						height: 400,
						bgColor: '',
						txtColor: 'rgb(255 255 255)',
						ukey: 'feccc960-063e-4994-a76a-b082b1f97541'
					}
				}
			});
		</script>

		<div id="ft-insta-app"></div>

		<!-- Main Footer Content -->
		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Company Info -->
			<div>
				<h3 class="mb-2 text-lg font-bold text-white">Conforma Inox SRL</h3>
				<p class="text-sm text-gray-400">{m.slogan()}</p>
			</div>

			<!-- Contact Information -->
			<div>
				<h4 class="mb-4 font-semibold text-white">{m.contact_us()}</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="https://maps.app.goo.gl/6Qnh8m4rAkiJbDhC6" target="_blank"
							>📍 Ismael Iraola 1270, S2600 Venado Tuerto, Santa Fe, Argentina</a
						>
					</li>
					<li>📞 <a href="tel:++543462407049">+54 3462 407049</a></li>
					<li>📧 conforma@conformainox.com.ar</li>
					<li>🕐 Mon-Fri: 8:00 AM - 6:00 PM</li>
				</ul>
			</div>

			<!-- Social Media -->
			<div>
				<h4 class="mb-4 font-semibold text-white">{m.follow_us()}</h4>
				<div class="flex gap-4">
					<a href="https://www.instagram.com/conforma.inox/" target="_blank"
						><Instagram class="transition hover:text-[#ED3239]" /></a
					>
					<a href="https://www.facebook.com/conformainox/" target="_blank"
						><Facebook class="transition hover:text-[#ED3239]" /></a
					>
				</div>
			</div>
		</div>

		<!-- Divider -->
		<hr class="mb-6 border-gray-700" />

		<!-- Bottom Section -->
		<div class="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
			<p>&copy; 2026 Conforma Inox SRL. All rights reserved.</p>
			<div class="mt-4 flex gap-6 md:mt-0">
				<a href="#" class="transition hover:text-white">Privacy Policy</a>
				<a href="#" class="transition hover:text-white">Terms of Service</a>
				<a href="#" class="transition hover:text-white">Sitemap</a>
			</div>
		</div>
	</div>
</footer>
