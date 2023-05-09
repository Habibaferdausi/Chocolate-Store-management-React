import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBackwardStep,
  faBackwardFast,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const handleAddChocolate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newChocolate = {
      name,
      country,
      category,
      photo,
    };
    console.log(newChocolate);

    fetch("http://localhost:5000/chocolate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Chocolate Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="mt-5">
        <Link to="/">
          <button className="text-start ms-4  border p-3 rounded hover:bg-orange-800 hover:text-white flex justify-between items-center text-xl">
            <FontAwesomeIcon icon={faBackwardFast} className="me-2" /> All
            Chocolates{" "}
          </button>
        </Link>
      </div>

      <div className="bg-orange-100 mt-5 p-24">
        <h2 className="text-3xl font-extrabold">Add Chocolate:</h2>
        <form onSubmit={handleAddChocolate}>
          {/* form name and quantity row */}
          <div className=" mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Chocolate Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Chocolate Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 mt-5  ">
              <label className="label">
                <span className="label-text text-lg font-medium">Country</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-medium">Category</span>
              </label>
              <div className="input-group">
                <select
                  className="select w-full select-bordered"
                  name="category"
                >
                  <option>Premium</option>
                  <option>Regular</option>
                </select>
              </div>
            </div>
          </div>

          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Save"
            className="btn btn-block bg-orange-800"
          />
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
