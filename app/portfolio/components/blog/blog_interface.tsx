import { MasterProps } from "../interfaces";

export interface PostProps extends MasterProps {
  title: string;
  description: string;
  date: string;
  url: string;
  type: string;
  tags: string[];
}
