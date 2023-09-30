import React, { Component } from "react";
import {Link} from "react-router-dom";

import STable from "../../../components/mobile/mobile_standard_table";
import FullTable from "../../../components/mobile/mobile_full_table";
import { AppContext } from "../../../AppContext";
import { buyNFT } from "../../../services/contract";
import { title } from "../../../services/title";
import { saveBoughtNFT } from "../../../services/serverHook";
import LoadingScreen from "react-loading-screen";

class DashboardDetail extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        console.log("nftINfo", nftInfo)
        this.state = {
            ...nftInfo,
            transacting : false
        }
    }
    componentDidMount() {

    }

    buyNFT = async () => {
        this.setState({
            transacting: true
        })
        const { wallet, connectedWalletType, setNotification } = this.context;
        let resTx = await buyNFT(this.state.id, this.state.price, wallet, connectedWalletType)
        if(resTx) {
            const { txHash } = resTx
            saveBoughtNFT(this.state.dbID, this.state.price, wallet, txHash).then(res => {
                this.setState({
                    transacting: false
                })
                if(res) {
                    setNotification({
                        status: "success",
                        title: title.boughtSuccess
                    })
                    this.props.history.push("/dashboard");
                } else {
                    setNotification({
                        status: "fail",
                        title: title.boughtFail
                    })
                    this.props.history.push("/dashboard");
                }
            })
        } else {
            this.setState({
                transacting: false
            })
            setNotification({
                status: "fail",
                title: title.boughtFail
            })
            this.props.history.push("/dashboard");
        }
    }

    render() {
        return (
            <>
                <div className="pt-4 pl-1 pr-1 mt-7">
                    <div className="d-flex justify-content-around pb-3 mb-2 pl-3 pr-3 mt-3">

                        <button type="button" className="btn btn-mobile-default modal_button_primary float-right" data-toggle="modal" data-target="#NFTBuyConfirmModal">구매</button>
                        <Link to={'/dashboard'} className="btn btn-default btn-mobile-default modal_button_close float-right">닫기</Link>
                    </div>
                    <div className="d-flex justify-content-center pt-2 pb-2 mb-3">
                        <div className="mobile-NFTGenerate-detail-img">
                            {
                                this.state.category === "Image" && <img src={this.state.content}/>
                            }
                            {
                                this.state.category === "Video" && <video controls> 
                                    <source type="video/mp4" src={this.state.content} /> 
                                </video>
                            }
                        </div>
                    </div>
                    <div className="mt-4 mb-4">
                        <div className="coloredTd w-100">
                            <div className="w-25 pl-0 pr-0 text-center">카테고리</div>
                            <div className="w-25 pl-0 pr-0 text-center">NFT ID</div>
                            <div className="w-15 pl-0 pr-0 text-center">NFT 이름</div>
                            <div className="w-35 pl-0 pr-0 text-center">판매 등록시각</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.category}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.id}</div>
                            <div className="w-15 pl-0 pr-0 text-center">{this.state.NFTName}</div>
                            <div className="w-35 pl-0 pr-0 text-center">{this.state.generate_time}</div>
                        </div>
                        <div className="coloredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center">소유자 지갑주소</div>
                            <div className="w-25 pl-0 pr-0 text-center">판매 가격</div>
                        </div>
                        <div className="unColoredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center text_underLine">{this.state.mintedWalletAddress}</div>
                            <div className="w-25 pl-0 pr-0 text-center" style={{color : "#083f92"}}>{this.state.price} &nbsp;
                                {
                                    this.state.mintedWalletType === "metamask" && "ETH"
                                }
                                {
                                    this.state.mintedWalletType === "kaikas" && "KLAY"
                                }
                                </div>
                        </div>
                        <div className="coloredTd">
                            <div className="col-md-12 text-center">설명</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="col-md-12">{this.state.description}</div>
                        </div>
                    </div>
                    <div className="modal fade" id="NFTBuyConfirmModal" role="dialog">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content login_modal p-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <i className="fa fa-exclamation mobileLoginIcon"></i>
                                </div>
                                <div className="d-flex justify-content-center mb-4">
                                    <p className="text-white">구매하시겠습니까?</p>
                                </div>
                                <button className="btn loginButton" data-dismiss="modal" onClick={this.buyNFT}>구매</button>
                            </div>
                        </div>
                    </div>
                </div>
                { 
                    this.state.transacting && <LoadingScreen
                        loading={true}
                        bgColor="rgba(0,0,0,0.7)"
                        spinnerColor="#23b4cb"
                        textColor="white"
                        logoSrc=""
                        text="Buying..."
                    >
                        {""}
                    </LoadingScreen>
                }
            </>
        );
    }
}

export default DashboardDetail
