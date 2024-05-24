<script lang="ts">
	import { onMount } from 'svelte';
	import Cv from '$lib/components/cv.svelte';
	let y: number = 0;
	let opacity: number = 0;

	onMount(() => {
		function updateOpacity() {
			const documentHeight = document.body.scrollHeight;
			const viewportHeight = window.innerHeight;
			const scrollableHeight = documentHeight - viewportHeight;
			const scrollPercentage = y / scrollableHeight;
			opacity = Math.min(Math.max(scrollPercentage, 0.05), 1);
		}

		window.addEventListener('scroll', updateOpacity);
		updateOpacity();

		return () => {
			window.removeEventListener('scroll', updateOpacity);
		};
	});
</script>

<div class="m-20 font-mono text-slate-700">
	<h1 class=" text-7xl">Home</h1>

	<div class="mt-10 text-justify font-mono">
		<p>
			Hi there, my name is Hendrik Margis and I am a neurobiologist with an interest in computer
			science. This is my personal website where I want to share my CV and some projects I build.
			This website is build using Svelte and Sveltekit, which I am trying to learn at the moment. I
			am very interested in web developmenet as well as Data Science and Machine Learning. Last year
			I finished my masters in biology. In my free time I love going climbing, hiking and doing
			calithenics.
		</p>
	</div>
</div>

<div style="opacity: {opacity}">
	<Cv
		class="mx-20 mb-20 mt-10  rounded-lg bg-slate-200 p-10 font-mono text-xl text-slate-600 shadow-lg shadow-slate-400"
	/>
</div>

<svelte:window bind:scrollY={y} />
