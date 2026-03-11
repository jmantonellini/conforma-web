import { error } from '@sveltejs/kit';
import matter from 'gray-matter';

export const prerender = true;

const modules = import.meta.glob('/src/content/blog/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function entries() {
	return Object.keys(modules).map((path) => {
		const slug = path.split('/').pop()?.replace('.md', '');
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
