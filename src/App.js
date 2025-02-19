import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import {useTheme} from "./context/ThemeContext";
import MinecraftMenu from "./themes/minecraft/pages/menu-page/MinecraftMenu";

//TODO: setup themes logic
//TODO: setup routes
//TODO: develop minecraft menu landing page

function App() {
    const { currentTheme } = useTheme();

    const routes = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MinecraftMenu />} />
            </>
        )
    )

    return (
        <div className="App">
            <RouterProvider router={routes}/>
        </div>
    );
}

export default App;
