<template>
  <v-container fluid>
    <v-layout>
      <h1>
        <b>Blog</b>
      </h1>
    </v-layout>
    <v-layout>
      <v-divider></v-divider>
    </v-layout>
    <br />
    <v-layout column>
      <!-- ----------------------------Hang 1------------------------------------ -->
      <v-layout>
        <v-flex xs6>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card v-show="page1" height="550px">
                <v-card-text>
                  <v-img
                    class="white--text"
                    height="200px"
                    contain
                    src="https://www.cambridgeenglish.org/Images/blog-004-banner-large.jpg"
                  ></v-img>
                  <v-card-title style="color: red">
                    <h1><u>Cambridge English Qualifications increase motivation to learn and build confidence</u></h1>
                  </v-card-title>
                  <v-card-text>
                    By
                    <b>Manh Huy</b>, 21/08/2019
                    <br />Motivation is probably the most important factor in successful language learning.
                    Well-designed tests provide structure, encouragement and reward which boost learners' motivation
                    and confidence. Dr Edmund Jones and Dr Sian Morgan review the evidence that shows the positive impact
                    of studying for Cambridge English Qualifications.
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" class="white--text">Read more</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card-text>
              </v-card>

              <v-card v-show="page2" height="550px">
                <v-card-text>
                  <v-img
                    class="white--text"
                    height="200px"
                    contain
                    src="https://www.cambridgeenglish.org/Images/blog-005-banner-large.jpg"
                  ></v-img>
                  <v-card-title style="color: red">
                    <h1><u>Does CELTA remain relevant in the 21st century?</u></h1>
                  </v-card-title>
                  <v-card-text>
                    By
                    <b>Manh Huy</b>, 21/08/2019
                    <br />Since it was introduced in the 1960s, the Certificate in Teaching English 
                    to Speakers of Other Languages has become an essential English language teaching 
                    qualification, trusted by teachers, language schools and governments. Every year, 
                    tens of thousands of future and current language teachers take CELTA at over 300 
                    centres in more than 70 countries around the world. But having been around for so long, 
                    does CELTA remain relevant? During this year’s IATEFL conference in Brighton, Clare Harrison 
                    presented a number of arguments which attempted to answer this particular question.
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                    <v-btn color="black" class="white--text">Read more</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-flex>
        <!-- ------------------------------------------------------------ -->
        <v-flex xs6>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card v-show="page1" height="550px">
                <v-card-text>
                  <v-img
                    class="white--text"
                    height="200px"
                    contain
                    src="https://www.cambridgeenglish.org/Images/blog-banner-developing-teachers-750.jpg"
                  ></v-img>
                  <v-card-title style="color: red">
                    <h1><u>Developing teachers: key principles in the Cambridge English approach to teacher education</u></h1>
                  </v-card-title>
                  <v-card-text>
                    By
                    <b>Manh Huy</b>, 21/08/2019
                    <br />Cambridge Assessment English has long been recognised as one of the international leaders 
                    in pre-service teacher education through the CELTA qualification. In recent years, we have been working 
                    around the world at a national level with both in-service and pre-service teachers to improve levels 
                    of pedagogical skill and knowledge in a variety of different countries, for example Panama, Ukaine and Malta.
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                    <v-btn color="black" class="white--text">Read more</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card-text>
              </v-card>

              <v-card v-show="page2" height="550px">
                <v-card-text>
                  <v-img
                    class="white--text"
                    height="200px"
                    contain
                    src="https://www.cambridgeenglish.org/Images/blog-006-banner-large.jpg"
                  ></v-img>
                  <v-card-title style="color: red">
                    <h1><u>Anything teachers can do – can technology do better?</u></h1>
                  </v-card-title>
                  <v-card-text>
                    By
                    <b>Manh Huy</b>, 21/08/2019
                    <br />Despite the growth of learning technologies, the language teacher's role remains 
                    secure argues Dr Evelina Galaczi, Head of Research Strategy, Cambridge Assessment English
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                    <v-btn color="black" class="white--text">Read more</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- ----------------------------Hang 1------------------------------------ -->
      <br />
      <!-- ----------------------------Hang 2------------------------------------ -->
      <v-layout>
        <v-flex xs6>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card v-show="page1" height="550px">
                <v-card-text>
                  <v-img
                    class="white--text"
                    height="200px"
                    contain
                    src="https://www.cambridgeenglish.org/Images/communication-in-healthcare_large.jpg"
                  ></v-img>
                  <v-card-title style="color: red">
                    <h1><u>Overcoming communication challenges in healthcare settings</u></h1>
                  </v-card-title>
                  <v-card-text>
                    By
                    <b>Manh Huy</b>, 21/08/2019
                    <br />Good communication skills are essential to patient safety, wellbeing and the overall 
                    efficiency of busy healthcare organisations. At Cambridge Boxhill Language Assessment this 
                    is something we’re very interested in as we jointly own the Occupational English Test (OET), 
                    a widely used international English language test for healthcare professionals. Earlier this 
                    year we commissioned a piece of research that looked into the challenges of communicating clearly 
                    to patients, with the leading healthcare accreditation body Joint Commission International (JCI).
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                    <v-btn color="black" class="white--text">Read more</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-flex>
        <!-- ------------------------------------------------------------ -->
        <v-flex xs6>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <v-card v-show="page1" height="550px">
                <v-card-text>
                  <v-img
                    class="white--text"
                    height="200px"
                    contain
                    src="https://www.cambridgeenglish.org/Images/blog-008-banner-large.jpeg"
                  ></v-img>
                  <v-card-title style="color: red">
                    <h1><u>The relationship between tech and the English language teacher</u></h1>
                  </v-card-title>
                  <v-card-text>
                    By
                    <b>Manh Huy</b>, 21/08/2019
                    <br />Writes about how technology is shaking up the way people learn English. He talks 
                    about how tech is helping Cambridge Assessment English with their mission to help people 
                    learn English and prove their skills to the world - and answers the popular question of: 
                    will tech replace teachers?
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                    <v-btn color="black" class="white--text">Read more</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- ----------------------------Hang 2------------------------------------ -->
      <br />
    </v-layout>
    <!-- ------------------------------------------------------------------- -->
    <v-layout>
      <v-flex xs3></v-flex>
      <v-flex xs6>
        <div class="text-xs-center">
          <v-pagination v-model="page" :length="2" color="grey"></v-pagination>
        </div>
      </v-flex>
      <v-flex xs3></v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    page: 1,
    page1: true,
    page2: false
  }),
  watch: {
    page(val) {
      if (val == 2) {
        this.page1 = false;
        this.page2 = true;
      } else {
        this.page2 = false;
        this.page1 = true;
      }
    }
  }
};
</script>