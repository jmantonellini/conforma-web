import { loadPosts } from '$lib/posts';

export const prerender = true;

export const load = async () => {
    const posts = await loadPosts();
    return { posts };
};