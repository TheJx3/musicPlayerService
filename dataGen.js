const song = {
  id: 1,
  title: 'Halo',
  artist: 'Beyonce',
  album: 'I am... Sasha Fierce',
  genre: 'R&B'
  // albumArt: 'https.../xyz.png',
  // plays: 123456,
  // likes: 12345,
  // shares: 123456,
  // comments: 123
};

let hipster = "Freegan church-key kickstarter, keffiyeh tote bag food truck lorem quinoa microdosing esse culpa enim tumblr. Consequat cronut laborum plaid DIY, blog sartorial qui chartreuse vice. Marfa non crucifix adipisicing sartorial etsy ennui squid echo park. Reprehenderit iPhone gentrify wolf, pug ad cronut elit you probably haven't heard of them forage edison bulb tousled proident green juice snackwave. Gastropub sriracha chillwave pork belly direct trade. Authentic do forage bespoke retro, blue bottle marfa excepteur butcher kickstarter. Aute franzen aliquip, normcore put a bird on it hashtag lo-fi tofu. Chicharrones forage la croix truffaut. 3 wolf moon laborum direct trade, YOLO deserunt hoodie waistcoat 8-bit disrupt VHS. Sunt knausgaard ea, culpa cloud bread fam four loko et hell of do. Pug unicorn drinking vinegar cupidatat. Dolore sed normcore aute kogi. Crucifix selfies banh mi non pug qui beard mollit plaid cronut ethical adaptogen. Beard laborum authentic, bespoke XOXO health goth biodiesel celiac minim hoodie polaroid id. Mixtape gluten-free literally, nisi ea photo booth meggings whatever tote bag fixie. Hammock mumblecore cold-pressed chambray umami glossier. Do man braid pok pok lumbersexual church-key. Wolf slow-carb forage everyday carry. Snackwave quis activated charcoal you probably haven't heard of them celiac. Jianbing +1 everyday carry lorem fanny pack. Duis retro bushwick health goth ethical in. Pug excepteur crucifix, ugh tacos cardigan kitsch irony anim raw denim vegan jean shorts woke. Pork belly cornhole aute, kombucha magna asymmetrical polaroid bespoke tofu prism est next level. Vexillologist tousled af, truffaut godard biodiesel yr crucifix. Post-ironic kogi banjo blue bottle truffaut kickstarter laborum. Listicle fam cliche adaptogen lo-fi offal, taiyaki chicharrones biodiesel ad fingerstache echo park commodo. Green juice mixtape glossier, aliqua messenger bag chambray 8-bit prism viral af pork belly squid poke. Cloud bread godard in ea tempor, live-edge pok pok aute hot chicken la croix cillum fashion axe celiac skateboard. Humblebrag tbh esse, viral artisan ea ut truffaut eiusmod. Cillum flexitarian dolor, hexagon intelligentsia tote bag ea seitan la croix chicharrones tilde paleo. Keytar before they sold out health goth YOLO +1 edison bulb food truck. In food truck slow-carb tote bag aliquip plaid seitan in gastropub pinterest polaroid. Thundercats marfa chambray, raw denim ramps cred you probably haven't heard of them meditation lyft cupidatat palo santo est literally ea. Food truck offal helvetica incididunt twee meditation. Synth pug locavore williamsburg, occupy consectetur lomo. Narwhal scenester hoodie fanny pack excepteur literally cardigan. Cronut incididunt palo santo aliqua, readymade copper mug +1 synth helvetica ut velit. Pinterest YOLO try-hard succulents deserunt scenester cold-pressed venmo ex raclette williamsburg hammock. Food truck kickstarter do, gochujang skateboard authentic sunt distillery ramps copper mug. Coloring book esse austin cronut pop-up. Single-origin coffee selfies cillum disrupt polaroid in. Aliqua knausgaard tilde selvage cardigan. Culpa gochujang tacos tilde et officia williamsburg readymade kitsch ea. Disrupt wolf tumblr waistcoat deep v. Taiyaki stumptown pop-up ethical occaecat shoreditch ad austin schlitz YOLO tote bag blog est anim. Banjo ethical dolore skateboard snackwave kitsch irony listicle aute organic. You probably haven't heard of them fixie beard pork belly tempor. Keffiyeh portland cloud bread sint eiusmod laborum. Ad deep v tacos lomo butcher hexagon pariatur letterpress aesthetic qui nisi poutine. Sartorial occaecat vegan, cold-pressed ut irony jean shorts hoodie. Activated charcoal ut la croix iceland, occupy art party post-ironic skateboard cupidatat food truck sartorial sustainable. Proident slow-carb drinking vinegar letterpress incididunt cillum kickstarter tote bag quinoa marfa reprehenderit.";

let artists = [
  {
    artist: 'The Beatles',
    album: 'Abbey Road'
  },
  {
    artist: 'Beyonce',
    album: 'I am... Sasha Fierce'
  },
  {
    artist: 'Ed Sheeran',
    album: 'Multiply'
  },
  {
    artist: 'Rick Astley',
    album: 'Whenever You Need Sombeody'
  },
  {
    artist: 'Panic at the Disco',
    album: 'A Fever You Cant Sweat Out'
  },
  {
    artist: 'Phoenix',
    album: 'Wolfgang Amadeus Phoenix'
  },
  {
    artist: 'Dead Kennedys',
    album: 'Give Me Convenience or Give Me Death'
  },
  {
    artist: 'Michael Jackson',
    album: 'Thriller'
  },
  {
    artist: 'BB King',
    album: 'Singin the Blues'
  },
  {
    artist: 'Backstreet Boys',
    album: 'Backstreet Boys'
  },
  {
    artist: 'Elvis',
    album: 'Elvis'
  },
  {
    artist: 'The Chainsmokers',
    album: 'Memories... Do Not Open'
  },
  {
    artist: 'Sia',
    album: 'Colour The Small One'
  },
  {
    artist: 'Marian Hill',
    album: 'Sway'
  },
  {
    artist: 'Lindsey Stirling',
    album: 'Lindsey Stirling'
  },
  {
    artist: 'Jasmine Thompson',
    album: 'Another Bundle of Tantrums'
  },
  {
    artist: 'Ella Vos',
    album: 'Words I Never Said'
  },
  {
    artist: 'Oh Wonder',
    album: 'Oh Wonder'
  },
  {
    artist: 'Sam Smith',
    album: 'In The Lonely Hour'
  },
  {
    artist: 'Daughter',
    album: 'Wild Youth EP'
  },
  {
    artist: 'Birdy',
    album: 'Birdy'
  }
];

const genres = ['Blues', 'Electronic', 'Pop', 'R&B', 'HipHop', 'Country', 'Jazz', 'Rock'];

const songDataGen = (latinString) => {
  const songs = [];
  latinString = latinString.replace(/\.|,/g, '');
  // latinString = latinString.replace(/,/g, '');

  let latinArr = latinString.split(' ');

  for (let i = 1; i < 150; i++) {
    const randArtist = Math.floor(Math.random() * artists.length);
    const artist = artists[randArtist].artist;
    const album = artists[randArtist].album;
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const title = [];
    const max = 4;
    let titleLen = Math.ceil(Math.random() * 4);
    for (let j = 0; j < max; j++) {
      title.push(latinArr.pop());
    }
    songs.push({id: i, title: title.join(' '), artist: artist, genre: genre, album: album})
  }
  return songs;
};

JSON.stringify(songDataGen(hipster))

