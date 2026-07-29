"use server";

export async function initiateFapshiPayment(planName: string, amount: number) {
  const apiKey = process.env.FAPSHI_API_KEY;

  if (!apiKey) {
    console.error("[Fapshi] Missing FAPSHI_API_KEY in environment variables.");
    return { success: false, error: "Payment service not configured." };
  }

  try {
    // Per Fapshi docs: both apiuser and apikey headers use the same API Key value
    const response = await fetch("https://live.fapshi.com/initiate-pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apiuser": apiKey,
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
    console.log("[Fapshi] Status:", response.status, "Body:", JSON.stringify(data));

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
