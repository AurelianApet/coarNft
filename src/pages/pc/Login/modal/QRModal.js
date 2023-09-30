import React, { Component } from "react";
class QRModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="QRModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <p className="text-center mb-2 font-weight-bold" style={{fontSize : '18px'}}>로그인</p>
                        <div className="pl-5 mb-2">
                            <p className="text-left">1. NFT 앱을 실행하기</p>
                            <p className="text-left">2. QR 코드를 스캔하여 로그인하세요.</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src="./image/pages/login/QR.png" alt="" className="w-50"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QRModal
