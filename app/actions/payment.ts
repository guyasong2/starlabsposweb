"use server";

export async function initiateFapshiPayment(planName: string, amount: number, email?: string) {
  try {
    const apiUser = process.env.FAPSHI_API_USER;
    const apiKey = process.env.FAPSHI_API_KEY;

    if (!apiUser || !apiKey) {
      console.error("[Fapshi] Missing FAPSHI_API_USER or FAPSHI_API_KEY in environment variables.");
      return { success: false, error: "Payment service not configured. Please contact us directly." };
    }

    const payload = {
      amount: amount,
      ...(email && { email }),
      redirectUrl: "https://starlabsposweb.vercel.app",
      message: `Starlabs POS — ${planName} Plan`,
      externalId: `starlabs_${planName.toLowerCase()}_${Date.now()}`,
    };

    console.log("[Fapshi] Initiating payment with payload:", payload);

    const response = await fetch("https://live.fapshi.com/initiate-pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apiuser": apiUser,
        "apikey": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("[Fapshi] Response:", response.status, JSON.stringify(data));

    // Fapshi returns { link: "https://pay.fapshi.com/..." } on success
    if (response.ok && data.link) {
      return { success: true, link: data.link };
    }

    return {
      success: false,
      error: data.message || `Unexpected response: ${JSON.stringify(data)}`,
    };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[Fapshi] Network error:", msg);
    return { success: false, error: msg };
  }
}
