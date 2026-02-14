export async function onRequest({ env, request }) {
	const url = new URL(request.url);

	const github = new URL('https://github.com/login/oauth/authorize');
	github.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
	github.searchParams.set('redirect_uri', `${url.origin}/api/auth/callback`);
	github.searchParams.set('scope', 'repo');

	return Response.redirect(github.toString(), 302);
}
