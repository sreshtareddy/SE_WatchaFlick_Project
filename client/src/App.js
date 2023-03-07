import logo from './logo.png';
import './App.css';
import Register from './Register/Register';


function App() {
    return (
        <main className='Main'>
            <div className='register'>
                {/* <img id='logo' src={logo} alt={logo}/>            */}
                <Register></Register>   
            </div>  
        </main> 
    )
}

export default App;
