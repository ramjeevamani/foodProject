import React, { useState } from "react";
import { connect } from "react-redux";
import { setfilter, resetfilter } from "../Redux/Actions";

const Filters = ({filter_name, setfilter, resetfilter }) => {
  const prod = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "HotDrinks"];
  const [filter, setFilter] = useState('All Items')
  return (
    <div>
      <center>
        <span className="h4 m-1">Filter</span>
        <select name="filter" className="p-1 m-2" onChange={(e)=>setfilter(e.target.value)}>
            {prod.map((item, index)=>(
                <option value={item} key={index}>{item}</option>
            ))}
        </select>
        <button className="btn btn-sm btn-primary" onClick={()=>setfilter(filter)}>Search</button>
      </center>
    </div>
  );
};

const mapStateToProps= state => ({
  filter_name : state.filterreducer.filter_name
})

export default connect(mapStateToProps, {setfilter, resetfilter})(Filters);
