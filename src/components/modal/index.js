import React, { useEffect, useCallback, useState } from "react";

import "./modal.css";
import Logo from '../../images/logo.png'
import { makeStyles } from "@material-ui/core/styles";
// import Button from "../button/Button";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import { useStore } from "../../context/GlobalState";
// import { loadBlockchain } from "../../store/asyncActions";
import TextField from "@material-ui/core/TextField";
// import QRCode from "react-qr-code";
// import metaIcon from "../../assets/metamask.png";
// import walletIcon from "../../assets/wallet.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { buyTokensAsync,rateAsync } from '../../store/asyncActions';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 340,
    height: 350,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px 30px 30px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",


  },
  textField: {
    width: "100%"
  },
  btn: {
    background: "#1077b3",
    borderRadius: "20px",
    color: "white",
    width: "100%",
    padding: "10px 10px",
    fontSize: "22px",
    marginTop: "10px",
    cursor: "pointer"
  }
}));

const ModalBox = ({ open }) => {
  const [qrCode, setQrCode] = useState(false);
  const [{ web3, accounts, contract }, dispatch] = useStore();
  const [etherAmount, setEtheAmount] = useState("0.1");
  const [rate, setRate] = useState("");


  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const sendRequest = useCallback(async () => {
    // loadBlockchain(dispatch);
  }, []);

  const onSubmit = async () => {
    // e.preventDefault();
    // setAuction(formData)
    // console.log("thi is auction auciton", formData);
    // setTransactionSuccessful(true);
    // setTransactionError("");
    let etherToWei = etherAmount * 10e17;
    let stringEtherToWei = etherToWei.toString();
    const account = accounts;

    try {
      // setTransactionInprocess(true)
      // console.log("This is form data from dispatch async", auction);
      await buyTokensAsync(accounts[0],accounts , contract, stringEtherToWei, dispatch);

      // setTransactionInprocess(false);
      // setTransactionSuccessful(true);
    } catch (error) {
      console.log("error trax = ", error);
      // setTransactionInprocess(false);
      // setTransactionSuccessful(false);
      // setTransactionError(error.message);
    }
  };

  useEffect(() => {
    if (web3 != null && contract != null) {
      const handleRate = async () => {
        try {
          let rate = await rateAsync(contract);
          setRate(rate)
          console.log(rate,"rate")
        }
        catch (error) {
          console.log("this is ", error)
        }
      }
      handleRate();
  
    }
  
  }, [web3, contract])

  console.log("this is modal rate", rate)
  return (
    <div>
      <>
        <div style={modalStyle} className={classes.paper}>
          <h4 className="maga-para" style={{ color: "black" }}> 1 BNB = {rate? Number(rate).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0"} CTC</h4>
          <img src={Logo} className="modal-img" />
          {/* <h1 style={{ color: "black" }}>Buy Area 51 Tokens</h1> */}

      {
         Math.sign(etherAmount) !=  "-1"  ?
          etherAmount<=0.9 ?
          <h5 className="maga-para" style={{ color: "black" }}> {rate ? (((Math.abs(etherAmount) * 10e17) / (10e17 / rate)).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0} CTC</h5>
          :
          <h5 className="maga-para" style={{ color: "black" }}> {rate ? (((Math.abs(etherAmount) * 10e17) / (10e17 / rate)).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0} CTC</h5>
        
       :     <h6 className="maga-para" style={{ color: "red" }}>*Negative Value not Allowed*</h6> 

      }
       
        {
          etherAmount < 0.1 && Math.sign(etherAmount) !=  "-1"?
          <h5 className="maga-para" style={{ color: "red" }}>*Min Amount 0.1 BNB*</h5> 
          : ""
        }
     {/* {
           Math.sign(etherAmount) ==  "-1"?
          <h6 className="maga-para" style={{ color: "red" }}>*Negative Value not Allowed*</h6> 
          : ""
        } */}
              {
            etherAmount > 20 && Math.sign(etherAmount) !=  "-1"?
          <h5 className="maga-para" style={{ color: "red" }}>*Max Amount 20 BNB*</h5> 
          : ""
        }
          <TextField   type="number"   

 className="text-field" label="Enter BNB" type="number" value={etherAmount} onChange={(e) => setEtheAmount(e.target.value)}
          />
          {
            etherAmount >= 0.1 && etherAmount <=20  ?
            <button className="buy-btn" onClick={onSubmit}
            >
              Buy Now
            </button>
            :
            <button className="buy-btn" disabled style={{cursor:"not-allowed"}}
            >
              Buy Now
            </button>
          }
      
        </div>
      </>
    </div>
  );
};

export default ModalBox;
