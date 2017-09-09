'use strict'

const dataFilename = 'chapter-data.js'
const initURL = 'https://shinzo-abes-dank-meme-emporium.github.io'

const grammar_results_ID = "#grammar-search-results";
const kanji_results_ID = "#kanji-search-results";

const database = [
  {
    course: 'JAPN0300',
    chapters: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7']
  },{
    course: 'JAPN0400',
    chapters: ['L8', 'L9', 'L10', 'L11', 'L12', 'L13', 'L14', 'L15']
  },{
    course: 'JAPN0500',
    chapters: ['L1']
  }
]


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
  {
    kanji: '',
    reading: '',
    meaning: '',
    (opt)kaku: 'hai' or ''
  }
]
*/
let total_kanji = [];

function noop() {}

function buildGrammarEntry(entry, path) {
  var gl_grammar_point = entry.grammar_point;
  var gl_spec = entry.spec;
  var gl_meaning = entry.meaning;
  var gl_use_obj = entry.use;
  var gl_example_list = entry.example;
  var gl_other = entry.other;

  /*
  use: {
    text: '',
    species: [
      {
        jap: '',
        eng: ''
      }
    ]
  }
  */

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
    }
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

  $(grammar_results_ID).append(grammar_entry);
}

function buildKanjiEntry(entry) {
  var kl_kanji = entry.kanji;
  var kl_reading = entry.reading;
  var kl_meaning = entry.meaning;

  var kl_suru = (entry.suru == 'hai');
  var kl_kaku = (entry.kaku == 'hai');

  var kl_class = '"kanji-entry';
  if(kl_kaku) { kl_class +=  ' kaku"'; }
  
  var kanji_entry = [
  '<div class=' + kl_class + '">',
  '  <kanji class="kanji">' + kl_kanji + '</kanji>',
  '  <kanji class="reading">' + kl_reading + '</kanji>',
  '  <kanji class="meaning">' + kl_meaning + '</kanji>',
  '</div>'
  ].join('\n');

  $(kanji_results_ID).append(kanji_entry);
}

function polyIncluded(test, ...argList) {
  let isIncluded = false;
  for (var i=0; i<argList.length; i++) {
    if (argList[i].includes(test)) {
      isIncluded = true;
    }
  }

  return isIncluded
}

function isMatch(splitQuery, grammar_entry) {
  if (splitQuery.length == 0) {
    return true;
  }
  else {
    let firstEl = splitQuery[0];
    let rest = splitQuery.slice(1);

    let grammar_point = grammar_entry.grammar_point;
    let grammar_alt_def = grammar_entry.alt_def;
    let grammar_meaning = grammar_entry.meaning;

    if (polyIncluded(firstEl, grammar_point, grammar_alt_def, grammar_meaning)) {
      return true && isMatch(rest, grammar_entry)
    }
    else {
      return false && isMatch(rest, grammar_entry)
    }
  }
}

function searchGrammar(query, callback) {
  $(grammar_results_ID).empty();
  $("#grammar-no-results").css("display", "none");

  callback = callback || noop

  let queryLowercase = query.toLowerCase();

  // does not split on space (ie: whole search with space is considered)
  // splits on '　＋' (ie: include things that have this AND this)
  let splitQuery = queryLowercase.split('　＋');

  let noResults = true;
  for (var i=0; i<total_grammar.length; i++) {
    let grammar_entry = total_grammar[i].entry;
    let grammar_path = total_grammar[i].path

    if (isMatch(splitQuery, grammar_entry)) {
      noResults = false;
      buildGrammarEntry(grammar_entry, grammar_path);
    } // and the next query, too
  }

  if (noResults) {
    $("#grammar-no-results").css("display", "block");
  }
}

function searchKanji(query, callback) {
  $(kanji_results_ID).empty();
  $("#kanji-no-results").css("display", "none");

  callback = callback || noop

  let noResults = true;
  for (var i=0; i<total_kanji.length; i++) {
    let kanji_entry = total_kanji[i];
    // let kanji_path = total_kanji[i].path;
    // not used... yet?

    let kanji = kanji_entry.kanji;
    let reading = kanji_entry.reading;
    let clean_reading = reading.replace(/[（）]/g,'')

    if (kanji.includes(query) || clean_reading.includes(query)) {
      noResults = false;
      buildKanjiEntry(kanji_entry);
    }
  }

  if (noResults) {
    $("#kanji-no-results").css("display", "block");
  }
}

$(window).on('load', function() {
  let grammar_ajaxes = [];
  let kanji_ajaxes = [];
  let dfd = $.Deferred();

  for (var courseIndex=0; courseIndex<database.length; courseIndex++) {
    let courseData = database[courseIndex];

    let coursePath = courseData.course;
    let courseChapters = courseData.chapters;

    for (var chapterIndex=0; chapterIndex<courseChapters.length; chapterIndex++) {
      let chapterPath = courseChapters[chapterIndex];

      grammar_ajaxes.push(function() {
        $.getScript({
          url: initURL + '/' + coursePath + '/' + chapterPath + '/' + dataFilename,
          success: function(data) {
            for (var grammarIndex=0; grammarIndex<chap_grammar_list.length; grammarIndex++) {
              let grammar_entry = chap_grammar_list[grammarIndex];
              let grammar_entry_path = initURL + '/' + coursePath + '/' + chapterPath + '/#content-grammar-point-' + grammarIndex;
              total_grammar.push({
                entry: grammar_entry,
                path: grammar_entry_path
              })
            }
          }
        })
      });

      var kanji_JSONpath = "/json/kanji/" + coursePath + "-" + chapterPath + "-kanji.JSON";

      kanji_ajaxes.push(function() {
        $.getJSON(kanji_JSONpath, function(json) {
          total_kanji = total_kanji.concat(json);
        }).fail(function(jqxhr, status, err) {
          console.log(status + ", " + err)
        });
      });
    }
  }

  dfd.done(grammar_ajaxes).done(function () { console.log("grammar loaded"); });
  dfd.done(kanji_ajaxes).done(function () { console.log("kanji loaded"); });
  dfd.resolve();

  // i don't actually think these loading texts work; they are an artefact of when I didn't use deferred; TO FIX
  $("#grammar-loading-text").css("display", "none"); }
  $("#kanji-loading-text").css("display", "none"); }
  
  $(".search-bar").css("display", "initial");
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

$("#kanji-clear-button").click(function() {
  $(kanji_results_ID).empty();
});
$("#grammar-clear-button").click(function() {
  $(grammar_results_ID).empty();
});









