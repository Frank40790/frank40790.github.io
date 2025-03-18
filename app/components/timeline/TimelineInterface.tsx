import { MasterProps } from "@/app/components/Interfaces";

export interface TimelineProps extends MasterProps {
  title: string;
  description: string;
  date: string;
  url: string;
  icon: string;
  type: string;
  tags: string[];
  searchtag: string;
}
