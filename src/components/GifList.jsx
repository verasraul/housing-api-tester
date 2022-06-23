import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, styled } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import RandomGif  from './GetRandom';
import { options } from '../services/Constants';

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: 'column',
 position: 'absolute',
 justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  textAlign: 'center'
})
const StyledCard = styled(Card)({
  position: 'relative',
  display: 'flex',
  maxheight: '14em',
  border: '2px solid rgba(0, 0, 0, 0.2)',
  margin: '2em 2em',
  width: '300px',
  flexdirection: 'column',
  justifycontent: 'center',
  borderradius: '4px',
  background: '#f8f8f8',
  boxshadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.4s',
  flexbasis: '18em',
  backgroundsize: 'cover',
  color: '#f8f8f8',
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};


export default function GifList(props){
  const navigate = useNavigate();
  //shows the modal
  const [open, setOpen] = useState(false);
  const handleOpen = (tab) => {
    setOpen(true)
    navigate(`/search/${tab.id}`)
  };
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
      <img className='border-4 border-black' src={item.hits.coverPhoto.url} />
    )
  }
})






    return (
      // <div className="inner"> 
      <div className="posts ">
          { props.gifs.map((image) => {
            return (
              <StyledCard  className="border-4 border-amber-500">
                <CardMedia
                  component="img"
                  height="20%"
                  image={image.coverPhoto.url}
                  alt="Paella dish"
                  
                />
                <StyledCardContent>
                <CardActions disableSpacing sx={{display:'flex',justifyContent:"center"}}>
                   <Button className="bg-sky-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" variant="contained"  onClick={() => handleOpen(image)}> info </Button>
                  </CardActions>
                </StyledCardContent>
              </StyledCard>
              )}
              
          )}

<div>
     
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

      </div>
      // </div>
    )
  }

//   <CardActions disableSpacing sx={{display:'flex',justifyContent:"center",}}>
//   <IconButton aria-label="add to favorites">
//   <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />}  />
//   </IconButton>
//   <IconButton aria-label="share">
//     <Share />
//   </IconButton>
 
// </CardActions>