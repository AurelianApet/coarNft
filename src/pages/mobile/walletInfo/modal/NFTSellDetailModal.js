import React, { Component } from "react";
import STable from "../../../../components/mobile/mobile_table";

class NFTSellDetailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datableDataHeader : [
                { name : '카테고리', field : 'category', sortable : false },
                { name : 'NFT ID', field : 'id', sortable : false },
                { name : 'NFT 이름', field : 'NFTName', sortable : false },
                { name : '판매 등록시각', field : 'generate_time', sortable : false },
            ],
            tableData : [
            ],
            historyTableHeader : [
                { name : '판매 가격', field : 'price', sortable : false,width : '150px' },
                { name : '구매자', field : 'buyer', sortable : false,width : '180px' },
                { name : '소유자', field : 'seller', sortable : false,width : '180px' },
                { name : '판매 완료시각', field : 'endTime', sortable : false,width : '180px' },
            ],
            historyTableData : [
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
            ],
            num : 5
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTSellDetailModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-around pb-2  mb-2">
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right" >중지</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right">수정</button>
                            <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">닫기</button>
                        </div>
                        <div className="d-flex justify-content-center pt-2 pb-2">
                            <div className="NFTGenerateDetailModalImg">
                                <img src="image/image7.png" className="" alt=""/>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="mb-2 mt-3 font-weight-bold">NFT 상세정보</p>
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
                                <div className="col-md-3 text-center">상태</div>
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
                        <p className="font-weight-bold mt-2" style={{fontWeight : 'bold'}}>히스토리</p>
                        <div className="table-responsive mt-2 mobile_tab">
                            <STable data={this.state.historyTableData} num={this.state.num} header={this.state.historyTableHeader}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NFTSellDetailModal
