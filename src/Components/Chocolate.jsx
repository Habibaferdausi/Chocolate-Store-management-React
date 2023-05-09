import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faEdit,
  faDeleteLeft,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex justify-around text-lg font-semibold items-center">
        <div>
          {" "}
          <img src={photo} alt="" className="h-20 w-20" />
        </div>
        <div>
          <h2 className="ms-2">{name}</h2>
        </div>
        <div>
          <h2>{country}</h2>
        </div>
        <div>
          <h2>{category}</h2>
        </div>
        <div>
          <div className="flex justify-between items-center gap-4">
            <button className="border border-orange-800 rounded p-3  bg-orange-100">
              <Link className="" to={`update/${_id}`}>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="m-1 text-orange-900"
                />
              </Link>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="border border-orange-800 rounded p-3 bg-orange-100"
            >
              <FontAwesomeIcon
                icon={faRemove}
                className="text-orange-900 m-1"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chocolate;
