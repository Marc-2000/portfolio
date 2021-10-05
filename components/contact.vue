<template>
  <section class="sec contact" id="contact">
    <div class="content">
      <div class="mxw800p">
        <h3>Send Me A Message</h3>
        <p>
          If you want to get in contact with me, or have a regular question,
          fill in the details down below, and I will get back to you as soon as
          possible! 
        </p>
        <p style="color:red">(NOTE: yet to be implemented)</p>
      </div>
      <div class="conactForm">
        <form>
          <div class="row100">
            <div class="inputBx50">
              <input type="text" name="" placeholder="Full Name" />
            </div>
            <div class="inputBx50">
              <input type="text" name="" placeholder="Email Address" />
            </div>
          </div>
          <div class="row100">
            <div class="inputBx100">
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <div class="row100">
            <div class="inputBx100">
              <input type="submit" value="Send" name="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sec {
  padding: 100px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sec .content {
  position: relative;
  text-align: center;
  width: 100%;
}
.mxw800p {
  max-width: 800px;
  margin: 0 auto;
}
h3 {
  font-size: 40px;
  font-weight: 200;
  margin-bottom: 10px;
}
p {
  position: relative;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.contact {
  background: #000;
}
.contact h3,
.contact p {
  color: #fff;
}
.conactForm {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
}
.conactForm form {
  width: 100%;
}
.conactForm .row100 {
  display: flex;
  width: 100%;
}
.conactForm .row100 .inputBx50 {
  width: 50%;
  margin: 0 20px;
}
.conactForm .row100 .inputBx100 {
  width: 100%;
  margin: 0 20px;
}
.conactForm .row100 input,
.conactForm .row100 textarea {
  position: relative;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  background: transparent;
  width: 100%;
  padding: 10px 0;
  outline: none;
  font-size: 18px;
  font-weight: 300;
  margin: 20px 0;
  resize: none;
}
.conactForm .row100 textarea {
  height: 100px;
}
.conactForm .row100 input::placeholder,
.conactForm .row100 textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.conactForm .row100 input[type="submit"] {
  background: #fff;
  color: #000;
  max-width: 100px;
  margin: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: 500;
}

@media (max-width: 992px) {
  .sec {
    padding: 100px 50px 50px 50px;
  }
  h3 {
    font-size: 36px;
    line-height: 1em;
  }

  .conactForm .row100 {
    flex-direction: column;
  }
  .conactForm .row100 .inputBx50,
  .conactForm .row100 .inputBx100 {
    width: 100%;
    margin: 0;
  }
}
</style>