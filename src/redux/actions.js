// * 1
// export const addTask = (newTask) => {
//   return {
//     type: "tasks/addTask",
//     payload: newTask,
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = (taskId) => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = (value) => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };

// * 2
// // 1. Імпортуємо функцію createAction
// import { createAction } from "@reduxjs/toolkit";

// // 2. Створюємо фабрики екшенів
// export const addTask = createAction("tasks/addTask");

// export const deleteTask = createAction("tasks/deleteTask");

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// export const setStatusFilter = createAction("filters/setStatusFilter");

// * 3
import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");

// console.log(toggleCompleted(1));
// // { type: "tasks/toggleCompleted", payload: 1 }

// console.log(setStatusFilter("hello"));
// // { type: "filters/setStatusFilter", payload: "hello" }
