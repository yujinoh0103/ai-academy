import { useParams } from "react-router";
import { useFetch } from "../../../hooks/useFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PostItemPage() {
  let params = useParams();

  const { data, loading, error } = useFetch<Post[]>(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return (
    <div>
      {JSON.stringify(params)}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
