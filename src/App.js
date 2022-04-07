import React, { useState, useEffect } from "react";
import "./App.css";
import Recipie from "./Recipie";

function App() {
  const APP_ID = "91efd4ad";
  const APP_KEY = "e2352d5a2ba551266075b4161eb5f862";
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState("chicken");

  //request the api only when there is a change on search element.
  useEffect(() => {
    getRecipies();
  }, [item]);

  //get allthe recipies
  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${item}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
    //console.log(data.hits);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //to prevent default refreshing of the form.
    setItem(search);
    setSearch("");
    document.getElementById("searchbar").reset();
  };

  return (
    <div className="App">
      <form className="search__form" onSubmit={submitHandler} id="searchbar">
        <input type="text" onChange={searchHandler} className="search__bar" />
        <button className="search__button" type="submit">
          search
        </button>
      </form>
      <div className="recipe">
        {recipies.map((recipie) => (
          <Recipie
            key={recipie.recipe.label}
            title={recipie.recipe.label}
            image={recipie.recipe.image}
            calories={recipie.recipe.calories}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

//https://api.edamam.com/search?q=chicken&app_id=91efd4ad&app_key=e2352d5a2ba551266075b4161eb5f862
