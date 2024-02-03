import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="img2-container">
        <img src="wechatPhone.png" className="img2" />
        <img src="wechatLogo.png" className="img3" />
        <img src="wechatSlogan.png" className="img4" />
      </div>
      <button className="apple-button"></button>
      <button className="mac-button"></button>
      <button className="android-button"></button>
      <button className="microsoft-button"></button>

      {/* Footer */}
      <footer className="footer">
        <hr className="footer-line" />
        <div className="footer-links">
          <p className="footer-about">About</p>
          <p className="footer-support">Support</p>
          <p className="footer-platform">Platform</p>
          <p className="footer-english">English</p>
          <p className="footer-copyright">
            Copyright © 2012-2024 WeChat. All Rights Reserved.
          </p>
          <p>Terms of Service</p>
          <p>|</p>
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Acceptable Use Policy</p>
          <p>|</p>
          <img src="facebook.png" className="img5"></img>
          <img src="twitter.png" className="img6"></img>
        </div>
      </footer>
    </div>
  );
}
