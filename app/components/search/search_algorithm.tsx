import { timelines } from "../timeline/timeline_db";
import { projects } from "../projects/projects_db";
import { posts } from "../blog/blog_db";
import { MasterProps } from "../interfaces";

// search function, sort by earlier occurrence of the search query
// Tag mode will only search for tags
export default function searchFunction(query: string) {
  if (!query) {
    return [];
  }

  const combinedData: MasterProps[] = [
    ...timelines.map((item) => ({
      ...item,
      url: `/timeline/${item.url}`,
    })),
    ...projects.map((item) => ({
      ...item,
      url: `/projects/${item.url}`,
    })),
    ...posts.map((item) => ({
      ...item,
      url: `/blog/${item.url}`,
    })),
  ];

  const isTagMode = query.startsWith("#");
  const sanitizedQuery = isTagMode
    ? query.slice(1).toLowerCase()
    : query.toLowerCase();

  const filteredResults = combinedData
    .filter((item) => item.type !== "disabled" && item.type !== "hidden")
    .map((item) => {
      let totalScore = 0;

      // Tag mode, only search for tags
      if (isTagMode) {
        const tagMatchIndex = item.tags?.findIndex((tag) =>
          tag.toLowerCase().startsWith(sanitizedQuery)
        );
        if (tagMatchIndex !== undefined && tagMatchIndex !== -1) {
          totalScore = 1 / (tagMatchIndex + 1);
        }
      } else {
        // Regular search mode, check title, description, tags, and searchtag
        const titleMatchIndex = item.title
          .toLowerCase()
          .indexOf(sanitizedQuery);
        const descriptionMatchIndex = item.description
          .toLowerCase()
          .indexOf(sanitizedQuery);
        const tagMatchIndex = item.tags?.findIndex((tag) =>
          tag.toLowerCase().includes(sanitizedQuery)
        );
        const searchTagMatchIndex = item.searchtag
          ?.toLowerCase()
          .indexOf(sanitizedQuery);

        const titleScore =
          titleMatchIndex !== -1 ? 1 / (titleMatchIndex + 1) : 0;
        const descriptionScore =
          descriptionMatchIndex !== -1 ? 1 / (descriptionMatchIndex + 1) : 0;
        const tagScore =
          tagMatchIndex !== undefined && tagMatchIndex !== -1
            ? 1 / (tagMatchIndex + 1)
            : 0;
        const searchTagScore =
          searchTagMatchIndex !== undefined && searchTagMatchIndex !== -1
            ? 1 / (searchTagMatchIndex + 1)
            : 0;
        // assign different weight to the score :)
        totalScore =
          100 * titleScore +
          50 * descriptionScore +
          5 * tagScore +
          searchTagScore;
      }

      if (totalScore > 0) {
        return { ...item, score: totalScore };
      }
      return null;
    })
    .filter((item) => item !== null)
    .sort((a, b) => {
      if (b === null) return -1;
      if (a === null) return -1;
      return (b.score || 0) - (a.score || 0);
    });

  return filteredResults as MasterProps[];
}
