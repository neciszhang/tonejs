<template>
    <div class="music">
        <div>
            <div class="player-arr">
                {{loopEnd}}
            </div>
            <div class="">
                <div @click="addOther">添加新的一组</div>
            </div>
        </div>
    
    
        <div class="tab1-music">
            <div class="music" @click="addMelodies('Melodies1')">旋律1</div>
            <div class="music" @click="addMelodies('Melodies2')">旋律2</div>
            <div class="music" @click="addMelodies('Melodies3')">旋律3</div>
            <div class="music" @click="addMelodies('Melodies4')">旋律4</div>
        </div>
        <div class="tab2-music">
            <div class="music" @click="addChords('Chords1')">Chords1</div>
            <div class="music" @click="addChords('Chords2')">Chords2</div>
            <div class="music" @click="addChords('Chords3')">Chords3</div>
            <div class="music" @click="addChords('Chords4')">Chords4</div>
        </div>
        <div class="tab3-music">
            <div class="music" @click="addBass('Bass1')">Bass1</div>
            <div class="music" @click="addBass('Bass2')">Bass2</div>
            <div class="music" @click="addBass('Bass3')">Bass3</div>
            <div class="music" @click="addBass('Bass4')">Bass4</div>
        </div>
        <div class="tab4-music">
            <div class="music" @click="addDrums('Drums1')">Bass1</div>
            <div class="music" @click="addDrums('Drums2')">Bass2</div>
            <div class="music" @click="addDrums('Drums3')">Bass3</div>
            <div class="music" @click="addDrums('Drums4')">Bass4</div>
        </div>
        <div class="bottom">
            <div class="tab">Tab1</div>
            <div class="tab">Tab2</div>
            <div class="tab">Tab3</div>
            <div class="tab">Tab4</div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Tone from "tone";
    
    export default {
        name: "music",
        data() {
            return {
                loopEnd: null,
                arr: [{
                    player1: null,
                    player2: null,
                    player3: null,
                    player4: null,
                }],
                isStart: false,
                timeline: null
            }
        },
        mounted() {
            // Tone.Transport.bpm.value = 100;
            // Tone.Transport.loop = true;
            // Tone.Transport.loopStart = 4*(this.length-1)+"m";
            // Tone.Transport.loopEnd = 4*this.length+"m";
            // Tone.Transport.start();

            Tone.Transport.loop = true;
            Tone.Transport.loopStart = 0;
            Tone.Transport.loopEnd = 2 * this.length;
    
            // var seq = new Tone.Sequence(function(time, note) {
            //     console.log(note);
            //     //subdivisions are given as subarrays
            // }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]);

            this.timeline=new Tone.Timeline();
    
            setInterval(() => {
                console.log(Tone.Transport.position);
            }, 50);
        },
        methods: {
            addLoop() {
                Tone.Transport.loop = true;
                // Tone.Transport.loopStart = 4*(this.length-1)+"m";
                Tone.Transport.loopStart = 0;
                Tone.Transport.loopEnd = 2 * this.length;
    
            },
            beginTransport() {
                if (!this.isStart) {
                    Tone.Transport.start();
                }
                this.isStart = true;
            },
            addMelodies(url) {
                this.beginTransport();
                let self = this;
                // Tone.Transport.pause();
                if (this.arr[this.length - 1].player1) {
                    // this.arr[this.length - 1].player1.disconnect();
                    this.arr[this.length - 1].player1.disconnect();
                    // this.arr[this.length-1].player1=null;
                }
    
                let a = this.length == 1 ? 0 : 2 * (this.length - 1);
    
                this.arr[this.length - 1].player1 = new Tone.Player({
                    url: "loop/" + url + ".[ogg|mp3]",
                    // loop:true,
                    'onload': p => {
                        // console.log(p); //Player
                        // console.log(p.loaded) //Cannot read property 'loaded' of undefined
                        // self.arr[self.length - 1].player1.start(0).stop('2n');
                        // Tone.Transport.schedule(function(time) {
                        //     // polySynth.triggerAttackRelease('C4', "8n")
                        //     self.arr[self.length - 1].player1.start();
                        // }, 0);
                        // Tone.Transport.scheduleRepeat(function(time){
                        //     self.arr[self.length - 1].player1.start();
                        // }, 0, "2n");
                        // Tone.Transport.schedule(function(time) {
                           
                        //     self.arr.forEach((item) => {
                        //         if (item.player1) {
                        //             self.arr[self.length - 1].player1.start();
                        //         }
                        //     });
                        // }, '2n');
                        console.log('start');
                        this.arr[this.length - 1].player1.start(0).stop(2);

                        self.timeline.add(this.arr[this.length - 1].player1);
                        // Tone.Transport.schedule(function(time){
                        //     self.arr[self.length - 1].player1.start(0).stop(2);
                        // }, 0, 2);
                    }
                }).toMaster();

                // Tone.Transport.scheduleRepeat(function(time){
                //     self.arr[self.length - 1].player1.start();
                // }, 0, '4n');
    
                // self.arr.forEach((item,index)=>{
                //     console.log(index);
                //     let a = index == 0 ? 0 : 2 * index + "n";
                //         if(item.player1!==null){
                //             Tone.Transport.schedule(function(time) {
                //             // polySynth.triggerAttackRelease('C4', "8n")
                //     // if(self.arr[self.length-1].player1){
                //     //     self.arr[self.length - 1].player1.start();
                //     // }
                //             item.player1.start(0).stop('2n');
                //             },a);
                //         }
                // });
    
                // Tone.Transport.schedule(function(time) {
                //             // polySynth.triggerAttackRelease('C4', "8n")
                //     self.arr.forEach((item)=>{
                //         if(item.player1){
                //             self.arr[self.length - 1].player1.start();
                //         }
                //     });
                //     // if(self.arr[self.length-1].player1){
                //     //     self.arr[self.length - 1].player1.start();
                //     // }
                // }, a);
    
    
                // console.log(a);
                // Tone.Transport.schedule(function(time){
                //         // polySynth.triggerAttackRelease('C4', "8n")
                //         self.arr[self.length - 1].player1.sync().start(0);
                //     }, 0);
    
    
    
                // Tone.Buffer.on("load", () => {
                //     // this.addLoop();
                //     // this.arr[this.length - 1].player1.start(8 * (this.length - 1) + "m");
                //     Tone.Transport.schedule(function(time){
                //         // polySynth.triggerAttackRelease('C4', "8n")
                //         self.arr[self.length - 1].player1.start();
                //     }, a);
    
                //     // Tone.Transport.schedule(function(time){
                //     // // polySynth.triggerAttackRelease('C4', "8n")
                //     //     self.arr[self.length - 1].player1.start();
                //     // }, 0)
    
                //     console.log(Tone.Transport);
                //     // this.loopEnd=Tone.Transport.loopEnd;
                // });
    
                // console.log(Tone.Transport.timeSignature);
                // Tone.Transport.loop = true;
            },
            addChords(url) {
                this.beginTransport();
                // Tone.Transport.pause();
                if (this.arr[this.length - 1].player2) {
                    this.arr[this.length - 1].player2.disconnect();
                }
                this.arr[this.length - 1].player2 = new Tone.Player({
                    url: "loop/" + url + ".[ogg|mp3]",
                    loop: true,
                    // autostart:true
                }).toMaster();
    
                Tone.Buffer.on("load", () => {
                    // this.addLoop();
                    this.arr[this.length - 1].player2.start(8 * (this.length - 1) + "m");
                    // this.loopEnd=Tone.Transport.loopEnd;
                });
                // Tone.Transport.loop = true;
            },
            addBass(url) {
                this.beginTransport();
                // Tone.Transport.pause();
                if (this.arr[this.length - 1].player3) {
                    this.arr[this.length - 1].player3.disconnect();
                }
                this.arr[this.length - 1].player3 = new Tone.Player({
                    url: "loop/" + url + ".[ogg|mp3]",
                    loop: true,
                    // autostart:true
                }).toMaster();
    
                Tone.Buffer.on("load", () => {
                    // this.addLoop();
                    this.arr[this.length - 1].player3.start(8 * (this.length - 1) + "m");
                    this.loopEnd = Tone.Transport.loopEnd;
                });
                // Tone.Transport.loop = true;
            },
            addDrums(url) {
                // Tone.Transport.pause();
                if (this.arr[this.length - 1].player4) {
                    this.arr[this.length - 1].player4.disconnect();
                }
                this.arr[this.length - 1].player4 = new Tone.Player({
                    url: "loop/" + url + ".[ogg|mp3]",
                    loop: true,
                    // autostart:true
                }).toMaster();
    
                Tone.Buffer.on("load", () => {
                    // this.addLoop();
                    this.arr[this.length - 1].player4.start(8 * (this.length - 1) + "m");
                    this.loopEnd = Tone.Transport.loopEnd;
                });
                // Tone.Transport.loop = true;
            },
            addOther() {
                let self = this;
                this.arr.push({
                    player1: null,
                    player2: null,
                    player3: null,
                    player4: null,
                });
                this.addLoop();
    
                // Tone.Transport.schedule(function(time) {
                //     // polySynth.triggerAttackRelease('C4', "8n")
                //     self.arr.forEach((item) => {
                //         if (item.player1) {
                //             self.arr[self.length - 1].player1.start(0).stop('2n');
                //         }
                //     });
                //     // if(self.arr[self.length-1].player1){
                //     //     self.arr[self.length - 1].player1.start();
                //     // }
                // }, a);
    
                // console.log(this.arr);
            }
    
    
        },
        computed: {
            length() {
                return this.arr.length;
            },
    
        },
        components: {}
    };
