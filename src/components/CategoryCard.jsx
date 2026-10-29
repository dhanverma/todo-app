function CategoryCard({
  title,
  taskCount,
  completedCount,
  color,
  icon,
}) {
  const progress =
    taskCount === 0
      ? 0
      : (completedCount / taskCount) * 100;

  return (
    <div className="min-w-0 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">

      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0">
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {taskCount} Tasks
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {completedCount} completed
          </p>
        </div>

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}
        >
          {icon}
        </div>

      </div>

      <div
        className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100"
        role="progressbar"
        aria-label={`${title} task completion`}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  );
}

export default CategoryCard;