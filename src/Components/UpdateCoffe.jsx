import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const loadedCoffee = useLoaderData();
  const { _id, name, Barista, Price, Taste, Details, Photo, Category } = loadedCoffee;

  const handleUpdateCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          
        }
      });
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Update Coffee: {name}</h1>
      </div>
      <form onSubmit={handleUpdateCoffe}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Barista</label>
            <input
              type="text"
              name="Barista"
              defaultValue={Barista}
              className="input w-full"
              placeholder="Enter coffee Barista name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="Price"
              defaultValue={Price}
              className="input w-full"
              placeholder="Enter Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="Taste"
              defaultValue={Taste}
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="Category"
              defaultValue={Category}
              className="input w-full"
              placeholder="Enter coffee category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="Details"
              defaultValue={Details}
              className="input w-full"
              placeholder="Enter coffee details "
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 my-6 border-base-300 rounded-box border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="Photo"
            defaultValue={Photo}
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <input type="submit" className="btn w-full" value="Update Coffee Details" />
      </form>
    </div>
  );
};

export default UpdateCoffe;