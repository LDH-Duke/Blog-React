export default function header_nav(){
    return (
        <div>
            <div className="nav">
                <div className="nav-item-group">
                    <div className="nav-logo">
                        <span className="logo">Just-Do BookStore</span>
                    </div>
                    <div className="nav-categori">
                        <ul>
                            <li><a href="#">여행 리뷰</a></li>
                            <li><a href="#">맛집 리뷰</a></li>
                            <li><a href="#">옷 리뷰</a></li>
                        </ul>
                    </div>
                    <div className="nav-myInfo">
                        <span className="nickname">이동희님</span>
                    </div>
                </div>
            </div>
        </div>
    );
}