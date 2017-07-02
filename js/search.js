'use strict'

const dataFilename = 'chapter-data.js'
const initURL = 'https://shinzo-abes-dank-meme-emporium.github.io'

const grammar_results_ID = "#grammar-search-results";
const kanji_results_ID = "#kanji-search-results";


/*
[
  {
    entry: {},
    path: ''
  }
]
*/
let total_grammar = [];

/*
[
  {kanji}
]
*/
let total_kanji = [];

const database = [
  {
    course: 'JAPN0300',
    chapters: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7']
  },{
    course: 'JAPN0400',
    chapters: ['L8', 'L9', 'L10', 'L11', 'L12', 'L13', 'L14', 'L15']
  }
]

function noop() {}

function buildGrammarEntry(entry, path) {
  var gl_grammar_point = entry.grammar_point;
  var gl_spec = entry.spec;
  var gl_meaning = entry.meaning;
  var gl_use_obj = entry.use;
  var gl_example_list = entry.example;
  var gl_other = entry.other;

  /*use: {
    text: '',
    species: [
      {
        jap: '',
        eng: ''
      }
    ],
  }*/

  var gl_use = gl_use_obj.text;
  var gl_use_species_list = gl_use_obj.species;
  for(var j=0; j<gl_use_species_list.length; j++) {
    var jap = gl_use_species_list[j].jap;
    var eng = gl_use_species_list[j].eng;
    gl_use += '<species class="combo"><species class="jap">' + jap + '</species><species class="eng">' + eng + '</species></species>';
  }

  /*example: [
    {
      sentence: {
        ante: '',
        highlight: '',
        post: ''
      },
      translation: ''
    },
  ]*/
  var sent_ante = gl_example_list[0].sentence.ante;
  var sent_highlight = gl_example_list[0].sentence.highlight;
  var sent_post = gl_example_list[0].sentence.post;
  var sent_translation = gl_example_list[0].translation;
  var gl_example = sent_ante + '<b class="eg-highlight">' + sent_highlight + '</b>' + sent_post + sent_translation;
  for(var j=1; j<gl_example_list.length; j++) {
    sent_ante = gl_example_list[j].sentence.ante;
    sent_highlight = gl_example_list[j].sentence.highlight;
    sent_post = gl_example_list[j].sentence.post;
    sent_translation = gl_example_list[j].translation;
    gl_example += '<br>' + sent_ante + '<b class="eg-highlight">' + sent_highlight + '</b>' + sent_post + sent_translation;
  }

  var grammar_entry = [ 
  '<div class="grammar-entry anchor">',
  '  <section class="grammar-point">' + gl_grammar_point + ' <a href="' + path + '">{>>>Go to Entry}</a>' + '</section>',
  '  <section class="grammar-meaning bg-grey-light"><grammar class="prepend">Meaning: </grammar><grammar>' + gl_meaning + '</grammar></section>',
  '  <section class="grammar-use bg-grey-dark"><grammar class="prepend">Use: </grammar><grammar>' + gl_use + '</grammar></section>',
  '  <section class="grammar-example bg-grey-light"><grammar class="prepend">Example: </grammar><grammar>' + gl_example + '</grammar></section>',
  '  <section class="grammar-other bg-grey-dark"><grammar class="prepend">Notes: </grammar><grammar>' + gl_other + '</grammar></section>',
  '</div>'
  ].join('\n');

  // console.log(grammar_entry);
  $(grammar_results_ID).append(grammar_entry);
}

function buildKanjiEntry(entry) {
  var kl_kanji = entry.kanji;
  var kl_reading = entry.reading;
  var kl_meaning = entry.meaning;
  var kl_class = '';
  if(entry.kaku == 'hai') { 
    kl_class =  '"kanji-entry kaku"'; 
  }
  else { 
    kl_class =  '"kanji-entry"'; 
  }
  
  var kanji_entry = [
  '<div class=' + kl_class + '">',
  '  <kanji class="kanji">' + kl_kanji + '</kanji>',
  '  <kanji class="reading">' + kl_reading + '</kanji>',
  '  <kanji class="meaning">' + kl_meaning + '</kanji>',
  '</div>'
  ].join('\n');

  $(kanji_results_ID).append(kanji_entry);
}

function searchGrammar(query, callback) {
  $(grammar_results_ID).empty();
  callback = callback || noop
  for (var i=0; i<total_grammar.length; i++) {
    let grammar_entry = total_grammar[i].entry;
    let grammar_path = total_grammar[i].path
    let grammar_point = grammar_entry.grammar_point;
    if (grammar_point.includes(query)) {
      buildGrammarEntry(grammar_entry, grammar_path)
    }
  }
}

function searchKanji(query, callback) {
  $(kanji_results_ID).empty();
  callback = callback || noop

  for (var i=0; i<total_kanji.length; i++) {
    let kanji_entry = total_kanji[i];
    // let kanji_path = total_kanji[i].path;

    let kanji = kanji_entry.kanji;
    let reading = kanji_entry.reading;
    let clean_reading = reading.replace(/[（）]/g,'')

    // console.log(kanji_entry)
    // console.log(clean_reading)

    if (kanji.includes(query) || clean_reading.includes(query)) {
      buildKanjiEntry(kanji_entry)
    }
  }
}

$(window).on('load', function() {
  for (var courseIndex=0; courseIndex<database.length; courseIndex++) {
    let courseData = database[courseIndex];

    let courseName = courseData.course;
    let courseChapters = courseData.chapters;

    for (var chapterIndex=0; chapterIndex<courseChapters.length; chapterIndex++) {
      let chapterName = courseChapters[chapterIndex];

      $.getScript({
        url: initURL + '/' + courseName + '/' + chapterName + '/' + dataFilename,
        success: function(data) {
          for (var grammarIndex=0; grammarIndex<chap_grammar_list.length; grammarIndex++) {
            let grammar_entry = chap_grammar_list[grammarIndex];
            let grammar_entry_path = initURL + '/' + courseName + '/' + chapterName + '/#content-grammar-point-' + grammarIndex;
            total_grammar.push({
              entry: grammar_entry,
              path: grammar_entry_path
            })
          }

          let kanji_list = $.csv.toObjects(chap_kanji_str);
          total_kanji = total_kanji.concat(kanji_list);
        }
      });
    }
  }
});

$("#grammar-submit-button").click(function() {
  var input = $('#grammar-search-input').val();
  searchGrammar(input)
});

$('#grammar-search-input').keyup(function(e) {
  if(e.which == 13) {
    var input = $('#grammar-search-input').val();
    searchGrammar(input)
  }
});

$("#kanji-submit-button").click(function() {
  var input = $('#kanji-search-input').val();
  searchKanji(input)
});

$('#kanji-search-input').keyup(function(e) {
  if(e.keyCode == 13) {
    var input = $('#kanji-search-input').val();
    searchKanji(input)
  }
});







