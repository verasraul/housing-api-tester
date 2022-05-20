import React from 'react';
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const PopUpTester = (props) => {
  //open
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//   console.log(props);

  const {image_id} = useParams();
  console.log('image_id=',image_id)
  // const { image_id } = useParamsId('');
  // console.log('image_id=', {image_id} )

const getImgUrl = props.gifs.map((item) => {
  // console.log('item=', item)
  if (image_id === item.id){
    console.log('paramsIdID=', image_id)
    // console.log('item.images=', item.images.downsized_medium.url)
    return (
      <img src={item.images.downsized_medium.url} />
    )
  }
})

console.log(getImgUrl)



  return (
    <>
 <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        { getImgUrl }
         
        </Box>
      </Modal>
    </div> 
    </>







    
    // <div className="post">
    
    //     <input type="checkbox" id="exit" />
    //   <div className="hero">
    //   <label for='exit'><span class="close">&times;</span></label>
       
     
    //   
      
    //   </div>

     

    // </div>
  );
};

export default PopUpTester;

