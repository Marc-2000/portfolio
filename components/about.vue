<template>
  <section class="sec about" id="about">
    <div class="content">
      <img class="profilepic" src="~/assets/images/profilepicture.webp" alt="" />
      <div class="mxw800p">
        <h3>Who am I?</h3>
        <p>
          As you might have figured out from the URL, my name is Marc den
          Hollander and I am 21 years old. I am studying Information and
          Communication Technology (ICT/IT) at Fontys in Tilburg at the moment,
          to become a Software Engineer!
          <br /><br />
          This is my personal website that I use to practice hosting and
          coding. It is still a work-in-progress. Curious?
        </p>
        <a href="#skills" class="btn">Learn more</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profilepic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center right;
  margin-bottom: 5%;
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

.btn {
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid #000;
  text-decoration: none;
  background: #000;
  color: #fff;
}

@media (max-width: 992px) {
  .sec {
    padding: 100px 50px 50px 50px;
  }
  h3 {
    font-size: 36px;
    line-height: 1em;
  }
}
</style>
