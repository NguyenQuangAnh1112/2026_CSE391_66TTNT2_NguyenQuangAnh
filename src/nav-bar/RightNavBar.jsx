export default function RightNavBar() {
  return (
    <div className="d-flex align-items-center gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Tìm kiếm..."
        style={{ width: "200px" }}
      />
      <button type="button" className="btn btn-outline-light">
        Tìm
      </button>
    </div>
  );
}
