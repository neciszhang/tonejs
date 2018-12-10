<template>
    <div class="music">
        <div>
            <div v-on:click="change('Melodies')">Melodies</div>
            <div v-on:click="change('Bass')">Bass</div>
            <div v-on:click="change('Chords')">Chords</div>
            <div v-on:click="change('Drums')">Drums</div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Tone from "tone";
    
    export default {
        name: "new",
        data() {
            return {
    
            }
        },
        mounted() {
            // let player = new Tone.Player({
            //     url: "loop/" + 'Melodies1' + ".[ogg|mp3]",
            //     loop: true,
            //     'onload': p => {
            //         player.start(0);
            //         // self.arr[self.length - 1].player1 = new Tone.Loop(function(time) {
            //         //     //triggered every eighth note. 
            //         //     console.log(time);
            //         //     player.start(0);
            //         // }, 2);
            //     }
            // }).toMaster();
            let player1_1 = new Tone.Player({
                url: "loop/" + 'Melodies1' + ".[ogg|mp3]",
                // loop: true,
            }).sync().start(0).stop(2).toMaster();

            let player1_2 = new Tone.Player({
                url: "loop/" + 'Bass1' + ".[ogg|mp3]",
                loop: true,
                loopStart:0,
                loopEnd:2
            }).sync().start(0).stop(2).toMaster();

            let player1_3 = new Tone.Player({
                url: "loop/" + 'Chords1' + ".[ogg|mp3]",
                loop: true,
                loopStart:0,
                loopEnd:2
            }).sync().start(0).stop(2).toMaster();

            let player1_4 = new Tone.Player({
                url: "loop/" + 'Drums1' + ".[ogg|mp3]",
                loop: true,
                loopStart:0,
                loopEnd:2
            }).sync().start(0).stop(2).toMaster();

            let player2_1 = new Tone.Player({
                url: "loop/" + 'Melodies2' + ".[ogg|mp3]",
                // loop: true,
                // loopStart:0,
                // loopEnd:200
            }).sync().start(2).stop(4).toMaster();

            let player2_2 = new Tone.Player({
                url: "loop/" + 'Bass2' + ".[ogg|mp3]",
                loop: true,
                loopStart:0,
                loopEnd:2
            }).sync().start(2).stop(4).toMaster();

            let player2_3 = new Tone.Player({
                url: "loop/" + 'Chords2' + ".[ogg|mp3]",
                loop: true,
                loopStart:0,
                loopEnd:2
            }).sync().start(2).stop(4).toMaster();

            let player2_4 = new Tone.Player({
                url: "loop/" + 'Drums2' + ".[ogg|mp3]",
                loop: true,
                loopStart:0,
                loopEnd:2
            }).sync().start(2).stop(4).toMaster();


            
            // function loopCallback(time) {
            //     console.log("loop");
            // }
            // var loop = new Tone.Loop(loopCallback, 2);
            // loop.start(0).stop(5);
    
    
            // function eventCallback(time) {
            //     console.log("event");
            // }
            // var event = new Tone.Event(eventCallback).start(3);
    
            //start the Transport 2 seconds after the page loads
            Tone.Transport.start(2);
            //stop it and restart it
            Tone.Transport.stop(6);
            Tone.Transport.start(10);
        },
        methods: {
            change(name) {
    
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
    
</style>

