<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import imageListCharacters from '../../imageListCharacters.json';
	import imageListBackgrounds from '../../imageListBackgrounds.json';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import * as Button from '$lib/components/ui/button';
	import { ImagePlusIcon } from 'lucide-svelte';

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
</script>

<!-- FILEPATH: /d:/portfolio/src/routes/pixelArt/+page.svelte -->

<!--
This component represents the Pixel Art page. It displays a collection of pixel art characters, with each character represented by a Card component.

Props:
- imageList: An array of image names representing the pixel art characters.

Usage:
<CardList imageList={imageList} />
-->

<div class="m-20 mx-32 font-mono text-slate-700">
	<h1 class="m-5 text-7xl">Pixel Art</h1>
	<p class="mb-20 ml-7 text-xl">
		In February, I wanted to make one pixel art character each day to get some practice. Since I had
		to move at the end of February I did not manage to finish the month. I still wanted to share the
		characters I made so far. I will continue this project in the future. I also made some
		backgrounds just for the fun of it.
	</p>
</div>

<div class="m-10">
	<h1 class="m-10 text-center font-mono text-3xl text-slate-500">Characters</h1>
	<Carousel.Root class=" min-w-xs mx-auto w-full max-w-sm lg:max-w-3xl ">
		<Carousel.Content class="">
			{#each imageListCharacters as picture, index}
				<Carousel.Item class="lg:basis-1/3">
					<Card.Root
						class="flex transform flex-col items-center justify-center bg-slate-200 shadow-sm shadow-slate-400 transition-transform duration-200 hover:scale-110"
					>
						<Card.Header class="font-mono text-slate-600">
							<Card.Title>Day {index + 1}</Card.Title>
						</Card.Header>
						<Card.Content>
							<img src={`/images/characters/${picture}`} style="width:auto;height:128px;" alt="" />
						</Card.Content>
						<Card.Footer class="font-mono text-slate-700">
							<p>{capitalizeFirstLetter(picture.replace('.png', ''))}</p>
						</Card.Footer>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>

<div class="m-10">
	<h1 class="m-10 text-center font-mono text-3xl text-slate-500">Backgrounds</h1>
	<Carousel.Root class=" min-w-xs mx-auto w-full max-w-sm lg:max-w-3xl ">
		<Carousel.Content class="">
			{#each imageListBackgrounds as picture, index}
				<Carousel.Item class=" lg:basis-1/3">
					<Card.Root
						class="flex transform flex-col items-center justify-center bg-slate-200 shadow-sm shadow-slate-400 transition-transform duration-200 hover:scale-110"
					>
						<Card.Header class="font-mono text-slate-600">
							<Card.Title>Day {index + 1}</Card.Title>
						</Card.Header>
						<Card.Content>
							<img src={`/images/backgrounds/${picture}`} style="width:auto;height:128px;" alt="" />
						</Card.Content>
						<Card.Footer class="font-mono text-slate-700">
							<p>{capitalizeFirstLetter(picture.replace('.png', ''))}</p>
						</Card.Footer>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
