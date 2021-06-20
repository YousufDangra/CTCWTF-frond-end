import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from '../../images/output-onlinepngtools.png'
import { useStore } from '../../context/GlobalState';
import ConnectModal from '../modal/connectModal';
import ModalBox from '../modal/index';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import WhitePaper from '../../CTCWTF TOKEN LAUNCH 2021.pdf'
import {Link} from 'react-router-dom';
// modal styling
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
    position: 'absolute',
    width: 400,
    height: 220,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px",
  },
}));


function Header() {
  const [headerBg, setHeaderBg] = useState(false);
  const [{ web3, accounts }, dispatch] = useStore();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
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
  useEffect(()=> {
    if(web3 != null) {
      handleClose()
    }
    },[web3])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY != 0) {
        setHeaderBg(true)
      }
      else {
        setHeaderBg(false)
      }
    });
  }, [headerBg])

  const promiseScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <nav
      className={`${
        headerBg
          ? "navbar navbar-expand-lg navbar-color"
          : "navbar navbar-expand-lg"
        }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            // src="https://demo.themenio.com/ico/images/logo-s2-white.png"
            src={Logo}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" onClick={() =>promiseScroll("ecosystem")}>
                Ecosystem
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={() => promiseScroll("platform")}>
                Platform
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={ () => promiseScroll("mvp")}>
                Multichain
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={ () => promiseScroll("tokeNomics")}>
              Tokenomics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={ () => promiseScroll("contact")}>
              Join Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://firebasestorage.googleapis.com/v0/b/cdn-clients-other-use.appspot.com/o/images%2FCTCWTF%20TOKEN%20LAUNCH%202021.pdf?alt=media&token=c16e4f03-d193-4e13-b5ad-cea2d3e9d314" target="_blank">
              Whitepaper
              </a>
                {/* <a className="nav-link" href={WhitePaper} target="">
              Whitepaper
              </a> */}
            </li>
            {
              web3 != null ?
                <button className="header-btn" onClick={handleBuyOpen}>Buy Tokens</button>
                :
                <button className="header-btn" onClick={handleOpen}>Unlock Wallet</button>

            }
          </ul>
        </div>
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
    </nav>

  );
}

export default Header;
