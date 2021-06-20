import React, { useEffect, useCallback, useState } from "react";

import "./connectModal.css";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../context/GlobalState";
import { loadBlockchain, loadWalletConnect } from "../../store/asyncActions";
import TextField from "@material-ui/core/TextField";
// import QRCode from "react-qr-code";
import metaIcon from "../../images/metamask.png";
import walletIcon from "../../images/wallet.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px 30px 30px 30px",
  },
}));

const ConnectModal = ({ open }) => {
  const [qrCode, setQrCode] = useState(false);
  const [{ web3 }, dispatch] = useStore();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleMetaMask = useCallback(async () => {
    loadBlockchain(dispatch);
  }, []);
  const handleWalletConnect = useCallback(async () => {
    loadWalletConnect(dispatch);
  }, []);
  return (
    <div>
      <>
        <div style={modalStyle} className={classes.paper}>
          {qrCode ? (
            <div className="qr-container">
              {" "}
              <ArrowBackIosIcon
                fontSize="medium"
                className="back-btn"
                onClick={() => setQrCode(!qrCode)}
              />
              <div className="qr-heading-container">
                <h3 className="qr-heading">Scan With Trust Wallet</h3>{" "}
              </div>{" "}
              {/* <QRCode style={{width: 100}} value="https://trumptokenpresale.web.app/buy" /> */}
            </div>
          ) : (
              <>
                {open}
                <button
                  onClick={handleMetaMask}
                  // icon={metaIcon}
                  // iconWidth={55}
                  // class={`metamask-btn`}
                  className="metamask-btn"
                >
                  <img src={metaIcon} alt="icon" className="metamask-btn-img" />
                  <span style={{color: '#899fc2', marginTop: "15px"}}>
                    Meta Mask
                  </span>
                </button>

                <button
                  // onClick={() => setQrCode(!qrCode)}
                  onClick={handleWalletConnect}
                  // icon={walletIcon}
                  // iconWidth={50}
                  // class={`trustwallet-btn`}
                  className="trustwallet-btn"
                >
                  <img src={walletIcon} alt="icon" className="trustwallet-btn-img" />
                  <span style={{color: '#899fc2', marginTop: "15px"}}>
                    Wallet Connect
                  </span>
                </button>
              </>
            )}
        </div>
      </>
    </div>
  );
};

export default ConnectModal;

