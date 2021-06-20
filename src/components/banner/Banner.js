import React, { useEffect, useCallback, useState } from "react";
import BannerImg from "../../assets/banner.png";
import { ToastContainer, toast } from 'react-toastify';
import { useStore } from '../../context/GlobalState';
import Web3 from "web3";
import Modal from '@material-ui/core/Modal';
import ConnectModal from '../modal/connectModal';
import ModalBox from '../modal/index';
import OpeningTime from '../Timer/OpeningTime';
import ClosingTime from '../Timer/ClosingTime';

import './banner.css'

import 'react-toastify/dist/ReactToastify.css';


function Banner() {
  const [{ web3, accounts, network, contract }, dispatch] = useStore();

  useEffect(() => {

    if (Web3.givenProvider != null && Web3.givenProvider.chainId != 0x38) {
      const notify = () => toast.error('Please Connect With Binance Chain!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });;
      notify();
    }
  }, [network])

  // modal
  const [open, setOpen] = React.useState(false);
  const [openBuy, setOpenBuy] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleBuyOpen = () => {
    setOpenBuy(true);
  };

  const handleBuyClose = () => {
    setOpenBuy(false);
  };
  useEffect(() => {
    if (web3 != null) {
      handleClose()
    }
  }, [web3])
  return (
    <div className="container banner box">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1 order-2">
          <div className="banner-content">
            <h2>
              WORLD FIRST WIDELY <br /> ACCEPTED <br /> DIGITAL
              CURRENCY
            </h2>
            <p>
              The crisis affected the world's economic system; institutions were severely
               hit, banks announced bankruptcy, and many people lost their money to the effect.
               To this end, cryptocurrency spawned as a revolutionary approach to the inadequacies
                of fiat currency
            </p>
            <div className="time-banner-container">
              <div className="opening-time-container">
                <h3 className="starts-heading">Pre-Sale Starts in :</h3>
                <OpeningTime className="open-component" />
              </div>
              <div className="closing-time-container">
                <h3 className="ends-heading">Pre-Sale Ends in :</h3>
                <ClosingTime />
              </div>
            </div>
            {/* <button className="button-custom">PRIVATE SALE</button> */}
            {
              web3 != null ?
                <button className="button-custom" onClick={handleBuyOpen}>Buy Tokens</button>
                :
                <button className="button-custom" onClick={handleOpen}>Unlock Wallet</button>

            }
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 order-lg-2 order-md-2 order-1">
          <div className="banner-img">
            <img src={BannerImg} alt="Banner Image" />
          </div>
        </div>
        <ToastContainer />
      </div>
      <Modal
        open={openBuy}
        onClose={handleBuyClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalBox />
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ConnectModal />
      </Modal>
    </div>

  );
}

export default Banner;
