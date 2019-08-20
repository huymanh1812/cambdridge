<template>
  <v-timeline>
    <!-- <v-timeline-item v-for="n in 4" :key="n" color="red" fill-dot>
      <template v-slot:opposite>
          <v-img src="https://www.cambridgeenglish.org/Images/ap1%20%281%29.jpg" style="height:auto;width:500px;">
          </v-img>
      </template>
      <v-card flat>
        <v-card-title class="headline" style="color: red">Lorem ipsum</v-card-title>
        <v-card-text
          style="font-family: Arial"
        >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>-->
    <v-timeline-item color="red" fill-dot left>
      <template v-slot:opposite>
        <v-card flat>
          <v-img
            src="https://www.cambridgeenglish.org/Images/ap1%20%281%29.jpg"
            style="height:auto;width:500px;"
          ></v-img>
        </v-card>
      </template>
      <v-card>
        <v-card-title class="red">
          <h2 class="display-1 white--text font-weight-light">
            <b>Con đường học tiếng Anh của bạn, từng bước một</b>
          </h2>
        </v-card-title>
        <v-card-text>
          <h3>
            Bằng cấp tiếng Anh của Cambridge là các kỳ thi chuyên sâu giúp việc học tiếng Anh trở nên thú vị, hiệu quả và bổ ích.
            Phương pháp độc đáo của chúng tôi khuyến khích sự tiến bộ liên tục với một lộ trình rõ ràng để cải thiện các kỹ năng ngôn ngữ.
            Chúng tôi có trình độ cho các trường học, giáo dục phổ thông và đại học, và kinh doanh.
            <v-btn color="grey darken-3" class="white--text"><b>Tìm hiểu thêm ></b></v-btn>
          </h3>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="teal darken-2" fill-dot right>
      <template v-slot:opposite>
        <v-card flat>
          <v-layout>
            <v-flex xs3></v-flex>
            <v-flex xs7>
              <v-img
                src="https://www.cambridgeenglish.org/Images/ap2.jpg"
                contain
                style="height:auto;width:550px;"
              ></v-img>
            </v-flex>
            <v-flex xs2></v-flex>
          </v-layout>
        </v-card>
      </template>
      <v-card>
        <v-card-title class="teal darken-2">
          <h2 class="display-1 white--text font-weight-light">
            <b>Chúng tôi cùng nhau truyền cảm hứng cho người học đi xa hơn</b>
          </h2>
        </v-card-title>
        <v-card-text>
          <h3>
            Phạm vi tài nguyên giảng dạy miễn phí, 
            kế hoạch bài học và hoạt động của chúng tôi được thiết kế để giúp bạn chuẩn bị cho học sinh của mình 
            cho các kỳ thi và bài kiểm tra của chúng tôi. Chúng tôi cũng có một loạt các bằng cấp giảng dạy, 
            các khóa học và hỗ trợ để giúp bạn phát triển như một giáo viên.
            <v-btn color="grey darken-3" class="white--text"><b>Tìm hiểu thêm ></b></v-btn>
          </h3>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="yellow darken-3" fill-dot left>
      <template v-slot:opposite>
        <v-card flat>
          <v-img
            src="https://www.cambridgeenglish.org/Images/ap3%20copy.jpg"
            style="height:auto;width:500px;"
          ></v-img>
        </v-card>
      </template>
      <v-card>
        <v-card-title class="yellow darken-3">
          <h2 class="display-1 white--text font-weight-light">
            <b>Kiểm tra tiếng Anh trực tuyến, đơn giản hóa</b>
          </h2>
        </v-card-title>
        <v-card-text>
          <h3>
            Một bài kiểm tra trực tuyến nhanh chóng và thuận tiện để giúp các tổ chức giáo dục đại học
             và nhà tuyển dụng kiểm tra trình độ tiếng Anh của các cá nhân và nhóm ứng viên. 
             Nó kết hợp công nghệ mới nhất với độ tin cậy và chất lượng mà bạn mong đợi từ Cambridge.
             <v-btn color="grey darken-3" class="white--text"><b>Tìm hiểu thêm ></b></v-btn>
          </h3>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="blue" fill-dot right>
      <template v-slot:opposite>
        <v-card flat>
          <v-layout>
            <v-flex xs3></v-flex>
            <v-flex xs7>
              <v-img
                src="https://www.cambridgeenglish.org/Images/ap4%20copy.jpg"
                contain
                style="height:auto;width:550px;"
              ></v-img>
            </v-flex>
            <v-flex xs2></v-flex>
          </v-layout>
        </v-card>
      </template>
      <v-card>
        <v-card-title class="blue">
          <h2 class="display-1 white--text font-weight-light">
            <b>Kiểm tra tiếng anh của bạn</b>
          </h2>
        </v-card-title>
        <v-card-text>
          <h3>
            Hãy thử các bài kiểm tra trực tuyến miễn phí, 
            nhanh chóng của chúng tôi để tìm hiểu trình độ tiếng Anh của bạn là gì, 
            và Chứng chỉ tiếng Anh Cambridge nào có thể phù hợp nhất với bạn. 
            Có các bài kiểm tra phù hợp cho mọi cấp độ, và cuối cùng, 
            bạn sẽ nhận được các đề xuất về cách cải thiện tiếng Anh của mình.
            <v-btn color="grey darken-3" class="white--text"><b>Tìm hiểu thêm ></b></v-btn>
          </h3>
        </v-card-text>
      </v-card>
    </v-timeline-item>

  </v-timeline>
</template>
