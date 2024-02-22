import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addorder, resetfilter, resettablenumber } from "../Redux/Actions";

const Card = ( addorder, table_number) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((json) => setData(json.recipes));
  }, []);
  const Handler= async (id, name, image)=>{
    if(table_number != null){
      await resettablenumber()
      await resetfilter
      alert('order succesfully placed')
    }
    else{
      alert("please add the tabel number")
    }
  }
  return (
    <div>
      <center>
        {data.length > 0 ? (
          <div className="container">
            <div className="row">
              {data.map((item) => (
                <div
                  className="col-md-4"
                  key={item.id}
                  style={{ padding: "6px" }}
                >
                  <div
                    className="card"
                    style={{
                      width: "20rem",
                      padding: "3px",
                      borderRadius: "5px",
                    }}
                  >
                    <img src={item.image} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title"> {item.name}</h5>
                      <div className="card-text">
                        <button className="btn btn-primary" onClick={()=> Handler(item.id, item.name, item.image)}>Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </center>
    </div>
  );
};

const mapStateToProps = state =>({
  filter_name : state.filterreducer.filter_name,
  table_number :state.tablereducer.table_number
})

export default connect(mapStateToProps, {addorder}) (Card);
