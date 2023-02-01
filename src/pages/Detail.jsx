import "../../src/App.css";
import Nav from '../components/Nav'
import Related from '../components/Related'
import Main from '../components//Main'



const Detail = () => {
  return (
    <div className="detail p-4">
        <Nav />
        <div className="d-flex px-5 py-3">
            <Main />
            <Related />
        </div>
    </div>
  )
}

export default Detail