import { type Note } from "../types/index";

const notes: Note[] = [];

export function createNote({ title, body }: Note): Note {
  const newNote: Note = {
    id: notes.length + 1,
    title,
    body,
  };

  notes.push(newNote);

  return newNote;
}

export function getNotes(): Note[] {
  return notes;
}

export function getNote(id: number): Note | null {
  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  return null;
}

export function updateNote({ id, title, body }: Note): Note | null {
  let updateNote: Note = {
    id: 0,
    title: "",
    body: "",
  };
  notes.forEach((note, index) => {
    if (note.id === id) {
      notes[index].title = title;
      notes[index].body = body;

      updateNote = notes[index];
    }
  });

  if (updateNote.id !== 0) {
    return updateNote;
  }

  return null;
}

export function deleteNote(id: number): string {
  let result: string = "Note not found.";
  let index: number = 0;

  notes.forEach((note, idx) => {
    if (note.id === id) {
      index = idx;
      result = `Note with ${id} deleted.`;
    }
  });

  notes.splice(index, 1);

  return result;
}