</script>

<style lang="scss" scoped>
    .bottom {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    
    .bottom::before,
    .bottom::after {
        clear: both;
        content: ' ';
    }
    
    .bottom {
        height: 1rem;
        .tab {
            float: left;
            width: 25%;
            line-height: 1rem;
            height: 1rem;
            text-align: center;
            font-size: 0.4rem;
            background: red;
        }
    }
    
    .tab1-music {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 1rem;
        height: 1rem;
        font-size: 0.4rem;
        background: #cccccc;
        &::before,
        &::after {
            clear: both;
            content: '';
        }
        .music {
            float: left;
            width: 25%;
        }
    }
    
    .tab2-music {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 2rem;
        height: 1rem;
        font-size: 0.4rem;
        background: #dddddd;
        &::before,
        &::after {
            clear: both;
            content: '';
        }
        .music {
            float: left;
            width: 25%;
        }
    }
    
    .tab3-music {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 3rem;
        height: 1rem;
        font-size: 0.4rem;
        background: #cccccc;
        &::before,
        &::after {
            clear: both;
            content: '';
        }
        .music {
            float: left;
            width: 25%;
        }
    }
    
    .tab4-music {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 4rem;
        height: 1rem;
        font-size: 0.4rem;
        background: #dddddd;
        &::before,
        &::after {
            clear: both;
            content: '';
        }
        .music {
            float: left;
            width: 25%;
        }
    }
</style>

