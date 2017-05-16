"use strict";

const local_course_name = '日本語４００';
const local_course_path = 'JAPN0400'
const local_chap_name = '第１０課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n机,つくえ,ticket,\n切符,きっぷ,(train) schedule,\n座席,ざせき,seat,\n〜号車,〜ごうしゃ,traincar number (#),\n乗車券,じょうしゃけん,passenger ticket,\n指定席券,していせきけん,reserved-seat ticket,\n特急料金,とっきゅうりょうきん,special express fare,\n預かる,あず（かる）,to keep (something),\n予約,よやく,reservation（する：to make a reservation),hai\n一泊,いっぱく,one night\'s stay,hai\n〜泊,〜ぱく,counter for nights,\n旅館,りょかん,Japanese style inn,\n二食付き,にしょくつ（き）,"""two meals included""",\n〜付き,〜つ（き）,"""included with 〜""",\n静かな,しず（かな）,quiet,\n眺め,なが（め）,a view (eg: room with a view),\n和室,わしつ,Japanese-sytle room,hai\n住所,じゅうしょ,"house address, residence, domicle",hai\nお風呂,（お）ふろ,bath,\n夕食,ゆうしょく,dinner,\n男湯,おとこゆ,men\'s bath,\n女湯,おんなゆ,women\'s bath,\n見物,けんぶつ,"a sightseeing, ""to see the sights of""",\n冗談,じょうだん,a joke,\n民宿,みんしゅく,bed and breakfast and dinner,hai\n浴衣,ゆかた,informal cotton kimono,\n体,からだ,body,hai\n洗う,あら（う）,to wash,\n国内,こくない,domestic,hai\n旅行者,りょこうしゃ,travel agency,hai\n都市,とし,city,hai\n有効な,ゆうこう（な）,valid,hai\n期間,きかん,period,hai\n鉄道,てつどう,railway,\n北海道,ほっかいどう,northern island of Japan,\n本州,ほんしゅう,main island of Japan,\n九州,きゅうしゅう,southern island of Japan,\n自然,しぜん,"nature, spontaneity",hai\n自然な,しぜん（な）,"natural, spontaneous",\n自然に,しぜん（に）,"naturally, spontaneously",\n農業,のうぎょう,agriculture,hai\n動物,どうぶつ,animal,\n珍しい,めずら（しい）,rare,\n先住民,せんじゅうみん,people native to the land,\n村,むら,village,\n景色,けしき,"scenery, landscape",\n国際的な,こくさいてき（な）,international,hai\n大都市,だいとし,ＢＩＧ　city,\n世界,せかい,world,hai\n最大,さいだい,largest,hai\n政治,せいじ,politics,\n経済,けいざい,economy,\n商業,しょうぎょう,commerce,\n教育,きょういく,education,\n芸術,げいじゅつ,art,hai\n中心,ちゅうしん,center,\n醜い,みにく（い）,ugly,\n混雑,こんざつ,"confusion, congenstion (混雑した：crowded)",\n物価,ぶっか,commodity prices,hai\n批判,ひはん,criticism（する：to criticize),hai\n秩序,ちつじょ,order (ie: everything in order),\n特徴,とくちょう,a characteristic,hai\n集まる,あつ（まる）,something gathers (intrans.),\n比べる,くら（べる）,to compare (〜と：with 〜）,hai\n犯罪,はんざい,crime,hai\n活気,かっき,"liveliness, vitality, energy",\n絶えず,た（えず）,constantly,\n変化,へんか,a change（変化した：changed),\n魅力的な,みりょくてき（な）,"charming, attractive",\n都,みやこ,old city / capital,\n第二次大戦,だいにじたいせん,WWII,\n被害,ひがい,damage,hai\n昔,むかし,olden days,\n神社,じんじゃ,shrine,\n大仏,だいぶつ,big statue of Buddha,\nお城,（お）しろ,castle,\n火山,かざん,volcano,\n温泉,おんせん,hot spring,\n小説家,しょうせつか,novelist,\n怒る,おこ（る）,to get ａｎｇｅｒｙ,';



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














