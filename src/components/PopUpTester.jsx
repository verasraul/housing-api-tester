import { useParams } from "react-router-dom";


const PopUpTester = (props) => {
//   console.log(props);

  const params = useParams();
  console.log('params=',params)
  // const { image_id } = useParams('');
  // console.log('image_id=', {image_id} )

const getImgUrl = props.gifs.map((item) => {
  // console.log('item=', item)
  if (params.image_id === item.id){
    console.log('paramsID=', params.image_id)
    console.log('item.images=', item.images.downsized_medium.url)
    return (
      item.images.downsized_medium.url
    )
  }
})

console.log(getImgUrl)



  return (
    <div className="post">
      <div className="hero">
        {/* { params.image_id } */}
      {/* {params.gifys.images.downsized_medium.url} */}
      <img src={ getImgUrl } />
          {/* <h1>{matchById()}</h1> */}
      </div>

      {/* <div className="content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div> */}

    </div>
  );
};

export default PopUpTester;