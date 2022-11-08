import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { GIT_USER, GIT_REPO } from "../..//lib/github";

import { Post } from "../../models/Post.interface";

import { PersonalInfo } from "./PersonalInfo";
import { PostCard } from "./PostCard";
import { HomeContainer, HomeContent, PostListContainer, SearchContainer } from "./styles";

export function Home() {
  const [ posts, setPosts ] = useState<Post[]>([]);
  const [ postsCount, setPostCount ] = useState(0);
  const [ query, setQuery ] = useState('');

  async function fecthPosts(q = '') {
    const response = await api.get(`search/issues?q=${q}%20repo:${GIT_USER}/${GIT_REPO}`)
    setPosts(response.data.items);
    setPostCount(response.data.total_count);
  }

  useEffect(() => {
    if (query.length > 0) {
      const data = setTimeout(() => {
        fecthPosts(query);
      }, 900)
      return () => clearTimeout(data);
    } else {
      fecthPosts();
    }
  }, [query]);

  return (
    <HomeContainer>
      <PersonalInfo/>
      <HomeContent>
        <SearchContainer>
          <div>
            <span>Posts</span>
            <small>{postsCount} posts</small>
          </div>
          <input type="text" placeholder="Search post" onChange={event => setQuery(event.target.value)}/>
        </SearchContainer>
        <PostListContainer>
        {
          posts && posts.map(post => (
            <PostCard 
              key={`${post.title}-${post.number}`}
              post={post}
            />
          ))
        }
        </PostListContainer>
      </HomeContent>
    </HomeContainer>
  )
}