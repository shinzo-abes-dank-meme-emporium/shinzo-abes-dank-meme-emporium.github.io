"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１５課';

/**
{
  kanji: '',
  reading: '',
  alt_def: '',
    meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
var chap_kanji_str = 'kanji,reading,meaning,kaku\n協力する,きょうりょく（する）,to cooperate,hai\n都合がいい,つごう（がいい）,to be convenient,\n気配り,きくば（り）,consideration,\n教わる,おそ（わる）,to learn (from),\n働きかける,はたら（きかける）,to approach (someone),hai\n居心地がいい,いごこち（がいい）,to be comfortable,\n面,めん,aspect,hai\n社会人,しゃかいじん,"a working, full-fledged, member of society",\n対立,たいりつ,opposition; confrontation,\n好む,この（む）,to like; to prefer,\n妥協する,だきょう（する）,to compromise,hai\n海外,かいがい,"abroad, overseas",\n技術,ぎじゅつ,technology,hai\n印象,いんしょう,impression,\n残る,のこ（る）,to remain; to leave,\n入れ替える,い（れ）か（える）,to chage; to switch,\n飽きる,あ（きる）,to get bored,\n新発売,しんはつばい,new product on the market,\n新製品,しんせいひん,new product,hai\n敏感な,びんかん（な）,"sensitive, susceptible",\n飛びつく,と（びつく）,to jump at,\n周り,まわ（り）,around,\n〜達,〜たち,pluralizing suffix,\n語句,ごく,words and phrases,\n言い回し,い（い）まわ（し）,expression,\n耳にする,みみ（にする）,to hear,\n日常会話,にちじょうかいわ,everyday conversation,hai\n頻繁に,ひんぱん（に）,frequently; often,\n文脈,ぶんみゃく,context,\n判断する,はんだん（する）,to judge,hai\n徐々に,じょじょ（に）,gradually,\n使うよう,つか（うよう）,a way of using,\n幅広い,はばひろ（い）,wide; broad,\n要は,よう（は）,in a word; in short,\n粋な,いき（な）,stylistic; chic; cool,\n提案する,ていあん（する）,to suggest; to propose,\n奴,やつ,a guy,\n仲直りする,なかなお（りする）,to make up with,\n何気なく,なにげ（なく）,without much though,\n必死に,ひっし（に）,desperately,\n〜を〜叩き込む,〜たた（き）こ（む）,to hammer 〜 into 〜,\n登場する,とうじょう（する）,"to appear (on TV, etc.)",\n相応,そうおう,"suitability, fitness",\n価値基準,かちきじゅん,standard of value,hai\n特集,とくしゅう,special issue (ie: of a magazine),\n立国論,りっこくろん,theory of nation building,hai\n闊歩する,かっぽ（する）,"to stride, to swagger about",\n収める,おさ（める）,to put away; to include,\n著者,ちょしゃ,author,\n原題,げんだい,original title,\n大衆,たいしゅう,the general public,\n〜通り,〜とお（り）,just as 〜,\n同様,どうよう,"identical, equal to",\n認知する,にんち（する）,to acknowledge,\n説く,と（く）,to explain,hai\n分野,ぶんや,field,hai\n超大国,ちょうたいこく,super power,hai\n指摘する,してき（する）,to point out,\n分析,ぶんせき,analysis,hai\n理論,りろん,theory,hai\n延長線上,えんちょうせんじょう,extension,\n単に,たん（に）,merely; simply,\n媒体,ばいたい,a medium; media,\n受けて,う（けて）,receiver,\n好み,この（み）,liking; taste,\n価値観,かちかん,one\'s sense of value,hai\n深く,ふか（く）,deeply,\n及ぼす,およ（ぼす）,to exert (influence),\n自覚する,じかく（する）,to realize,\n戦略的に,せんりゅあくてき（に）,strategically,\n伸ばす,の（ばす）,to cultivate; to develop,\n日本製,にほんせい,made in Japan,hai\n〜製,〜せい,made in 〜,\n電子機器,でんしきき,electronic instrument / gadgets,\n建築家,けんちくか,architect,hai\n認知度,にんちど,level of name recognition,hai\n上げる,あ（げる）,raise,\n状況,じょうきょう,condition; circumstance,hai\n国力,こくりょく,nation\'s power,hai\n認識する,にんしき（する）,to recognize,hai\n吸収する,きゅうしゅう（する）,to absorb,\n模倣する,もほう（する）,to imitate,\n変形する,へんけい（する）,to transform,hai\n取り入れる,と（り）い（れる）,to adopt,\n得意な,とくい（な）,to be good at,\n真似する,まね（する）,to imitate,\n無頓着,むとんちゃく,to be different,';



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
    grammar_point: '〜（って／と）いうか',
    spec: '〜（って／と）いうか',
    alt_def: 'っていうか、というか、って言うか、と言うか',
    meaning: '"〜、Or rather"; "More appropriately"; "Rather than 〜、...',
    use: {
      text: 'The kanji of いう is 言う.  Usually the kana is used.  The thing that is rathered precedes っていうか and the thing that is a better fit follows.  Can follow a noun, phrase, or a sentence and is used to give a more appropriate expression.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『昨日パイを作った、',
          highlight: 'ていうか',
          post: '作るのを手伝った（手伝う：てつだ(う)）だけなんだけど。』'
        },
        translation: 'Yesterday, I made a pie; or rather, I helped make a pie...'
      },{
        sentence: {
          ante: '『乗馬（じょうば）',
          highlight: 'っていうか',
          post: '、馬にさわっただけ。』'
        },
        translation: 'It wasn\'t really horseback riding – it was more like just touching a horse.'
      },{
        sentence: {
          ante: '『兄弟',
          highlight: 'っていうか',
          post: '、ふたごですけど。』'
        },
        translation: 'More precisely, they were twins rather than brothers.'
      }
    ],
    other: 'It can be thought of as a combination of（って／と）+ 言う + か'
  },{
    grammar_point: '（どっち／どちら）かと言うと',
    spec: '（どっち／どちら）かと言うと',
    alt_def: 'どっちかと言うと、どちらかと言うと、どっちかというと、とちらかというと',
    meaning: '"Rather (than)"; "If anything"; "If we\'re talking about the two"',
    use: {
      text: 'Used to imply "If we have to choose between two alternatives, X is Y".  It\'s easier to understand if we break up the parts into「どっち」「か」「と」「言う」「と」= "Which of the two" + "?" + "(quotation)" + "speaking" + "if".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『彼女は',
          highlight: 'どっちかと言うと',
          post: '母親（ははおや）に似ている。』'
        },
        translation: 'She looks more like her mother [than her father].'
      },{
        sentence: {
          ante: '『日本人は',
          highlight: 'どっちかと言うと',
          post: '対立を好まない（好む：この(む))。』'
        },
        translation: 'Japanese people, if anything, do not like confrontation.'
      },{
        sentence: {
          ante: '『私は、日本語は、',
          highlight: 'どっちかと言うと',
          post: '話す方が得意だ。』'
        },
        translation: 'If I had to choose, I am better at speaking Japanese [than reading it].'
      }
    ],
    other: 'Note that どっち and どちら ("which way / direction (of two)") are similar to こっち and こちら (etc.) which mean "this way / direction".  (cf. ここ／どこ、これ／どれ、こう／どう）'
  }
];


/**
{
  grammar_point: '',
  spec: '',
  alt_def: '',
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














