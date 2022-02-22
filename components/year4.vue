<template>
  <section class="sec">
    <div class="content">
      <div class="mxw800p">
        <h3 class="underline">Year 4</h3>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
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

.underline{
    display:inline-block;
    border-bottom:1px solid black;
    padding-bottom:1px;
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
