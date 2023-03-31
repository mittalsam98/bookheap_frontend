import React from "react";
import { API } from "../../backend";


const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/api/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div>
      {/* <div className={styles.innerimg}>  <img className="card-img-top" src='https://images.pexels.com/photos/1178683/pexels-photo-1178683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" /></div> */}

    {/* <div className={styles.innerimg}> */}
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "10rem", maxWidth: "100%" }}
        className="card-img-top   "
      />
      {/* </div> */}
    </div>
  );
};

export default ImageHelper;
