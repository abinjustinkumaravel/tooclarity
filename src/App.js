import Navbar from "./components/navbar.js";
// import Lefttext from "./components/lefttextbar.js"
// import Social from "./components/socials.js"
import Circle from "./components/circle.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// import Email from "./components/emailnotify.js"
// import BG from "./Assets/BG.jpg

function App() {
  return (

    <div className="w-screen h-screen overflow-hidden">
    <Navbar/>
    <Circle/>
    <div className="flex items-center justify-center h-full bg-black bg-gradient-to-r from-black via-[rgba(0,0,128,0.1)] to-black">
    {/* <img src={BG} alt=".." className=" w-full h-full absolute -z-40"></img> */}
    {/* <Lefttext/> */}
      <div className="text-center items-center sm:w-[50%] z-40">
        <h1 className="sm:tracking-[50px] justify-center items-center text-center tracking-[20px] font-extrabold md:text-4xl sm:text-[30px] text-[25px] text-white">COMMING SOON</h1>
        <h3 className="sm:tracking-[10px] tracking-[5px] m-[50px] sm:text-1xl text-15px text-white">World Education On One Scale</h3>

        <label className="text-white" >Lunching...</label>
        <div className="flex justify-center items-center gap-[10px]"> 
        <progress className="w-[200px] h-[10px] rounded-full border-[rgba(0,0,128)] border-[1px] bg-black bg-gradient-to-r from-black via-[rgba(0,0,128,0.1)] to-black" id="file" value="10" max="100"></progress> <p className='text-white text-[15px]'>10 %</p>
        </div>
      </div>
    </div>

    <FontAwesomeIcon color='white' className="w-screen text-[25px] text-[rgba(0,0,128)] animate-bounce justify-center absolute bottom-[100px]" icon={faChevronDown}/>
    <FontAwesomeIcon color='white' className="w-screen text-[25px] text-[rgba(0,0,128)] animate-bounce justify-center absolute bottom-[125px]" icon={faChevronDown}/>
    <FontAwesomeIcon color='white' className="w-screen text-[25px] text-[rgba(0,0,128)] animate-bounce justify-center absolute bottom-[150px]" icon={faChevronDown}/>


    </div>
  );
}

export default App;
