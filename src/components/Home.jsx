import React from "react";
import RandomGif from "./GetRandom";
import { Constants } from "../services/Constants";


const Home = (props) => {


  return (
    
    <div className="home">
      
      <div>
        <h1 className='text-4xl text-stone-50'>
          Welcome to the Blog
        </h1>
      </div>
      <section className="flip-card">
        <div className="inner">
          <div className="front">
            <img
              src="https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
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