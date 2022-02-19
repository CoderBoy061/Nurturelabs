import React from "react";
import "./styles/tableheader.css";
import btc from "../images/btc.svg";
import chain from "../images/chain.svg";
import edittype from "../images/edittype.svg";

const HeaderTable = ({ data ,loading}) => {
  if(loading){
    return (
      <p>Loading.....</p>
    )
  }
  return (
    <div>
      <table>
        <thead>
          <th>ASSET</th>
          <th> amount</th>
          <th>User account</th>
          <th>Referral earning</th>
        </thead>
        <tbody>
          {!loading && data.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="assest-data">
                  <div className="first-table-div">
                    <img src={item.img} alt="" className="btc-img" />
                    <p className="btc-bitcoin">{item.asset}</p>
                  </div>

                  <div className="put-table-data">
                    <p>{item.type}</p>
                    <img src={item.chain.img} alt="" className="chain-img" />
                  </div>
                </div>
              </td>
              <td>
                <p className="td-upperpara">{item.amount} BNB</p>
                <p className="td-lowerpara">{item.state}</p>
              </td>
              <td>
                <p className="td-upperpara">
                  {item.user.lenght < 9
                    ? `${item.user}`
                    : `${item.user.substring(0, 9)}...`}
                </p>
              </td>
              <td>
                <p className="td-upperpara">{item.referral_earnings}BNB</p>
                <p className="td-lowerpara">
                  View on BSC Scan
                  <span style={{ background: "#191b20" }}>
                    <img
                      src={edittype}
                      alt=""
                      style={{ background: "#191b20", marginLeft: "1px" }}
                    />
                  </span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tbody>
          <tr>
            <td>
              <div className="assest-data">
                <div className="first-table-div">
                  <img src={btc} alt="" className="btc-img" />
                  <p className="btc-bitcoin">Bitcoin</p>
                </div>

                <div className="put-table-data">
                  <p>Put</p>
                  <img src={chain} alt="" className="chain-img" />
                </div>
              </div>
            </td>
            <td>
              <p className="td-upperpara">0.0000 BNB</p>
              <p className="td-lowerpara">Expired</p>
            </td>
            <td>
              <p className="td-upperpara">0xFbE..0f58A7D</p>
            </td>
            <td>
              <p className="td-upperpara">0.000.BNB</p>
              <p className="td-lowerpara">
                View on BSC Scan
                <span style={{ background: "#191b20" }}>
                  <img
                    src={edittype}
                    alt=""
                    style={{ background: "#191b20", marginLeft: "1px" }}
                  />
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="assest-data">
                <div className="first-table-div">
                  <img src={btc} alt="" className="btc-img" />
                  <p className="btc-bitcoin">Bitcoin</p>
                </div>

                <div className="put-table-data">
                  <p>Put</p>
                  <img src={chain} alt="" className="chain-img" />
                </div>
              </div>
            </td>
            <td>
              <p className="td-upperpara">0.0000 BNB</p>
              <p className="td-lowerpara">Expired</p>
            </td>
            <td>
              <p className="td-upperpara">0xFbE..0f58A7D</p>
            </td>
            <td>
              <p className="td-upperpara">0.000.BNB</p>
              <p className="td-lowerpara">
                View on BSC Scan
                <span style={{ background: "#191b20" }}>
                  <img
                    src={edittype}
                    alt=""
                    style={{ background: "#191b20", marginLeft: "1px" }}
                  />
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="assest-data">
                <div className="first-table-div">
                  <img src={btc} alt="" className="btc-img" />
                  <p className="btc-bitcoin">Bitcoin</p>
                </div>

                <div className="put-table-data">
                  <p>Put</p>
                  <img src={chain} alt="" className="chain-img" />
                </div>
              </div>
            </td>
            <td>
              <p className="td-upperpara">0.0000 BNB</p>
              <p className="td-lowerpara">Expired</p>
            </td>
            <td>
              <p className="td-upperpara">0xFbE..0f58A7D</p>
            </td>
            <td>
              <p className="td-upperpara">0.000.BNB</p>
              <p className="td-lowerpara">
                View on BSC Scan
                <span style={{ background: "#191b20" }}>
                  <img
                    src={edittype}
                    alt=""
                    style={{ background: "#191b20", marginLeft: "1px" }}
                  />
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="assest-data">
                <div className="first-table-div">
                  <img src={btc} alt="" className="btc-img" />
                  <p className="btc-bitcoin">Bitcoin</p>
                </div>

                <div className="put-table-data">
                  <p>Put</p>
                  <img src={chain} alt="" className="chain-img" />
                </div>
              </div>
            </td>
            <td>
              <p className="td-upperpara">0.0000 BNB</p>
              <p className="td-lowerpara">Expired</p>
            </td>
            <td>
              <p className="td-upperpara">0xFbE..0f58A7D</p>
            </td>
            <td>
              <p className="td-upperpara">0.000.BNB</p>
              <p className="td-lowerpara">
                View on BSC Scan
                <span style={{ background: "#191b20" }}>
                  <img
                    src={edittype}
                    alt=""
                    style={{ background: "#191b20", marginLeft: "1px" }}
                  />
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="assest-data">
                <div className="first-table-div">
                  <img src={btc} alt="" className="btc-img" />
                  <p className="btc-bitcoin">Bitcoin</p>
                </div>

                <div className="put-table-data">
                  <p>Put</p>
                  <img src={chain} alt="" className="chain-img" />
                </div>
              </div>
            </td>
            <td>
              <p className="td-upperpara">0.0000 BNB</p>
              <p className="td-lowerpara">Expired</p>
            </td>
            <td>
              <p className="td-upperpara">0xFbE..0f58A7D</p>
            </td>
            <td>
              <p className="td-upperpara">0.000.BNB</p>
              <p className="td-lowerpara">
                View on BSC Scan
                <span style={{ background: "#191b20" }}>
                  <img
                    src={edittype}
                    alt=""
                    style={{ background: "#191b20", marginLeft: "1px" }}
                  />
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="assest-data">
                <div className="first-table-div">
                  <img src={btc} alt="" className="btc-img" />
                  <p className="btc-bitcoin">Bitcoin</p>
                </div>

                <div className="put-table-data">
                  <p>Put</p>
                  <img src={chain} alt="" className="chain-img" />
                </div>
              </div>
            </td>
            <td>
              <p className="td-upperpara">0.0000 BNB</p>
              <p className="td-lowerpara">Expired</p>
            </td>
            <td>
              <p className="td-upperpara">0xFbE..0f58A7D</p>
            </td>
            <td>
              <p className="td-upperpara">0.000.BNB</p>
              <p className="td-lowerpara">
                View on BSC Scan
                <span style={{ background: "#191b20" }}>
                  <img
                    src={edittype}
                    alt=""
                    style={{ background: "#191b20", marginLeft: "1px" }}
                  />
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="assest-data">
                <div className="first-table-div">
                  <img src={btc} alt="" className="btc-img" />
                  <p className="btc-bitcoin">Bitcoin</p>
                </div>

                <div className="put-table-data">
                  <p>Put</p>
                  <img src={chain} alt="" className="chain-img" />
                </div>
              </div>
            </td>
            <td>
              <p className="td-upperpara">0.0000 BNB</p>
              <p className="td-lowerpara">Expired</p>
            </td>
            <td>
              <p className="td-upperpara">0xFbE..0f58A7D</p>
            </td>
            <td>
              <p className="td-upperpara">0.000.BNB</p>
              <p className="td-lowerpara">
                View on BSC Scan
                <span style={{ background: "#191b20" }}>
                  <img
                    src={edittype}
                    alt=""
                    style={{ background: "#191b20", marginLeft: "1px" }}
                  />
                </span>
              </p>
            </td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
};

export default HeaderTable;
