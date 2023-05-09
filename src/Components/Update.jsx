import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const chocolate = useLoaderData();
  const { _id, name, country, category, photo } = chocolate;

  const handleUpdateChocolate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const updateChocolate = {
      name,
      country,
      category,
      photo,
    };
    console.log(updateChocolate);

    // send data to the server
    fetch(`http://localhost:5000/chocolate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Chocolate Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-orange-100 mt-5 p-24">
        <h2 className="text-3xl font-extrabold">Update Chocolate:</h2>
        <form onSubmit={handleUpdateChocolate}>
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
                  defaultValue={name}
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
                  defaultValue={country}
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
                  defaultValue={category}
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
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update"
            className="btn btn-block bg-orange-800"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
