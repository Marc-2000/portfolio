<template>
  <section class="sec about" id="skills">
    <div class="content">
      <div class="mxw800p">
        <h3>My skills</h3>
        <p>
          Like I mentioned before, I am studying to become a Software Engineer.
          This means that I practice my code writing on backend and frontend
          work. I also learned a lot from my specialisation on Cyber Security.
          Hover over the cards to find out more information!
        </p>
      </div>

      <div class="container">
        <div class="skillcard">
          <div class="face front">
            <img src="~/assets/images/research.png" alt="" />
            <h3>Research</h3>
          </div>
          <div class="face back">
            <p>
              As a bachelor of ICT, it was required to be able to conduct
              scientific research for all created software products.
              <br /><br />
              I have conducted research on multiple occasions based of a useful
              research framework called The DOT Framework.
            </p>
          </div>
        </div>
        <div class="skillcard">
          <div class="face front">
            <img src="~/assets/images/design.png" alt="" />
            <h3>Design</h3>
          </div>
          <div class="face back">
            <p>
              All of the frontend work that I created during my study involved
              HTML, CSS, Javascript and Typescript. <br /><br />
              I have worked with different frameworks like Angular, React and
              Nuxt.js
            </p>
          </div>
        </div>
        <div class="skillcard">
          <div class="face front">
            <img src="~/assets/images/code.png" alt="" />
            <h3>Coding</h3>
          </div>
          <div class="face back">
            <p>
              From the beginning of my study I have developed software using C#.
              <br /><br />
              I previously worked with Windows Forms, ASP .NET framework and
              last but not least the .NET Core framework.
            </p>
          </div>
        </div>
        <div class="skillcard">
          <div class="face front">
            <img src="~/assets/images/hosting.png" alt="" />
            <h3>Hosting</h3>
          </div>
          <div class="face back">
            <p>
              One of the Cyber Security projects was to learn how you could
              safely host your own projects. <br /><br />
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  padding-bottom: 20px;
  max-width: 1500px;
}

.skillcard {
  width: 300px;
  height: 450px;
  position: relative;
  background: #fff;
  border-radius: 15px;
}
.skillcard .face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.skillcard .face.front {
  background: #06a8ff;
  box-shadow: 1px 1px 10px #041781, 1px 1px 10px #064d74;
  z-index: 100;
  transition: all 0.225s ease-in-out;
  overflow: hidden;
}
.skillcard .face.front img {
  width: 100px;
  height: 100px;
  margin: 0;
  transition: all 0.225s ease-in-out;
}
.skillcard .face.front h3 {
  margin-top: 10px;
  font-size: 2.5em;
  font-weight: 600;
  transform: scale(1);
  transition: all 0.225s ease-in-out;
}
.skillcard .face.back {
  padding-top: 25%;
}
.skillcard .face.back p {
  margin: 0;
  max-width: 85%;
  transform: scale(0);
  opacity: 0;
  transition: all 0.25s ease-in-out;
  text-align: center;
}
.skillcard:hover .front {
  top: 30px;
  left: calc(50% - 40px);
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
.skillcard:hover .front img {
  width: 50px;
  height: 50px;
  margin-top: 64px;
}
.skillcard:hover .front h3 {
  transform: scale(0);
}
.skillcard:hover .back p {
  transform: scale(1);
  opacity: 1;
}

.sec {
  background: black;
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
  margin-bottom: 2em;
}

.mxw800p > p,
.mxw800p > h3 {
  color: #fff;
}

h3 {
  font-size: 40px;
  font-weight: 200;
  margin-bottom: 10px;
}

@media (max-width: 992px) {
  .mxw800p {
    padding: 100px 50px 0px 50px;
  }
  .sec {
    padding: inherit;
  }
  h3 {
    font-size: 36px;
    line-height: 1em;
  }
}
</style>
