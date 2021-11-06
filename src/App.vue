<template>
  <div id="app" class="container">
    <div class="row py-4">
      <cv-1 />
    </div>
    <br>
    <div class="row py-4">
      <cv-2 />
    </div>
  </div>
</template>

<script>
import cv1 from './components/cv1.vue'
import cv2 from './components/cv2.vue'

export default {
  name: 'App',
  components: {
    cv1,
    cv2
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#hr {
  border: 1px solid black;
}
#tikel {
  height: 335px;
  background: rgb(188, 188, 189);
  padding: 30px;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 2;

}
#articel {
  height: 550px;
  background: rgb(188, 188, 189);
  padding: 30px;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 2;
}
.knn {
  float: right;
  width: 80%;
}
p {
  font-family: 'Times New Roman', Times, serif;
}
h4 {
  font-family: 'Courier New', Courier, monospace;
}
hr {
  border-style: dotted;
  border-color: black;
  margin-top: 0px;
}
img {
  border-radius: 50%;
  width: 5px;
  height: 5px;
}
header{
  background-color: rgb(2, 2, 46);
  width: 100%;
  height: 250px;
  color: white;
}
#bio {
  text-align: right;
  float: left;
}
.hp {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.nm {
  font-family: 'Courier New', Courier, monospace;
}
.app {
  font-family: sans-serif;
}
nav {
  float: left;
  width: 30%;
  height: 1250px;
  background: rgb(188, 188, 189);
  padding: 40px;
}
article {
  float: left;
  padding: 25px;
  width: 59%;
  background-color: white;
  height: 1250px;
}
section::after {
  content: "";
  display: table;
  clear: both;
}
#lyl {
  color: rgb(255, 115, 0);
}
#ul {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
}
</style>
