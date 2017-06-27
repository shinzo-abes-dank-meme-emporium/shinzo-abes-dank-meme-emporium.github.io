"use strict";

const local_course_name = '日本語４００';
const local_course_path = 'JAPN0400'
const local_chap_name = '第１１課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n問題,もんだい,problem,\n遅い,おそ（い）,late,\n文句,もんく,a complaint,\n文句を言う,（文句を）いう,to complain (always use 言う）,\n街,まち,in town,\n時間が経つ,（時間が）た（つ）,(time) passes,\n必ず,かなら（ず）,"surely, in every case",hai\n関係,かんけい,relationship,hai\n独立,どくりつ,independence（する：to be independent),hai\n人間,にんげん,"person, human being",hai\n寝坊する,ねぼう（する）,to oversleep,\n怒る,おこ（る）,to get ａｎｇｅｒｙ,hai\n我慢,がまん,"patience（する：to endure, put up with)",\n暮らす,く（らす）,to live,\n長い,なが（い）,long,hai\n短い,みじか（い）,short,hai\n過ごす,す（ごす）,to spend time,\n得る,え（る）,to obtain,hai\n笑顔,えがお,"smile, a smiling face",\n似合う,にあ（う）,to suit / to be becoming (of a person),\n気遣う,きづか（う）,to be concerned about,\n形容する,けいよう（する）,to express figuratively,\n溶け込む,と（け）こ（む）,to melt into; to become a part of,hai\n身振り,みぶ（り）,gesture,\n相違,そうい,difference,hai\n積極的に,せっきょくてき（に）,actively,hai\n参加する,さんか（する）,to participate,hai\n尋ねる,たず（ねる）,to inquire,\n求める,もと（める）,"to seek, to look for",\n彼女,かのじょ,she; one\'s girlfriend,\nアメリカ流,（アメリカ）りゅう,the ＡＭＥＲＩＣＡＮ way,hai\n常に,つね（に）,always,hai\n仕方,しかた,"way, method",\n単語,たんご,"word, vocabulary",\n納得する,なっとく（する）,to be convinced,\n先手を打つ,せんて（を）う（つ）,to make a move before the other person,\n異文化,いぶんか,differnt culture,hai\n圏,けん,"ken, sphere (of knowledge)",\n身を以て,み（を）もっ（て）,personally,\n目に余る,め（に）あま（る）,to be too much (to tolerate),\n遠慮,えんりょ,"reserve, restraint（する：to reserve onself)",\n遠慮なく,えんりょ（なく）,"(when opening gifts) ""I do not reserve myself""",\n注意,ちゅうい,the state of caution（する：being careful),hai\n助言,じょげん,advice,\n与える,あた（える）,to give (advice),\n口喧しい,くちやかま（しい）,critical (ie: of criticism),\n陰で,かげ（で）,behind someone\'s back,\n悪口を言う,（わるくち）を言う,to speak ill of,\n甘い,あま（い）,"sweet, delicious; lenient",\n甘くする,あま（くする）,to be lenient,\n失敗する,しっぱい（する）,to fail,\n使用,しよう,the use,\n許す,ゆる（す）,"to allow, to permit, to forgive",hai\n無限,むげん,that which is infinite,hai\n無限に,むげん（に）,without limit,\n結果,けっか,result,hai\n最後に,さいご（に）,at the end,\n洗濯,せんたく,laundry,\n精神,せいしん,spirit,hai\n薄らぐ,うす（らぐ）,"to fade, to decrease",\n悔やむ,く（やむ）,to regret,\n真の,しん（の）,true,\n妨げる,さまた（げる）,to prevent,hai\n涙を流す,なみだ（を）なが（す）,"to weep, to shed tears",hai\n決して（ない）,けっ（して）（ない）,by no means; never,hai\n無駄な,むだ（な）,wasteful,\n感想,かんそう,one\'s thoughts / impression,';



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

