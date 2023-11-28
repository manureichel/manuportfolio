---
external: false
title: "Task Manager"
description: "This project was one of my first experiences working with vanilla JavaScript."
date: 2022-07-22
---

## ✏️ About the Project

The idea of the project is a web application for task management. Where the user can add new tasks to a list and manage them.

This project was one of my first experiences working with vanilla JavaScript.

Check the [app deployed here](https://intjsmanu.netlify.app/) and the [Github Repository](https://github.com/manureichel/proyecto_integrador_JS).

![Task Manager Screenshot](https://manuelreichel.com.ar/projectsfiles/taskmanager.png)

## 💻 Features:

- Tutorial on the first execution.
- Create and delete tasks individually.
- Task editing.
- Task search.
- Check off completed tasks.
- Display filtering by active, completed, or all tasks.
- Display of the time elapsed since the task was created.
- Drag n Drop: tasks can be dragged from an icon and relocated.
- Storage in Local Storage.

## Libraries Used in the Project:

### ⏱️ Luxon

Luxon is included to easily obtain relative time texts. This way, strings related to the time elapsed since the task was created are added to each task.

### 📤 Toastify

Toastify JS is added to show a simple message when a task is created successfully.

### ⁉️ SweetAlert2

With Sweet Alert, modals are easily implemented for task editing and to confirm the deletion of a task.

### 🔀 Sortable

Sortable is a library that allows turning a content section, such as a div, into a draggable object. This library is implemented to drag and rearrange tasks. It also works with [Easings](https://easings.net/) for animation during dragging.

### 🧑🏻‍🏫 Intro.js

The Intro.js library is incorporated. It runs only the first time the application is used. It provides a tutorial-like walkthrough of each element of the application.
