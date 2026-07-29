

async function test() {
  const response = await fetch("https://live.fapshi.com/initiate-pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apiuser": "starlabs",
      "apikey": "FAK_7e1bdfe5689a5f053aeb2d7f539363a1",
    },
    body: JSON.stringify({
      amount: 25000,
      email: "test@example.com",
      redirectUrl: "https://starlabsposweb.vercel.app",
      message: "Test payment"
    }),
  });
  console.log("Status:", response.status);
  console.log("Response:", await response.text());
}
test();
