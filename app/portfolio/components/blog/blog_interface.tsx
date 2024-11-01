export interface PostProps {
  title: string;
  description: string;
  date: string;
  url: string;
  type: string;
}

export interface DisabledPostProps {
  post: PostProps;
}

export interface EnabledPostProps {
  post: PostProps;
}