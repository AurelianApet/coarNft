import React, { Component } from "react";
import {Link} from "react-router-dom";

import MenuIcon from "./menuIcon";
import NFTGenerateModal from "../../pages/mobile/walletInfo/modal/NFTGenerateModal";
import "../../assets/css/pages/mobile/header.css"
import { AppContext } from "../../AppContext";

class Mobile_Header extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 'Login',
            update : 1,
            isMobile : false,
        }
    }
    componentDidMount() {

    }

    componentWillUnmount() {
        this.onCloseMenu();
    }

    onShowMenu() {
        document.getElementById("mySidenav").style.width = "140px";
    }

    onCloseMenu() {
        document.getElementById("mySidenav").style.width = "0px";
    }

    onShowNFTGenerate() {
        this.onCloseMenu();
    }

    onLogout() {
        const { wallet, setWalletAddress, connectedWalletType, setConnectedWalletType } = this.context;
        setWalletAddress(null);
        setConnectedWalletType(null)
    }

    render() {
        const { wallet, connectedWalletType } = this.context;
        return (
            <div className="w-100 pl-1 pr-1">
                <div className="d-flex pt-2 pb-2 justify-content-between align-items-center">
                    <Link to="/dashboard">
                        <img src="./image/logo.png" className="logo" alt="" />
                    </Link>
                    <div  onClick={this.onShowMenu.bind(this)}>
                        <MenuIcon/>
                    </div>
                </div>
                <div className="d-flex pt-2 publish mobile-input-container">
                    <i className="fa fa-search pt-2"></i>
                    <input type="text" className="form-control form-control-sm mobile-NFTGenerate-search-input w-100 pl-2" placeholder="NFT 이름 마켓검색" />
                </div>
                <div id="mySidenav" className="sidenav">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            {/* <p className="gotoLink_title">WalletInfo</p> */}
                            {
                                ((!wallet) && (!connectedWalletType)) ? <Link to={'/login'} className="gotoLink_title gotoLink_title_login" onClick={this.onCloseMenu.bind(this)}>
                                    로그인
                                </Link> 
                                : <>
                                    <Link to={'/login'} className="gotoLink_title gotoLink_title_login" onClick={this.onLogout.bind(this)}>
                                        로그아웃
                                    </Link>
                                </>
                            }
                            <Link to="/NFTGenerateList" className="gotoLink mt-1" onClick={this.onCloseMenu.bind(this)}>
                                NFT 발행목록
                            </Link>
                            <Link to="/NFTSellList" className="gotoLink" onClick={this.onCloseMenu.bind(this)}>
                                NFT 판매목록
                            </Link>
                            <Link to="/NFTBuyList" className="gotoLink" onClick={this.onCloseMenu.bind(this)}>
                                NFT 구매완료
                            </Link>
                            <Link to="/NFTHistory" className="gotoLink mb-1" onClick={this.onCloseMenu.bind(this)}>
                                NFT 히스토리
                            </Link>
                            <Link to="/Generate" className="gotoLink_title mb-3" onClick={this.onCloseMenu.bind(this)}>
                                NFT 발행
                            </Link>
                            <Link to="/dashboard"  className="gotoLink_title mb-3" onClick={this.onCloseMenu.bind(this)}>
                                NFT 구매
                            </Link>
                        </div>
                        <button className="closebtn" onClick={this.onCloseMenu.bind(this)}>&times;</button>
                    </div>
                    {/* <NFTGenerateModal/> */}
                </div>
            </div>

        );
    }
}

export default Mobile_Header
