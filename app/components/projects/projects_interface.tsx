import { MasterProps } from "@/app/components/interfaces";

export interface ProjectsProps extends MasterProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  type: string;
  tags: string[];
  searchtag: string;
}
