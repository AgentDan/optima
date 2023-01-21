import './App.css'
import MainPage from "./pages/MainPage"
import {Route, Routes} from "react-router-dom"
import SinglePage from "./pages/SinglePage";
import Render3d from "./Render3d";
import Render3d_new from "./Render3d_new";

function App() {
    return (
        <div>
            <Routes>
                <Route path ="/" element={<MainPage/>}/>
                {/*<Route path ="/" element={<Render3d_new/>}/>*/}
                {/*<Route path ="/" element={<Render3d/>}/>*/}
                {/*<Render3d/>*/}
                <Route path ="/single/:id" element={<SinglePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
