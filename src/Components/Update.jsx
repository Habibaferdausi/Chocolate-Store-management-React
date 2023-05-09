import React from "react";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
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
        <form>
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

export default Update;
