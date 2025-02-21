export const VideoPlayer = ({ videoUrl }) => {
  return (
    <video className="w-full h-full rounded-lg object-cover" controls autoPlay loop>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
