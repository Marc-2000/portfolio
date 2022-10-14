<template>
  <section class="sec" id="experience">
    <div class="content">
      <div class="mxw800p">
        <h3>Experience</h3>
        <p>
          I have gained experience by making my own projects, doing internships
          and participating in group assignments for some companies that
          collaborate with our school. Click the items down below to learn more.
        </p>
      </div>
      <div class="container">
        <a href="" class="experiencecard">
          <div class="cardimage">
            <img src="~/assets/images/firstfocus.png" alt="" />
          </div>
          <div class="cardheader">
            <h5>Internship at FirstFocus</h5>
          </div>
          <div class="cardtext">
            <p>
              In semester 5 I was an intern at the company FirstFocus. My
              assignment was to implement a new logging system for the company.
              I learned a lot about everything that involves custom software,
              automation and hosting.
            </p>
          </div>
        </a>
        <a href="" class="experiencecard">
          <div class="cardimage">
            <img src="~/assets/images/images.jpg" alt="" />
          </div>
          <div class="cardheader">
            <h5>Cyber Hosting project</h5>
          </div>
          <div class="cardtext">
            <p>
              
            </p>
          </div>
        </a>
        <a href="" class="experiencecard">
          <div class="cardimage">
            <img src="~/assets/images/firstfocus.png" alt="" />
          </div>
          <div class="cardheader">
            <h5>Webshop Taxmodel</h5>
          </div>
          <div class="cardtext">
            <p>
              
            </p>
          </div>
        </a>
        <a href="" class="experiencecard">
          <div class="cardimage">
            <img src="~/assets/images/firstfocus.png" alt="" />
          </div>
          <div class="cardheader">
            <h5>Marcplaats</h5>
          </div>
          <div class="cardtext">
            <p>
              
            </p>
          </div>
        </a>
        <a href="" class="experiencecard">
          <div class="cardimage">
            <img src="~/assets/images/firstfocus.png" alt="" />
          </div>
          <div class="cardheader">
            <h5>PlanR</h5>
          </div>
          <div class="cardtext">
            <p>
              
            </p>
          </div>
        </a>
        <a href="" class="experiencecard">
          <div class="cardimage">
            <img src="~/assets/images/firstfocus.png" alt="" />
          </div>
          <div class="cardheader">
            <h5>Webshop Bon Voyage</h5>
          </div>
          <div class="cardtext">
            <p>
              
            </p>
          </div>
        </a>
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

.experiencecard {
  border: 1px solid gray;
  max-width: 400px;
  border-radius: 2px;
  text-decoration: none;
}

.cardimage img {
  width: 100%;
}

.cardheader {
  margin-top: 5%;
}

.cardtext {
  margin-top: 5%;
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
