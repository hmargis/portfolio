<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Button from '$lib/components/ui/button';
</script>

<div class="font-mono text-slate-500 sm:m-20">
	<div class="grid md:m-20 lg:grid-cols-2 xl:grid-cols-3">
		<Card.Root class="aspect-w-1 aspect-h-1 m-10 bg-slate-200 hover:border hover:border-slate-500">
			<Card.Header>
				<Card.Title
					><a href="https://project-nine-ruddy.vercel.app/">Roleplaying Helper</a></Card.Title
				>
				<Card.Description
					>A website that helps you manage a fantasy roleplaying session.
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<a href="https://project-7pevm5hcq-hmargis-projects.vercel.app/">
					<img src="/images/previews/preview_roleplay_helper.png" alt="" /></a
				>
			</Card.Content>
			<Card.Footer>
				<p>Made for cs50x. Made with Svelte and hosted on Vercel</p>
			</Card.Footer>
		</Card.Root>

		<Card.Root class="aspect-w-1 aspect-h-1 m-10 bg-slate-200 hover:border hover:border-slate-500">
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>

		<Card.Root class="aspect-w-1 aspect-h-1 m-10 bg-slate-200 hover:border hover:border-slate-500">
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>

		<Card.Root class="aspect-w-1 aspect-h-1 m-10 bg-slate-200 hover:border hover:border-slate-500">
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
