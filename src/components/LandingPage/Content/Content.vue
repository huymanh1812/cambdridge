<template>
  <div>
    <center>
      <h1>
        <em style="color: orange">
          Chúng tôi giúp mọi người học tiếng Anh
          <br />và chứng tỏ khả năng với thế giới
        </em>
      </h1>
    </center>
    <v-container>
      <v-layout>
        <v-flex xs3>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card color="indigo lighten-3">
                <v-img
                  class="white--text"
                  height="200px"
                  src="http://www.gannett-cdn.com/-mm-/c217ce095be16b350ba0e2ea8a8ad1ca63b674e0/c=555-0-1943-1043&r=x404&c=534x401/local/-/media/2015/09/09/Elmira/B9318777511Z.1_20150909115259_000_GL4BSCIUN.1-0.jpg"
                >
                  <!-- <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline brown--text">
                          <h3>Trường học</h3></span>
                      </v-flex>
                    </v-layout>
                  </v-container>-->
                </v-img>
                <v-card-title>
                  <div>
                    <span class="red--text">
                      <h3>
                        <em>
                          Các văn bằng chứng chỉ của chúng tôi cung cấp cho học sinh một lộ trình được thiết kế
                          chặt chẽ nhằm nâng cao trình độ Tiếng Anh
                        </em>
                      </h3>
                    </span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-layout>
                    <v-flex xs7></v-flex>
                    <v-flex xs5>
                      <v-btn color="orange">Detail</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs11>
              <v-card color="indigo lighten-3">
                <v-img
                  class="white--text"
                  height="200px"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAA2FBMVEX29vYAAAAERoj1hjQARozv8fP2xqL2lk/1ijr2s4Ls7Ozy8vIFBQUlJSX25Nbv7+/21r+ysrL2r3s7Ozv2omQTExOqqqq+vr7R0dHg4OBLS0tgYGBSUlIZGRkyMjL23sz26+ORkZGBgYEPS4jU2d72m1j20bZ3d3fa2tqbm5vFxcVFRUWNjY1mgZtHa4/2vpX2pGgNSogcUod1jKK4wcpZeJaGmaz2lEs3YYsoWIjO09lNb5FigqSYprP24dL2w56tuMOhrrtcf6KRprt9lrA7ZIy0vsj2uo3b53WcAAAH6klEQVR4nM2ca2PhTBTHp4hoglKU0NW4hG23qlQprdXubh/f/xs9cyZBJplcZhLk/wK5/8ycOXPJmUEXEVSr3A47N/WGpiiqqihao37TGd5WalHuiURZmt3yT+Shn+VuU5RKBCjf7DS8WA5qdJr5UwDVWuWrYBpTV+UWd0LxAeVvy2pYGlNq+ZYvnXiACo8aH40p7bFwFKDKDWfi2JLpphI7UKUuSmOqHhYpHFC7HA0HVG7HBvTjPjoO6P5HLED5oRIPD0LKMLjEBQK1H+LCAT0E5lsAUL4rXLTYUrsBieQPVIg1eUw9+HslX6BWbNZjl9ISBMp3joED6vhkmzdQLaIr9FPdu871BCqEaGGIq+FpSF5AFaF6NLw0r6rEA+jXUczZLuUXD1AzdBtMXFfN8EDNmL0hWyqTiAX06wTpA7pi5RoDqHJ0+9lJYVi2G6hw5PJll+Yu/S6g2lH9j1MNl4d0AuWP6J9ZqjtrESfQ42l5EHr0B2qdmgehlh9Q4WQF7CCl4A2UP0J7LFgPeU+g7jl4EOp6AbVPUmO4pbbZQOfJMJA902xAw3PxIDRkAf04QwnbSfnBAIqpvyymezdQ+5w8CLVdQDGMb0RR2QlUOS8PQhUH0IkrebfqNNCZLQjUpoBuzo2D0I0dqHCmSsMutWADOnmzjKXHA1D+hO16b2n5PdDtuVlM3e6BzuwUdyrvgGoxmLT29dYbzaRI91BrFlDklr00G/VSoLd1JKSWBRQxx6Svt9Re05e+OFPZBMpHGVuQ+i+TFK2nmWjL6ipPgJriONrnU4qh5bovdr8mARIdbJVWL1MWDmgiZuAdAiQ2uiB9MRPnoO81f841AKgmQtN3Jc5oNnMS9kbcBl7DQPwmpMzeXenRw49W3MnEa+BNDMTZXZX68yXLaDCQxso5PgPvYiAuLyT99+phMk+fX14mzmHgZQzEUdMrI1bihNByHvIJ2gXisemfPTEeTBT2ETXE093QvkWBXsM+ooK42kKKq2iHw1mFLmu3iHOIQVq5i3wQDo83GiLuLr004sLhdI73iL8DxAP0suL01TeIv8sKedafOxsdTBz+tlEd8VetYNcSUuZBPuBFE6jwG4i/B7QkQAj1/ZAmgi1HDfG3EaYW0Dr19OFRW/T+/JmEdc60lAhAr5lM5ukfA6n38WeSybwLAnF3gaSJWbcTIIz0d+pMnY8eHBADUgWAwELgxyhj6tuO1Pv4NzV3iwJxZ5kLKJN52yH1Pj6mu52iWcYNBM0wW5aZWv7FfbPpPnWiAHEX+1nKMuqXTIZCmttxMpmREJDG7xjnO6BZhtaE3pwJATW4qw7pfQekau8ZTz0JdhXr3JWr2ZK3LG+2ZONMP8VwoHLlbH5IZiN////XPQbPXHy84Z6zgSZ9pmggpL04cV4Fc4toyNeERauUEwhXspQpLVcRcKAJy/VOob+r32lnsTqY0jriaFyFqxuk7esIpztdm2X+NfJwbo2ro0h4vnfFnhKY0lu03CK34etKT1I93O7CWEtGMVp9xjB2WuYbbJj/B8m5TqXEGl8h1BUZjlGcNh2jmiIDVtI8guMLUE18SO8oakQa9DyCOlGHheNWM/rAeayyBs6T8jJo/2rhHGFVbLVifD0Vh/avp5KSZ+VTveLMjgehzju84jzuS+BNOp0OQ2R7CXzU1+SDdHqRzt0Fn2h7TX7MQIKiYTzrVaOqB51IBRKEDbVQdd13O4qoUAtmMIohy1v4vpblZ7JjUMXWkLv+vTsha8D2ZXF/xaUsG+THRpbl4gA+EHyCBmgsy9dwsIi3GDlIB6OwwnVy6TS5AcaQ8Zf6nLY0Jof1qrWZ21tsFm+RRxlwCWwVyScoiy7xZwmArG9ajnAdVkCTA2jPYxKpxmF7d3vdOgbfWyaQrJpH3UDOgCaGc6SBoPDmxncluC0kA3wvsnela9ivW5fgU6uIFCx8ygFovNlsfpMr0hsPIFfIF8OKKCAVb+WI9cDTnsldF4Tjcp+JhDqnkl0LZAMyDxIgzM4EcgfFucMGMcJzCYsYROnwWMg7Pbv3dnq1Wr22LrHMY5FOX9qB7rB0Ewj/RxYQI2zQHViZOxiJTHLMKk7kEXB3hvMyAMXCom2oBECGjC9V3UDMwEpX6CkFtIVkMfdDYg2w6eTcPGhsFa8cYgJV8bUGA4gZeuoKzqWAxocUAiMqeaTQb+B+No2PBQT5nXUBeQTnOsOXwah1LGLUA7OEgK5pG1K32+1mfxE2n2zOPHQAKuK7qCTLUDGHazYHkFf4sjPAmyplem5XuiHHDGInsm7lUnq7v2gLVSkpaqxSZpinO4A8A7wdmUb7ITCixUDX4f9DAkA6GSW9uLX7IYTurKJEAQ2wdAtIXTiBfELg6UkCNJDdM8NufXHYztquIrsHNJB5jglEMt8O5DdJgG7vO6oO3bDzQB25297YLiLexkwxBhDch/gxG5DvNAqqqeYAQuqG/HtjV5eqY7L9TNfcYGJm48ALCNu1DShgoknAVJxi6U732+ZX4FQc/8lKxbuoAA4FT1byn851TRtwZIWZzuU74S1moHAT3vymBI4NI1wXK5TCTglM3qTJ5E0rTd7E2+RNTU7e5O3kTW9P3gIAF4lbIuEieYtIJG+ZjYvELURykbylWi4St5gNKGHL/YAStiASQUrWklGghC2qBUrYsmNEyVqYzVSylq6zlKjF/Q5UR1j+8H9v3KumHm+mPgAAAABJRU5ErkJggg=="
                >
                  <!-- <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Học viên</span>
                      </v-flex>
                    </v-layout>
                  </v-container>-->
                </v-img>
                <v-card-title>
                  <div>
                    <span class="red--text">
                      <h3>
                        <em>
                          Việc chuẩn bị cho một trong các kỳ thi của chúng tôi
                          có thể giúp các bạn giao tiếp trong đời sống thực tế.
                          Hãy xem qua một số tài liệu của chúng tôi
                        </em>
                      </h3>
                    </span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-layout>
                    <v-flex xs7></v-flex>
                    <v-flex xs5>
                      <v-btn color="orange">Detail</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card color="indigo lighten-3">
                <v-img
                  class="white--text"
                  height="200px"
                  src="data:image/png;base64,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"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline orange--text">
                          <b>Giáo viên</b>
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="red--text">
                      <h3>
                        <em>
                          Chúng tôi có thể giúp bạn luyện tập cho học sinh
                          và nâng cao khả năng tiếng anh của các em,
                          giúp bạn phát huy được tối đa nghiệp vụ
                        </em>
                      </h3>
                    </span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-layout>
                    <v-flex xs7></v-flex>
                    <v-flex xs5>
                      <v-btn color="orange">Detail</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card color="indigo lighten-3">
                <v-img
                  class="white--text"
                  height="200px"
                  src="data:image/png;base64,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"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline orange--text">
                          <b>Tổ chức</b>
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="red--text">
                      <h3>
                        <em>
                          Bằng việc chấp nhận các bài thi và văn bằng chứng chỉ
                          của chúng tôi, bạn có thể tiếp cận các ứng viên có đủ
                          kỹ năng tiếng Anh, ...
                        </em>
                      </h3>
                    </span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-layout>
                    <v-flex xs7></v-flex>
                    <v-flex xs5>
                      <v-btn color="orange">Detail</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <br />
    <!-- Timeline -->
    <Timeline />
    <!-- -------- -->
    <br />
    <v-card color="indigo lighten-3">
      <v-card-text>
        <center>
          <h1>Bạn muốn nâng cao trình độ tiếng Anh?</h1>
        </center>
      </v-card-text>
      <v-card-text>
        <center>
          <h3>Với nguồn tài liệu học và luyện tập sẽ giúp bạn nâng cao trình độ tiếng Anh</h3>
        </center>
      </v-card-text>
      <v-card-text>
        <v-layout>
          <v-flex xs4>
            <v-layout>
              <v-flex xs2></v-flex>
              <v-flex xs8>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0N1NO3t3_PmyGOCbyVObdAp74OiG07L7qzgjcmCfXJa5UEJaumg"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >Free</div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-4" style="position: relative;">
                      <v-btn absolute color="orange" class="white--text" fab large right top>
                        <v-icon>send</v-icon>
                      </v-btn>
                      <h3 class="display-1 font-weight-light orange--text mb-2">Các hoạt động khác</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs4>
            <v-layout>
              <v-flex xs2></v-flex>
              <v-flex xs8>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      src="data:image/png;base64,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"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >Free</div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-4" style="position: relative;">
                      <v-btn absolute color="orange" class="white--text" fab large right top>
                        <v-icon>send</v-icon>
                      </v-btn>
                      <h3 class="display-1 font-weight-light orange--text mb-2">Quiz your English</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
              <v-flex xs2></v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs4>
            <v-layout>
              <v-flex xs2></v-flex>
              <v-flex xs8>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      src="data:image/jpeg;base64,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"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >Free</div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-4" style="position: relative;">
                      <v-btn absolute color="orange" class="white--text" fab large right top>
                        <v-icon>send</v-icon>
                      </v-btn>
                      <h3 class="display-1 font-weight-light orange--text mb-2">Luyện tập từ vựng</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import Timeline from "./Timeline/Timeline.vue";
export default {
  components: {
    Timeline
  }
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>