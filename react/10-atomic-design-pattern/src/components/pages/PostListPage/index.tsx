import { useFetch } from "../../../hooks/useFetch";
import { NavLink, Link } from "react-router";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PostListPage() {
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
              <Link to={`/app/post/${post.id}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
