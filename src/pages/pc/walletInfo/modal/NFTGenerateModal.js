import React, { Component } from "react";
import uploadImg from './upload_icon.png'
class NFTGenerateModal extends Component {
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
    componentWillReceiveProps(nextProps) {
        document.getElementById('upload_img').src = "image/pages/walletInfo/upload_icon.png";
        // this.props is not changed status yet.
    }
    onClickUpload() {
        document.getElementById('fileupload').click();
    }

    encodeImageFileAsURL() {
        var filesSelected = document.getElementById('fileupload').files;
        let srcData;
        if (filesSelected.length > 0) {
            let fileToLoad = filesSelected[0];
            let fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                srcData = fileLoadedEvent.target.result; // <--- data: base64
                document.getElementById('upload_img').src = srcData;
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    render() {
        return (
            <div className="modal fade" id="NFTGenerateModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-between pb-3  mb-3" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold modal-header-text">
                                NFT 발행하기
                            </p>
                            <div>
                                <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">닫기</button>
                                <button type="button" className="btn btn-default modal_button modal_button_primary float-right">발행</button>
                            </div>
                        </div>
                        <div className="NFTUpdateModalImageDiv pt-20 pb-4">
                            <div className="d-flex justify-content-center mb-3">
                                <img src={uploadImg} onClick={this.onClickUpload.bind(this)} id="upload_img" className="upload_icon cursor-pointer" alt=""/>
                            </div>
                            <input type="file" id={'fileupload'} hidden={true} onChange={this.encodeImageFileAsURL.bind(this)}/>
                            <p className="text-center mb-1 mt-1">업로드 가능한 파일 형태 : JPG, PNG, MP4, max size: 50MB</p>
                            <p className="text-center font-weight-bold">이미지 또는 동영상을 업로드해주세요.</p>
                        </div>
                        <div className="pt-4">
                            <p className="mb-2 font-weight-bold">카테고리</p>
                            <select name="" id="" className="form-control form-control-sm form-control-input">
                                <option value="">이미지</option>
                                <option value="">동영상</option>
                            </select>
                            <p className="mb-2 mt-3 font-weight-bold">이름</p>
                            <input placeholder="이름을 입력해주세요." className="form-control form-control-sm form-control-input" />
                            <p className="mb-2 mt-3 font-weight-bold">설명</p>
                            <textarea placeholder="설명을 적어주세요." rows="5" className="form-control form-control-sm form-control-input" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTGenerateModal
