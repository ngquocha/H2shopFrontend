import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 single-footer-widget">
            <img src="https://fashionshop.h2-inc.com/wp-content/themes/airi/images/raw/Path25.png" alt="" />
              <br/>
              <br/>
              <ul>
                <li><a >Chúng tôi chuyên cung cấp các sản phẩm thời trang chất lượng cao, từ quần áo công sở đến trang phục thường ngày, phù hợp với mọi phong cách. Với cam kết mang đến sự hài lòng cho khách hàng, chúng tôi luôn cập nhật những xu hướng mới nhất và đảm bảo dịch vụ chăm sóc khách hàng tốt nhất.</a></li>
                
                <div class="icon_social">
                  <a href>
                  <img src="https://fashionshop.h2-inc.com/wp-content/themes/airi/images/raw/iconfinder_06-facebook_104498.png" alt="" />
                  </a>
                  <a href>
                  <img src="https://fashionshop.h2-inc.com/wp-content/themes/airi/images/raw/iconfinder_03-twitter_104501.png" alt="" />
                  </a>
                  <a href>
                  <img src="https://fashionshop.h2-inc.com/wp-content/themes/airi/images/raw/XMLID_184_.png" alt="" />
                  </a>
                  <a href>
                  <img src="https://fashionshop.h2-inc.com/wp-content/themes/airi/images/raw/iconfinder_38-instagram_104466.png" alt="" />
                  </a>
                </div>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>SHOPPING WITH US</h4>
              <ul>
                <li><a href="#">My Account</a></li><br/>
                <li><a href="#">Shipping And Tracking</a></li><br/>
                <li><a href="#">Return & Exchanges</a></li><br/>
                <li><a href="#">Payment</a></li><br/>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>ABOUT US</h4>
              <ul>
                <li><a href="#">Store Locator</a></li><br/>
                <li><a href="#">Brand Profile</a></li><br/>
                <li><a href="#">Sustaninability</a></li><br/>
                <li><a href="#">Affiliates</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>HELP</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact</a></li>
                
              </ul>
            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            {/* <p className="footer-text m-0 col-lg-8 col-md-12">
              Bản quyền ©2024 Đồ án tốt nghiệp của Nguyễn Quốc Hà <i className="fa fa-heart-o" aria-hidden="true" />  <a href="https://colorlib.com" target="_blank"></a>
             </p> */}

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;