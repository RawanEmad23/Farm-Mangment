import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { IoIosSave } from 'react-icons/io';
import { UserContext } from "../../Context/UserContext";
import axios from 'axios';

export default function Feedbylocation() {
  const [isLoading, setIsLoading] = useState(false);
  const { Authorization } = useContext(UserContext);

  
  async function post(values) {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "https://farm-project-bbzj.onrender.com/api/feed/addfeedbylocationshed", 
        values,
        {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          }
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error during post:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      locationShed: "",
      feeds: [
        { feedName: "", quantity: "" }  
      ],
      date: ""
    },
    onSubmit: (values) => {
      post(values);
    }
  });

  
  const addFeed = () => {
    formik.setFieldValue("feeds", [...formik.values.feeds, { feedName: "", quantity: "" }]);
  };

  return (
    <div className="container">
      <div className="title2">Feed By Location</div>
      <form onSubmit={formik.handleSubmit} className="mt-5">
        {isLoading ? (
          <button type="submit" className="btn button2" disabled>
            <i className="fas fa-spinner fa-spin"></i>
          </button>
        ) : (
          <button type="submit" className="btn button2">
            <IoIosSave /> Save
          </button>
        )}

        <div className="animaldata">
          <div className="input-box">
            <label className="label" htmlFor="locationShed">Location Shed</label>
            <input
              id="locationShed"
              name="locationShed"
              type="text"
              className="input2"
              placeholder="Enter location shed"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.locationShed}
            />
          </div>
        </div>
        <div className="animaldata">
          <div className="input-box">
            <label className="label" htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              className="input2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
          </div>
        </div>
  
        {formik.values.feeds.map((feed, index) => (
          <div key={index} className="animaldata">
            <div className="input-box">
              <label className="label" htmlFor={`feeds[${index}].feedName`}>Feed Name</label>
              <input
                id={`feeds[${index}].feedName`}
                name={`feeds[${index}].feedName`}
                type="text"
                className="input2"
                placeholder="Enter feed name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={feed.feedName}
              />
            </div>

            <div className="input-box">
              <label className="label" htmlFor={`feeds[${index}].quantity`}>Quantity</label>
              <input
                id={`feeds[${index}].quantity`}
                name={`feeds[${index}].quantity`}
                type="number"
                className="input2"
                placeholder="Enter quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={feed.quantity}
              />
            </div>
          </div>
        ))}

  
        <button type="button" onClick={addFeed} className="btn button2">Add Feed</button>

      </form>
    </div>
  );
}
