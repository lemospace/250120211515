
import './App.scss';
import Manager from './manager/Manager';
import Table from './experience/Table';
import Comments from './comments/Comments';


function App() {
  return (
    <div className='wrapper' >
      <Manager />
      <Table />
      <Comments />
    </div >
  );
}

export default App;
