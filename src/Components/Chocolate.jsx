import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
      name:{name}; Country:{country}; Category:{category}; Photo:{photo};
      <div>
        <button onClick={() => handleDelete(_id)} className="btn btn-accent">
          X
        </button>
        <Link className="btn btn-primary" to={`update/${_id}`}>
          Edit
        </Link>

        <button className="btn btn-secondary">View</button>
      </div>
    </>
  );
};

export default Chocolate;
