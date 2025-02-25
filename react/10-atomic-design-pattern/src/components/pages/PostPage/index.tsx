import { useFetch } from "../../../hooks/useFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PostPage() {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          {data.map((post) => (
            <div key={post.id} style={{ padding: "10px" }}>
              {post.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
