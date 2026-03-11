import matter from 'gray-matter';

export type Post = {
    title: string;
    date: string;
    image?: string;
    excerpt?: string;
    slug: string;
    body?: string;
};

export const loadPosts = async (): Promise<Post[]> => {
    const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' });

    const posts = await Promise.all(
        Object.entries(modules).map(async ([path, loader]) => {
            const content = await loader();
            const { data, content: body } = matter(content);
            return {
                slug: path.split('/').pop()?.replace('.md', ''),
                ...data,
                body
            } as Post;
        })
    );

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
};