import matter from 'gray-matter';
import { error } from '@sveltejs/kit';

const modules = import.meta.glob('/src/content/blog/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function entries() {
	return Object.keys(modules).map((path) => {
		const file = path.split('/').pop()!;
		const slug = file.slice(0, -3); // remove ".md"
		return { slug };
	});
}

export async function load({ params }) {
	const match = Object.entries(modules).find(([path]) => path.endsWith(`${params.slug}.md`));

	if (!match) {
		throw error(404, 'Post not found');
	}

	const { data, content } = matter(match[1] as string);

	return {
		meta: data,
		content
	};
}
