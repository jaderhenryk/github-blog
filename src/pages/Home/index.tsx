import { PersonalInfo } from "./PersonalInfo";
import { PostCard } from "./PostCard";
import { HomeContainer, HomeContent, PostListContainer, SearchContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <PersonalInfo/>
      <HomeContent>
        <SearchContainer>
          <div>
            <span>Posts</span>
            <small>10 posts</small>
          </div>
          <input type="text" placeholder="Search post"/>
        </SearchContainer>
        <PostListContainer>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </PostListContainer>
      </HomeContent>
    </HomeContainer>
  )
}