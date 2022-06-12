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
import UserContext, { UserProvider } from "./context/userContext";
import PostList from "./httpRequest/PostList";
import PostForm from "./httpRequest/PostForm";
import ClassCounter from "./useStateHook/ClassCounter";
import HookCounter from "./useStateHook/HookCounter";
import HookCounterTwo from "./useStateHook/HookCounterTwo";
import HookCounterObject from "./useStateHook/HookCounterObject";
import HookCounterArray from "./useStateHook/HookCounterArray";
import ClassCounterOne from "./useEffect/ClassCounterOne";
import HookCounterOne from "./useEffect/HookCounterOne";
import HookMouse from "./useEffect/HookMouse";
import MouseContainer from "./useEffect/MouseContainer";
import IntervalHookCounter from "./useEffect/IntervalHookCounter";
import DataFetching from "./useEffect/dataFetching/DataFetching";
import ComponentD from "./useContextHook/ComponentD";
import React, { useReducer } from "react";
import CounterOne from "./useReducer/CounterOne";
import CounterTwo from "./useReducer/CounterTwo";
import CounterThree from "./useReducer/CounterThree";
import ComponentX from "./useReducer/ReducerComponenets/ComponentX";
import ComponentY from "./useReducer/ReducerComponenets/ComponentY";
import ComponentZ from "./useReducer/ReducerComponenets/ComponentZ";
import DataFetchingOne from "./useReducer/DataFetching/DataFetchingOne";
import DataFetchingTwo from "./useReducer/DataFetching/DataFetchingTwo";

export const SakilContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider value={{ countState:count,countDispatch:dispatch }}>
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
        {/* <HookCounterObject/> */}
        {/* <HookCounterArray/> */}
        {/* <HookCounter/> */}
        {/* <HookCounterOne/> */}
        {/* <ClassCounterOne/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalHookCounter/> */}
        {/* <DataFetching/> */}
        {/* <SakilContext.Provider value={'Sakil'}>
        <ChannelContext.Provider value={'Md Sakiluzzaman'}>
            <ComponentD/>
         </ChannelContext.Provider>
      </SakilContext.Provider> */}
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}



        {/* Count - {count}
        <ComponentX />
        <ComponentY />
        <ComponentZ /> */}


        {/* <DataFetchingOne/> */}
        <DataFetchingTwo/>
      </div>
    //</CountContext.Provider>
  );
}

export default App;
