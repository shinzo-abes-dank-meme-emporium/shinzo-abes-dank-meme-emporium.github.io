"use strict";

const local_course_name = '日本語４００';
const local_course_path = 'JAPN0400'
const local_chap_name = '第１３課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n外来語,がいらいご,loan word,hai\n体験,たいけん,personal experience,\n過去,かこ,the past,hai\n述べる,の（べる）,to state,\n紹介する,しょうかい（する）,to introduce,\nお手洗い,（お）てあら（い）,"toilet, WC, washroom",\n困る,こま（る）,"to be in trouble, to be troubled",\n一生懸命,いっしょうけんめい,as hard as one can,\n発音,はつおん,pronunciation,hai\n楽な,らく（な）,"easy, comfortable",\n暮らし,く（らし）,"living, life style",\n俳優,はいゆう,actor / actress,\n立派な,りっぱ（な）,splendid,\n普通,ふつう,common; usual; ordinary (uses の）,\n運転手,うんてんしゅ,driver,\n笑う,わら（う）,to laugh,hai\n謙遜する,けんそん（する）,to be modest,\n助詞,じょし,particle (grammar),hai\n反対,はんたい,"the opposite, oposition（する：to oppose)",hai\n直す,なお（す）,"to fix, correct",\n複雑な,ふくざつ（な）,complicated,\n敬語,けいご,honorific expression,hai\n正式に,せいしき（に）,"formally, officially",\n決める,き（める）,to decide,\n極めて,きわ（めて）,extremely,\n大半,だいはん,most of,hai\n中年婦人,ちゅうねんふじん,middle aged woman,\n暇な,ひま（な）,free (in schedule),\n文,ぶん,sentence,hai\n授業,じゅぎょう,class,\n黒板,こくばん,blackboard,\n写す,うつ（す）,to copy,\n進歩,しんぽ,"progress, advancement",hai\n認める,みと（める）,"to notice, to recognize",hai\n唐,とう,Tang Dynasty,\n時代,じだい,era,hai\n詩,し,poem; poetry,hai\n自習,じしゅう,self-study,hai\n定食,ていしょく,fixed price lunch,\n大学院生,だいがくいんせい,graduate student,\n中華料理,ちゅうかりょうり,Chinese food,\n誘う,さそ（う）,to invite,\n喜んで,よろこ（んで）,"delightedly, gladly",\n応じる,おう（じる）,"to respond, to aggree, to accept",hai\n誘いに応じる,さそ（いに）おう（じる）,to accept someone\'s invitation,\nご馳走になる,（ご）ちそう（になる）,to be treated (eg: to a meal),\n片言,かたこと,"broken (ie: broken language, English, Japanese, etc.)",\n別荘,べっそう,summer house,\n家庭教師,かていきょうし,private tutor,\n・,サボる,to loaf (on the job); to skip (school),\n励ます,はげ（ます）,to encourage,hai\n勧める,すす（める）,to urge someone (に) to do something (を）,hai\n反日感情,はんにちかんじょう,anti-Japanese sentiment,hai\n恥ずかしい,は（ずかしい）,embarassing; to be embarrassed,\n人並み,ひとな（み）,"being average, ordinary",\n欲望,よくぼう,desire,\nアメリカ合衆国,（アメリカ）がっしゅうこく,The United States of America,hai\n南部,なんぶ,the southern parts (of a region),hai\n既に,すで（に）,already,\n果樹園,かじゅえん,orchard,\n果物,くだもの,fruit,\n折る,お（る）,to snap,\n指差す,ゆびさ（す）,to point,\n最初に,さいしょ（に）,firstly,hai\n記念する,きねん（する）,to commemorate,\n小学校,しょうがっこう,elementary school,\n教科書,きょうかしょ,textbook,hai\n齢,よわい・とし,age,\n趣味,しゅみ,hobby,\n異なる,こと（なる）,to be different from,\n終身,しゅうしん,moral education,\n読本,どくほん,a reading book,\n道徳観,どうとくかん,view of morality,hai\n〜観,〜かん,view of 〜,\n矛盾,むじゅん,contradiction,\n難解さ,なんかい（さ）,difficulty of understanding,\n自体,じたい,itself,\n興味,きょうみ,interest,\n克服する,こくふく（する）,to overcome,hai\n戻る,もど（る）,to return,\n習う,なら（う）,to learn,\n再び,ふたた（び）,again,\n国籍,こくせき,nationalitiy,\n山荘,さんそう,mountain cottage,\n主,ぬし,owner,\n脱落する,だつらく（する）,to drop out,\n頑張る,がんば（る）,to try as hard as one can,\n理解,りかい,an understanding（する：to understand),';



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
    grammar_point: '無',
    spec: '無',
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














