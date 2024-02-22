import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Orders = ({list}) => {
  return (
    <div>
      <center>
      {list.length > 0 ? (
          <div className="container">
            <div className="row">
              {list.map((item) => (
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
                      <h5 className="card-title"> {item.table_number}</h5>
                      {/* <div className="card-text">
                        <button className="btn btn-primary" onClick={()=> Handler(item.id, item.name, item.image)}>Order</button>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div> No orders Placed </div>
        )}
        <div>
          <Link to="/">
          <button> Back to home </button>
          </Link>
        </div>
      </center>
    </div>
  )
}
const mapStateToProps= state => ({
  list : state.orderreducer
})

export default connect(mapStateToProps)(Orders)
