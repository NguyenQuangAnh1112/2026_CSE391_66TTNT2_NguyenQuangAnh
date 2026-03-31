export default function TopBody({ onOpen }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <p className="m-0 fs-2 fw-bold text-dark">Danh sách nhân sự</p>
      <button type="button" className="btn btn-primary" onClick={onOpen}>
        + Thêm mới
      </button>
    </div>
  );
}
