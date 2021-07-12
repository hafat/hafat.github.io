if(window.location.href.search("gnn.gamer.com.tw/index.php")!=-1){
	
	// 用於搜尋文字轉換
	function replaceSearchText(text){
		return text.replace(/[`：・．。·！～「」－~!@#$%^&*()_+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, '').toUpperCase()
	}
	
	// 中資遊戲清單
	var gameNameList = [

`騎馬與砍殺||Mount & Blade`, `英雄聯盟||League of Legends`, `仙境傳說：守護永恆的愛||Ragnarok Mobile: Eternal Love`, `傳說對決 ||Arena of Valor`, `崩壞 3rd||Honkai Impact 3rd`, `陰陽師 ||Onmyoji`, `少女前線||Girls' Frontline`, `碧藍航線||Azur Lane`, `執劍之刻||Edge of Awakening`, `異塵餘生：庇護所 Online||Fallout Shelter Online`, `夢幻模擬戰||Langrisser Mobile`, `戀與製作人||Mr Love Queen's Choice`, `明日方舟||Arknights`, `第五人格||Identity V`, `未來戰||Counter:Side`, `最後的奇洛迪亞||最後的克勞迪亞||ラストクラウディア||Last Cloudia`, `少女・咖啡・槍||Girl Cafe Gun`, `Afk arena`, `Re：從零開始的異世界生活 - INFINTY || 從零開始的異世界生活—無限||Re:Zero infinity`, `一拳超人：最強之男||One Punch Man: The Strongest`, `陰陽師：百聞牌||Onmyoji: The Card Game`, `弓箭傳說||Archero`, `我的英雄學院：最強英雄||My Hero Academia: The Strongest Hero`, `原神||Genshin Impact`, `三國志・戰略版||Three Kingdoms Tactics`, `劍與遠征||Afk Arena`, `重裝戰姬||Final Gear `, `RO 仙境傳說：新世代的誕生||Ragnarok X: Next Generation `, `食物語||The tale of food`, `英雄聯盟：激鬥峽谷||League of Legends: Wild Rift`, `符文大地傳說||Legends of Runeterra`, `戰雙帕彌什||Punishing: Gray Raven`, `最強蝸牛||The Marvelous Snail`, `異世界女神物語||Goddess of Genesis`, `潘朵拉的迴響||Echoes of Pandora`, `灌籃高手 SLAM DUNK||SLAM DUNK`, `命運的法則：無限交錯 || 造物法則二：先鋒英雄||Astral Chronicles|| Law of Creation 2`, `騎士的公主養成：Idle Princess`, `叫我大掌櫃`, `我的勇者||My Heroes: SEA`, `黑潮：深海覺醒||Dark Boom || Black Surgenight || Abyss Front`, `神魔三國志`, `野生少女`, `雲上城之歌||Song of the Cloud City`, `少女的王座：命運所在之處||The Throne of Girl`, `關於我轉生變成史萊姆這檔事：魔物之王||Tensura:King of Monsters`, `拂曉的拾荒團||Memories of Wilderness`, `蒼天英雄誌2||Heroes of the Sky 2`, `王國 Kingdom：戰爭餘燼`, `忍者必須死||Ninja Must Die`, `英雄棋士團||Hero Chess`, `地下城物語||Gumballs & Dungeons(G&D)`, `破局：三國終章`, `明日之後||LifeAfter`, `PUBG MOBILE||PUBG MOBILE`, `放置奇兵||Idle Heroes`, `萬國覺醒||Rise of Kingdoms`, `我的學妹不可能那麼萌 2||battle x girl 2`, `獨奏騎士 ||solo knight`, `獵殺女神||Hunt The Goddesses`, `未定事件簿||Tears of Themis`, `奇蹟MU：跨時代||MU: Across Time`, `道友掛機嗎`, `全面屍控||State of Survival`, `永恆冒險||GrandChase`, `動物餐廳||Animal Restaurant`, `新笑傲江湖 M||New Smiling Proud Wanderer M || New Swordsman M`, `武林英雄傳`, `無盡對決||Mobile Legends: Bang Bang`, `部落衝突：皇室戰爭||Clash Royale`, `勇者鬥惡龍 怪物仙境 SUPER LIGHT`, `Garena 決勝時刻 Mobile || 決勝時刻 Mobile||Call of Duty: Mobile`, `元氣騎士||Soul Knight`, `三國殺名將傳`, `BanG Dream！少女樂團派對||BanG Dream! Girls Band Party!`, `奇迹暖暖||Love Nikki-Dress UP Queen || Miracle Nikki`, `夢境連結！Re：Connected || 夢境連結||Illusion Connect`, `天堂 2：革命||Lineage 2: Revolution`, `全民打棒球 Pro`, `A3: STILL ALIVE 倖存者`, `劍靈：革命`, `七大罪：光與暗之交戰`, `KOF ALLSTAR || The King of Fighters ALLSTAR`, `棒球殿堂`, `七騎士`, `MARVEL 未來之戰||Marvel Future Fight`, `精靈之境||Elf Realm`, `新斗羅大陸|| 新鬥羅大陸`, `部落衝突||Clash of Clans`, `聖光之約||Shining Beyond`, `真三國大戰 2||Three Kingdoms Epic War`, `新仙俠：起源`, `機動戰隊||Iron Saga`, `鎖鏈戰記||ChainChronicle`, `死亡愛麗絲||SINoALICE`, `江南百景圖||Canal Towns|| A Hundred Views Of Jiangnan`, `新射鵰群俠傳之鐵血丹心 || 新射雕群俠傳之鐵血丹心||New Legend of the Condor Heroes`, `群俠來了`, `完美世界M||Perfect World Mobile`, `奇幻生活 Online`, `帝國紀元||Rise of Empires`, `魔力寶貝 M||Cross Gate M`, `不休的烏拉拉||Ulala: Idle Adventure`, `靈境殺戮`, `龍之谷 M||Dragon Nest M `, `天涯幻夢`, `殭屍來了：保命要緊||Last Shelter: Survival`, `月圓之夜||Night of the Full Moon`, `閃耀暖暖||Shining Nikki`, `地下城堡2: 暗潮 || 地下城堡2：黑暗覺醒||Dungeon Survivor II: Dark Tide`, `仙境傳說 ORIGIN||Ragnarok ORIGIN`, `Garena 極速領域||Speed Drifters || QQ Speed || GKART`, `逆轉回合||My Turn: Infinite Magic Duel`, `約會大作戰：精靈再臨||Date A Live: Spirit Pledge - Global`, `放置天使||Idle Angels`, `小小勇者`, `決戰！平安京||Onmyoji Arena`, `伊甸園的榮耀 || 紅色:伊甸大陸的驕傲 || 伊甸園的驕傲||Red: Pride of Eden`, `仙境傳說 RO：愛如初見||Ragnarok Mobile: Love At First Sight `, `千秋辭||Ode to Heroes`, `新三國志手機版||New Romance of the Three Kingdoms`, `率土之濱 || 不朽征服||Immortal Conquest`, `蓋伊傳說 || GYEE||GYEE`, `TEON||TEON`, `武俠Q傳`, `江湖大夢 ||一夢江湖||Chu Liu Xiang`, `奇幻書境物語||Dress up! Time Princess`, `仙命決||Immortal Taoists`, `夢幻之星：伊多拉傳說||Idola Phantasy Star Saga`, `少女平和||Shining Maiden`, `永遠的 7 日之都||Eternal City`, `Fate/Grand Order||Fate/Grand Order`, `王國紀元||Lords Mobile`, `王者榮耀||Arena of Valor`, `蒼藍誓約||Blue Oath`, `不朽之旅：重生||Immortal: Reborn`, `Ro仙境傳說：天天打波利||RO: Idle Poring`, `鍊金工房 Online ～布雷賽爾的鍊金術士～||Atelier Online～Alchemist of Bressisle～`, `天地劫||Kalpa of Universe`, `蒼之紀元|| ロストディケイド||Lost Decade`, `地下城的邂逅||Dungeon Encounter`, `碧藍檔案||Blue Archive`, `瘋狂的庫庫姆||Krazy Kakoom Island`, `雲端修行手記`, `明日邊境||Battle Night: Cyberpunk-Idle RPG`, `荒野行動||Knives Out-No rules, just fight!`, `魔法門之英雄無敵：戰爭紀元||Might & Magic: Era of Chaos`, `天黑請閉眼 - 官方狼人殺`, `蒼天英雄誌||Heroes of the Sky`, `渾沌學院||Chaos Academy`, `奶牛鎮的小時光||Harvest Town`, `槍與香蕉||Pirates Outlaws`, `龍族幻想||Dragon Raja`, `新希望||Seal: New World`, `鴻圖之下||Epic War: Thrones`, `漫威對決||MARVEL Duel`, `黑暗料理王||Monster Chef`, `獵魂覺醒||The Soul of Hunter || Errant: Hunter's Soul`, `新三國 漢室復興||Han Dynasty Revival of the Three Kingdoms`, `家庭教師||Katekyo Hitman Reborn Mobile`, `花舞宮廷||Flower Dance Palace?`, `小森生活||Komori Life`, `四海八荒之枕上琴`, `魔導少年：夥伴集結！||Fairy Tail: Friendship`, `聖鬥士星矢：覺醒||Saint Seiya: Awakening`, `貪婪洞窟 2：時光之門||The Greedy Cave 2: Time Gate`, `夢幻海島||Island King`, `戰國布武||Sengoku Fubu`, `少年猛將傳|| 三国志ブラスト少年ヒーローズ|| 少年三國志2||Dynasty Scrolls`, `叫我官老爺`, `天涯明月刀 手機版||Moonlight Blade Mobile`, `烏托邦：起源||Utopia: Origin - Play in Your Way`, `賽爾號：星戰再起`, `牧羊人之心||KarDia tou ABel`, `權力的遊戲：凜冬將至 M||GOT: Winter is Coming M`, `叫我帝尊大人`, `修真江湖：凡人修仙`, `死神 BLEACH - 正版授權手遊`, `崩壞學園 2||Collapse Gakuen `, `戰魂銘人||Otherworld Legends`, `宮廷計-成就你的宮廷大夢||宮廷計`, `時空中的繪旅人||For All Time`, `暗夜血姬 || 血族bloodline ||Bloodline`, `多多自走棋||Auto Chess`, `直到我中了一箭||Until I Got An Arrow`, `幻獸契約 ||Cryptract`, `Free Fire - 我要活下去||Garena Free Fire - The Cobra`, `浮生為卿歌||Floating Life For Song`, `凹凸世界||Aotu Game`, `萌萌闖仙界`, `卡拉希爾戰記||Calibria: Crystal Guardians`, `超進化物語：起源||Beasts Evolved`, `忍者契約||Ninja Contract`, `魂器學院||Horcrux college`, `巫師傳奇：戰鬥宗師||Wizard Legend: Fighting Master (Early Access)`, `奇蹟 MU：最強者||mu strongest ||MU Miracle`, `洛菲斯的呼喚||Lophis Roguelike:Card RPG game,Darkest Dungeon`, `新神鵰俠侶 || 神鵰俠侶2||Condor Heroes 2|| The Return of the Condor Heroes 2`, `少女執行官||Shining Beyond`, `瑪奇 - 夢想生活||Mabinogi: Fantasy Life`, `暴走英雄壇||Crazy Hero Legends`, `卡德里亞道具屋||Cadria Item Shop`, `要塞遠征 ||Rising Fortress`, `雀姬||Queji Mobile`, `ASH ARMS - 灰燼戰線 -|| アッシュアームズ-灰燼戦線-||ASH ARMS`, `刀塔傳奇||小冰冰傳奇||Dot Arena`, `小花仙 M||Flower Fairy`, `奇想江湖`, `花與劍||Flower and Sword`, `月見之瑩||Elf Tales`, `時空勇者||Valiant Tales`, `戰火與秩序||War and Order`, `帕斯卡契約||Pascal's Wager`, `熱血群英傳`, `湯姆貓與傑利鼠：玩命追逐||Tom and Jerry: Chase`, `極無雙||Dynasty Legends`, `一個官人七個妻`, `六龍御天||Loong Craft`, `霹靂江湖||Pili Heroes`, `拉結爾 ||Raziel`, `密特拉之星 Mitrasphere||Mitrasphere`, `放置少女||Hōchi Shōjo: Hyakka Ryōran no Moehime-tachi`, `亞克傳承 R`, `少女召喚城堡`, `阿瑞斯病毒||Ares Virus`, `拳皇 98 終極之戰 OL||KOF'98 UM OL`, `聖鬥士星矢：正義傳說||Saint Seiya: Legend of Justice`, `星戰前夜：無燼星河||EVE Echoes`, `魔法紀錄 魔法少女小圓外傳||Magia Record English`, `幻書啟世錄||Genesis Masterwork Apocalypse`, `射鵰英雄傳 3D||Legend of the Condor Heroes 3D`, `方格騎士團||巨像騎士團||Checkered Knights Mobile`, `射鵰英雄傳 2017||Legend of the Condor Heroes`, `漫威超級戰爭||Marvel Super War`, `小小冒險娘||Little Adventure Girl`, `日理萬姬`, `新誅仙||Fantasy New Jade Dynasty`, `超機動聯盟 ||Super Mecha Champions`, `卡通農場||Hay Day `, `遇見逆水寒||Yujian Love Mobile || Justice Mobile`, `無盡騎士團：勇者啟示錄||Tales Of Knight || Hero Of Lyant`, `逍遙群俠傳`, `城堡爭霸||Castle Clash`, `諸神學院smash||Elora’s Raid`, `命運之輪`, `熹妃傳`, `時空旅人||Chronicle Of Time`, `悠長假期||Tour of Neverland`, `遺落大陸||Forsaken World`, `倩女幽魂 2 || 新倩女幽魂||A Chinese Ghost Story Online`, `全民槍戰||Crisis Action`, `食之契約||Food Fantasy`, `我的學妹不可能那麼萌||Girls X Battle`, `十二神兵器||Twelve Weapon of God`, `軒轅劍 - 劍之源`, `君王萬歲 ||Lords Hooray: Legends of Legion`, `倩女幽魂||GHOST STORY `, `文豪野犬 迷犬怪奇譚||Bungo Stray Dogs: Tales of the Lost`, `奈奧格之影||舊日傳說||Shadow of Nyog`, `Garena 魂斗羅：歸來||Contra Returns`, `越南大戰 DEFENSE||METAL SLUG DEFENSE`, `偶像夢幻祭 2||Ensemble Stars 2`, `熱血江湖手遊`, `軒轅劍龍舞雲山`, `幕府戰姬`, `世界征服者 4||World Conqueror 4`, `獵水部落||Water Hunt Tribe`, `紫禁繁花`, `異界之鑰||GEM-X || Another World || Gaia Odyssey`, `漢家江湖`, `荒野亂鬥||Brawl Stars`, `龍之谷：新世界||World of Dragon Nest `, `梅露可物語 癒術士與鈴之旋律||Merc Storia`, `最終休止符||Last Period`, `忍者大師 閃亂神樂 NEW LINK||Shinobi Master Senran Kagura: New Link`, `劍與魔法王國 古代女神||Logres of Swords and Sorcery: Goddess of Ancient`, `偶像夢幻祭||Ensemble Stars`, `末日希望||Fury Survivor: Pixel Z`, `熹妃 Q 傳`, `塔防三國志`, `亂世妖姬`, `黑道風雲`, `霸王之野望`, `希望 M||SEAL Mobile`, `深海水族館||Tap Tap Fish AbyssRium - Healing Aquarium`, `列王的紛爭||Clash of Kings `, `妖神記||Demon God`, `塔防遊戲英雄志`, `光明勇士||Legend of Honour`, `小小軍團||Mini Warriors`, `仙劍奇俠傳 - 宿命`, `萬靈啟源||Animistic`, `魔物契約：進化||Monster Contract`, `朕的江山||Three Kingdoms: Overlord`, `放置三國英雄傳之趙雲傳奇`, `星癒者||Star Healer`, `傳送門騎士||Portal Knights`, `深淵地平線||Abyss Horizon (English)`, `戀戀炫舞團`, `惡搞三國`, `胡桃日記||HUTAORIJI: Emoji Girl Menhera`, `海島勇士`, `劍俠情緣手機版`, `seal 希望：新世界||SEAL Hope: New World`, `斗羅大陸||Soul Land`, `我要當大俠`, `一騎當千 Extra Burst`, `東方 LostWord`, `冒險三國誌`, `天姬物語||Final Princess`, `山海有妖獸`, `諸神皇冠：百年騎士團||Knights of Ages`, `九州幻想 M`, `企鵝島||Penguin Isle`, `飄流幻境 M`, `蒼之騎士團 R||Hortensia Saga R`, `戰國名將傳`, `A3!`, `童話森林 ～藥師梅露與森林的禮物～||Märchen Forest: Mylne and the Forest Gift`, `塗鴉英雄`, `TERA CLASSIC`, `光之戰記  ||  災禍的真理、災禍真實`, `NBA 籃球大師`, `御史 SAMA||Night Agent: I'm the Savior`, `口袋英雄 Pocket Heroes`, `迪士尼 巫師競技場||Disney Sorcerer's Arena`, `新千姬大亂鬥`, `鮮艷軍團 || 口袋奇兵||Top War: Battle Game`, `新大掌門`, `Warframe`, `流亡黯道 PoE||Path of Exile `, `瑪奇 Mobile||Mabinogi Mobile`, `阿瓦隆之王：龍之戰役||King of Avalon`, `魔界戰記 DISGAEA RPG||DISGAEA RPG`, `Helios Rising Heroes||Helios Rising Heroes`, `魔界大戰`, `閻王不高興||大王不高興||The Furious Yama`, `破敵・三國志`, `阿卡迪亞||Arkadia: Chronicle of Hemitheos`, `鋼彈爭鋒對決`, `創世破曉||Genesis`, `元素契約||Dungeon Fantasy`, `半世界之旅||A tour of the half world||Journey Within Half of The World`, `獵人 HUNTER x HUNTER`, `Idle Chaos - 超級英雄 ||冒险の国度||Idle Chaos-Hero Clash`, `瘋狂動物園||Rodeo Stampede: Sky Zoo Safari `, `英雄傳說：星之軌跡||The Legend of Heroes: Trails in the Star`, `夢境`, `妖怪餐廳|| 精靈食肆||Yokai Kitchen - Restaurant Management RPG`, `字走三國：王者霸業||Auto Chess?`, `仙劍奇俠傳 5 手遊版`, `三國演義：最強武將傳||Three Kingdoms: Destiny Heroes`, `別讓我冒險`, `非人學園||Extraordinary Ones`, `喵斯快跑||Muse Dash`, `魔塔守護者`, `屍妹 Z girls ||絕園少女 || 學姐軍團||Zgirls - Girls vs Zombie Battle Game`, `君臨天下`, `功夫全明星 ||Kung Fu All-Star`, `我叫 MT4：榮耀||My name is MT4`, `地下城堡||Dungeon Survivor`, `星工場||Star Works Online`, `放置黑道大亨||Idle Mafia`, `小小帝國||Little Empire`, `黑騎士與白魔王||Kurokishi to Shiro no Maou`, `魔王的日常：妃你莫屬 ||異世界大作戰 ||異界二次元 || 魔妃異聞錄||Demon Life - My Harem`, `上古戰場||The Elder Fight`, `轟啊坦克 M ||Fortress GO`, `合金彈頭 - 集結||Metal Slug: Assembly of M`, `釣魚大亨 ||Fishing Strike`, `王牌指揮官`, `石器時代 M`, `三國 BLADE`, `英雄神鬪曲||Hero Cantare`, `海島奇兵 ||Boom Beach`, `三國大亨-富甲天下`, `迷你世界||mini world`, `逆襲的英靈||卡王爭霸||Lords Online`, `天機江湖`, `陰陽師 妖怪屋||Onmyoji: Yokai Koya`, `愛養成`, `夢三國||Dream of the Three Kingdoms Mobile`, `蒼翼默示錄：幻影降臨 ||BlazBlue Revolution Reburning`, `幻靈之契`, `三國戰紀手遊版||Knights of Valour Mobile`, `朝歌封神誌`, `策三國`, `海島紀元||Island Era`, `我的起源||ReEvolve || Re:Evolve`, `放置魔王`, `寶可夢大集結||Pokemon Unite ||Pokémon UNITE`, `克拉戀習生`, `戰艦少女 R||Warship Girls R`, `進擊吧！三國`, `Fairy Tail（魔導少年）：無盡冒險 || 妖精的尾巴：無盡冒險||Fairy Tail: Endless Adventure`, `放置大師||AFK Master`, `捕魚達人千炮版||Fish Hunter Champion`, `掌門太忙`, `塞爾之光||Light of Thel`, `金將傳說M||Legend of Golden Commander M`, `魅子 Online`, `強的要命的英雄`, `封印者 M`, `太陽之都`, `CODE：SEED 星火之歌||CODE:SEED`, `御靈錄 Otogi || 陰陽おとぎソール ||Otogi: Spirit Agents`, `遺忘之境：World of Lethe || ミラージュ・メモリアル ||World of Lethe || Mirage Memorial`, `少年三國志||Juvenile Three Kingdoms`, `星辰幻想`, `大俠客||Great Sword Man`, `流星群俠傳`, `帝國：文明的崛起||Empire: Rising Civilizations`, `鐵血群俠傳`, `鬥陣麻將 || 鬥陣歡樂城`, `亞瑟英雄傳||heroes of camelot`, `雷霆戰機||Thunder Fighter`, `天使軍團 - 全 3D 放置掛機 RPG||Angel Legion`, `魔力寶貝手機版||CROSS GATE `, `Snake Off - 貪食蛇大作戰||Snake Off`, `石器時代：起源 ||Stone Age Begins`, `末日方舟 ||Delivery from the pain`, `大掌門普拉斯`, `王牌製片人`, `夢之彼端 ||Dimension of Dreams`, `奇蹟 MU：覺醒||MU: Awakening`, `懸崖底下大寶劍`, `大妖錄`, `仙劍奇俠傳 九野||Chinese Paladin : Sword And Fairy JY`, `魔導少年－最強公會`, `天涯明月刀 ||천애명월도 ||Moonlight Blade`, `破世者：封‪神||Gadlingers: Creation of the Gods`, `鬥獸戰棋||Tactical Monsters Rumble Arena`, `四驅傳說||Mini Legend - Mini 4WD Simulation Racing Game`, `地下城之謎`, `AOD龍之怒吼||Awakening of Dragon`, `盛唐妖夢 || 雲夢四時歌||Yunmeng Four-Time Song`, `榮耀遠征：Journey To Glory||Journey To Glory`, `海軍最前線||Naval Front-Line`, `Sky光遇||Sky: Children of the Light`, `龍魂創世`, `極簡地下城 RPG||Minimal Dungeon RPG`, `競逐之國：毀滅時代||Rival Kingdoms: The Endless Night`, `大酋長||Chief Almighty: First Thunder BC`, `街頭籃球`, `死神：羈絆之刃`, `創世奇兵 ||Warriors of Genesis`, `高能手辦團 || 模型少女 AWAKE||Figure Story `, `模擬帝國||Sim Empire`, `MARVEL：超級爭霸戰||MARVEL Contest of Champions`, `春秋 M||Spring and Autumn M?`, `靈之轉生|| 靈之逆轉||Soul Reverse Zero`, `螺旋勇士||Spiral Warrior`, `第二銀河||Second Galaxy`, `封神召喚師||Summoner of the Gods`, `雄霸天地`, `妖精的尾巴：啟程||Fairy Tail: Departure`, `伊蘇 6 Online～納比斯汀的方舟～||Ys VI Online ~ The Ark of Napishtim ~ ||Ys VI Online The Ark of Napishtim`, `雲裳羽衣||Fashion Cloudy`, `街球對決 `, `克隆戰爭||Clone Evolution`, `艾爾戰記||Elsw­o­r­d­:­E­v­o­l­u­tion`, `冒險與挖礦`, `魔力寶貝：放置版`, `夢境彼岸 ||Edge of the Dream`, `飄流幻境 M`, `幻想神姬||Fantasy Shinki`, `三國群英傳 - 霸王之業 ||Rise of Dynasty: Three Kingdoms`, `閻王不高興 ||大王不高興||The Furious Yama`, `EVA - 新世紀福音戰士正版授權`, `卡片怪獸||Card Monsters: 3 Minute Duels`, `Epic summoners`, `我在仙界玩泥巴`, `烈火如歌||Fire Like The Song`, `比得兔：隱藏的世界`, `Lapis Re:Lights ～這個世界的偶像會用魔法～ ||Lapis Re:Lights`, `召喚 x 戰姬||Summon X War Girl`, `光明之戰 || 光明大陸||Crusaders of Light`, `覓仙緣||Eternal Legends M`, `閃亂忍法傳|| 閃亂忍法‪伝‬||SenRan Sakura`, `黑色倖存||Black Survival`, `魔力寶貝：永恆初心`, `時之歌：無盡之詩||Song of Time`, `戰姬天下`, `御靈繪卷||Yokai Tamer || Scroll of Onmyoji `, `瘟疫公司 ||Plague Inc. `, `上古戰魂-重裝武士||Armed Heroes`, `梅比斯之門||Gate of Mobius`, `喪屍之戰||Last Empire- War Z`, `合戰三國志`, `盾之勇者成名錄 RISE || 盾之勇者成名錄：浪潮||The Rising of Shield Hero RISE || Shield Hero RISE`, `第六天魔王`, `黎明覺醒||Dawn Awakening`, `解神者||X2 Eclipse`, `黎明覺醒：變態歸來||Dawn Awakening Abnormal Return`, `三國英雄傳說||Three Kingdoms: Hero Legendaris`, `勇者掛很大||EZPZ Saga`, `夢境彼岸：卡牌戰記||Dreaming Dimension: Deck Heroes`, `狩遊世界 ||Hunter's World`, `征服紀元||EraOfConquest?`, `方舟指令 || アークオーダー ||Ark Order`, `格鬥天王 M || ザ．キング．オブ．ファイターズM ||The King of Fighters M`, `零域戰線 || 代號：零||CODE：ZERO`, `食夢計劃 || 戦姫ストライク ||Senki Strike`, `惡魔獵人：巔峰之戰 || 鬼泣-巔峰之戰||Devil May Cry: Peak of Combat`, `弓箭手死了！唯有勇者的我出戰！ || ダッシュヒーロー大冒険 ||Dashero: Sword & Magic`, `夢境元素使 || Idle Goddess-神之塔||Idle Goddess`, `終焉誓約||Vow of Heroes`, `戰舞幻想曲`, `極道市長`, `戰地王座：氏族爭霸||Mobile Royale`, `仙劍奇俠傳 幻璃鏡 || ファントムミラー||The Legend of Sword and Fairy: Mirror of Illusion`, `天堂 2 M `, `雲之歌||Legend of Cloud`, `萬靈訣`, `極限街籃：零秒出手 || 極限街籃||Basketrio`, `無盡方舟 || 百萬騎士團||Million Knights : Miracle Guardian`, `沉睡森林`, `新世界的神||Saga of Divines`, `勇氣之劍×火焰之魂 || ブレイブソード×ブレイズソウル ||BraveSword × BlazeSoul`, `Z girls II-Last One`, `巨砲連隊`, `Phigros||Phigros`, `OP：終極之戰 ||  海賊王：終極之戰||One Piece: Ultimate Battle`, `姬武將：戰國亂舞||戦国少女～戦場に舞う姫たち～ ||Sengoku Shoujo ~Senjou ni Mau Hime-tachi`, `三國志．少年無雙||Three Kingdoms: Youth Warriors`, `魔力寶貝 - 正版授權`, `王者遠征`, `球球大作戰|| Battle of Balls`, `異能學園：Soulworker|| 靈魂行者學院||Soul Worker Academia`, `最強修仙||Legendary Immortals`, `末日喧囂||Doomsday Hustle`, `侍魂：朧月傳說||Samurai Shodown M`, `Re：從零開始的異世界生活 Lost in Memories||Re 0：Lost in Memories`, `新夢境連結 R||Illusion Connect`, `少女前線 2：追放 || 少女前線：雲圖計劃||GIRLS' FRONTLINE EXILIUM`, `英雄傳說 閃之軌跡 III||The Legend of Heroes: Trails of Cold Steel III`, `Chameleon Run`, `戰意Conqueror's Blade||Conqueror's Blade || War Rage`, `千銃士：Rhodoknight`, `機動戰姬：聚變||Artery Gear: Fusion`, `末日餘暉 ||Farlight 84`, `輪迴戰姬||War of Reincarnation - Infinity War?`, `降神計劃||女神降臨||女神降ろし||Goddess Descending `, `天諭||Revelation`, `光之同盟`, `二之國：交錯世界 ||Ni no Kuni Cross Worlds`, `波西亞時光||My Time at Portia`, `龍與少女交響曲||Symphony of Dragon and Girls`, `戰鬥吧龍魂`, `刀劍神域 黑衣劍士：王牌||Sword Art Online Black Swordsman: Ace`, `約會大作戰：凜緒輪迴||DATE A LIVE Rio Reincarnation mobile?`, `斗羅大陸 3D：魂師對決||Soul Land: Soul Master Duel `, `超時空法則`, `陰屍路：倖存者|| 行尸走肉：幸存​者||The Walking Dead: Survivors`, `靈魂方舟 ||soul ark`, `楓之谷R || 楓之谷R||MapleStory R?`, `煙雨江湖||World of Misty Rain`, `白夜極光 || びゃくやきょっこう||Alchemy Stars`, `核芯：利希特||コア：リヒト||core:licht`, `京城十里錦繡`, `西遊 -「西行紀」正版授權||Westward M`, `球球英雄||Fusion Crush`, `龍之谷 2：進化||DRAGON NEST 2`, `無盡城戰||Infinity Kingdom`, `神姬裁決`, `BTS WORLD`, `魔龍與聖劍||魔竜と聖剣||Dragon And Sword`, `血咒之城：暗夜儀式||Bloodstained: Ritual of the Night mobile`, `未生逆行|| 早安少女||Unborn Retrograde`, `超神學院：進擊||Black Troop: Legend`, `神仙大亂鬥`, `街頭籃球 2：正宗續作||City Dunk 2`, `跑跑卡丁車官方競速版 || 跑跑卡丁車 RUSH+ ||KartRider Rush+`, `NBA 范特西`, `狂暴三國`, `戰鎚覺醒 || 戰錘覺醒||Magic Idle RPG Game || Magic Warhammer || Magic Warhammer:Idle Epic hero War v`, `碰碰蛇 2`, `神魔召喚 GS||グランドサマナーズ||Grand Summoners`, `烈火戰記`, `夢三國復刻版`, `光與夜之戀||Love in Light and Night `, `古鏡記||Tales of the Mirror`, `失落之魂||Lost Soul Aside`, `奇幻小鎮`,
`2021 六都電競爭霸戰`, 
`2021 亞洲電子競技公開賽`, 
`天黑請閉眼 - 官方狼人殺 || 天黑請閉眼`,
`凍京 NECRO 自殺任務`,
`Free Fire - 我要活下去 || Free Fire||Garena Free Fire - The Cobra`,
`戰神風暴 ||War Storm`,
`帝國曙光||Rise of Empires: Ice and Fire`,
`暗黑破壞神 永生不朽||Diablo：Immortal`,
`因格瑪的預言|| 終焉默示錄 || 因格瑪の預言||Puzzle & Tales || Apocalypse Of Demise`,
`歡樂大東家`,
`封神異世錄`,
`董卓來了`,
`叫我君主：紅顏江山我都要`,
	]
	// 中資遊戲疑似清單	
	var maybeList =[
`大航海時代 6`, `RO 仙境傳說：我的戰術`, `卡拉邦`, `突襲：暗影傳說`, `逆轉奧賽羅尼亞`, `LoveLive! 學園偶像祭`, `Tap Titans`, `石器時代：世界`, `FINAL BLADE：英雄不滅`, `TsumTsum Stadium`, `Iron Marines`, `三小俠||Grand Chase`, `大富翁卡牌戰爭`, `跑跑卡丁車官方競速版`, `獎牌英雄`, `Dawn of Titans`, `FINAL FANTASY BRAVE EXVIUS`, `FFBE 幻影戰爭 WAR OF THE VISIONS`, `GOH 軍團的榮耀`, `風之國度`, `咖位我最大`, `SimCity BuildIt`, `月兔冒險`, `精靈樂章 - 這樣的夥伴沒問題嗎`, `NBA 2K 行動版`, `動物朋友`, `戰艦世界 閃擊戰`, `女王 2`, `消滅都市||AFTERLOST`, `口袋楓之谷 ||Pocket Maple Story`, `Dynamix`, `小鎮奇緣`, `無盡之劍 3 インフィニティブレード 3 ||Infinity Blade 3`, `仙境傳說 普隆德拉迷宮`, `傳奇商店||Shop Titans`, `Kingdom Rush Origins `, `暗影格鬥 3   `, `聖鬥士星矢 小宇宙幻想傳 `, `王國 5：繼承者 `, `絕望地下城 ||Dungeon of Despair `, `忍豆：新世代 `, `為了誰的鍊金術師 `, `幽遊白書：BANG！靈丸 `, `PUBG：NEW STATE`, `陽春白雪`, `聖鬪士星矢：銀河之魂  `, `滾滾飛球||Eagle Fantasy Golf`, `三國萌戰記`, `穿越火線：戰爭地帶||CrossFire: Warzone`, `穀穀雞莊園 ||Gogogaie Farm`, `仙境傳說：波利合併  ||Ragnarok: Poring Merge`, `新火鳳燎原 亂世英雄`, `魔法軍團 Z WarLocksZ `, `魔法軍團零`, `甜點王子 2：心動奇蹟`, `古惑仔 M`, `爐石戰記`, `暴雪英霸`, `魔獸世界：暗影之境`, `城堡工藝世界大戰||Castle Craft：World War`, `絕地求生：未來之役||PUBG：NEW STATE`,

	];
	
	// 把 中資遊戲清單 和 中資遊戲疑似清單 轉換成 搜尋用清單
	var new_list =[];
	var new_maybeList =[];
	for(var i =0; i<gameNameList.length; i++){
		new_list = new_list.concat(replaceSearchText(gameNameList[i]).split('||'));
	}
	for(var i =0; i<maybeList.length; i++){
		new_maybeList = new_maybeList.concat(replaceSearchText(maybeList[i]).split('||'));
	}

	// get GNN新聞的Element
	var obj = document.getElementsByClassName('BH-lbox GN-lbox2')
	var body = document.getElementsByTagName('body')[0]
	// 把GNN新聞標題轉換為HTML存到str
	var str = "";
	for(var i =1 ; obj[0].children[i].children[0] ; i++){
		if(obj[0].children[i].children[1].children[0].textContent!='其他'){
	//		str += `<div onclick=changeColor(this)><a href="`
			str += `<div ><a href="`
			str += obj[0].children[i].children[1].children[1].href;
			str += `">`
			str += obj[0].children[i].children[1].children[1].textContent.replaceAll('<','&lt').replaceAll('>','&gt');
			str += '</a></div>'
		}
	}
	
	// 頁面右方加入文字方塊
	var str2 = `<div id="white_box" contenteditable="true" style="overflow: scroll; height: 80%;width: 30%; z-index:99999; position: fixed; top: 10%;right:0; background-color:white"></div>`
	str2 += `<button id="btn" style="z-index:99999; position: fixed; top: 90%;right:0; ">copyText</button>`
	str2 += `<button id="btn_js" style="z-index:99999; position: fixed; top: 90%;right:100px; ">toJsText</button>`
	str2 += `<div id="output_text" contenteditable="true" style=" height: 50px;width: 30%; z-index:99999; position: fixed; top: 95%;right:0; background-color:white"></div>`
	body.insertAdjacentHTML('beforeend',str2);
	
	// 把 str 加到文字方塊內
	var white_box = document.getElementById('white_box')
	white_box.innerHTML = str;
	
	
	let row = white_box.getElementsByTagName('div')
	let btn = document.getElementById('btn')
	
	// 計算GNN新聞數目
	btn.innerHTML = btn.innerHTML +' ' +  row.length
	
	// 把 中資遊戲 和 疑似中資遊戲 以不同顏色標示
	for(var i = 0; i<row.length ; i++){
		row[i].addEventListener('click', function(){
		if(this.children[0].style.color == 'red')
			this.children[0].style.color = 'hotpink';
		else if(this.children[0].style.color == 'hotpink')
			this.children[0].style.color = 'black';
		else 
			this.children[0].style.color = 'red';
		});
		let rowTextEdited = replaceSearchText(row[i].children[0].innerHTML)
		for(var j =0; j<new_maybeList.length; j++){
			if(rowTextEdited.search(new_maybeList[j])!=-1){
				row[i].children[0].style.color = 'hotpink';
				j = new_maybeList.length;
			}
		}
		for(var j =0; j<new_list.length; j++){
			if(rowTextEdited.search(new_list[j])!=-1){
				row[i].children[0].style.color = 'red';
				j = new_list.length;
			}
		}
	}
	
	// 用於複製文字方塊內的文字
	function copyText() {
	  window.getSelection().selectAllChildren(white_box);
	  document.execCommand("copy");
	}
	
	//  用於把文字方塊轉換為 JS Object
	function toJsText()
	{
		var date = `${(new Date()).getFullYear()} ${(new Date()).getMonth()+1} ${(new Date()).getDate()}`;
		output_text.innerHTML = ''
		output_text.append(`{time:'${date}', content: \`${white_box.innerHTML}\`},`)
		window.getSelection().selectAllChildren(output_text);
	  	document.execCommand("copy");
	}
	
	document.getElementById('btn').onclick= copyText;
	document.getElementById('btn_js').onclick= toJsText;
}
