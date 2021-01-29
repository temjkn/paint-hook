import Canvas from "./components/Canvas";
import Setting from "./components/Setting";
import Tools from "./components/Tools";
import { SettingState } from "./state/SettingState";

function App() {
    return (
        <>
            <SettingState>
                <Tools/>
                <Setting/>
                <Canvas/>
            </SettingState>
        </>
    );
}

export default App;
