
import React, { useContext, useState } from "react";
import axios from "axios";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    blogTitle: "",
    category: "",
    content: "",
    authorName: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/blogs", blog);
      console.log(response.data); 
      alert("Blog added successfully");
      window.location.reload();
      window.location.href = '/'

    } catch (error) {
      console.error(error); 
      alert("Failed to add blog");
    }
  };

  return (
    <div className="addblog">
      <form className="row g-1 addblogform" onSubmit={handleSubmit}>
        <div className="col-md-6 ">
          <label htmlFor="titleinput" className="form-label">
            Title :
          </label>
          <input
            type="text"
            className="form-control addbloggap poppin-text"
            id="titleinput"
            name="blogTitle"
            placeholder="Write article title"
            value={blog.blogTitle}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 ">
          <label htmlFor="categoryinput" className="form-label">
            Category :
          </label>
          <input
            type="text"
            className="form-control addbloggap poppin-text "
            id="categoryinput"
            name="category"
            placeholder="category"
            onChange={handleChange}
            value={blog.category}
          />
        </div>
        <div className="col-12 ">
          <label htmlFor="contentinput" className="form-label ">
            Your Blog :
          </label>
          <textarea
            className="form-control addbloggap poppin-text "
            id="contentinput"
            placeholder="Start Typing..."
            rows="8"
            name="content"
            onChange={handleChange}
            value={blog.content}
          ></textarea>
        </div>
        <div className="col-md-2">
          <label htmlFor="authornameinput" className="form-label">
            Author Name :
          </label>
          <input
            type="text"
            className="form-control addbloggap poppin-text"
            placeholder="Enter Your Name"
            id="authornameinput"
            name="authorName"
            onChange={handleChange}
            value={blog.authorName}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="postbtn poppin-text">
            Post Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
