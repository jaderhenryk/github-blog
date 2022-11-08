import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { api } from "../../lib/axios";
import { GIT_REPO, GIT_USER } from "../../lib/github";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ArrowSquareOut, Calendar, CaretLeft, ChatCircleText, GithubLogo } from "phosphor-react";
import { ButtonLink, PostDetailCardContainer, PostDetailContainer, PostDetailContent } from "./styles";

import { PostDetail as PostDetailModel } from "../../models/PostDetail.interface";

export function PostDetail() {
  const [ post, setPost ] = useState<PostDetailModel>({} as PostDetailModel);
  const { id } = useParams();

  async function fecthPost() {
    const response = await api.get(`/repos/${GIT_USER}/${GIT_REPO}/issues/${id}`);
    const postInfo = {
      title: response.data.title,
      username: response.data.user.login,
      comments: response.data.comments,
      createdAt: formatDistanceToNow(new Date(response.data.created_at), {
        locale: ptBR,
        addSuffix: true
      }),
      url: response.data.html_url,
      body: response.data.body
    } as PostDetailModel;
    setPost(postInfo);
  }

  useEffect(() => {
    fecthPost();
  }, []);

  return (
    <PostDetailContainer>
      <PostDetailCardContainer>
        <header>
          <ButtonLink to="/" type="button">
            <CaretLeft size={16}/>
            Voltar
          </ButtonLink>
          <a href={post.url} target="_blank">
            ver no github
            <ArrowSquareOut size={16}/>
          </a>
        </header>
        <div>
          <h1>{post.title}</h1>
        </div>
        <footer>
          <span>
            <GithubLogo/>
            {post.username}
          </span>
          <span>
            <Calendar />
            {post.createdAt}
          </span>
          <span>
            <ChatCircleText />
            {post.comments} Comentários
          </span>
        </footer>
      </PostDetailCardContainer>
      <PostDetailContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.body}
          </ReactMarkdown>
        </div>
      </PostDetailContent>
    </PostDetailContainer>
  )
}