export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const includes = searchParams.get("include") || "";

  const userToken = process.env.USER_TOKEN ?? "";
  const userSecretKey = process.env.API_SECRET_KEY ?? "";

  if (!userToken || !userSecretKey) {
    return new Response(
      JSON.stringify({ error: "Token / Secret Key missing" }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${process.env.PUBLIC_API_URL}/catalog/products${includes ? `?include=${includes}` : ""}`,
      {
        method: "GET",
        headers: {
          "User-Token": userToken,
          "User-Secret-Key": userSecretKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Yampi request failed" }), {
        status: response.status,
      });
    }

    const result = await response.json();
    
    return new Response(JSON.stringify(result.data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
    });
  }
}
