import React, { useState } from "react";
import { connect } from "react-redux";
import { settablenumber } from "../Redux/Actions";


const Table = ({table_number, settablenumber}) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const inActiveBtn = "btn btn-outline-primary m-2";
  const activeBtn = 'btn btn-outline-primary m-2 active';
  const [number, setNumber] = useState([])
  return (
   <>
      <center className="mt-2">
        <h4>Please select the table number below :</h4>
        
        {numbers.map((num, index) => {
          return (
            <>
              <div style={{ display: "inline" }} key={index}>
                <button className={number===num?activeBtn:inActiveBtn} onClick={()=>setNumber(num)}>{num}</button>
              </div>
            </>
          );
        })}
      </center>
      </>
  );
};

const mapStateToProps = state => ({
    table_number : state.tablereducer.table_number
})

export default connect(mapStateToProps, {settablenumber})(Table);
