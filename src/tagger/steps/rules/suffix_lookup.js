'use strict';
//just a foolish lookup of known suffixes
const Adj = 'Adjective';
const Inf = 'Infinitive';
const Pres = 'PresentTense';
const Sing = 'Singular';
const Ord = 'Ordinal';
const Past = 'PastTense';
const AdVb = 'AdVerb';
const Plrl = 'Plural';
const Actor = 'Actor';
const Vb = 'Verb';
const Noun = 'Noun';
const Last = 'LastName';
const Modal = 'Modal';

module.exports = [
  null, //0
  null, //1
  { //2-letter
    'ea': Sing,
    'ia': Noun,
    'ic': Adj,
    '\'n': Vb,
    '\'t': Vb,
  },
  { //3-letter
    'que': Adj,
    'lar': Adj,
    'ike': Adj,
    'ffy': Adj,
    'rmy': Adj,
    'azy': Adj,
    'oid': Adj,
    'mum': Adj,
    'ean': Adj,
    'ous': Adj,
    'end': Vb,
    'sis': Sing,
    'rol': Sing,
    'ize': Inf,
    'ify': Inf,
    'zes': Pres,
    'nes': Pres,
    'ing': 'Gerund', //likely to be converted to Adj after lexicon pass
    ' so': AdVb,
    '\'ll': Modal,
    '\'re': 'Copula'
  },
  { //4-letter
    'teen': 'Value',
    'tors': Noun,
    'ends': Vb,
    'oses': Pres,
    'fies': Pres,
    'ects': Pres,
    'nded': Past,
    'cede': Inf,
    'tage': Inf,
    'gate': Inf,
    'vice': Sing,
    'tion': Sing,
    'ette': Sing,
    'some': Adj,
    'llen': Adj,
    'ried': Adj,
    'gone': Adj,
    'made': Adj,
    'fore': AdVb,
    'less': AdVb,
    'ices': Plrl,
    'ions': Plrl,
    'ints': Plrl,
    'aped': Past,
    'lked': Past,
    'ould': Modal,
    'tive': Actor,
    'sson': Last, //swedish male
    'czyk': Last, //polish (male)
    'chuk': Last, //east-europe
    'enko': Last, //east-europe
    'akis': Last, //greek
    'nsen': Last, //norway
  },
  { //5-letter
    'fully': AdVb,
    'where': AdVb,
    'wards': AdVb,
    'urned': Past,
    'tized': Past,
    'eased': Past,
    'ances': Plrl,
    'tures': Plrl,
    'ports': Plrl,
    'ettes': Plrl,
    'ities': Plrl,
    'rough': Adj,
    'bound': Adj,
    'tieth': 'Ordinal',
    'ishes': Pres,
    'tches': Pres,
    'nssen': Last, //norway
    'marek': Last, //polish (male)
  },
  { //6-letter
    'keeper': Actor,
    'logist': Actor,
    'auskas': Last, //lithuania
    'teenth': 'Value',
  },
  { //7-letter
    'sdottir': Last, //swedish female
    'opoulos': Last, //greek
  }
];
