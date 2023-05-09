import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Chocolate = ({ chocolate, chocolates, setChocolates }) => {
  const { _id, name, country, category, photo } = chocolate;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolate/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = chocolates.filter((cho) => cho._id !== _id);
              setChocolates(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="flex justify-around p-4  text-lg font-semibold items-center bg-orange-300 mt-5 mb-3">
        <div>
          <h2>Photo</h2>
        </div>
        <div>
          <h2>Name</h2>
        </div>
        <div>
          <h2>Country</h2>
        </div>
        <div>
          <h2>Category</h2>
        </div>
        <div>
          <h2>Action</h2>
        </div>
      </div>

      <div className="flex justify-around text-lg font-semibold items-center">
        <div>{photo}</div>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <h2>{country}</h2>
        </div>
        <div>
          <h2>{category}</h2>
        </div>
        <div>
          {" "}
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-accent me-3"
          >
            X
          </button>
          <Link className="btn btn-primary" to={`update/${_id}`}>
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};

export default Chocolate;
