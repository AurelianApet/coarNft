import React, { Component } from "react";
class NFTUpdate extends Component {
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
            <div className="modal fade" id="NFTUpdateModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-between pb-3  mb-3" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold modal-header-text">
                                NFT 수정하기
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
                            <p className="text-center font-weight-bold mb-1 mt-1"></p>
                            <p className="text-center font-weight-bold">콘텐츠 수정은 불가능합니다.</p>
                        </div>
                        <div className="pt-4">
                            <p className="mb-2 font-weight-bold">카테고리</p>
                            <select name="" id="" className="form-control form-control-sm form-control-input pl-2">
                                <option value="">이미지</option>
                                <option value="">동영상</option>
                            </select>
                            <p className="mb-2 mt-3 font-weight-bold">이름</p>
                            <input placeholder="이름을 입력해주세요." className="form-control form-control-sm form-control-input pl-2" />
                            <p className="mb-2 mt-3 font-weight-bold">설명</p>
                            <textarea placeholder="설명을 적어주세요." rows="5" className="form-control form-control-sm form-control-input pl-2" />
                            {/*<input type="text" className="form-control form-control-sm form-control-input"/>*/}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTUpdate
