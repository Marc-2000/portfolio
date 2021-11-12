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
      </div>
      <div class="contactForm">
        <form @submit.prevent="sendEmail">
          <div class="row100">
            <div class="inputBx50">
              <input type="text" v-model="name" name="name" placeholder="Full Name" />
            </div>
            <div class="inputBx50">
              <input type="email" v-model="user_email" name="user_email" placeholder="Email Address" />
            </div>
          </div>
          <div class="row100">
            <div class="inputBx100">
              <textarea name="message" v-model="message" placeholder="Message"></textarea>
            </div>
          </div>
          <div class="row100">
            <div class="inputBx100">
              <input id="submit" type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      user_email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      if (this.name == '' || this.user_email == '' || this.message == ''){
        alert("Please fill in the required information")
      }
      else{
        emailjs.sendForm('service_3z0isq8', 'template_kuje89h', e.target, 'user_b0CvysnkdcqYgLtSWvWzV', {
          name: this.name,
          user_mail: this.user_email,
          message: this.message
        })

      // Reset form field
      this.name = ''
      this.user_email = ''
      this.message = ''
      
      alert("Success! I'll respond as soon as possible")
      document.getElementById("submit").disabled = "true";
      }
    },
  }
}
</script>


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
.contactForm {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
}
.contactForm form {
  width: 100%;
}
.contactForm .row100 {
  display: flex;
  width: 100%;
}
.contactForm .row100 .inputBx50 {
  width: 50%;
  margin: 0 20px;
}
.contactForm .row100 .inputBx100 {
  width: 100%;
  margin: 0 20px;
}
.contactForm .row100 input,
.contactForm .row100 textarea {
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
.contactForm .row100 textarea {
  height: 100px;
}
.contactForm .row100 input::placeholder,
.contactForm .row100 textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.contactForm .row100 input[type="submit"] {
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

  .contactForm .row100 {
    flex-direction: column;
  }
  .contactForm .row100 .inputBx50,
  .contactForm .row100 .inputBx100 {
    width: 100%;
    margin: 0;
  }
}
</style>