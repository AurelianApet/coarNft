import React, { Component } from "react";
import Table from "../../../../components/mobile/mobile_table";
import STable from "../../../../components/mobile/mobile_standard_table";
import FullTable from "../../../../components/mobile/mobile_full_table";
import NFTUpdateModal from "./NFTUpdateModal";

class NFTGenerateDetailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datableDataHeader : [
                { name : '카테고리', field : 'category', sortable : false},
                { name : 'NFT ID', field : 'id', sortable : false},
                { name : 'NFT 이름', field : 'NFTName', sortable : false},
                { name : '발행 시각', field : 'generate_time', sortable : false},
            ],
            tableData : [
            ],
            historyTableHeader : [
                { name : '판매가격', field : 'price', sortable : false,width : '150px' },
                { name : '구매자', field : 'buyer', sortable : false,width : '180px' },
                { name : '판매자', field : 'seller', sortable : false,width : '180px' },
                { name : '판매 완료시각', field : 'endTime', sortable : false,width : '180px' },
            ],
            historyTableData : [
            ],
            num : 5
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTGenerateDetailModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-around pb-2  mb-2">
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-dismiss="modal"  data-toggle="modal" data-target='#NFTUpdateModal'>수정</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right">판매</button>
                            <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">닫기</button>
                        </div>
                        <div className="d-flex justify-content-center pt-2 pb-2">
                            <div className="NFTGenerateDetailModalImg">
                                <img src="image/image7.png" className="" alt=""/>
                            </div>
                        </div>
                        <div className="mt-2 mb-2">
                            <FullTable data={this.state.tableData} num={this.state.num} header={this.state.datableDataHeader}/>
                        </div>
                        <p className="font-weight-bold" style={{fontWeight : 'bold'}}>히스토리</p>
                        <div className="table-responsive mt-2 mobile_tab">
                            <STable data={this.state.historyTableData} num={this.state.num} header={this.state.historyTableHeader}/>
                        </div>
                    </div>
                    <NFTUpdateModal/>
                </div>
            </div>
        );
    }
}

export default NFTGenerateDetailModal
