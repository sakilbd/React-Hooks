import logo from './logo.svg';
import './App.css';
import Counter from './setState/Counter';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './fragments/FragmentDemo';
import Table from './fragments/Table';
import PureComp from './pureComponents/PureComp';
import ParentComp from './pureComponents/ParentComp';
import RefsDemo from './refs/RefsDemo';


function App() {
  return (
    <div className="App">
     {/* <Counter></Counter> */}
     {/* <LifecycleA></LifecycleA> */}
     {/* <FragmentDemo></FragmentDemo> */}
     {/* <Table></Table> */}
     {/* <PureComp></PureComp> */}
     {/* <ParentComp></ParentComp> */}
     <RefsDemo></RefsDemo>

    </div>
  );
}

export default App;
