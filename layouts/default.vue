<template>
  <div>
    <Header />
    <Home />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: #000;
}
html {
  scroll-behavior: smooth;
}

.swal2-shown {
  padding-right: 0 !important;
}
</style>