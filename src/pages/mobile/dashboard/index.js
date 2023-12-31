import React, { Component } from "react";
import { getSaleNFTs } from "../../../services/serverHook";
import "../../../assets/css/pages/mobile/dashboard.css"
import MobileBoxTable from "../../../components/MobileBoxTable/MobileBoxTable";
import NFTBuyModal from "../walletInfo/modal/NFTBuyModal";
import { AppContext } from "../../../AppContext";

class Mobile_Dashboard extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            tableData : [
            ],
            datableDataHeader : [
                { name : 'NFT 이름', field : 'name', sortable : true },
                { name : '거래가격', field : 'price', sortable : true },
                { name : '판매등록시각', field : 'date', sortable : true },
            ],
            ImageTableData : [],
            VideoTableData : [],
            isAuthenticated : false,
            viewMethods : 'all'
        }
    }
    componentDidMount() {
        getSaleNFTs(this.state.viewMethods).then(data => {
            let imageData = [], videoData = [];
            const saleData = data.map((nftData) => {
                const { createdAt, updatedAt, description, mediaIpfs, mediaType, name, tokenID, mintStatus, id, category, mintedWalletAddress, salePrice, mintedWalletType } = nftData

                if(nftData.mediaType === "Image") {
                    imageData.push({
                        image :  `https://ipfs.io/ipfs/${mediaIpfs}`,
                        name,
                        price: salePrice.toString(),
                        date : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate(),

                        content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                        content_modal : 'NFTSaleUpdateDetail',
                        category : mediaType,
                        id : tokenID,
                        NFTName : name,
                        createTime : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate() + " " + new Date(updatedAt).getHours() + ":" + new Date(updatedAt).getMinutes() + ":" + new Date(updatedAt).getSeconds(),
                        state : mintStatus,
                        update_button : 'saleUpdate',
                        sale_button : 'generateSale',
                        dbID : id,
                        categoryOfMintpage : category,
                        description,
                        mintedWalletAddress,
                        mintStatus,
                        mintedWalletType
                    })
                } else if(nftData.mediaType === "Video") {
                    videoData.push({
                        image :  `https://ipfs.io/ipfs/${mediaIpfs}`,
                        name,
                        price: salePrice.toString(),
                        date : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate(),

                        content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                        content_modal : 'NFTSaleUpdateDetail',
                        category : mediaType,
                        id : tokenID,
                        NFTName : name,
                        createTime : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate() + " " + new Date(updatedAt).getHours() + ":" + new Date(updatedAt).getMinutes() + ":" + new Date(updatedAt).getSeconds(),
                        state : mintStatus,
                        update_button : 'saleUpdate',
                        sale_button : 'generateSale',
                        dbID : id,
                        categoryOfMintpage : category,
                        description,
                        mintedWalletAddress,
                        mintStatus,
                        mintedWalletType
                    })
                }
            })
            this.setState({
                tableData : [...imageData, ...videoData],
                ImageTableData : imageData,
                VideoTableData : videoData
            })
        })
    }

    onChangeViewMethod(data) {
        this.setState({viewMethods : data});
    }

    onLogin() {
        this.props.history.push("/login");
    }

    render() {
        const { wallet, connectedWalletType, loginDate } = this.context;
        let islogged = (wallet && connectedWalletType) ? true : false
        return (
            <div className="pt-2">
                <p className="mobile-sub-title">{ !islogged ? 'NFT 마켓플레이스' : 'NFT 구매'}</p>
                <div className="d-flex justify-content-between mt-2 pl-1 pr-1">
                    <button className={this.state.viewMethods !== 'All' ? 'viewButton' : 'viewButton viewButtonActive'} onClick={this.onChangeViewMethod.bind(this,'All')}>전체</button>
                    <button className={this.state.viewMethods !== 'Image' ? 'viewButton' : 'viewButton viewButtonActive'} onClick={this.onChangeViewMethod.bind(this,'Image')}>이미지</button>
                    <button className={this.state.viewMethods !== 'Video' ? 'viewButton' : 'viewButton viewButtonActive'} onClick={this.onChangeViewMethod.bind(this,'Video')}>동영상</button>
                </div>
                <div className="mt-2 pl-1">
                    <div className="col-md-12 pl-0 pr-0">
                        <MobileBoxTable header={this.state.datableDataHeader} num={5} data={this.state.viewMethods === "all" ? this.state.tableData :  this.state.viewMethods === "Video" ? this.state.VideoTableData : this.state.ImageTableData } state={islogged}/>
                    </div>
                    <div className="modal fade" id="login" role="dialog">
                        <div className="modal-dialog modal-sm modal-dialog-centered">
                            <div className="modal-content login_modal p-4 mt-7 pt-3">
                                <div className="d-flex justify-content-center mb-2">
                                    <i className="fa fa-exclamation mobileLoginIcon"></i>
                                </div>
                                <div className="d-flex justify-content-center mb-3">
                                    <p className="text-white">로그인을 진행해주세요.</p>
                                </div>
                                <button className="btn loginButton" onClick={this.onLogin.bind(this)} data-dismiss="modal">로그인</button>
                            </div>
                        </div>
                    </div>
                    <NFTBuyModal/>
                </div>
            </div>
        );
    }
}

export default Mobile_Dashboard
