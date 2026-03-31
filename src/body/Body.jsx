import EmployeeTable from "./BottomBodyTable/EmployeeTable.jsx";
import TopBody from "./TopBody.jsx";

export default function Body({ onOpen, items, onDelete, onEdit }) {
  return (
    <div className="p-5">
      <TopBody onOpen={onOpen} />
      <EmployeeTable items={items} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}
