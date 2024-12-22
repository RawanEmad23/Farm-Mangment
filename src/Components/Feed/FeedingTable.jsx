import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Feedcontext } from "../../Context/FeedContext";
import { Rings } from "react-loader-spinner";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2"; // استيراد SweetAlert

function FeedingTable() {
  const { getAllFeed, Deletfeed } = useContext(Feedcontext);
  const [feedData, setFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data function
  const fetchFeedData = async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllFeed();

      if (data && data.feeds) {
        setFeedData(data.feeds);
      } else {
        console.error("Unexpected data structure:", data);
        setFeedData([]);
      }
    } catch (error) {
      console.error("Error fetching feed data:", error);
      setFeedData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await Deletfeed(id); 
          setFeedData(feedData.filter((feed) => feed._id !== id));  
          Swal.fire("Deleted!", "Your feed has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting feed:", error);
          Swal.fire("Error!", "Failed to delete the feed. Please try again.", "error");
        }
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="animal">
          <Rings
            visible={true}
            height="100"
            width="100"
            color="#2f5e97"
            ariaLabel="rings-loading"
          />
        </div>
      ) : (
        <div className="container">
          <div
            className="d-flex justify-content-between align-items-center mb-4"
            style={{ marginTop: "140px" }}
          >
            <h2 style={{ color: "#88522e" }}>Feed Records</h2>
            <Link to="/feed">
              <button
                type="button"
                className="btn btn-lg active"
                style={{
                  background: "#88522e",
                  color: "white",
                  borderColor: "#3a7d44",
                }}
              >
                <MdOutlineAddToPhotos /> Add New Feed
              </button>
            </Link>
          </div>

          <table className="table table-striped text-center mt-4">
            <thead>
              <tr>
                <th scope="col">Feed Name</th>
                <th scope="col">Type</th>
                <th scope="col">Price</th>
                <th scope="col">Concentration of Dry Matter</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {feedData.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{item.concentrationOfDryMatter}</td>
                  <td
                    onClick={() => handleDelete(item._id)}
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  >
                    <RiDeleteBin6Line /> Remove
                  </td>
                  <td style={{ cursor: "pointer", color: "#88522e" }}>
                    <FaRegEdit /> Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default FeedingTable;



// onClick={() => handleClick(vaccine._id)}
// onClick={() => editVaccine(vaccine._id)}