import { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Post from "./components/Post";

import "./App.css";

const urlBaseServer = "http://localhost:3002";
axios.defaults.baseURL = urlBaseServer;

const App = () => {
  const [titulo, setTitulo] = useState("");
  const [img, setImgSrc] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const {data: posts} = await axios.get(urlBaseServer + "/api/posts/");
    const arrayOrdenado =  [...posts.result]
    const ordenanitoitoito = arrayOrdenado.slice().sort((a, b) => a.id - b.id);
    setPosts(ordenanitoitoito);
  };

  const agregarPost = async () => {
    const post = { titulo, img, descripcion, likes:0 };
    await axios.post("api/posts", post);
    getPosts();
    limpiaInputs();
  };

  const like = async (id, likes) => {
    const i = {likes: likes + 1};
    await axios.put(`/api/posts/likes/${id}`,i);
    getPosts();
  };

  const eliminarPost = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    getPosts();
  };

  const limpiaInputs = async () => {
    const inpuTitulo = document.getElementById("inputTitulo")
    inpuTitulo.value = "";
    const inputUrlImagen = document.getElementById("inputUrlImagen")
    inputUrlImagen.value = "";
    const inputParrafo = document.getElementById("inputParrafo")
    inputParrafo.value = "";
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
      
        <div className="col-12 col-sm-3 d-flex justify-content-center">
          <Form
            setTitulo={setTitulo}
            setImgSrc={setImgSrc}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>

        <div className="col-12 col-sm-9 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post key={i} post={post} like={like} eliminarPost={eliminarPost} />
            // <Post key={i} post={post} eliminarPost={eliminarPost} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default App;
