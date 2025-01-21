const urlParams = new URLSearchParams(window.location.search);
        const country = urlParams.get('country');
        const heritageBoxes = document.getElementById('heritageBoxes');
        const searchBox = document.getElementById('searchBox');

        const heritageData = {
            "中国": [
                { name: "黄山", image: "https://img1.baidu.com/it/u=1010045657,1080405210&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1372" },
                { name: "黄龍風景名勝区",  image: "https://copyright.bdstatic.com/vcg/creative/ed15662658c83beefe1f6496d6b3ea8d.jpg@h_1280" },
                { name: "九寨溝風景名勝区",image: "https://q5.itc.cn/q_70/images03/20240707/0d8058d4231f4aa1aad3dc0e3a7b44aa.jpeg" },
                { name: "武陵源風景名勝区",image: "https://se-feed-bucket.bj.bcebos.com/map_aigc_scene_group/0dbe72f912584196fff45ee8d8ab27bd_0.jpg" },
                { name: "武当山古建築群",image: "https://p1.itc.cn/images01/20231128/01a5c4be6f554663b57f9a31fd566b0c.jpeg" },
                { name: "ラサのポタラ宮の歴史的遺跡群",image: "https://img0.baidu.com/it/u=2702748320,1877565576&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067" },
                { name: "承徳避暑山荘と外八廟",image: "https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc31ccccc83850df8db1ca1370f9" },
                { name: "曲阜の孔廟、孔林、孔府",image: "https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f24feedc470c695d143ad4b0349?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536" },
                { name: "廬山",image: "https://pics4.baidu.com/feed/b7fd5266d0160924c3cae1708ba494f0e7cd341f.jpeg?token=ecb95cd69dbda1084cdf4a05ba27c6fd" },
                { name: "峨眉山・楽山大仏",image: "https://pic1.zhimg.com/100/v2-2d47b1945210af9e5cc096b317f73d98_r.jpg" },
                { name: "平遥古城",image: "http://5b0988e595225.cdn.sohucs.com/images/20180226/018248a65dc84bd98920305dfbb2befc.jpeg" },
                { name: "蘇州古典庭園",image: "https://bkimg.cdn.bcebos.com/pic/caef76094b36acafa0247c1475d98d1000e99c16" },
                { name: "麗江古城",image: "https://img0.baidu.com/it/u=437042662,577403903&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1203" },
                { name: "北京の皇家庭園 - 頤和園",image: "https://img1.baidu.com/it/u=1877228635,2763459425&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1048" },
                { name: "北京の皇帝の祭壇 - 天壇",image: "https://img2.baidu.com/it/u=2621373761,1081634782&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=800" },
                { name: "大足石刻",image: "https://img0.baidu.com/it/u=3772457267,2256138578&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200" },
                { name: "武夷山",image: "https://img2.baidu.com/it/u=4166548496,3018264121&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1703" },
                { name: "皖南古村落－西递と宏村",image: "https://img2.baidu.com/it/u=4016950173,167434321&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1066" },
                { name: "明清皇家陵寝", image: "https://bkimg.cdn.bcebos.com/pic/9a504fc2d5628535e5dd25c03cbf61c6a7efcf1bc58b" },
                { name: "龍門石窟", image: "https://img0.baidu.com/it/u=641656203,2052744762&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1201" },
                { name: "青城山-都江堰", image: "https://img1.baidu.com/it/u=4065048103,924720876&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1333" },
                { name: "雲崗石窟", image: "https://img0.baidu.com/it/u=942618720,3946870706&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1199" },
                { name: "云南三江并流保護区", image: "https://copyright.bdstatic.com/vcg/creative/1256639e6fcc0e96e4208cdab71be3c6.jpg@wm_1,k_cGljX2JqaHdhdGVyLmpwZw==" },
                { name: "高句麗王城、王陵および貴族の墓", image: "https://img2.baidu.com/it/u=1098685361,1286510958&fm=253&fmt=auto&app=138&f=JPEG?w=1423&h=800" },
                { name: "マカオ歴史市街", image: "https://t11.baidu.com/it/u=2575997050,203322820&fm=30&app=106&f=JPEG?w=640&h=640&s=D2A20FE142A6C7FF461D391003008090" },
                { name: "四川省のジャイアントパンダ保護区", image: "https://p2.itc.cn/q_70/images03/20220303/c6d1d45ec15d41fda29e7f725d4f5957.jpeg" },
                { name: "殷墟", image: "https://bkimg.cdn.bcebos.com/pic/6609c93d70cf3bc7f455ad29d100baa1cc112a99" },
                { name: "開平楼閣と村落", image: "https://pic4.zhimg.com/100/v2-6ca0733fdf8f03e1a044e76427d8e533_r.jpg" },
                { name: "中国南方カルスト", image: "https://p8.itc.cn/images01/20210609/bedb4ebe376f46bd84bb5b3865ae0e5c.jpeg" },
                { name: "福建土楼", image: "https://bj.bcebos.com/bjh-pixel/1702688196194997644_4_ainote_new.jpg" },
                { name: "三清山", image: "https://img1.baidu.com/it/u=3691279243,2268635166&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422" },
                { name: "五台山", image: "https://img2.baidu.com/it/u=1090161438,1030701247&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422" },
                { name: "中国丹霞", image: "https://img0.baidu.com/it/u=319258555,3724195697&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667" },
                { name: "「天地の中央」にある登封の史跡群", image: "https://img2.baidu.com/it/u=3807603167,3772488356&fm=253&fmt=auto&app=120&f=JPEG?w=1327&h=800" },
                { name: "西湖 (杭州市)", image: "https://bj.bcebos.com/bjh-pixel/169796588594324133_2_ainote_new.jpg" },
                { name: "澄江の化石産地", image: "https://pic.rmb.bdstatic.com/bjh/3eab8f052e0/240904/777de2c3956cbf6989f9b271f8226223.jpeg" },
                { name: "上都", image: "https://img.meituan.net/leadinimg/113416e4fac4477e12c1d35693c36d5d875607.jpg%40watermark%3D0" },
                { name: "紅河ハニ棚田", image: "https://img2.baidu.com/it/u=1712157421,509798402&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200" },
                { name: "新疆天山", image: "https://img1.baidu.com/it/u=460274978,2632571437&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1333" },
                { name: "大運河", image: "https://x0.ifengimg.com/res/2024/7EF2B4E50E4C4CB904183774123E3021A6A983B4_size634_w1024_h585.jpg" },
                { name: "シルクロード ", image: "https://inews.gtimg.com/om_bt/O5OyKqwcOax7JvWn7UIqTLPMim7NOOsRei_6IsrS72pyQAA/1000" },
                { name: "土司遺跡群", image: "https://pic1.zhimg.com/v2-9f6b97a8895cc57967dfd4974b85292c_r.jpg" },
                { name: "左江花山の岩絵の文化的景観", image: "https://img1.qunarzz.com/travel/d6/1703/6d/deb81e60645ef5b5.jpg?ver=1" },
                { name: "神農架林区", image: "https://th.bing.com/th/id/R.40d8ff53da5f3490d24a2096c09acf2c?rik=Qezode8ryGDo8A&riu=http%3a%2f%2fp0.ifengimg.com%2fa%2f2016_30%2fb50e69b39d17a9d_size646_w2500_h1666.jpg&ehk=FWynx0J6RzTgR6cYiiS%2f7kGV7pNUNdqKFzAlKS3IMPk%3d&risl=&pid=ImgRaw&r=0" },
                { name: "鼓浪嶼", image: "https://x0.ifengimg.com/res/2021/2ECE827D814C19AF8BAF201CEAC55F0D5D94A93F_size388_w1080_h1621.jpeg" },
                { name: "フフシル", image: "https://img.pconline.com.cn/images/upload/upc/tx/photoblog/2102/07/c0/252832196_1612661137126.jpg" },
                { name: "梵净山", image: "https://th.bing.com/th/id/R.3aa79818faf22b2d7e224e837095fcaa?rik=6UR5ErqoPKBKWw&riu=http%3a%2f%2fp1.img.cctvpic.com%2fcportal%2fimg%2fphotoAlbum%2fpage%2fperformance%2fimg%2f2018%2f7%2f2%2f1530521579890_575_5529x4147.jpg&ehk=%2bcEmAc6%2bT1Cj%2bphNBJjXeuLL%2fYyXxfiaKP29gly01xE%3d&risl=&pid=ImgRaw&r=0" },
                { name: "良渚遺跡", image: "https://th.bing.com/th/id/R.51c19eaff1fdfec027c7ec1f3b124326?rik=KRtAIeE72oZ2hw&riu=http%3a%2f%2fwww.hzyly.com%2fupload%2f201908%2f21%2f201908211547351805.jpg&ehk=H43QqZoUGMeLXLU6MPe8arwFVFc0OoL9KRpXgNfvq2k%3d&risl=&pid=ImgRaw&r=0" },
                { name: "中国の黄海(渤海)における渡り鳥の生息地", image: "https://th.bing.com/th/id/R.8a76e3e6e357871ecd7b55bab5de8ea4?rik=hIw0wqTS3NNTlA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190705%2fda1ef139f0824b44b038627e7e8d4751.jpeg&ehk=hUlqRE2cDN1Sme0Ol2PfU0aN4rKh%2fiOuT6Wgj3qsbA8%3d&risl=&pid=ImgRaw&r=0" },
                { name: "泉州:宋元王朝の中国の世界の海上貿易の中心地", image: "https://www.zyzw.com/zgsjyc/zgsjyct/zgsjyc056-2.jpg" },
                { name: "プーアル景邁山古茶林文化的景観", image: "https://p2.itc.cn/q_70/images03/20210222/1ebf6c1b3e8c4bab9c856d54efb06dd8.jpeg" },
                { name: "バダインジャラン砂漠-砂丘群と湖沼群", image: "https://n.sinaimg.cn/sinakd20240726s/137/w2048h1289/20240726/f4d4-aad68889d3fd45df422e4f959b40f7c3.jpg" },
                { name: "北京の中央軸：理想の秩序を示す建築群", image: "https://k.sinaimg.cn/n/sinakd20240727s/1/w960h1441/20240727/d12b-12880c339277929fb1cc181d20e236fd.jpg/w700d1q75cms.jpg" },
                
                
            ],
            "法国": [
                { name: "埃菲尔铁塔", image: "images/eiffel_tower.jpg" },
                { name: "凡尔赛宫",  image: "images/versailles.jpg" },
                { name: "卢浮宫", image: "images/louvre.jpg" }
            ],

            "日本": [
                { name: "法隆寺地区の仏教建築群", image: "https://copyright.bdstatic.com/vcg/creative/008c4f90cba98910c902e1e3b86c4419.jpg@h_1280" },
                { name: "姬路城 ", image: "https://i0.hdslb.com/bfs/archive/f8908f1d508bee3e0ddb48540e51c765f9360c81.jpg" },
                { name: "白神山地", image: "https://www.tohokukanko.jp/lsc/upfile/spot/0100/7187/1007187_3_l.jpg" },
                { name: "屋久島", image: "https://bj.bcebos.com/bjh-pixel/1702981137712459113_8_ainote_new.jpg" },
                { name: "古都京都の文化財（京都、宇治、大津）", image: "https://p8.itc.cn/q_70/images03/20231123/8d895349176949cab4d1e659a5036c95.jpeg" },
                { name: "白川郷・五箇山の合掌造り集落", image: "http://3.14159.icu/usr/uploads/2022/06/2492864779.jpg" },
                { name: "広島平和記念公園内の原爆ドーム", image: "https://img0.baidu.com/it/u=1946813900,3178105534&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1003" },
                { name: "厳島神社", image: "https://t7.baidu.com/it/u=3325260275,2417100291&fm=193" },
                { name: "古奈良の歴史的遺跡", image: "https://img.166.net/reunionpub/ds/nbot/20230919/080356-o7p15sqw8c.jpeg?imageView&tostatic=0&thumbnail=272y272" },
                { name: "日光の社寺", image: "https://ss-mpvolc.meipian.me/users/1073846/a6cf93292a00afe988863e311eefde5f__jpg.heic~tplv-s1ctq42ewb-s2-cC-q:750:0:0:0:q80.webp" },
                { name: "琉球王国のグスク及び関連遺産群", image: "https://bkimg.cdn.bcebos.com/pic/ae51f3deb48f8c5494ee4cba84673af5e0fe9925d15d" },
                { name: "紀伊山地の霊場と参詣道", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Seigantoji05s1920.jpg" },
                { name: "知床半島", image: "https://bkimg.cdn.bcebos.com/pic/c75c10385343fbf2b2111fdc0e30dd8065380dd721b7?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536" },
                { name: "石見銀山", image: "https://pic3.zhimg.com/100/v2-997ac156a65634cf699df812789010f2_r.jpg" },
                { name: "平泉―仏国土（浄土）を表す建築・庭園及び考古学的遺跡群", image: "https://shijieyichan.com/upload/tid/118/043811390ed5ece6a1182f80a610fc38.jpg" },
                { name: "小笠原群島", image: "https://img.activityjapan.com/wi/ogasawara_access_top01.jpg" },
                { name: "富士山", image: "https://img0.baidu.com/it/u=3598050283,3278850070&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422" },
                { name: "富岡製糸場", image: "https://www.nippon.com/cn/ncommon/contents/guide-to-japan/174635/174635.jpg" },
                { name: "明治日本の産業革命遺産 製鉄・製鋼、造船、石炭産業", image: "https://mir-museum.fukuoka.jp/files/ChapterImages/e056ec63-ccf8-49a0-a45b-5cb9e6a0120a/image/6cdb83682534a20b64423ef97384867b.jpg" },
                { name: "ル・コルビュジエの建築作品-近代建築運動への顕著な貢献", image: "https://img1.baidu.com/it/u=2059087704,622779750&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750" },
                { name: "「神宿る島」宗像・沖ノ島と関連遺産群", image: "https://www.nippon.com/cn/ncommon/contents/japan-topics/2148519/2148519_org.jpg" },
                { name: "長崎と天草地方の潜伏キリシタン関連遺産", image: "https://tabi.kotuu.com/wp-content/uploads/2018/07/amakusa1.jpg" },
                { name: "百舌鳥・古市古墳群", image: "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20190706/1024x766_049267106069.jpg" },
                { name: "奄美大岛、德之岛、冲绳岛北部及西表岛", image: "https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2021/09/61419c48eb25a_614199353e8a3_1003070236.jpg" },
                { name: "北海道・北東北の縄文遺跡群", image: "https://www.japan-travel.cn/assets_c/2023/02/Aomori_s_id29_12-thumb-1200x630-24441.jpg" },
                { name: "佐渡金山", image: "https://www.nippon.com/cn/ncommon/contents/views/60308/60308.jpg" },
            ]
        };

        function displayHeritage(data) {
            heritageBoxes.innerHTML = '';
            if (data.length > 0) {
                data.forEach(heritage => {
                    const box = document.createElement('div');
                    box.classList.add('heritage-box');
                    box.innerHTML = `
                        <img src="${heritage.image}" alt="${heritage.name}">
                        <h3>${heritage.name}</h3>
                    `;
                    box.onclick = () => {
                        window.location.href = `heritage_detail.html?heritage=${encodeURIComponent(heritage.name)}`;
                    };
                    heritageBoxes.appendChild(box);
                });
            } else {
                heritageBoxes.innerHTML = '<p>その国に関する遺産情報は見つかりませんでした。</p>';
            }
        }
        
        function filterHeritage() {
            const query = searchBox.value.toLowerCase();
            if (heritageData[country]) {
                const filteredData = heritageData[country].filter(item => 
                    item.name.toLowerCase().includes(query)
                );
                displayHeritage(filteredData);
                if (filteredData.length === 0) {
                    heritageBoxes.innerHTML = '<p>対応する検索対象はありません。</p>';
                }
            }
        }
        
        if (heritageData[country]) {
            displayHeritage(heritageData[country]);
        } else {
            heritageBoxes.innerHTML = '<p>その国に関する遺産情報は見つかりませんでした。</p>';
        }