import React, { Component } from 'react'
import'./BlogPost.css';
import Post from './Post';

class BlogPost extends Component {
    state = {
        listArtikel: []
    }

    componentDidMount(){
        fetch( 'https://jsonplaceholder.typicode.com/posts') 
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState( {
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }
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
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul = {artikel.title} isi = {artikel.body}/>
                    })
                }
                {/* <Post judul="JTI Polinema" isi=" Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
            </div>
        )
    }
}

export default BlogPost;