let songsArr = [{"id":1,"title":"reprehenderit marfa quinoa bag","artist":"Rick Astley","genre":"Jazz","album":"Whenever You Need Sombeody"},{"id":2,"title":"tote kickstarter cillum incididunt","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":3,"title":"letterpress vinegar drinking slow-carb","artist":"Sam Smith","genre":"R&B","album":"In The Lonely Hour"},{"id":4,"title":"Proident sustainable sartorial truck","artist":"Sia","genre":"Rock","album":"Colour The Small One"},{"id":5,"title":"food cupidatat skateboard post-ironic","artist":"Beyonce","genre":"HipHop","album":"I am... Sasha Fierce"},{"id":6,"title":"party art occupy iceland","artist":"Marian Hill","genre":"Blues","album":"Sway"},{"id":7,"title":"croix la ut charcoal","artist":"Ella Vos","genre":"Electronic","album":"Words I Never Said"},{"id":8,"title":"Activated hoodie shorts jean","artist":"Backstreet Boys","genre":"Blues","album":"Backstreet Boys"},{"id":9,"title":"irony ut cold-pressed vegan","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":10,"title":"occaecat Sartorial poutine nisi","artist":"Lindsey Stirling","genre":"Blues","album":"Lindsey Stirling"},{"id":11,"title":"qui aesthetic letterpress pariatur","artist":"Backstreet Boys","genre":"HipHop","album":"Backstreet Boys"},{"id":12,"title":"hexagon butcher lomo tacos","artist":"Sam Smith","genre":"HipHop","album":"In The Lonely Hour"},{"id":13,"title":"v deep Ad laborum","artist":"Elvis","genre":"Electronic","album":"Elvis"},{"id":14,"title":"eiusmod sint bread cloud","artist":"Daughter","genre":"Jazz","album":"Wild Youth EP"},{"id":15,"title":"portland Keffiyeh tempor belly","artist":"Oh Wonder","genre":"Blues","album":"Oh Wonder"},{"id":16,"title":"pork beard fixie them","artist":"Backstreet Boys","genre":"R&B","album":"Backstreet Boys"},{"id":17,"title":"of heard haven't probably","artist":"Elvis","genre":"Electronic","album":"Elvis"},{"id":18,"title":"You organic aute listicle","artist":"Marian Hill","genre":"Country","album":"Sway"},{"id":19,"title":"irony kitsch snackwave skateboard","artist":"Lindsey Stirling","genre":"HipHop","album":"Lindsey Stirling"},{"id":20,"title":"dolore ethical Banjo anim","artist":"Beyonce","genre":"HipHop","album":"I am... Sasha Fierce"},{"id":21,"title":"est blog bag tote","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":22,"title":"YOLO schlitz austin ad","artist":"Sam Smith","genre":"Electronic","album":"In The Lonely Hour"},{"id":23,"title":"shoreditch occaecat ethical pop-up","artist":"Oh Wonder","genre":"Blues","album":"Oh Wonder"},{"id":24,"title":"stumptown Taiyaki v deep","artist":"BB King","genre":"Country","album":"Singin the Blues"},{"id":25,"title":"waistcoat tumblr wolf Disrupt","artist":"Ella Vos","genre":"Jazz","album":"Words I Never Said"},{"id":26,"title":"ea kitsch readymade williamsburg","artist":"Lindsey Stirling","genre":"Pop","album":"Lindsey Stirling"},{"id":27,"title":"officia et tilde tacos","artist":"Ella Vos","genre":"R&B","album":"Words I Never Said"},{"id":28,"title":"gochujang Culpa cardigan selvage","artist":"Backstreet Boys","genre":"Electronic","album":"Backstreet Boys"},{"id":29,"title":"tilde knausgaard Aliqua in","artist":"Daughter","genre":"Rock","album":"Wild Youth EP"},{"id":30,"title":"polaroid disrupt cillum selfies","artist":"Birdy","genre":"Pop","album":"Birdy"},{"id":31,"title":"coffee Single-origin pop-up cronut","artist":"Sam Smith","genre":"Country","album":"In The Lonely Hour"},{"id":32,"title":"austin esse book Coloring","artist":"Ed Sheeran","genre":"Country","album":"Multiply"},{"id":33,"title":"mug copper ramps distillery","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":34,"title":"sunt authentic skateboard gochujang","artist":"Sam Smith","genre":"HipHop","album":"In The Lonely Hour"},{"id":35,"title":"do kickstarter truck Food","artist":"Michael Jackson","genre":"Blues","album":"Thriller"},{"id":36,"title":"hammock williamsburg raclette ex","artist":"Phoenix","genre":"Pop","album":"Wolfgang Amadeus Phoenix"},{"id":37,"title":"venmo cold-pressed scenester deserunt","artist":"Daughter","genre":"Blues","album":"Wild Youth EP"},{"id":38,"title":"succulents try-hard YOLO Pinterest","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":39,"title":"velit ut helvetica synth","artist":"Rick Astley","genre":"R&B","album":"Whenever You Need Sombeody"},{"id":40,"title":"+1 mug copper readymade","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":41,"title":"aliqua santo palo incididunt","artist":"Lindsey Stirling","genre":"Electronic","album":"Lindsey Stirling"},{"id":42,"title":"Cronut cardigan literally excepteur","artist":"The Chainsmokers","genre":"Pop","album":"Memories... Do Not Open"},{"id":43,"title":"pack fanny hoodie scenester","artist":"Beyonce","genre":"Pop","album":"I am... Sasha Fierce"},{"id":44,"title":"Narwhal lomo consectetur occupy","artist":"Sam Smith","genre":"Jazz","album":"In The Lonely Hour"},{"id":45,"title":"williamsburg locavore pug Synth","artist":"Backstreet Boys","genre":"HipHop","album":"Backstreet Boys"},{"id":46,"title":"meditation twee incididunt helvetica","artist":"Sam Smith","genre":"Pop","album":"In The Lonely Hour"},{"id":47,"title":"offal truck Food ea","artist":"Rick Astley","genre":"Jazz","album":"Whenever You Need Sombeody"},{"id":48,"title":"literally est santo palo","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":49,"title":"cupidatat lyft meditation them","artist":"Birdy","genre":"HipHop","album":"Birdy"},{"id":50,"title":"of heard haven't probably","artist":"Sia","genre":"Country","album":"Colour The Small One"},{"id":51,"title":"you cred ramps denim","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":52,"title":"raw chambray marfa Thundercats","artist":"Birdy","genre":"Electronic","album":"Birdy"},{"id":53,"title":"polaroid pinterest gastropub in","artist":"Birdy","genre":"Country","album":"Birdy"},{"id":54,"title":"seitan plaid aliquip bag","artist":"Ella Vos","genre":"Country","album":"Words I Never Said"},{"id":55,"title":"tote slow-carb truck food","artist":"Michael Jackson","genre":"Rock","album":"Thriller"},{"id":56,"title":"In truck food bulb","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":57,"title":"edison +1 YOLO goth","artist":"The Beatles","genre":"R&B","album":"Abbey Road"},{"id":58,"title":"health out sold they","artist":"Beyonce","genre":"R&B","album":"I am... Sasha Fierce"},{"id":59,"title":"before Keytar paleo tilde","artist":"Daughter","genre":"Blues","album":"Wild Youth EP"},{"id":60,"title":"chicharrones croix la seitan","artist":"The Chainsmokers","genre":"Country","album":"Memories... Do Not Open"},{"id":61,"title":"ea bag tote intelligentsia","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":62,"title":"hexagon dolor flexitarian Cillum","artist":"Ella Vos","genre":"R&B","album":"Words I Never Said"},{"id":63,"title":"eiusmod truffaut ut ea","artist":"Lindsey Stirling","genre":"Pop","album":"Lindsey Stirling"},{"id":64,"title":"artisan viral esse tbh","artist":"Oh Wonder","genre":"HipHop","album":"Oh Wonder"},{"id":65,"title":"Humblebrag skateboard celiac axe","artist":"Oh Wonder","genre":"R&B","album":"Oh Wonder"},{"id":66,"title":"fashion cillum croix la","artist":"Marian Hill","genre":"Pop","album":"Sway"},{"id":67,"title":"chicken hot aute pok","artist":"Marian Hill","genre":"R&B","album":"Sway"},{"id":68,"title":"pok live-edge tempor ea","artist":"Rick Astley","genre":"Blues","album":"Whenever You Need Sombeody"},{"id":69,"title":"in godard bread Cloud","artist":"Panic at the Disco","genre":"Country","album":"A Fever You Cant Sweat Out"},{"id":70,"title":"poke squid belly pork","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":71,"title":"af viral prism 8-bit","artist":"Rick Astley","genre":"Country","album":"Whenever You Need Sombeody"},{"id":72,"title":"chambray bag messenger aliqua","artist":"Ed Sheeran","genre":"Rock","album":"Multiply"},{"id":73,"title":"glossier mixtape juice Green","artist":"The Beatles","genre":"Country","album":"Abbey Road"},{"id":74,"title":"commodo park echo fingerstache","artist":"Sam Smith","genre":"Jazz","album":"In The Lonely Hour"},{"id":75,"title":"ad biodiesel chicharrones taiyaki","artist":"Backstreet Boys","genre":"Electronic","album":"Backstreet Boys"},{"id":76,"title":"offal lo-fi adaptogen cliche","artist":"Beyonce","genre":"Rock","album":"I am... Sasha Fierce"},{"id":77,"title":"fam Listicle laborum kickstarter","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":78,"title":"truffaut bottle blue banjo","artist":"Ed Sheeran","genre":"Pop","album":"Multiply"},{"id":79,"title":"kogi Post-ironic crucifix yr","artist":"Jasmine Thompson","genre":"Jazz","album":"Another Bundle of Tantrums"},{"id":80,"title":"biodiesel godard truffaut af","artist":"Beyonce","genre":"Pop","album":"I am... Sasha Fierce"},{"id":81,"title":"tousled Vexillologist level next","artist":"Ed Sheeran","genre":"R&B","album":"Multiply"},{"id":82,"title":"est prism tofu bespoke","artist":"Oh Wonder","genre":"Pop","album":"Oh Wonder"},{"id":83,"title":"polaroid asymmetrical magna kombucha","artist":"Dead Kennedys","genre":"HipHop","album":"Give Me Convenience or Give Me Death"},{"id":84,"title":"aute cornhole belly Pork","artist":"Marian Hill","genre":"R&B","album":"Sway"},{"id":85,"title":"woke shorts jean vegan","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":86,"title":"denim raw anim irony","artist":"Birdy","genre":"HipHop","album":"Birdy"},{"id":87,"title":"kitsch cardigan tacos ugh","artist":"Rick Astley","genre":"Country","album":"Whenever You Need Sombeody"},{"id":88,"title":"crucifix excepteur Pug in","artist":"The Beatles","genre":"Electronic","album":"Abbey Road"},{"id":89,"title":"ethical goth health bushwick","artist":"Birdy","genre":"Rock","album":"Birdy"},{"id":90,"title":"retro Duis pack fanny","artist":"Oh Wonder","genre":"Electronic","album":"Oh Wonder"},{"id":91,"title":"lorem carry everyday +1","artist":"Sia","genre":"Electronic","album":"Colour The Small One"},{"id":92,"title":"Jianbing celiac them of","artist":"Michael Jackson","genre":"Jazz","album":"Thriller"},{"id":93,"title":"heard haven't probably you","artist":"Panic at the Disco","genre":"Jazz","album":"A Fever You Cant Sweat Out"},{"id":94,"title":"charcoal activated quis Snackwave","artist":"Phoenix","genre":"Rock","album":"Wolfgang Amadeus Phoenix"},{"id":95,"title":"carry everyday forage slow-carb","artist":"Beyonce","genre":"R&B","album":"I am... Sasha Fierce"},{"id":96,"title":"Wolf church-key lumbersexual pok","artist":"Marian Hill","genre":"Rock","album":"Sway"},{"id":97,"title":"pok braid man Do","artist":"Oh Wonder","genre":"Rock","album":"Oh Wonder"},{"id":98,"title":"glossier umami chambray cold-pressed","artist":"Jasmine Thompson","genre":"Electronic","album":"Another Bundle of Tantrums"},{"id":99,"title":"mumblecore Hammock fixie bag","artist":"The Beatles","genre":"HipHop","album":"Abbey Road"},{"id":100,"title":"tote whatever meggings booth","artist":"Ed Sheeran","genre":"Pop","album":"Multiply"},{"id":101,"title":"photo ea nisi literally","artist":"The Beatles","genre":"R&B","album":"Abbey Road"},{"id":102,"title":"gluten-free Mixtape id polaroid","artist":"BB King","genre":"Jazz","album":"Singin the Blues"},{"id":103,"title":"hoodie minim celiac biodiesel","artist":"Ed Sheeran","genre":"Electronic","album":"Multiply"},{"id":104,"title":"goth health XOXO bespoke","artist":"The Chainsmokers","genre":"Country","album":"Memories... Do Not Open"},{"id":105,"title":"authentic laborum Beard adaptogen","artist":"The Chainsmokers","genre":"Jazz","album":"Memories... Do Not Open"},{"id":106,"title":"ethical cronut plaid mollit","artist":"Ella Vos","genre":"Country","album":"Words I Never Said"},{"id":107,"title":"beard qui pug non","artist":"Sia","genre":"Jazz","album":"Colour The Small One"},{"id":108,"title":"mi banh selfies Crucifix","artist":"Marian Hill","genre":"HipHop","album":"Sway"},{"id":109,"title":"kogi aute normcore sed","artist":"The Chainsmokers","genre":"Rock","album":"Memories... Do Not Open"},{"id":110,"title":"Dolore cupidatat vinegar drinking","artist":"Oh Wonder","genre":"R&B","album":"Oh Wonder"},{"id":111,"title":"unicorn Pug do of","artist":"Panic at the Disco","genre":"Rock","album":"A Fever You Cant Sweat Out"},{"id":112,"title":"hell et loko four","artist":"The Chainsmokers","genre":"Electronic","album":"Memories... Do Not Open"},{"id":113,"title":"fam bread cloud culpa","artist":"Elvis","genre":"Rock","album":"Elvis"},{"id":114,"title":"ea knausgaard Sunt VHS","artist":"The Beatles","genre":"HipHop","album":"Abbey Road"},{"id":115,"title":"disrupt 8-bit waistcoat hoodie","artist":"Phoenix","genre":"R&B","album":"Wolfgang Amadeus Phoenix"},{"id":116,"title":"deserunt YOLO trade direct","artist":"Ed Sheeran","genre":"Blues","album":"Multiply"},{"id":117,"title":"laborum moon wolf 3","artist":"Michael Jackson","genre":"Electronic","album":"Thriller"},{"id":118,"title":"truffaut croix la forage","artist":"Backstreet Boys","genre":"Country","album":"Backstreet Boys"},{"id":119,"title":"Chicharrones tofu lo-fi hashtag","artist":"Beyonce","genre":"Electronic","album":"I am... Sasha Fierce"},{"id":120,"title":"it on bird a","artist":"Backstreet Boys","genre":"R&B","album":"Backstreet Boys"},{"id":121,"title":"put normcore aliquip franzen","artist":"Sia","genre":"Pop","album":"Colour The Small One"},{"id":122,"title":"Aute kickstarter butcher excepteur","artist":"The Chainsmokers","genre":"Blues","album":"Memories... Do Not Open"},{"id":123,"title":"marfa bottle blue retro","artist":"The Chainsmokers","genre":"Pop","album":"Memories... Do Not Open"},{"id":124,"title":"bespoke forage do Authentic","artist":"Lindsey Stirling","genre":"R&B","album":"Lindsey Stirling"},{"id":125,"title":"trade direct belly pork","artist":"The Chainsmokers","genre":"Electronic","album":"Memories... Do Not Open"},{"id":126,"title":"chillwave sriracha Gastropub snackwave","artist":"Ed Sheeran","genre":"HipHop","album":"Multiply"},{"id":127,"title":"juice green proident tousled","artist":"Sam Smith","genre":"R&B","album":"In The Lonely Hour"},{"id":128,"title":"bulb edison forage them","artist":"Phoenix","genre":"HipHop","album":"Wolfgang Amadeus Phoenix"},{"id":129,"title":"of heard haven't probably","artist":"Marian Hill","genre":"Jazz","album":"Sway"},{"id":130,"title":"you elit cronut ad","artist":"Ed Sheeran","genre":"Rock","album":"Multiply"},{"id":131,"title":"pug wolf gentrify iPhone","artist":"Jasmine Thompson","genre":"Pop","album":"Another Bundle of Tantrums"},{"id":132,"title":"Reprehenderit park echo squid","artist":"Rick Astley","genre":"HipHop","album":"Whenever You Need Sombeody"},{"id":133,"title":"ennui etsy sartorial adipisicing","artist":"Michael Jackson","genre":"HipHop","album":"Thriller"},{"id":134,"title":"crucifix non Marfa vice","artist":"Beyonce","genre":"Rock","album":"I am... Sasha Fierce"},{"id":135,"title":"chartreuse qui sartorial blog","artist":"Ella Vos","genre":"Rock","album":"Words I Never Said"},{"id":136,"title":"DIY plaid laborum cronut","artist":"Daughter","genre":"Pop","album":"Wild Youth EP"},{"id":137,"title":"Consequat tumblr enim culpa","artist":"Daughter","genre":"Country","album":"Wild Youth EP"},{"id":138,"title":"esse microdosing quinoa lorem","artist":"Michael Jackson","genre":"Jazz","album":"Thriller"},{"id":139,"title":"truck food bag tote","artist":"Ed Sheeran","genre":"Blues","album":"Multiply"},{"id":140,"title":"keffiyeh kickstarter church-key Freegan","artist":"Rick Astley","genre":"Pop","album":"Whenever You Need Sombeody"}]

