class NotesView {

  constructor(model) {
    this.buttonEl = document.querySelector('#add-note-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model
    
    this.buttonEl.addEventListener('click', () => {
      this.inputEl = document.querySelector('#note-input').value
      this.model.addNote(this.inputEl);
      this.displayNotes();
      this.clearInput()
    });
  }

  displayNotes() {
    const notes = this.model.getNotes()

    const note = notes[notes.length-1] 

    const noteEl = document.createElement('div');
    noteEl.innerText = note;
    noteEl.className = 'note';
    this.mainContainerEl.append(noteEl);
    
  }

  clearInput() {
    document.querySelector('#note-input').value = ''
  }
}

module.exports = NotesView
