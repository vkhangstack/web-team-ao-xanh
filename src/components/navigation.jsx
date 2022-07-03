export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/team-ao-xanh.appspot.com/o/images%2Flogo.png?alt=media&token=36046047-f10e-479b-846f-b3c218e54378"
              height="50px"
              width="50px"
              alt=""
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Đặc điểm
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Tham gia
              </a>
            </li>
            <li>
              <a href="#teams" className="page-scroll">
                Thành viên
              </a>
            </li>
            <li>
              <a href="https://facebook.com/teamaoxanh" className="page-scroll">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