const dataExtend = (songData) => {
  const min = 1532687016731;
  const max = 1532687216731
  for(let i = 0; i < songData.length; i++) {
    let timeStamp = Math.floor(Math.random() * (max - min)) + min;
    if (songData[i].artist === 'The Beatles') {
      songData[i].albumArt = 'Beatles_AbbeyRoad.jpg';
      songData[i].fileName = 'TheBeatles_ComeTogether.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'BB King') {
      songData[i].albumArt = 'BBKing_SinginTheBlues.jpg';
      songData[i].fileName = 'BBKing_YouUpsetMeBaby.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Backstreet Boys') {
      songData[i].albumArt = 'BackstreetBoys_BackstreetBoys.jpg';
      songData[i].fileName = 'BackstreetBoys_QuitPlayingGamesWithMyHeart.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Beyonce') {
      songData[i].albumArt = 'Beyonce_IAm...SashaFierce.png';
      songData[i].fileName = 'Beyonce_Halo.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Birdy') {
      songData[i].albumArt = 'Birdy_Birdy.png';
      songData[i].fileName = 'Birdy_SkinnyLove.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Daughter') {
      songData[i].albumArt = 'Daughter_TheWildYouth.jpg';
      songData[i].fileName = 'Daughter_Medicine.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Dead Kennedys') {
      songData[i].albumArt = 'DeadKennedys_GiveMeConvenienceorGiveMeDeath.jpg';
      songData[i].fileName = 'TheDeadKennedys_HolidayinCambodia.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Ed Sheeran') {
      songData[i].albumArt = 'EdSheeran_X.png';
      songData[i].fileName = 'EdSheeran_Bloodstream.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Ella Vos') {
      songData[i].albumArt = 'EllaVos_WordsINeverSaid.jpg';
      songData[i].fileName = 'EllaVos_DownInFlames.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Elvis') {
      songData[i].albumArt = 'Elvis_Elvis.jpg';
      songData[i].fileName = 'ElvisPresley_LoveMe.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Jasmine Thompson') {
      songData[i].albumArt = 'JasmineThompson_AnotherBundleOfTantrums.jpg';
      songData[i].fileName = 'JasmineThompson_ISeeFire.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Lindsey Stirling') {
      songData[i].albumArt = 'LindseyStirling_LindseyStirling.jpg';
      songData[i].fileName = 'LindseyStirling_Crystallize.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Marian Hill') {
      songData[i].albumArt = 'MarianHill_Sway.jpg';
      songData[i].fileName = 'MarianHill_OneTime.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Michael Jackson') {
      songData[i].albumArt = 'MichaelJackson_Thriller.png';
      songData[i].fileName = 'MichaelJackson_Thriller.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Oh Wonder') {
      songData[i].albumArt = 'OhWonder_OhWonder.png';
      songData[i].fileName = 'OhWonder_WhiteBlood.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Panic at the Disco') {
      songData[i].albumArt = 'PanicAtTheDisco_AFeverYouCantSweatOut.jpg';
      songData[i].fileName = 'PanicAtTheDisco_IWriteSinsNotTragedies.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Phoenix') {
      songData[i].albumArt = 'Phoenix_WolfgangAmadeusPhoenix.png';
      songData[i].fileName = 'Phoenix_1901.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Rick Astley') {
      songData[i].albumArt = 'RickAstley_WheneverYouNeedSomebody.png';
      songData[i].fileName = 'RickAstley_NeverGonnaGiveYouUp.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Sam Smith') {
      songData[i].albumArt = 'SamSmith_InTheLonelyHour.png';
      songData[i].fileName = 'SamSmith_StayWithMe.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'Sia') {
      songData[i].albumArt = 'Sia_ColourTheSmallOne.jpg';
      songData[i].fileName = 'Sia_BreatheMe.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    } else if (songData[i].artist === 'The Chainsmokers') {
      songData[i].albumArt = 'TheChainsmokers_Memories...DoNotOpen.jpg';
      songData[i].fileName = 'TheChainsmokers_SomethingJustLikeThis.mp3';
      songData[i].createdAt = timeStamp;
      songData[i].plays = Math.floor(Math.random() * 999999999);
      songData[i].likes = Math.floor(Math.random() * 9999999);
      songData[i].shares = Math.floor(Math.random() * 99999);
      songData[i].comments = Math.floor(Math.random() * 99999);
    }
  }
  return songData
}

