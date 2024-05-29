$("#setting_dock_div").click(function (e) { 
    e.preventDefault();
    $("#setting_overlap_modal").css("display", "block");
    console.log('feature_exe');
});

$("#setting_modal_close_btn").click(function (e) { 
    e.preventDefault();
    $("#setting_overlap_modal").css("display", "none");
});
$("#newchat_modal_close_btn").click(function (e) { 
    e.preventDefault();
    $(".newchat_overlap").css("display", "none");
});

$('#new_model_chat_container').click(function (e) { 
    e.preventDefault();
    $('.newchat_overlap').css('display' , 'block');
    _list_newchat_model_select();
});

// search filter function 
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 191) {
        console.log("You pressed /");
    }
});

$('#search_input_box').keyup(function (e) { 
    var input , filter , main_div , _model_div , text;
    input = document.getElementById('search_input_box');
    filter = input.value.toLowerCase();
    main_div = document.getElementsByClassName('section_a_chats');
    for (let i = 0; i < main_div.length; i++) {
        _model_div  = main_div[i].getElementsByClassName('chat_model_title')[0];
        text = _model_div.textContent || _model_div.innerHTML;
        console.log("shekhar");
        if (text.toLowerCase().indexOf(filter) > -1) {
            main_div[i].style.display = ""; // visible
        } else {
            main_div[i].style.display = "none"; // hidden
        }
    }
});
function notification(message,level,description){
    
}