export default function TopModal({ onClose, title = "Thêm nhân sự mới" }) {
  return (
    <div className="bg-primary text-white d-flex justify-content-between align-items-center p-3 rounded-top">
      <p className="m-0 fs-5 fw-semibold">{title}</p>
      <button
        type="button"
        className="btn-close btn-close-white"
        onClick={onClose}
      ></button>
    </div>
  );
top}
