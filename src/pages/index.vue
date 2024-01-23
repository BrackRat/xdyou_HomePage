<template>
  <header>
    <div class="flex justify-center lg:justify-start">
        <a href="/">
          <img class="rounded-lg hover:rounded" src="../assets/Icon-App-iTunes.png" width="60px" alt="XDYou LOGO"/>
        </a>
    </div>
  </header>
  <section class="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex lg:space-x-52 lg:mt-2 md:px-8">
    <div class="space-y-4 flex-1 sm:text-center lg:text-left">
      <h1 class="text-gray-800 dark:text-slate-300 font-bold text-4xl xl:text-4xl" @click="toggleItems">
        <span>
          <transition name="fade" mode="out-in">
            <span v-if="switchTag" key="grade" class="animated-item">
              <span class="bg-[#E3E8F4] rounded-lg px-2 text-[#344F77]"> {{ tag_next }} </span>
            </span>
            <span v-else key="schedule" class="animated-item">
              <span class="bg-[#E3E8F4] rounded-lg px-2 text-[#344F77]"> {{ tag_now }} </span>
            </span>
          </transition>
          用 XDYou
        </span>
      </h1>
      <p class="text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
        课程表，打卡次数，查成绩··· 全在 XDYou！
      </p>

      <div
          class="flex flex-col space-y-2 py-4 justify-center justify-items-center lg:justify-start lg:space-x-4 lg:justify-items-center lg:flex-row lg:space-y-0">
        <a href="https://apps.apple.com/cn/app/xdyou/id6461723688"
           class="flex px-4 items-center bg-slate-200 text-slate-800 hover:text-slate-900 rounded-full cursor-pointer hover:bg-slate-300 transition-all lg:px-4 py-3">
          <span class="mgc_apple_fill text-2xl mx-2 "/>
          <span class="text-lg mx-2 ">iOS 下载</span>
        </a>
        <a href="https://f-droid.org/zh_Hans/packages/io.github.benderblog.traintime_pda/"
           class="flex px-4 items-center bg-green-200 text-slate-800 hover:text-slate-900 rounded-full cursor-pointer hover:bg-green-300 transition-all lg:px-4 py-3">
          <span class="mgc_android_2_fill text-2xl mx-2"/>
          <span class="text-lg mx-2">Android 下载</span>
        </a>

      </div>

    </div>

    <div class="relative mt-12 lg:mt-0 ">
      <img src="../assets/screenshot.webp"
           class="block dark:hidden rounded-[32px] h-[700px] object-cover shadow-xl"
           alt="screenshot"/>
      <img src="../assets/darkScreenshot.png"
           class="hidden dark:block rounded-[32px] h-[700px] object-cover shadow-xl"
           alt="screenshot"/>
      <div
          class="inline-block absolute bg-[#344F77] rounded-full rotate-[35deg] max-sm:invisible  left-[-40%]  lg:left-[-50%]"
          style="width: 100vw;max-width: 200%;height: 10%;top:25%;z-index: -1;"></div>
      <div
          class="inline-block absolute bg-[#E2E8F0] rounded-full -rotate-[35deg] max-sm:invisible  left-[-40%]  lg:left-[-50%]"
          style="width: 100vw;max-width: 200%;height: 10%;top:70%;z-index: -2;"></div>
    </div>

  </section>

  <footer class="pt-5 mt-20 py-10 border-t">
    <div class="flex space-x-4 text-gray-500 dark:text-gray-400 justify-center lg:justify-start">
      <a v-for="item in footers" class="cursor-pointer hover:text-slate-900 dark:hover:text-slate-600" :href="item.href">
        {{item.text}}
      </a>

    </div>
    <div class="flex flex-wrap dark:text-gray-200 justify-center lg:justify-start mt-5 md:text-center space-x-2">
      <div>© 2023-2024</div>
      <a class="cursor-pointer hover:text-slate-400 dark:hover:text-slate-600 underline" href="./supporters">All Supporters.</a>
      <div> All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

// Tag Switch
const switchTag = ref(false);

const tags = ['查成绩', '看课表', '查打卡', '算均分', '交电费', '搜图书', '找教室'];
const tag_index = ref(1);

const tag_now = computed(() => {
  return tags[tag_index.value - 1];
});

const tag_next = computed(() => {
  return tags[tag_index.value];
});

function toggleItems() {
  if (switchTag.value === true) {
    tag_index.value = (tag_index.value + 2) % tags.length;
    if (tag_index.value === 0) {
      tag_index.value = 1
    }
  }
  switchTag.value = !switchTag.value;
}

onMounted(() => {
  setInterval(toggleItems, 2000);
});

// Footer
const footers = [
  {
    "text": "用户许可",
    "href": "./eula"
  },
  {
    "text": "交流群",
    "href": "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-kVQ_lqmRGvD9s8CsnwF3jCungP81SRE&noverify=0&group_code=902652582"
  },
  {
    "text": "源码",
    "href": "https://github.com/BenderBlog/traintime_pda"
  }
]

</script>

<style scoped>
.animated-item {
  position: relative;
  display: inline-block;
}

.fade-enter-active,
.fade-leave-active {
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s, width 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: translateY(0px);
}
</style>