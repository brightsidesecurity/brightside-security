const FORMSPREE_URL = "https://formspree.io/f/xvkkrebo";

// Sends the quote request to Formspree and maps its reply to { status, error }.
function submit(data) {
  return fetch(FORMSPREE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      ...data,
      _subject: `[Quote Request] New Quote Request from ${data.name || "Website Lead"}`
    })
  })
    .then(r => r.json().catch(() => ({})).then(body => ({ ok: r.ok, body })))
    .then(({ ok, body }) => {
      if (ok) return { status: "success" };
      const error =
        (body.errors && body.errors.map(e => e.message).join(", ")) ||
        body.error ||
        "Submission failed";
      return { status: "error", error };
    });
}

export default { submit };