const chap_grammar_list = [
  {
    grammar_point: 'verb(plain)（もん／もの）ですから',
    spec: 'verb(plain)（もん／もの）ですから',
    meaning: '"Because of 〜"; "〜 happened, regretably"',
    use: {
      text: 'When verb is verb(plain)[past], there is a semblance of apology in the statment.  When the verb is verb(plain)[present], the speaker is just giving a reason or stating something that happened.  In both cases, the speaker feels bad for what happened and in both cases the situation could not be avoided.  The past form of verbs is used for apologies.',
      species: [
        {
          jap: 'verb(plain)[past]もんですから：',
          eng: 'Such verb happened, I appologize.'
        },{
          jap: 'verb(plain)[present]もんですから：',
          eng: 'Such verb happened, regretably.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: 'すみません。出かけようとしたところに家から電話が',
          highlight: 'かかたものですから',
          post: '。』'
        },
        translation: 'I\'m sorry.  It\'s because my parents called me just as I was about to leave the house. (Appologetic)'
      },{
        sentence: {
          ante: '『友達と街でばったり',
          highlight: '出会ったもんですから',
          post: '。』'
        },
        translation: 'It\'s because I happened to meet my friend in the city. (Appologetic)'
      },{
        sentence: {
          ante: '『このごろホストファミリーのお母さんに、よく文句',
          highlight: '言われるもんだから',
          post: '。』'
        },
        translation: '(In response to an observation that one looks down) This morning, I was scolded by my hostfamily mom. (Regretable)'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜うちに',
    spec: '〜うちに',
    meaning: '"While 〜"; "While 〜 situation holds"',
    use: {
      text: 'There are two versions of 〜うちに。 The second is explained below.  〜うちに is preceded by nouns, adjectives, and verbs in simple (る・／う／) or progressive/stative (〜ている) forms.  You should not use with past forms.  It expresses a sense of "while a certain situation holds".  うち means "inside", "within", and "while", among other things.',
      species: [
        {
          jap: '(noun)のうちに：',
          eng: 'While being a noun'
        },{
          jap: '(adjい)いうちに：',
          eng: 'While being adjい'
        },{
          jap: '(adjな)なうちに：',
          eng: 'While being adjな'
        },{
          jap: '(verb)(plain)うちに：',
          eng: 'While verb is the case'
        },{
          jap: '(verb)(ている)(plain)うちに：',
          eng: 'While verb state is the case'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '学生のうちに',
          post: '旅行をした方がいい。』'
        },
        translation: 'One should travel while still a student.'
      },{
        sentence: {
          ante: '『',
          highlight: '静かな（しず）うちに',
          post: '勉強をしておこう。』'
        },
        translation: 'I will get my study done while it is quiet.'
      },{
        sentence: {
          ante: '『',
          highlight: '若いうちに',
          post: '自分のしたいことをしておくといい。』'
        },
        translation: 'You should do what you want while you are still young.'
      },{
        sentence: {
          ante: '『日本に',
          highlight: 'いるうちに',
          post: '、一度富士山に登（のぼ）りたいと思います。』'
        },
        translation: 'I would like to climb Mt. Fuji while I am in Japan.'
      },{
        sentence: {
          ante: '『',
          highlight: '話しているうちに',
          post: '時間がたってしまった。』'
        },
        translation: 'Time flew by while we were talking.'
      }
    ],
    other: 'How does 〜うちに compare to 〜まま？'
  },{
    grammar_point: 'verb(plain)[neg.]うちに',
    spec: 'verb(plain)[neg.]うちに',
    meaning: '"Before 〜"; "Before 〜 happens"',
    use: {
      text: 'When 〜うちに is preceded by negative verbs, it means "before 〜 happens".  This only applies to verbs in the negative case.  Usually, adjectives are followed by なる[neg.] (ならない) which is used to convey "before something becomes adj".',
      species: [
        {
          jap: '(verb)[neg.]うちに：',
          eng: 'Before verb happens'
        },{
          jap: '(adjい／な)（く／に）ならないうちに：',
          eng: 'Before something becomes adj'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『ラーメンが',
          highlight: '冷たくならないうちに',
          post: '食べなさい。』'
        },
        translation: 'Please eat the ramen before it becomes cold.'
      },{
        sentence: {
          ante: '『母に',
          highlight: 'しかられないうちに',
          post: '宿題をします。』'
        },
        translation: 'I will do my homework before my mother scolds me.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜が気になる',
    spec: '〜が気になる',
    meaning: '"〜 weighs on one\'s mind"; "To be concerned about 〜"',
    use: {
      text: '〜 can be a noun or a phrase ending in a nominalized verb (verbの）。',
      species: [
        {
          jap: '(noun)が気になる：',
          eng: 'To be concerned about noun'
        },{
          jap: '(verb)(の)が気になる',
          eng: 'To be concerned about verb phrase'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '成績が気になります',
          post: '。』'
        },
        translation: 'I am worried about my grade.'
      },{
        sentence: {
          ante: '『ホームステイの学生の家族から手紙が一通（つう）も',
          highlight: '来ないのが気になるます',
          post: '。』'
        },
        translation: 'I am bothered by the fact that my host student\'s family has not even written a single letter to me.'
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














