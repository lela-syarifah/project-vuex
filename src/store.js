import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listProject: [
      {
        name: "LAYLA ROBI'ATUS SYARIFAH",
        address: "Jl. Bukit Beringin Elok",
        phone: "+62 895 622 189 242",
        email: "syareefa4@gmail.com",
        hobbi: "reading",
        hobbies: "writing",
        summary:
          "<p>Senior Web Developer specializing in front development.<br> Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerousm programming<br> languages including HTML5, PHP OOP, JavaScript, CSS, MySQL.<br> Strong background in project management and customer<br> relation</p>",
        skillHightlights: "...",
        experience:
          "<p><b>Web Developer</b>-09/2015 to 05/2019<br> <b>Luna Web Design</b>, New York</p>",
      },
    ],
  },
  mutations: {},
  actions: {},
});
