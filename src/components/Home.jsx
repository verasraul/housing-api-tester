import React from "react";
import RandomGif from "./GetRandom";
import { Constants } from "../services/Constants";




const Home = (props) => {


  return (
    <div className="home" style={{
      position: 'fixed', 
      top:'0',
      right:'0',
      left:'0',
      bottom:'0',
      overflow: 'auto',  
      flexDirection: 'row',
      backgroundImage:' url("https://i.postimg.cc/j56V0DYm/Rectangle-Back-Ground.webp")',
      backgroundSize:'cover'
    }}>
     
      
      <div>
        <h1 className='text-4xl text-stone-50'>
          Welcome to HomeSeeker
        </h1>
      </div>
      <section className="flip-card">
        <div className="inner">
          <div className="front">
            <img
              src="https://i.postimg.cc/sX5Mk4Xz/house-Icon.webp"
              // src="https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
              alt="You got this"
            />
          </div>
          <div className="back">
              {/* <img src={RandomGif} /> */}
              <RandomGif />
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Home;