import TopModal from "./TopModal.jsx";
import BodyModal from "./BodyModal.jsx";
import FooterModal from "./FooterModal.jsx";
import { useEffect, useState } from "react";

export default function AddEmployeeModal({ onClose, onSave, isEditMode, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pnumber: "",
    position: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});

    if (initialData) {
      setFormData(initialData);
      return;
    }

    setFormData({
      name: "",
      email: "",
      pnumber: "",
      position: "",
    });
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Họ tên không được để trống.";
    } else if (formData.name.trim().length > 30) {
      nextErrors.name = "Họ tên tối đa 30 ký tự.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email không được để trống.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        nextErrors.email = "Email không đúng định dạng chuẩn.";
      }
    }

    if (!formData.pnumber.trim()) {
      nextErrors.pnumber = "Số điện thoại không được để trống.";
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.pnumber.trim())) {
        nextErrors.pnumber = "Số điện thoại phải gồm đúng 10 chữ số.";
      }
    }

    if (!formData.position.trim()) {
      nextErrors.position = "Vị trí không được để trống.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSave() {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    onSave(formData);
    onClose();
  }

  return (
    <div
      className="d-block modal"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg overflow-hidden">
          <TopModal
            onClose={onClose}
            title={isEditMode ? "Chỉnh sửa nhân sự" : "Thêm nhân sự mới"}
          />
          <BodyModal formData={formData} onChange={handleChange} errors={errors} />
          <FooterModal onClose={onClose} onSave={handleSave} saveLabel={isEditMode ? "Cập nhật" : "Lưu"} />
        </div>
      </div>
    </div>
  );
}
