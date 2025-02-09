async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{JSON.stringify(data)}</main>;
}
