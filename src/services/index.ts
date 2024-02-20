import { type Note, NoteSchema } from "../types/index";

const notes: Note[] = [];

export function createNote({ title, body }: Note): Note {
  const newNote: Note = {
    id: notes.length + 1,
    title,
    body,
  };

  NoteSchema.parse(newNote);
  notes.push(newNote);

  return newNote;
}

export function getNotes(): Note[] {
  return notes;
}

export function getNote(id: number): Note | string {
  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  return "Note not found.";
}

export function updateNote({ id, title, body }: Note): Note | string {
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

  return "Note not found. Cannot update.";
}

export function deleteNote(id: number): { message: string; status: number } {
  const result = {
    message: "Note not found. Cannot delete.",
    status: 404,
  };

  let index: number = 0;

  notes.forEach((note, idx) => {
    if (note.id === id) {
      index = idx;
      result.message = `Note with ${id} deleted.`;
      result.status = 200;
    }
  });

  notes.splice(index, 1);

  return result;
}
