// * 1
// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({});

// * 2
// import { configureStore } from "@reduxjs/toolkit";

// // Поки що використовуємо редюсер який
// // тільки повертає отриманий стан Redux
// const rootReducer = (state, action) => {
//   return state;
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });

// * 3
// import { configureStore } from "@reduxjs/toolkit";

// // 1. Оголошуєм початкове значення стану Redux
// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
//   filters: {
//     status: "all",
//   },
// };

// // 2. Передаємо початкове значення стану Redux
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });

// * 4
// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
//   filters: {
//     status: "all",
//   },
// };

// // Використовуємо initialState як значення стану за умовчанням
// const rootReducer = (state = initialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка

//     // Кожен редюсер отримує всі екшени, відправлені в стор.
//     // Якщо редюсер не повинен обробляти якийсь тип екшену,
//     // необхідно повернути наявний стан без змін.
//     default:
//       return state;
//   }
// };

// * 5
// import { configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
//   filters: {
//     status: "all",
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask": {
//       return {
//         ...state,
//         tasks: {
//           items: [...state.tasks.items, action.payload],
//         },
//       };
//     }

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: {
//           items: state.tasks.items.filter((task) => task.id !== action.payload),
//         },
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         tasks: {
//           items: state.tasks.items.map((task) => {
//             if (task.id !== action.payload) {
//               return task;
//             }
//             return {
//               ...task,
//               completed: !task.completed,
//             };
//           }),
//         },
//       };

//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         filters: {
//           status: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });

// * 6
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
