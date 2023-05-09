import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { GiChocolateBar } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import Chocolate from "./Chocolate";

const Home = () => {
  const loadedChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadedChocolates);

  return (
    <div>
      <div className="mt-8 text-start ">
        <Link to="/addChocolate">
          <button className="text-start ms-4  border p-3 rounded hover:bg-orange-800 hover:text-white flex justify-between items-center text-xl">
            <FontAwesomeIcon icon={faAdd} className="me-2" /> New Chocolate{" "}
            <GiChocolateBar className="text-orange-800  ms-2  " />
          </button>
        </Link>
      </div>

      <div>
        <h1>Available chocolate: {chocolates.length}</h1>
        {chocolates.map((chocolate) => (
          <Chocolate
            key={chocolate._id}
            chocolate={chocolate}
            chocolates={chocolates}
            setChocolates={setChocolates}
          ></Chocolate>
        ))}
      </div>
    </div>
  );
};

export default Home;
