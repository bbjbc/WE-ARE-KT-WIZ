interface PlayerDetailInfoProps {
  title: string;
  content: string;
}

const PlayerDetailInfo: React.FC<PlayerDetailInfoProps> = ({
  title,
  content,
}) => {
  return (
    <article className="mb-2 flex flex-col">
      <h1 className="text-sm font-semibold text-gray-900">{title}</h1>
      <p className="text-xs text-gray-600">{content}</p>
    </article>
  );
};

export default PlayerDetailInfo;
