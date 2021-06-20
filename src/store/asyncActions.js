import { setupWeb3, setupContract, setNetwork, addEthereumAccounts, addTransaction, web3LoadingError } from "./actions";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../contract/ABI';
import WalletConnectProvider from "@walletconnect/web3-provider";

export const loadBlockchain = async (dispatch) => {
    try {
        console.log("Web3 = ", Web3);
        console.log("Web3.givenProvider = ", Web3.givenProvider);
        dispatch(setNetwork(Web3.givenProvider.chainId));

        if (Web3.givenProvider && Web3.givenProvider.chainId == 0x38) {
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));

        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001) {

            dispatch(web3LoadingError(error.message));
        }
    }
}

export const loadWalletConnect = async (dispatch) => {
    try {
        const provider = new WalletConnectProvider({

            rpc: {
                56: "https://bsc-dataseed.binance.org/",
            },
            rpcUrl: "https://bsc-dataseed.binance.org/",
            chainId: 56
        });
        if (provider) {
            await provider.enable();

            const web3 = new Web3(provider);
            console.log(web3)

            // await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log("this is for contract", contract)

            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            console.log("this is for accounts", accounts)
            dispatch(addEthereumAccounts(accounts));
            console.log("contract = ", contract);
            console.log("contract.methods = ", contract.methods);
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001) {

            dispatch(web3LoadingError(error.message));
        }
    }
}
export const buyTokensAsync = async (beneficiary, accounts, contract, etherValue, dispatch) => {
    console.log("before transaction");
    const price = etherValue.toString(); //change it
    const receipt = await contract.methods
        .buyTokens(beneficiary)
        .send({ from: accounts[0], value: price });
    console.log("after  transaction ", receipt);
}

export const rateAsync = async (contract) => {
    const receipt = await contract.methods
        .rate().call();
    console.log("after rateAsync  transaction ", receipt);
    return receipt
}

export const openingTime = async (contract) => {
    const receipt = await contract.methods
        .openingTime().call();
    // let date = new Date(receipt * 1000);
    // console.log("openingTime", date);
    return receipt
}

export const closingTime = async (contract) => {
    const receipt = await contract.methods
        .closingTime().call();
    // console.log("closingTime", receipt);
    return receipt
}
