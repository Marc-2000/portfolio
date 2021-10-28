<template>
  <header id="header" v-bind:class="{ active: isToggled, sticky : scrollPosition > 850 }">
    <a class="navbar-brand" href="#"
      ><img class="logo logo1" src="../assets/images/logo_large_white.png" alt="" />
      <img class="logo logo2" src="../assets/images/logo_large_black.png" alt="" />
    </a>

    <ul>
      <li><a href="#home" @click="toggle()">Home</a></li>
      <li><a href="#about" @click="toggle()">About me</a></li>
      <li><a href="#skills" @click="toggle()">My Skills</a></li>
      <li><a href="#contact" @click="toggle()">Contact</a></li>
    </ul>
    <div class="toggle" @click="toggle()"></div>
  </header>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  data() {
    return {
      isToggled: false,
      scrollPosition: null,
    };
  },
  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
  z-index: 100000;
}
header.sticky {
  padding: 5px 100px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
header .logo {
  max-height: 2em;
  max-width: 2em;
}
header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  position: relative;
  list-style: none;
}
header ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 300;
  transition: 0.3s;
}

header.sticky .logo,
header.sticky ul li a {
  color: #000;
}

.toggle {
  display: none;
}

.logo2{
  display: none;
}

@media (max-width: 992px) {
  .logo1{
    display: none;
  }

  .logo2{
    display: block;
  }

  .toggle {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .toggle:before {
    content: "";
    position: absolute;
    top: 4px;
    width: 100%;
    height: 2px;
    background: #000;
    z-index: 1;
    box-shadow: 0 10px 0 #000;
    transition: 0.4s;
  }
  .toggle:after {
    content: "";
    position: absolute;
    bottom: 4px;
    width: 100%;
    height: 2px;
    background: #000;
    z-index: 1;
    transition: 0.4s;
  }
  header.active .toggle:before {
    top: 14px;
    transform: rotate(45deg);
    box-shadow: 0 0 0 #000;
  }
  header.active .toggle:after {
    bottom: 14px;
    transform: rotate(-45deg);
  }

  header.active .toggle:before {
    top: 14px;
    transform: rotate(45deg);
    box-shadow: 0 0 0 #000;
  }
  header.active .toggle:after {
    bottom: 14px;
    transform: rotate(-45deg);
  }

  header ul {
    position: absolute;
    top: 54px;
    left: 0;
    width: 100%;
    height: calc(100vh);
    padding: 50px 100px;
    text-align: center;
    overflow: auto;
    visibility: hidden;
    opacity: 0;
    /*transform: translateY(-100%);*/
  }
  header.active ul {
    display: block;
    background: #fff;
    visibility: visible;
    opacity: 1;
    /*transform: translateY(0);*/
  }
  header.active ul li a {
    margin: 5px 0;
    font-size: 24px;
  }
  header,
  header.sticky {
    padding: 5px 50px;
    background: #fff;
  }
  header .logo,
  header ul li a {
    color: #000;
  }
}
</style>
