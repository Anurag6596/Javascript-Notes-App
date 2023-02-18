const notesContainer = document.querySelector('.notes-container');
const form = document.querySelector('form');
const titleInput = document.querySelector('input[name="title"]');
const contentInput = document.querySelector('textarea[name="content"]');

let notes = [];

function addNote() {
  const title = titleInput.value;
  const content = contentInput.value;

  if (title && content) {
    const note = { title, content };
    notes.push(note);
    displayNotes();
    titleInput.value = '';
    contentInput.value = '';
  }
}

function displayNotes() {
  notesContainer.innerHTML = '';
  notes.forEach((note) => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    const titleElement = document.createElement('h2');
    titleElement.textContent = note.title;
    const contentElement = document.createElement('p');
    contentElement.textContent = note.content;
    noteElement.appendChild(titleElement);
    noteElement.appendChild(contentElement);
    notesContainer.appendChild(noteElement);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNote();
});

displayNotes();
