export default async function Home() {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between">
        API_URL is not defined.
      </div>
    );
  }
  const res = await fetch(apiUrl,{cache: "no-store"});
  const data = await res.text();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      {data}
    </div>
  );
}
