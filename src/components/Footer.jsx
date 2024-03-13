const Footer = ({ tasks }) => {
  const completedTasksCount = tasks.filter((task) => task.isDone).length;
  const completionPercentage = (completedTasksCount / tasks.length) * 100;
  const progressBarColor = completionPercentage === 100 ? "bg-primary" : "bg-primary";

  return (
    <div className="progress fixed-bottom border-top rounded-0" role="progressbar" aria-label="Success example" aria-valuenow={completionPercentage} aria-valuemin="0" aria-valuemax="100" style={{ height: "1.5rem" }}>
      <div className={`progress-bar ${progressBarColor} text-center`} style={{ width: `${completionPercentage}%` }} aria-valuenow={completionPercentage} aria-valuemin="0" aria-valuemax="100">
        {completionPercentage === 100 ? "Selamat, kamu produktif hari ini!" : `${completionPercentage.toFixed(0)}% Done`}
      </div>
    </div>
  );
};

export default Footer;
