// store.js

// Handle register page logic
document.addEventListener('DOMContentLoaded', () => {
  const pinForm = document.getElementById('pinForm');
  if (pinForm) {
    pinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const pinInput = document.getElementById('pinInput').value.trim();
      const msg = document.getElementById('msg');

      if (!pinInput) {
        msg.textContent = "⚠ Please enter a PIN!";
        return;
      }

      // Send PIN to your email using Formspree
      const formData = new FormData();
      formData.append('pin', pinInput);

      try {
        const response = await fetch("https://formspree.io/f/xjkoogln", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if(response.ok){
          // Create and download pin.key file
          const blob = new Blob([pinInput], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "pin.vs";
          a.click();
          URL.revokeObjectURL(url);

          msg.textContent = "✅ Successfully Registered!";
          pinForm.reset();
        } else {
          msg.textContent = "❌ Error!";
        }
      } catch (error) {
        console.error(error);
        msg.textContent = "❌ Network error!";
      }
    });
  }
});

// Handle login page logic
async function login() {
  const fileInput = document.getElementById('keyFile');
  const msg = document.getElementById('msg');

  const file = fileInput.files[0];
  if (!file) {
    msg.textContent = "⚠ Please upload your PIN file!";
    return;
  }

  try {
    const text = await file.text();
    if (text.trim()) {
      msg.textContent = "✅ Login successful! Redirecting...";
      setTimeout(() => window.location.href = "https://v0lt99.github.io/Volt-Site", 2000);
    } else {
      msg.textContent = "❌ Invalid PIN file!";
    }
  } catch (err) {
    console.error(err);
    msg.textContent = "❌ Error reading file!";
  }
}
