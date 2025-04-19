// * 1
// import { Button } from "../Button/Button";
// import css from "./StatusFilter.module.css";

// export const StatusFilter = () => {
//   return (
//     <div className={css.wrapper}>
//       <Button>All</Button>
//       <Button>Active</Button>
//       <Button>Completed</Button>
//     </div>
//   );
// };

// * 2
// import { useSelector } from "react-redux";
// import { Button } from "../Button/Button";
// import css from "./StatusFilter.module.css";

// export const StatusFilter = () => {
//   const filter = useSelector((state) => state.filters.status);

//   return (
//     <div className={css.wrapper}>
//       <Button selected={filter === "all"}>All</Button>
//       <Button selected={filter === "active"}>Active</Button>
//       <Button selected={filter === "completed"}>Completed</Button>
//     </div>
//   );
// };

// * 3
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
