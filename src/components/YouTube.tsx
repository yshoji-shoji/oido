type Props = {
  videoId: string;
  title: string;
};

export const YouTube = ({ videoId, title }: Props) => (
  <div className="video">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);
