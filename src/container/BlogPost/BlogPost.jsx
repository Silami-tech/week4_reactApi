import React, { Component } from 'react'
import'./BlogPost.css';
import Post from './Post';

class BlogPost extends Component {
    render() {
        return (
            // <div class="post-artikel">
            //     <h2>Submission Aricle</h2>
            //     <div class="artikel">
            //         <div class="gambar-artikel">
            //             <img src="http://placeimg.com/80/80/tech" alt="Gambar, Tumbnail Artikel"/>
            //         </div>
            //         <div class="konten-artikel">
            //             <div className="judul-artikel">Article Title</div>
            //             <p className="isi-artikel">Filling Article</p>
            //         </div>
            //     </div>
            // </div>
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post/>
            </div>
        )
    }
}

export default BlogPost;
