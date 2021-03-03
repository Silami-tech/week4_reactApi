import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar_artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
            </div>
                    
            <div class="konten-artikel">
                <div className="judul-artikel">Article Title</div>
                <p className="isi-artikel">Filling Article</p>
            </div>
        </div>
    )
}
export default Post;
