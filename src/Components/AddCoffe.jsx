import React from "react";
import Swal from 'sweetalert2'

const AddCoffe = () => {
  const handleAddCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffe = Object.fromEntries(formData.entries());

    // Sendin coffeData to the DB

    fetch("http://localhost:3000/Coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added coffe succesfully");
          Swal.fire({
            title: "Coffe added succesfully!",
            text: "You clicked the button!",
            icon: "success",
            timer: 1000
          });
        }
      });
  };
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add New Coffe</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffe}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Barista</label>
            <input
              type="text"
              name="Barista"
              className="input w-full"
              placeholder="Enter coffee Barista name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="Price"
              className="input w-full"
              placeholder="Enter Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="Taste"
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="Category"
              className="input w-full"
              placeholder="Enter coffee category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="Details"
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
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <input type="submit" className="btn w-full" value="Add COffe" />
      </form>
    </div>
  );
};

export default AddCoffe;
