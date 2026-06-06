async function delay() {
  return new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );
}

export default async function DashboardPage() {
  await delay();

  return <h1>Dashboard</h1>;
}