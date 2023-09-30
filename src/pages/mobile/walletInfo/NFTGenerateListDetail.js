import React, { Component } from "react";
import {Link} from "react-router-dom";

import STable from "../../../components/mobile/mobile_standard_table";
import FullTable from "../../../components/mobile/mobile_full_table";

class NFTGenerateListDetail extends Component {
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        console.log("nftINfo", nftInfo)
        this.state = nftInfo
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="pt-4 pl-1 pr-1 mt-7">
                <div className="d-flex justify-content-around pb-3 mb-2 pl-3 pr-3 mt-3">
                    <Link to={{ pathname: "/NFTGenerateListUpdate", nftInfo: this.state}} className="btn btn-default btn-mobile-default modal_button_primary float-right">수정</Link>
                    <Link to={{ pathname: "/NFTGenerateListSale", nftInfo: this.state}} className="btn btn-default btn-mobile-default modal_Link_primary float-right">판매</Link>
                    <Link to={'/NFTGenerateList'} className="btn btn-default btn-mobile-default modal_button_close float-right">닫기</Link>
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
                        <div className="w-35 pl-0 pr-0 text-center">발행일</div>
                    </div>
                    <div className="unColoredTd">
                        <div className="w-25 pl-0 pr-0 text-center">{this.state.category}</div>
                        <div className="w-25 pl-0 pr-0 text-center">{this.state.id}</div>
                        <div className="w-15 pl-0 pr-0 text-center">{this.state.NFTName}</div>
                        <div className="w-35 pl-0 pr-0 text-center">{this.state.generate_time}</div>
                    </div>
                    <div className="coloredTd w-100">
                        <div className="w-75 pl-0 pr-0 text-center">소유자 지갑주소</div>
                        <div className="w-25 pl-0 pr-0 text-center">상태</div>
                    </div>
                    <div className="unColoredTd w-100">
                        <div className="w-75 pl-0 pr-0 text-center text_underLine">{this.state.mintedWalletAddress}</div>
                        <div className="w-25 pl-0 pr-0 text-center" style={{color : "#083f92"}}>{this.state.state}</div>
                    </div>
                    <div className="coloredTd">
                        <div className="col-md-12 text-center">설명</div>
                    </div>
                    <div className="unColoredTd">
                        <div className="col-md-12">{this.state.description}</div>
                    </div>
                </div>
                {/* <p className="font-bold mb-3 pl-1">히스토리</p>
                <div className="table-responsive mt-2 mobile_tab">
                    <STable data={this.state.historyTableData} num={this.state.num} header={this.state.historyTableHeader}/>
                </div> */}
            </div>
        );
    }
}

export default NFTGenerateListDetail
