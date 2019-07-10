<template>
  <div id="admin">
    <v-app id="inspire">
      <v-navigation-drawer fixed clipped class="grey lighten-4" app v-model="drawer">
        <v-list dense class="grey lighten-4">
          <template v-for="(item, i) in items">
            <v-layout row v-if="item.heading" align-center :key="i">
              <v-flex xs6>
                <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
              </v-flex>
              <!-- <v-flex xs6 class="text-xs-right">
                <v-btn small flat>edit</v-btn>
              </v-flex> -->
            </v-layout>
            <v-divider dark v-else-if="item.divider" class="my-3" :key="i"></v-divider>
            <v-list-tile :key="i" v-else :to='{ name: item.text }'>
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="amber" app absolute clipped-left>
        <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title ml-3 mr-5">
          &nbsp;
          <span class="text">IELTS</span>
        </span>
        <v-text-field solo-inverted flat label="Search" prepend-icon="search"></v-text-field>
        <v-spacer></v-spacer>
        <h1>Admin Page</h1>
      </v-toolbar>
      <v-content>
        <v-container>
          <v-layout class="layoutcenter">
            <!-- <v-flex xs7>
             <h1>This is the router page</h1>
            </v-flex> -->
            <!-- <v-flex xs5>
             <h2>Admin {{ $route.params.id }}</h2>
            
            </v-flex> -->
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
      items: [
        { icon: "lightbulb_outline", text: "Notes" },
        { icon: "touch_app", text: "Reminders" },
        // { divider: true },
        // { heading: "Activities" },
        // { icon: "add", text: "Create new user" },
        { divider: true },
        { icon: "book", text: "Listening"},
        { icon: "book", text: "Reading" },
        { icon: "book", text: "Writing" },
        { icon: "book", text: "Speaking" },
        { divider: true },
        { heading: "User"},
        { icon: "table", text: "ListUser" }
        // { icon: "chat_bubble", text: "Trash" },
        // { icon: "help", text: "Help" },
        // { icon: "phonelink", text: "App downloads" },
        // { icon: "keyboard", text: "Keyboard shortcuts" }
      ]
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
    background-color: #5C6BC0 !important;
    color: #FFFFFF;
  }
  .layoutcenter{
    justify-content: left;
  }
</style>
