import "./App.css";
import BaiTapChonKinh from "./BaiTapChonKinh/BaiTapChonKinh";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import BaiTapRenderFilms from "./BaiTapRenderFilms/BaiTapRenderFilms";
import Home from "./components/Excercises/Home";
import HandleEvent from "./HandleEventComponent/HandleEvent";
import RenderingCondition from "./RenderingCondition/RenderingCondition";
import StateDemo from "./State/StateDemo";
import Styling from "./Styling/Styling";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <HandleEvent /> */}
      {/* <RenderingCondition /> */}
      {/* <StateDemo /> */}
      {/* <Styling /> */}
      {/* <BaiTapChonXe /> */}
      {/* <BaiTapRenderFilms /> */}
      <BaiTapChonKinh />
    </div>
  );
}

export default App;
