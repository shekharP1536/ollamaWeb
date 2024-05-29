function start_chat(model , status , size){
    var parent_div = document.getElementById("section_b");
    parent_div.innerHTML = '';
    var chat_header_section = document.createElement("div");
    var section_b_chat_title_holder_container = document.createElement("div");
    var _section_b_chat_title_container = document.createElement("div");
    var chat_model_name_curently_active = document.createElement("div");
    var chat_model_name = document.createElement("div");
    var chat_model_brief_status = document.createElement("div");
    var chat_model_name_brief_container = document.createElement("div");
    var span = document.createElement("span");
    var spana = document.createElement("span");
    var spanb = document.createElement("span");
    var chat_container = document.createElement("div");

    spana.className = "status_icons";
    span.innerText = model;
    spanb.innerText = status;
    
    chat_header_section.className = "chat_header_section";
    section_b_chat_title_holder_container.className = "section_b_chat_title_holder_container";
    _section_b_chat_title_container.className = "_section_b_chat_title_container";
    chat_model_name_curently_active.className = "chat_model_name_curently_active";
    chat_model_name.className = "chat_model_name";
    chat_model_brief_status.className = "chat_model_brief_status";
    chat_model_name_brief_container.className = "chat_model_name-brief_container";
    chat_container.className = "chat_container";

    chat_container.id = "chat_container_div";

    // var chat_input_container = document.createElement("div");
    // var user_prompt_input = document.createElement("div");
    // var input_mic_container = document.createElement("div");
    // var input_mic_container_a = document.createElement("div");
    // var input_send_submit = document.createElement("div");    
    // var input = document.createElement("input");
    // input.className = "input_prompt_input";
    // input.id = "user_prompt";
    // input.name = "prompt";
    // input.placeholder = "Message here...";
    // chat_input_container.className("chat_input_container");
    // user_prompt_input.className("user_prompt_input");
    // input_mic_container.className("input_mic_container");
    // input_mic_container_a.className("input_mic_container_a");
    // input_send_submit.className("input_send_submit");
    span.innerText = model;
    spana.innerHTML = '<i class="fa-solid fa-circle model_status_active"></i>';
    spanb.innerText = status;
    chat_model_brief_status.appendChild(spanb);
    chat_model_brief_status.appendChild(spana);
    chat_model_name_curently_active.appendChild(chat_model_brief_status);
    chat_model_name.appendChild(span);
    chat_model_name_curently_active.appendChild(chat_model_name);
    _section_b_chat_title_container.appendChild(chat_model_name_curently_active);
    _section_b_chat_title_container.appendChild(chat_model_name_brief_container);
    section_b_chat_title_holder_container.appendChild(_section_b_chat_title_container);
    chat_header_section.appendChild(section_b_chat_title_holder_container);
    parent_div.appendChild(chat_header_section);
    parent_div.appendChild(chat_container);
    showinputfield(model , '');
    // showchat_header();
}

function showinputfield(model, message){
    var input_field = document.getElementById('chat_container_div');
    if (input_field.style.display == 'flex') {
        console.log('no');
        input_field.style.display = '';
    } else {
        input_field.style.display = 'flex';
        console.log('yes');
    }
}