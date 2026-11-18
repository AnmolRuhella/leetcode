async function loadDashboard() {
  console.log("Dashboard loading...");

  const user = await fetchUser();
  const stats = await fetchStats();

  console.log("User:", user);
  console.log("Stats:", stats);

  console.log("Dashboard ready");
}

function fetchUser() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Sharma"), 1000)
  );
}

function fetchStats() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("100 messages"), 1000)
  );
}

loadDashboard();
console.log("App started");
