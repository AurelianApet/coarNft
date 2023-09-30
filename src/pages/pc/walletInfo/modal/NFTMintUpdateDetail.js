import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class NFTMintUpdateDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyData : [
                { price : '0.123845658544 ETH', buyer : 'WWWWSWWDDWESFWWWWDAD', saler : 'WWWWSWWDDWESFWWWWDAD', completeTime : '2023.01.01. 12:23:14'},
                { price : '0.123845658544 ETH', buyer : 'WWWWSWWDDWESFWWWWDAD', saler : 'WWWWSWWDDWESFWWWWDAD', completeTime : '2023.01.01. 12:23:14'}
            ]
        }
    }
    componentDidMount() {

    }

    linkPage = (pageRouter, data) => {
        this.props.history.push({
            pathname: pageRouter,
            nftInfo : data
        });
    }

    render() {
        const nftInfo = this.props.Info;
        return (
            nftInfo &&
            <div className="modal fade" id="NFTGenerateDetail" role="dialog">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content p-5">
                        <div>
                            <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">닫기</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-dismiss="modal" onClick={() => this.linkPage("/generateSale", nftInfo)}>판매</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-dismiss="modal" onClick={() => this.linkPage("/generateUpdate", nftInfo)}>수정</button>
                        </div>
                        <div className="d-flex pt-4 mb-3">
                            <div className="col-md-3 img-pane">
                                {/* <img src="image/image7.png" className="updateModalImg" alt=""/> */}
                                {
                                    nftInfo.category === "Image" && <img className="updateModalImg" src={nftInfo.content}/>
                                }
                                {
                                    nftInfo.category === "Video" && <video controls className="updateModalImg"> 
                                        <source type="video/mp4" src={nftInfo.content} /> 
                                    </video>
                                }
                            </div>
                            <div className="col-md-9 pr-0">
                                <div className="d-flex pt-1 pb-1 modal_info_header">
                                    <div className="col-md-3 text-center font-weight-bold">카테고리</div>
                                    <div className="col-md-3 text-center font-weight-bold">NFT ID</div>
                                    <div className="col-md-3 text-center font-weight-bold">NFT 이름</div>
                                    <div className="col-md-3 text-center font-weight-bold">발행 시각</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">{nftInfo.category}</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">{nftInfo.id}</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">{nftInfo.NFTName}</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold">{nftInfo.generate_time}</div>
                                </div>
                                <div className="d-flex modal_info_body modad_info_color_f5f8ff">
                                    <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">소유자 지갑주소</div>
                                    <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">상태</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold modal_info_body_border_right text_underLine">{nftInfo.mintedWalletAddress}</div>
                                    <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold"  style={{color : '#064092'}}>{nftInfo.state}</div>
                                </div>
                                <div className="d-flex modal_info_body modad_info_color_f5f8ff">
                                    <div className="pt-1 pb-1 text-center col-md-12 font-weight-bold">설명</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="pt-2 pb-2 text-left col-md-12 font-weight-bold" style={{minHeight : '80px'}}>{nftInfo.description}</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="w-100">
                            <p className="d-flex font-bold history_text">히스토리</p>
                            <div className="d-flex pt-1 pb-1 modal_info_header">
                                <div className="col-md-2 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">판매 가격</div>
                                <div className="col-md-4 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">구매자</div>
                                <div className="col-md-4 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">판매자</div>
                                <div className="col-md-2 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">판매 완료시각</div>
                            </div>
                            {
                                this.state.historyData.map((item,index) => {
                                    return(
                                        <div className="d-flex modal_info_body" key={index}>
                                            <div className="col-md-2 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold" style={{color : '#064092'}}>{item.price}</div>
                                            <div className="col-md-4 pl-0 pr-0 pt-4 pb-4 text-center text_underLine font-weight-bold">{item.buyer}</div>
                                            <div className="col-md-4 pl-0 pr-0 pt-4 pb-4 text-center text_underLine font-weight-bold">{item.saler}</div>
                                            <div className="col-md-2 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold">{item.completeTime}</div>
                                        </div>
                                    )
                                })
                            }
                        </div> */}
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(NFTMintUpdateDetail)
