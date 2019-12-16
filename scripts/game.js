!function e(t,i,r){function a(s,o){if(!i[s]){if(!t[s]){var u="function"==typeof require&&require;if(!o&&u)return u(s,!0);if(n)return n(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var h=i[s]={exports:{}};t[s][0].call(h.exports,function(e){var i=t[s][1][e];return a(i?i:e)},h,h.exports,e,t,i,r)}return i[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(e,t,i){for(var r=!0;r;){var a=e,n=t,s=i;r=!1,null===a&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,n);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var l=Object.getPrototypeOf(a);if(null===l)return;e=l,t=n,i=s,r=!0,o=l=void 0}},o=e("states/Boot"),u=r(o),l=e("states/Preload"),h=r(l),c=e("states/GameTitle"),d=r(c),g=e("states/Main"),f=r(g),p=e("states/GameOver"),m=r(p),v=function(e){function t(){a(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,1280,960,Phaser.AUTO),this.state.add("Boot",u["default"],!1),this.state.add("Preload",h["default"],!1),this.state.add("GameTitle",d["default"],!1),this.state.add("Main",f["default"],!1),this.state.add("GameOver",m["default"],!1),this.state.start("Boot")}return n(t,e),t}(Phaser.Game);new v},{"states/Boot":2,"states/GameOver":3,"states/GameTitle":4,"states/Main":5,"states/Preload":6}],2:[function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=function(e,t,i){for(var r=!0;r;){var a=e,n=t,s=i;r=!1,null===a&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,n);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var l=Object.getPrototypeOf(a);if(null===l)return;e=l,t=n,i=s,r=!0,o=l=void 0}},o=function(e){function t(){r(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),n(t,[{key:"preload",value:function(){}},{key:"create",value:function(){this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.state.start("Preload")}}]),t}(Phaser.State);i["default"]=o,t.exports=i["default"]},{}],3:[function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=function(e,t,i){for(var r=!0;r;){var a=e,n=t,s=i;r=!1,null===a&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,n);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var l=Object.getPrototypeOf(a);if(null===l)return;e=l,t=n,i=s,r=!0,o=l=void 0}},o=function(e){function t(){r(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),n(t,[{key:"create",value:function(){this.game.add.image(0,0,"background");var e=this.game.world,t=e.centerX,i=e.centerY,r=this.game.cache.getImage("donut").width/2,a=this.game.cache.getImage("donut").height/2;this.game.add.image(t-r,i-a+100,"donut");var n=this.game.cache.getImage("score").width/2,s=this.game.cache.getImage("score").height/2;this.game.add.image(t-n,i,"score");var o=this.game.cache.getText("score");this.game.add.text(t-60,i+s/2+7,o,{fontSize:"90px",fill:"#ffffff"});var u=this.game.cache.getImage("logo").width/2;this.game.add.image(t-u,0,"logo"),this.game.add.image(t-r+50,i-a+100,"timeUp");var l=this.game.cache.getImage("play").width/2,h=this.game.add.image(t-l,i+200,"play");h.inputEnabled=!0,h.events.onInputDown.add(this.restartGame,this)}},{key:"restartGame",value:function(){this.game.state.start("Main")}}]),t}(Phaser.State);i["default"]=o,t.exports=i["default"]},{}],4:[function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=function(e,t,i){for(var r=!0;r;){var a=e,n=t,s=i;r=!1,null===a&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,n);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var l=Object.getPrototypeOf(a);if(null===l)return;e=l,t=n,i=s,r=!0,o=l=void 0}},o=function(e){function t(){r(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),n(t,[{key:"create",value:function(){this.game.add.image(0,0,"background");var e=this.game.world,t=e.centerX,i=e.centerY,r=this.game.cache.getImage("logo").width/2;this.game.add.image(t-r,0,"logo");var a=this.game.cache.getImage("donut").width/2,n=this.game.cache.getImage("donut").height/2;this.game.add.image(t-a,i-n+100,"donut");var s=this.game.cache.getImage("play").width/2,o=this.game.add.image(t-s,i,"play");o.inputEnabled=!0,o.events.onInputDown.add(this.startGame,this)}},{key:"startGame",value:function(){this.game.state.start("Main")}}]),t}(Phaser.State);i["default"]=o,t.exports=i["default"]},{}],5:[function(e,t,i){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),o=function(e,t,i){for(var r=!0;r;){var a=e,n=t,s=i;r=!1,null===a&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,n);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var l=Object.getPrototypeOf(a);if(null===l)return;e=l,t=n,i=s,r=!0,o=l=void 0}},u=function(e){function t(){a(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),s(t,[{key:"create",value:function(){var e=this;this.game.add.image(0,0,"background");var t=this.game.world,i=t.centerX,r=t.centerY,a=this.game.cache.getImage("score").width/2,n=this.game.cache.getImage("score").height/2;this.game.add.image(i-a,0,"score"),this.textScore=this.game.add.text(i,n+20,this.score,{fontSize:"90px",fill:"#ffffff"}),this.textScore.anchor.set(.5),this.timer=60,this.textTime=this.game.add.text(i-2*a,50,"60s",{fill:"#000000",align:"center",fontSize:"90px"}),this.game.time.events.loop(Phaser.Timer.SECOND,this.updateTime,this),this.game.time.events.add(Phaser.Timer.SECOND*this.timer,this.gameOver,this),this.backgroundSound=this.game.add.audio("backgroundSound",.5,!0),this.backgroundSound.play(),this.btnSound=this.game.add.button(i+a+10,30,"sound"),this.btnSound.inputEnabled=!0,this.btnSound.events.onInputDown.add(this.toggleSound,this),this.soundKill=this.game.add.audio("kill",.5),this.soundRndKill=this.game.add.audio("rndKill",.5),this.score=0,this.canSwipe=!1,this.itsOk=!1,this.waitSetActive=!0,this.arrGems=[[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null]],this.shadow=this.game.add.image(-100,-100,"shadow"),this.typesGems=["red","blue","green","light-blue","yellow","pink"],this.gems=this.game.add.group(),this.firstActive=null,this.secondActive=null;var s=this.game.cache.getImage("donut").width/2,o=this.game.cache.getImage("donut").height/2,u=this.game.add.image(i-s,r-o+100,"donut");this.game.add.tween(u).to({y:2*n-10},750,Phaser.Easing.Bounce.Out,!0,500,0,!0).onComplete.add(function(){return e.game.add.tween(u).to({x:2*-s},500,Phaser.Easing.Linear.Out,!0,500,0,!1)}),setTimeout(this.renderGems.bind(this),2e3)}},{key:"toggleSound",value:function(){this.backgroundSound.isPlaying?(this.backgroundSound.pause(),this.btnSound.alpha=.5):(this.backgroundSound.resume(),this.btnSound.alpha=1)}},{key:"updateTime",value:function(){var e=this;setTimeout(function(){e.timer--,e.textTime.setText(e.timer+"s"),e.game.cache.addText("score",null,e.score)},2e3)}},{key:"gameOver",value:function(){this.game.state.start("GameOver")}},{key:"renderGems",value:function(){for(var e=this,t=102,i=86,r=function(){return e.typesGems[Math.floor(Math.random()*e.typesGems.length)]},a=0;a<this.arrGems.length;a++)for(var n=0;n<this.arrGems[0].length;n++){var s=this.gems.create(331+n*t,307+a*i,r());s.gridX=a,s.gridY=n,s.posX=s.x,s.posY=s.y,s.dead=!1,s.scale.setTo(1.1,1.1),s.anchor.set(.5),s.inputEnabled=!0,s.events.onInputDown.add(this.activeGem,this),s.events.onInputUp.add(this.stopActiveGem,this),this.arrGems[a][n]=s}this.searchIdentic()}},{key:"activeGem",value:function(e){this.waitSetActive||(this.firstActive=e,this.canSwipe=!0,this.gems.bringToTop(e),this.shadow.x=e.position.x+7,this.shadow.y=e.position.y+7,this.shadow.scale.setTo(1.2,1.2),this.shadow.anchor.set(.5))}},{key:"stopActiveGem",value:function(){this.canSwipe=!1,this.itsOk=!1}},{key:"changeGems",value:function(e,t){var i=this;if(this.waitSetActive=!0,"right"==e?this.secondActive=this.next(this.firstActive,"X",1):"left"==e?this.secondActive=this.prev(this.firstActive,"X",1):"top"==e?this.secondActive=this.prev(this.firstActive,"Y",1):"bottom"==e&&(this.secondActive=this.next(this.firstActive,"Y",1)),this.secondActive){this.checkMatch(this.firstActive,this.secondActive);var r=function(e){return"X"==t?"first"==e?{x:i.secondActive.posX}:{x:i.firstActive.posX}:"Y"==t?"first"==e?{y:i.secondActive.posY}:{y:i.firstActive.posY}:void 0};this.game.add.tween(this.firstActive).to(r("first"),200,Phaser.Easing.Linear.Out,!0,0,0,this.itsOk),this.game.add.tween(this.shadow).to(r("first"),200,Phaser.Easing.Linear.Out,!0,0,0,this.itsOk),this.game.add.tween(this.secondActive).to(r("second"),200,Phaser.Easing.Linear.Out,!0,0,0,this.itsOk)}else this.game.add.tween(this.firstActive).to({x:this.firstActive.x+10},50,Phaser.Easing.Linear.Out,!0,0,1,!0),this.firstActive=null,this.waitSetActive=!1}},{key:"searchSister",value:function(e){var t=[];this.next(e,"Y",1)&&!this.next(e,"Y",1).dead&&this.next(e,"Y",1).key==e.key&&(t.push(this.next(e,"Y",1)),this.next(e,"Y",2)&&!this.next(e,"Y",2).dead&&this.next(e,"Y",2).key==e.key&&t.push(this.next(e,"Y",2))),this.prev(e,"Y",1)&&!this.prev(e,"Y",1).dead&&this.prev(e,"Y",1).key==e.key&&(t.push(this.prev(e,"Y",1)),this.prev(e,"Y",2)&&!this.prev(e,"Y",2).dead&&this.prev(e,"Y",2).key==e.key&&t.push(this.prev(e,"Y",2))),this.next(e,"X",1)&&!this.next(e,"X",1).dead&&this.next(e,"X",1).key==e.key&&(t.push(this.next(e,"X",1)),this.next(e,"X",2)&&!this.next(e,"X",2).dead&&this.next(e,"X",2).key==e.key&&t.push(this.next(e,"X",2))),this.prev(e,"X",1)&&!this.prev(e,"X",1).dead&&this.prev(e,"X",1).key==e.key&&(t.push(this.prev(e,"X",1)),this.prev(e,"X",2)&&!this.prev(e,"X",2).dead&&this.prev(e,"X",2).key==e.key&&t.push(this.prev(e,"X",2)));var i=[],a=t.filter(function(t){return t.gridX==e.gridX});a.length>=2&&i.push.apply(i,r(a));var n=t.filter(function(t){return t.gridY==e.gridY});return n.length>=2&&i.push.apply(i,r(n)),i.map(function(e){return e.dead=!0}),i}},{key:"changeEl",value:function(e,t){this.arrGems[t.gridX][t.gridY]=e,this.arrGems[e.gridX][e.gridY]=t}},{key:"changeGrigAxis",value:function(e){for(var t=0;t<this.arrGems.length;t++){var i=this.arrGems[t].indexOf(e);if(i>-1){e.gridX=t,e.gridY=i,e.posX=331+102*i,e.posY=307+86*t;break}}}},{key:"checkMatch",value:function(e,t){var i=this,r=t.key,a=e.key;t.key=a,e.key=r;var n=this.searchSister(t),s=this.searchSister(e);n.length||s.length?setTimeout(function(){t.key=r,e.key=a,i.changeEl(e,t),i.changeGrigAxis(t),i.changeGrigAxis(e),n.length&&(n.map(function(e){return e.kill()}),e.dead=!0,e.kill(),i.soundKill.play(),i.score+=10*n.length,i.textScore.setText(i.score)),s.length&&(s.map(function(e){return e.kill()}),t.dead=!0,t.kill(),i.soundKill.play(),i.score+=10*s.length,i.textScore.setText(i.score)),i.shadow.x=-100,i.shadow.y=-100,i.gravity()},200):(t.key=r,e.key=a,this.waitSetActive=!1,this.itsOk=!0)}},{key:"gravity",value:function(){for(var e=this,t=!1,i=0;i<this.arrGems.length;i++)for(var r=0;r<this.arrGems[0].length;r++){if(this.arrGems[i][r].dead&&(t=!0),this.arrGems[i][r].dead&&this.prev(this.arrGems[i][r],"Y",1)&&!this.prev(this.arrGems[i][r],"Y",1).dead){var a=this.arrGems[i][r],n=this.prev(a,"Y",1);this.changeEl(a,n),this.changeGrigAxis(n),this.changeGrigAxis(a),this.game.add.tween(n).to({y:n.posY},600,Phaser.Easing.Bounce.Out,!0,0,0,!1),i-=1,i==-1&&(i=0),r-=1}t&&6==i&&6==r&&(this.newGems(),setTimeout(function(){return e.searchIdentic()},1001))}}},{key:"newGems",value:function(){var e=this,t=function(){return e.typesGems[Math.floor(Math.random()*e.typesGems.length)]};this.arrGems.map(function(i){return i.map(function(i){if(i.dead){var r=t();i.loadTexture(r),i.dead=!1,i.reset(i.posX,i.posY-200),e.game.add.tween(i).to({y:i.posY},1e3,Phaser.Easing.Bounce.Out,!0,0,0,!1)}})})}},{key:"searchIdentic",value:function(){for(var e=!1,t=this.arrGems.length-1;t>=0;t--)for(var i=this.arrGems[0].length-1;i>=0;i--){var r=this.searchSister(this.arrGems[t][i]);if(r.length>0&&(this.soundRndKill.play(),r.map(function(e){return e.kill()}),this.arrGems[t][i].dead=!0,this.arrGems[t][i].kill(),e=!0,this.score+=10*r.length,this.textScore.setText(this.score)),e&&0==t&&0==i){this.gravity();break}}e||(this.waitSetActive=!1)}},{key:"next",value:function(e,t,i){return"X"==t&&e.gridY<7-i?this.arrGems[e.gridX][e.gridY+i]:"Y"==t&&e.gridX<7-i?this.arrGems[e.gridX+i][e.gridY]:void 0}},{key:"prev",value:function(e,t,i){return"X"==t&&e.gridY>i-1?this.arrGems[e.gridX][e.gridY-i]:"Y"==t&&e.gridX>i-1?this.arrGems[e.gridX-i][e.gridY]:void 0}},{key:"searchSecondActive",value:function(){this.firstActive&&this.canSwipe&&(this.game.input.x>this.firstActive.x+40?(this.canSwipe=!1,this.changeGems("right","X")):this.game.input.x<this.firstActive.x-40?(this.canSwipe=!1,this.changeGems("left","X")):this.game.input.y>this.firstActive.y+40?(this.canSwipe=!1,this.changeGems("bottom","Y")):this.game.input.y<this.firstActive.y-40&&(this.canSwipe=!1,this.changeGems("top","Y")))}},{key:"update",value:function(){this.searchSecondActive()}}]),t}(Phaser.State);i["default"]=u,t.exports=i["default"]},{}],6:[function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=function(e,t,i){for(var r=!0;r;){var a=e,n=t,s=i;r=!1,null===a&&(a=Function.prototype);var o=Object.getOwnPropertyDescriptor(a,n);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var l=Object.getPrototypeOf(a);if(null===l)return;e=l,t=n,i=s,r=!0,o=l=void 0}},o=function(e){function t(){r(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),n(t,[{key:"preload",value:function(){this.load.setBaseURL("https://bobuzh.github.io/phaser-test"),this.game.load.image("background","assets/images/backgrounds/background.jpg"),this.game.load.image("donut","assets/images/donut.png"),this.game.load.image("logo","assets/images/donuts_logo.png"),this.game.load.image("play","assets/images/btn-play.png"),this.game.load.image("score","assets/images/bg-score.png"),this.game.load.image("sound","assets/images/btn-sfx.png"),this.game.load.image("red","assets/images/game/gem-01.png"),this.game.load.image("blue","assets/images/game/gem-02.png"),this.game.load.image("green","assets/images/game/gem-03.png"),this.game.load.image("light-blue","assets/images/game/gem-04.png"),this.game.load.image("yellow","assets/images/game/gem-05.png"),this.game.load.image("pink","assets/images/game/gem-06.png"),this.game.load.image("shadow","assets/images/game/shadow.png"),this.game.load.image("timeUp","assets/images/text-timeup.png"),this.game.load.audio("kill","assets/audio/kill.mp3"),this.game.load.audio("rndKill","assets/audio/select-1.mp3"),this.game.load.audio("backgroundSound","assets/audio/background.mp3")}},{key:"create",value:function(){this.game.state.start("GameTitle")}}]),t}(Phaser.State);i["default"]=o,t.exports=i["default"]},{}]},{},[1]);