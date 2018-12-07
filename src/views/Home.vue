<template>
  <div class="home">
  
  <button @click="playerPlay()">开始播放</button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Tone from "tone";
  
  export default {
    name: "home",
    data(){
      return {
        player:null
      }
    },
    mounted() {
      // this.initTone1();
      //this.initTone2();
      // this.initTone3();
      // this.initTone4();
       this.initTone5();
    },
    methods: {
      initTone1() {
        var osc = new Tone.Oscillator({
          frequency: 440,
          volume: -10
        }).toMaster();
        osc.start();
        Tone.Master.volume.rampTo(0, 0.05);
  
        setTimeout(() => {
          Tone.Master.volume.rampTo(-Infinity, 0.05);
        }, 1000);
      },
      initTone2() {
        var noise = new Tone.Noise({
          volume: -20,
          type: "brown"
        }).toMaster();
        var env = new Tone.AmplitudeEnvelope({
          attack: 0.11,
          decay: 0.21,
          sustain: 0.09,
          release: 1.2
        }).toMaster();
  
        //create an oscillator and connect it to the envelope
        var osc = new Tone.Oscillator({
            partials: [3, 2, 1],
            type: "custom",
            frequency: "C#4",
            volume: -8
          })
          .connect(env)
          .start();
        // noise.start();
  
        env.triggerAttack();
  
        setTimeout(() => {
          env.triggerRelease();
        }, 1000);
      },
      initTone3() {
        var player = new Tone.Player({
          "url": "audio/nengjiayu.[mp3|ogg]",
          "loop": true
        }).toMaster();
  
        Tone.Buffer.on("load", function() {
          // this.element.addClass("Loaded");
          player.start();
        }.bind(this));
  
      },
      initTone4() {
        this.makeFader("kanzhewo");
        this.makeFader("nengjiayu");
        this.makeFader("nishizai");

        Tone.Buffer.on("load", function() {
            Tone.Transport.start();
           console.log(Tone.Master);
        }.bind(this));

        // setTimeout(() => {
        //   Tone.Transport.start();
        // }, 10000);

      },
      makeFader(track) {
        var player = new Tone.Player("audio/loop/" + track + ".[mp3|ogg]").sync().start(0);
        player.loop = true;
        var soloCtrl = new Tone.Solo();
        var panVol = new Tone.PanVol(0.5, 6);
        player.chain(panVol, soloCtrl, Tone.Master);
  
        soloCtrl.solo = true;
  
      },
      initTone5() {
        //  var osc = new Tone.Oscillator({
        //   frequency: 20,
        //   volume: 10
        // }).toMaster();
        // var meter = new Tone.Meter();
        // Tone.dbToGain(0.5);
        // var player = new Tone.Player({
        //   "url": "loop/Bass1.[ogg|mp3]",
        //   "loop": true,
        //   autostart:true,
        //   // channelCount:2,
        //   // numberOfOutputs:10,
        //   // frequency: 1000,
        //   volume: 10
        // }).connect(osc).toMaster();

//         var a =new Tone.Buffer({
// 'url': "loop/Bass1.[ogg|mp3]",
// // autostart:true
// // 'onload': this._onload.bind(this, options.onload),
// // 'reverse': options.reverse
// });
// console.log(a);
//  var osc = new Tone.Oscillator({
//           frequency: 20,
//           volume: 10
//         }).connect(a).toMaster();
    //     var buffer = new Tone.Buffer("loop/Bass1.[ogg|mp3]", function(){
    //   //the buffer is now available.
    //   var buff = buffer.get();
    //   console.log(buff)
    // });

Tone.startMobile()
    this.player = new Tone.GrainPlayer({
          "url": "loop/Bass1.[ogg|mp3]",
          "loop": true,
          autostart:true,
          volume: 20,
          playbackRate:0.5
        }).toMaster().sync();
        Tone.Transport.start();
         Tone.Buffer.on("load", function() {
          // this.element.addClass("Loaded");
          console.log(1);
          // alert(1);s
          // player.start();
        });
//             var a =new Tone.Buffer({
// 'url': "loop/Bass1.[ogg|mp3]",
// // autostart:true
// // 'onload': this._onload.bind(this, options.onload),
// // 'reverse': options.reverse
// });
//     var player = new Tone.OscillatorNode(a).toMaster().start (0);
        // Tone.Transport.start();
  
        // Tone.Buffer.on("load", function() {
        //   // this.element.addClass("Loaded");
        //   // player.start();
        //   // osc.start();
        // }.bind(this));
  
      },
      playerPlay(){
        this.player.start();
      }
    },
    components: {}
  };
</script>
