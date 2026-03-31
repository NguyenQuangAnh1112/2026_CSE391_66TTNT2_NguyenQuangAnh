export default function LeftNavBar() {
  return (
    <div className="py-3 d-flex justify-content-between align-items-center">
      <h3 className="text-white m-0">Quản lý nhân sự</h3>

      <ul className="nav m-0">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Trang chủ
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">
            Liên hệ
          </a>
        </li>
      </ul>
    </div>
  );
}
