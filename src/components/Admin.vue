<template>
  <v-layout>
    <v-flex xs12>
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

              <v-list-group prepend-icon="star">
                <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-title>TYPE</v-list-tile-title>
                  </v-list-tile>
                </template>

                <v-list-tile v-for="(type, i) in types" :key="i" :to="{ name: type.path , params: {typeId: type.typeId} }">
                  <v-list-tile-action>
                    <v-icon>book</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{type.text}}</v-list-tile-title>
                </v-list-tile>

              </v-list-group>

              <v-list-group prepend-icon="star">
                <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-title>USER</v-list-tile-title>
                  </v-list-tile>
                </template>

                <v-list-tile v-for="(user, i) in users" :key="i" :to="{ name: user[0] }">
                  <v-list-tile-action>
                    <v-icon v-text="user[1]"></v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title v-text="user[0]"></v-list-tile-title>
                </v-list-tile>
              </v-list-group>

              <v-list-tile @click="goQuestionList()">
                <v-list-tile-action>
                  <v-icon>star</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>QUESTION_LIST</v-list-tile-title>
              </v-list-tile>

              <v-list-tile @click="goTestList()">
                <v-list-tile-action>
                  <v-icon>star</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>TEST_LIST</v-list-tile-title>
              </v-list-tile>

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
            <h1>Now is {{hours}}:{{minutes}}:{{seconds}}</h1>
            <v-spacer></v-spacer>
            <v-btn color="blue" dark @click.stop="drawer = !drawer">IELTS</v-btn>
            <v-btn color="blue" dark @click.stop="drawer2 = !drawer2">TOEIC</v-btn>
            <v-spacer></v-spacer>
            <v-btn dark @click="show = !show">Admin Page</v-btn>
            <v-tooltip v-model="show">
                <span>Hello</span>
            </v-tooltip>
            <!-- <h1>Admin Page</h1> -->
            <!-- <tooltip></tooltip> -->
          </v-toolbar>
          <v-content>
            <v-container>
              <v-layout class="layoutcenter">
                <router-view></router-view>
              </v-layout>
            </v-container>
          </v-content>
        </v-app>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
// import tooltip from "./tooltip"
export default {
  data() {
    return {
      show: false,
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      drawer: null,
      drawer2: null,
      types: [
        {text: "Listening", path:"listening", typeId:"listening"},
        {text: "Reading", path:"reading", typeId:"reading"},
        {text: "Speaking", path:"speaking", typeId:"speaking"},
        {text: "Writing", path:"writing", typeId:"writing"}
      ],
      users: [["ListUser", "insert_drive_file"]]
    };
  },
  // components: {
  //   tooltip
  // },

  props: {
    source: String
  },
  methods: {
    goHomePage() {
      this.$router.push({ name: "admin" });
    },
    goQuestionList() {
      this.$router.push({ name: "ilquestion" });
    },
    goTestList() {
      this.$router.push({ name: "illv" });
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
