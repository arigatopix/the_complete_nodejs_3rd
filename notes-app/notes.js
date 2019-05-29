const fs = require('fs');

const getNotes = function() {
  return 'Your notes ...';
};

const addNote = function(title, body) {
  // รับค่าจาก app.js แล้วเพิ่มเข้า object

  // เรียกข้อมูลเก่าจาก notes.json ได้ object แล้ว
  const notes = loadNotes();

  // filter title, body ที่ซ้ำกันออก
  const duplicateNotes = notes.filter(function(note) {
    // notes.title เทียบกับ title ที่รับมา เก็บเฉพาะที่ไม่ซ้ำ ถ้า ture คือซ้ำ โดยเก็บเป็น array ใหม่
    // โดยปกติเราจะ filter ออกโดยเอา false แต่อันนี้อยากเก็บ true ไปเช็ค
    return note.title === title;
  });

  // check
  // console.log(duplicateNotes);

  if (duplicateNotes === 0) {
    // ถ้าไม่มีข้อมูลซ้ำ

    // * เพิ่ม object ใหม่ให้ object เดิม * ไม่ถูก overwrite เพราะใช้ push ไปทั้ง object แล้วค่อยเขียน notes.json ใหม่
    notes.push({
      title: title,
      body: body
    });

    // save to JSON
    saveNotes(notes);

    console.log('New notes added!!');
  } else {
    console.log('dNote title taken!');
  }
};

const saveNotes = function(notes) {
  // save new notes object to JSON
  const dataJSON = JSON.stringify(notes);

  // writeFile
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
  // ERROR handle
  try {
    // * ถ้ามีข้อมูลใน notes.json จะ run code นี้

    // load from notes.json ใช้ fs.readFileSync
    const dataBuffer = fs.readFileSync('notes.json');

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
  addNote: addNote
};
