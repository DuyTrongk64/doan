import {BrowserRouter, Route,Routes} from 'react-router-dom'

import Home from './pages/Home'
import Following from './pages/Following'
function App() {
  
  return (
    <div className="App">
      <div className='Body'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/following" element={<Following />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
