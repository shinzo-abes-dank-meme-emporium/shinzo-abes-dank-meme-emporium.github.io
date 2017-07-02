"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第８課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
var chap_kanji_str = 'kanji,reading,meaning,kaku\n教師,きょうし,teacher,\n係の者,かかり（の）もの,person who handles a particular matter,\n（〜と）代わる,か（わる）,to replace someone,\n対象,たいしょう,target,\n詳しい,くわ（しい）,detailed,hai\n以後,いご,after,\n個人,こじん,"individual, private, personal",hai\n会社員,かいしゃいん,company employee,\n主婦,しゅふ,housewife,\n家庭教師,かていきょうし,private tutor,\n相手をする,あいて（をする）,to keep company with,hai\n親類,しんるい,relatives,\n翻訳,ほんやく,translation,\n特技,とくぎ,"special talent, skill",hai\n雇う,やと（う）,to hire,hai\n漂流者,ひょうりゅうしゃ,a person who goes adrift in the ocean,\n大陸,たいりく,continent,hai\n（〜に）流れ着く,なが（れ）つ（く）,to drift ashore,\n感動する,かんどう（する）,"to be impressed, touched, moved",\n祖先,そせん,ancestor,\n伝説,でんせつ,legend,hai\n憧れ,あこが（れ）,a longing,\n鎖国,さこく,national isolation,hai\n開国,さいこく,to open the country (する）,hai\n白人,はくじん,White person,\n入国,にゅうこく,to enter a country (する),hai\n許す,ゆる（す）,"to permit, forgive",hai\n決心する,けっしん（する）,"to be determined, decide (ie: 決める)",\n日本近海,にほんきんかい,"""off the coast of Japan""",hai\n捕鯨船,ほげいせん,whaling vessel,\n方法,ほうほう,method,hai\n幸い,さいわ（い）,fortunately,\n（〜へ）向かう,む（かう）,to head twoard,\n船長,せんちょう,ship captain,\n陸地,りくち,land,\n上陸,じょうりく,to land (する）,\n幕府,ばくふ,the ＳＨＯＧＵＮＡＴＥ,\n決定する,けってい（する）,"to be determined, decide (ie: 決める)",\n難破する,なんぱ（する）,to be ship wrecked,\n現れる,あらわ（れる）,"to appear (not ""to seem""), to turn up (not ""to get lit"")",\n感じる,かん（じる）,"to feel (eg: that, a feeling, etc)",\n通訳,つうやく,an interpreter,hai\n不便（な）,ふべん（な）,inconvenient,hai\n選ぶ,えら（ぶ）,"to choose, to select",\n侍,さむらい,a ＳＡＭＵＲＡＩ,hai\n学ぶ,まな（ぶ）,"to learn, to study",hai\n送り返す,おく（り）かえ（す）,"to send back, to deport",\n一生,いっしょう,throughout one\'s life,\n死ぬ,し（ぬ）,to die,hai\n病死する,びょうし（する）,to die from an illness,\n語学,ごがく,language study,hai\n天才,てんさい,genius,hai\n求める,もと（める）,"to ask, to seek",\n戻る,もど（る）,to return (ie: to come back),hai\n江戸,えど,Edo (historic Tōkyō),hai\n条約,じょうやく,a treaty,\n日米,にちべい,Japan-US,hai\n交渉,こうしょう,negotiation,hai\n立派に,りっぱ（に）,splendidly,\n役立つ,やくだ（つ）,to be useful,hai\n・,〜のことで,(polite) 〜について,\n・,そちら,"(polite) ""on your side"" (そこ）",\n・,おります,(humble) います (ie: 〜ています）,\n・,なんか,"(at the end of lists) ""like"" or ""etc.""",\n・,ちょうど,"right, just, exactly",\n翌〜,よく〜,"the next 〜 (eg: year, day, month, etc.)",\n足りる,た（りる）,to be sufficient,\n・,そのころ,"then, at that time",\n探す,さが（す）,to look for,\n受付,うけつけ,receptionist,\n少々,しょうしょう,"a little, a short while (formal 少し）",\n主任,しゅにん,person in charge,\n手っ取り早い,てっとりはやい,quick and simple,\n・,しゃべる,more casual 話す,\n・,ＯＬ,office lady,\n掲示板,けいじばん,bulletin board,\n口,くち,(in context) job opening,\n偏集,へんしゅう,editing (eg: a magazine),\n早速〜する,さっそく（〜する）,to lost no time in 〜ing,\nぴったり（な）,ぴったり（な）,perfect fit,\n思い出す,おも（い）だ（す）,"to recall, to remember (but not as in 覚える）",\n（〜に）対す,たい（す）,towards 〜,\n抱く,いだ（く）,to hold (transitive) (written expression),\n・,やがて,"before long, soon",\n方面,ほうめん,"direction, area",\n驚く,おどろ（く）,to be surprised,\n彼,かれ,3rd person male pronoun,\n軍権,ぐんけん,warship,';



