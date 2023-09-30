import React, { Component } from "react";
import {Link} from "react-router-dom";

import STable from "../../../components/mobile/mobile_standard_table";
import FullTable from "../../../components/mobile/mobile_full_table";
import { getBoughtHistoryData, stopForsaleNFT } from "../../../services/serverHook";

class NFTBuyListDetail extends Component {
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        console.log("nftINfo", nftInfo)
        this.state = {
            ...nftInfo,
            historyTableHeader : [
                { name : '판매 가격', field : 'price', sortable : false,width : '150px' },
                { name : '구매자', field : 'buyer', sortable : false,width : '290px' },
                { name : '판매자', field : 'seller', sortable : false,width : '290px' },
                { name : '판매 완료시각', field : 'endTime', sortable : false,width : '180px' },
            ],
            historyTableData : [
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
            ],
            num : 5
        }
    }
    componentDidMount() {
        const nftInfo = this.props.location.nftInfo
        if(nftInfo) {
            getBoughtHistoryData(nftInfo.id, nftInfo.mintedWalletType).then(data => {
                let historyData = data.map(({ PriceTrading, oldWalletAddress, newWalletAddress, createdAt }) => ({
                    price : PriceTrading,
                    buyer : newWalletAddress,
                    seller : oldWalletAddress,
                    endTime : new Date(createdAt).getFullYear() + "." + new Date(createdAt).getMonth() + "." + new Date(createdAt).getDate() + " " + new Date(createdAt).getHours() + ":" + new Date(createdAt).getMinutes() + ":" + new Date(createdAt).getSeconds(),
                }))
                console.log("getDerivedStateFromProps hisotry", historyData)
                
                this.setState({
                    historyTableData : historyData
                })
            })
        }
    }

    stopSaleNFT = (nftID) => {
        stopForsaleNFT(nftID).then(data => {
            if(data) {
                alert("성공적으로 중지되었습니다.");
                this.props.history.push("/NFTSellList");
            } else {

            }
        })
    }

    render() {
        return (
            <div className="pt-4 pl-1 pr-1 mt-7">
                <div className="d-flex justify-content-end pb-3 mb-2 pl-3 pr-5 mt-3">
                    <Link to={'/NFTBuyList'} className="btn btn-default btn-mobile-default modal_button_close float-right">닫기</Link>
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
                        <div className="w-35 pl-0 pr-0 text-center">구매 완료시각</div>
                    </div>
                    <div className="unColoredTd">
                        <div className="w-25 pl-0 pr-0 text-center">{this.state.category}</div>
                        <div className="w-25 pl-0 pr-0 text-center">{this.state.id}</div>
                        <div className="w-15 pl-0 pr-0 text-center">{this.state.NFTName}</div>
                        <div className="w-35 pl-0 pr-0 text-center">{this.state.end_time}</div>
                    </div>
                    <div className="coloredTd w-100">
                        <div className="w-75 pl-0 pr-0 text-center">소유자 지갑주소</div>
                        <div className="w-25 pl-0 pr-0 text-center">나의 구매가격</div>
                    </div>
                    <div className="unColoredTd w-100">
                        <div className="w-75 pl-0 pr-0 text-center text_underLine">{this.state.mintedWalletAddress}</div>
                        <div className="w-25 pl-0 pr-0 text-center" style={{color : "#083f92"}}>{this.state.price}</div>
                    </div>
                    <div className="coloredTd">
                        <div className="col-md-12 text-center">설명</div>
                    </div>
                    <div className="unColoredTd">
                        <div className="col-md-12">{this.state.description}</div>
                    </div>
                </div>
                <p className="font-bold mb-3 pl-1">히스토리</p>
                <div className="table-responsive mt-2 mobile_tab">
                    <STable data={this.state.historyTableData} num={this.state.num} header={this.state.historyTableHeader}/>
                </div>
            </div>
        );
    }
}

export default NFTBuyListDetail
