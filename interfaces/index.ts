export interface DiscordAuthUser {
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
}
export interface AddNewGroupInputData {
  name: string;
  numberOfMembers: number;
  preferredSocialAccount: "Twitter" | "Discord" | string;
}
