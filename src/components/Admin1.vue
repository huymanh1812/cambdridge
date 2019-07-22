<template>
  <div id="admin">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" fixed clipped absolute stateless app value="true">
      <v-list>
        <v-list-tile @click="goHomePage()">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>IELTS</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="star" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>TYPE</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Listening</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(listen, i) in listens" :key="i" :to="{ name: listen.path, params: { id: listen.id, typeId: listen.typeId } }">
              <v-list-tile-title v-text="listen.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="listen.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Reading</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(read, i) in reads" :key="i" :to="{ name: read.path, params: { id: read.id, typeId: read.typeId } }">
              <v-list-tile-title v-text="read.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="read.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Speaking</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(speak, i) in speaks" :key="i" :to="{ name: speak.path, params: { id: speak.id, typeId: speak.typeId } }">
              <v-list-tile-title v-text="speak.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="speak.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Writing</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(write, i) in writes" :key="i" :to="{ name: write.path, params: { id: write.id, typeId: write.typeId } }">
              <v-list-tile-title v-text="write.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="write.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          
        </v-list-group>
        <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>USER</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(user, i) in users" :key="i" :to="{ name: user[0] }">
              <v-list-tile-title v-text="user[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="user[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer2" fixed clipped absolute stateless app value="true">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>TOEIC</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="star" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>TYPE</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Listening</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(listen, i) in Tlistens" :key="i" :to="{ name: listen.path, params: { id: listen.id, typeId: listen.typeId } }">
              <v-list-tile-title v-text="listen.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="listen.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Reading</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(read, i) in Treads" :key="i" :to="{ name: read.path, params: { id: read.id, typeId: read.typeId } }">
              <v-list-tile-title v-text="read.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="read.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Speaking</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(speak, i) in Tspeaks" :key="i" :to="{ name: speak.path, params: { id: speak.id, typeId: speak.typeId } }">
              <v-list-tile-title v-text="speak.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="speak.id"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Writing</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(write, i) in Twrites" :key="i" :to="{ name: write.path, params: { id: write.id, typeId: write.typeId } }">
              <v-list-tile-title v-text="write.text"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="write.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          
        </v-list-group>
        <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>USER</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(user, i) in users" :key="i" :to="{ name: user[0] }">
              <v-list-tile-title v-text="user[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="user[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
      </v-list>
    </v-navigation-drawer>
      <v-toolbar color="amber" app absolute clipped-left>
        <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title ml-3 mr-5">
          &nbsp;
          <span class="text">Cambridge</span>
        </span>
        <v-text-field solo-inverted flat label="Search" prepend-icon="search"></v-text-field>
        <v-spacer></v-spacer>
          <!-- <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Manh Huy</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(huy, i) in huys" :key="i" @click>
              <v-list-tile-title v-text="huy[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="huy[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group> -->
          <h1>Now is {{hours}}:{{minutes}}:{{seconds}}</h1>
          <v-spacer></v-spacer>
          <v-btn color="blue" dark @click.stop="drawer = !drawer">IELTS</v-btn>
          <v-btn color="blue" dark @click.stop="drawer2 = !drawer2">TOEIC</v-btn>
        <v-spacer></v-spacer>
        <h1>Admin Page</h1>
      </v-toolbar>
      <v-content>
        <v-container>
          <v-layout class="layoutcenter">
            <!-- <v-flex xs7>
             <h1>This is the router page</h1>
            </v-flex>-->
            <!-- <v-flex xs5>
             <h2>Admin {{ $route.params.id }}</h2>
            
            </v-flex>-->
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      drawer: null,
      drawer2: null,
      listens: [
        {typeId: 'listening' ,id: '1', icon: 'book', text: 'Level 4.0-5.5', path: 'ILlv'},
        {typeId: 'listening' ,id: '2', icon: 'book', text: 'Level 5.5-6.5', path: 'ILlv'},
        {typeId: 'listening' ,id: '3', icon: 'book', text: 'Level 6.5-7.5', path: 'ILlv'}
      ],
      reads: [
        {typeId: 'reading' ,id: '1', icon: 'book', text: 'Level 4.0-5.5', path: 'IRlv'},
        {typeId: 'reading' ,id: '2', icon: 'book', text: 'Level 5.5-6.5', path: 'IRlv'},
        {typeId: 'reading' ,id: '3', icon: 'book', text: 'Level 6.5-7.5', path: 'IRlv'}
      ],
      speaks: [
        {typeId: 'speaking' ,id: '1', icon: 'book', text: 'Level 4.0-5.5', path: 'ISlv'},
        {typeId: 'speaking' ,id: '2', icon: 'book', text: 'Level 5.5-6.5', path: 'ISlv'},
        {typeId: 'speaking' ,id: '3', icon: 'book', text: 'Level 6.5-7.5', path: 'ISlv'}
      ],
      writes: [
        {typeId: 'writing' ,id: '1', icon: 'book', text: 'Level 4.0-5.5', path: 'IWlv'},
        {typeId: 'writing' ,id: '2', icon: 'book', text: 'Level 5.5-6.5', path: 'IWlv'},
        {typeId: 'writing' ,id: '3', icon: 'book', text: 'Level 6.5-7.5', path: 'IWlv'}
      ],
      Tlistens: [
        {typeId: 'listening' ,id: '1', icon: 'book', text: 'Level 350-500', path: 'TLlv'},
        {typeId: 'listening' ,id: '2', icon: 'book', text: 'Level 500-700', path: 'TLlv'},
        {typeId: 'listening' ,id: '3', icon: 'book', text: 'Level >700', path: 'TLlv'}
      ],
      Tspeaks: [
        {typeId: 'speaking' ,id: '1', icon: 'book', text: 'Level 350-500', path: 'TSlv'},
        {typeId: 'speaking' ,id: '2', icon: 'book', text: 'Level 500-700', path: 'TSlv'},
        {typeId: 'speaking' ,id: '3', icon: 'book', text: 'Level >700', path: 'TSlv'}
      ],
      Treads: [
        {typeId: 'reading' ,id: '1', icon: 'book', text: 'Level 350-500', path: 'TRlv'},
        {typeId: 'reading' ,id: '2', icon: 'book', text: 'Level 500-700', path: 'TRlv'},
        {typeId: 'reading' ,id: '3', icon: 'book', text: 'Level >700', path: 'TRlv'}
      ],
      Twrites: [
        {typeId: 'writing' ,id: '1', icon: 'book', text: 'Level 350-500', path: 'TWlv'},
        {typeId: 'writing' ,id: '2', icon: 'book', text: 'Level 500-700', path: 'TWlv'},
        {typeId: 'writing' ,id: '3', icon: 'book', text: 'Level >700', path: 'TWlv'}
      ],
      users: [["ListUser", "insert_drive_file"]],
    };
  },
  props: {
    source: String
  },
  methods: {
    goHomePage() {
      this.$router.push({ name : "admin"})
    }
  },
  created() {
    setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
    }, 1000);
  }
};
</script>
<style scoped>
#keep main .container {
  height: 660px;
}

.navigation-drawer__border {
  display: none;
}

.text {
  font-weight: 400;
}
.amber {
  background-color: #5c6bc0 !important;
  color: #ffffff;
}
.layoutcenter {
  justify-content: left;
}
</style>
