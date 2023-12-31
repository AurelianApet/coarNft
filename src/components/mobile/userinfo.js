import React from "react";
import "../../assets/css/pages/mobile/userinfo.css"

const UserInfo = ({ wallet, connectedWalletType, loginDate, balance}) => {
    const loginTime = new Date(loginDate)

    return (
        <div className="userinfo">
            <img src="./image/user-info-logo.png" className="user-info-logo-img" alt=""/>
            <div className="pl-2 text-white pr-2">
                <div className="d-flex mb-1">
                    <p className="mobile-user-info-label-width">Register</p>
                    <p className="mobile-user-info-text-width">2023.01.01</p>
                </div>
                <div className="d-flex mb-1">
                    <p className="mobile-user-info-label-width">Address</p>
                    <p className="mobile-user-info-text-width">{wallet}</p>
                </div>
                <div className="d-flex mb-1">
                    <p className="mobile-user-info-label-width">Balance</p>
                    <p className="mobile-user-info-text-width">{balance}&nbsp;
                        {
                            connectedWalletType === "kaikas" && "KLAY"
                        }
                        {
                            connectedWalletType === "metamask" && "ETH"
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo