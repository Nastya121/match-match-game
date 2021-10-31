
    let header = document.createElement('header');
    header.className="header";   
    
    let img_header=document.createElement('img');
    img_header.src='./img/logo.png';
    img_header.className="header_nav"; 

    let nav = document.createElement('nav');
    nav.className="header_nav";

   let nav_ul = document.createElement('ul');
    nav_ul.className="header_nav_part";

    document.body.append(header);
    header.appendChild(img_header);    

   var list1: string[]=['about game','best score','game settings'];
   var list_link: string[]=['about_game.html','beast_score.html','game.html'];

    for(let i=0;i<3;i++){
    let nav_ul_li = document.createElement('li');
    nav_ul_li.className="header_nav_block";
    let nav_ul_li_a = document.createElement('a');
    nav_ul_li_a.className="header_nav_block_link";  
    nav_ul_li_a.href=list_link[i]; 
    let nav_ul_li_a_p = document.createElement('p');
    nav_ul_li_a_p.className="header_nav_block_link_text"; 
    nav_ul_li_a_p.innerHTML=list1[i];

    document.body.append(header);
    header.appendChild(nav);
    nav.appendChild(nav_ul);
    nav_ul.appendChild(nav_ul_li);
    nav_ul_li.appendChild(nav_ul_li_a);
    nav_ul_li_a.appendChild(nav_ul_li_a_p);

}

var header_div = document.createElement('div');
header_div.className="header_button";
   
var header_div_a = document.createElement('a');
header_div_a.className="header_regiater";

let header_div_a_text = document.createElement('p');
header_div_a_text.className="header_register_text";

header_div_a_text.innerHTML="register new player";

          
header.appendChild(header_div);
header_div.appendChild(header_div_a);
header_div_a.appendChild(header_div_a_text);

/*main */

let main= document.createElement('main');
main.className="main";

let main_div= document.createElement('div');
main_div.className="main_wrapper";

let main_div_left= document.createElement('div');
main_div_left.className="main_left";

let main_title= document.createElement('p');
main_title.className="main_title";

main_title.innerHTML='How to play';

let main_left_block= document.createElement('div');
main_left_block.className="main_left_block";

let main_left_block_wrapper_1= document.createElement('div');
main_left_block_wrapper_1.className="main_left_block_wrapper_1";


let main_left_block_text= document.createElement('p');
main_left_block_text.className="main_left_block_text";

main_left_block_text.innerHTML='Register new player in game';


let main_left_block_wrapper_2= document.createElement('div');
main_left_block_wrapper_2.className="main_left_block_wrapper_2";

let main_left_block_text_2= document.createElement('p');
main_left_block_text_2.className="main_left_block_text_2";

main_left_block_text_2.innerHTML="Configure your game settings";


let main_left_block_wrapper_3= document.createElement('div');
main_left_block_wrapper_3.className="main_left_block_wrapper_3";

let main_left_block_text_3= document.createElement('p');
main_left_block_text_3.className="main_left_block_text_3";

main_left_block_text_3.innerHTML="Start you new game! Remember card positions and match it before times up.";

let img_1=document.createElement('img');
img_1.src='./img/1.jpg';
img_1.className="main_left_block_img";


let img_2=document.createElement('img');
img_2.src='./img/2.jpg';
img_2.className="main_left_block_img";

let img_3=document.createElement('img');
img_3.src='./img/3.jpg';
img_3.className="main_left_block_img";


document.body.append(main);
main.appendChild(main_div);
main_div.appendChild(main_div_left);
main_div_left.appendChild(main_title);
main_div_left.appendChild(main_left_block);

main_left_block.appendChild(main_left_block_wrapper_1);
main_left_block_wrapper_1.appendChild(img_1);
main_left_block_wrapper_1.appendChild(main_left_block_text);

main_left_block.appendChild(main_left_block_wrapper_2);
main_left_block_wrapper_2.appendChild(img_2);
main_left_block_wrapper_2.appendChild(main_left_block_text_2);

