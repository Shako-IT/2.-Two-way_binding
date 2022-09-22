const app = Vue.createApp({
  data() {
    return {
      pText_1: "",
      text_2: "",
      pText_2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button clicked");
    },
    pasteText(event) {
      this.pText_1 = event.target.value;
    },
    copyText_2(event) {
      this.text_2 = event.target.value;
    },
    pasteText_2() {
      this.pText_2 = this.text_2;
    },
  },
});

app.mount("#assignment");
