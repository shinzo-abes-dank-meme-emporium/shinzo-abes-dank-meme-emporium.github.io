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
    grammar_point: '無',
    spec: '無',
    alt_def: '',
    meaning: '無',
    use: {
      text: '無',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '無',
          highlight: '無',
          post: '。』'
        },
        translation: '無'
      },{
        sentence: {
          ante: '『無',
          highlight: '無',
          post: '。』'
        },
        translation: '無'
      }
    ],
    other: '無'
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














