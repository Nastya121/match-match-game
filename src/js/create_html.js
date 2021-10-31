window.onload = function () {
  document.body.innerHTML = '';
  function createStartPage() {
    var headerHtml = createHeader();
    createNav(headerHtml);
    createMain();
  }
  createStartPage();
};

function createHeader() {
  var header = document.createElement('header');
  header.className = 'header';
  var header_div = document.createElement('div');
  header_div.className = 'header_button';
  var header_div_a = document.createElement('a');
  header_div_a.className = 'header_regiater';
  var header_div_a_text = document.createElement('p');
  header_div_a_text.className = 'header_register_text';
  header_div_a_text.innerHTML = 'register new player';
  header.appendChild(header_div);
  header_div.appendChild(header_div_a);
  header_div_a.appendChild(header_div_a_text);
  return header;
}
function createNav(header) {
  var img_header = document.createElement('img');
  img_header.src = '../src/img/logo.png';
  img_header.className = 'header_nav';
  var nav = document.createElement('nav');
  nav.className = 'header_nav';
  var nav_ul = document.createElement('ul');
  nav_ul.className = 'header_nav_part';
  document.body.append(header);
  header.appendChild(img_header);
  var list1 = ['about game', 'best score', 'game settings'];
  var list_link = ['start', 'game', 'beast page'];

  for (var i = 0; i < 3; i++) {
    var nav_ul_li = document.createElement('li');
    nav_ul_li.className = 'header_nav_block';

    var nav_ul_li_a = document.createElement('button');
    nav_ul_li_a.className = 'header_nav_block_link';
    nav_ul_li_a.id = list_link[i];

    var nav_ul_li_a_p = document.createElement('p');
    nav_ul_li_a_p.className = 'header_nav_block_link_text';
    nav_ul_li_a_p.innerHTML = list1[i];
    document.body.append(header);

    header.appendChild(nav);
    nav.appendChild(nav_ul);
    nav_ul.appendChild(nav_ul_li);
    nav_ul_li.appendChild(nav_ul_li_a);
    nav_ul_li_a.appendChild(nav_ul_li_a_p);
  }

  document.getElementById('start').onclick = function () {
    document.body.innerHTML = '';
    function createStartPage() {
      var headerHtml = createHeader();
      createNav(headerHtml);
      createMain();
    }
    createStartPage();
  };

  document.getElementById('beast page').onclick = function () {
    document.body.innerHTML = '';
    function createGamePage() {
      var headerHtml = createHeader();
      createNav(headerHtml);
      createGameContent();
    }
    createGamePage();
  };

  document.getElementById('game').onclick = function () {
    document.body.innerHTML = '';
    function createBeastPage() {
      var headerHtml = createHeader();
      createNav(headerHtml);
      createBeastContent();
    }
    createBeastPage();
  };
}

/*main */

