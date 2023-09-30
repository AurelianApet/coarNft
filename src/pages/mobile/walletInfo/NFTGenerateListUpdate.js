import React, { Component } from "react";
import {Link} from "react-router-dom";
import { AppContext } from "../../../AppContext";
import "../../../assets/css/pages/mobile/generate.css"
import { saveNFTUpdates } from "../../../services/serverHook";
import { title } from "../../../services/title";

class NFTGenerateListUpdate extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        console.log("mobilemintedUpdate", props)
        const nftInfo = props.location.nftInfo
        this.state = {
            category : nftInfo.categoryOfMintpage ? nftInfo.categoryOfMintpage : "category1",
            name : nftInfo.NFTName,
            description : nftInfo.description,
            mediaIpfs: nftInfo.content,
            mediaType: nftInfo.category,
            dbID: nftInfo.dbID
        }
    }
    componentDidMount() {

    }

    onNameChange = async (e) => {
        this.setState({
            name : e.target.value
        })
        console.log("state", this.state)
    }

    onDescriptionChange = async (e) => {
        this.setState({
            description : e.target.value
        })
    }

    onCategoryChange = async (e) => {
        this.setState({
            category : e.target.value
        })
    }

    onSaveUpdates = async () => {
        const { setNotification } = this.context;
        saveNFTUpdates(this.state.dbID, this.state.name, this.state.category, this.state.description).then(res => {
            if(res) {
                setNotification({
                    status: "success",
                    title: title.saveSuccess
                })
                this.props.history.push("/NFTGenerateList");
            } else {
                setNotification({
                    status: "fail",
                    title: title.saveFail
                })
                this.props.history.push("/NFTGenerateList");
            }
        })
    }
    
    render() {
        return (
                <div className="pt-4 pl-1 pr-1">
                    <div className="d-flex justify-content-between pb-3  mb-3 mt-3" style={{borderBottom : '1px solid lightgrey'}}>
                        <p className="mobile_generate_update_header_text">
                            NFT 수정하기
                        </p>
                        <div className="d-flex">
                            <button type="button" className="btn btn-mobile-default modal_button_primary float-right mr-3" onClick={this.onSaveUpdates}>수정</button>
                            <Link to={'/NFTGenerateList'} className="btn btn-mobile-default modal_button_close float-right">닫기</Link>
                        </div>
                    </div>
                    <div className="NFTGenerateListUpdateImgDiv pt-4 pb-3">
                        <div className="d-flex justify-content-center">
                            <div className="mobile-NFTGenerate-update-img">
                                {
                                    this.state.mediaType === "Image" && <img src={this.state.mediaIpfs}/>
                                }
                                {
                                    this.state.mediaType === "Video" && <video controls> 
                                        <source type="video/mp4" src={this.state.mediaIpfs} /> 
                                    </video>
                                }
                            </div>
                        </div>
                        {/* <p className="text-center font-weight-bold mb-1 mt-1"></p> */}
                        <p className="text-center font-weight-bold">콘텐츠 수정은 불가능합니다.</p>
                    </div>
                    <div className="pt-4">
                        <p className="mb-2 font-weight-bold pl-2">카테고리</p>
                        <select name="" id="" className="form-control form-control-sm form-control-input pl-2 font-size-13" onChange={this.onCategoryChange} value={this.state.category}>
                            <option value="category1">이미지</option>
                            <option value="category2">동영상</option>
                        </select>
                        <p className="mb-2 mt-3 font-weight-bold pl-2">이름</p>
                        <input placeholder="이름을 입력해주세요." className="form-control form-control-sm form-control-input pl-2 font-size-13" onChange={this.onNameChange} value={this.state.name} />
                        <p className="mb-2 mt-3 font-weight-bold pl-2">설명</p>
                        <textarea placeholder="설명을 적어주세요." rows="5" className="form-control form-control-sm form-control-input pl-2 font-size-13" onChange={this.onDescriptionChange} value={this.state.description} />
                    </div>
                </div>
        );
    }
}

export default NFTGenerateListUpdate
