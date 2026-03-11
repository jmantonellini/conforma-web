import matter from 'gray-matter';

export const prerender = true;

const modules = import.meta.glob('/content/blog/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
});

export async function load({ params }) {
    const match = Object.entries(modules).find(([path]) => 
        path.endsWith(`${params.slug}.md`)
    );

    if (!match) {
        throw new Error('Post not found');
    }

    const { data, content } = matter(match[1] as string);

    return {
        meta: data,
        content: content
    };
}