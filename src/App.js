import Navbar from "./components/navbar.js";
import Circle from "./components/circle.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
    <Navbar/>
    <Circle/>
    <div className="flex items-center justify-center h-full bg-black bg-gradient-to-r from-black via-[rgba(0,0,128,0.1)] to-black">
      <div className="text-center items-center  z-40">
        <h1 className="sm:tracking-[50px] justify-center m-[50px] items-center text-center tracking-[20px] font-extrabold md:text-4xl sm:text-[30px] text-[25px] text-white">COMMING SOON</h1>
        <h3 className="sm:tracking-[10px] tracking-[5px] m-[50px] sm:text-1xl text-15px text-white">World Education on One Scale</h3>
        <label className="text-white" >Lunching...</label>
        <div className="flex justify-center items-center gap-[10px]"> 
        <progress className="w-[200px] h-[10px] rounded-full border-[rgba(0,0,128)] border-[1px] bg-black bg-gradient-to-r from-black via-[rgba(0,0,128,0.1)] to-black" id="file" value="2" max="100"></progress> <p className='text-white text-[10px]'>0.001 %</p>
        </div>
      </div>
    </div>
    <FontAwesomeIcon color='white' className="w-screen text-[25px] text-white animate-bounce justify-center absolute bottom-[100px]" icon={faChevronDown}/>
    <FontAwesomeIcon color='white' className="w-screen text-[25px] text-white animate-bounce justify-center absolute bottom-[115px]" icon={faChevronDown}/>
    <FontAwesomeIcon color='white' className="w-screen text-[25px] text-white animate-bounce justify-center absolute bottom-[130px]" icon={faChevronDown}/>
    </div>
  );
}

export default App;
