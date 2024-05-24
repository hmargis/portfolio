<script>
	import { page } from '$app/stores';
	import '../app.pcss';
</script>

<nav class="sticky top-0 z-50 rounded-md bg-slate-50 shadow-sm">
	<ul class="flex flex-col border font-mono text-3xl text-slate-500 md:flex-row lg:text-5xl">
		<li class="m-5 ml-20 md:m-10">
			<a href="/" class={$page.route.id == '/' ? 'text-slate-900' : ''}>Home</a>
		</li>
		<li class="m-5 ml-20 md:m-10">
			<a href="/pixelArt" class={$page.route.id == '/pixelArt' ? 'text-slate-900' : ''}>Pixel Art</a
			>
		</li>
		<li class="m-5 ml-20 md:m-10">
			<a href="/portfolio" class={$page.route.id == '/portfolio' ? 'text-slate-900' : ''}
				>Portfolio</a
			>
		</li>
	</ul>
</nav>

<slot />
