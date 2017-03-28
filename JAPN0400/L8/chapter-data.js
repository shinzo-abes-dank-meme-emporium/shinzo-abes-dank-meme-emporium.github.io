"use strict";

const local_course_name = '日本語４００';
const local_course_path = 'JAPN0400'
const local_chap_name = '第８課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n教師,きょうし,teacher,\n係の者,かかり（の）もの,person who handles a particular matter,\n（〜と）代わる,か（わる）,to replace someone,\n対象,たいしょう,target,\n詳しい,くわ（しい）,detailed,hai\n以後,いご,after,\n個人,こじん,"individual, private, personal",hai\n会社員,かいしゃいん,company employee,\n主婦,しゅふ,housewife,\n家庭教師,かていきょうし,private tutor,\n相手をする,あいて（をする）,to keep company with,hai\n親類,しんるい,relatives,\n翻訳,ほんやく,translation,\n特技,とくぎ,"special talent, skill",hai\n雇う,やと（う）,to hire,hai\n漂流者,ひょうりゅうしゃ,a person who goes adrift in the ocean,\n大陸,たいりく,continent,hai\n（〜に）流れ着く,なが（れ）つ（く）,to drift ashore,\n感動する,かんどう（する）,"to be impressed, touched, moved",\n祖先,そせん,ancestor,\n伝説,でんせつ,legend,hai\n憧れ,あこが（れ）,a longing,\n鎖国,さこく,national isolation,hai\n開国,さいこく,to open the country (する）,hai\n白人,はくじん,White person,\n入国,にゅうこく,to enter a country (する),hai\n許す,ゆる（す）,"to permit, forgive",hai\n決心する,けっしん（する）,"to be determined, decide (ie: 決める)",\n日本近海,にほんきんかい,"""off the coast of Japan""",hai\n捕鯨船,ほげいせん,whaling vessel,\n方法,ほうほう,method,hai\n幸い,さいわ（い）,fortunately,\n（〜へ）向かう,む（かう）,to head twoard,\n船長,せんちょう,ship captain,\n陸地,りくち,land,\n上陸,じょうりく,to land (する）,\n幕府,ばくふ,the ＳＨＯＧＵＮＡＴＥ,\n決定する,けってい（する）,"to be determined, decide (ie: 決める)",\n難破する,なんぱ（する）,to be ship wrecked,\n現れる,あらわ（れる）,"to appear (not ""to seem""), to turn up (not ""to get lit"")",\n感じる,かん（じる）,"to feel (eg: that, a feeling, etc)",\n通訳,つうやく,an interpreter,hai\n不便（な）,ふべん（な）,inconvenient,hai\n選ぶ,えら（ぶ）,"to choose, to select",\n侍,さむらい,a ＳＡＭＵＲＡＩ,hai\n学ぶ,まな（ぶ）,"to learn, to study",hai\n送り返す,おく（り）かえ（す）,"to send back, to deport",\n一生,いっしょう,throughout one\'s life,\n死ぬ,し（ぬ）,to die,hai\n病死する,びょうし（する）,to die from an illness,\n語学,ごがく,language study,hai\n天才,てんさい,genius,hai\n求める,もと（める）,"to ask, to seek",\n戻る,もど（る）,to return (ie: to come back),hai\n江戸,えど,Edo (historic Tōkyō),hai\n条約,じょうやく,a treaty,\n日米,にちべい,Japan-US,hai\n交渉,こうしょう,negotiation,hai\n立派に,りっぱ（に）,splendidly,\n役立つ,やくだ（つ）,to be useful,hai\n・,〜のことで,(polite) 〜について,\n・,そちら,"(polite) ""on your side"" (そこ）",\n・,おります,(humble) います (ie: 〜ています）,\n・,なんか,"(at the end of lists) ""like"" or ""etc.""",\n・,ちょうど,"right, just, exactly",\n翌〜,よく〜,"the next 〜 (eg: year, day, month, etc.)",\n足りる,た（りる）,to be sufficient,\n・,そのころ,"then, at that time",\n探す,さが（す）,to look for,\n受付,うけつけ,receptionist,\n少々,しょうしょう,"a little, a short while (formal 少し）",\n主任,しゅにん,person in charge,\n手っ取り早い,てっとりはやい,quick and simple,\n・,しゃべる,more casual 話す,\n・,ＯＬ,office lady,\n掲示板,けいじばん,bulletin board,\n口,くち,(in context) job opening,\n偏集,へんしゅう,editing (eg: a magazine),\n早速〜する,さっそく（〜する）,to lost no time in 〜ing,\nぴったり（な）,ぴったり（な）,perfect fit,\n思い出す,おも（い）だ（す）,"to recall, to remember (but not as in 覚える）",\n（〜に）対す,たい（す）,towards 〜,\n抱く,いだ（く）,to hold (transitive) (written expression),\n・,やがて,"before long, soon",\n方面,ほうめん,"direction, area",\n驚く,おどろ（く）,to be surprised,\n彼,かれ,3rd person male pronoun,\n軍権,ぐんけん,warship,';



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

const chap_note_list = [
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

const chap_grammar_list = [
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
      text: 'A better way to think of this construction is as (condition)->(result), where (condition) is the 〜さえ〜ば construction and the (result) is the result which is conditioned on (condition).  さえ replaces particles が、を、は、も and other particles are inserted as 〜＿さえ (eg: 〜にさえ), as usual.  Possible species as follows: ',
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
    other: 'Translating it as "If only, then" seems to be a literal but poor translation.  The super literal (and IMO more clear) translation might be: "Conditioned on just/only verb/noun, thus result/statement".  HOW DOES さえ DIFFER FROM だけ？'
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
  other: ''
}
*/














