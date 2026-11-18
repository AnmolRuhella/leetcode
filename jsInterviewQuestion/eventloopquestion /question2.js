function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Rahul"), 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("10 posts"), 2000);
  });
}

async function loadData() {
  console.log("Start");

  const [user, posts] = await Promise.all([
    getUser(),
    getPosts()
  ]);

  console.log(user);
  console.log(posts);
  console.log("Done");
}

loadData();

console.log("App running");