const ClearTasks = () => {
  return (
    <span data-bs-toggle="modal" className="btn btn-sm btn-danger" data-bs-target="#confirmClearTasks" style={{ cursor: "pointer" }}>
      Hapus Semua Task
    </span>
  );
};

export default ClearTasks;