JSON.stringify(dataExtend(songsArr))

const fullData = [{
    "id": 1,
    "title": "reprehenderit marfa quinoa bag",
    "artist": "Rick Astley",
    "genre": "Jazz",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687116731,
    "plays": 573297307,
    "likes": 3516909,
    "shares": 50639,
    "comments": 56
}, {
    "id": 2,
    "title": "tote kickstarter cillum incididunt",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532687216731,
    "plays": 252914335,
    "likes": 320332,
    "shares": 68211,
    "comments": 19318
}, {
    "id": 3,
    "title": "letterpress vinegar drinking slow-carb",
    "artist": "Sam Smith",
    "genre": "R&B",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216731,
    "plays": 35722070,
    "likes": 188929,
    "shares": 50610,
    "comments": 22329
}, {
    "id": 4,
    "title": "Proident sustainable sartorial truck",
    "artist": "Sia",
    "genre": "Rock",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532687216731,
    "plays": 701464175,
    "likes": 8458540,
    "shares": 99705,
    "comments": 49257
}, {
    "id": 5,
    "title": "food cupidatat skateboard post-ironic",
    "artist": "Beyonce",
    "genre": "HipHop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216731,
    "plays": 575844397,
    "likes": 6484894,
    "shares": 9844,
    "comments": 28821
}, {
    "id": 6,
    "title": "party art occupy iceland",
    "artist": "Marian Hill",
    "genre": "Blues",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216731,
    "plays": 861131626,
    "likes": 5213506,
    "shares": 92973,
    "comments": 81536
}, {
    "id": 7,
    "title": "croix la ut charcoal",
    "artist": "Ella Vos",
    "genre": "Electronic",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216731,
    "plays": 914956938,
    "likes": 2696644,
    "shares": 80218,
    "comments": 2193
}, {
    "id": 8,
    "title": "Activated hoodie shorts jean",
    "artist": "Backstreet Boys",
    "genre": "Blues",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216731,
    "plays": 858272119,
    "likes": 6211683,
    "shares": 90145,
    "comments": 34676
}, {
    "id": 9,
    "title": "irony ut cold-pressed vegan",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532687216731,
    "plays": 279203306,
    "likes": 307974,
    "shares": 78179,
    "comments": 73137
}, {
    "id": 10,
    "title": "occaecat Sartorial poutine nisi",
    "artist": "Lindsey Stirling",
    "genre": "Blues",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532687216731,
    "plays": 884410343,
    "likes": 5643150,
    "shares": 50075,
    "comments": 14572
}, {
    "id": 11,
    "title": "qui aesthetic letterpress pariatur",
    "artist": "Backstreet Boys",
    "genre": "HipHop",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216731,
    "plays": 350793714,
    "likes": 8687724,
    "shares": 99787,
    "comments": 33306
}, {
    "id": 12,
    "title": "hexagon butcher lomo tacos",
    "artist": "Sam Smith",
    "genre": "HipHop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216731,
    "plays": 817631656,
    "likes": 2116679,
    "shares": 77751,
    "comments": 79979
}, {
    "id": 13,
    "title": "v deep Ad laborum",
    "artist": "Elvis",
    "genre": "Electronic",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532687216731,
    "plays": 531049970,
    "likes": 6441781,
    "shares": 20481,
    "comments": 79070
}, {
    "id": 14,
    "title": "eiusmod sint bread cloud",
    "artist": "Daughter",
    "genre": "Jazz",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532687216731,
    "plays": 845258266,
    "likes": 7173514,
    "shares": 1436,
    "comments": 76124
}, {
    "id": 15,
    "title": "portland Keffiyeh tempor belly",
    "artist": "Oh Wonder",
    "genre": "Blues",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216731,
    "plays": 618877781,
    "likes": 825252,
    "shares": 73260,
    "comments": 96116
}, {
    "id": 16,
    "title": "pork beard fixie them",
    "artist": "Backstreet Boys",
    "genre": "R&B",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216731,
    "plays": 182871231,
    "likes": 682772,
    "shares": 51236,
    "comments": 12577
}, {
    "id": 17,
    "title": "of heard haven't probably",
    "artist": "Elvis",
    "genre": "Electronic",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532687216732,
    "plays": 783208201,
    "likes": 9893514,
    "shares": 16182,
    "comments": 56331
}, {
    "id": 18,
    "title": "You organic aute listicle",
    "artist": "Marian Hill",
    "genre": "Country",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216732,
    "plays": 545574917,
    "likes": 60175,
    "shares": 68814,
    "comments": 94981
}, {
    "id": 19,
    "title": "irony kitsch snackwave skateboard",
    "artist": "Lindsey Stirling",
    "genre": "HipHop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532687216732,
    "plays": 152258629,
    "likes": 8211297,
    "shares": 46227,
    "comments": 31165
}, {
    "id": 20,
    "title": "dolore ethical Banjo anim",
    "artist": "Beyonce",
    "genre": "HipHop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216732,
    "plays": 374404022,
    "likes": 6103045,
    "shares": 5856,
    "comments": 50994
}, {
    "id": 21,
    "title": "est blog bag tote",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216732,
    "plays": 665244436,
    "likes": 1471468,
    "shares": 8900,
    "comments": 85968
}, {
    "id": 22,
    "title": "YOLO schlitz austin ad",
    "artist": "Sam Smith",
    "genre": "Electronic",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216732,
    "plays": 208172477,
    "likes": 2364918,
    "shares": 40002,
    "comments": 90334
}, {
    "id": 23,
    "title": "shoreditch occaecat ethical pop-up",
    "artist": "Oh Wonder",
    "genre": "Blues",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 513249754,
    "likes": 9534035,
    "shares": 64777,
    "comments": 38129
}, {
    "id": 24,
    "title": "stumptown Taiyaki v deep",
    "artist": "BB King",
    "genre": "Country",
    "album": "Singin the Blues",
    "albumArt": "BBKing_SinginTheBlues.jpg",
    "createdAt": 1532687216733,
    "plays": 750101083,
    "likes": 4587803,
    "shares": 38051,
    "comments": 91966
}, {
    "id": 25,
    "title": "waistcoat tumblr wolf Disrupt",
    "artist": "Ella Vos",
    "genre": "Jazz",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216733,
    "plays": 847632462,
    "likes": 4726971,
    "shares": 24248,
    "comments": 24291
}, {
    "id": 26,
    "title": "ea kitsch readymade williamsburg",
    "artist": "Lindsey Stirling",
    "genre": "Pop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532687216733,
    "plays": 432818135,
    "likes": 3582373,
    "shares": 61125,
    "comments": 4170
}, {
    "id": 27,
    "title": "officia et tilde tacos",
    "artist": "Ella Vos",
    "genre": "R&B",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216733,
    "plays": 506170161,
    "likes": 151857,
    "shares": 15841,
    "comments": 77987
}, {
    "id": 28,
    "title": "gochujang Culpa cardigan selvage",
    "artist": "Backstreet Boys",
    "genre": "Electronic",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216733,
    "plays": 827327409,
    "likes": 6612035,
    "shares": 6439,
    "comments": 53615
}, {
    "id": 29,
    "title": "tilde knausgaard Aliqua in",
    "artist": "Daughter",
    "genre": "Rock",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532687216733,
    "plays": 490993608,
    "likes": 6040273,
    "shares": 48686,
    "comments": 35923
}, {
    "id": 30,
    "title": "polaroid disrupt cillum selfies",
    "artist": "Birdy",
    "genre": "Pop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532687216733,
    "plays": 583790725,
    "likes": 7841943,
    "shares": 30263,
    "comments": 12754
}, {
    "id": 31,
    "title": "coffee Single-origin pop-up cronut",
    "artist": "Sam Smith",
    "genre": "Country",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216733,
    "plays": 2343777,
    "likes": 9008892,
    "shares": 79260,
    "comments": 57791
}, {
    "id": 32,
    "title": "austin esse book Coloring",
    "artist": "Ed Sheeran",
    "genre": "Country",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 557220546,
    "likes": 9240987,
    "shares": 27082,
    "comments": 31257
}, {
    "id": 33,
    "title": "mug copper ramps distillery",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 951134154,
    "likes": 5388942,
    "shares": 77271,
    "comments": 23028
}, {
    "id": 34,
    "title": "sunt authentic skateboard gochujang",
    "artist": "Sam Smith",
    "genre": "HipHop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216733,
    "plays": 386936445,
    "likes": 9472339,
    "shares": 89983,
    "comments": 16309
}, {
    "id": 35,
    "title": "do kickstarter truck Food",
    "artist": "Michael Jackson",
    "genre": "Blues",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532687216733,
    "plays": 799573363,
    "likes": 5244688,
    "shares": 5250,
    "comments": 81156
}, {
    "id": 36,
    "title": "hammock williamsburg raclette ex",
    "artist": "Phoenix",
    "genre": "Pop",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532687216733,
    "plays": 811213610,
    "likes": 1721683,
    "shares": 78627,
    "comments": 96333
}, {
    "id": 37,
    "title": "venmo cold-pressed scenester deserunt",
    "artist": "Daughter",
    "genre": "Blues",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532687216733,
    "plays": 218584539,
    "likes": 3727296,
    "shares": 7469,
    "comments": 52622
}, {
    "id": 38,
    "title": "succulents try-hard YOLO Pinterest",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 624527192,
    "likes": 6638301,
    "shares": 51690,
    "comments": 30182
}, {
    "id": 39,
    "title": "velit ut helvetica synth",
    "artist": "Rick Astley",
    "genre": "R&B",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687216733,
    "plays": 726434819,
    "likes": 6541263,
    "shares": 43259,
    "comments": 99505
}, {
    "id": 40,
    "title": "+1 mug copper readymade",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216733,
    "plays": 961070017,
    "likes": 9179627,
    "shares": 14579,
    "comments": 12828
}, {
    "id": 41,
    "title": "aliqua santo palo incididunt",
    "artist": "Lindsey Stirling",
    "genre": "Electronic",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532687216733,
    "plays": 368600235,
    "likes": 662792,
    "shares": 94974,
    "comments": 39575
}, {
    "id": 42,
    "title": "Cronut cardigan literally excepteur",
    "artist": "The Chainsmokers",
    "genre": "Pop",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 121841230,
    "likes": 767777,
    "shares": 63251,
    "comments": 13370
}, {
    "id": 43,
    "title": "pack fanny hoodie scenester",
    "artist": "Beyonce",
    "genre": "Pop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216733,
    "plays": 486256239,
    "likes": 4865807,
    "shares": 68814,
    "comments": 98612
}, {
    "id": 44,
    "title": "Narwhal lomo consectetur occupy",
    "artist": "Sam Smith",
    "genre": "Jazz",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216733,
    "plays": 300509453,
    "likes": 4412163,
    "shares": 90519,
    "comments": 72109
}, {
    "id": 45,
    "title": "williamsburg locavore pug Synth",
    "artist": "Backstreet Boys",
    "genre": "HipHop",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216733,
    "plays": 495645620,
    "likes": 3670798,
    "shares": 42953,
    "comments": 47475
}, {
    "id": 46,
    "title": "meditation twee incididunt helvetica",
    "artist": "Sam Smith",
    "genre": "Pop",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216733,
    "plays": 855655409,
    "likes": 99136,
    "shares": 9375,
    "comments": 55551
}, {
    "id": 47,
    "title": "offal truck Food ea",
    "artist": "Rick Astley",
    "genre": "Jazz",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687216733,
    "plays": 13165882,
    "likes": 3261701,
    "shares": 74033,
    "comments": 48607
}, {
    "id": 48,
    "title": "literally est santo palo",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532687216733,
    "plays": 434098803,
    "likes": 1766514,
    "shares": 9257,
    "comments": 67658
}, {
    "id": 49,
    "title": "cupidatat lyft meditation them",
    "artist": "Birdy",
    "genre": "HipHop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532687216733,
    "plays": 251676631,
    "likes": 4308228,
    "shares": 22762,
    "comments": 77834
}, {
    "id": 50,
    "title": "of heard haven't probably",
    "artist": "Sia",
    "genre": "Country",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532687216733,
    "plays": 24385463,
    "likes": 682120,
    "shares": 5942,
    "comments": 1072
}, {
    "id": 51,
    "title": "you cred ramps denim",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 150751567,
    "likes": 2016986,
    "shares": 7127,
    "comments": 96844
}, {
    "id": 52,
    "title": "raw chambray marfa Thundercats",
    "artist": "Birdy",
    "genre": "Electronic",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532687216733,
    "plays": 753620842,
    "likes": 8216408,
    "shares": 82007,
    "comments": 18076
}, {
    "id": 53,
    "title": "polaroid pinterest gastropub in",
    "artist": "Birdy",
    "genre": "Country",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532687216733,
    "plays": 672207064,
    "likes": 7998553,
    "shares": 59123,
    "comments": 12812
}, {
    "id": 54,
    "title": "seitan plaid aliquip bag",
    "artist": "Ella Vos",
    "genre": "Country",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216733,
    "plays": 433379988,
    "likes": 2807458,
    "shares": 42639,
    "comments": 93378
}, {
    "id": 55,
    "title": "tote slow-carb truck food",
    "artist": "Michael Jackson",
    "genre": "Rock",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532687216733,
    "plays": 847896964,
    "likes": 47036,
    "shares": 78947,
    "comments": 96232
}, {
    "id": 56,
    "title": "In truck food bulb",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532687216733,
    "plays": 197034363,
    "likes": 9021898,
    "shares": 1878,
    "comments": 73277
}, {
    "id": 57,
    "title": "edison +1 YOLO goth",
    "artist": "The Beatles",
    "genre": "R&B",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532687216733,
    "plays": 634193623,
    "likes": 1915749,
    "shares": 11094,
    "comments": 31329
}, {
    "id": 58,
    "title": "health out sold they",
    "artist": "Beyonce",
    "genre": "R&B",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216733,
    "plays": 274587876,
    "likes": 3075445,
    "shares": 79796,
    "comments": 9380
}, {
    "id": 59,
    "title": "before Keytar paleo tilde",
    "artist": "Daughter",
    "genre": "Blues",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532687216733,
    "plays": 316011432,
    "likes": 6170428,
    "shares": 67204,
    "comments": 36509
}, {
    "id": 60,
    "title": "chicharrones croix la seitan",
    "artist": "The Chainsmokers",
    "genre": "Country",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 70854351,
    "likes": 387009,
    "shares": 84589,
    "comments": 13857
}, {
    "id": 61,
    "title": "ea bag tote intelligentsia",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 325066444,
    "likes": 1920784,
    "shares": 39837,
    "comments": 74085
}, {
    "id": 62,
    "title": "hexagon dolor flexitarian Cillum",
    "artist": "Ella Vos",
    "genre": "R&B",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216733,
    "plays": 618610792,
    "likes": 6187916,
    "shares": 99826,
    "comments": 51692
}, {
    "id": 63,
    "title": "eiusmod truffaut ut ea",
    "artist": "Lindsey Stirling",
    "genre": "Pop",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532687216733,
    "plays": 804249723,
    "likes": 8360282,
    "shares": 80995,
    "comments": 56991
}, {
    "id": 64,
    "title": "artisan viral esse tbh",
    "artist": "Oh Wonder",
    "genre": "HipHop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 762026428,
    "likes": 8704078,
    "shares": 64222,
    "comments": 15932
}, {
    "id": 65,
    "title": "Humblebrag skateboard celiac axe",
    "artist": "Oh Wonder",
    "genre": "R&B",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 707935952,
    "likes": 4656109,
    "shares": 14226,
    "comments": 15058
}, {
    "id": 66,
    "title": "fashion cillum croix la",
    "artist": "Marian Hill",
    "genre": "Pop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 244466273,
    "likes": 6583771,
    "shares": 95590,
    "comments": 80344
}, {
    "id": 67,
    "title": "chicken hot aute pok",
    "artist": "Marian Hill",
    "genre": "R&B",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 398835248,
    "likes": 4152203,
    "shares": 92249,
    "comments": 35137
}, {
    "id": 68,
    "title": "pok live-edge tempor ea",
    "artist": "Rick Astley",
    "genre": "Blues",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687216733,
    "plays": 570438730,
    "likes": 9764019,
    "shares": 40248,
    "comments": 10571
}, {
    "id": 69,
    "title": "in godard bread Cloud",
    "artist": "Panic at the Disco",
    "genre": "Country",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "createdAt": 1532687216733,
    "plays": 687969206,
    "likes": 7520114,
    "shares": 10693,
    "comments": 85880
}, {
    "id": 70,
    "title": "poke squid belly pork",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532687216733,
    "plays": 538473997,
    "likes": 3280754,
    "shares": 48940,
    "comments": 60107
}, {
    "id": 71,
    "title": "af viral prism 8-bit",
    "artist": "Rick Astley",
    "genre": "Country",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687216733,
    "plays": 585954960,
    "likes": 6790929,
    "shares": 88148,
    "comments": 42345
}, {
    "id": 72,
    "title": "chambray bag messenger aliqua",
    "artist": "Ed Sheeran",
    "genre": "Rock",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 842872061,
    "likes": 9869826,
    "shares": 25388,
    "comments": 49871
}, {
    "id": 73,
    "title": "glossier mixtape juice Green",
    "artist": "The Beatles",
    "genre": "Country",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532687216733,
    "plays": 110153809,
    "likes": 1938419,
    "shares": 41922,
    "comments": 92349
}, {
    "id": 74,
    "title": "commodo park echo fingerstache",
    "artist": "Sam Smith",
    "genre": "Jazz",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216733,
    "plays": 551868917,
    "likes": 3699774,
    "shares": 75879,
    "comments": 76905
}, {
    "id": 75,
    "title": "ad biodiesel chicharrones taiyaki",
    "artist": "Backstreet Boys",
    "genre": "Electronic",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216733,
    "plays": 768605562,
    "likes": 1048004,
    "shares": 17082,
    "comments": 70212
}, {
    "id": 76,
    "title": "offal lo-fi adaptogen cliche",
    "artist": "Beyonce",
    "genre": "Rock",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216733,
    "plays": 730195623,
    "likes": 6888941,
    "shares": 74493,
    "comments": 26227
}, {
    "id": 77,
    "title": "fam Listicle laborum kickstarter",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532687216733,
    "plays": 274040193,
    "likes": 6953418,
    "shares": 53010,
    "comments": 63216
}, {
    "id": 78,
    "title": "truffaut bottle blue banjo",
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 351476342,
    "likes": 9038871,
    "shares": 7560,
    "comments": 12427
}, {
    "id": 79,
    "title": "kogi Post-ironic crucifix yr",
    "artist": "Jasmine Thompson",
    "genre": "Jazz",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532687216733,
    "plays": 512961691,
    "likes": 9144649,
    "shares": 36312,
    "comments": 51935
}, {
    "id": 80,
    "title": "biodiesel godard truffaut af",
    "artist": "Beyonce",
    "genre": "Pop",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216733,
    "plays": 318550083,
    "likes": 9784044,
    "shares": 41339,
    "comments": 55168
}, {
    "id": 81,
    "title": "tousled Vexillologist level next",
    "artist": "Ed Sheeran",
    "genre": "R&B",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 889363435,
    "likes": 2407021,
    "shares": 40944,
    "comments": 32900
}, {
    "id": 82,
    "title": "est prism tofu bespoke",
    "artist": "Oh Wonder",
    "genre": "Pop",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 258870797,
    "likes": 2164117,
    "shares": 54711,
    "comments": 18755
}, {
    "id": 83,
    "title": "polaroid asymmetrical magna kombucha",
    "artist": "Dead Kennedys",
    "genre": "HipHop",
    "album": "Give Me Convenience or Give Me Death",
    "albumArt": "DeadKennedys_GiveMeConvenienceorGiveMeDeath.jpg",
    "createdAt": 1532687216733,
    "plays": 80161981,
    "likes": 1070127,
    "shares": 27534,
    "comments": 78363
}, {
    "id": 84,
    "title": "aute cornhole belly Pork",
    "artist": "Marian Hill",
    "genre": "R&B",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 461720591,
    "likes": 676264,
    "shares": 71853,
    "comments": 82908
}, {
    "id": 85,
    "title": "woke shorts jean vegan",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532687216733,
    "plays": 19146274,
    "likes": 4520770,
    "shares": 40623,
    "comments": 85657
}, {
    "id": 86,
    "title": "denim raw anim irony",
    "artist": "Birdy",
    "genre": "HipHop",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532687216733,
    "plays": 953122438,
    "likes": 3254576,
    "shares": 68123,
    "comments": 96122
}, {
    "id": 87,
    "title": "kitsch cardigan tacos ugh",
    "artist": "Rick Astley",
    "genre": "Country",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687216733,
    "plays": 904600756,
    "likes": 18933,
    "shares": 17663,
    "comments": 52697
}, {
    "id": 88,
    "title": "crucifix excepteur Pug in",
    "artist": "The Beatles",
    "genre": "Electronic",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532687216733,
    "plays": 333074451,
    "likes": 9721038,
    "shares": 1958,
    "comments": 58201
}, {
    "id": 89,
    "title": "ethical goth health bushwick",
    "artist": "Birdy",
    "genre": "Rock",
    "album": "Birdy",
    "albumArt": "Birdy_Birdy.png",
    "createdAt": 1532687216733,
    "plays": 336263283,
    "likes": 3338279,
    "shares": 12358,
    "comments": 55399
}, {
    "id": 90,
    "title": "retro Duis pack fanny",
    "artist": "Oh Wonder",
    "genre": "Electronic",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 238650329,
    "likes": 9925127,
    "shares": 49447,
    "comments": 27415
}, {
    "id": 91,
    "title": "lorem carry everyday +1",
    "artist": "Sia",
    "genre": "Electronic",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532687216733,
    "plays": 549475148,
    "likes": 3569818,
    "shares": 89587,
    "comments": 34687
}, {
    "id": 92,
    "title": "Jianbing celiac them of",
    "artist": "Michael Jackson",
    "genre": "Jazz",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532687216733,
    "plays": 616566349,
    "likes": 2897335,
    "shares": 69133,
    "comments": 74938
}, {
    "id": 93,
    "title": "heard haven't probably you",
    "artist": "Panic at the Disco",
    "genre": "Jazz",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "createdAt": 1532687216733,
    "plays": 418409328,
    "likes": 166556,
    "shares": 59931,
    "comments": 72673
}, {
    "id": 94,
    "title": "charcoal activated quis Snackwave",
    "artist": "Phoenix",
    "genre": "Rock",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532687216733,
    "plays": 570377279,
    "likes": 9536012,
    "shares": 30781,
    "comments": 50396
}, {
    "id": 95,
    "title": "carry everyday forage slow-carb",
    "artist": "Beyonce",
    "genre": "R&B",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216733,
    "plays": 979379321,
    "likes": 2047349,
    "shares": 81975,
    "comments": 51575
}, {
    "id": 96,
    "title": "Wolf church-key lumbersexual pok",
    "artist": "Marian Hill",
    "genre": "Rock",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 652496582,
    "likes": 282076,
    "shares": 5628,
    "comments": 69438
}, {
    "id": 97,
    "title": "pok braid man Do",
    "artist": "Oh Wonder",
    "genre": "Rock",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 806968676,
    "likes": 1127539,
    "shares": 87130,
    "comments": 83935
}, {
    "id": 98,
    "title": "glossier umami chambray cold-pressed",
    "artist": "Jasmine Thompson",
    "genre": "Electronic",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532687216733,
    "plays": 57272306,
    "likes": 8071931,
    "shares": 89538,
    "comments": 91582
}, {
    "id": 99,
    "title": "mumblecore Hammock fixie bag",
    "artist": "The Beatles",
    "genre": "HipHop",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532687216733,
    "plays": 166489197,
    "likes": 4121131,
    "shares": 6874,
    "comments": 60000
}, {
    "id": 100,
    "title": "tote whatever meggings booth",
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 754623724,
    "likes": 5799021,
    "shares": 20510,
    "comments": 26892
}, {
    "id": 101,
    "title": "photo ea nisi literally",
    "artist": "The Beatles",
    "genre": "R&B",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532687216733,
    "plays": 266118741,
    "likes": 9700396,
    "shares": 14723,
    "comments": 31568
}, {
    "id": 102,
    "title": "gluten-free Mixtape id polaroid",
    "artist": "BB King",
    "genre": "Jazz",
    "album": "Singin the Blues",
    "albumArt": "BBKing_SinginTheBlues.jpg",
    "createdAt": 1532687216733,
    "plays": 489119206,
    "likes": 3826325,
    "shares": 1158,
    "comments": 68393
}, {
    "id": 103,
    "title": "hoodie minim celiac biodiesel",
    "artist": "Ed Sheeran",
    "genre": "Electronic",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 742239659,
    "likes": 6961124,
    "shares": 4349,
    "comments": 28165
}, {
    "id": 104,
    "title": "goth health XOXO bespoke",
    "artist": "The Chainsmokers",
    "genre": "Country",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 647647907,
    "likes": 4770619,
    "shares": 58317,
    "comments": 56900
}, {
    "id": 105,
    "title": "authentic laborum Beard adaptogen",
    "artist": "The Chainsmokers",
    "genre": "Jazz",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 254698131,
    "likes": 2022399,
    "shares": 34926,
    "comments": 28420
}, {
    "id": 106,
    "title": "ethical cronut plaid mollit",
    "artist": "Ella Vos",
    "genre": "Country",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216733,
    "plays": 725342366,
    "likes": 7128231,
    "shares": 1339,
    "comments": 22153
}, {
    "id": 107,
    "title": "beard qui pug non",
    "artist": "Sia",
    "genre": "Jazz",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532687216733,
    "plays": 859698280,
    "likes": 9406244,
    "shares": 38857,
    "comments": 86379
}, {
    "id": 108,
    "title": "mi banh selfies Crucifix",
    "artist": "Marian Hill",
    "genre": "HipHop",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 642704226,
    "likes": 3823462,
    "shares": 76525,
    "comments": 90628
}, {
    "id": 109,
    "title": "kogi aute normcore sed",
    "artist": "The Chainsmokers",
    "genre": "Rock",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 867552706,
    "likes": 381203,
    "shares": 23124,
    "comments": 24416
}, {
    "id": 110,
    "title": "Dolore cupidatat vinegar drinking",
    "artist": "Oh Wonder",
    "genre": "R&B",
    "album": "Oh Wonder",
    "albumArt": "OhWonder_OhWonder.png",
    "createdAt": 1532687216733,
    "plays": 814517684,
    "likes": 5704508,
    "shares": 31769,
    "comments": 26895
}, {
    "id": 111,
    "title": "unicorn Pug do of",
    "artist": "Panic at the Disco",
    "genre": "Rock",
    "album": "A Fever You Cant Sweat Out",
    "albumArt": "PanicAtTheDisco_AFeverYouCantSweatOut.jpg",
    "createdAt": 1532687216733,
    "plays": 172390610,
    "likes": 4492465,
    "shares": 4832,
    "comments": 90864
}, {
    "id": 112,
    "title": "hell et loko four",
    "artist": "The Chainsmokers",
    "genre": "Electronic",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 562910346,
    "likes": 487151,
    "shares": 93122,
    "comments": 79683
}, {
    "id": 113,
    "title": "fam bread cloud culpa",
    "artist": "Elvis",
    "genre": "Rock",
    "album": "Elvis",
    "albumArt": "Elvis_Elvis.jpg",
    "createdAt": 1532687216733,
    "plays": 695239771,
    "likes": 5842061,
    "shares": 43078,
    "comments": 21478
}, {
    "id": 114,
    "title": "ea knausgaard Sunt VHS",
    "artist": "The Beatles",
    "genre": "HipHop",
    "album": "Abbey Road",
    "albumArt": "Beatles_AbbeyRoad.jpg",
    "createdAt": 1532687216733,
    "plays": 90564795,
    "likes": 4130760,
    "shares": 23911,
    "comments": 25040
}, {
    "id": 115,
    "title": "disrupt 8-bit waistcoat hoodie",
    "artist": "Phoenix",
    "genre": "R&B",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532687216733,
    "plays": 133017526,
    "likes": 7659377,
    "shares": 47378,
    "comments": 16210
}, {
    "id": 116,
    "title": "deserunt YOLO trade direct",
    "artist": "Ed Sheeran",
    "genre": "Blues",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 661504144,
    "likes": 476180,
    "shares": 87470,
    "comments": 84509
}, {
    "id": 117,
    "title": "laborum moon wolf 3",
    "artist": "Michael Jackson",
    "genre": "Electronic",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532687216733,
    "plays": 796104211,
    "likes": 610866,
    "shares": 94277,
    "comments": 38824
}, {
    "id": 118,
    "title": "truffaut croix la forage",
    "artist": "Backstreet Boys",
    "genre": "Country",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216733,
    "plays": 759364922,
    "likes": 2112587,
    "shares": 53328,
    "comments": 25261
}, {
    "id": 119,
    "title": "Chicharrones tofu lo-fi hashtag",
    "artist": "Beyonce",
    "genre": "Electronic",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216733,
    "plays": 184948091,
    "likes": 2169733,
    "shares": 26763,
    "comments": 30348
}, {
    "id": 120,
    "title": "it on bird a",
    "artist": "Backstreet Boys",
    "genre": "R&B",
    "album": "Backstreet Boys",
    "albumArt": "BackstreetBoys_BackstreetBoys.jpg",
    "createdAt": 1532687216733,
    "plays": 59840676,
    "likes": 9104770,
    "shares": 199,
    "comments": 32747
}, {
    "id": 121,
    "title": "put normcore aliquip franzen",
    "artist": "Sia",
    "genre": "Pop",
    "album": "Colour The Small One",
    "albumArt": "Sia_ColourTheSmallOne.jpg",
    "createdAt": 1532687216733,
    "plays": 555123577,
    "likes": 5475782,
    "shares": 97359,
    "comments": 36703
}, {
    "id": 122,
    "title": "Aute kickstarter butcher excepteur",
    "artist": "The Chainsmokers",
    "genre": "Blues",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 765411838,
    "likes": 8213597,
    "shares": 85053,
    "comments": 48335
}, {
    "id": 123,
    "title": "marfa bottle blue retro",
    "artist": "The Chainsmokers",
    "genre": "Pop",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 751481518,
    "likes": 8057336,
    "shares": 99256,
    "comments": 61258
}, {
    "id": 124,
    "title": "bespoke forage do Authentic",
    "artist": "Lindsey Stirling",
    "genre": "R&B",
    "album": "Lindsey Stirling",
    "albumArt": "LindseyStirling_LindseyStirling.jpg",
    "createdAt": 1532687216733,
    "plays": 525913267,
    "likes": 3406972,
    "shares": 42250,
    "comments": 29244
}, {
    "id": 125,
    "title": "trade direct belly pork",
    "artist": "The Chainsmokers",
    "genre": "Electronic",
    "album": "Memories... Do Not Open",
    "albumArt": "TheChainsmokers_Memories...DoNotOpen.jpg",
    "createdAt": 1532687216733,
    "plays": 429917641,
    "likes": 360933,
    "shares": 90211,
    "comments": 80735
}, {
    "id": 126,
    "title": "chillwave sriracha Gastropub snackwave",
    "artist": "Ed Sheeran",
    "genre": "HipHop",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 222493179,
    "likes": 6157720,
    "shares": 49901,
    "comments": 1692
}, {
    "id": 127,
    "title": "juice green proident tousled",
    "artist": "Sam Smith",
    "genre": "R&B",
    "album": "In The Lonely Hour",
    "albumArt": "SamSmith_InTheLonelyHour.png",
    "createdAt": 1532687216733,
    "plays": 888928368,
    "likes": 9753978,
    "shares": 55232,
    "comments": 18587
}, {
    "id": 128,
    "title": "bulb edison forage them",
    "artist": "Phoenix",
    "genre": "HipHop",
    "album": "Wolfgang Amadeus Phoenix",
    "albumArt": "Phoenix_WolfgangAmadeusPhoenix.png",
    "createdAt": 1532687216733,
    "plays": 894713621,
    "likes": 7047873,
    "shares": 87122,
    "comments": 83627
}, {
    "id": 129,
    "title": "of heard haven't probably",
    "artist": "Marian Hill",
    "genre": "Jazz",
    "album": "Sway",
    "albumArt": "MarianHill_Sway.jpg",
    "createdAt": 1532687216733,
    "plays": 290943688,
    "likes": 1998452,
    "shares": 75457,
    "comments": 36496
}, {
    "id": 130,
    "title": "you elit cronut ad",
    "artist": "Ed Sheeran",
    "genre": "Rock",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 602043388,
    "likes": 9742973,
    "shares": 9614,
    "comments": 29913
}, {
    "id": 131,
    "title": "pug wolf gentrify iPhone",
    "artist": "Jasmine Thompson",
    "genre": "Pop",
    "album": "Another Bundle of Tantrums",
    "albumArt": "JasmineThompson_AnotherBundleOfTantrums.jpg",
    "createdAt": 1532687216733,
    "plays": 705695331,
    "likes": 2377098,
    "shares": 34014,
    "comments": 56967
}, {
    "id": 132,
    "title": "Reprehenderit park echo squid",
    "artist": "Rick Astley",
    "genre": "HipHop",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687216733,
    "plays": 39210238,
    "likes": 9790522,
    "shares": 1891,
    "comments": 17671
}, {
    "id": 133,
    "title": "ennui etsy sartorial adipisicing",
    "artist": "Michael Jackson",
    "genre": "HipHop",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532687216733,
    "plays": 511425416,
    "likes": 1519123,
    "shares": 49344,
    "comments": 54290
}, {
    "id": 134,
    "title": "crucifix non Marfa vice",
    "artist": "Beyonce",
    "genre": "Rock",
    "album": "I am... Sasha Fierce",
    "albumArt": "Beyonce_IAm...SashaFierce.png",
    "createdAt": 1532687216733,
    "plays": 23379089,
    "likes": 3536906,
    "shares": 72751,
    "comments": 22015
}, {
    "id": 135,
    "title": "chartreuse qui sartorial blog",
    "artist": "Ella Vos",
    "genre": "Rock",
    "album": "Words I Never Said",
    "albumArt": "EllaVos_WordsINeverSaid.jpg",
    "createdAt": 1532687216733,
    "plays": 471667641,
    "likes": 8479550,
    "shares": 7083,
    "comments": 76894
}, {
    "id": 136,
    "title": "DIY plaid laborum cronut",
    "artist": "Daughter",
    "genre": "Pop",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532687216733,
    "plays": 158977211,
    "likes": 5864848,
    "shares": 76292,
    "comments": 69683
}, {
    "id": 137,
    "title": "Consequat tumblr enim culpa",
    "artist": "Daughter",
    "genre": "Country",
    "album": "Wild Youth EP",
    "albumArt": "Daughter_TheWildYouth.jpg",
    "createdAt": 1532687216733,
    "plays": 966564187,
    "likes": 2072644,
    "shares": 87989,
    "comments": 42944
}, {
    "id": 138,
    "title": "esse microdosing quinoa lorem",
    "artist": "Michael Jackson",
    "genre": "Jazz",
    "album": "Thriller",
    "albumArt": "MichaelJackson_Thriller.png",
    "createdAt": 1532687216733,
    "plays": 660985216,
    "likes": 5328773,
    "shares": 98471,
    "comments": 53969
}, {
    "id": 139,
    "title": "truck food bag tote",
    "artist": "Ed Sheeran",
    "genre": "Blues",
    "album": "Multiply",
    "albumArt": "EdSheeran_X.png",
    "createdAt": 1532687216733,
    "plays": 625390865,
    "likes": 5868285,
    "shares": 13413,
    "comments": 14407
}, {
    "id": 140,
    "title": "keffiyeh kickstarter church-key Freegan",
    "artist": "Rick Astley",
    "genre": "Pop",
    "album": "Whenever You Need Sombeody",
    "albumArt": "RickAstley_WheneverYouNeedSomebody.png",
    "createdAt": 1532687216733,
    "plays": 562055059,
    "likes": 5165706,
    "shares": 5884,
    "comments": 38004
}]
