import { useEffect, useState } from "react";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";

import { api } from "../../../lib/axios";
import { GIT_USER } from "../../../lib/github";

import { PersonalInfoContainer } from "./styles";
import { UserInfo } from "../../../models/UserInfo.interface";

export function PersonalInfo() {
  const [ userInfo, setUserInfo ] = useState<UserInfo>();

  async function fecthUser() {
    const response = await api.get(`users/${GIT_USER}`);
    const user = {
      name: response.data.name,
      followers: response.data.followers,
      username: response.data.login,
      company: response.data.company,
      url: response.data.html_url,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio
    } as UserInfo;
    setUserInfo(user);
  }

  useEffect(() => {
    fecthUser()
  }, [])

  return (
    <PersonalInfoContainer>
      <img src={userInfo?.avatarUrl} alt="" width={148} height={148} />
      <div>
        <header>
          <h1>{userInfo?.name}</h1>
          <a href={userInfo?.url} target="_blank">
            GITHUB <ArrowSquareOut size={16}/>
          </a>
        </header>
        <main>
          <p>{userInfo?.bio}</p>
        </main>
        <footer>
          <span>
            <GithubLogo />
            {userInfo?.username}
          </span>
          <span>
            <Buildings />
           {userInfo?.company ? userInfo.company : '-'}
          </span>
          <span>
            <Users />
            {userInfo?.followers} seguidores
          </span>
        </footer>
      </div>
    </PersonalInfoContainer>
  )
}