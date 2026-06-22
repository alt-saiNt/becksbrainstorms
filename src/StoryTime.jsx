import React from 'react';



const StoryTime = () => {

  // The "Viewing Window" - adjust these specific properties if your Vitae box is slightly different

  const windowStyle = {

    backgroundColor: '#1e1e1e', // Matches standard dark mode card backgrounds

    borderRadius: '8px',

    padding: '30px',

    maxWidth: '800px',

    margin: '20px auto', // Centers the box on the page

    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',

    color: '#e0e0e0', // Light gray text for readability

    fontFamily: 'inherit', // Automatically pulls the font used on the rest of your site

  };



  // The Green Title

  const titleStyle = {

    color: '#4ade80', 

    borderBottom: '2px solid #22c55e', // Adds that clean separator line

    paddingBottom: '10px',

    marginBottom: '20px',

    marginTop: '0',

    fontSize: '2rem',

  };



  // Image constraints so it fits perfectly inside the viewing window

  const imageStyle = {

    width: '100%',

    height: 'auto',

    borderRadius: '4px',

    marginBottom: '20px',

  };



  // Standard paragraph styling for the actual story

  const paragraphStyle = {

    lineHeight: '1.6',

    marginBottom: '15px',

    fontSize: '1.05rem',

  };



  return (

    <div style={windowStyle}>

      <h2 style={titleStyle}>The Overture</h2>

      

      {/* Ensure the drone image is in your public folder */}

      <img 

        src="/background.png" 

        alt="Apis Scout Drone Internal Mechanics Schematic" 

        style={imageStyle} 

      />



      <p style={paragraphStyle}>

        The soft hum of the Apis Scout Drone resonated through the dimly lit workshop. 

        Emerald light spilled across the workbench, illuminating the intricate circuit traces 

        and the piezoelectric wing actuators that lay scattered among the tools.

      </p>



      <p style={paragraphStyle}>

        It was a delicate balance of alchemy and engineering. The high-density power core 

        glowed faintly, ready to be integrated into the reinforced chassis.

      </p>

      <p style={paragraphStyle}>

         The world hadn't always been like this. Bleak. Desolate. The guidance

          system that Apis navigated the wasteland with had images that were,

          in the programs original iteration, were meant to be reference

          images for verifying landmarks along a route. Those landmarks that

          Apis could see as an overlay against the usual visual input being

          processed by its forward sensors............
      </p>
    </div>

  );

};



export default StoryTime;
