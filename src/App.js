import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import {useTheme} from "./context/ThemeContext";
import MinecraftMenu from "./themes/minecraft/pages/menu-page/MinecraftMenu";
import DeveloperSettings from "./themes/minecraft/pages/developer-settings-page/DeveloperSettings";
import FrontendSettings
    from "./themes/minecraft/pages/developer-settings-page/pages/frontend-settings/FrontendSettings";
import BackendSettings from "./themes/minecraft/pages/developer-settings-page/pages/backend-settings/BackendSettings";
import OtherSettings from "./themes/minecraft/pages/developer-settings-page/pages/other-settings/OtherSettings";
import AboutPage from "./themes/minecraft/pages/about-page/AboutPage";
import Projects from "./themes/minecraft/pages/projects-page/Projects";

//TODO: setup themes logic
//TODO: setup routes

function App() {
    const { currentTheme } = useTheme();

    const routes = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MinecraftMenu />} />
                <Route path="/developer-settings" element={<DeveloperSettings />} />
                <Route path="developer-settings/frontend-settings" element={<FrontendSettings />} />
                <Route path="developer-settings/backend-settings" element={<BackendSettings />} />
                <Route path="developer-settings/other-settings" element={<OtherSettings />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="projects" element={<Projects />} />
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
