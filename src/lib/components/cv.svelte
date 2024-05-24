<script lang="ts">
	import type { PersonalInfo, Education, WorkExperience, FurtherEducation } from './cvTypes';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	import { Separator } from '$lib/components/ui/separator';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };

	let personalInfo: PersonalInfo = {
		name: 'Hendrik Margis',
		email: 'hendrik.margis@googlemail.com'
	};

	let education: Education[] = [
		{
			institution: 'Ruhr-Univerity Bochum',
			degree: 'B.S. in Biology',
			date: '2014 - 2019'
		},
		{
			institution: 'Ruhr-Univerity Bochum',
			degree: 'M.S. in Biology',
			date: '2019 - 2023, '
		}
		// Add more education entries as needed
	];

	let workExperience: WorkExperience[] = [
		{
			company: 'Freelance',
			position: 'Math Tutor',
			date: '2013 - Present',
			responsibilities: [
				'Tutored students in algebra, geometry, and calculus',
				'Online lessons, as well as in person'
				// Add more responsibilities as needed
			]
		}
		// Add more work experience entries as needed
	];

	let furtherEducation: FurtherEducation[] = [
		{
			institution: 'HarvardX',
			course: 'CS50: Introduction to Computer Science',
			date: '10/2023 - 12/2023',

			certificate:
				'https://certificates.cs50.io/5defe139-b456-4788-a59e-f5142e7d31e6.pdf?size=letter'
		},
		// Add more further education entries as needed
		{
			institution: 'FreeCodeCamp',
			course: 'Scientific Computing with Python',
			date: '10/2020 - 12/2020',
			certificate:
				'https://www.freecodecamp.org/certification/hendrik_margis/scientific-computing-with-python-v7'
		}
	];

	let skills: string[] = ['Svelte', 'JavaScript', 'HTML', 'CSS', 'Python', 'Git', 'C'];
</script>

<div class={cn('', className)} {...$$restProps}>
	<h1 class="mb-20 text-5xl text-slate-600">Curriculum Vitae</h1>

	<section>
		<h1 class="mb-5 text-3xl text-slate-700">{personalInfo.name}</h1>
		<p>{personalInfo.email}</p>
	</section>

	<Separator class="my-5 bg-slate-400 " />

	<section>
		<h2 class="mb-5 text-3xl text-slate-700">Education</h2>
		{#each education as edu}
			<h3 class="mt-5 text-slate-500">{edu.institution}</h3>
			<p>{edu.degree}</p>
			<p>{edu.date}</p>
		{/each}
	</section>

	<Separator class="my-5 bg-slate-400" />

	<section>
		<h2 class="mb-5 text-3xl text-slate-700">Further Education</h2>
		{#each furtherEducation as furEdu}
			<h3 class="mt-5 text-slate-500">{furEdu.institution}</h3>
			<p class="my-1">{furEdu.course}</p>
			<p class="my-1">{furEdu.date}</p>
			<a class="text-slate-800" href={furEdu.certificate}>Certificate</a>
		{/each}
	</section>

	<Separator class="my-5 bg-slate-400" />

	<section>
		<h2 class="mb-5 text-3xl text-slate-700">Work Experience</h2>
		{#each workExperience as work}
			<h3 class="text-slate-500">{work.company}</h3>
			<p class="my-1">{work.position}</p>
			<p class="my-1">{work.date}</p>
			<ul>
				{#each work.responsibilities as responsibility}
					<li>{responsibility}</li>
				{/each}
			</ul>
		{/each}
	</section>

	<Separator class="my-5 bg-slate-400" />

	<section>
		<h2 class="mb-5 text-3xl text-slate-700">Skills</h2>
		<ul>
			{#each skills as skill}
				<li>{skill}</li>
			{/each}
		</ul>
	</section>

	<Separator class="my-5 bg-slate-400" />
</div>
