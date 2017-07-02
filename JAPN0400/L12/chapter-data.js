"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１２課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
var chap_kanji_str = 'kanji,reading,meaning,kaku\n顔色,かおいろ,complexion,\n研究室,けんきゅうしつ,teacher\'s office,\n吐く,は（く）,to vomit,\nお腹,（お）なか,stomach,\n痛い,いた（い）,"to hurt / ache, painful, sore",hai\nお医者さん,（お）いしゃ（さん）,doctor,hai\n診る,み（る）,to examine,\nお大事に,（お）だいじ（に）,"""take care!"" (to someone sick)",\n熱,ねつ,fever,hai\n寒気がする,さむけ（がする）,to feel a chill,\n食欲,しょくよく,appetite,hai\n下痢,げり,diarrhea,\n薬,くすり,medicine,hai\n服用する,ふくよう（する）,to take medicine,\n柔らかい,やわ（らかい）,soft,\n治る,なお（る）,to get better,hai\nしかめっ面,（しかめっ）つら,grimace,\n歯,は,tooth,\n歯医者,はいしゃ,dentist,\n急に,きゅう（に）,"quickly, suddenly",\n突然,とつぜん,all of a sudden; short notice,\n患者,かんじゃ,a patient,\n空く,あ（く）,to become vacant,\n運がいい,うん（がいい）,lucky,hai\n診察,しんさつ,examination of a patient,hai\n部分,ぶぶん,part,hai\n素人,しろうと,layman,\n断食,だんじき,a fast,hai\n主張する,しゅちゅう（する）,"to assert, to insist",hai\n黒砂糖,くろざとう,brown sugar,\n消化,しょうか,digestion,hai\n比較的に,ひかくてき（に）,relatively,hai\n卵,たまご,egg,\n胃,い,stomach,\n代わり,か（わり）,"instead of; in pace of; alternative, substitute",\n栄養,えいよう,nutrition,\n成功,せいこう,success,\n症状,しょうじょう,symptom,hai\n具合,ぐあい,condition,\n昼ごはん,ひる（ご）はん,lunch,\n感じる,かん（じる）,"to feel, to sense",\n療法,りょうほう,"therapeutics, treatment, therapy",\n治療,ちりょう,meidcal treatment,hai\nタンパク質,（タンパク）しつ,protein,\n必要な,ひつよう（な）,necessary,hai\n余分な,よぶん（な）,extra,\n科学的な,かがくてき（な）,scientific,hai\n証明する,しょうめい（する）,to prove,hai\n雰囲気,ふんいき,atmosphere,\n完全な,かんぜん（な）,"perfect, complete",hai\n毒,どく,"toxin, poison",\n散歩,さんぽ,a walk (for pleasure),\n聴く,き（く）,to listen (to music),\n腹をたてる,はら（をたてる）,to get angry,\n決して,けっ（して）,never,hai\n溜まる,た（まる）,"to accumulate, to pile up, to gather",\nお勧め,（お）すす（め）,"suggestion, recommendation",\n健康な,けんこう（な）,healthy,\n・,きっと,surely; definitely,\n・,すごく,very (a less strong that とても）,';



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
    topic: '無',
    spec: '無',
    subtopic_list: [
      {
        subtopic: '無',
        desc: 
        [
          '無',
          '無',
          '無'
        ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: 'ろくに ～ない',
    spec: 'ろくに ～ない',
    meaning: '"Not much ～"; "Not enough ～"',
    use: {
      text: 'The adverb ろくに means "enough" or "sufficient", but is always followed by a negative predicate.  Thus, the meaning always implies a lack of sufficiency.  Maybe translate the whole thing as "Not sufficiently ～".  Can be used with nouns using ろくな。',
      species: [
        {
          jap: 'ろくに verb(plain)[neg.]',
          eng: '：not sufficiently verb'
        },{
          jap: 'ろくに (adjい)くない',
          eng: '：not sufficiently adj'
        },{
          jap: 'ろくに (adjな)じゃない',
          eng: '：not sufficiently adj'
        },{
          jap: 'ろくな (noun)じゃない',
          eng: '：not sufficiently noun'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: 'ろくに',
          post: '勉強<b>しない</b>のに文句ばかり言うのは困る。』'
        },
        translation: 'It\'s not good to complain without studying sufficiently.'
      },{
        sentence: {
          ante: '『病気の時は',
          highlight: 'ろくに食べられない',
          post: '。』'
        },
        translation: 'When you are sick, you can hardly eat anything. (lit. you are not able to eat sufficiently)'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜せい',
    spec: '〜せい',
    meaning: '"Perhaps because 〜"',
    use: {
      text: 'Gives a reason or a cause, usually for an undesireable situation.  Has some indication of blame being put upon the cause.  せい can be followed by で or から to further emphasize reason.  せい is a noun, and is used as such:',
      species: [
        {
          jap: '(noun)の せい',
          eng:''
        },{
          jap: '(adjい)い せい',
          eng:''
        },{
          jap: '(adjな)な せい',
          eng:''
        },{
          jap: 'verb(plain) せい',
          eng:''
        },{
          jap: 'YをXのせいにする',
          eng:'：To blame X for Y.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『学生できないのは先生',
          highlight: 'のせい',
          post: 'だろうか。』'
        },
        translation: 'Is it because of the teacher that students don\'t do well?'
      },{
        sentence: {
          ante: '『自分の間違いを他人（たにん）',
          highlight: 'のせい',
          post: 'にするのはよくない。』'
        },
        translation: 'It\'s not good to blame others for your own mistakes.'
      },{
        sentence: {
          ante: '『それは気',
          highlight: 'のせい',
          post: 'だよ。』'
        },
        translation: 'It\'s just your imagination.'
      }
    ],
    other: 'There is another construction called 〜せいか〜 in the next section.'
  },{
    grammar_point: 'S1 せいか、S2',
    spec: 'S1 せいか、S2',
    meaning: '"Perhaps because S1, S2 holds".',
    use: {
      text: 'Gives a posisble reason for some undesirable situation in S2.',
      species: [
        {
          jap: '(noun)の せいか、〜',
          eng:''
        },{
          jap: '(adjい)い せいか、〜',
          eng:''
        },{
          jap: '(adjな)な せいか、〜',
          eng:''
        },{
          jap: 'verb(plain) せいか、〜',
          eng:''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『試験が悪かった',
          highlight: 'せいか',
          post: '、元気がない。』'
        },
        translation: 'He looks down, perhaps because he did badly on the test.'
      },{
        sentence: {
          ante: '『期末試験が近い',
          highlight: 'せいか',
          post: '、休みが多い。』'
        },
        translation: 'There are many absences, perhaps because the final exam is near.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜おかげ（で、S2)',
    spec: '〜おかげ（で、S2)',
    meaning: '"Thanks to 〜".',
    use: {
      text: '(cf. 〜せい because of (blame)) 〜おかげで is used when responsibility for a desireable situation is to be recognized.  It is used much like 〜せいか except for positive situations.  おかげ is a noun.',
      species: [
        {
          jap: '(noun)の おかげ（で、〜）',
          eng:''
        },{
          jap: '(adjい)い おかげ（で、〜）',
          eng:''
        },{
          jap: '(adjな)な おかげ（で、〜）',
          eng:''
        },{
          jap: 'verb(plain)おかげ（で、〜）',
          eng:''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『先生に日本語を教えていただいた',
          highlight: 'おかげで',
          post: '、日本語が話せるようになりました。』'
        },
        translation: 'Thanks to your teaching, I have become able to speak Japanese.'
      }
    ],
    other: 'NOT TO BE CONFUSED with 陰で（かげ（で））which means "behind somebody\'s back".'
  },{
    grammar_point: 'verb(て)ごらんなさい',
    spec: 'verb(て)ごらんなさい',
    meaning: '"Try verbing" (NOT TO USE to superiors)',
    use: {
      text: 'Polite form of verb(て)みなさい  〜なさい is used by superiors to give commands to those in lower status, and so 〜ごらんなさい cannot be used by a person of lower status to their superior.  verb(て)ごらん is a more informal version (eg: used by mothers to their children).',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『少し',
          highlight: '休んでごらんなさい',
          post: '。きっと楽になりますよ。』'
        },
        translation: 'Go and reast for a bit.  I\'m sure you will feel better'
      }
    ],
    other: 'cf. verb(て)みなさい "try verbing"'
  },{
    grammar_point: '(noun)ぐらい',
    spec: '(noun)ぐらい',
    meaning: '"The [least / liminal / lower-bounded] noun"',
    use: {
      text: 'Indicates that the noun is the lowest degree.  ie: easiest, lightest, shortest, etc.  The specific superlative adjective seems to be implied.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『おなかの痛い時は、スープ',
          highlight: 'ぐらい',
          post: 'にした方がいいでしょう。』'
        },
        translation: 'When you have a stomachache, you should limit your diet to something light like soup. (lit. it would be better if you limit yourself to soup)'
      },{
        sentence: {
          ante: '『一年で習った漢字',
          highlight: 'ぐらい',
          post: '書けないと困ります。』'
        },
        translation: 'It\'s a problem if you can\'t write at least the kanji you learned in your first year.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜に越したことはない',
    spec: '〜に越したことはない',
    meaning: '（「越す」こ（す）：to surpass, to exceed) "Nothing can be better than 〜"; "The best thing to do is 〜".',
    use: {
      text: 'Usually used with verb(plain)[pres.].  ie:',
      species: [
        {
          jap: 'verb(plain)[pres.]に越したことはない',
          eng: '：Nothing can be better than doing verb'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『病気の時は',
          highlight: '寝るに越したことはない',
          post: '。』'
        },
        translation: 'When you are diseased, sleeping is the best thing to do.'
      },{
        sentence: {
          ante: '『日本語が話せるようになりたかったら、日本へ',
          highlight: '行くに越したことはない',
          post: 'と思います。』'
        },
        translation: 'If you want to be come proficient in Japanese, the best thing to do is to go to Japan.'
      }
    ],
    other: '...'
  },{
    grammar_point: '思うように',
    spec: '思うように',
    meaning: '"As one wishes"; "According to one\'s will".',
    use: {
      text: 'Is an adverbial phrase.  Thankfully, it literally means "As one wishes" or "like-one\'s-wish-ingly.  In the book, it\'s preceeded by なかなか followed by a [neg.] to mean "By no means 〜 as one wishes".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『仕事はなかなか',
          highlight: '思うように',
          post: 'はかどらないものだ。』'
        },
        translation: 'Work generally does not get done as quickly as one wishes. (lit. It is quite difficult to progress work as one wishes, you know.)'
      },{
        sentence: {
          ante: '『論文はなかなか',
          highlight: '思うように',
          post: '書けなくて困っています。』'
        },
        translation: 'I\'m troubled because I can\'t write my thesis to my satisfaction. (lit. I\'m troubled because I can\'t write it according to my will)'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜がち',
    spec: '〜がち',
    meaning: '"Tends to 〜"; "To be prone to 〜"; "To be apt to 〜".',
    use: {
      text: 'Follows the stem of certain verbs and nouns.  Expresses idea that one tends to do something, with a negative implication.  がち can be followed by particles.  When がち modifies another noun or a nominalizer like こと、it will be followed by 〜な。',
      species: [
        {
          jap: '(noun) がち',
          eng: ''
        },{
          jap: 'verb(stem) がち',
          eng: ''
        },{
          jap: '(eg) しがち',
          eng: '：tend to do'
        },{
          jap: '(eg) ありがち',
          eng: '：tend to be (ie: is common)'
        },{
          jap: '〜がち＿',
          eng: '：for placement of particles'
        },{
          jap: '〜がちな(noun)',
          eng: '：if it is followed by a noun / nominalizer'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本語が少し話せても読み書きは全然できないというのは、外国人の場合',
          highlight: 'ありがち',
          post: 'なことだ。』'
        },
        translation: 'It is often the case for foreigners to be unable to read or write Japanese, even if they can speak it.'
      },{
        sentence: {
          ante: '『アメリカではあまり',
          highlight: '遠慮（えんりょ）がち',
          post: 'にしない方がいい。』'
        },
        translation: 'It\'s better not to be reserved in America.'
      }
    ],
    other: '...'
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














