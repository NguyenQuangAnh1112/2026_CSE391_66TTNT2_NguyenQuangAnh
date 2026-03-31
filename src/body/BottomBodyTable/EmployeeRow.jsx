export default function EmployeeRow({ item, index, onEdit, onDelete }) {
  return (
    <tr>
      <td className="py-3 px-4">{index + 1}</td>
      <td className="py-3 px-4">{item.name}</td>
      <td className="py-3 px-4">{item.email}</td>
      <td className="py-3 px-4">{item.pnumber}</td>
      <td className="py-3 px-4">{item.position}</td>
      <td className="py-3 px-4">
        <button
          className="btn btn-warning btn-sm me-2 px-1.5"
          onClick={() => onEdit(index)}
        >
          Sửa
        </button>
        <button
          className="btn btn-danger btn-sm px-1.5"
          onClick={() => onDelete(index)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
