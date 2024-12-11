interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLSpanElement>,
    tag: string
  ) => {
    event.preventDefault();
    // alert(tag);
  };

  return (
    <div className="event-tags mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="tag bg-purple-400 bg-opacity-25 text-purple-500 text-opacity-60 py-1 px-3 rounded-full text-sm font-bold cursor-pointer hover:bg-purple-500 hover:bg-opacity-40 transition-all duration-300"
          onClick={(event) => handleClick(event, tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}