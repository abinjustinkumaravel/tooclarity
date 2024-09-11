import Navbar from "./components/navbar.js";
import Lefttext from "./components/lefttextbar.js"
import Social from "./components/socials.js"
import Circle from "./components/circle.js"
import Email from "./components/emailnotify.js"
// import BG from "./Assets/BG.jpg

function App() {
  return (

    <div className="w-screen h-screen overflow-hidden">
    <Navbar/>
    <Circle/>
    <div className="flex items-center justify-between h-screen bg-black bg-gradient-to-r from-black via-[rgba(0,0,128,0.1)] to-black">
    {/* <img src={BG} alt=".." className=" w-full h-full absolute -z-40"></img> */}
    <Lefttext/>
      <div className="text-center items-center sm:w-[50%]">
        <h2 className="text-[20px] lg:text-[25px] m-[20px] text-white tracking-[10px]">World<span className=" text-[25px] text-[rgba(0,0,128)] tracking-[10px]"> Education </span> On One Scale</h2>
        <h1 className="sm:tracking-[50px] justify-center items-center text-center tracking-[20px] font-extrabold md:text-4xl sm:text-[30px] text-[25px] text-white">COMMING SOON</h1>
        <h3 className="sm:tracking-[10px] tracking-[5px] m-[50px] sm:text-1xl text-15px text-white">You're Gonna Like Our Website</h3>
      </div>
     <Social/> 
    </div>

    <Email/>

    </div>
  );
}

export default App;
