import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <ul style={listStyle}>
        <li>
          <a style={linkStyle} href="https://github.com/sks8960">
            Github
          </a>
        </li>
        <li>
          <a
            style={linkStyle}
            href="https://www.notion.so/1cf5e4929a64400db22769ca0379efe1"
          >
            Notion
          </a>
        </li>
        <li>
          <a style={linkStyle} href="https://stackoverflow.com/">
            StackOverFlow
          </a>
        </li>
        <li>
          <a style={linkStyle} href="https://react-bootstrap.netlify.app/">
            React BootStrap
          </a>
        </li>
        <li>
          <a style={linkStyle} href="https://ko.legacy.reactjs.org/">
            React Doc
          </a>
        </li>
        {/* 필요한 만큼 더 많은 링크를 추가하세요 */}
      </ul>
    </footer>
  );
}

// 스타일 객체를 만듭니다.
const footerStyle: React.CSSProperties = {
  bottom: 0, // 화면 하단에 배치
  width: "100%", // 가로 폭 100%
  background: "#333",
  color: "#fff",
  padding: "10px", // 원하는 여백 설정
  textAlign: "center",
  position: "fixed",
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  padding: 0,
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  margin: "0 50px",
  textDecoration: "none",
};

export default Footer;
