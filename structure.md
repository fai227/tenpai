# NodeJSで動く麻雀アプリ「tenpai」

## 概要
- NodeJSのシングルスレッドで、麻雀を作る！
- ただ単に作って遊べる点で、人に遊んでもらいやすい。
- ついでに全部英語化したい。

---
## ゲーム内容


---
## 開発概要

### 通信される内容

#### クライアントからサーバー

##### 参加前
- SearchRoom {s_userName, s_roomName}

##### 開始前後
- StartGame

##### ゲーム中
- Pong, Gang, Chi, Rong {b_done, o_option}
- Discard {b_reach}


#### サーバーからクライアント

##### 参加前
- Joined {s_roomName, o_players[]}
- Player Joined {s_playerName}

##### 開始前後
- Game Started

##### ゲーム中
- Game Data (for reconnection)
- Pong Gang Chi Rong Tsumo {o_option}
- Tsumo
- Discard {pi}

---
## 単語集

### 役

#### 1翻
- 立直	Reach
- 役牌	Value Tiles
- 断ヤオ九	All Simples
- 平和	All Runs
- 門前自摸	Concealed Self-Draw
- 一発	First Turn Win
- 一盃口	Double-Run
- 河底撈魚	Final Tile Win
- 海底摸月	Final Tile Win
- 嶺上開花	King’s Tile Draw
- 二重立直	Double Reach
- 搶槓	Add-A-Quad

#### 2翻
- 対々和	All Triples
- 三色同順	Three Color Runs
- 七対子	7 Pairs
- 一気通貫	Full straight
- 混全帯	Mixed outside hand
- 三暗刻	Three Concealed Triples
- 小三元	Little Dragons
- 混老頭	All terminals and honors
- 三色同刻	Three Color Triples
- 三槓子	Three Quads

#### 3翻
- 混一色	Half Flush
- 清全帯	Pure outside hand
- ニ盃口	2 Double Runs

#### 6翻
- 清一色	Full Flush

#### 役満
- 四暗刻	Four concealed Triples
- 国士無双	Thirteen Orphans
- 大三元	Big Dragons
- 四喜和	Four Winds
- 字一色	All Honors
- 清老頭	All terminals
- 地和	Blessing of Earth
- 緑一色	All Green
- 九蓮宝燈	Nine Gates
- 四槓子	Four Quads
- 天和	Blessing of Heaven

### その他ルール
https://moments.star.com.au/how-to-play-mahjong/




