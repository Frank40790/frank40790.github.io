import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ReactNode } from "react";
import Debug from "./components/debug";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Debug />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
