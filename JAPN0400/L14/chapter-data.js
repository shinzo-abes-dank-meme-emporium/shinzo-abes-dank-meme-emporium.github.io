"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１４課';

/**
{
  kanji: '',
  reading: '',
  alt_def: '',
    meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
var chap_kanji_str = 'kanji,reading,meaning,kaku\n意見,いけん,opinion,hai\n平気な,へいき（な）,"unperturbed, calm",\n我慢,がまん,"patience, tolerance（する：to put up with)",\n勝手なことをする,かって（なことをする）,to have one\'s own way,\n昼間,ひるま,daytime,\n寂しい,さび（しい）,lonely,\n付き合う,つ（き）あ（う）,"to keep (someone) company, to go out",hai\nアメリカ式,（アメリカ）しき,American style,\n・,ひどい,unfair; cruel; savage,\n・,おとなしい,quiet; submissive,\n先輩,せんぱい,senpai,\nお弁当,（お）べんとう,bento,\n厚焼き卵,あつやきたまご,thick Japanese-style omlet,\n理想,りそう,ideal,hai\n３高,さんこう,"the 3 ""highs""",\n身長,しんちょう,height,\n収入,しゅうにゅう,income,\n学歴,がくれき,level of education,hai\n性格,せいかく,character; personality,\n家事,かじ,housework,hai\n育児,いくじ,child-rearing,hai\n望む,のぞ（む）,to desire; to hope,\n縁,えん,fate; karma,\n入力,にゅうりょく,a data entry（する：to input data),\n書類,しょるい,a document,hai\nお茶くみ,（お）ちゃ（くみ）,serving tea,\n順番に,じゅんばん（に）,taking turns,\n課長,かちょう,section chief,\n雇う,やと（う）,to hire,hai\n一般職,いっぱんしょく,clerical job,\n総合職,そうごうしょく,regular position,hai\n企画,きかく,planning,\n機械,きかい,machine,\n自身,じしん,self,\n続ける,つづ（ける）,to continue,\n悩む,なや（む）,to agonize,\n三重苦,さんじゅうく,the triple afflictions,\n世の中,よ（の）なか,society; world,\n企業,きぎょう,"industry, business",hai\n戦後,せんご,post-war,hai\n共働き,ともばたら（き）,husband and wife both working (dual-income),hai\n変身,へんしん,self-transformation（する：to change oneself),\n応じる,おう（じる）,"to satisfy, to reply",\n産む,う（む）,"to give birth, to deliver, to produce",\n育てる,そだ（てる）,to raise (a child),\n妻,つま,one\'s wife,\n奥さん,おく（さん）,somebody\'s wife,\nご主人,（ご）しゅじん,somebody\'s husband,\n夫,おっと,one\'s husband,\n夫婦,ふうふ,husband and wife,hai\n専業主婦,せんぎょうしゅふ,housewife,\n〜に適応する,（〜に）てきおう（する）,to adapt,\n一部,いちぶ,a part of; some,\n相棒,あいぼう,one\'s partner,\n身の回りの世話,み（の）まわ（りの）せわ,care in one\'s home life,\n兼業,けんぎょう,holding to jobs at the same time,\n苦しみ,くる（しみ）,suffering,\n重荷,おもに,burden,\n下積み,したづ（み）,holding a lower position,\n苦労,くろう,hardship; suffering,\n〜に耐える,（〜に）た（える）,to endure something (に）,\n超人的に,ちょうじんてき（に）,superhumanly,\n超人ぶり,ちょうじん（ぶり）,being like a superhuman,\n尊敬する,そんけい（する）,to respect,\n努力,どりょく,effort,hai\n〜力,〜りょく,ability of / power to 〜,\n負ける,ま（ける）,to lose,\n〜に賛成する,（〜に）さんせい（する）,to agree,hai\n理解する,りかい（する）,to understand,hai\n力,ちから,strength,\n〜に合わせる,（〜に）あ（わせる）,to adapt to (〜に）,\n不公平な,ふこうへい（な）,unfair (from unfairness),hai\n戸籍,こせき,family register,\n否定する,ひてい（する）,to reject; to deny,\n入籍する,にゅうせき（する）,to enter one\'s name into the family registry,\n同棲する,どうせい（する）,living together in a defacto relationship,\n〜組,〜ぐみ・くみ,a group of people doing the same thing,\n破綻する,はたん（する）,to break up,\n損をする,そん（をする）,to be at a disadvantage,\n生き方,い（き）かた,way of living,\n個人,こじん,individual,hai\n自由,じゆう,freedom,hai\n期待する,きたい（する）,"to expect, to count on",\n反対する,はんたい（する）,to oppose,hai';



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
    grammar_point: '(noun)には(noun)の〜がある',
    spec: '(noun)には(noun)の〜がある',
    alt_def: '',
    meaning: '"Nouns have their own 〜"',
    use: {
      text: '〜 can be whatever, as long as it\'s nominalized',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '親には親の生活がある',
          post: '。』'
        },
        translation: 'Parents have their own lives (to live).'
      },{
        sentence: {
          ante: '『',
          highlight: '子供には子供の考えがある',
          post: 'んだから、まず聞いてやることが重要だ。』'
        },
        translation: 'Children have their own ways of thinking, so we should first listen to them.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun A)は(noun A)なり（に(verb)／の(noun))',
    spec: '(noun A)は(noun A)なり（に(verb)／の(noun))',
    alt_def: 'なりに、なりの',
    meaning: '"Noun does things in its own way" [〜に(verb)]; "(noun A) has it\'s own (noun B)" [〜の(noun)]',
    use: {
      text: 'Pretty similary to the above.  なり is the kana of 形 meaning "shape", "style", "way".  That makes remembering translations a little easier (I think...).',
      species: [
        {
          jap: '(noun)は(noun)なりに(verb)',
          eng: '：(noun) does things in its own way'
        },{
          jap: '(noun A)は(nounA)なりの(noun B)',
          eng: '：(noun A) has it\'s own (noun B)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '私は私なりにがんばっている',
          post: 'つもりですけど。』'
        },
        translation: 'I plan to do my best in my own way.'
      },{
        sentence: {
          ante: '『<b>アメリカにはアメリカなりのよさ</b>があり、',
          highlight: '日本には日本なりのよさ',
          post: 'があるから、どちらがいいとも言えない。』'
        },
        translation: 'Both Japan and Amerika have their own good points, so we can\'t say one is better than the other.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜くせに',
    spec: '〜くせに',
    alt_def: '',
    meaning: '"Although"; "But"; "Bad-habit-ually" (expresses displeasure, disgust, contempt)',
    use: {
      text: 'Adverb.  Like 〜のに (despite) except it also expresses displeasure, disgust, or contempt.  Can follow nouns, adjectives, and verbs.  くせ（癖）means "habit" (in the case of bad habit), or "mannerism".  Usually the kana is used',
      species: [
        {
          jap: '(noun)の くせに',
          eng: ''
        },{
          jap: '(adjい)い くせに',
          eng: ''
        },{
          jap: '(adjな)な くせに',
          eng: ''
        },{
          jap: 'verb(plain) くせに',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『子供の',
          highlight: 'くせに',
          post: '外で遊びたがらないのは、困る。』'
        },
        translation: 'Although being a child, it not playing outside is troublesome.'
      },{
        sentence: {
          ante: '『下手（したて）な',
          highlight: 'くせに',
          post: 'すぐやりたがる人はいやだ。』'
        },
        translation: 'Being bad at it and liking doing it people are an big pain.'
      },{
        sentence: {
          ante: '『お金もない',
          highlight: 'くせに',
          post: '高い物ばかり買う人は困ります。』'
        },
        translation: 'Despite lacking money, people who buy nothing but expensive things are 困.'
      },{
        sentence: {
          ante: '『知っている',
          highlight: 'くせに',
          post: '教えてくれない。』'
        },
        translation: 'Despite that he knows it, he won\'t tell me.'
      }
    ],
    other: '...'
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














