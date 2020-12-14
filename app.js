var title = document.forms["f1"]["title"];
var description = document.forms["f1"]["description"];
var notes = [];
var note = new Note("", "");
function add(){
    note = new Note(title.value, description.value);
    notes[0] = note;
    view();
}
var $data = $('<div></div>')
function view(){
    //$data.css('display', 'none')
    $('#empty').text("");
    $('#del').text("");
    if(note.title!==""){
        var $title = $('<div></div>');
        var $description = $('<div></div>');
        var $dbtn = $('<button></button>');
        var $ebtn = $('<button></button>');
        //var $data = $('<div></div>')

        $title.text(note.title);
        $description.text(note.description);
        $dbtn.text("delete");
            $dbtn.click(function deleteNote(){
                console.log("Deleted"); 
                notes.splice(0,1);
                note.title = "";
                note.description = "";
                deleted();
            })
        $ebtn.text("edit");
        $ebtn.click(function editNote(){
            console.log("Edited");
            //var etitle = document.getElementById('edit-title');
            var $etitle = $('#edit-title');
            $etitle.val(note.title);
            console.log($etitle.val());

            var $edescription = $('#edit-description');
            $edescription.val(note.description);
            
            document.getElementById('spoiler').style.display = 'block';
            document.getElementById('saveEdit').onsubmit = function() {

                //allNotes[i].title = $etitle.val;
                //allNotes[i].description = edescription.value;
                notes.splice(0,1);
                note = new Note($etitle.val(), $edescription.val());
                notes[0] = note;
                console.log(note.title);
                $data.text("");
                view();
                CloseInput();
                // var book = e.value;
                // if (book) {
                //     allNotes.splice(i, 1, book.trim());
                //     view();
                //     CloseInput();
                // }
            }  
        })
        
        $data.append($title);
        $data.append($description);
        $data.append($dbtn);
        $data.append($ebtn);
        //$data.css('display', 'block')
        $('body').append($data);
        
    }
    else{
        $('#empty').text("No notes");
    }
}

function deleted(){
    $('#del').text("Deleted! No notes");
    $data.text("");
}

function CloseInput() {
    $('#spoiler').css('display', 'none');
}