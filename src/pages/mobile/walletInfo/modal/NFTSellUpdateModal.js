import React, { Component } from "react";
class NFTSellUpdateModal extends Component {
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
            <div className="modal fade" id="NFTSellUpdateModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-between pb-2  mb-2" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold">
                                NFT 판매수정
                            </p>
                            <div>
                                <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">닫기</button>
                                <button type="button" className="btn btn-default modal_button modal_button_primary float-right">수정</button>
                            </div>
                        </div>
                        <div className="NFTUpdateModalImageDiv pt-3 pb-3">
                            <div className="d-flex justify-content-center">
                                <img src="image/image7.png" className="NFTupdateModalImg" alt=""/>
                            </div>
                            <p className="text-center mb-1"></p>
                        </div>
                        <div className="pt-4">
                            <p className="mb-2 font-weight-bold">판매가격</p>
                            <input type="text" className="form-control form-control-sm form-control-input mb-2"/>
                            <p className="mb-2 mt-3 font-weight-bold">NFT 상세정보</p>
                            <div className="coloredTd" style={{borderTop : '1px solid lightgrey'}}>
                                <div className="col-md-3 text-center ">카테고리</div>
                                <div className="col-md-3 text-center ">NFT ID</div>
                                <div className="col-md-3 text-center ">NFT 이름</div>
                                <div className="col-md-3 text-center ">판매 등록시각</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-3 text-center "></div>
                                <div className="col-md-3 text-center "></div>
                                <div className="col-md-3 text-center "></div>
                                <div className="col-md-3 text-center "></div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-9 text-center ">소유자 지갑주소</div>
                                <div className="col-md-3 text-center ">현재 판매가격</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-9 text-center " style={{textDecoration : 'underline'}}></div>
                                <div className="col-md-3 text-center "></div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-12 text-center ">설명</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-12 text-center "></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTSellUpdateModal
