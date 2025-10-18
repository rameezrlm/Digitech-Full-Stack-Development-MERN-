import Alert from "../components/Alert";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Seprator from "../components/Seprator";
import Slider from "../components/Slider";
import { data, admin } from "../data/data";
const Home = () => {
  return (
    <>
     <Navbar />
      <Slider />
      <Seprator content={"Manage Your School, Smarter"} />
      <div className="cards">
        {data.map((item, idx) => (
          <Card
            key={idx}
            url={item.url}
            title={item.title}
            description={item.description}
            
          />
        ))}
      </div>
      <Seprator content={"Administrative & Communcation Tools"} />
      <div className="alerts">
        {admin.map((item,idx) => {
          return (
            <Alert
            key={idx}
              url={item.url}
              title={item.title}
              description={item.description}
              detail={item.detail}
            />
          );
        })}
      </div>
      <Footer />
    </>
  )
}

export default Home