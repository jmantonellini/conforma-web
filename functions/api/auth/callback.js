export async function onRequest({ env, request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const tokenRes = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code
      })
    }
  );

  const token = await tokenRes.json();

  return new Response(
    `
    <script>
      window.opener.postMessage(
        'authorization:github:${JSON.stringify(token)}',
        '*'
      );
      window.close();
    </script>
    `,
    { headers: { "Content-Type": "text/html" } }
  );
}
