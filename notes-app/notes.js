const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes ...";

const message = {
  add: chalk.bold.green.inverse("New note added"),
  remove: chalk.bold.green.inverse("Note removed!"),
  noteNotFound: chalk.bold.red.inverse("Note not found!"),
  duplicateNotes: chalk.bold.red.inverse("Note was taken!")
};

// * Read note
const readNote = title => {
  // load notes object
  const notes = loadNotes();

  // find note in notes ถ้าไม่เจอให้แสดง error
  const note = notes.find(note => note.title === title);

  if (!note) {
    // กรณีหาไม่เจอ
    return console.log(message.noteNotFound);
  }

  // หาเจอ
  console.log(chalk.white.bold.inverse(note.title));
};

// * Listing Notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.white.bold.inverse("Your notes..."));
  // show all
  notes.forEach(note => console.log(note.title));
};

// * Remove a note
const removeNote = title => {
  // เรียกข้อมูลใน notes.json
  const notes = loadNotes(); // object

  // filter ได้ array ใหม่ที่ไม่มี title ที่รับค่ามาจาก remove
  const noteToKeep = notes.filter(note => note.title !== title);
  // console.log(noteToKeep);

  if (notes.length > noteToKeep.length) {
    // ถ้าลบออกแล้ว array ที่เก็บจะน้อยกว่าอันเดิม (noteToKepp < notes)
    console.log(message.remove);
    // save to json
    saveNotes(noteToKeep);
  } else if (notes.length === noteToKeep.length) {
    // ถ้าเท่ากัน แปลว่าไม่มี array ไหนลบออกเลย
    console.log(message.noteNotFound);
  }
};

// * Add new note
const addNote = (title, body) => {
  // รับค่าจาก app.js แล้วเพิ่มเข้า object

  // เรียกข้อมูลเก่าจาก notes.json ได้ object แล้ว
  const notes = loadNotes();

  // ? filter title, body ที่ซ้ำกันออก ข้อเสียคือต้อง loop สมาชิกทุกตัว มันจะช้า
  // const duplicateNotes = notes.filter(note => note.title === title);
  // notes.title เทียบกับ title ที่รับมา เก็บเฉพาะที่ไม่ซ้ำ ถ้า ture คือซ้ำ โดยเก็บเป็น array ใหม่
  // โดยปกติเราจะ filter ออกโดยเอา false แต่อันนี้อยากเก็บ true ไปเช็ค

  // ใช้ find() method หาแทน filter ถ้าเจอเหมือนกัน ไม่ให้ add เพิ่ม
  const duplicateNote = notes.find(note => note.title === title);

  // pause code เพื่อ debug ใช้คู่กับ cmd node inspect app.js ... ใช้ google chrome ดู
  // debugger;

  if (!duplicateNote) {
    // ถ้าไม่มี duplicate ให้เพิ่ม note

    // * เพิ่ม object ใหม่ให้ object เดิม * ไม่ถูก overwrite เพราะใช้ push ไปทั้ง object แล้วค่อยเขียน notes.json ใหม่
    notes.push({
      title: title,
      body: body
    });

    // save to JSON
    saveNotes(notes);

    console.log(message.add);
  } else {
    console.log(message.duplicateNotes);
  }
};

const saveNotes = notes => {
  // save new notes object to JSON
  const dataJSON = JSON.stringify(notes);

  // writeFile
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  // ERROR handle
  try {
    // * ถ้ามีข้อมูลใน notes.json จะ run code นี้

    // load from notes.json ใช้ fs.readFileSync
    const dataBuffer = fs.readFileSync("notes.json");

    // converse Buffer to JSON (string)
    const dataJSON = dataBuffer.toString();

    // แปลงเป็น object return ไปใช้ใน function ข้างนอก
    return JSON.parse(dataJSON);
  } catch (e) {
    // ถ้าไม่มีข้อมูลใน notes.json สร้าง empty array
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
