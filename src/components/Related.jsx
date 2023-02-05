import RelatedItem from "./RelatedItem"

import { relatedVideos } from "../data/data"

const Related = () => {
  return (
    <div className="col">
      <div className='related flex-grow-1 p-3 row row-cols-lg-1'>
      {relatedVideos.map(item => <RelatedItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default Related