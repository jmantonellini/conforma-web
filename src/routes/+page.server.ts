import { loadPosts } from '$lib/posts';

export const prerender = true;

export const load = async () => {
	const posts = await loadPosts();
	const latestPosts = posts.slice(0, 3); // Get the top 3 latest posts
	return { latestPosts };
};
