


export default function SearchGifs(props){ 



return (
    <div className="search-section">
        <div>
            <label htmlFor="search-gif">Search Gif: </label>
            <br></br>
            <br></br>
            <input type="text" value={props.value} onChange={props.onChange} id="search-pane-input" placeholder="Search for Gifs"/>

            {/* <br></br>
            <button onClick={props.onClick} class="search-bt" id="search-pane-button">Search</button> */}
        </div>

    </div>

);
}

 



