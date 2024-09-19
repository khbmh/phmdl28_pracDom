document.getElementById('add-btn').addEventListener('click', function () {
  let inputText = document.getElementById('task-input');
  let inputValue = inputText.value;
  if (inputValue.trim() === '') {
    alert('write task!');
    inputText.value = '';
    return;
  }
  inputText.value = '';

  let newTask = `
<p class="rounded-md border border-[#646EE461] px-5 py-2 flex justify-between items-center w-full">
        <span>${inputValue}</span>
        <i class="deleteTask ri-delete-bin-2-line text-2xl text-[#EF4C53] cursor-pointer"></i>
      </p>`;
  let newTaskInput = document.createElement('div');
  newTaskInput.innerHTML = newTask;

  document.getElementById('task-container').appendChild(newTaskInput);
});

document
  .getElementById('task-container')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteTask')) {
      event.target.parentElement.parentElement.remove();
    }
  });
document
  .getElementById('remove-all')
  .addEventListener('click', function (event) {
    document.getElementById('task-container').innerHTML = '';
  });

document.addEventListener('mousemove', (event) => {
  const x = event.clientX; // Mouse X position
  const y = event.clientY; // Mouse Y position
});


/*

custom cursor

*/
const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // Update custom cursor position to be over the default cursor
  customCursor.style.left = `${x}px`;
  customCursor.style.top = `${y}px`;
});
