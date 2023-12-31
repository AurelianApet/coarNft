import React, { useContext } from "react";
import { useHistory  } from "react-router-dom"
import "../../../assets/css/pages/login.css"
import { AppContext } from "../../../AppContext";
import { getWalletBalance } from "../../../services/contract";

const Login = (props) => {
    const { loginDate, setLoginDate, wallet, setWalletAddress, connectedWalletType, setConnectedWalletType, setWalletBalance } = useContext(AppContext);
    const history = useHistory()
    console.log("history", history)
    const connectWallet = async (walletType) => {
        if(walletType === "metamask") {
            if(!(window.ethereum && window.ethereum.isMetaMask)) {
                window.open('https://metamask.io/download/', '_blank')
            } else {
                const accounts = await window.ethereum.request({          
                    method: "eth_requestAccounts",        
                });
                const balance = await getWalletBalance(accounts[0], walletType)
                console.log("metamask b", balance)
    
                setConnectedWalletType(walletType)
                setWalletAddress(accounts[0])
                setWalletBalance(balance);
                setLoginDate(Date.now())
                history.push("/walletInfo")
            }
        } else if(walletType === "kaikas") {
            if(!(window.klaytn && window.klaytn.isKaikas)) {
                window.open('https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=en', '_blank')
            } else {
                if (typeof window.klaytn !== 'undefined') {
                    console.log("It's in-app browser");
                    const accounts = await window.klaytn.enable();
                    const balance = await getWalletBalance(accounts[0], walletType)
                    console.log("kaikas b", balance)
                    setConnectedWalletType(walletType)
                    setWalletAddress(accounts[0])
                    setWalletBalance(balance);
                    setLoginDate(Date.now())
                    history.push("/walletInfo")
                } 
            }
        }
    }
    
    return (
        <div className="container-custom main-container">
            <div className="login">
                <h4 className="text-center font-weight-bold mb-4" style={{fontSize : '32px'}}>로그인</h4>
                <p className="text-center mb-lg-5">아래 방법 중 한가지를 선택하여 로그인 해주세요.</p>
                <div style={{display : 'grid'}}>
                    <div className="d-flex justify-center">
                        <button className="btn login_btn login_btn_one mb-4 d-flex" data-toggle="modal" data-target="" onClick={() => connectWallet("kaikas")} /* disabled={(window.klaytn && window.klaytn.isKaikas) ? false : true}*/>
                            <img src="./image/kailogo.png" className="login_logo" alt="" />
                            <p className="m-0">Kaikas로 로그인하기</p>
                        </button>
                    </div>
                    <div className="d-flex justify-center">
                        <button className="btn login_btn login_btn_two d-flex"  data-toggle="modal" data-target="" onClick={() => connectWallet("metamask")} /*disabled={(window.ethereum && window.ethereum.isMetaMask) ? false : true}*/>
                            <div style={{backgroundColor : 'white',borderRadius : '50%'}} className="d-flex justify-content-center p-1 login_logo">
                                <img src="./image/metalogo.png" className=" mr-0" alt="" />
                            </div>
                            <p className="m-0">Metamask로 로그인하기</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
