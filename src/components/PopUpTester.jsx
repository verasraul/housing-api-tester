import { useParams } from "react-router-dom";


const PopUpTester = (props) => {
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
    <div className="post">
      <div className="hero">
      <h1>POP-UP TESTER!!!</h1>
        {/* { image_id.image_id } */}
      {/* {image_id.gifys.images.downsized_medium.url} */}
      { getImgUrl }
      {/* {getImgUrl} */}
          {/* {matchById()} */}
      </div>

      {/* <div className="content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div> */}

    </div>
  );
};

export default PopUpTester;