main_left_block.appendChild(main_left_block_wrapper_3);
main_left_block_wrapper_3.appendChild(img_3);
main_left_block_wrapper_3.appendChild(main_left_block_text_3);




let main_right= document.createElement('div');
main_right.className="main_right";

let main_right_block= document.createElement('div');
main_right_block.className="main_right_block";

let main_right_block_title= document.createElement('p');
main_right_block_title.className="main_right_block_title";

main_right_block_title.innerHTML="registr new player";

let main_right_inform= document.createElement('div');
main_right_inform.className="main_right_inform";

let main_right_inform_fraim= document.createElement('div');
main_right_inform_fraim.className="main_right_inform_fraim";

var list2: string[]=['name','surname','email'];

for(let j=0;j<3;j++){

let main_right_inform_fraim_1= document.createElement('div');
main_right_inform_fraim_1.className="main_right_inform_fraim_1";

let main_right_inform_fraim_text= document.createElement('div');
main_right_inform_fraim_text.className="main_right_inform_fraim_text";

let main_right_inform_fraim_text_name= document.createElement('label');
main_right_inform_fraim_text_name.className="main_right_inform_fraim_text_name";

main_right_inform_fraim_text_name.innerHTML=list2[j];

let main_right_inform_fraim_text_name_input= document.createElement('input');
main_right_inform_fraim_text_name_input.className="main_right_inform_fraim_text_name_input";

let main_right_inform_fraim_text_name_input_1= document.createElement('input');
main_right_inform_fraim_text_name_input_1.type="chexbox";

main_div.appendChild(main_right);
main_right.appendChild(main_right_block);
main_right_block.appendChild(main_right_block_title);
main_right_block.appendChild(main_right_inform);
main_right_inform.appendChild(main_right_inform_fraim);
main_right_inform_fraim.appendChild(main_right_inform_fraim_1);
main_right_inform_fraim_1.appendChild(main_right_inform_fraim_text);
main_right_inform_fraim_text.appendChild(main_right_inform_fraim_text_name);
main_right_inform_fraim_text.appendChild(main_right_inform_fraim_text_name_input);
main_right_inform_fraim_text.appendChild(main_right_inform_fraim_text_name_input_1);
}

let img_person=document.createElement('img');
img_person.src='./img/person.jpg';
img_person.className="main_right_inform_photo";

main_right_inform.appendChild(img_person);

let main_right_button_wrapper= document.createElement('div');
main_right_button_wrapper.className="main_right_button_wrapper";

let main_right_button_wrapper_flex= document.createElement('div');
main_right_button_wrapper_flex.className="main_right_button_wrapper_flex";

let main_right_button_wrapper_1= document.createElement('div');
main_right_button_wrapper_1.className="main_right_button_wrapper_1";

let button_main= document.createElement('a');
button_main.className="button_main";

button_main.innerHTML="add user";

let main_right_button_wrapper_2= document.createElement('div');
main_right_button_wrapper_2.className="main_right_button_wrapper_2";

let button_main_1= document.createElement('a');
button_main_1.className="button_main_1";

button_main.innerHTML="chansel";

main_right_block.appendChild(main_right_button_wrapper);
main_right_button_wrapper.appendChild(main_right_button_wrapper_flex);
main_right_button_wrapper_flex.appendChild(main_right_button_wrapper_1);
main_right_button_wrapper_1.appendChild(button_main);
main_right_button_wrapper_flex.appendChild(main_right_button_wrapper_2);
main_right_button_wrapper_2.appendChild(button_main_1);



let main_right_settings= document.createElement('div');
main_right_settings.className="main_right_settings";

let main_right_settings_test= document.createElement('p');
main_right_settings_test.className="main_right_settings_test";

main_right_settings_test.innerHTML="game settings";


main_right_block.appendChild(main_right_settings);
main_right_settings.appendChild(main_right_settings_test);


let main_right_cards= document.createElement('img');
main_right_cards.src='./img/image 4.png';
main_right_cards.className="main_right_cards";

main_right_block.appendChild(main_right_cards);