<template>
  <div id="admin">
    <v-app id="inspire">
      <!-- <v-navigation-drawer fixed clipped class="grey lighten-4" app v-model="drawer">
        <v-list dense class="grey lighten-4">
          <template v-for="(item, i) in items">
            <v-layout row v-if="item.heading" align-center :key="i">
              <v-flex xs6>
                <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
              </v-flex>
              <!- <v-flex xs6 class="text-xs-right">
                <v-btn small flat>edit</v-btn>
              </v-flex>-->
            <!-- </v-layout>
            <v-divider dark v-else-if="item.divider" class="my-3" :key="i"></v-divider>
            <v-list-tile :key="i" v-else :to="{ name: item.text }">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer> -->
      <v-navigation-drawer v-model="drawer" fixed clipped absolute stateless app value="true">
      <v-list>
        <v-list-tile>
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

            <v-list-tile v-for="(listen, i) in listens" :key="i" :to="{ name: listen[0] }">
              <v-list-tile-title v-text="listen[2]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="listen[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Reading</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(read, i) in reads" :key="i" @click>
              <v-list-tile-title v-text="read[2]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="read[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Speaking</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(speak, i) in speaks" :key="i" @click>
              <v-list-tile-title v-text="speak[2]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="speak[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Writing</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(write, i) in writes" :key="i" @click>
              <v-list-tile-title v-text="write[2]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="write[1]"></v-icon>
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

            <v-list-tile v-for="(Tlisten, i) in Tlistens" :key="i" @click>
              <v-list-tile-title v-text="Tlisten[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="Tlisten[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Reading</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(Tread, i) in Treads" :key="i" @click>
              <v-list-tile-title v-text="Tread[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="Tread[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Speaking</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(Tspeak, i) in Tspeaks" :key="i" @click>
              <v-list-tile-title v-text="Tspeak[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="Tspeak[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Writing</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(Twrite, i) in Twrites" :key="i" @click>
              <v-list-tile-title v-text="Twrite[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="Twrite[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
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
      drawer: null,
      drawer2: null,
      listens: [["ILlv1", "book", "Level 4.0-5.5"], ["ILlv2", "book", "Level 5.5-6.5"], ["ILlv3", "book", "Level 5.5-6.5"]],
      reads: [["IRTest1", "book", "Test1"], ["IRTest2", "book", "Test2"], ["IRTest3", "book", "Test3"], ["IRTest4", "book", "Test4"]],
      speaks: [["ISTest1", "book"], ["ISTest2", "book"], ["ISTest3", "book"], ["ISTest4", "book"]],
      writes: [["IWTest1", "book"], ["IWTest2", "book"], ["IWTest3", "book"], ["IWTest4", "book"]],
      Tlistens: [["TLTest1", "book"], ["TLTest2", "book"], ["TLTest3", "book"], ["TLTest4", "book"]],
      Treads: [["TRTest1", "book"], ["TRTest2", "book"], ["TRTest3", "book"], ["TRTest4", "book"]],
      Tspeaks: [["TSTest1", "book"], ["TSTest2", "book"], ["TSTest3", "book"], ["TSTest4", "book"]],
      Twrites: [["TWTest1", "book"], ["TWTest2", "book"], ["TWTest3", "book"], ["TWTest4", "book"]],
      users: [["ListUser", "insert_drive_file"]]
      // huys: [["Management", "people_outline"], ["Settings", "settings"]],
      // drawer: null,
      // items: [
      //   { icon: "lightbulb_outline", text: "Notes" },
      //   { icon: "touch_app", text: "Reminders" },
      //   // { divider: true },
      //   // { heading: "Activities" },
      //   // { icon: "add", text: "Create new user" },
      //   { divider: true },
      //   { icon: "book", text: "Listening"},
      //   { icon: "book", text: "Reading" },
      //   { icon: "book", text: "Writing" },
      //   { icon: "book", text: "Speaking" },
      //   { divider: true },
      //   { heading: "User"},
      //   { icon: "table", text: "ListUser" }
      //   // { icon: "chat_bubble", text: "Trash" },
      //   // { icon: "help", text: "Help" },
      //   // { icon: "phonelink", text: "App downloads" },
      //   // { icon: "keyboard", text: "Keyboard shortcuts" }
      // ]
    };
  },
  props: {
    source: String
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
