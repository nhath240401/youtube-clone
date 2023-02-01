import RelatedItem from "./RelatedItem"

import { relatedVideos } from "../data/data"

const Related = () => {
  return (
    <div className='related flex-grow-1 p-3 row row-cols-md-3 row-cols-lg-1'>
      {relatedVideos.map(item => <RelatedItem key={item.id} item={item} />)}
    </div>
  )
}

export default Related