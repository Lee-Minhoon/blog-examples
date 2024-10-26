const fetchRandom = async () => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
};

export default async function ServerComponent() {
  await fetchRandom();

  console.log("Server Component mounted");

  return <div>Server Component</div>;
}
