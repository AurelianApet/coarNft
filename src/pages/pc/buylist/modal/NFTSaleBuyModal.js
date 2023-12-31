import React, { Component } from "react";

class NFTSaleBuyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTSaleBuyModal" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4 modal_backgroundColor pl-5 pr-5 pt-4">
                        <div className="d-flex justify-content-center mt-2">
                            <i className="fa fa-exclamation mainicon"></i>
                        </div>
                        <p className="text-white text-center mt-3" style={{fontSize : '18px'}}>해당 NFT를 구매합니다.</p>
                        <button className="btn buyButton mt-4" data-dismiss="modal">구매</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NFTSaleBuyModal
