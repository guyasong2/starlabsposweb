"use server";

export async function initiateFapshiPayment(planName: string, amount: number) {
  // Strip surrounding quotes that Vercel CLI sometimes adds to env vars
  const apiKey = process.env.FAPSHI_API_KEY?.replace(/^"|"$/g, "");
  const apiUser = process.env.FAPSHI_API_USER?.replace(/^"|"$/g, "");

  if (!apiKey || !apiUser) {
    console.error("[Fapshi] Missing credentials. apiKey:", !!apiKey, "apiUser:", !!apiUser);
    return { success: false, error: "Payment service not configured. Please contact us." };
  }

  try {
    const response = await fetch("https://live.fapshi.com/initiate-pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apiuser": apiUser,
        "apikey": apiKey,
      },
      body: JSON.stringify({
        amount: amount,
        redirectUrl: "https://starlabsposweb.vercel.app",
        message: `Starlabs POS — ${planName} Plan`,
        externalId: `starlabs-${planName.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      }),
    });

    const data = await response.json();
    console.log("[Fapshi] Status:", response.status, "| Body:", JSON.stringify(data));

    if (response.ok && data.link) {
      return { success: true, link: data.link };
    }

    return {
      success: false,
      error: data.message || `Unexpected Fapshi response (${response.status})`,
    };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[Fapshi] Network error:", msg);
    return { success: false, error: msg };
  }
}
