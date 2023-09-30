import React, { Component } from "react";

class NFTSaleUpdatePiceStop extends Component {
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

    render() {
        return (
            <div className="modal fade" id="NFTSaleUpdatePiceStop" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content p-4 mt-7">
                        <div>
                            <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">닫기</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right">가격수정</button>
                        </div>
                        <div className="d-flex pt-3 mb-5">
                            <div className="col-md-3 p-0 pr-3">
                                <img src="image/image7.png" className="updateModalImg" alt=""/>
                            </div>
                            <div className="col-md-9">
                                <div className="row pt-1 pb-1 modal_info_header">
                                    <div className="col-md-3 text-center">카테고리</div>
                                    <div className="col-md-3 text-center">NFT ID</div>
                                    <div className="col-md-3 text-center">NFT 이름</div>
                                    <div className="col-md-3 text-center">발행 시각</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="col-md-3 text-center pt-3 pb-3 modal_info_body_border_right"></div>
                                    <div className="col-md-3 text-center pt-3 pb-3 modal_info_body_border_right"></div>
                                    <div className="col-md-3 text-center pt-3 pb-3 modal_info_body_border_right"></div>
                                    <div className="col-md-3 text-center pt-3 pb-3"></div>
                                </div>
                                <div className="row modal_info_body modad_info_color_f5f8ff">
                                    <div className="col-md-6 pt-1 pb-1 text-center">소유자 지갑주소</div>
                                    <div className="col-md-3 pt-1 pb-1 text-center">상태</div>
                                    <div className="col-md-3 pt-1 pb-1 text-center">상태</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="col-md-6 pt-3 pb-3 text-center modal_info_body_border_right text_underLine"></div>
                                    <div className="col-md-3 pt-3 pb-3 text-center modal_info_body_border_right" style={{color : '#083f92'}}></div>
                                    <div className="col-md-3 pt-3 pb-3 text-center" style={{color : '#083f92'}}></div>
                                </div>
                                <div className="row modal_info_body modad_info_color_f5f8ff">
                                    <div className="pt-1 pb-1 text-center col-md-12">설명</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="pt-2 pb-2 text-left col-md-12"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p className="row font-weight-bold history_text">히스토리</p>
                            <div className="row pt-1 pb-1 modal_info_header">
                                <div className="col-md-3 text-center">판매 가격</div>
                                <div className="col-md-3 text-center">구매자</div>
                                <div className="col-md-3 text-center">판매자</div>
                                <div className="col-md-3 text-center">판매 완료시각</div>
                            </div>
                            {
                                this.state.historyData.map((item,index) => {
                                    return(
                                        <div className="row modal_info_body" key={index}>
                                            <div className="col-md-3 pt-1 pb-1 text-center modal_info_body_border_right">{item.price}</div>
                                            <div className="col-md-3 pt-1 pb-1 text-center modal_info_body_border_right text_underLine">{item.buyer}</div>
                                            <div className="col-md-3 pt-1 pb-1 text-center modal_info_body_border_right text_underLine">{item.saler}</div>
                                            <div className="col-md-3 pt-1 pb-1 text-center">{item.completeTime}</div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTSaleUpdatePiceStop
