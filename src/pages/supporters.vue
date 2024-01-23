<template>
  <div class="flex-wrap bg-slate-100 dark:bg-slate-800 rounded-lg p-8 text-start w-100vh max-w-[800px]">
    <p class="xdyouh1 pb-8"> Supporters </p>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
      <div class="flex max-w-[320px] max-h-[320px] px-4 py-4" v-for="supporter in supporters">
        <img
            :src="supporter.avatar"
            class="w-[78px] h-[78px] rounded-full mr-4"
            alt=""
        />
        <div class="flex flex-col space-y-4 justify-center">
          <p class="text-xl text-[#344F77] dark:text-slate-300 font-bold">{{ supporter.name }}</p>
          <p class="text-gray-400">{{supporter.desc}}</p>
        </div>
      </div>
    </div>

    <footer class="mt-8 pt-8 border-t">
      <img src="../assets/Credit.jpg" alt="credit" />
    </footer>
  </div>


</template>

<script setup>
const supporters = [
  {
    'avatar':"https://avatars.githubusercontent.com/u/14026321?v=4",
    'name':"BenderBlog",
    'desc':"Developer"
  },
  {
    'avatar':"https://avatars.githubusercontent.com/u/35328547?v=4",
    'name':"BrackRat",
    'desc':"Designer"
  },
  {
    'avatar':"https://avatars.githubusercontent.com/u/30972246?v=4",
    'name':"Xiue233",
    'desc':"安卓小部件"
  },
  {
    'avatar':"https://avatars.githubusercontent.com/u/47203031?v=4",
    'name':"stalomeow",
    'desc':"异步数据加载"
  },
  {
    'avatar':"https://avatars.githubusercontent.com/u/107785251?v=4",
    'name':"BellssGit",
    'desc':"成绩状态修复"
  },
  {
    'avatar':"https://avatars.githubusercontent.com/u/25598632?v=4",
    'name':"chitao1234",
    'desc':"滑块验证码修复"
  },
  {
    'avatar':"https://avatars.githubusercontent.com/u/87163986?v=4",
    'name':"ZCWzy",
    'desc':"丁香电费修复"
  },
]
</script>

<style scoped>

</style>