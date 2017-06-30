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
    grammar_point: '(noun)たら／(noun)ったら',
    spec: '(noun)たら／(noun)ったら',
    meaning: 'Indicates topic of sentence (with sense of surprise, dispelief, reproach, etc.)',
    use: {
      text: 'Used in informal conversation.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『うちの母',
          highlight: 'ったら',
          post: '、文句ばかり言うのよ。』'
        },
        translation: 'My mother complains all the time (to my frustration).'
      },{
        sentence: {
          ante: '『あの人',
          highlight: 'ったら',
          post: '、こんなこと言うのよ。』'
        },
        translation: 'He said this (can you believe it?).'
      }
    ],
    other: '...'
  },{
    grammar_point: 'よっぽど',
    spec: 'よっぽど',
    meaning: '"Considerably / really / to a great extent (more than normal)"',
    use: {
      text: 'Colloquial form of よほど。 Indicates that something is of a degree considerably greater than usual.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『普通のアメリカ人は、大学の先生は',
          highlight: 'よほど',
          post: '暇（ひま）があると思っているようだ。』'
        },
        translation: 'Most Americans seem to think that university professors have a great deal of free time.'
      },{
        sentence: {
          ante: '『寮の食事は',
          highlight: 'よっぽど',
          post: 'まずいらしい。』'
        },
        translation: 'It seems like the dormitory food sucks.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜に違いない',
    spec: '〜に違いない',
    meaning: '"It must be 〜"; "There is no mistaking 〜"',
    use: {
      text: 'Can be formed as such:',
      species: [
        {
          jap: '(noun) に違いない',
          eng: '：it must be noun'
        },{
          jap: '(adjい)い に違いない',
          eng: '：it must be adj (note: plain form of adjい + に）'
        },{
          jap: '(adjな) に違いない',
          eng: '：it must be adj'
        },{
          jap: 'verb(plain) に違いない',
          eng: '：it must be verb'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『あんな大きな家に住んでいるんだから、よっぽど楽な生活をしている',
          highlight: 'に違いない',
          post: '。』'
        },
        translation: 'Since he lives in a big house like that, he must have a comfortable life.'
      },{
        sentence: {
          ante: '『あそこでお辞儀（(お)じぎ）をしているのは日本人',
          highlight: 'に違いない',
          post: '。』'
        },
        translation: 'That person bowing over there must be Japanese.'
      },{
        sentence: {
          ante: '『韓国人いとって日本語はやさひい',
          highlight: 'に違いない',
          post: '。』'
        },
        translation: 'Japanese must be easy for Koreans to learn.'
      },{
        sentence: {
          ante: '『電気のない生活は不便',
          highlight: 'に違いない',
          post: '。』'
        },
        translation: 'It must be inconvenient to live without electricity.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'さすが（に）',
    spec: 'さすが（に）',
    meaning: '"Indeed"; "As can be expected"; "Of course"',
    use: {
      text: 'Gives the connotation that the speaker is favorably impressed.  Often preceeded by「〜だけあって」meaning "〜 being the case"; "precisely because 〜"; "as expected from 〜".  Meaning and formation of「〜だけあって」in the next grammar point.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本に十年住んでいただけあって、',
          highlight: 'さすが',
          post: '日本語が上手だ。』'
        },
        translation: 'Since he has lived in Japan for ten years, he speaks excellent Japanese indeed.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜だげあって',
    spec: '〜だげあって',
    meaning: '"〜 being the case"; "precisely because 〜"; "as expected from 〜"',
    use: {
      text: 'Can be used as:',
      species: [
        {
          jap: '(noun) だげあって',
          eng: ''
        },{
          jap: '(adjい) だげあって',
          eng: '：(NOTE: adjい(stem) is used'
        },{
          jap: '(adjな)な だげあって',
          eng: ''
        },{
          jap: 'verb(plain) だげあって',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『お習字の先生',
          highlight: 'だけあって',
          post: '、さすがにすばらしい字だ。』'
        },
        translation: 'His characters are expectedly wonderful, as expected from someone who is a caligraphy teacher.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun)なんか／(noun)なんて',
    spec: '(noun)なんか／(noun)なんて',
    meaning: '"Something/somebody like 〜".',
    use: {
      text: 'Follows nouns and is used much like "like" in English.  Both なんか and なんて can follow a noun, but only なんて can follow a sentence.  なんて is a contraction of many forms (eg:)',
      species: [
        {
          jap: 'なんて',
          eng: ''
        },{
          jap: '',
          eng: 'などは'
        },{
          jap: '',
          eng: 'などと'
        },{
          jap: '',
          eng: 'などというのは'
        },{
          jap: '',
          eng: 'etc.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『助詞',
          highlight: 'なんか',
          post: '難しいと思った。』'
        },
        translation: 'I thought things like particles were difficult.'
      },{
        sentence: {
          ante: '『僕',
          highlight: 'なんか',
          post: 'その反対で、説明はいろいろ読んだけど、先生に直されてばかりいたんだ。』'
        },
        translation: 'People like me disagree; I\'ve read various explanations but I was always corrected by my teacher.'
      },{
        sentence: {
          ante: '『「私は」と「私が」がどう違うか',
          highlight: 'なんて（などというのは）',
          post: '、さっぱり分からなかった。』'
        },
        translation: 'I didn\'t understand at all things like how 私は and 私が are different.'
      },{
        sentence: {
          ante: '『敬語を使わないと失礼になる',
          highlight: 'なんて（などと）',
          post: '言われたから、心配しちゃった。』'
        },
        translation: 'Since I was told things like it being impolite not to use keigo, I worried.'
      }
    ],
    other: 'さっぱり + [neg.]: "Not at all".'
  },{
    grammar_point: '〜ものの',
    spec: '〜ものの',
    meaning: '"Although 〜、"',
    use: {
      text: 'Conjunction that means "although".  Tends to be used in writting.  Used as such:',
      species: [
        {
          jap: '(noun)である ものの',
          eng: ''
        },{
          jap: '(adjい)い ものの',
          eng: ''
        },{
          jap: '(adjな)な ものの',
          eng: ''
        },{
          jap: '(adjな)である ものの)',
          eng: '（an alternative formation for adjな)'
        },{
          jap: 'verb(plain) ものの',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本語の勉強を三年した',
          highlight: 'ものの',
          post: '、辞書なしで新聞を読むことはまだできない。』'
        },
        translation: 'Although I studied Japanese for three years, I still can\'t read newspapers without a dictionary.'
      }
    ],
    other: '〜ものの is similar in meaning to the other conjuntions 〜が、けど、〜けれど、and 〜けれども。 It differs from 〜のに in that 〜のに implies a meaning of "despite 〜". 「(noun)なしで」means "Without a (noun)".'
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














