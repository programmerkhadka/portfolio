<script setup>
const technologies = [
  "Html",
  "Css",
  "Javascript",
  "Typescript",
  "Php",
  "Laravel",
  "Tailwind",
  "Boostrap",
  "Jquery",
  "Mysql",
  "Pgsql",
  "Oracle",
  "Java",
  "Android",
  "XML",
];
</script>

<template>
  <div class="bg-[#89A29D]">
    <section class="w-full px-4">
      <div class="mx-auto max-w-[1440px] pt-28 pb-4">
        <div class="grid items-center grid-cols-1 gap-y-4 md:grid-cols-2">
          <div
            class="flex flex-col items-center text-xl md:items-start md:text-3xl gap-y-3"
          >
            <p class="font-semibold text-white font-nato_sans">
              <span>Hi,</span><span> My name is</span>
            </p>
            <p class="font-bold text-white">Rituparna Khadka</p>
            <p class="font-bold text-white">And I'm a Web developer</p>
            <div class="flex gap-x-3">
              <NuxtLink
                to="https://www.facebook.com/rituparna.khadka/"
                target="blank"
              >
                <SvgFacebookIcon class="w-8 fill-brand" />
              </NuxtLink>
              <NuxtLink to="https://github.com/programmerkhadka" target="blank">
                <SvgGitHubIcon class="w-8 fill-brand" />
              </NuxtLink>
            </div>
            <div class="mt-4">
              <NuxtLink
                to="https://drive.google.com/file/d/1UqNR1nm6R3Vn6UbztUR6j8HWJEwSS0xp/view?usp=sharing"
                target="blank"
                class="inline-block px-5 py-3 text-white border-2 border-transparent cursor-pointer bg-brand hover:border-red-400 hover:border-2"
                >Download CV</NuxtLink
              >
            </div>
          </div>
          <div class="flex place-content-center lg:justify-end">
            <img
              src="/img/profile.jpg"
              class="border-2 rounded-full w-72 border-brand"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full px-4 mt-16">
      <div class="mx-auto max-w-[1440px] md:pt-16 md:pb-4">
        <div class="grid items-center md:grid-cols-2">
          <div class="hidden md:flex md:items-center">
            <img
              src="/img/profile2.jpg"
              class="border-2 rounded-xl w-72 border-brand"
            />
          </div>
          <div class="flex flex-col gap-y-3">
            <p class="text-3xl font-bold text-center text-white md:text-left">
              About Me
            </p>
            <p class="text-xl font-medium text-white font-nato_sans">
              Passionate Software Developer | Problem Solver | Technology
              Enthusiast
            </p>
            <p class="text-xl font-normal text-white font-nato_sans">
              Hello! I'm a dedicated and innovative software developer with 4
              years of experience in crafting high-quality software solutions.
              My journey in technology started with a fascination for how things
              work, leading me to pursue a career in software development where
              I could combine creativity with logical problem-solving.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full px-4">
      <div class="mx-auto max-w-[1440px] pt-16 pb-4">
        <h2 class="text-3xl font-bold text-center text-white">Technologies</h2>
        <div
          class="flex flex-wrap justify-center gap-3 mt-16 text-white md:px-28"
        >
          <span
            class="px-4 py-3 border-2 shadow rounded-xl border-brand"
            v-for="(tech, index) in technologies"
            :key="index"
            >{{ tech }}</span
          >
        </div>
      </div>
    </section>
    <section class="w-full px-4">
      <div class="mx-auto max-w-[1440px] pt-16 pb-4">
        <h2 class="text-3xl font-bold text-center text-white">My Services</h2>
        <div
          class="grid justify-center mt-16 text-white gap-y-6 md:flex gap-x-10"
        >
          <div
            class="flex flex-col items-center w-48 h-48 border place-content-center"
          >
            <SvgCodeIcon class="w-16 fill-brand" />
            <p class="py-4">Web Development</p>
          </div>
          <div
            class="flex flex-col items-center w-48 h-48 border place-content-center"
          >
            <SvgPaleteIcon class="w-16 fill-brand" />
            <p class="py-4">UI/UX designing</p>
          </div>
          <div
            class="flex flex-col items-center w-48 h-48 border place-content-center"
          >
            <SvgAppIcon class="w-16 fill-brand" />
            <p class="py-4">App development</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
