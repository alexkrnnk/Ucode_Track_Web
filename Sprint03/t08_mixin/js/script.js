let houseMixin = {
  wordReplace(a, b) {
    this.description = this.description.replace(a, b);
  },
  wordInsertAfter(a, b) {
    this.description = this.description
      .split(" ")
      .map((e) => (e === a ? e + " " + b : e))
      .join(" ");
  },
  wordDelete(a) {
    this.wordReplace(a, "");
  },
  wordEncrypt() {
    // let code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split("");
    let code = [
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
    ];
    // this.description = this.description.split("").map(e => code.includes(e) ? code[code.indexOf(e) + 13] : e).join("");
    this.description = [...this.description]
      .map((e) => (code.includes(e) ? code[code.indexOf(e) + 13] : e))
      .join("");
  },
  wordDecrypt() {
    this.wordEncrypt();
  },
};

