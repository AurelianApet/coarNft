import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <footer className="d-flex footer text-white pt-lg-5 pb-5">
                <div className='col-md-4 mt-3'>
                    <div className="col-md-6 float-right">
                        <p className='text-[18px] font-bold'>MarketPlace</p>
                        <p className='mt-3'>다양한 NFT를 만나보세요.</p>
                    </div>

                </div>
                <div className='col-md-4 mt-3 pl-32'>
                    <p className='text-[18px] font-bold'>Quick Links</p>
                    <p className='mt-3'>지갑정보</p>
                    <p className='mt-1'>NFT 발행</p>
                    <p className='mt-1'>NFT 판매목록</p>
                    <p className='mt-1'>NFT 판매등록</p>
                </div>
                <div className='col-md-4 mt-3   pl-32'>
                    <p className='text-[18px] font-bold'>대표이사</p>
                    <p className='mt-3'>이정훈</p>
                    <p className='text-[18px] font-bold mt-3'>사업자등록번호</p>
                    <p className='mt-3'>528-88-0008</p>
                    <p className='text-[18px] font-bold mt-3'>FAX</p>
                    <p className='mt-3'>02-302-1128</p>
                    <p className='text-[18px] font-bold mt-3'>주소</p>
                    <p className='mt-3'>서울특별시 마포구 월드컵북로 396 누리꿈스퀘어 연구개발타워 10층 1002호</p>
                </div>
            </footer>
        );
    }
}

export default Footer
