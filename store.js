async function registerVolt(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pw = document.getElementById('pw').value;

  // Create user object
  const user = { em: email, pw: pw };

  // Convert to JSON & save as key.vs
  const blob = new Blob([JSON.stringify(user, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "key.vs";
  a.click();
  URL.revokeObjectURL(url);

  document.getElementById('msg').textContent = "✅ Your key.vs has been downloaded. Keep it safe!";

  // ⚠ OPTIONAL: pretend to save to database
  // In real world, you'd use Formspree, Firebase, etc.
  try {
    const db = await fetch('db.json').then(res => res.json());
    console.log("Loaded db.json users:", db.users);
  } catch(e) {
    console.error("Could not load db.json", e);
  }
}
