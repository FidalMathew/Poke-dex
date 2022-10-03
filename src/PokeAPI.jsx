import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import Spinner from "./Spinner";
export default function PokeAPI() {
  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");
  const [disName, setdisName] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getData() {

      try {
        let searchQuery = Find.toLowerCase();
        setLoading(true);
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`);
        setImg(res.data.sprites.front_default);
        setType(res.data.types[0].type.name);
        setdisName(Find);
        setLoading(false);

      } catch (error) {
        setLoading(false);
        Swal.fire({
          // icon: 'error',
          title: 'Oops...',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/188/188987.png',
          imageHeight: '100',
          imageWidth: '100',
          text: 'Invalid Pokemon name!',
        })
      }

    }

    getData();
  }, [Find]);

  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name !== "") setFind(name);
    setname("");
  };

  return (
    <>
      <div className="back">
        <div className="card">
          <img src={`${Img}`} alt="" />
          <div className="name">{disName.toUpperCase()}</div>

          <div className="type">{Type}</div>

          <input type="text" onChange={Typename} value={name} />

          {/* <button className="searchBtn" onClick={Search}>Search</button> */}
          <button class="btn btn-round b-level-1 b-type-4" onClick={Search}>Search</button>
        </div>
      </div>

      {loading && <div id="cover-spin"><Spinner /></div>}
    </>
  );
}