function createMain() {
  var main = document.createElement('main');
  main.className = 'main';
  var main_div = document.createElement('div');
  main_div.className = 'main_wrapper';
  var main_div_left = document.createElement('div');
  main_div_left.className = 'main_left';
  var main_title = document.createElement('p');
  main_title.className = 'main_title';
  main_title.innerHTML = 'How to play';
  var main_left_block = document.createElement('div');
  main_left_block.className = 'main_left_block';
  var main_left_block_wrapper_1 = document.createElement('div');
  main_left_block_wrapper_1.className = 'main_left_block_wrapper_1';
  var main_left_block_text = document.createElement('p');
  main_left_block_text.className = 'main_left_block_text';
  main_left_block_text.innerHTML = 'Register new player in game';
  var main_left_block_wrapper_2 = document.createElement('div');
  main_left_block_wrapper_2.className = 'main_left_block_wrapper_2';
  var main_left_block_text_2 = document.createElement('p');
  main_left_block_text_2.className = 'main_left_block_text_2';
  main_left_block_text_2.innerHTML = 'Configure your game settings';
  var main_left_block_wrapper_3 = document.createElement('div');
  main_left_block_wrapper_3.className = 'main_left_block_wrapper_3';
  var main_left_block_text_3 = document.createElement('p');
  main_left_block_text_3.className = 'main_left_block_text_3';
  main_left_block_text_3.innerHTML =
    'Start you new game! Remember card positions and match it before times up.';
  var img_1 = document.createElement('img');
  img_1.src = '../src/img/1.jpg';
  img_1.className = 'main_left_block_img';
  var img_2 = document.createElement('img');
  img_2.src = '../src/img/2.jpg';
  img_2.className = 'main_left_block_img';
  var img_3 = document.createElement('img');
  img_3.src = '../src/img/3.jpg';
  img_3.className = 'main_left_block_img';
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
  var main_right = document.createElement('div');
  main_right.className = 'main_right';
  var main_right_block = document.createElement('div');
  main_right_block.className = 'main_right_block';
  var main_right_block_title = document.createElement('p');
  main_right_block_title.className = 'main_right_block_title';
  main_right_block_title.innerHTML = 'registr new player';
  var main_right_inform = document.createElement('div');
  main_right_inform.className = 'main_right_inform';
  var main_right_inform_fraim = document.createElement('div');
  main_right_inform_fraim.className = 'main_right_inform_fraim';
  var list2 = ['name', 'surname', 'email'];
  var list3 = ['text', 'text', 'email'];
  var list4 = ['name', 'surname', 'email'];
  for (var j = 0; j < 3; j++) {
    var main_right_inform_fraim_1 = document.createElement('div');
    main_right_inform_fraim_1.className = 'main_right_inform_fraim_1';
    var main_right_inform_fraim_text = document.createElement('form');
    main_right_inform_fraim_text.className = 'main_right_inform_fraim_text';
    var main_right_inform_fraim_text_name = document.createElement('label');
    main_right_inform_fraim_text_name.className = 'main_right_inform_fraim_text_name';
    main_right_inform_fraim_text_name.innerHTML = list2[j];
    var main_right_inform_fraim_text_name_input = document.createElement('input');
    main_right_inform_fraim_text_name_input.className = 'main_right_inform_fraim_text_name_input';
    main_right_inform_fraim_text_name_input.id = list4[j];

    main_div.appendChild(main_right);
    main_right.appendChild(main_right_block);
    main_right_block.appendChild(main_right_block_title);
    main_right_block.appendChild(main_right_inform);
    main_right_inform.appendChild(main_right_inform_fraim);
    main_right_inform_fraim.appendChild(main_right_inform_fraim_1);
    main_right_inform_fraim_1.appendChild(main_right_inform_fraim_text);
    main_right_inform_fraim_text.appendChild(main_right_inform_fraim_text_name);
    main_right_inform_fraim_text.appendChild(main_right_inform_fraim_text_name_input);
  }
  var button_submit = document.createElement('button');
  button_submit.className = 'button_main';
  button_submit.id = 'button_main';
  button_submit.innerHTML = 'add user';
  main_right_block.appendChild(button_submit);

  function validateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      return true;
    }
    return false;
  }
  function validateName(name) {
    if (/[A-Za-z']$/.test(name)) {
      return true;
    }
    return false;
  }
  function validateSurName(surname) {
    if (/[A-Za-z']$/.test(surname)) {
      return true;
    }
    return false;
  }

  document.getElementById('button_main').onclick = function () {
    if (
      validateEmail(document.getElementById('email').value) &&
      validateName(document.getElementById('name').value) &&
      validateSurName(document.getElementById('surname').value)
    ) {
      alert('all inputs correct');
    } else if (!validateEmail(document.getElementById('email').value)) {
      alert('You have entered an invalid email address!');
    } else if (!validateName(document.getElementById('name').value)) {
      alert('You have entered an invalid name!');
    } else if (!validateSurName(document.getElementById('surname').value)) {
      alert('You have entered an invalid surname!');
    }
  };

  var img_person = document.createElement('img');
  img_person.src = '../src/img/person.jpg';
  img_person.className = 'main_right_inform_photo';
  main_right_inform.appendChild(img_person);
  var main_right_button_wrapper = document.createElement('div');
  main_right_button_wrapper.className = 'main_right_button_wrapper';
  var main_right_button_wrapper_flex = document.createElement('div');
  main_right_button_wrapper_flex.className = 'main_right_button_wrapper_flex';
  var main_right_button_wrapper_1 = document.createElement('div');
  main_right_button_wrapper_1.className = 'main_right_button_wrapper_1';
  var button_main = document.createElement('a');
  var main_right_button_wrapper_2 = document.createElement('div');
  main_right_button_wrapper_2.className = 'main_right_button_wrapper_2';
  var button_main_1 = document.createElement('a');
  //main_right_block.appendChild(main_right_button_wrapper);
  // main_right_button_wrapper.appendChild(main_right_button_wrapper_flex);
  // main_right_button_wrapper_flex.appendChild(main_right_button_wrapper_1);
  //  main_right_button_wrapper_1.appendChild(button_main);
  // main_right_button_wrapper_flex.appendChild(main_right_button_wrapper_2);
  //  main_right_button_wrapper_2.appendChild(button_main_1);
  var main_right_settings = document.createElement('div');
  main_right_settings.className = 'main_right_settings';
  var main_right_settings_test = document.createElement('p');
  main_right_settings_test.className = 'main_right_settings_text';
  main_right_settings_test.innerHTML = 'game settings';
  main_right_block.appendChild(main_right_settings);
  main_right_settings.appendChild(main_right_settings_test);
  var main_right_cards = document.createElement('img');
  main_right_cards.src = '../src/img/image 4.png';
  main_right_cards.className = 'main_right_cards';
  main_right_block.appendChild(main_right_cards);
}

/*game */
function createGameContent() {
  var main = document.createElement('main');
  main.className = 'main';
  var main_wrapper_game = document.createElement('div');
  main_wrapper_game.className = 'main_wrapper_game';
  var main_wrapper_game_time = document.createElement('div');
  main_wrapper_game_time.className = 'main_wrapper_game_time';
  var center = document.createElement('p');
  center.className = 'center';
  var main_wrapper_game_card = document.createElement('img');
  main_wrapper_game_card.src = '../src/img/image 4.png';
  main_wrapper_game_card.className = 'main_wrapper_game_card';
  document.body.append(main);
  main.appendChild(main_wrapper_game);
  main_wrapper_game.appendChild(main_wrapper_game_time);
  center.appendChild(main_wrapper_game_card);
  main_wrapper_game.appendChild(center);
}

/*beast page */
function createBeastContent() {
  var main_beast = document.createElement('main');
  main_beast.className = 'main';
  var main_wrapper_game = document.createElement('div');
  main_wrapper_game.className = 'main_wrapper_game';
  var main_wrapper_best = document.createElement('div');
  main_wrapper_best.className = 'main_wrapper_best';
  var main_wrapper_best_title = document.createElement('p');
  main_wrapper_best_title.className = 'main_wrapper_best_title';
  main_wrapper_best_title.innerHTML = 'best score';
  var main_wrapper_beast_person = document.createElement('div');
  main_wrapper_beast_person.className = 'main_wrapper_beast_person';
  var main_wrapper_beast_wrapper1 = document.createElement('div');
  main_wrapper_beast_wrapper1.className = 'main_wrapper_beast_wrapper1';

  document.body.append(main_beast);
  main_beast.appendChild(main_wrapper_game);
  main_wrapper_game.appendChild(main_wrapper_best);
  main_wrapper_best.appendChild(main_wrapper_best_title);


    var contain1 = document.createElement('div');
    contain1.className = 'contein1';
    var main_beast_img = document.createElement('img');
    main_beast_img.src = '../src/img/person.jpg';
    main_beast_img.className = 'main_beast_img';
    var main_wrapper_beast_person_inform = document.createElement('div');
    main_wrapper_beast_person_inform.className = 'main_wrapper_beast_person_inform';
    var main_wrapper_beast_pearson_inform_name = document.createElement('p');
    main_wrapper_beast_pearson_inform_name.className = 'main_wrapper_beast_pearson_inform_name';
    main_wrapper_beast_pearson_inform_name.innerHTML = 'name';
    var main_wrapper_beast_pearson_inform_email = document.createElement('p');
    main_wrapper_beast_pearson_inform_email.className = 'main_wrapper_beast_pearson_inform_email';
    main_wrapper_beast_pearson_inform_email.innerHTML = 'email';
    var main_wrapper_beast_wrapper2_score = document.createElement('p');
    main_wrapper_beast_wrapper2_score.className = 'main_wrapper_beast_wrapper2_score';
    main_wrapper_beast_wrapper2_score.innerHTML = 'Score:   ';
    var main_wrapper_beast_wrapper2_number = document.createElement('p');
    main_wrapper_beast_wrapper2_number.className = 'main_wrapper_beast_wrapper2_number';
    main_wrapper_beast_wrapper2_number.innerHTML = 'Score:   ';

    main_wrapper_best.appendChild(main_wrapper_beast_person);

    main_wrapper_beast_person.appendChild(main_wrapper_beast_wrapper1);
    main_wrapper_beast_wrapper1.appendChild(main_beast_img);
    main_wrapper_beast_person.appendChild(main_wrapper_beast_person_inform);
    main_wrapper_beast_person_inform.appendChild(main_wrapper_beast_pearson_inform_name);
    main_wrapper_beast_person_inform.appendChild(main_wrapper_beast_pearson_inform_email);

    main_wrapper_beast_person.appendChild(main_wrapper_beast_wrapper2_score);
    main_wrapper_beast_person.appendChild(main_wrapper_beast_wrapper2_number);
  }
