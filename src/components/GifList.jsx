import { useNavigate } from 'react-router-dom';
// import RandomGif  from './GetRandom';
import { Constants } from '../services/Constants';

export default function GifList(props){
  const navigate = useNavigate();

  // const image = props.gifs.map((image) => image.images.downsized_medium.url)





    return (
      // <div className="inner"> 
      <div className="posts">
          { props.gifs.map((image) => {
            return (
              <div className="item">
                <img src={image.images.downsized_medium.url} />
                  <div className="modal">
                   <button onClick={() => navigate(`/search/${image.id}`)}><label for='exit'>  info </label></button>
                  </div>
              </div>
              )}
          )}
      </div>
      // </div>
    )
  }