import TdxLogo from "../../asset/tdxlogo.png";

export default function Footer() {
  return (
    <footer className="fixed-bottom d-flex flex-wrap justify-content-center align-items-center fs-4 p-4 fw-light gap-1">
      Taiwan Bus ©
      <div className="d-flex align-items-center gap-1">
        Code:
        <a
          href="https://github.com/JohnsonMao/taiwan_bus"
          target="_blank"
          rel="noreferrer"
        >
          Mao
        </a>
      </div>
      /
      <div className="d-flex align-items-center gap-1">
        Design:
        <a
          href="https://www.behance.net/gallery/131646273/Taiwan-Bus-Project"
          target="_blank"
          rel="noreferrer"
        >
          KT
        </a>
      </div>
      /
      <div className="d-flex align-items-center gap-1">
        資料介接
        <a
          href="https://tdx.transportdata.tw/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={TdxLogo}
            alt="交通部TDX平臺 Logo"
            width={120}
            className="bg-white rounded"
          />
        </a>
      </div>
    </footer>
  );
}
