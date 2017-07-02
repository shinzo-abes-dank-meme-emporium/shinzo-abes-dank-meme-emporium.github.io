"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１３課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
var chap_kanji_str = 'kanji,reading,meaning,kaku\n外来語,がいらいご,loan word,hai\n体験,たいけん,personal experience,\n過去,かこ,the past,hai\n述べる,の（べる）,to state,\n紹介する,しょうかい（する）,to introduce,\nお手洗い,（お）てあら（い）,"toilet, WC, washroom",\n困る,こま（る）,"to be in trouble, to be troubled",\n一生懸命,いっしょうけんめい,as hard as one can,\n発音,はつおん,pronunciation,hai\n楽な,らく（な）,"easy, comfortable",\n暮らし,く（らし）,"living, life style",\n俳優,はいゆう,actor / actress,\n立派な,りっぱ（な）,splendid,\n普通,ふつう,common; usual; ordinary (uses の）,\n運転手,うんてんしゅ,driver,\n笑う,わら（う）,to laugh,hai\n謙遜する,けんそん（する）,to be modest,\n助詞,じょし,particle (grammar),hai\n反対,はんたい,"the opposite, oposition（する：to oppose)",hai\n直す,なお（す）,"to fix, correct",\n複雑な,ふくざつ（な）,complicated,\n敬語,けいご,honorific expression,hai\n正式に,せいしき（に）,"formally, officially",\n決める,き（める）,to decide,\n極めて,きわ（めて）,extremely,\n大半,だいはん,most of,hai\n中年婦人,ちゅうねんふじん,middle aged woman,\n暇な,ひま（な）,free (in schedule),\n文,ぶん,sentence,hai\n授業,じゅぎょう,class,\n黒板,こくばん,blackboard,\n写す,うつ（す）,to copy,\n進歩,しんぽ,"progress, advancement",hai\n認める,みと（める）,"to notice, to recognize",hai\n唐,とう,Tang Dynasty,\n時代,じだい,era,hai\n詩,し,poem; poetry,hai\n自習,じしゅう,self-study,hai\n定食,ていしょく,fixed price lunch,\n大学院生,だいがくいんせい,graduate student,\n中華料理,ちゅうかりょうり,Chinese food,\n誘う,さそ（う）,to invite,\n喜んで,よろこ（んで）,"delightedly, gladly",\n応じる,おう（じる）,"to respond, to aggree, to accept",hai\n誘いに応じる,さそ（いに）おう（じる）,to accept someone\'s invitation,\nご馳走になる,（ご）ちそう（になる）,to be treated (eg: to a meal),\n片言,かたこと,"broken (ie: broken language, English, Japanese, etc.)",\n別荘,べっそう,summer house,\n家庭教師,かていきょうし,private tutor,\n・,サボる,to loaf (on the job); to skip (school),\n励ます,はげ（ます）,to encourage,hai\n勧める,すす（める）,to urge someone (に) to do something (を）,hai\n反日感情,はんにちかんじょう,anti-Japanese sentiment,hai\n恥ずかしい,は（ずかしい）,embarassing; to be embarrassed,\n人並み,ひとな（み）,"being average, ordinary",\n欲望,よくぼう,desire,\nアメリカ合衆国,（アメリカ）がっしゅうこく,The United States of America,hai\n南部,なんぶ,the southern parts (of a region),hai\n既に,すで（に）,already,\n果樹園,かじゅえん,orchard,\n果物,くだもの,fruit,\n折る,お（る）,to snap,\n指差す,ゆびさ（す）,to point,\n最初に,さいしょ（に）,firstly,hai\n記念する,きねん（する）,to commemorate,\n小学校,しょうがっこう,elementary school,\n教科書,きょうかしょ,textbook,hai\n齢,よわい・とし,age,\n趣味,しゅみ,hobby,\n異なる,こと（なる）,to be different from,\n終身,しゅうしん,moral education,\n読本,どくほん,a reading book,\n道徳観,どうとくかん,view of morality,hai\n〜観,〜かん,view of 〜,\n矛盾,むじゅん,contradiction,\n難解さ,なんかい（さ）,difficulty of understanding,\n自体,じたい,itself,\n興味,きょうみ,interest,\n克服する,こくふく（する）,to overcome,hai\n戻る,もど（る）,to return,\n習う,なら（う）,to learn,\n再び,ふたた（び）,again,\n国籍,こくせき,nationalitiy,\n山荘,さんそう,mountain cottage,\n主,ぬし,owner,\n脱落する,だつらく（する）,to drop out,\n頑張る,がんば（る）,to try as hard as one can,\n理解,りかい,an understanding（する：to understand),';



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
  },{
    grammar_point: '一方で（は〜、他方では〜）',
    spec: '一方で（は〜、他方では〜）',
    meaning: '（「一方」いっぽう）;（「他方」たほう）"On one hand"; "On the other hand"',
    use: {
      text: 'Often used in the phrase「一方では〜、他方では」, but one of the two phrases is often omitted.  The は〜 is optional.  Either 一方で or 他方で can mean "On the one hand" or "On the other hand".  When only one is used, it usually means, "On the other hand".  Usually used to show contrast, and as such, it\'s useful to use this construction after a conjunction that indicates contradiction (ie: が、けど、etc.)',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『働く女性は年々増えているが、',
          highlight: '一方で',
          post: '、重要なポストについている女性は極めて（きわ(めて)）少ない。』'
        },
        translation: 'The (number of) women working is increasing every year, but, on the other hand, women who hold important posts are quite few (in number).'
      },{
        sentence: {
          ante: '『チーズは、',
          highlight: '一方では',
          post: '美味しいだが、<b>他方では</b>黄色い（きいろ(い)）です。』'
        },
        translation: 'As for cheese, on the one hand it is delicious but, on the other hand, it is yellow.'
      }
    ],
    other: 'Note that 方 means "direction" or "way", as in 〜方がいい or 方法。'
  },{
    grammar_point: '毎(temporal noun)のように',
    spec: '毎(temporal noun)のように',
    meaning: '"Almost every (temporal noun)"',
    use: {
      text: 'Indicates that the frequency of something is such that it seems like it happens almost every (temporal noun).  Can be used with any number of temporal nouns (eg: 週、月、年、回、時間、etc.).  (eg: 毎日のように：Specifically means that it APPEARS like every day, not that it is literally every day.)',
      species: [
        {
          jap: '(eg):',
          eng: ''
        },{
          jap: '毎 日 のように',
          eng: '：Almost every day'
        },{
          jap: '毎 週 のように',
          eng: '：Almost every week'
        },{
          jap: '毎 回 のように',
          eng: '：Almost every instance'
        },{
          jap: '毎 時間 のように',
          eng: '：Almost every time'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『キーンさんは、',
          highlight: '毎日のように',
          post: '中華料理（ちゅうかりょうり）を食べたそうだ。』'
        },
        translation: 'I hear that Mr. Keene ate Chinese food almost every day.'
      },{
        sentence: {
          ante: '『日本語のクラスでは、',
          highlight: '毎時間のように',
          post: '宿題がある。』'
        },
        translation: 'In Japanese class, we have homework almost every time (ie: class period).'
      }
    ],
    other: '...'
  },{
    grammar_point: 'せいぜい（〜だけ）',
    spec: 'せいぜい（〜だけ）',
    meaning: '"At most 〜"',
    use: {
      text: 'Indicates a maximum limit, which is still a small amount.  Usually used with 〜だけ to empasize the thing of which there is less than desired.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『大きいクラスでは、一時間に',
          highlight: 'せいぜい',
          post: '一、二度当たれば（あ(たる)）いい方だ。』'
        },
        translation: 'In a large class, it\'s considered good if you get called on at most once or twice.'
      },{
        sentence: {
          ante: '『日本のサラリーマンは、休みを取ったとしても',
          highlight: 'せいぜい',
          post: '四、五日<b>だけ</b>でしょう。』'
        },
        translation: 'Japanese white-collar workers, even if they take a vacation, it\'s at most only four or five days.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜ながら（も）',
    spec: '〜ながら（も）',
    meaning: '"Although 〜"; "Despite 〜"',
    use: {
      text: 'Compared to the 〜ながら learned previously, for「S1 ながら S2」, when S1 ends in a noun, adjective, or a stative verb (verbている), then it expresses the idea of "Although".  However, when S1 ends in an action verb, it expresses the idea of simultaneity.',
      species: [
        {
          jap: '(noun) ながら',
          eng: ''
        },{
          jap: '(adjい)い ながら',
          eng: ''
        },{
          jap: '(adjな) ながら',
          eng: ''
        },{
          jap: 'verb(stative)(stem) ながら',
          eng: '：(ie: verb(てい)) Although verb'
        },{
          jap: '<b>Compare to:</b>',
          eng: ''
        },{
          jap: 'verb(stem) ながら',
          eng: '：While verb'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本は、小さい島国',
          highlight: 'ながら',
          post: '経済大国だ。』'
        },
        translation: 'Although Japan is a small island-country, it is an economic superpower.'
      },{
        sentence: {
          ante: '『残念',
          highlight: 'ながら',
          post: '強雨は伺えません。』'
        },
        translation: 'I\'m sorry but I can\'t visit you today.'
      },{
        sentence: {
          ante: '『日本に住んでい',
          highlight: 'ながら',
          post: '日本語が一言も話せないのは不思議（ふしぎ）だ。』'
        },
        translation: 'It\'s curious that he can\'t speak a word of Japanese, despite living in Japan.'
      },{
        sentence: {
          ante: '『分からない',
          highlight: 'ながら',
          post: '一生懸命（いっしょうけんめい）ＣＤを聞いていたら、だんだん分かるようになってきた。』'
        },
        translation: 'Although I didn\'t understand, when I listened and listened to the CD I slowly started to comprehend it it.'
      }
    ],
    other: 'AMAZINGLY, this is almost EXACTLY like how we use "while" in English.  Compare: "While I ate the cheese, I read the newspaper" (ie: I ate the cheese and simultaneously read the newspaper); "While there was an effort, it was not enough" (ie: ALTHOUGH there was an effort, it was not enough).  スゴイ'
  },{
    grammar_point: '(noun)としては',
    spec: '(noun)としては',
    meaning: '"For a 〜"; "Considering 〜"; "Even though 〜"',
    use: {
      text: 'Used to indicate that, despite the subject being as it is, it is somehow able to do something.  Perhaps used to show mild surprise or contrast?',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『前田さんは、日本人',
          highlight: 'としては',
          post: '英語が上手です。』'
        },
        translation: 'Maeda-san speaks good English for a Japanese person.'
      },{
        sentence: {
          ante: '『東京は、大都市',
          highlight: 'としては',
          post: '犯罪が少ない。』'
        },
        translation: 'Tōkyō has little crime for a big city.'
      }
    ],
    other: '(cf. として："As 〜")'
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














