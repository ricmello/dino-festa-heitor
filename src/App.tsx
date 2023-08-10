import './App.css'
import GuestNameInput from "./components/GuestNameInput.tsx";
import { useAtom } from "jotai/index";
import { currentStepAtom } from "./components/store.ts";
import GuestTypeSelector from "./components/GuestTypeSelector.tsx";
import GuestList from "./components/GuestList.tsx";
import { Steps } from "./helpers/models.ts";
import Welcome from "./components/Welcome.tsx";

function App() {
  const [currentStep] = useAtom(currentStepAtom);

  switch (currentStep) {
    case Steps.WELCOME:
      return <Welcome/>;
    case Steps.GUEST_NAME:
      return <GuestNameInput/>;
    case Steps.GUEST_TYPE:
      return <GuestTypeSelector/>;
    case Steps.GUEST_LIST:
    default:
      return <GuestList/>;
  }
}

export default App
