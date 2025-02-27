const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;


        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });


        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});