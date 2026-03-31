export default function FooterModal({ onClose, onSave, saveLabel = "Lưu" }) {
  return (
    <div className="border-top p-3 d-flex justify-content-end bg-white rounded-bottom">
      <button
        type="button"
        className="btn btn-secondary px-3 me-2"
        onClick={onClose}
      >
        Hủy
      </button>
      <button type="button" className="btn btn-success px-3 py-1" onClick={onSave}>
        {saveLabel}
      </button>
    </div>
  );
}
