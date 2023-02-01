import "../../src/App.css";
import Nav from '../components/Nav'
import Related from '../components/Related'
import Main from '../components//Main'



const Detail = () => {
  return (
    <div className="detail py-lg-4 px-lg-5">
        <Nav />
        <div className="d-lg-flex py-3">
            <Main />
            <Related />
        </div>
    </div>
  )
}

export default Detail