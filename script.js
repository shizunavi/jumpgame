var character = document.getElementById("character");
var block = document.getElementById("block"); //character, blockのdivを読み込む(今回はimgタグ)
var counter=0; //スコア用


function jump(){
    if(character.classList == "animate"){return}; //すでにジャンプしている時は何もしないでそのまま返す
    character.classList.add("animate"); //CSSでanimateプロパティを追加する
    setTimeout(function(){
        character.classList.remove("animate"); //動作が終わったらanimateのスタイルを取り除き、クリックすればまた動くようにする
        },300); //300ミリ秒ごとに動作終わったかどうかの判定
    };

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); //characterの上辺定義
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); //blockの左辺定義
    if(blockLeft<15 && blockLeft>-20 && characterTop>=140){　//blockLeft<20 && blockLeft>-20なのでblockはcharacterの真下にある。characterTop>=130であればblockと２０px以上重なっている
        block.style.animation = "none"; //ぶつかったら一旦ゲームが止まるようにする
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear"; //スコア表示させたらまた動かす
    }else{
        counter++; //うまく飛べたのでスコア増える、一回右から左に行くと１００増える
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);　//下のスコア表記を逐一書き換える。１０ミリ秒ごとに状況チェックしているわけで、counterが１００倍大きい値になってしまうのでcounter/100必要
    }
}, 10); //10ミリ秒ごとに状況のチェックを行う
