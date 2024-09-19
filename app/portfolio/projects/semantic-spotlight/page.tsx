import {
  LeftPicRightText,
  RightPicLeftText,
  FullText,
  FullTextHeaders,
  Banner,
  IconList,
} from "../../components/page_block";

export default function Event() {
  return (
    <>
      <Banner textComponent="Semantic Spotlight" />
      <FullTextHeaders headers="Journey"
      textComponent={
        <>
        <div></div>
        </>
      } />
    </>
  );
}
