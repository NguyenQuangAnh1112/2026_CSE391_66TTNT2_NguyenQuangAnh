import { useState } from "react";
import NavBar from "./nav-bar/NavBar";
import Body from "./body/Body.jsx";
import AddEmployeeModal from "./modals/AddEmployeeModal.jsx";
import { data } from "./data.js";

export default function App() {
  const [items, setItems] = useState(data);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleDelete(indexToDelete) {
    setItems(function (previousItems) {
      return previousItems.filter(function (_, currentIndex) {
        return currentIndex !== indexToDelete;
      });
    });
  }

  function handleAddEmployee(newEmployee) {
    setItems((prev) => [...prev, newEmployee]);
  }

  function handleEditEmployee(updatedEmployee) {
    setItems((previousItems) =>
      previousItems.map((item, index) => {
        if (index === editingIndex) {
          return updatedEmployee;
        }

        return item;
      }),
    );
  }

  function handleSaveEmployee(employeeData) {
    if (editingIndex === null) {
      handleAddEmployee(employeeData);
    } else {
      handleEditEmployee(employeeData);
    }
  }

  function handleCloseAddEmployeeModal() {
    setIsAddOpen(false);
    setEditingIndex(null);
  }

  function handleOpenAddEmployeeModal() {
    setEditingIndex(null);
    setIsAddOpen(true);
  }

  function handleOpenEditEmployeeModal(indexToEdit) {
    setEditingIndex(indexToEdit);
    setIsAddOpen(true);
  }

  return (
    <div className="app">
      <NavBar></NavBar>
      <Body
        onOpen={handleOpenAddEmployeeModal}
        items={items}
        onDelete={handleDelete}
        onEdit={handleOpenEditEmployeeModal}
      ></Body>
      {isAddOpen && (
        <AddEmployeeModal
          onClose={handleCloseAddEmployeeModal}
          onSave={handleSaveEmployee}
          isEditMode={editingIndex !== null}
          initialData={editingIndex !== null ? items[editingIndex] : null}
        />
      )}
    </div>
  );
}
