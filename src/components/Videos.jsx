import videos from "../data/data"
import VideoItem from "./VideoItem"


const Videos = () => {
  return (  
    <div className="mb-5 p-lg-3 mt-3 row row-cols-lg-4 row-cols-md-2 row-cols-1">
        {videos.map(item => <VideoItem key={item.id} item={item} />)}
    </div>
  )
}

export default Videos