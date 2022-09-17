<template>
  <div>
    <div class="container space-y-4">
      <h1 class="text-2xl font-bold">Ben kim miyim?</h1>
      <p>
        Ben Zeynel KOZAK. İstanbul'da yaşıyorum. 25 yaşında olup Selçuk
        Üniversitesi İşletme bölümünden mezun oldum. Yazılıma olan ilgimden
        dolayı Anadolu Üniversitesi Bilgisayar Programcılığı bölümüne başladım.
      </p>
      <h4 class="font-bold">Hangi dil ve kütüphaneler üzerine çalışıyorum?</h4>
      <p>
        Bir süre .NET ile backend geliştirdikten sonra frontend tarafına geçiş
        yaptım. Vue ve React kütüphaneleri ile geliştirmelerimi yapmaktayım.
        Çoğumuz gibi Hello World! diyerek başladığım bu yolcukta öğrendiğim
        bilgileri paylaştığım bu siteyi de Vue kütüphanesini temel alan NuxtJS
        kütüphanesiyle geliştirdim.
      </p>
      <h4 class="font-bold">İletişime geçmek mi istiyorsun?</h4>
      <Social />
    </div>
    <div class="max-w-4xl mx-auto mt-10">
      <img
        src="/profile.jpg"
        alt="i-am"
        class="profile-image rounded-lg scale-95 hover:scale-100 duration-500"
      />
    </div>
  </div>
</template>

<script>
import Social from '../components/Social'
export default {
  components: { Social },
}
</script>

<style scoped>
.profile-image {
  filter: grayscale(100);
}

.profile-image:hover {
  filter: grayscale(0);
}
</style>
