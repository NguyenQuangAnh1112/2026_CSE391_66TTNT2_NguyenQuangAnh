export default function BodyModal({ formData, onChange, errors = {} }) {
  return (
    <div className="p-4 bg-white">
      <div className="row g-4">
        <div className="col-md-6">
          <label className="form-label text-muted mb-1">Họ tên</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label text-muted mb-1">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label text-muted mb-1">Số điện thoại</label>
          <input
            type="text"
            className={`form-control ${errors.pnumber ? "is-invalid" : ""}`}
            name="pnumber"
            value={formData.pnumber}
            onChange={onChange}
          />
          {errors.pnumber && <div className="invalid-feedback">{errors.pnumber}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label text-muted mb-1">Vị trí</label>
          <select
            className={`form-select ${errors.position ? "is-invalid" : ""}`}
            name="position"
            value={formData.position}
            onChange={onChange}
          >
            <option value="">-- Chọn vị trí --</option>
            <option value="Nhân viên">Nhân viên</option>
            <option value="Quản lý">Quản lý</option>
            <option value="Giám đốc">Giám đốc</option>
          </select>
          {errors.position && <div className="invalid-feedback">{errors.position}</div>}
        </div>

        <div className="col-12">
          <label className="form-label text-muted mb-2 d-block">
            Giới tính
          </label>
          <div className="form-check form-check-inline me-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radioMale"
            />
            <label className="form-check-label" htmlFor="radioMale">
              Nam
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="radioFemale"
            />
            <label className="form-check-label" htmlFor="radioFemale">
              Nữ
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
