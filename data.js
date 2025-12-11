// 這是一個包含所有鹿港景點資料的 JavaScript 陣列 (Array)。
const lukangData = [
    // 古蹟
    {
        name: "鹿港民俗文物館",
        lat: 24.054063187383974,
        lng: 120.4361934248276,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮館前街88號",
        imageUrl: "https://picsum.photos/400/250?random=1" 
    },
    {
        name: "鹿港老街",
        lat: 24.056299067209714,
        lng: 120.4325809518184,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮埔頭街3號",
        imageUrl: "https://picsum.photos/400/250?random=2"
    },
    {
        name: "鹿港新祖宮",
        lat: 24.058152614706362,
        lng: 120.43125932608194,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮埔頭街96號",
        imageUrl: "https://picsum.photos/400/250?random=3"
    },
    {
        name: "鹿港龍山寺",
        lat: 24.050349775172926, 
        lng: 120.43496139927807,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮金門巷81號",
        imageUrl: "https://picsum.photos/400/250?random=4"
    },
    {
        name: "鹿港公會堂",
        lat: 24.057529614451553,
        lng: 120.43185588117622,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮埔頭街72號",
        imageUrl: "https://picsum.photos/400/250?random=5"
    },
    {
        name: "意和行",
        lat: 24.05603865384436,
        lng: 120.43269952609515,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮瑤林街17號",
        imageUrl: "https://picsum.photos/400/250?random=6"
    },
    {
        name: "鹿港丁家古厝",
        lat: 24.053454561556013,
        lng: 120.43605986510771,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮中山路132號",
        imageUrl: "https://picsum.photos/400/250?random=7"
    },
    {
        name: "鹿港鎮史館",
        lat: 24.057260786049238,
        lng: 120.43541390904046,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮民權路160巷2號",
        imageUrl: "https://picsum.photos/400/250?random=8"
    },
    {
        name: "文武廟",
        lat: 24.048819199884026,
        lng: 120.43846306553822,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮青雲路2號",
        imageUrl: "https://picsum.photos/400/250?random=9"
    },
    {
        name: "鹿港鶴棲別墅",
        lat: 24.054867635003045,
        lng: 120.43408709629642,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮後車巷8號",
        imageUrl: "https://picsum.photos/400/250?random=10"
    },
    {
        name: "鹿港南靖宮",
        lat: 24.057672708148196,
        lng: 120.43161042328073,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮埔頭街78號",
        imageUrl: "https://picsum.photos/400/250?random=11"
    },
    {
        name: "鹿港日茂行",
        lat: 24.058535526241016,
        lng: 120.42926583347197,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮泉州街70號",
        imageUrl: "https://picsum.photos/400/250?random=12"
    },
    {
        name: "鹿港天后宮",
        lat: 24.059271772798237,
        lng: 120.43146597733531,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮中山路430號",
        imageUrl: "https://picsum.photos/400/250?random=13"
    },
    {
        name: "鹿港桂花巷藝術村",
        lat: 24.05585218497819,
        lng: 120.43192762684824,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮桂花巷505號",
        imageUrl: "https://picsum.photos/400/250?random=30"
    },
    {
        name: "半邊井",
        lat: 24.056020267552043,
        lng: 120.43299075782491,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮瑤林街12號",
        imageUrl: "https://picsum.photos/400/250?random=31"
    },
    {
        name: "友鹿軒",
        lat: 24.056115961711864,
        lng: 120.43291349972209,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮瑤林街18號",
        imageUrl: "https://picsum.photos/400/250?random=32"
    },
    {
        name: "摸乳巷",
        lat: 24.051749716695998,
        lng: 120.43220569342378,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮菜園里菜園路38號與40號間的長巷",
        imageUrl: "https://picsum.photos/400/250?random=33"
    },
    {
        name: "君子巷",
        lat: 24.056693829594046,
        lng: 120.43227917384458,
        category: "古蹟",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮埔頭街31號號旁",
        imageUrl: "https://picsum.photos/400/250?random=34"
    },
    // 店家
    {
        name: "鄭玉珍餅舖",
        lat: 24.0565880365232,
        lng: 120.43231625874921,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮埔頭街23號",
        imageUrl: "https://picsum.photos/400/250?random=14"
    },
    {
        name: "素珠芋丸",
        lat: 24.058652488064542,
        lng: 120.42997053648524,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮民生路68號",
        imageUrl: "https://picsum.photos/400/250?random=15"
    },
    {
        name: "施家米糕",
        lat: 24.057885257228317,
        lng: 120.43682468107978,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮復興路365號",
        imageUrl: "https://picsum.photos/400/250?random=16"
    },
    {
        name: "萬能錫藝館",
        lat: 24.05196351796391,
        lng: 120.43420264787044,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮德興街23號",
        imageUrl: "https://picsum.photos/400/250?random=17"
    },
    {
        name: "玉珍齋",
        lat: 24.054619026921053,
        lng: 120.43457767551381,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "50546彰化縣鹿港鎮民族路168號",
        imageUrl: "https://picsum.photos/400/250?random=18"
    },
    {
        name: "港城豆花",
        lat: 24.055792450069955,
        lng: 120.43332015286907,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮民權路244號",
        imageUrl: "https://picsum.photos/400/250?random=19"
    },
    {
        name: "鹿港吳敦厚燈鋪",
        lat: 24.0572511731095,
        lng: 120.43336445439033,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "50563彰化縣鹿港鎮中山路310號",
        imageUrl: "https://picsum.photos/400/250?random=20"
    },
    {
        name: "聯興神桌佛像百年老店",
        lat: 24.05313103852174,
        lng: 120.43559068957502,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮中山路125號",
        imageUrl: "https://picsum.photos/400/250?random=21"
    },
    {
        name: "長源醫院—鹿港歷史影像館",
        lat: 24.05464563023779,
        lng: 120.43505905043648,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮中山路194號",
        imageUrl: "https://picsum.photos/400/250?random=22"
    },
    {
        name: "鹿港施美玉名香祖舖",
        lat: 24.055044144877993,
        lng: 120.43432618562835,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮中山路219號",
        imageUrl: "https://picsum.photos/400/250?random=23"
    },
    {
        name: "景賢黃木屐專賣",
        lat: 24.05851234147763,
        lng: 120.43136242874124,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮文開路4號",
        imageUrl: "https://picsum.photos/400/250?random=24"
    },
    {
        name: "黃百和香舖",
        lat: 24.05846797545706,
        lng: 120.43153238946479,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮中山路387號",
        imageUrl: "https://picsum.photos/400/250?random=25"
    },
    {
        name: "店小二肉包",
        lat: 24.05859375798035,
        lng: 120.43181210373487,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮中山路386號",
        imageUrl: "https://picsum.photos/400/250?random=26"
    },
    {
        name: "鹿港吹糖",
        lat: 24.05820763184786,
        lng: 120.43042461219166,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮文開路32巷25號",
        imageUrl: "https://picsum.photos/400/250?random=27"
    },
    {
        name: "阿婆麻糬舖",
        lat: 24.054431534834094,
        lng: 120.43407141502132,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮大明路9號",
        imageUrl: "https://picsum.photos/400/250?random=28"
    },
    {
        name: "凰珍囍餅",
        lat: 24.059215123643785,
        lng: 120.43034362050166,
        category: "店家",
        story: "地點的故事和介紹。",
        address: "505彰化縣鹿港鎮民生路42號",
        imageUrl: "https://picsum.photos/400/250?random=29"
    },
    /*
    {
        name: "新地點名稱",
        lat: 緯度,
        lng: 經度,
        category: "分類",
        story: "地點的故事和介紹。",
        address: "完整地址",
        imageUrl: "https://example.com/new_place.jpg" 
    },
    */
];