"use strict";

const local_course_name = '日本語４００';
const local_course_path = 'JAPN0400'
const local_chap_name = '第９課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n贈り物,おく（り）もの,"gift, present",hai\n気を使う,き（を）つか（う）,to be worried about,\n開ける,あ（ける）,to open,\n遠慮する,えんりょ（する）,to reserve oneself,\n色,いろ,colour,\n動物,どうぶつ,animal,hai\n着る,き（る）,to wear,\n喜ぶ,よろこ（ぶ）,"to be pleased, to rejoice",\n結婚披露宴,けっこんひろうえん,wedding reception,\n背広,せびろ,men\'s suit,\n困る,こま（る）,to be in trouble,\n呼ぶ,よ（ぶ）,"to invite, to call",hai\nお礼,（お）れい,gift of appreciation,hai\n湯のみ,ゆ（のみ）,Japanese tea cup,\n季節,きせつ,season,hai\n伝統的な,でんとうてき（な）,traditional,hai\nお中元,（お）ちゅうげん,mid-year gift,\n年末,ねんまつ,end of year,hai\nお歳暮,（お）せいぼ,end of year gift,\nお世話,（お）せわ,a taking care of,\nお世話になる,（お）せわ（になる）,to be grateful (towards someone beacuse of their care),\n贈る,おく（る）,to present,\n相手,あいて,"the other person/party, partner",\n直接（な）,ちょくせつ（な）,direct,hai\n届ける,とど（ける）,to deliver,hai\nお正月,（お）しょうがつ,New Year,hai\nお年玉,（お）としだま,New Year\'s gift of cash,hai\n習慣,しゅうかん,custom,hai\n渡す,わた（す）,to hand over (something),\n訪ねる,たず（ねる）,to visit,\n果物,くだもの,fruit,\n・,おみやげ,souvenir,\n外国,がいこく,foriegn country,hai\n土地,とち,land,hai\n産物,さんぶつ,product,hai\n観光旅行,かんこうりょこう,sightseeing trip,\n現金,げんきん,cash,\n親類,しんるい,relative,\n助け合う,たす（け）あ（う）,"to help each other, cooperate",hai\n贅沢な,ぜいたく（な）,"extravagant, luxurious",\n本来の,ほんらい（の）,original,\n招待する,しょうたい,"to invite, to call",\n明らかに,あき（らかに）,clearly,hai\n悪循環,あくじゅんかん,vicious circle,\n影響,えいきょう,incluence,\n協会,えいきょう,church,hai\n仲がいい,なか（がいい）,"close, intimate, on good terms",hai\n男女,だんじょ,men and women,hai\n交換する,こうかん,to exchange,\n恋人,こいびと,"lover, sweetheart",\n上司,じょうし,one\'s superior（仕事で）,hai\n同僚,どうりょう,colleague,hai\nお返し,（お）かえ（し）,reciprocal gift,hai\n変わる,か（わる）,to change (something) (intrans.),hai\n恋愛,れんあい,mutual love,\n見合い,みあ（い）,arranged date (marriage meeting),\n関係,かんけい,relationship,hai';



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
    grammar_point: 'わざわざ',
    spec: 'わざわざ',
    meaning: 'To go out of one\'s way to do something',
    use: {
      text: 'Denotes doing something in a way that takes more time and effor thtan necessary or purposely doing something that is not necessary.  Ie: there are two options and you chose the one that takes more.  Is not used in the same way as せっかく。',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: 'わざわざ',
          post: '出かけるのは大変だから、電話で話そう。』'
        },
        translation: 'It\'s not easy to take the time to go, so I will talk on the phone. (lit. Going out of my way to head out is oppressive, so I will talk on the phone)'
      },{
        sentence: {
          ante: '『',
          highlight: 'わざわざ',
          post: '書き直さなくて（直す：なお（す））もいいんじゃないですか。』'
        },
        translation: 'I don\'t think you have to go through the trouble of rewritting it.'
      }
    ],
    other: 'On the other hand, せっかく indicates that one has spent time, made an effort, or experienced hardship to obtain something or to REACH A CERTAIN STATE.  Often used with expressions like 〜のに or 〜ければ。I\'ve also heard せっかく describes as "referring to a state or result that has come about and the implication is that one should or should have taken advantage of the situation".'
  },{
    grammar_point: '〜より仕方がない',
    spec: '〜より仕方がない',
    meaning: '"To have no choice but to 〜"',
    use: {
      text: '（仕方：しかた）Denotes that "〜" is NOT what one normally wants to do, but one has no choice but to do it.  〜 is usually a verb.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『お金がない時は、アルバイトをする',
          highlight: 'より仕方がない',
          post: '。』'
        },
        translation: 'When one does not have any money, one does not have any choice but to work part-time.'
      },{
        sentence: {
          ante: '『車がないから、歩いていく',
          highlight: 'より仕方がない',
          post: '。』'
        },
        translation: 'Since I don\'t have a car, I have no alternative but to go on foot.'
      }
    ],
    other: 'I\'m pretty sure that this expression exclusively follows verbs, but idk, the book put X so I\'m going with it'
  },{
    grammar_point: 'the "Honorific Passive" (verbれる／られる）',
    spec: 'the "Honorific Passive"',
    meaning: 'Conjugation of verbs to a homologue of the passive form may be used as a form of 尊敬語（そんけいご）。',
    use: {
      text: 'This form is not as polite as the regular honorific form such as「お〜になる」、「いらしゃる」、etc., but is widely used in men\'s speech, newspapers, and formal writting.  The term "passive" uses the direct passive context of the verb.  That is, transitive verbs have a subject as the actor and a direct object acted upon.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『先生、本を',
          highlight: '書かれた',
          post: 'そうですが、いつご出版（しゅっぱん）のご予定でしょうか。』'
        },
        translation: 'Sensei, I hear that you have written a book.  When is it scheduled to be published?'
      },{
        sentence: {
          ante: '『先生がアメリカへ',
          highlight: '来られた',
          post: 'ころは、今とずいぶん違っていたんでしょうね。』'
        },
        translation: 'When Sensei came to America, things were very different from what they are now, weren\'t they?'
      }
    ],
    other: 'There is no formation of the honorific passive for certain verbs (eg: 分かる or できる).'
  },{
    grammar_point: 'せめて〜',
    spec: 'せめて〜',
    meaning: '"At least 〜"',
    use: {
      text: 'The implication is that 〜 is the limit for a given example, but something more or better would be desirable.  〜 may be a quanitity of something, or it could refer to the noun which is liminal.  Can also be combined with くらい／ぐらい as in せめて〜くらい（は）。くらい by itself is less specific in that it merely implies an illustrative example.  The book examples all use せめて to describe the subject marked with は、but I think that that is not necessarily the exclusive usage.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『漢字をたくさん習いたいが、時間がないので、',
          highlight: 'せめて教育漢字',
          post: 'は読み書きできるようになりたい。』'
        },
        translation: 'I want to learn lots of kanji, but I don\'t have the time, so I\'d like to be able to read and write AT LEAST the Kyouiku Kanji.'
      },{
        sentence: {
          ante: '『',
          highlight: 'せめて一度',
          post: 'は日本へ行ってみたいと思う人が多いだろう。』'
        },
        translation: 'There must be lots of people who would like to visit Japan AT LEAST once.'
      },{
        sentence: {
          ante: '『毎晩',
          highlight: 'せめて一時間ぐらい',
          post: 'は日本語を勉強してもらいたいものだ。』'
        },
        translation: 'I would like [them] to spend AT LEAST APPROXIMATELY one hour every night studying Japanese.'
      },{
        sentence: {
          ante: '『夫に',
          highlight: 'せめてお皿洗い（おさらあらい）ぐらい',
          post: 'してもらいたいと思う主婦は多いだろう。』'
        },
        translation: 'There must be many wives who want their husbands to AT LEAST wash the dishes.'
      }
    ],
    other: 'せめて can also mean "at most" as in the phrase 『せめてつまらないものですが。』"At most, it\'s an uninteresting thing, but...".'
  },{
    grammar_point: 'X ように Y',
    spec: 'X ように Y',
    meaning: '"Y, so that X"; "In order to X, Y"; "For the purpose of X, Y".',
    use: {
      text: 'ように means "so that" or "in order to".  X is usually a verb or verb phrase.  X is often a potential verb, stative verb (ie: (verb)ている), or a verb in the negative form.  X is usually something that cannot be controlled by one\'s will (ie: "so that I won\'t forget" or "so that they can enjoy it").  Usage of 〜ように differs from that of 〜ために',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『みんなが',
          highlight: '楽しめるように',
          post: 'チョコレートをあげた。』'
        },
        translation: 'I gave everyone chocolate so that they can enjoy it. (pot. example)'
      },{
        sentence: {
          ante: '『',
          highlight: '忘れないように',
          post: '書いておいてください。』'
        },
        translation: 'Please write it down so that you don\'t forget it. (negative example)'
      },{
        sentence: {
          ante: '『子どもの本は子供にも',
          highlight: '分かるように',
          post: 'やさしい言葉で書いてあります。』'
        },
        translation: 'Children\'s books are written in an easy language so that they\'ll be easy to understand.'
      },{
        sentence: {
          ante: '『新しい車が',
          highlight: '買えるように',
          post: '貯金をしています。』'
        },
        translation: 'I am saving money SO THAT I CAN BUY a new car.'
      },{
        sentence: {
          ante: '『新しい車が',
          highlight: '買うために',
          post: '貯金をしています。』'
        },
        translation: 'I am saving money IN ORDER TO BUY a new car.'
      }
    ],
    other: '〜ように implies that a certain consequence will hold as the result of an action whereas 〜ために merely indicates the purpose of an action.  Normally, action verbs precede ために while verbs that precede ように indicate a state, event, or consequence that is beyond one\'s control.  Compare the last two example sentences.'
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














