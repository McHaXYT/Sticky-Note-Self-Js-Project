const container = document.getElementById('main-container');
const greyBtn = document.getElementById('btn');
var stickyNotesArray = []

greyBtn.addEventListener('click', () => {
    var stickyNotes = document.createElement("div");
    var stickyNotesP = document.createElement("textarea");
    stickyNotes.setAttribute('id', 'sticky-note');
    stickyNotes.classList.add('white-grid');
    stickyNotesP.setAttribute('id', 'sticky-text');
    stickyNotesP.setAttribute('placeholder', 'Empty Sticky Note');
    stickyNotesP.classList.add('sticky-text-area');
    stickyNotes.appendChild(stickyNotesP);
    if (stickyNotesArray.length <= 0) {
        container.prepend(stickyNotes);
    } else {
        container.appendChild(stickyNotes);
        container.after(greyBtn);
        container.appendChild(greyBtn)
    }
    stickyNotesArray.push(stickyNotes);
    console.log(stickyNotesArray.length);
    console.log(stickyNotesArray)
});

