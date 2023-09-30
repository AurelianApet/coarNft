import React, { Component } from "react";
class NFTBuyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTBuyModal" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-end pb-2  mb-2">
                            <button type="button" className="btn btn-mobile-default modal_button_primary float-right" data-toggle="modal" data-target="#NFTBuyConfirmModal">구매</button>
                            <button type="button" className="btn btn-mobile-default modal_button_close float-right ml-2" data-dismiss="modal">닫기</button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src="image/image7.png" className="NFTupdateModalImg" alt=""/>
                        </div>
                        <div className="pt-4">
                            <div className="coloredTd" style={{borderTop : '1px solid lightgrey'}}>
                                <div className="col-md-3 text-center">카테고리</div>
                                <div className="col-md-3 text-center">NFT ID</div>
                                <div className="col-md-3 text-center">NFT 이름</div>
                                <div className="col-md-3 text-center">발행 시각</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-3 text-center"></div>
                                <div className="col-md-3 text-center"></div>
                                <div className="col-md-3 text-center"></div>
                                <div className="col-md-3 text-center"></div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-9 text-center">소유자 지갑주소</div>
                                <div className="col-md-3 text-center">판매 가격</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-9 text-center" style={{textDecoration : 'underline'}}></div>
                                <div className="col-md-3 text-center"></div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-12 text-center">설명</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-12 text-center"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTBuyModal
