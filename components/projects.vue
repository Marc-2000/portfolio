<template>
  <section class="sec about" id="experience">
    <div class="content">
      <div class="mxw800p">
        <h3>Projects</h3>
        <p>
          I have gained experience by making projects and participating in group
          assignments for some companies that collaborate with our school. In
          semester 5 I was an intern at the company FirstFocus. My assignment
          was to implement a new logging system for the company. I learned a lot
          about everything that involves custom software, automation and
          hosting. If you want to learn more about my projects in the past, click the button down below!
        </p>
        <a href="/projects" class="btn">Projects</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn {
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid #000;
  text-decoration: none;
  background: #000;
  color: #fff;
}

.sec {
  background: #fff;
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

p {
  position: relative;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 1px;
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

.services {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 100%;
  margin-top: 40px;
}
.services .box {
  width: 350px;
  margin: 0 auto;
  margin-top: 25px;
  background: #fff;
  padding: 20px;
  width: 300px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}
.services .box h2 {
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
}

@media (max-width: 992px) {
  .sec {
    padding: 100px 50px 50px 50px;
  }
  h3 {
    font-size: 36px;
    line-height: 1em;
  }
  .services {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
  .services .box {
    width: 100%;
  }
}
</style>
