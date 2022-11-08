import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale"
import { Post } from "../../../models/Post.interface";

import { PostCardContainer } from "./styles";

interface PostcardProps {
  post: Post
}

export function PostCard({ post }: PostcardProps) {
  return (
    <PostCardContainer to={`/post-detail/1`}>
      <header>
        <h1>{post.title}</h1>
        <span>
          { formatDistanceToNow(new Date(post.created_at), {
            locale: ptBR,
            addSuffix: true
          }) }
        </span>
      </header>
      <main>
        <p>{post.body}</p>
      </main>
    </PostCardContainer>
  )
}