/*
{
  topic: '',
  spec: '',
  subtopic_list: [
    {
      subtopic: '',
      desc: 
      [
        ''
      ]
    }
  ]
}
*/

var chap_note_list = [
  {
    topic: 'そう・らしい・よう',
    spec: 'そう・らしい・よう',
    subtopic_list: [
      {
        subtopic: '',
        desc: 
        [
          'そう：　hands to eyes',
          'らしい：hands to ears',
          'よう：　hands to read'
        ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: 'ＸはＹくらいです',
    spec: 'ＸはＹくらいです',
    meaning: '"Y is about the only X"',
    use: {
      text: 'This expression is used when Y is about the only case where X holds true.  X and Y can be nouns or noun phrases (ie: verbの・こと）.  です may be substituted for an appropriate sentence ending verb (like かもしれない、でしょう、etc.).  くらい or ぐらい may be used.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本人がのんびりできるの<b>は</b>、大学生の時',
          highlight: 'くらいかもしれない',
          post: '。』'
        },
        translation: 'College years might be the only time when Japanese people can relax.'
      },{
        sentence: {
          ante: '『教えた経験<b>は</b>、ボランティアで子供に日本語を教えた',
          highlight: 'くらいです',
          post: '。』'
        },
        translation: 'About the only teaching experience (I have) is teaching Japanese to children as a volunteer.'
      }
    ],
    other: 'くらい means "about", "approximately", "around", or "〜, or so".'
  },{
    grammar_point: 'やっぱり',
    spec: 'やっぱり',
    meaning: 'As expected; Also; Again',
    use: {
      text: 'Conversational form of やはり。  Adverb which indicates that what is being said is what was expected from general or specific knowledge.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『漢字は面白いですが、',
          highlight: 'やっぱり',
          post: '覚えるのに時間がかかります。』'
        },
        translation: 'Kanji are interesting, but (as expected) they take a long time to learn.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜さえ〜ば（result)',
    spec: '〜さえ〜ば（result)',
    meaning: 'If only you 〜、then (result) will/would be.',
    use: {
      text: 'A better way to think of this construction is as (condition)->(result), where (condition) is the 〜さえ〜ば construction and the (result) is the result which is conditioned on (condition).  さえ replaces particles が、を、は、も and other particles are inserted as 〜＿さえ (eg: 〜にさえ), as usual.  さえ means "even", "if only", "if just", "as long as".  Possible species as follows: ',
      species: [
        {
          jap: 'nounさえ + verb(ば)',
          eng: ''
        },{
          jap: 'verb(stem)さえ + する(ば)：すれば',
          eng: ''
        },{
          jap: 'verb(て)さえ + いる(ば)：いれば',
          eng: ''
        },{
          jap: '',
          eng: 'In some cases, there is a choice whether to use さえ to emphasize the noun or the verb.  When さえ follows a noun, it emphasizes that only the noun is necessary to achieve the result.  When さえ follows the verb in either form (stem or て) then it emphasizes that it is the action which will produce the desired result.  See example sentences.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『くすり',
          highlight: 'さえ飲めば',
          post: '、なおります。』'
        },
        translation: 'If only you would take your MEDICINE, you would get better.'
      },{
        sentence: {
          ante: '『くすりを',
          highlight: '飲みさえすれば',
          post: '、なおります。』'
        },
        translation: 'If only you would TAKE your medicine, you would get better.'
      },{
        sentence: {
          ante: '『ひま',
          highlight: 'さえあれば',
          post: '、幸せです。』'
        },
        translation: 'The only thing I need to be happy is free time. (If only I have free time, I am happy)'
      },{
        sentence: {
          ante: '『漢字',
          highlight: 'さえ知っていれば',
          post: '新聞が読めるというわけではありません。』'
        },
        translation: 'It is not the case that knowing kanji guarantees that you will be able to read newspapers.  (Just knowing kanji does not mean that you will be able to read newspapers.)'
      }
    ],
    other: 'Translating it as "If only, then" seems to be a literal but poor translation.  The super literal (and IMO more clear) translation might be: "Conditioned on just/only verb/noun, thus result/statement".'
  },{
    grammar_point: '〜はず',
    spec: '〜はず',
    meaning: '"Supposed to 〜"; "Expected to 〜"',
    use: {
      text: 'Expresses one\'s conjecture with some certainty that some thing is expected/suposed to be.  Can be used with nounの、(adjな）な、verp(plain), (adjい）い。Is usually followed by だ・です。Can also be used with plain negations of the above options.',
      species: [
        {
          jap: 'nounの + はず：',
          eng: 'supposed to be noun'
        },{
          jap: '(adjな）な + はず：',
          eng: 'supposed to be adj'
        },{
          jap: '(adjい）い + はず：',
          eng: 'supposed to be adj'
        },{
          jap: 'verb(plain) + はず：',
          eng: 'supposed to verb'
        },{
          jap: 'verb(pot.)(plain) + はず：',
          eng: 'supposed to be able to verb'
        }
      ],
    },
    example: [
      {
        sentence: {
          ante: '『今日は日曜日だから、銀行は休み',
          highlight: 'のはず',
          post: 'です。』'
        },
        translation: 'It\'s Sunday today, and so banks are supposed to be closed.'
      },{
        sentence: {
          ante: '『日本に住んでいだから日本語が上手',
          highlight: 'なはず',
          post: 'です。』'
        },
        translation: 'His Japanese should be good since he lived in Japan.'
      },{
        sentence: {
          ante: '『中古（ちゅうこ）なら安い',
          highlight: 'はず',
          post: 'です。』'
        },
        translation: 'If it\'s a used one, it should be cheap.'
      },{
        sentence: {
          ante: '『日本語の三年になれば、日本語の新聞が読める',
          highlight: 'はず',
          post: 'です。』'
        },
        translation: 'Students who are in Third Year Japanese should be able to read newspapers in Japanese.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜みたい',
    spec: '〜みたい',
    meaning: '"Seems", "Appears to be", "Looks like", "Is like".  Colloquial form of ようだ。(ie: seems to be, based on specific evidence)',
    use: {
      text: 'Unlike ようだ、みたい follows bare nouns and (adjな) stem.  However!, it does follow plain forms of (adjい) and verbs.  Can follow negations, in which case the 〜ない retains the い as with (adjい).',
      species: [
        {
          jap: 'noun + みたい：',
          eng: 'appears to be noun'
        },{
          jap: '(adjな）+ みたい：',
          eng: 'appears to be adj'
        },{
          jap: '(adjい）い + みたい：',
          eng: 'appears to be adj'
        },{
          jap: 'verb(plain) + みたい：',
          eng: 'appears to verb'
        }
      ],
    },
    example: [
      {
        sentence: {
          ante: '『まるで夢',
          highlight: 'みたい',
          post: '。』'
        },
        translation: 'It\'s like a dream.  (lit. It seems just like a dream.)'
      },{
        sentence: {
          ante: '『来年結婚する',
          highlight: 'みたい',
          post: 'よ。』'
        },
        translation: 'It looks like he/she is going to get married next year.'
      }
    ],
    other: '〜みたい、using the same grammatical formations, ALSO means "like", "sort of", "resembling", or "similar to".  So I guess use your best judgement.'
  },{
    grammar_point: '(noun)として',
    spec: '(noun)として',
    meaning: '"As a 〜".',
    use: {
      text: 'Describes another noun, which noun is "as" the noun used in this construction.',
      species: [],
    },
    example: [
      {
        sentence: {
          ante: '『英語の教師',
          highlight: 'として',
          post: '日本へ行くアメリカ人は、年々増えているようだ。』'
        },
        translation: 'It seems that the number of Americans who go to Japan as English teachers is increasing every year.'
      },{
        sentence: {
          ante: '『チョムスキーは、言語学者',
          highlight: 'として',
          post: 'よりも政治運動（せいじうんどう）で有名かもしれない。』'
        },
        translation: 'Chomsky is perhaps more famous for his political activities than as a linguist. (wat)'
      }
    ],
    other: 'In example sentence 1, it seems like in Japanese that 増える "to increase" does not need to refer specifically to a number, as it does in English.  Instead, can it refer to "people" in general and one can infer that one means "number of people" from context?  SAT questions come back to haunt me...'
  },{
    grammar_point: '(noun）ため（に）',
    spec: '(noun）ため（に）',
    meaning: '"Because (of) [noun]"; "Due to [noun]".',
    use: {
      text: 'Indicates the reason or cause for the following clause.  Follows nounの、(adjな）な、(adjい）い、and verb(plain).  に is an optional particle and usually omitted.  Can be used with negations.  Is a formal expression and usually used in writting or formal situations.',
      species: [
        {
          jap: 'nounの + ため（に）：',
          eng: 'because of noun'
        },{
          jap: '(adjな）な + ため（に）：',
          eng: 'due to being adj'
        },{
          jap: '(adjい）い + ため（に）：',
          eng: 'due to being adj'
        },{
          jap: 'verb(plain) + ため（に）：',
          eng: 'because of doing verb'
        },{
          jap: '(cf. Chapter 5)',
          eng: ''
        },{
          jap: '',
          eng: '〜ため（に）also indicates a purpose for an action.  Usually, the correct translation partly depends on context.  However, if the verb follows an adjective,a verb which indicates state such as 分かる、できる、ある、etc., or verb(past) it ALWAYS indicates a reason.'
        },{
          jap: '日本語を<u>勉強する</u><b>ため</b>、日本行った。：',
          eng: 'He went to Japan in order to study Japanese.'
        },{
          jap: '日本語を<u>勉強した</u><b>ため</b>、日本行った。：',
          eng: 'He went to Japan because he studied Japanese.'
        }
      ],
    },
    example: [
      {
        sentence: {
          ante: '『大雪',
          highlight: 'のため',
          post: '、フライトがキャンセルされた。』'
        },
        translation: 'The flight was cancelled because of heavy snow.'
      },{
        sentence: {
          ante: '『漢字は複雑',
          highlight: 'なため',
          post: '、覚えるのに時間がかかる。』'
        },
        translation: 'Kanji take a long time because they are complex.'
      },{
        sentence: {
          ante: '『英語のできる通訳（つうやく）がいない',
          highlight: 'ため',
          post: '、幕府（ばくふ）は大変不便に感じていた。』'
        },
        translation: 'Because there was no interpreter who could handle English, the Shogunate was greatly inconvenienced.'
      }
    ],
    other: 'In example sentence 1, it seems like in Japanese that 増える "to increase" does not need to refer specifically to a number, as it does in English.  Instead, can it refer to "people" in general and one can infer that one means "number of people" from context?  SAT questions come back to haunt me...'
  }
];


/**
{
  grammar_point: '',
  spec: '',
  meaning: '',
  use: {
    text: '',
    species: [
      {
        jap: '',
        eng: ''
      }
    ],
  },
  example: [
    {
      sentence: {
        ante: '',
        highlight: '',
        post: ''
      },
      translation: ''
    },
  ],
  other: '...'
}
*/














