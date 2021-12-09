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
        <div class="card">
          <div class="face face1">
            <div class="content">
              <p class="cardstyle">
                All of the frontend work that I created during my study involved
                HTML, CSS, Javascript and Typescript. <br /><br />
                I have worked with different frameworks like Angular, React and
                Nuxt.js
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>Design</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <p class="cardstyle">
                From the beginning of my study I have developed software using
                C#. <br /><br />
                I previously worked with Windows Forms, ASP .NET framework and
                last but not least the .NET Core framework.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>Coding</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <p class="cardstyle">
                One of the Cyber Security projects was to learn how you could
                safely host your own projects. <br /><br />
                It turned out to be very useful, because the website that you
                are visiting right now is hosted on my own Raspberry Pi at home!
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>Self-Hosting</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

p {
  position: relative;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.box {
  margin: 40px;
  background-color: rgb(68, 68, 68); /* Needed for IEs */

  -moz-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  -webkit-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);

  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30);
  -ms-filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)";
  zoom: 1;
}

.mxw800p {
  max-width: 800px;
  margin: 0 auto;
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

.services {
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 35px;
  margin: 0 auto;
  padding: 40px 0;
}
.services .card {
  position: relative;
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background: #000;
  border-radius: 15px;
  border: #fff 2px solid;
}
.services .card .face {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.services .card .face.face1 {
  box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.services .card .face.face1 h2 {
  margin: 0;
  padding: 0;
}
.services .card .face.face1 .cardstyle {
  background-color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.services .card .face.face2 {
  transition: 0.5s;
}
.services .card .face.face2 h2 {
  margin: 0;
  padding: 0;
  font-size: 2em;
  color: black;
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
.services .card:hover .face.face2 {
  height: 60px;
}
.services .card:hover .face.face2 h2 {
  font-size: 2em;
}
.services .card .face.face2 {
  background-color: white;
  border-radius: 10px;
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
