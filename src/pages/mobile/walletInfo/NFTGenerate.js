import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../../../assets/css/pages/generate.css"
import { saveFileToPinata } from "../../../services/ipfs";
import { mintNFT } from "../../../services/contract";
import { AppContext } from "../../../AppContext";
import { insertNewNFT } from "../../../services/serverHook";
import { title } from "../../../services/title";
import LoadingScreen from "react-loading-screen";

class NFTGenerate extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            progress : false,
            fileData : null,
            fileType : null,
            category : "category1",
            name : null,
            description : null,
            minting : false
        }
    }

    onClickUpload() {
        document.getElementById('fileupload').click();
    }

    encodeImageFileAsURL() {
        let self = this;
        let filesSelected = document.getElementById('fileupload').files;

        this.setState({progress : true});
        setTimeout(onProgress, 100);

        function onProgress () {
            let elem = document.getElementById("bar");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    self.setState({progress : false});
                    clearInterval(id);
                    setTimeout(self.fileLoadHTML(filesSelected), 100);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }
    }

    fileLoadHTML (filesSelected) {
        let self = this;
        let srcData;
        if (filesSelected.length > 0) {
            let fileToLoad = filesSelected[0];
            let srcType = fileToLoad.type;
            let fileType;
            if(srcType === "image/png" || srcType === "image/jpeg") fileType = "Image";
            else if(srcType === "video/mp4") fileType = "Video";
            else alert("이미지 또는 동영상을 업로드해주세요.")

            let fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                srcData = fileLoadedEvent.target.result; // <--- data: base64
                self.setState(prevState => ({
                    ...prevState,
                    fileData: srcData,
                    fileType
                }))
                // document.getElementById('upload_img').src = srcData;
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    async mintNFT() {
        this.setState({
            minting: true
        })
        const { wallet, connectedWalletType, setNotification } = this.context;
        let blob, metadata;
        if(this.state.fileType === "Image") {
            const base64Data = Buffer.from(
                this.state.fileData.replace(/^data:image\/\w+;base64,/, ""),
                "base64"
            );
            blob = new Blob([base64Data], { type: "image/jpeg" });
        } else if(this.state.fileType === "Video") {
            const base64Data = Buffer.from(
                this.state.fileData.replace(/^data:video\/mp4;base64,/, ""),
                "base64"
            );
            blob = new Blob([base64Data], { type: "video/mp4" });
        }
        
        /// will upload template image for video NFT
        let mediaIpfs = await saveFileToPinata(blob, "CoarNFT_media_"+ Date.now() + "_" + this.state.fileType) //res.IpfsHash
        console.log("Res", mediaIpfs)
        if(this.state.fileType === "Image") {
            metadata = {
                name: "CoarN2EToken",
                description: "This is CoarN2E NFT Collection",
                image: `ipfs://${mediaIpfs.IpfsHash}`,
                attributes : [
                    {
                        "trait_type": "Category",
                        "value": this.state.fileType
                    }
                ]
            }
        } else if(this.state.fileType === "Video") {
            metadata = {
                name: "CoarN2EToken",
                description: "This is CoarN2E NFT Collection",
                animation_url: `ipfs://${mediaIpfs.IpfsHash}`,
                attributes : [
                    {
                        "trait_type": "Category",
                        "value": this.state.fileType
                    }
                ]
            }
        }

        const str = JSON.stringify(metadata)
        const metaDataHash = await saveFileToPinata(
            new Blob([str]),
            "CoarNFT_metadata_" + Date.now() + ".json",
        )
        const metadataIpfs = metaDataHash.IpfsHash // sample video https://ipfs.io/ipfs/QmSYYPBNhYCLbDHDTmjbn4VXoVPg3Mfi4cmDFBEuPbJ3N7
            
        console.log("before mint", metadataIpfs, wallet, connectedWalletType)
        let resMint = await mintNFT(metadataIpfs, wallet, connectedWalletType);
        if(resMint) {
            const { txHash, tokenId } = resMint
            let isSuccess = await insertNewNFT(mediaIpfs.IpfsHash, this.state.fileType, this.state.name, this.state.category, this.state.description, wallet, connectedWalletType, txHash, tokenId)
            this.setState({
                minting: false
            })
            if(isSuccess) {
                setNotification({
                    status: "success",
                    title: title.mintSuccess
                })
            } else {
                setNotification({
                    status: "fail",
                    title: title.mintFail
                })
            }
            this.props.history.push("/NFTGenerateList")
        } else {
            this.setState({
                minting: false
            })
            setNotification({
                status: "fail",
                title: title.mintFail
            })
            this.props.history.push("/NFTGenerateList")
        }
        ////////////////////////////////////////////////////////
    }

    onNameChange = async (e) => {
        this.setState(prevState => ({
            ...prevState,
            name : e.target.value
        }))
    }

    onDescriptionChange = async (e) => {
        this.setState(prevState => ({
            ...prevState,
            description : e.target.value
        }))
    }

    onCategoryChange = async (e) => {
        this.setState(prevState => ({
            ...prevState,
            category : e.target.value
        }))
    }

    render() {
        return (
            <>
                <div className="pt-4 pl-1 pr-1">
                    <div className="d-flex justify-content-between pb-3  mb-3 mt-3" style={{borderBottom : '1px solid lightgrey'}}>
                        <p className="mobile_generate_update_header_text">
                            NFT 발행하기
                        </p>
                        <div className="d-flex">
                            <button type="button" className="btn btn-mobile-default modal_button_primary float-right mr-3" disabled={!(this.state.fileData && this.state.fileType)} onClick={this.mintNFT.bind(this)}>발행</button>
                            <Link to={'/NFTGenerateList'} className="btn btn-mobile-default modal_button_close float-right">닫기</Link>
                        </div>
                    </div>
                    <div className="NFTGenerateListUpdateImgDiv pt-5 pb-4">
                        <div className="d-flex justify-content-center mt-3">
                        {
                                        this.state.progress === false ?
                                            <div>
                                                <div className="d-flex justify-content-center mb-3">
                                                    {
                                                        this.state.fileType === "Video" ? <video controls> 
                                                                <source type="video/mp4" src={this.state.fileData} /> 
                                                            </video>
                                                        : this.state.fileType === "Image" ? <img src={this.state.fileData}  onClick={this.onClickUpload.bind(this)} id="upload_img" className="upload_icon cursor-pointer" alt=""/>
                                                        : <img src="image/pages/NFTGenerateList/upload_icon.png"  onClick={this.onClickUpload.bind(this)} id="upload_img" className="upload_icon cursor-pointer" alt=""/>
                                                    }
                                                </div>
                                                <input type="file" id={'fileupload'} hidden={true} onInput={this.encodeImageFileAsURL.bind(this)} accept=".jpg,.png,.mp4"/>
                                                <p className="text-center mb-1 mt-4">업로드 가능한 파일 형태 : JPG, PNG, MP4, max size: 50MB</p>
                                                <p className="text-center font-weight-bold mt-2 mb-2" style={{fontSize:'16px'}}>이미지 또는 동영상을 업로드해주세요.</p>
                                            </div>
                                            :
                                            <div className="col-md-8 mt-5">
                                                <p className="text-center mb-2 mt-5">File name.png</p>
                                                <div className="progress">
                                                    <div id="bar"></div>
                                                </div>
                                            </div>
                                    }
                        </div>
                    </div>
                    <div className="pt-4">
                        <p className="mb-2 font-weight-bold pl-2">카테고리</p>
                        <select name="" id="" className="form-control form-control-sm form-control-input pl-2" onChange={this.onCategoryChange}>
                            <option value="category1">이미지</option>
                            <option value="category2">동영상</option>
                        </select>
                        <p className="mb-2 mt-3 font-weight-bold pl-2">이름</p>
                        <input placeholder="이름을 입력해주세요." className="form-control form-control-sm form-control-input pl-2" onChange={this.onNameChange} />
                        <p className="mb-2 mt-3 font-weight-bold pl-2">설명</p>
                        <textarea placeholder="설명을 적어주세요." rows="5" className="form-control form-control-sm form-control-input pl-2" onChange={this.onDescriptionChange} />
                    </div>
                </div>
                { 
                    this.state.minting && <LoadingScreen
                        loading={true}
                        bgColor="rgba(0,0,0,0.7)"
                        spinnerColor="#23b4cb"
                        textColor="white"
                        logoSrc=""
                        text="발행중..."
                    >
                        {""}
                    </LoadingScreen>
                }
            </>
        );
    }
}

export default NFTGenerate
