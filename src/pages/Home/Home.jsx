import './home.css'
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"
import Central from "../../components/Central/Central"
import Rightbar from "../../components/Rightbar/Rightbar"
function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar/>
        <Central/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home
