import "../../src/App.css";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Related from '../components/Related'
import Main from '../components//Main'



const Detail = () => {
  return (
    <div class="detail d-flex overflow-hidden">
        <Sidebar />
      <div class="p-2">
        <Navbar />
        <div className="row row-lg-cols-1 row-md-cols-2 py-3">
            <Main />
            <Related />
        </div>
      </div>
    </div>
  )
}

export default Detail