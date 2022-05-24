import logo from "./logo.svg";
import "./App.css";
import Counter from "./setState/Counter";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./fragments/FragmentDemo";
import Table from "./fragments/Table";
import PureComp from "./pureComponents/PureComp";
import ParentComp from "./pureComponents/ParentComp";
import RefsDemo from "./refs/RefsDemo";
import FocusInput from "./refs/FocusInput";
import FRParentInput from "./refs/FRParentInput";
import PortalDemo from "./portals/PortalDemo";
import Hero from "./errorBoundary/Hero";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import ClickCounter from "./higherOrderComponents/ClickCounter";
import HoverCounter from "./higherOrderComponents/HoverCounter";
import ComponentC from "./context/ComponentC";
import { UserProvider } from "./context/userContext";
import PostList from "./httpRequest/PostList";
import PostForm from "./httpRequest/PostForm";
import ClassCounter from "./useStateHook/ClassCounter";
import HookCounter from "./useStateHook/HookCounter";
import HookCounterTwo from "./useStateHook/HookCounterTwo";
import HookCounterObject from "./useStateHook/HookCounterObject";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <PureComp></PureComp> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* error boundary */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* error boundary */}
      {/* <ClickCounter/>
    <HoverCounter/> */}
      {/* <UserProvider value="Sakil">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}


      {/* Hooks */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      <HookCounterObject/>
    </div>
  );
}

export default App;
