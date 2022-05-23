import logo from './logo.svg';
import './App.css';
import Counter from './setState/Counter';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './fragments/FragmentDemo';
import Table from './fragments/Table';
import PureComp from './pureComponents/PureComp';
import ParentComp from './pureComponents/ParentComp';
import RefsDemo from './refs/RefsDemo';
import FocusInput from './refs/FocusInput';
import FRParentInput from './refs/FRParentInput';
import PortalDemo from './portals/PortalDemo';


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
     <PortalDemo/>

    </div>
  );
}

export default App;
