import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, Photo, name, Barista, Price, Taste } = coffee;

  const handleDelete = (_id) => {
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
        // Start delete the coffe
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              // remove the coffies from the state

              const remaininCoffees = coffees.filter(cof => cof._id!== _id)
              setCoffees(remaininCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border border-gray-100">
      <figure className="shrink-0 w-1/3 p-4 justify-center items-center">
        <img
          src={Photo}
          alt={name}
          className="rounded-lg h-full max-h-52 object-contain"
        />
      </figure>

      <div className="card-body p-6 grow">
        <div className="grow space-y-2">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Barista:</span> {Barista}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Price:</span> {Price}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Taste:</span> {Taste}
          </p>
        </div>

        <div className="card-actions justify-end gap-1 mt-4">
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-2">
           <Link to={`/coffee/${_id}`}> <button className="btn btn-sm btn-outline btn-info">View</button></Link>
            <Link to={`/updatecoffee/${_id}`}><button className="btn btn-sm btn-outline btn-warning">Edit</button></Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-outline btn-error"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
