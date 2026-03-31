import EmployeeRow from "./EmployeeRow.jsx";

export default function BottomBodyHeader({ items, onEdit, onDelete }) {
  return (
    <div className="table-responsive border rounded bg-white shadow-sm">
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr>
            <th className="py-3 px-4 border-bottom text-nowrap">STT</th>
            <th className="py-3 px-4 border-bottom text-nowrap">Họ tên</th>
            <th className="py-3 px-4 border-bottom text-nowrap">Email</th>
            <th className="py-3 px-4 border-bottom text-nowrap">
              Số điện thoại
            </th>
            <th className="py-3 px-4 border-bottom text-nowrap">Vị trí</th>
            <th className="py-3 px-4 border-bottom text-nowrap">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
                <EmployeeRow
                  key={index}
                  item={item}
                  index={index}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
