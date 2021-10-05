<template>
  <section class="sec about" id="skills">
    <div class="content">
      <div class="mxw800p">
        <h3>My skills</h3>
        <p>
          Like I mentioned before, I am studying to become a Software Engineer.
          This means that I practice my code writing on backend and frontend
          work. I also learned a lot from my specialisation on Cyber Security.
        </p>
      </div>
      <div class="services">
        <div class="box">
          <div class="content">
            <h2>Design</h2>
            <p>
              All of the frontend work that I created during my study involved
              HTML, CSS, Javascript and Typescript.
              <br /><br />
              I have worked with different frameworks like Angular, React and
              Nuxt.js
            </p>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <h2>Software Development</h2>
            <p>
              From the beginning of my study I have developed software using C#.
              <br /><br />
              I previously worked with Windows Forms, ASP .NET framework and
              last but not least the .NET Core framework.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <h2>Self-Hosting</h2>
            <p>
              One of the Cyber Security projects was to learn how you could
              safely host your own projects.
              <br /><br />
              It turned out to be very useful, because the website that you are
              visiting right now is hosted on my own Raspberry Pi at home!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
