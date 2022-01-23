<template>
  <section class="banner" id="home">
    <h2>Welcome to my<br /><span>portfolio</span></h2>
    <a class="arrow" href="#about">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: black;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner h2 {
  color: #fff;
  font-size: 90px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1em;
  font-weight: 600;
}
.banner h2 span {
  color: #06a8ff;
  text-shadow: 1px 1px 10px rgb(4, 23, 129), 1px 1px 10px #064d74;
}

@media (max-width: 992px) {
  .banner {
    background-position: center;
  }
  .banner h2 {
    font-size: 60px;
  }
  .arrow {
    margin-bottom: 7% !important;
  }
}

@media (max-width: 320px) {
  .banner h2 {
    font-size: 55px;
  }
}

@media (max-width: 280px) {
  .banner h2 {
    font-size: 48px;
  }
}

.arrow {
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;
  transform: translate(-50%, -50%);
}
.arrow span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #06a8ff;
  border-right: 5px solid #06a8ff;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}
.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>